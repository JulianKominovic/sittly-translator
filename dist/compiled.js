"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = {default:window.React};

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconContext.js
var import_react = {default:window.React};
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
__name(Tree2Element, "Tree2Element");
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
__name(GenIcon, "GenIcon");
function IconBase(props) {
  var elem = /* @__PURE__ */ __name(function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  }, "elem");
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
__name(IconBase, "IconBase");

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/bs/index.esm.js
function BsClipboard(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" } }, { "tag": "path", "attr": { "d": "M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" } }] })(props);
}
__name(BsClipboard, "BsClipboard");

// src/forked-google-translate-api/sM.ts
function sM(a) {
  let e = [];
  let f = 0;
  for (let g = 0; g < a.length; g++) {
    let l = a.charCodeAt(g);
    128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : (55296 == (l & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = l >> 18 | 240, e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224, e[f++] = l >> 6 & 63 | 128), e[f++] = l & 63 | 128);
  }
  let a_ = 0;
  for (f = 0; f < e.length; f++) {
    a_ += e[f];
    a_ = xr(a_, "+-a^+6");
  }
  a_ = xr(a_, "+-3^+b+-f");
  a_ ^= 0;
  0 > a_ && (a_ = (a_ & 2147483647) + 2147483648);
  a_ %= 1e6;
  return a_.toString() + "." + a_.toString();
}
__name(sM, "sM");
var xr = /* @__PURE__ */ __name(function(a, b) {
  for (let c = 0; c < b.length - 2; c += 3) {
    let d = b.charAt(c + 2);
    d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
    d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
    a = "+" == b.charAt(c) ? a + d : a ^ d;
  }
  return a;
}, "xr");

// src/forked-google-translate-api/generateRequestUrl.ts
var defaultTranslateOptions = {
  client: "gtx",
  from: "auto",
  to: "en",
  hl: "en",
  tld: "com"
};
function generateRequestUrl(text, options) {
  const translateOptions = { ...defaultTranslateOptions, ...options };
  const queryParams = {
    client: translateOptions.client,
    sl: translateOptions.from,
    tl: translateOptions.to,
    hl: translateOptions.hl,
    ie: "UTF-8",
    oe: "UTF-8",
    otf: "1",
    ssel: "0",
    tsel: "0",
    kc: "7",
    q: text,
    tk: sM(text)
  };
  const searchParams = new URLSearchParams(queryParams);
  ["at", "bd", "ex", "ld", "md", "qca", "rw", "rm", "ss", "t"].forEach(
    (l) => searchParams.append("dt", l)
  );
  return `https://translate.google.${translateOptions.tld}/translate_a/single?${searchParams}`;
}
__name(generateRequestUrl, "generateRequestUrl");

