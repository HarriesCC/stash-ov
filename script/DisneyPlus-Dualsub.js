"use strict";

var url = $request.url;
var headers = $request.headers;
var body = $response.body;
var second_lang = "English [CC]"; // Customized second language (fill language name of subtitles list)

var subtitles_urls_data = $persistentStore.read();
if (!subtitles_urls_data) subtitles_urls_data = "null";
var host = url.match(/https.+media.dssott.com\/ps01\/disney\/[^\/]+/)[0];

if (url.match(/\.m3u8/)) {
  var patt = new RegExp("TYPE=SUBTITLES.+NAME=\"".concat(second_lang.replace(/(\[|\]|\(|\))/g, "\\$1"), ".+URI=\"([^\"]+)"));
  var subtitles_data_url = body.match(patt);

  if (subtitles_data_url) {
    var subtitles_data_link = "".concat(host, "/").concat(subtitles_data_url[1]);
    var options = {
      url: subtitles_data_link,
      headers: headers
    };
    $httpClient.get(options, function (error, response, data) {
      var subtitles_data = data.match(/.+-MAIN.+\.vtt/g);
      if (subtitles_data) $persistentStore.write(subtitles_data.join("\n"));

      if (subtitles_data_link.match(/.+-MAIN.+/) && data.match(/,\nseg.+\.vtt/g)) {
        subtitles_data = data.match(/,\nseg.+\.vtt/g);
        var url_path = subtitles_data_link.match(/\/r\/(.+)/)[1].replace(/\w+\.m3u8/, "");
        $persistentStore.write(subtitles_data.join("\n").replace(/,\n/g, url_path));
      }

      $done({
        body: body
      });
    });
  } else {
    $persistentStore.write("null");
    $done({
      body: body
    });
  }
}

if (url.match(/\.vtt/) && subtitles_urls_data != "null") {
  subtitles_urls_data = subtitles_urls_data.match(/.+\.vtt/g);
  if (subtitles_urls_data) merge_subtitles(subtitles_urls_data);
} else {
  $done({
    body: body
  });
}

async function merge_subtitles(subtitles_urls_data) {
  var result = [];
  var subtitles_index = parseInt(url.match(/(\d+)\.vtt/)[1]);
  var start = subtitles_index - 3 < 0 ? 0 : subtitles_index - 3;
  subtitles_urls_data = subtitles_urls_data.slice(start, subtitles_index + 4);

  for (var k in subtitles_urls_data) {
    var _options = {
      url: "".concat(host, "/r/").concat(subtitles_urls_data[k]),
      headers: headers
    };
    result.push(await query_subtitles(_options));
  }

  var data = result.join("\n\n");
  var timeline = body.match(/\d+:\d\d:\d\d.\d\d\d -->.+line.+,end/g);

  for (var i in timeline) {
    var patt1 = new RegExp("(".concat(timeline[i], "(\\n.+)+)"));
    var time = timeline[i].match(/^\d+:\d\d:\d\d/)[0];
    var patt2 = new RegExp("".concat(time, ".\\d\\d\\d -->.+line.+,end(\\n.+)+"));
    var dialogue = data.match(patt2);

    if (dialogue) {
      body = body.replace(patt1, "$1\n".concat(dialogue[0].replace(/\d+:\d\d:\d\d.\d\d\d -->.+line.+,end\n/, "").replace(/\n/, " ")));
    }
  }

  $done({
    body: body
  });
}

function query_subtitles(options) {
  return new Promise(function (resolve, reject) {
    $httpClient.get(options, function (error, response, data) {
      if (error) return reject('Error');
      resolve(data);
    });
  });
}
