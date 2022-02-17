"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var _excluded = ["url"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e9) { throw _e9; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e10) { didErr = true; err = _e10; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
JD | TB Price comparison
by Small
date 2021-12-07
Thanks @yichahucha
修改32行Surge语法，兼容淘宝比价

QX:
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

^http://.+/amdc/mobileDispatch url script-request-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

Surge4:
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

http-request ^http://.+/amdc/mobileDispatch requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js

Surge & QX MITM = api.m.jd.com, trade-acs.m.taobao.com
*/
var ScriptName = "京东|淘宝 比价";
var $ = new Env(ScriptName);
var ScriptIdentifier = "jd_tb_price";
var ScriptVersion = 8;
var ScriptUrl = "https://service.2ti.st/QuanX/Script/".concat(ScriptIdentifier);
var res = $request;
var resp = null;

try {
  resp = $response;
} catch (err) {
  console.log(err);
}

;
var Status = {
  Enable: 1,
  Disable: 2
};
var Type = {
  Init: 1,
  Default: 2,
  HandleFun: 3
};
var MatchType = {
  None: 1,
  RegExp: 2,
  Contains: 3,
  FullMatch: 4
};
var Jobs = [//JD
{
  name: "serverConfig",
  status: Status.Enable,
  type: Type.HandleFun,
  matchType: MatchType.Contains,
  keyword: "serverConfig",
  fun: handleServerConfig
}, {
  name: "wareBusiness",
  status: Status.Enable,
  type: Type.HandleFun,
  matchType: MatchType.Contains,
  keyword: "wareBusiness",
  fun: handleWareBusiness
}, {
  name: "basicConfig",
  status: Status.Enable,
  type: Type.HandleFun,
  matchType: MatchType.Contains,
  keyword: "basicConfig",
  fun: handleBasicConfig
}, //TB
{
  name: "mobileDispatch",
  status: Status.Enable,
  type: Type.HandleFun,
  matchType: MatchType.Contains,
  keyword: "/amdc/mobileDispatch",
  fun: handleMobileDispatch
}, {
  name: "getdetail",
  status: Status.Enable,
  type: Type.HandleFun,
  matchType: MatchType.Contains,
  keyword: "/gw/mtop.taobao.detail.getdetail",
  fun: handleGetdetail
}];
initScript(); // Handle JD API ServerConfig

function handleServerConfig() {
  $.log("Start Handle ServerConfig Job");
  var body = JSON.parse(resp.body);
  delete body.serverConfig.httpdns;
  delete body.serverConfig.dnsvip;
  delete body.serverConfig.dnsvip_v6;
  $.log("Success Handle ServerConfig Job");
  $.done({
    body: JSON.stringify(body)
  });
} // Handle JD API WareBusiness


function handleWareBusiness() {
  $.log("Start Handle WareBusiness Job");
  var body = JSON.parse(resp.body);
  var floors = body.floors;
  var commodity_info = floors[floors.length - 1];
  var skuId = commodity_info.data.wareInfo.skuId;
  $.log("skuId:" + skuId);
  handleRequest(skuId, "JD", function (text) {
    var obj = {
      "bId": "eCustom_flo_199",
      "cf": {
        "bgc": "#ffffff",
        "spl": "empty"
      },
      "data": {
        "ad": {
          "adword": text,
          "textColor": "#fe0000",
          "color": "#f23030",
          "text-align": "justify",
          "word-break": "break-all",
          "newALContent": true,
          "hasFold": true,
          "class": "com.jd.app.server.warecoresoa.domain.AdWordInfo.AdWordInfo",
          "adLinkContent": "",
          "adLink": ""
        }
      },
      "mId": "bpAdword",
      "refId": "eAdword_0000000028",
      "sortId": 13
    };
    var bestIndex = 0;

    for (var index = 0; index < floors.length; index++) {
      var element = floors[index];

      if (element.mId === obj.mId) {
        bestIndex = index + 1;
        break;
      } else {
        if (element.sortId > obj.sortId) {
          bestIndex = index;
          break;
        }
      }
    }

    floors.insert(bestIndex, obj);
    $.done({
      body: JSON.stringify(body)
    });
  });
} // Handle JD API BasicConfig