// src/forked-google-translate-api/languages.ts
var langEmojis = {
  auto: "\u{1F30D} Automatic",
  af: "\u{1F1FF}\u{1F1E6} Afrikaans",
  sq: "\u{1F1E6}\u{1F1F1} Albanian",
  am: "\u{1F1EA}\u{1F1F9} Amharic",
  ar: "\u{1F1F8}\u{1F1E6} Arabic",
  hy: "\u{1F1E6}\u{1F1F2} Armenian",
  az: "\u{1F1E6}\u{1F1FF} Azerbaijani",
  eu: "\u{1F1EA}\u{1F1F8} Basque",
  be: "\u{1F1E7}\u{1F1FE} Belarusian",
  bn: "\u{1F1E7}\u{1F1E9} Bengali",
  bs: "\u{1F1E7}\u{1F1E6} Bosnian",
  bg: "\u{1F1E7}\u{1F1EC} Bulgarian",
  ca: "\u{1F1EA}\u{1F1F8} Catalan",
  ceb: "\u{1F1F5}\u{1F1ED} Cebuano",
  ny: "\u{1F1F2}\u{1F1FC} Chichewa",
  zh: "\u{1F1E8}\u{1F1F3} Chinese Simplified",
  "zh-cn": "\u{1F1E8}\u{1F1F3} Chinese Simplified",
  "zh-tw": "\u{1F1F9}\u{1F1FC} Chinese Traditional",
  co: "\u{1F1EB}\u{1F1F7} Corsican",
  hr: "\u{1F1ED}\u{1F1F7} Croatian",
  cs: "\u{1F1E8}\u{1F1FF} Czech",
  da: "\u{1F1E9}\u{1F1F0} Danish",
  nl: "\u{1F1F3}\u{1F1F1} Dutch",
  en: "\u{1F1EC}\u{1F1E7} English",
  eo: "\u{1F30D} Esperanto",
  et: "\u{1F1EA}\u{1F1EA} Estonian",
  tl: "\u{1F1F5}\u{1F1ED} Filipino",
  fi: "\u{1F1EB}\u{1F1EE} Finnish",
  fr: "\u{1F1EB}\u{1F1F7} French",
  fy: "\u{1F1F3}\u{1F1F1} Frisian",
  gl: "\u{1F1EA}\u{1F1F8} Galician",
  ka: "\u{1F1EC}\u{1F1EA} Georgian",
  de: "\u{1F1E9}\u{1F1EA} German",
  el: "\u{1F1EC}\u{1F1F7} Greek",
  gu: "\u{1F1EE}\u{1F1F3} Gujarati",
  ht: "\u{1F1ED}\u{1F1F9} Haitian Creole",
  ha: "\u{1F1F3}\u{1F1EC} Hausa",
  haw: "\u{1F334} Hawaiian",
  he: "\u{1F1EE}\u{1F1F1} Hebrew",
  iw: "\u{1F1EE}\u{1F1F1} Hebrew",
  hi: "\u{1F1EE}\u{1F1F3} Hindi",
  hmn: "\u{1F30D} Hmong",
  hu: "\u{1F1ED}\u{1F1FA} Hungarian",
  is: "\u{1F1EE}\u{1F1F8} Icelandic",
  ig: "\u{1F1F3}\u{1F1EC} Igbo",
  id: "\u{1F1EE}\u{1F1E9} Indonesian",
  ga: "\u{1F1EE}\u{1F1EA} Irish",
  it: "\u{1F1EE}\u{1F1F9} Italian",
  ja: "\u{1F1EF}\u{1F1F5} Japanese",
  jw: "\u{1F1EE}\u{1F1E9} Javanese",
  kn: "\u{1F1EE}\u{1F1F3} Kannada",
  kk: "\u{1F1F0}\u{1F1FF} Kazakh",
  km: "\u{1F1F0}\u{1F1ED} Khmer",
  rw: "\u{1F1F7}\u{1F1FC} Kinyarwanda",
  ko: "\u{1F1F0}\u{1F1F7} Korean",
  ku: "\u{1F1F0}\u{1F1F7} Kurdish (Kurmanji)",
  ky: "\u{1F1F0}\u{1F1EC} Kyrgyz",
  lo: "\u{1F1F1}\u{1F1E6} Lao",
  la: "\u{1F1EE}\u{1F1F9} Latin",
  lv: "\u{1F1F1}\u{1F1FB} Latvian",
  lt: "\u{1F1F1}\u{1F1F9} Lithuanian",
  lb: "\u{1F1F1}\u{1F1FA} Luxembourgish",
  mk: "\u{1F1F2}\u{1F1F0} Macedonian",
  mg: "\u{1F1F2}\u{1F1EC} Malagasy",
  ms: "\u{1F1F2}\u{1F1FE} Malay",
  ml: "\u{1F1EE}\u{1F1F3} Malayalam",
  mt: "\u{1F1F2}\u{1F1F9} Maltese",
  mi: "\u{1F1F3}\u{1F1FF} Maori",
  mr: "\u{1F1EE}\u{1F1F3} Marathi",
  mn: "\u{1F1F2}\u{1F1F3} Mongolian",
  my: "\u{1F1F2}\u{1F1F2} Myanmar (Burmese)",
  ne: "\u{1F1F3}\u{1F1F5} Nepali",
  no: "\u{1F1F3}\u{1F1F4} Norwegian",
  or: "\u{1F1EE}\u{1F1F3} Odia (Oriya)",
  ps: "\u{1F1E6}\u{1F1EB} Pashto",
  fa: "\u{1F1EE}\u{1F1F7} Persian",
  pl: "\u{1F1F5}\u{1F1F1} Polish",
  pt: "\u{1F1F5}\u{1F1F9} Portuguese",
  pa: "\u{1F1EE}\u{1F1F3} Punjabi",
  ro: "\u{1F1F7}\u{1F1F4} Romanian",
  ru: "\u{1F1F7}\u{1F1FA} Russian",
  sm: "\u{1F1FC}\u{1F1F8} Samoan",
  gd: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F} Scots Gaelic",
  sr: "\u{1F1F7}\u{1F1F8} Serbian",
  st: "\u{1F1F1}\u{1F1F8} Sesotho",
  sn: "\u{1F1FF}\u{1F1FC} Shona",
  sd: "\u{1F1F5}\u{1F1F0} Sindhi",
  si: "\u{1F1F1}\u{1F1F0} Sinhala",
  sk: "\u{1F1F8}\u{1F1F0} Slovak",
  sl: "\u{1F1F8}\u{1F1EE} Slovenian",
  so: "\u{1F1F8}\u{1F1F4} Somali",
  es: "\u{1F1EA}\u{1F1F8} Spanish",
  su: "\u{1F1EE}\u{1F1E9} Sundanese",
  sw: "\u{1F1F9}\u{1F1FF} Swahili",
  sv: "\u{1F1F8}\u{1F1EA} Swedish",
  tg: "\u{1F1F9}\u{1F1EF} Tajik",
  ta: "\u{1F1EE}\u{1F1F3} Tamil",
  tt: "\u{1F1F7}\u{1F1FA} Tatar",
  te: "\u{1F1EE}\u{1F1F3} Telugu",
  th: "\u{1F1F9}\u{1F1ED} Thai",
  tr: "\u{1F1F9}\u{1F1F7} Turkish",
  tk: "\u{1F1F9}\u{1F1F2} Turkmen",
  uk: "\u{1F1FA}\u{1F1E6} Ukrainian",
  ur: "\u{1F1F5}\u{1F1F0} Urdu",
  ug: "\u{1F1E8}\u{1F1F3} Uyghur",
  uz: "\u{1F1FA}\u{1F1FF} Uzbek",
  vi: "\u{1F1FB}\u{1F1F3} Vietnamese",
  cy: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F} Welsh",
  xh: "\u{1F1FF}\u{1F1E6} Xhosa",
  yi: "\u{1F1EE}\u{1F1F1} Yiddish",
  yo: "\u{1F1F3}\u{1F1EC} Yoruba",
  zu: "\u{1F1FF}\u{1F1E6} Zulu"
};