function handleBasicConfig() {
  $.log("Start Handle BaseConfig");
  var body = JSON.parse(resp.body);
  var JDHttpToolKit = body.data.JDHttpToolKit;

  if (JDHttpToolKit) {
    delete body.data.JDHttpToolKit.httpdns;
    delete body.data.JDHttpToolKit.dnsvipV6;
  }

  $.done({
    body: JSON.stringify(body)
  });
} // Handle TB API MobileDispatch


function handleMobileDispatch() {
  $.log("Start Handle MobileDispatch");

  if (isUndefined(resp) || isNull(resp)) {
    $.log("MobileDispatch handle request");
    var headers = res.headers;
    var body = res.body;

    if (headers["User-Agent"].indexOf("%E6%B7%98%E5%AE%9D") != -1) {
      var json = Qs2Json(body);
      var domain = json.domain.split(" ");
      var i = domain.length;

      while (i--) {
        var block = "trade-acs.m.taobao.com";
        var element = domain[i];

        if (element == block) {
          domain.splice(i, 1);
        }
      }

      json.domain = domain.join(" ");
      body = Json2Qs(json);
    }

    $.done({
      body: body
    });
  } else {
    $.log("MobileDispatch handle response");
    var base64 = new Base64();
    var _body = resp.body;
    var obj = JSON.parse(base64.decode(_body));
    var dns = obj.dns;

    if (dns && dns.length > 0) {
      var _i = dns.length;

      while (_i--) {
        var _element = dns[_i];
        var host = "trade-acs.m.taobao.com";

        if (_element.host == host) {
          _element.ips = [];
        }
      }
    }

    _body = base64.encode(JSON.stringify(obj));
    $.done({
      body: _body
    });
  }
} // Handle TB API Getdetail