// src/forked-google-translate-api/normaliseResponse.ts
function normaliseResponse(body, raw = false) {
  const result = {
    text: "",
    pronunciation: "",
    from: {
      language: {
        didYouMean: false,
        iso: ""
      },
      text: {
        autoCorrected: false,
        value: "",
        didYouMean: false
      }
    }
  };
  body[0].forEach((obj) => {
    if (obj[0]) {
      result.text += obj[0];
    } else if (obj[2]) {
      result.pronunciation += obj[2];
    }
  });
  if (body[2] === body[8][0][0]) {
    result.from.language.iso = body[2];
  } else {
    result.from.language.didYouMean = true;
    result.from.language.iso = body[8][0][0];
  }
  if (body[7] && body[7][0]) {
    let str = body[7][0];
    str = str.replace(/<b><i>/g, "[");
    str = str.replace(/<\/i><\/b>/g, "]");
    result.from.text.value = str;
    if (body[7][5] === true) {
      result.from.text.autoCorrected = true;
    } else {
      result.from.text.didYouMean = true;
    }
  }
  if (raw) {
    result.raw = body;
  }
  return result;
}
__name(normaliseResponse, "normaliseResponse");

// src/forked-google-translate-api/translate.ts
var powerfetch = window.SittlyDevtools.api.network.powerfulFetch;
var ResponseType = window.SittlyDevtools.api.network.ResponseType;
var CORSUrl = "";
async function translate(text, options = {}) {
  const translateUrl = generateRequestUrl(text, options);
  const body = await powerfetch(`${CORSUrl}${translateUrl}`, {
    method: "GET",
    responseType: ResponseType.JSON,
    headers: {
      origin: "https://translate.google.com"
    }
  });
  return normaliseResponse(body.data, options.raw);
}
__name(translate, "translate");