function handleGetdetail() {
  $.log("Start Handle Getdetail");
  var body = JSON.parse(resp.body);
  var skuId = body.data.item.itemId;
  $.log("skuId:" + skuId);
  handleRequest(skuId, "TB", function (text) {
    if (body.data.apiStack) {
      var apiStack = body.data.apiStack[0];
      var value = JSON.parse(apiStack.value);
      var data = null;

      if (value.global) {
        data = value.global.data;
      } else {
        data = value;
      } //Title


      try {
        var guaranteeBarVO = data.componentsVO.guaranteeBarVO;
        var textList = guaranteeBarVO.guaranteeItems[0].textList;
        textList.unshift("价格详情");
      } catch (e) {
        $.logErr(e, "handleGetdetail handle title error");
      } //Body


      try {
        var tradeConsumerProtection = data.tradeConsumerProtection;
        var consumerProtection = data.consumerProtection;

        if (tradeConsumerProtection) {
          setTBItems(tradeConsumerProtection.tradeConsumerService.service.items, createTBItem("价格详情", text));

          var _iterator = _createForOfIteratorHelper(text.split("\n")),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var t = _step.value;
              if (t === "") continue;
              pushTBItems(tradeConsumerProtection.tradeConsumerService.nonService.items, createTBItem(t));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        setTBItems(consumerProtection.items, createTBItem("价格详情", text));
        if (consumerProtection.serviceProtection) setTBItems(consumerProtection.serviceProtection.basicService.services, createTBItem("价格详情", [text]));
      } catch (e) {
        $.logErr(e, "handleGetdetail handle body error");
      }

      apiStack.value = JSON.stringify(value);
    }

    $.done({
      body: JSON.stringify(body)
    });
  });
}

function pushTBItems(items, item) {
  items.push(item);
}

function setTBItems(items, item) {
  items.unshift(item);
}

function createTBItem(title, desc) {
  return {
    title: title,
    name: title,
    type: 0,
    icon: "https://s2.ax1x.com/2020/02/16/3STeIJ.png",
    desc: desc
  };
}

function createTBCard(title, text) {
  return {
    bgIcon: "https://img.alicdn.com/imgextra/i4/O1CN011N7vad1qNigfsKeBP_!!6000000005484-2-tps-710-60.png?getAvatar=avatar",
    icon: "https://s2.ax1x.com/2020/02/16/3STeIJ.png",
    text: text,
    textColor: "#FF3000",
    title: title
  };
}

function handleRequest(id, type, callback, errorCallback) {
  request_history_price(id, type, function (data) {
    try {
      var text = handleBijiago(data);
      callback(text);
    } catch (e) {
      $.logErr(e, "request_history_price Callback Error");
      $.done({
        body: JSON.stringify(JSON.parse(resp.body))
      });
    }
  });
}

function handleBijiago(data) {
  if (!data.success) return data.msg;
  var obj = data.data;
  var store = {};

  if (obj['store'].length == 0) {
    return "";
  }

  if (obj['store'].length == 1) {
    store = obj['store'][0];
  } else if (obj['store'].length > 1) {
    store = obj['store'][1];
  }

  var tips = "无tips";

  if (obj.hasOwnProperty("analysis")) {
    if (obj['analysis'].hasOwnProperty("tip")) {
      tips = obj['analysis']['tip'];
    }
  }

  var historyObj = {
    tips: {
      "type": "text",
      "title": "¥",
      "text": tips
    },
    range: {
      "type": "text",
      "title": "价格区间",
      "text": store.hasOwnProperty("price_range") ? store['price_range'] : ""
    },
    now: {
      "type": "price",
      "title": "当前价",
      "price": Math.round(parseFloat(store['last_price']) / 100),
      "date": "-"
    },
    highest: {
      "type": "price",
      "title": "最高价",
      "price": Math.round(parseFloat(store['highest'])),
      "date": time2str(store['max_stamp'] * 1000)
    },
    lowest: {
      "type": "price",
      "title": "最低价",
      "price": Math.round(parseFloat(store['lowest'])),
      "date": time2str(parseInt(store['min_stamp']) * 1000)
    },
    day30: {
      "type": "price",
      "title": "三十天",
      "price": -1,
      "date": "-"
    },
    _618: {
      "type": "price",
      "title": "六一八",
      "price": -1,
      "date": "-"
    },
    _1111: {
      "type": "price",
      "title": "双十一",
      "price": -1,
      "date": "-"
    }
  };
  var beginDayTime = new Date(store['short_day_line_begin_time']);
  var dayNum = getDaysBetween(beginDayTime, new Date());
  var days = store['short_day_line'];

  for (var i = 0; i < 30 - dayNum && i < days.length; ++i) {
    var price = days[i];

    if (i == 0) {
      historyObj.day30['price'] = Math.round(price);
      historyObj.day30['date'] = time2str(dateAddDays(beginDayTime, i));
    }

    if (price < historyObj.day30['price']) {
      historyObj.day30['price'] = Math.round(price);
      historyObj.day30['date'] = time2str(dateAddDays(beginDayTime, i));
    }
  }

  var _iterator2 = _createForOfIteratorHelper(obj['analysis']['promo_days']),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var promo_day = _step2.value;
      var show = promo_day['show'];

      var _price = Math.round(promo_day['price']);

      var date = promo_day['date'];

      if (promo_day['show'].indexOf("618价格") != -1) {
        historyObj._618['price'] = _price;
        historyObj._618['date'] = date;
      } else if (promo_day['show'].indexOf("双11价格") != -1) {
        historyObj._1111['price'] = _price;
        historyObj._1111['date'] = date;
      } else historyObj.set(show, {
        "type": "price",
        "title": show,
        "price": _price,
        "date": date
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var result = '';

  for (var key in historyObj) {
    var nowItem = historyObj.now;
    var item = historyObj[key];

    if (item.type == "price") {
      var diff = priceDiff(nowItem.price, item.price);
      result += "".concat(space(item.title, 3 + 4)).concat(space(item.price, 10)).concat(space(item.date, 14)).concat(diff, "\n");
    } else if (item.type == "text") {
      result += "".concat(item.title, " ").concat(item.text, "\n");
    }
  }

  return result;
}

function getBijiagoCookie(callback) {
  var cookie = get_tag("cookie");

  if (is_tag_exp("cookie") && cookie != "") {
    callback(cookie);
    return;
  }

  $.log('get bijiago cookie');
  var option = {
    url: "https://browser.bijiago.com/extension?ac=bdextPermanent&format=json&version=".concat(new Date().getTime()),
    headers: {
      'Connection': 'keep-alive',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      'Accept': '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.9'
    },
    timeout: 2000
  };
  $.get(option, function (err, rsp, data) {
    if (err) {
      $.log("Error:".concat(err));
      callback("");
      return;
    }

    var cookie = "";
    var cookie_raw = rsp["headers"]["Set-Cookie"];
    cookie_raw.split("path=/,").forEach(function (item) {
      if (item.indexOf("gwdang_permanent") != -1) {
        cookie += item.split(";")[0] + ";";
      }
    });
    set_tag_exp("cookie", cookie, 1000 * 60 * 60 * 12);
    callback(cookie);
  });
}

function request_history_price(id, type, callback) {
  var item_url = "";

  if (type === "JD") {
    item_url = "https://item.jd.com/".concat(id, ".html");
  } else if (type === "TB") {
    item_url = "https://detail.tmall.com/item.htm?id=".concat(id);
  }

  getBijiagoCookie(function (cookie) {
    var option = {
      url: "https://browser.bijiago.com/extension/price_towards?url=".concat(encodeURIComponent(item_url), "&format=jsonp&union=union_bijiago&from_device=bijiago&version=").concat(new Date().getTime()),
      headers: {
        'Connection': 'keep-alive',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Dest': 'script',
        'Referer': item_url,
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cookie': cookie
      },
      timeout: 2000
    };
    $.get(option, function (err, rsp, data) {
      var result = {
        success: true,
        msg: "Success",
        data: JSON.parse(data)
      };

      if (err) {
        result.success = false;
        result.msg = "获取价格信息失败";
        result.data = err;
      }

      if (!result.success) {
        $.log("Error:".concat(result));
        $.msg("Error", result.msg, err);
      }

      callback(result);
    });
  });
}

function Qs2Json(url) {
  var search = url.substring(url.lastIndexOf("?") + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

function Json2Qs(json) {
  var temp = [];

  for (var k in json) {
    temp.push(k + "=" + json[k]);
  }

  return temp.join("&");
}

function time2str() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +new Date();
  return new Date(date).toJSON().substr(0, 19).replace('T', ' ').split(' ')[0].replace(/\./g, '-');
}

function getDaysBetween(startDate, endDate) {
  if (startDate > endDate) {
    return 0;
  }

  if (startDate == endDate) {
    return 1;
  }

  var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
  return Math.round(days);
}

function dateAddDays(date, dayCount) {
  return new Date((date / 1000 + 86400 * dayCount) * 1000);
}

function dayDiff(date) {
  return parseInt((new Date() - new Date(date)) / (1000 * 60 * 60 * 24) + '');
}

function priceDiff(now, old) {
  if (typeof old !== 'number') return '-';
  var diff = old - now;
  if (diff === 0) return '-';
  return diff > 0 ? "\u2193".concat(Math.round(diff)) : "\u2191".concat(Math.round(Math.abs(diff)));
}

function space(str, len) {
  var blank = "";

  for (var i = 0; i < len - String(str).length; i++) {
    blank += " ";
  }

  return str + blank;
}

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function Base64() {
  // private property
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; // public method for encoding

  this.encode = function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = _utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
    }

    return output;
  }; // public method for decoding


  this.decode = function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }

      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = _utf8_decode(output);
    return output;
  }; // private method for UTF-8 encoding


  _utf8_encode = function _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  }; // private method for UTF-8 decoding


  _utf8_decode = function _utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  };
}

function initScript() {
  try {
    checkVersion(handleJobs);
  } catch (e) {
    $.logErr(e, "initScript Error");
    $.done();
  }
}

function handleJobs() {
  try {
    var url = res.url;
    var enable_jobs = []; //Handle enable job

    var _iterator3 = _createForOfIteratorHelper(Jobs),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _job = _step3.value;

        if (_job.status === Status.Enable) {
          enable_jobs.push(_job);
        }
      } //Init None

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var _iterator4 = _createForOfIteratorHelper(Jobs),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _job2 = _step4.value;
        if (_job2.type !== Type.Init) continue;
        if (_job2.matchType !== MatchType.None) continue;
        handleJob(_job2);
      } //Init Match

    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var _iterator5 = _createForOfIteratorHelper(Jobs),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _job3 = _step5.value;
        if (_job3.type !== Type.Init) continue;
        if (_job3.matchType === MatchType.None) continue;

        if (isMatch(_job3, url)) {
          handleJob(_job3);
        }
      } //Handle Fun

    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    var isMatchHandleFun = false;

    var _iterator6 = _createForOfIteratorHelper(Jobs),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _job4 = _step6.value;
        if (_job4.type !== Type.HandleFun) continue;
        if (_job4.matchType === MatchType.None) continue;

        if (isMatch(_job4, url)) {
          isMatchHandleFun = true;
          handleJob(_job4);
        }
      } //Handle Default

    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    if (!isMatchHandleFun) {
      var _iterator7 = _createForOfIteratorHelper(Jobs),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var job = _step7.value;
          if (job.type !== Type.Default) continue;

          if (isMatch(job, url)) {
            handleJob(job);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  } catch (e) {
    $.logErr(e, "handleJobs Error");
    $.done();
  }
}