// src/index.tsx
var { register, api, hooks } = window.SittlyDevtools;
var pasteToCurrentWindow = api.clipboard.pasteToCurrentWindow;
var notifyAsyncOperationStatus = api.indicators.notifyAsyncOperationStatus;
var copyToClipboard = api.clipboard.copyToClipboard;
var getSelectedText = api.shell.getSelectedText;
var useServices = hooks.useServices;
async function getTranslation(text, lang) {
  const res = await translate(text, { to: lang }).catch((err) => {
    console.log(err);
    errorNotification();
    return {
      text: ""
    };
  });
  return res.text;
}
__name(getTranslation, "getTranslation");
var languages = Object.entries(langEmojis).slice(1);
function startNotification() {
  notifyAsyncOperationStatus({
    title: "Translating...",
    description: "Please wait while we translate your text",
    status: "IN_PROGRESS"
  });
}
__name(startNotification, "startNotification");
function successNotification() {
  notifyAsyncOperationStatus({
    title: "Translated",
    description: "Your text has been translated",
    status: "SUCCESS"
  });
}
__name(successNotification, "successNotification");
function errorNotification() {
  notifyAsyncOperationStatus({
    title: "Error",
    description: "An error has occurred",
    status: "ERROR"
  });
}
__name(errorNotification, "errorNotification");
var items = /* @__PURE__ */ __name(() => {
  const setContextMenuOptions = useServices(
    (state) => state.setContextMenuOptions
  );
  return languages.map(([key, value]) => {
    const [flag, lang] = value.split(" ");
    return {
      title: "Translate to " + lang,
      description: "Translate and paste selected text to " + lang,
      icon: /* @__PURE__ */ React.createElement(React.Fragment, null, flag),
      mainActionLabel: "Translate and paste",
      async onClick() {
        startNotification();
        const selectedText = await getSelectedText();
        const translated = await getTranslation(selectedText, key);
        if (translated === "") {
          errorNotification();
          return;
        }
        await pasteToCurrentWindow(translated);
        successNotification();
      },
      onHighlight() {
        setContextMenuOptions([
          {
            title: "Copy",
            icon: /* @__PURE__ */ React.createElement(BsClipboard, null),
            description: "Copy translated text to clipboard",
            mainActionLabel: "Copy",
            async onClick() {
              startNotification();
              const selectedText = await getSelectedText();
              const translated = await getTranslation(
                selectedText,
                key
              );
              if (translated === "") {
                errorNotification();
                return;
              }
              await copyToClipboard(translated);
              successNotification();
            }
          }
        ]);
      }
    };
  });
}, "items");
var metadata = {
  name: "Translate",
  description: "Translate selected text to any language with a few moves",
  icon: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u{1F310}"),
  repoUrl: "https://github.com/JulianKominovic/sittly-translator"
};
register({
  items,
  metadata
});