function isMatch(job, url) {
  if (job.matchType === MatchType.None) {
    return true;
  } else if (job.matchType === MatchType.RegExp) {
    return url.search(job.keyword) !== -1;
  } else if (job.matchType === MatchType.Contains) {
    return url.indexOf(job.keyword) !== -1;
  } else if (job.matchType === MatchType.FullMatch) {
    return job.keyword === url;
  }

  return false;
}

function handleJob(job) {
  try {
    $.log("[Handle Job:".concat(job.name, "] Start Handle Job"));
    job.fun();
    $.log("[Handle Job:".concat(job.name, "] Success Handle Job"));
  } catch (e) {
    $.logErr(e, "[Handle Job:".concat(job.name, "] Handle Job Error"));
    $.done();
  }
}

function is_tag_exp(k) {
  var nowTime = new Date().getTime();
  var kCacheExpirationTime = "time_".concat(ScriptIdentifier, "_").concat(k, "_cacheExpirationTime");
  var vCacheExpirationTime = $.getdata(kCacheExpirationTime);

  if (isNull(vCacheExpirationTime)) {
    return false;
  }

  vCacheExpirationTime = parseInt(vCacheExpirationTime);
  return vCacheExpirationTime > nowTime;
}

function get_tag(k) {
  return $.getdata(k);
}

function set_tag_exp(k, v, t) {
  $.setdata(v, k);
  var kCacheExpirationTime = "time_".concat(ScriptIdentifier, "_").concat(k, "_cacheExpirationTime");
  var vCacheExpirationTime = new Date().getTime() + t;
  $.setdata(String(vCacheExpirationTime), kCacheExpirationTime);
}

function checkVersion() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var checkVersionKey = "time_".concat(ScriptIdentifier, "_checkVersion_lastTime");
  var nowTime = new Date().getTime();
  var isRun = true;
  var lastTime = $.getdata(checkVersionKey);

  if (lastTime) {
    lastTime = parseInt(lastTime);
    $.log("check Version lastTime:" + lastTime);

    if ((nowTime - lastTime) / 1 / 24 / 60 / 60 / 1000 > 1) {
      isRun = true;
    } else {
      isRun = false;
    }
  } else {
    isRun = true;
  }

  if (isRun) {
    $.log("check Version run");
    $.setdata(String(nowTime), checkVersionKey);
    $.get({
      url: "".concat(ScriptUrl, "/config.json"),
      timeout: 3000
    }, function (err, resp, data) {
      if (err) {
        $.log("check Version Error:" + err);
        return;
      }

      try {
        var obj = JSON.parse(data);
        if (ScriptVersion !== obj.version) $.msg("\u811A\u672C:".concat(ScriptName, " \u53D1\u73B0\u65B0\u7248\u672C"), "\u7248\u672C\u53F7\uFF1A".concat(obj.version), "\u66F4\u65B0\u5185\u5BB9\uFF1A".concat(obj.msg));
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        callback();
      }
    });
  } else {
    callback();
  }
}

function genUUID() {
  var s = [];
  var hexDigits = "0123456789abcdef";

  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }

  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010

  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  return uuid;
}

function isUndefined(obj) {
  return typeof obj === "undefined";
}

function isNull(obj) {
  return obj === null;
}

function Env(t, e) {
  var s = /*#__PURE__*/function () {
    function s(t) {
      _classCallCheck(this, s);

      this.env = t;
    }

    _createClass(s, [{
      key: "send",
      value: function send(t) {
        var _this = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
        t = "string" == typeof t ? {
          url: t
        } : t;
        var _s = this.get;
        return "POST" === e && (_s = this.post), new Promise(function (e, i) {
          _s.call(_this, t, function (t, _s2, r) {
            t ? i(t) : e(_s2);
          });
        });
      }
    }, {
      key: "get",
      value: function get(t) {
        return this.send.call(this.env, t);
      }
    }, {
      key: "post",
      value: function post(t) {
        return this.send.call(this.env, t, "POST");
      }
    }]);

    return s;
  }();

  return new ( /*#__PURE__*/function () {
    function _class(t, e) {
      _classCallCheck(this, _class);

      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", "\uD83D\uDD14".concat(this.name, ", \u5F00\u59CB!"));
    }

    _createClass(_class, [{
      key: "isNode",
      value: function isNode() {
        return "undefined" != typeof module && !!module.exports;
      }
    }, {
      key: "isQuanX",
      value: function isQuanX() {
        return "undefined" != typeof $task;
      }
    }, {
      key: "isSurge",
      value: function isSurge() {
        return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
      }
    }, {
      key: "isLoon",
      value: function isLoon() {
        return "undefined" != typeof $loon;
      }
    }, {
      key: "isShadowrocket",
      value: function isShadowrocket() {
        return "undefined" != typeof $rocket;
      }
    }, {
      key: "toObj",
      value: function toObj(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        try {
          return JSON.parse(t);
        } catch {
          return e;
        }
      }
    }, {
      key: "toStr",
      value: function toStr(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        try {
          return JSON.stringify(t);
        } catch {
          return e;
        }
      }
    }, {
      key: "getjson",
      value: function getjson(t, e) {
        var s = e;
        var i = this.getdata(t);
        if (i) try {
          s = JSON.parse(this.getdata(t));
        } catch {}
        return s;
      }
    }, {
      key: "setjson",
      value: function setjson(t, e) {
        try {
          return this.setdata(JSON.stringify(t), e);
        } catch {
          return !1;
        }
      }
    }, {
      key: "getScript",
      value: function getScript(t) {
        var _this2 = this;

        return new Promise(function (e) {
          _this2.get({
            url: t
          }, function (t, s, i) {
            return e(i);
          });
        });
      }
    }, {
      key: "runScript",
      value: function runScript(t, e) {
        var _this3 = this;

        return new Promise(function (s) {
          var i = _this3.getdata("@chavy_boxjs_userCfgs.httpapi");

          i = i ? i.replace(/\n/g, "").trim() : i;

          var r = _this3.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");

          r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;

          var _i$split = i.split("@"),
              _i$split2 = _slicedToArray(_i$split, 2),
              o = _i$split2[0],
              h = _i$split2[1],
              a = {
            url: "http://".concat(h, "/v1/scripting/evaluate"),
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };

          _this3.post(a, function (t, e, i) {
            return s(i);
          });
        }).catch(function (t) {
          return _this3.logErr(t);
        });
      }
    }, {
      key: "loaddata",
      value: function loaddata() {
        if (!this.isNode()) return {};
        {
          this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");

          var _t = this.path.resolve(this.dataFile),
              _e2 = this.path.resolve(process.cwd(), this.dataFile),
              _s3 = this.fs.existsSync(_t),
              i = !_s3 && this.fs.existsSync(_e2);

          if (!_s3 && !i) return {};
          {
            var _i2 = _s3 ? _t : _e2;

            try {
              return JSON.parse(this.fs.readFileSync(_i2));
            } catch (t) {
              return {};
            }
          }
        }
      }
    }, {
      key: "writedata",
      value: function writedata() {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");

          var _t2 = this.path.resolve(this.dataFile),
              _e3 = this.path.resolve(process.cwd(), this.dataFile),
              _s4 = this.fs.existsSync(_t2),
              i = !_s4 && this.fs.existsSync(_e3),
              r = JSON.stringify(this.data);

          _s4 ? this.fs.writeFileSync(_t2, r) : i ? this.fs.writeFileSync(_e3, r) : this.fs.writeFileSync(_t2, r);
        }
      }
    }, {
      key: "lodash_get",
      value: function lodash_get(t, e, s) {
        var i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
        var r = t;

        var _iterator8 = _createForOfIteratorHelper(i),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t3 = _step8.value;
            if (r = Object(r)[_t3], void 0 === r) return s;
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        return r;
      }
    }, {
      key: "lodash_set",
      value: function lodash_set(t, e, s) {
        return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce(function (t, s, i) {
          return Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {};
        }, t)[e[e.length - 1]] = s, t);
      }
    }, {
      key: "getdata",
      value: function getdata(t) {
        var e = this.getval(t);

        if (/^@/.test(t)) {
          var _$exec = /^@(.*?)\.(.*?)$/.exec(t),
              _$exec2 = _slicedToArray(_$exec, 3),
              _s5 = _$exec2[1],
              i = _$exec2[2],
              r = _s5 ? this.getval(_s5) : "";

          if (r) try {
            var _t4 = JSON.parse(r);

            e = _t4 ? this.lodash_get(_t4, i, "") : e;
          } catch (t) {
            e = "";
          }
        }

        return e;
      }
    }, {
      key: "setdata",
      value: function setdata(t, e) {
        var s = !1;

        if (/^@/.test(e)) {
          var _$exec3 = /^@(.*?)\.(.*?)$/.exec(e),
              _$exec4 = _slicedToArray(_$exec3, 3),
              i = _$exec4[1],
              r = _$exec4[2],
              o = this.getval(i),
              h = i ? "null" === o ? null : o || "{}" : "{}";

          try {
            var _e4 = JSON.parse(h);

            this.lodash_set(_e4, r, t), s = this.setval(JSON.stringify(_e4), i);
          } catch (e) {
            var _o = {};
            this.lodash_set(_o, r, t), s = this.setval(JSON.stringify(_o), i);
          }
        } else s = this.setval(t, e);

        return s;
      }
    }, {
      key: "getval",
      value: function getval(t) {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
      }
    }, {
      key: "setval",
      value: function setval(t, e) {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
      }
    }, {
      key: "initGotEnv",
      value: function initGotEnv(t) {
        this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
      }
    }, {
      key: "get",
      value: function get(t) {
        var _this4 = this;

        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        })), $httpClient.get(t, function (t, s, i) {
          !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
        })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        })), $task.fetch(t).then(function (t) {
          var s = t.statusCode,
              i = t.statusCode,
              r = t.headers,
              o = t.body;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, function (t) {
          return e(t);
        })) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", function (t, e) {
          try {
            if (t.headers["set-cookie"]) {
              var _s6 = t.headers["set-cookie"].map(_this4.cktough.Cookie.parse).toString();

              _s6 && _this4.ckjar.setCookieSync(_s6, null), e.cookieJar = _this4.ckjar;
            }
          } catch (t) {
            _this4.logErr(t);
          }
        }).then(function (t) {
          var s = t.statusCode,
              i = t.statusCode,
              r = t.headers,
              o = t.body;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, function (t) {
          var s = t.message,
              i = t.response;
          e(s, i, i && i.body);
        }));
      }
    }, {
      key: "post",
      value: function post(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var s = t.method ? t.method.toLocaleLowerCase() : "post";
        if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        })), $httpClient[s](t, function (t, s, i) {
          !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
        });else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        })), $task.fetch(t).then(function (t) {
          var s = t.statusCode,
              i = t.statusCode,
              r = t.headers,
              o = t.body;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, function (t) {
          return e(t);
        });else if (this.isNode()) {
          this.initGotEnv(t);

          var i = t.url,
              r = _objectWithoutProperties(t, _excluded);

          this.got[s](i, r).then(function (t) {
            var s = t.statusCode,
                i = t.statusCode,
                r = t.headers,
                o = t.body;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, function (t) {
            var s = t.message,
                i = t.response;
            e(s, i, i && i.body);
          });
        }
      }
    }, {
      key: "time",
      value: function time(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var s = e ? new Date(e) : new Date();
        var i = {
          "M+": s.getMonth() + 1,
          "d+": s.getDate(),
          "H+": s.getHours(),
          "m+": s.getMinutes(),
          "s+": s.getSeconds(),
          "q+": Math.floor((s.getMonth() + 3) / 3),
          S: s.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));

        for (var _e5 in i) {
          new RegExp("(" + _e5 + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[_e5] : ("00" + i[_e5]).substr(("" + i[_e5]).length)));
        }

        return t;
      }
    }, {
      key: "msg",
      value: function msg() {
        var _this5 = this;

        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t;
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var r = arguments.length > 3 ? arguments[3] : undefined;

        var o = function o(t) {
          if (!t) return t;
          if ("string" == typeof t) return _this5.isLoon() ? t : _this5.isQuanX() ? {
            "open-url": t
          } : _this5.isSurge() ? {
            url: t
          } : void 0;

          if ("object" == _typeof(t)) {
            if (_this5.isLoon()) {
              var _e6 = t.openUrl || t.url || t["open-url"],
                  _s7 = t.mediaUrl || t["media-url"];

              return {
                openUrl: _e6,
                mediaUrl: _s7
              };
            }

            if (_this5.isQuanX()) {
              var _e7 = t["open-url"] || t.url || t.openUrl,
                  _s8 = t["media-url"] || t.mediaUrl;

              return {
                "open-url": _e7,
                "media-url": _s8
              };
            }

            if (_this5.isSurge()) {
              var _e8 = t.url || t.openUrl || t["open-url"];

              return {
                url: _e8
              };
            }
          }
        };

        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
          var _t5 = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
          _t5.push(e), s && _t5.push(s), i && _t5.push(i), console.log(_t5.join("\n")), this.logs = this.logs.concat(_t5);
        }
      }
    }, {
      key: "log",
      value: function log() {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        t.length > 0 && (this.logs = [].concat(_toConsumableArray(this.logs), t)), console.log(t.join(this.logSeparator));
      }
    }, {
      key: "logErr",
      value: function logErr(t, e) {
        var s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        s ? this.log("", "\u2757\uFE0F".concat(this.name, ", \u9519\u8BEF!"), t.stack) : this.log("", "\u2757\uFE0F".concat(this.name, ", \u9519\u8BEF!"), t);
      }
    }, {
      key: "wait",
      value: function wait(t) {
        return new Promise(function (e) {
          return setTimeout(e, t);
        });
      }
    }, {
      key: "done",
      value: function done() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = new Date().getTime(),
            s = (e - this.startTime) / 1e3;
        this.log("", "\uD83D\uDD14".concat(this.name, ", \u7ED3\u675F! \uD83D\uDD5B ").concat(s, " \u79D2")), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
      }
    }]);

    return _class;
  }())(t, e);
}
