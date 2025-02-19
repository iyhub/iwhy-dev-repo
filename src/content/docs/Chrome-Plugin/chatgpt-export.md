---
title: ChatGPT会话内容导出插件
date: 2023-11-14 12:57:21.222
updated: 2023-11-14 13:01:41.028
categories: 
    - ChatGPT
    - 油猴脚本开发
    - Chrome插件开发

tags: 
  - Chrome插件
  - 油猴脚本
---

## 1.右键油猴添加新脚本
![image.png](https://shanhai-blog.oss-cn-shanghai.aliyuncs.com/blog/image_1678769726059.png)
## 2.替换为下方代码内容
![image.png](https://shanhai-blog.oss-cn-shanghai.aliyuncs.com/blog/image_1678769786777.png)
## 3.脚本代码
```js
// ==UserScript==
// @name         ChatGPT Conversation Export
// @author       iy
// @version      1.0.0
// @description  Export ChatGPT Conversation to .md
// @match        https://chat.openai.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @icon64       data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-idle
// ==/UserScript==

(function () {
  "use strict";

  var commonjsGlobal =
    typeof globalThis !== "undefined"
      ? globalThis
      : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
      ? global
      : typeof self !== "undefined"
      ? self
      : {};

  function getDefaultExportFromCjs(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, "default")
      ? x["default"]
      : x;
  }

  var dist = { exports: {} };

  (function (module, exports) {
    !(function (t, e) {
      module.exports = e();
    })(commonjsGlobal, function () {
      return (function (t) {
        var e = {};
        function r(n) {
          if (e[n]) return e[n].exports;
          var o = (e[n] = { i: n, l: !1, exports: {} });
          return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
          (r.m = t),
          (r.c = e),
          (r.d = function (t, e, n) {
            r.o(t, e) ||
              Object.defineProperty(t, e, { enumerable: !0, get: n });
          }),
          (r.r = function (t) {
            "undefined" !== typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          }),
          (r.t = function (t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: t }),
              2 & e && "string" != typeof t)
            )
              for (var o in t)
                r.d(
                  n,
                  o,
                  function (e) {
                    return t[e];
                  }.bind(null, o)
                );
            return n;
          }),
          (r.n = function (t) {
            var e =
              t && t.__esModule
                ? function () {
                    return t.default;
                  }
                : function () {
                    return t;
                  };
            return r.d(e, "a", e), e;
          }),
          (r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }),
          (r.p = ""),
          r((r.s = 45))
        );
      })([
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(1),
            o = r(9),
            i = r(12),
            a = r(6),
            c = r(2),
            u = (function () {
              function t(t, e, r) {
                var n = void 0 === r ? {} : r,
                  o = n.keepSpace,
                  i = void 0 !== o && o,
                  a = n.prevTagName,
                  c = void 0 === a ? "" : a,
                  u = n.nextTagName,
                  s = void 0 === u ? "" : u,
                  l = n.prevTagStr,
                  p = void 0 === l ? "" : l,
                  f = n.nextTagStr,
                  h = void 0 === f ? "" : f,
                  d = n.parentTag,
                  _ = void 0 === d ? "" : d,
                  y = n.isFirstSubTag,
                  v = void 0 === y || y,
                  g = n.calcLeading,
                  b = void 0 !== g && g,
                  m = n.leadingSpace,
                  O = void 0 === m ? "" : m,
                  T = n.layer,
                  S = void 0 === T ? 1 : T,
                  x = n.noWrap,
                  j = void 0 !== x && x,
                  w = n.match,
                  P = void 0 === w ? null : w,
                  M = n.indentSpace,
                  C = void 0 === M ? "" : M,
                  N = n.language,
                  E = void 0 === N ? "" : N,
                  L = n.count,
                  k = void 0 === L ? 1 : L,
                  A = n.tableColumnCount,
                  V = void 0 === A ? 0 : A,
                  W = n.noExtraLine,
                  R = void 0 !== W && W,
                  I = n.inTable,
                  H = void 0 !== I && I;
                if (
                  ((this.tagName = e),
                  (this.rawStr = t),
                  (this.parentTag = _),
                  (this.prevTagName = c),
                  (this.nextTagName = s),
                  (this.prevTagStr = p),
                  (this.nextTagStr = h),
                  (this.isFirstSubTag = v),
                  (this.calcLeading = b),
                  (this.leadingSpace = O),
                  (this.layer = S),
                  (this.noWrap = j),
                  (this.match = P),
                  (this.indentSpace = C),
                  (this.language = E),
                  (this.count = k),
                  (this.inTable = H),
                  (this.tableColumnCount = V),
                  (this.noExtraLine = R),
                  (this.keepSpace = i),
                  !this.__detectStr__(t, this.tagName))
                )
                  return (this.attrs = {}), void (this.innerHTML = "");
                var q = this.__fetchTagAttrAndInnerHTML__(t),
                  F = q.attr,
                  G = q.innerHTML;
                (this.attrs = F), (this.innerHTML = G);
              }
              return (
                (t.prototype.__detectStr__ = function (t, e) {
                  if ("<" !== t[0])
                    return (
                      console.error(
                        "Not a valid tag, current tag name: "
                          .concat(this.tagName, ", tag content: ")
                          .concat(t)
                      ),
                      !1
                    );
                  for (
                    var r = "", n = !1, o = 1;
                    o < t.length && ">" !== t[o];
                    o++
                  )
                    !n && /(\s|\/)/.test(t[o]) && (n = !0), n || (r += t[o]);
                  return (
                    r === e ||
                    (console.warn(
                      "Tag is not match tagName, tagName in str is " +
                        r +
                        ", which tagName passed from parent is " +
                        e
                    ),
                    !1)
                  );
                }),
                (t.prototype.__fetchTagAttrAndInnerHTML__ = function (t) {
                  for (var e = "", r = 1; r < t.length && ">" !== t[r]; r++)
                    e += t[r];
                  for (
                    var o = t.slice(r + 1), i = "", a = -1, c = o.length - 1;
                    c >= 0;
                    c--
                  )
                    if ((i = o[c] + i).startsWith("</")) {
                      i.startsWith("</" + this.tagName + ">") && (a = c);
                      break;
                    }
                  -1 === a &&
                    (0, n.isSelfClosing)(this.tagName) &&
                    console.warn(
                      "There detect a self close tag, which name is:",
                      this.tagName
                    );
                  var u = (0, n.getTagAttributes)(e);
                  return (
                    this.tagName && delete u[this.tagName],
                    { attr: u, innerHTML: o.slice(0, a) }
                  );
                }),
                (t.prototype.__onlyLeadingSpace__ = function (t) {
                  t = t.trim();
                  for (var e = 0; e < t.length; e++)
                    if (t[e] !== i.SINGLE) return !1;
                  return !0;
                }),
                (t.prototype.__isEmpty__ = function (t) {
                  return (
                    !this.keepSpace &&
                    (("" === t && "td" !== this.tagName) ||
                      (this.calcLeading && this.__onlyLeadingSpace__(t)))
                  );
                }),
                (t.prototype.getValidSubTagName = function (t) {
                  return t;
                }),
                (t.prototype.beforeParse = function () {
                  var t = c.default.get().tagListener;
                  if (t) {
                    var e = t(this.tagName, {
                        parentTag: this.parentTag,
                        prevTagName: this.prevTagName,
                        nextTagName: this.nextTagName,
                        isFirstSubTag: this.isFirstSubTag,
                        attrs: this.attrs,
                        innerHTML: this.innerHTML,
                        language: this.language,
                        match: this.match,
                        isSelfClosing: !1,
                      }),
                      r = e.attrs,
                      n = e.language,
                      o = e.match;
                    (this.attrs = r),
                      "string" === typeof n && (this.language = n),
                      "undefined" !== typeof o && (this.match = o);
                  }
                  return "";
                }),
                (t.prototype.parseValidSubTag = function (t, e, r) {
                  return new ((0, n.getTagConstructor)(e))(t, e, r).exec();
                }),
                (t.prototype.parseOnlyString = function (t, e, r) {
                  return new o.default(t, e, r).exec();
                }),
                (t.prototype.afterParsed = function (t) {
                  return t;
                }),
                (t.prototype.slim = function (t) {
                  return this.keepSpace ? t : t.trim();
                }),
                (t.prototype.beforeMergeSpace = function (t) {
                  return t;
                }),
                (t.prototype.mergeSpace = function (t, e, r) {
                  return this.keepSpace && "pre" !== this.tagName
                    ? t.endsWith("\n")
                      ? t
                      : t + r.replace(/\n+/g, "\n")
                    : e + t + r;
                }),
                (t.prototype.afterMergeSpace = function (t) {
                  return t;
                }),
                (t.prototype.beforeReturn = function (t) {
                  return t;
                }),
                (t.prototype.exec = function (t, e) {
                  void 0 === t && (t = ""), void 0 === e && (e = "");
                  for (
                    var r = this.beforeParse(),
                      o = (0, n.generateGetNextValidTag)(this.innerHTML),
                      i = o(),
                      c = i[0],
                      u = i[1],
                      s = null;
                    "" !== u;

                  ) {
                    var l = o(),
                      p = l[0],
                      f = l[1],
                      h = {
                        parentTag: this.tagName,
                        nextTagName: p,
                        nextTagStr: f,
                        prevTagName: s,
                        prevTagStr: r,
                        leadingSpace: this.leadingSpace,
                        layer: this.layer,
                        keepSpace: this.keepSpace,
                        inTable: this.inTable,
                      },
                      d = void 0;
                    d =
                      null != c
                        ? this.parseValidSubTag(u, c, h)
                        : this.parseOnlyString(u, c, h);
                    var _ = this.getValidSubTagName(c);
                    (c = p),
                      (u = f),
                      (null == _ && this.__isEmpty__(d)) ||
                        ((s = _), (this.isFirstSubTag = !1), (r += d));
                  }
                  return (
                    (r = this.afterParsed(r)),
                    (r = this.slim(r)),
                    this.__isEmpty__(r)
                      ? ""
                      : ((r = this.beforeMergeSpace(r)),
                        !this.noExtraLine &&
                          (0, a.default)(this.tagName) &&
                          this.prevTagName &&
                          !r.startsWith("\n") &&
                          !(0, a.default)(this.prevTagName) &&
                          this.parentTag &&
                          (t = "\n\n"),
                        (r = this.mergeSpace(r, t, e)),
                        this.noWrap &&
                          !this.keepSpace &&
                          (r = r.replace(/\s+/g, " ")),
                        (r = this.afterMergeSpace(r)),
                        (r = this.beforeReturn(r)))
                  );
                }),
                t
              );
            })();
          e.default = u;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.shouldRenderRawInside =
              e.isIndependentTag =
              e.clearComment =
              e.getLanguage =
              e.getTableAlign =
              e.getTagAttributes =
              e.isSelfClosing =
              e.generateGetNextValidTag =
              e.getTagConstructor =
              e.getRealTagName =
              e.unescapeStr =
              e.extraEscape =
                void 0);
          var n = r(46);
          Object.defineProperty(e, "extraEscape", {
            enumerable: !0,
            get: function () {
              return n.extraEscape;
            },
          }),
            Object.defineProperty(e, "unescapeStr", {
              enumerable: !0,
              get: function () {
                return n.unescapeStr;
              },
            });
          var o = r(47);
          e.generateGetNextValidTag = o.default;
          var i = r(48);
          e.getTagConstructor = i.default;
          var a = r(11);
          e.isSelfClosing = a.default;
          var c = r(51);
          e.getTagAttributes = c.default;
          var u = r(52);
          e.getLanguage = u.default;
          var s = r(53);
          e.clearComment = s.default;
          var l = r(17);
          e.getRealTagName = l.default;
          var p = r(6);
          e.isIndependentTag = p.default;
          var f = r(54);
          e.getTableAlign = f.default;
          var h = r(55);
          e.shouldRenderRawInside = h.default;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (function () {
            function t(t) {
              var e = void 0 === t ? {} : t,
                r = e.skipTags,
                n = void 0 === r ? [] : r,
                o = e.emptyTags,
                i = void 0 === o ? [] : o,
                a = e.ignoreTags,
                c = void 0 === a ? [] : a,
                u = e.aliasTags,
                s = void 0 === u ? {} : u,
                l = e.renderCustomTags,
                p = void 0 === l || l,
                f = e.tagListener,
                h =
                  void 0 === f
                    ? function (t, e) {
                        return e;
                      }
                    : f;
              this.options = {
                skipTags: n,
                emptyTags: i,
                ignoreTags: c,
                aliasTags: s,
                renderCustomTags: p,
                tagListener: h,
              };
            }
            return (
              (t.prototype.get = function () {
                return this.options;
              }),
              (t.prototype.clear = function () {
                this.options = {};
              }),
              (t.prototype.set = function (t, e) {
                var r = this;
                t &&
                  "[object Object]" === Object.prototype.toString.call(t) &&
                  Object.keys(t).forEach(function (n) {
                    e
                      ? (r.options[n] = t[n])
                      : (function (t, e, r) {
                          if (!(r in t)) return void (t[r] = e[r]);
                          var n = Array.isArray(t[r]),
                            o =
                              "[object Object]" ===
                              Object.prototype.toString.call(t[r]);
                          t[r] = n
                            ? t[r].concat(e[r])
                            : o
                            ? Object.assign(t[r], e[r])
                            : e[r];
                        })(r.options, t, n);
                  });
              }),
              (t.prototype.reset = function () {
                (this.options = JSON.parse(JSON.stringify(o))),
                  (this.options.tagListener = function (t, e) {
                    return e;
                  });
              }),
              t
            );
          })();
          var o = {
              ignoreTags: [
                "",
                "style",
                "head",
                "!doctype",
                "form",
                "svg",
                "noscript",
                "script",
                "meta",
              ],
              skipTags: [
                "div",
                "html",
                "body",
                "nav",
                "section",
                "footer",
                "main",
                "aside",
                "article",
                "header",
              ],
              emptyTags: [],
              aliasTags: {
                figure: "p",
                dl: "p",
                dd: "p",
                dt: "p",
                figcaption: "p",
              },
              renderCustomTags: !0,
            },
            i = new n();
          i.reset(), (e.default = i);
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "h1");
              var n = t.call(this, e, r) || this;
              return (n.match = "#"), n;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function (t) {
                return this.match + " " + t;
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  e || (e = "\n"),
                  r || (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(1),
            o = r(2),
            i = (function () {
              function t(t, e, r) {
                var n = void 0 === r ? {} : r,
                  o = n.parentTag,
                  i = void 0 === o ? "" : o,
                  a = n.leadingSpace,
                  c = void 0 === a ? "" : a,
                  u = n.layer,
                  s = void 0 === u ? 1 : u,
                  l = n.isFirstSubTag,
                  p = void 0 !== l && l,
                  f = n.inTable,
                  h = void 0 !== f && f,
                  d = n.match,
                  _ = void 0 === d ? null : d,
                  y = n.prevTagName,
                  v = void 0 === y ? "" : y,
                  g = n.nextTagName,
                  b = void 0 === g ? "" : g;
                if (
                  ((this.tagName = e),
                  (this.rawStr = t),
                  (this.parentTag = i),
                  (this.isFirstSubTag = p),
                  (this.prevTagName = v),
                  (this.nextTagName = b),
                  (this.leadingSpace = c),
                  (this.layer = s),
                  (this.innerHTML = ""),
                  (this.match = _),
                  (this.inTable = h),
                  this.__detectStr__(t, this.tagName))
                ) {
                  var m = this.__fetchTagAttr__(t).attr;
                  this.attrs = m;
                } else this.attrs = {};
              }
              return (
                (t.prototype.__detectStr__ = function (t, e) {
                  if ("<" !== t[0])
                    return (
                      console.error(
                        "Not a valid tag, current tag name: "
                          .concat(this.tagName, ", tag content: ")
                          .concat(t)
                      ),
                      !1
                    );
                  for (
                    var r = "", n = !1, o = 1;
                    o < t.length && ">" !== t[o];
                    o++
                  )
                    !n && /(\s|\/)/.test(t[o]) && (n = !0), n || (r += t[o]);
                  return (
                    r === e ||
                    (console.warn(
                      "Tag is not match tagName, tagName in str is " +
                        r +
                        ", which tagName passed from parent is " +
                        e
                    ),
                    !1)
                  );
                }),
                (t.prototype.__fetchTagAttr__ = function (t) {
                  for (var e = "", r = 1; r < t.length && ">" !== t[r]; r++)
                    e += t[r];
                  return { attr: (0, n.getTagAttributes)(e) };
                }),
                (t.prototype.beforeParse = function () {
                  var t = o.default.get().tagListener;
                  if (t) {
                    var e = t(this.tagName, {
                        parentTag: this.parentTag,
                        prevTagName: this.prevTagName,
                        nextTagName: this.nextTagName,
                        isFirstSubTag: this.isFirstSubTag,
                        attrs: this.attrs,
                        innerHTML: this.innerHTML,
                        match: this.match,
                        isSelfClosing: !0,
                      }),
                      r = e.attrs,
                      n = e.match;
                    (this.attrs = r), (this.match = n);
                  }
                  return "";
                }),
                (t.prototype.beforeMergeSpace = function (t) {
                  return t;
                }),
                (t.prototype.afterMergeSpace = function (t) {
                  return t;
                }),
                (t.prototype.beforeReturn = function (t) {
                  return t;
                }),
                (t.prototype.exec = function (t, e) {
                  void 0 === t && (t = ""), void 0 === e && (e = "");
                  var r = this.beforeParse();
                  return (
                    (r = t + (r = this.beforeMergeSpace(r)) + e),
                    (r = this.afterMergeSpace(r)),
                    (r = this.beforeReturn(r))
                  );
                }),
                t
              );
            })();
          e.default = i;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = (function () {
            function t() {}
            return (
              (t.prototype.exec = function () {
                return "";
              }),
              t
            );
          })();
          e.default = n;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(17),
            o = {
              html: !0,
              body: !0,
              p: !0,
              div: !0,
              pre: !0,
              section: !0,
              blockquote: !0,
              aside: !0,
              li: !0,
              ul: !0,
              ol: !0,
              form: !0,
              hr: !0,
              h1: !0,
              h2: !0,
              h3: !0,
              h4: !0,
              h5: !0,
              h6: !0,
              dl: !0,
              dd: !0,
              dt: !0,
              br: !0,
            };
          e.default = function (t) {
            if (!t) return !1;
            var e = (0, n.default)(t);
            return !!e && !!o[e];
          };
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.__EmptySelfClose__ = e.__Empty__ = void 0);
          var i = r(0),
            a = r(4),
            c = (function (t) {
              function e(e, r, n) {
                return (
                  void 0 === r && (r = "__empty__"),
                  t.call(this, e, r, n) || this
                );
              }
              return (
                n(e, t),
                (e.prototype.slim = function (t) {
                  return t;
                }),
                (e.prototype.parseValidSubTag = function (t, r, n) {
                  return new e(t, r, o({}, n)).exec();
                }),
                (e.prototype.parseOnlyString = function (t, e, r) {
                  return t;
                }),
                (e.prototype.exec = function () {
                  return t.prototype.exec.call(this, "", "");
                }),
                e
              );
            })(i.default);
          e.__Empty__ = c;
          var u = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "__emptyselfclose__");
              var n = t.call(this, e, r) || this;
              return (n.tagName = r), n;
            }
            return (
              n(e, t),
              (e.prototype.exec = function () {
                return t.prototype.exec.call(this, "", "");
              }),
              e
            );
          })(a.default);
          e.__EmptySelfClose__ = u;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.__SkipSelfClose__ = e.__Skip__ = void 0);
          var o = r(0),
            i = r(4),
            a = r(1),
            c = (function (t) {
              function e(e, r, n) {
                void 0 === r && (r = "__skip__");
                var o = t.call(this, e, r, n) || this;
                return (o.noNeedWrap = ["td", "th"]), o;
              }
              return (
                n(e, t),
                (e.prototype.exec = function () {
                  var e =
                      (0, a.isIndependentTag)(
                        (0, a.getRealTagName)(this.tagName)
                      ) &&
                      (!this.parentTag ||
                        !this.noNeedWrap.includes(this.parentTag)),
                    r = e ? "\n" : "",
                    n = e ? "\n" : "";
                  return t.prototype.exec.call(this, r, n);
                }),
                e
              );
            })(o.default);
          e.__Skip__ = c;
          var u = (function (t) {
            function e(e, r, n) {
              return (
                void 0 === r && (r = "__skipselfclose__"),
                t.call(this, e, r, n) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.exec = function () {
                return "";
              }),
              e
            );
          })(i.default);
          e.__SkipSelfClose__ = u;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(1),
            o = r(6),
            i = (function () {
              function t(t, e, r) {
                void 0 === e && (e = "__nomatch__");
                var n = void 0 === r ? {} : r,
                  o = n.keepSpace,
                  i = void 0 !== o && o,
                  a = n.prevTagName,
                  c = void 0 === a ? "" : a,
                  u = n.nextTagName,
                  s = void 0 === u ? "" : u,
                  l = n.parentTag,
                  p = void 0 === l ? "" : l,
                  f = n.calcLeading,
                  h = void 0 !== f && f,
                  d = n.layer,
                  _ = void 0 === d ? 1 : d,
                  y = n.leadingSpace,
                  v = void 0 === y ? "" : y,
                  g = n.inTable,
                  b = void 0 !== g && g;
                (this.tagName = e),
                  (this.nextTagName = s),
                  (this.prevTagName = c),
                  (this.parentTag = p),
                  (this.keepSpace = i),
                  (this.calcLeading = h),
                  (this.leadingSpace = v),
                  (this.layer = _),
                  (this.rawStr = t),
                  (this.inTable = b);
              }
              return (
                (t.prototype.slim = function (t) {
                  if (this.keepSpace) return t;
                  var e = t.replace(/\s+/g, " ");
                  return (
                    (0, o.default)(this.prevTagName) && (e = e.trimLeft()),
                    (0, o.default)(this.nextTagName) && (e = e.trimRight()),
                    e
                  );
                }),
                (t.prototype.beforeReturn = function (t) {
                  if (this.keepSpace) return t;
                  if (this.calcLeading)
                    return this.leadingSpace + (0, n.extraEscape)(t);
                  var e = (0, n.extraEscape)(t);
                  return this.inTable && (e = e.replace(/\|/g, "\\|")), e;
                }),
                (t.prototype.exec = function () {
                  var t = this.rawStr;
                  return (t = this.slim(t)), (t = this.beforeReturn(t));
                }),
                t
              );
            })();
          e.default = i;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.__NoMatchSelfClose__ = e.__NoMatch__ = void 0);
          var o = r(0),
            i = r(4),
            a = (function (t) {
              function e(e, r) {
                return (
                  void 0 === r && (r = "__nomatch__"),
                  t.call(this, e, r) || this
                );
              }
              return (
                n(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return "<"
                    .concat(this.tagName, ">")
                    .concat(t, "</")
                    .concat(this.tagName, ">");
                }),
                (e.prototype.exec = function () {
                  return t.prototype.exec.call(this, "", "");
                }),
                e
              );
            })(o.default);
          e.__NoMatch__ = a;
          var c = (function (t) {
            function e(e, r) {
              return (
                void 0 === r && (r = "__nomatchselfclose__"),
                t.call(this, e, r) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.exec = function () {
                return "<".concat(this.tagName, " />");
              }),
              e
            );
          })(i.default);
          e.__NoMatchSelfClose__ = c;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = {
            img: !0,
            hr: !0,
            input: !0,
            br: !0,
            meta: !0,
            link: !0,
            "!doctype": !0,
            base: !0,
            col: !0,
            area: !0,
            param: !0,
            object: !0,
            embed: !0,
            keygen: !0,
            source: !0,
          };
          e.default = function (t) {
            return null != t && !!n[t.toLowerCase()];
          };
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.TRIPLE = e.DOUBLE = e.SINGLE = void 0);
          e.SINGLE = "\u2608";
          e.DOUBLE = "\u2608\u2608";
          e.TRIPLE = "\u2608\u2608\u2608";
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              void 0 === r && (r = "strong");
              var o = t.call(this, e, r, n) || this;
              return (o.layer = 1), (o.match = o.match || "**"), o;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function (t) {
                return this.match + t + this.match;
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  null != this.match &&
                    this.prevTagStr &&
                    !this.prevTagStr.endsWith("\\" + this.match[0]) &&
                    this.prevTagStr.endsWith(this.match[0]) &&
                    (e = " "),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "del");
              var n = t.call(this, e, r) || this;
              return (n.match = n.match || "~~"), n;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function (t) {
                return this.match + t + this.match;
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              void 0 === r && (r = "em");
              var o = t.call(this, e, r, n) || this;
              return (o.match = o.match || "*"), o;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function (t) {
                return this.match + t + this.match;
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  "strong" === this.parentTag && this.nextTagStr && (r = " "),
                  null != this.match &&
                    this.prevTagStr &&
                    !this.prevTagStr.endsWith("\\" + this.match) &&
                    this.prevTagStr.endsWith(this.match) &&
                    (e = " "),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              void 0 === r && (r = "th");
              var o = t.call(this, e, r, n) || this;
              return (o.tagName = r), o;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function (t) {
                return t + "|";
              }),
              (e.prototype.parseValidSubTag = function (e, r, n) {
                return "ul" === r || "ol" === r || "table" === r || "pre" === r
                  ? e.replace(/([\n\r])/g, "")
                  : t.prototype.parseValidSubTag.call(this, e, r, n);
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(2);
          e.default = function (t) {
            if (!t) return t;
            var e = n.default.get().aliasTags;
            return null != (null === e || void 0 === e ? void 0 : e[t])
              ? e[t]
              : t;
          };
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return void 0 === r && (r = "a"), t.call(this, e, r, n) || this;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function (t) {
                var e = this.attrs,
                  r = e.href,
                  n = e.title,
                  o = r || "";
                return n
                  ? "[".concat(t, "](").concat(o, ' "').concat(n, '")')
                  : "[".concat(t, "](").concat(o, ")");
              }),
              (e.prototype.parseOnlyString = function (e, r, n) {
                return "tbody" === this.parentTag || "thead" === this.parentTag
                  ? e
                  : t.prototype.parseOnlyString.call(this, e, r, n);
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return void 0 === r && (r = "b"), t.call(this, e, r, n) || this;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return t.prototype.exec.call(this, e, r);
              }),
              e
            );
          })(r(13).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(6),
            a = r(0),
            c = r(1),
            u = (function (t) {
              function e(e, r, n) {
                void 0 === r && (r = "blockquote");
                var o = t.call(this, e, r, n) || this;
                return (
                  (o.match = o.match || ">"),
                  (o.fillPerLine = o.fillPerLine.bind(o)),
                  o
                );
              }
              return (
                n(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  if ("" === t.trim()) return "";
                  var e = this.match + " " + t;
                  return this.calcLeading ? this.leadingSpace + e : e;
                }),
                (e.prototype.afterMergeSpace = function (t) {
                  for (
                    var e = this, r = t.split("\n"), n = r.length - 1;
                    n >= 0;
                    n--
                  )
                    n < r.length - 1 &&
                      ">" === r[n].trim() &&
                      ">" === r[n + 1].trim() &&
                      r.splice(n, 1);
                  return (r = r.map(function (t) {
                    return "" === t ? "" : e.fillPerLine(t);
                  })).join("\n");
                }),
                (e.prototype.beforeReturn = function (t) {
                  return t.replace("\n\n", "\n");
                }),
                (e.prototype.fillPerLine = function (t) {
                  var e = ">";
                  if (
                    (this.calcLeading && (e = this.leadingSpace + ">"),
                    !t.startsWith(e))
                  ) {
                    var r = this.match + " " + t;
                    return this.calcLeading ? this.leadingSpace + r : r;
                  }
                  return t;
                }),
                (e.prototype.parseValidSubTag = function (t, e, r) {
                  var n;
                  "blockquote" === e
                    ? (n = new ((0, c.getTagConstructor)(e))(
                        t,
                        e,
                        o(o({}, r), {
                          calcLeading: this.calcLeading,
                          match: this.match + ">",
                          noExtraLine: !0,
                        })
                      ))
                    : (n = new ((0, c.getTagConstructor)(e))(
                        t,
                        e,
                        o(o({}, r), { noExtraLine: !0 })
                      ));
                  var a = n.exec(),
                    u = "";
                  this.calcLeading && (u = this.leadingSpace);
                  var s =
                      (0, i.default)(r.prevTagName) && "br" !== r.prevTagName,
                    l = (0, i.default)(r.nextTagName) && "br" !== r.nextTagName,
                    p = (0, i.default)(e) && "br" !== e;
                  return this.isFirstSubTag
                    ? a.trimLeft().replace(u, "")
                    : p
                    ? ((a = u + this.match + a),
                      s || (a = "\n" + a),
                      !l &&
                        r.nextTagStr &&
                        r.nextTagStr.trim() &&
                        (a += this.match + "\n"),
                      a)
                    : s
                    ? u + this.match + "\n" + a
                    : a;
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === r && (r = "\n"),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(a.default);
          e.default = u;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return void 0 === r && (r = "b"), t.call(this, e, r, n) || this;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (t, e) {
                return void 0 === e && (e = "\n"), this.inTable ? "" : "  " + e;
              }),
              e
            );
          })(r(4).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(0),
            a = r(1),
            c = (function (t) {
              function e(e, r, n) {
                void 0 === r && (r = "code");
                var o = t.call(this, e, r, n) || this;
                return (
                  (o.match = null == o.match ? "`" : o.match),
                  (o.noWrap = "`" === o.match),
                  (o.layer = 1),
                  o
                );
              }
              return (
                n(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  var e, r;
                  return (
                    "" !== this.match && "`" !== this.match
                      ? ((e = this.match + " "), (r = " " + this.match))
                      : ((e = this.match), (r = this.match)),
                    e + t + r
                  );
                }),
                (e.prototype.parseValidSubTag = function (t, e, r) {
                  return "pre" === e
                    ? new ((0, a.getTagConstructor)(e))(
                        t,
                        e,
                        o(o({}, r), { language: "", match: "" })
                      ).exec("", "\n")
                    : new ((0, a.getTagConstructor)(e))(
                        t,
                        e,
                        o(o({}, r), {
                          keepSpace: this.keepSpace,
                          noWrap: this.noWrap,
                        })
                      ).exec("", "");
                }),
                (e.prototype.parseOnlyString = function (t) {
                  if ("" !== this.match && t) {
                    var e = 1;
                    (t.startsWith("`") || t.endsWith("`")) &&
                      ((e = 2),
                      (t.startsWith("``") || t.endsWith("``")) && (e = 3)),
                      (this.match = "`".repeat(e));
                  }
                  return (0, a.unescapeStr)(t);
                }),
                (e.prototype.slim = function (t) {
                  return this.keepSpace ? t : t.trim();
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === r && (r = ""),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(i.default);
          e.default = c;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "h1");
              var n = t.call(this, e, r) || this;
              return (n.match = "#"), n;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(3).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "h2");
              var n = t.call(this, e, r) || this;
              return (n.match = "##"), n;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(3).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "h3");
              var n = t.call(this, e, r) || this;
              return (n.match = "###"), n;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(3).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "h4");
              var n = t.call(this, e, r) || this;
              return (n.match = "####"), n;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(3).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "h5");
              var n = t.call(this, e, r) || this;
              return (n.match = "#####"), n;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(3).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              void 0 === r && (r = "h6");
              var n = t.call(this, e, r) || this;
              return (n.match = "######"), n;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(3).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              void 0 === r && (r = "hr");
              var o = t.call(this, e, r, n) || this;
              return (o.match = "---"), o;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function () {
                return this.leadingSpace + this.match;
              }),
              (e.prototype.beforeReturn = function (t) {
                return (
                  t.replace(/^(?:\n\s*)/, "\n\n").replace(/(?:\n\s*)$/, "\n\n"),
                  t
                );
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(4).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return void 0 === r && (r = "i"), t.call(this, e, r, n) || this;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return t.prototype.exec.call(this, e, r);
              }),
              e
            );
          })(r(15).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return void 0 === r && (r = "img"), t.call(this, e, r, n) || this;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function () {
                var t = this.attrs,
                  e = t.src,
                  r = t.alt;
                return (
                  r || (r = ""),
                  e || (e = ""),
                  "![".concat(r, "](").concat(e, ")")
                );
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(4).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return (
                void 0 === r && (r = "input"), t.call(this, e, r, n) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function () {
                var t = this.attrs,
                  e = t.type,
                  r = t.checked;
                return "li" === this.parentTag && "checkbox" === e
                  ? null != r
                    ? "[x] "
                    : "[ ] "
                  : "";
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(4).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(0),
            a = r(1),
            c = r(6),
            u = r(12),
            s = (function (t) {
              function e(e, r, n) {
                void 0 === r && (r = "li");
                var o = t.call(this, e, r, n) || this;
                return (o.match = o.match || "*"), (o.extraGap = ""), o;
              }
              return (
                n(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return (
                    this.extraGap + this.leadingSpace + this.match + " " + t
                  );
                }),
                (e.prototype.__calcNextLeading__ = function () {
                  var t, e, r;
                  return 1 ===
                    (null === (t = this.match) || void 0 === t
                      ? void 0
                      : t.length)
                    ? u.DOUBLE
                    : 2 ===
                      (null === (e = this.match) || void 0 === e
                        ? void 0
                        : e.length)
                    ? u.TRIPLE
                    : 3 ===
                      (null === (r = this.match) || void 0 === r
                        ? void 0
                        : r.length)
                    ? u.DOUBLE
                    : u.TRIPLE + u.DOUBLE;
                }),
                (e.prototype.parseValidSubTag = function (t, e, r) {
                  var n = (0, a.getTagConstructor)(e),
                    i = this.__calcNextLeading__(),
                    c = new n(
                      t,
                      e,
                      o(o({}, r), {
                        calcLeading: !0,
                        leadingSpace: this.leadingSpace + i,
                        layer: this.layer + 1,
                      })
                    ).exec();
                  return (
                    "p" === e && (this.extraGap = "\n"),
                    this.isFirstSubTag
                      ? c.trimLeft().replace(this.leadingSpace + i, "")
                      : c
                  );
                }),
                (e.prototype.parseOnlyString = function (e, r, n) {
                  var i = !1;
                  (0, c.default)(n.prevTagName) && (i = !0);
                  var a = this.__calcNextLeading__(),
                    u = t.prototype.parseOnlyString.call(
                      this,
                      e,
                      r,
                      o(o({}, n), {
                        calcLeading: i,
                        leadingSpace: this.leadingSpace + a,
                        layer: this.layer + 1,
                      })
                    );
                  return this.isFirstSubTag
                    ? u.replace(this.leadingSpace + a, "")
                    : u;
                }),
                (e.prototype.beforeReturn = function (e) {
                  return t.prototype.beforeReturn.call(this, e);
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === r && (r = "\n"),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(i.default);
          e.default = s;
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(0),
            a = r(5),
            c = r(1),
            u = r(2),
            s = (function (t) {
              function e(e, r, n) {
                void 0 === r && (r = "ol");
                var o,
                  i = this;
                i = t.call(this, e, r, n) || this;
                var a = parseInt(
                  null ===
                    (o = null === i || void 0 === i ? void 0 : i.attrs) ||
                    void 0 === o
                    ? void 0
                    : o.start,
                  10
                );
                return (i.count = isNaN(a) ? 1 : a), i;
              }
              return (
                n(e, t),
                (e.prototype.__isValidSubTag__ = function (t) {
                  if (!t) return !1;
                  var e = u.default.get().aliasTags,
                    r = (0, c.getTagConstructor)(t);
                  return (
                    "li" === t ||
                    "li" == (null === e || void 0 === e ? void 0 : e[t]) ||
                    r === a.default
                  );
                }),
                (e.prototype.getValidSubTagName = function (t) {
                  return t && this.__isValidSubTag__(t) ? t : null;
                }),
                (e.prototype.parseValidSubTag = function (t, e, r) {
                  var n = (0, c.getTagConstructor)(e);
                  if (this.__isValidSubTag__(e)) {
                    var i = this.count + ".",
                      a = new n(
                        t,
                        e,
                        o(o({}, r), {
                          calcLeading: !0,
                          leadingSpace: this.leadingSpace,
                          layer: this.layer,
                          match: i,
                        })
                      );
                    return this.count++, a.exec("", "\n");
                  }
                  return (
                    console.error(
                      "Should not have tags except <li> inside ol, current tag is " +
                        e +
                        ", current tagStr is" +
                        t
                    ),
                    ""
                  );
                }),
                (e.prototype.parseOnlyString = function () {
                  return "";
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === r && (r = "\n"),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(i.default);
          e.default = s;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return void 0 === r && (r = "p"), t.call(this, e, r, n) || this;
            }
            return (
              n(e, t),
              (e.prototype.beforeMergeSpace = function (t) {
                return this.calcLeading ? this.leadingSpace + t : t;
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  this.prevTagName ||
                    !this.prevTagStr ||
                    this.prevTagStr.endsWith("\n") ||
                    (e = "\n\n"),
                  this.nextTagName ||
                    !this.nextTagStr ||
                    this.nextTagStr.startsWith("\n") ||
                    (r = "\n\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(0),
            a = r(7),
            c = r(1),
            u = r(12),
            s = (function (t) {
              function e(e, r, n) {
                void 0 === r && (r = "pre");
                var o = t.call(this, e, r, n) || this;
                return (
                  (o.indentSpace = u.DOUBLE + u.DOUBLE),
                  (o.isIndent = o.innerHTML.includes("```")),
                  (o.match = o.isIndent ? "" : "```"),
                  (o.language = o.language || (0, c.getLanguage)(e)),
                  (o.keepSpace = !0),
                  o
                );
              }
              return (
                n(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  var e =
                      this.isIndent || "code" === this.parentTag
                        ? ""
                        : this.match + this.language + "\n",
                    r = "";
                  return (
                    t.endsWith("\n") || (r = "\n"),
                    e +
                      t +
                      (this.isIndent || "code" === this.parentTag
                        ? ""
                        : r + this.match)
                  );
                }),
                (e.prototype.fillPerLine = function (t) {
                  var e = "";
                  return (
                    this.calcLeading && (e = this.leadingSpace),
                    this.isIndent ? e + this.indentSpace + t : e + t
                  );
                }),
                (e.prototype.afterMergeSpace = function (t) {
                  var e = this,
                    r = t.split("\n");
                  return (r = r.map(function (t) {
                    return "" === t ? "" : e.fillPerLine(t);
                  })).join("\n");
                }),
                (e.prototype.parseValidSubTag = function (t, e, r) {
                  if ("code" === e)
                    return new ((0, c.getTagConstructor)(e))(
                      t,
                      e,
                      o(o({}, r), {
                        match: "",
                        language: this.language,
                        keepSpace: !0,
                      })
                    ).exec("", "");
                  return (
                    (0, c.isSelfClosing)(e)
                      ? new a.__EmptySelfClose__(t, e)
                      : new a.__Empty__(t, e, o(o({}, r), { keepSpace: !0 }))
                  ).exec();
                }),
                (e.prototype.parseOnlyString = function (t) {
                  return t;
                }),
                (e.prototype.slim = function (t) {
                  return t;
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === r && (r = "\n"),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(i.default);
          e.default = s;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r) {
              return void 0 === r && (r = "s"), t.call(this, e, r) || this;
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return t.prototype.exec.call(this, e, r);
              }),
              e
            );
          })(r(14).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return (
                void 0 === r && (r = "span"), t.call(this, e, r, n) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(0),
            a = r(1);
          var c = (function (t) {
            function e(e, r, n) {
              void 0 === r && (r = "table");
              var o = t.call(this, e, r, n) || this;
              return (
                (o.exist_thead = !1),
                (o.exist_tbody = !1),
                (o.empty_tbody = !0),
                (o.tableColumnCount = (function (t) {
                  for (
                    var e = "", r = 0;
                    r < t.length && !e.endsWith("</tr>");
                    r++
                  )
                    e += t[r];
                  return Math.max(
                    e.split("</td>").length - 1,
                    e.split("</th>").length - 1
                  );
                })(o.innerHTML)),
                o
              );
            }
            return (
              n(e, t),
              (e.prototype.parseValidSubTag = function (t, e, r) {
                return (
                  "thead" === e && (this.exist_thead = !0),
                  "tbody" === e &&
                    ((this.exist_tbody = !0), (this.empty_tbody = !1)),
                  "tr" === e && (this.empty_tbody = !1),
                  new ((0, a.getTagConstructor)(e))(
                    t,
                    e,
                    o(o({}, r), {
                      tableColumnCount: this.tableColumnCount,
                      inTable: !0,
                    })
                  ).exec("", "\n")
                );
              }),
              (e.prototype.parseOnlyString = function () {
                return "";
              }),
              (e.prototype.beforeReturn = function (t) {
                if (!this.exist_thead && !this.exist_tbody && this.empty_tbody)
                  return "";
                if (0 === this.tableColumnCount) return "";
                if (!this.exist_tbody) {
                  for (
                    var e = (0, a.getTableAlign)(
                        this.innerHTML,
                        this.tableColumnCount
                      ),
                      r = "|",
                      n = 0;
                    n < e.length;
                    n++
                  )
                    r += e[n];
                  t = this.empty_tbody ? t + r + "\n" : r + "" + t;
                }
                return (
                  this.exist_thead ||
                    (t =
                      "\n" +
                      "|".repeat(this.tableColumnCount + 1) +
                      (t.startsWith("\n") ? "" : "\n") +
                      t),
                  t
                );
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = "\n"),
                  void 0 === r && (r = "\n"),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(i.default);
          e.default = c;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = r(0),
            i = r(1),
            a = (function (t) {
              function e(e, r, n) {
                return (
                  void 0 === r && (r = "tbody"), t.call(this, e, r, n) || this
                );
              }
              return (
                n(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  for (
                    var e = (0, i.getTableAlign)(
                        this.innerHTML,
                        this.tableColumnCount
                      ),
                      r = "|",
                      n = 0;
                    n < e.length;
                    n++
                  )
                    r += e[n];
                  return r + "\n" + t;
                }),
                (e.prototype.parseOnlyString = function () {
                  return "";
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === r && (r = ""),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(o.default);
          e.default = a;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return void 0 === r && (r = "td"), t.call(this, e, r, n) || this;
            }
            return (
              n(e, t),
              (e.prototype.parseValidSubTag = function (e, r, n) {
                return "ul" === r || "ol" === r || "table" === r || "pre" === r
                  ? e.replace(/([\n\r])/g, "")
                  : t.prototype.parseValidSubTag.call(this, e, r, n);
              }),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(16).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = (function (t) {
            function e(e, r, n) {
              return (
                void 0 === r && (r = "thead"), t.call(this, e, r, n) || this
              );
            }
            return (
              n(e, t),
              (e.prototype.exec = function (e, r) {
                return (
                  void 0 === e && (e = ""),
                  void 0 === r && (r = ""),
                  t.prototype.exec.call(this, e, r)
                );
              }),
              e
            );
          })(r(0).default);
          e.default = o;
        },
        function (t, e, r) {
          var n =
            (this && this.__extends) ||
            (function () {
              var t = function (e, r) {
                return (t =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  })(e, r);
              };
              return function (e, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null"
                  );
                function n() {
                  this.constructor = e;
                }
                t(e, r),
                  (e.prototype =
                    null === r
                      ? Object.create(r)
                      : ((n.prototype = r.prototype), new n()));
              };
            })();
          Object.defineProperty(e, "__esModule", { value: !0 });
          var o = r(0),
            i = r(5),
            a = r(1),
            c = r(2),
            u = (function (t) {
              function e(e, r, n) {
                return (
                  void 0 === r && (r = "tr"), t.call(this, e, r, n) || this
                );
              }
              return (
                n(e, t),
                (e.prototype.beforeMergeSpace = function (t) {
                  return "|" + t;
                }),
                (e.prototype.parseValidSubTag = function (t, e, r) {
                  var n = c.default.get().aliasTags,
                    o = (0, a.getTagConstructor)(e);
                  return "td" !== e &&
                    "th" !== e &&
                    "td" !== (null === n || void 0 === n ? void 0 : n[e]) &&
                    "th" !== (null === n || void 0 === n ? void 0 : n[e]) &&
                    o !== i.default
                    ? (console.error(
                        "Should not have tags except <td> or <th> inside <tr>, current tag is ".concat(
                          e,
                          " have been ignore."
                        )
                      ),
                      "")
                    : new o(t, e, r).exec("", "");
                }),
                (e.prototype.parseOnlyString = function () {
                  return "";
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = ""),
                    void 0 === r && (r = "\n"),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(o.default);
          e.default = u;
        },
        function (t, e, r) {
          var n =
              (this && this.__extends) ||
              (function () {
                var t = function (e, r) {
                  return (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          (t[r] = e[r]);
                    })(e, r);
                };
                return function (e, r) {
                  if ("function" !== typeof r && null !== r)
                    throw new TypeError(
                      "Class extends value " +
                        String(r) +
                        " is not a constructor or null"
                    );
                  function n() {
                    this.constructor = e;
                  }
                  t(e, r),
                    (e.prototype =
                      null === r
                        ? Object.create(r)
                        : ((n.prototype = r.prototype), new n()));
                };
              })(),
            o =
              (this && this.__assign) ||
              function () {
                return (o =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var o in (e = arguments[r]))
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          (t[o] = e[o]);
                    return t;
                  }).apply(this, arguments);
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var i = r(0),
            a = r(5),
            c = r(1),
            u = r(2).default.get().aliasTags,
            s = (function (t) {
              function e(e, r, n) {
                return (
                  void 0 === r && (r = "ul"), t.call(this, e, r, n) || this
                );
              }
              return (
                n(e, t),
                (e.prototype.__isValidSubTag__ = function (t) {
                  if (!t) return !1;
                  var e = (0, c.getTagConstructor)(t);
                  return (
                    "li" === t ||
                    "li" == (null === u || void 0 === u ? void 0 : u[t]) ||
                    e === a.default
                  );
                }),
                (e.prototype.getValidSubTagName = function (t) {
                  return t && this.__isValidSubTag__(t) ? t : null;
                }),
                (e.prototype.parseValidSubTag = function (t, e, r) {
                  var n = (0, c.getTagConstructor)(e);
                  return this.__isValidSubTag__(e)
                    ? new n(
                        t,
                        e,
                        o(o({}, r), {
                          calcLeading: !0,
                          leadingSpace: this.leadingSpace,
                          layer: this.layer,
                          match: "*",
                        })
                      ).exec("", "\n")
                    : (console.error(
                        "Should not have tags except <li> inside ul, current tag is " +
                          e +
                          ", current tagStr is" +
                          t
                      ),
                      "");
                }),
                (e.prototype.parseOnlyString = function () {
                  return "";
                }),
                (e.prototype.exec = function (e, r) {
                  return (
                    void 0 === e && (e = "\n"),
                    void 0 === r && (r = "\n"),
                    t.prototype.exec.call(this, e, r)
                  );
                }),
                e
              );
            })(i.default);
          e.default = s;
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(1),
            o = r(2),
            i = r(9);
          e.default = function (t, e, r) {
            void 0 === r && (r = !1),
              o.default.reset(),
              o.default.set(e, r),
              (t = (t = (t = (0, n.clearComment)(t)).trim())
                .replace(/(\r\n)/g, "")
                .replace(/&nbsp;/g, " "));
            for (
              var a = (0, n.generateGetNextValidTag)(t),
                c = "",
                u = null,
                s = a(),
                l = s[0],
                p = s[1];
              "" !== p;

            ) {
              if (null != l) {
                var f = new ((0, n.getTagConstructor)(l))(p, l, {
                    parentTag: null,
                    prevTagName: u,
                    prevTagStr: c,
                  }).exec(),
                  h = (0, n.isIndependentTag)(u);
                !(0, n.isIndependentTag)(l) || h || c.endsWith("\n")
                  ? (c += f)
                  : (c += "\n" + f);
              } else
                c = (c += new i.default(p, l).exec()).replace(
                  /(?:\n\s*)$/,
                  "\n"
                );
              u = l;
              var d = a();
              (l = d[0]), (p = d[1]);
            }
            return (function (t) {
              return (t = (t = (t = t.replace(/^\s+/, "")).replace(
                /\s+$/,
                ""
              )).replace(/\u2608/g, " "));
            })((0, n.unescapeStr)(c));
          };
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.unescapeStr = e.extraEscape = void 0);
          var n = {},
            o = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "`": "&#x60;",
              "\u201c": "&ldquo;",
              "\u201d": "&rdquo;",
            };
          for (var i in o) n[o[i]] = i;
          var a = /&(?:amp|lt|gt|quot|#39|#x60|ldquo|rdquo);/g,
            c = RegExp(a.source),
            u = [
              [/\\/g, "\\\\"],
              [/\*/g, "\\*"],
              [/^-/g, "\\-"],
              [/^\+ /g, "\\+ "],
              [/^(=+)/g, "\\$1"],
              [/^(#{1,6}) /g, "\\$1 "],
              [/`/g, "\\`"],
              [/^~~~/g, "\\~~~"],
              [/\[/g, "\\["],
              [/\]/g, "\\]"],
              [/^>/g, "\\>"],
              [/_/g, "\\_"],
              [/^(\d+)\. /g, "$1\\. "],
            ];
          (e.unescapeStr = function (t) {
            return (t =
              t && c.test(t)
                ? t.replace(a, function (t) {
                    return n[t];
                  })
                : t);
          }),
            (e.extraEscape = function (t) {
              return u.reduce(function (t, e) {
                return t.replace(e[0], e[1]);
              }, t);
            });
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(11);
          function o(t, e) {
            for (var r = ""; e < t.length && /[a-zA-Z0-9!-]/.test(t[e]); )
              r += t[e++];
            return r.toLowerCase();
          }
          e.default = function (t) {
            var e = 0;
            return function () {
              var r = "",
                i = null,
                a = 0,
                c = null,
                u = !1;
              if (e >= t.length) return [i, r];
              for (var s = e; s < t.length; s++) {
                if ("<" === t[s] && "/" !== t[s + 1]) {
                  if ("" !== r && null == i && !u) return (e = s), [i, r];
                  var l = o(t, s + 1);
                  null == i && (i = l),
                    i === l && a++,
                    (0, n.default)(i) &&
                      (0 === --a && (u = !0),
                      a < 0 && console.warn("Tag ".concat(i, " is abnormal")));
                } else if ("<" === t[s] && "/" === t[s + 1]) {
                  if (null == i) {
                    console.warn(
                      "Tag is not integrity, current tagStr is ".concat(
                        t.slice(e)
                      )
                    );
                    for (var p = s; p < t.length && ">" !== t[p]; ) p++;
                    s = p;
                    continue;
                  }
                  i === (c = o(t, s + 2)) && a--, a <= 0 && (u = !0);
                }
                if (((r += t[s]), ">" === t[s] && u))
                  return (e = s + 1), [i, r];
                s === t.length - 1 &&
                  i !== c &&
                  (null != c &&
                    null != i &&
                    (r = r
                      .replace("<".concat(i, ">"), "")
                      .replace("</".concat(c, ">"), "")),
                  (i = null));
              }
              return (e = t.length), [i, r];
            };
          };
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = r(2),
            o = r(11),
            i = r(49);
          e.default = function t(e) {
            var a,
              c = n.default.get(),
              u = c.skipTags,
              s = c.emptyTags,
              l = c.ignoreTags,
              p = c.aliasTags,
              f = c.renderCustomTags,
              h = (0, o.default)(e);
            if (null === u || void 0 === u ? void 0 : u.includes(e)) {
              var d = r(8);
              return h ? d.__SkipSelfClose__ : d.__Skip__;
            }
            if (null === s || void 0 === s ? void 0 : s.includes(e)) {
              var _ = r(7);
              return h ? _.__EmptySelfClose__ : _.__Empty__;
            }
            if (null === l || void 0 === l ? void 0 : l.includes(e))
              return r(5).default;
            if (null != (null === p || void 0 === p ? void 0 : p[e]))
              return t(p[e]);
            var y = e.toLowerCase();
            if (!0 !== f && !(0, i.default)(y)) {
              if (!1 === f || "SKIP" === f)
                return (d = r(8)), h ? d.__SkipSelfClose__ : d.__Skip__;
              if ("EMPTY" === f)
                return (_ = r(7)), h ? _.__EmptySelfClose__ : _.__Empty__;
              if ("IGNORE" === f) return r(5).default;
            }
            try {
              a = r(50)("./".concat(e)).default;
            } catch (v) {
              a = h ? r(10).__NoMatchSelfClose__ : r(10).__NoMatch__;
            }
            return a;
          };
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = [
            "!doctype",
            "a",
            "abbr",
            "acronym",
            "address",
            "applet",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "basefont",
            "bdi",
            "bdo",
            "bgsound",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "circle",
            "cite",
            "clipPath",
            "code",
            "col",
            "colgroup",
            "command",
            "content",
            "data",
            "datalist",
            "dd",
            "defs",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "ellipse",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "foreignObject",
            "form",
            "frame",
            "frameset",
            "g",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "iframe",
            "image",
            "img",
            "input",
            "ins",
            "isindex",
            "kbd",
            "keygen",
            "label",
            "legend",
            "li",
            "line",
            "linearGradient",
            "link",
            "listing",
            "main",
            "map",
            "mark",
            "marquee",
            "mask",
            "math",
            "menu",
            "menuitem",
            "meta",
            "meter",
            "multicol",
            "nav",
            "nextid",
            "nobr",
            "noembed",
            "noframes",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "path",
            "pattern",
            "picture",
            "plaintext",
            "polygon",
            "polyline",
            "pre",
            "progress",
            "q",
            "radialGradient",
            "rb",
            "rbc",
            "rect",
            "rp",
            "rt",
            "rtc",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "shadow",
            "slot",
            "small",
            "source",
            "spacer",
            "span",
            "stop",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "svg",
            "table",
            "tbody",
            "td",
            "template",
            "text",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "title",
            "tr",
            "track",
            "tspan",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "xmp",
          ];
          e.default = function (t) {
            return "string" === typeof t && n.includes(t.toLowerCase());
          };
        },
        function (t, e, r) {
          var n = {
            "./__Heading__": 3,
            "./__Heading__.ts": 3,
            "./__empty__": 7,
            "./__empty__.ts": 7,
            "./__ignore__": 5,
            "./__ignore__.ts": 5,
            "./__nomatch__": 10,
            "./__nomatch__.ts": 10,
            "./__rawString__": 9,
            "./__rawString__.ts": 9,
            "./__skip__": 8,
            "./__skip__.ts": 8,
            "./a": 18,
            "./a.ts": 18,
            "./b": 19,
            "./b.ts": 19,
            "./blockquote": 20,
            "./blockquote.ts": 20,
            "./br": 21,
            "./br.ts": 21,
            "./code": 22,
            "./code.ts": 22,
            "./del": 14,
            "./del.ts": 14,
            "./em": 15,
            "./em.ts": 15,
            "./h1": 23,
            "./h1.ts": 23,
            "./h2": 24,
            "./h2.ts": 24,
            "./h3": 25,
            "./h3.ts": 25,
            "./h4": 26,
            "./h4.ts": 26,
            "./h5": 27,
            "./h5.ts": 27,
            "./h6": 28,
            "./h6.ts": 28,
            "./hr": 29,
            "./hr.ts": 29,
            "./i": 30,
            "./i.ts": 30,
            "./img": 31,
            "./img.ts": 31,
            "./input": 32,
            "./input.ts": 32,
            "./li": 33,
            "./li.ts": 33,
            "./ol": 34,
            "./ol.ts": 34,
            "./p": 35,
            "./p.ts": 35,
            "./pre": 36,
            "./pre.ts": 36,
            "./s": 37,
            "./s.ts": 37,
            "./span": 38,
            "./span.ts": 38,
            "./strong": 13,
            "./strong.ts": 13,
            "./table": 39,
            "./table.ts": 39,
            "./tbody": 40,
            "./tbody.ts": 40,
            "./td": 41,
            "./td.ts": 41,
            "./th": 16,
            "./th.ts": 16,
            "./thead": 42,
            "./thead.ts": 42,
            "./tr": 43,
            "./tr.ts": 43,
            "./ul": 44,
            "./ul.ts": 44,
          };
          function o(t) {
            var e = i(t);
            return r(e);
          }
          function i(t) {
            if (!r.o(n, t)) {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            }
            return n[t];
          }
          (o.keys = function () {
            return Object.keys(n);
          }),
            (o.resolve = i),
            (t.exports = o),
            (o.id = 50);
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
              for (
                var e = {}, r = !1, n = "", o = "", i = null, a = 0;
                a <= t.length;
                a++
              ) {
                if (a === t.length || /\s/.test(t[a])) {
                  if (a === t.length || !r) {
                    var c = n.trim();
                    "/" === c[c.length - 1] && (c = c.slice(0, c.length - 1)),
                      c && (e[c] = o.trim()),
                      (n = ""),
                      (o = "");
                  }
                } else {
                  if (/['"]/.test(t[a]) && (!i || t[a] === i)) {
                    (r = !r) && (i = t[a]);
                    continue;
                  }
                  if ("=" === t[a] && !r) continue;
                }
                if (a === t.length) break;
                r ? (o += t[a]) : (n += t[a]);
              }
              return e;
            });
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = "javascript";
          e.default = function (t) {
            var e = t.match(/<.*?class=".*?language-([^\s"]*)?.*".*>/);
            return e
              ? e[1] || ""
              : t.match(
                  /<span.*?hljs-(comment|keyword|number|string|literal|built_in|function|title|bullet).*?<\/span>/
                )
              ? n
              : "";
          };
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t) {
              return t.replace(/<!--(?:[\s\S]*?)-->/g, "");
            });
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = function (t, e) {
              var r = {
                  _default_: "---|",
                  center: ":---:|",
                  left: ":---|",
                  right: "---:|",
                  start: ":---|",
                  end: "---:|",
                },
                n = Array(e).fill(r._default_),
                o = t.match(/<(td|th)(.*?)>/g);
              return o
                ? (n = (n = o.slice(0, e)).map(function (t) {
                    var e = t.match(
                        /align\s*=\s*['"]\s*(center|left|right|start|end)/
                      ),
                      n = t.match(
                        /text-align\s*:\s*(center|left|right|start|end)/
                      );
                    return e || n
                      ? e && !n
                        ? r[e[1]] || r._default_
                        : n
                        ? r[n[1]] || r._default_
                        : void 0
                      : r._default_;
                  }))
                : n;
            });
        },
        function (t, e, r) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = ["th", "td"]);
        },
      ]).default;
    });
  })(dist);
  var html2md = getDefaultExportFromCjs(dist.exports);

  /**
   * url变化时执行
   */
  /**
   * 页面加载完毕后执行
   */
  window.onload = function () {
    setTimeout(checkIfPageIsLoaded, 5000);
  };
  function checkIfPageIsLoaded() {
    if (document.readyState === "complete") {
      // 在这里写你的代码
      createButton();
    } else {
      window.requestAnimationFrame(checkIfPageIsLoaded);
    }
  }
  checkIfPageIsLoaded();
  function createButton() {
    const button = document.createElement("button"); //创建一个按钮
    button.textContent = "Export"; //按钮内容
    button.style.cssText = `
    width: 60px;
    height: 28px;
    color: white;
    background: rgb(105 164 148);
    border: rgb(189 227 217);
    border-radius: 4px;
    position: absolute;
    bottom: 43px;
    right: 10px;
    text-align: center;
        `;
    button.addEventListener("click", clickButton); //监听按钮点击事件
    const $body = document.querySelector("body");
    $body.appendChild(button); //把按钮加入到 x 的子节点中
  }
  function clickButton() {
    const res = html2md(
      document.getElementsByClassName(
        "flex flex-col items-center text-sm dark:bg-gray-800"
      )[0].outerHTML,
      { ignoreTags: ["button"], aliasTags: { img: "blockquote" } },
      false
    );
    console.log(res);
    const title = document.getElementsByClassName(
      "flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-14 bg-gray-800 hover:bg-gray-800 group"
    )[0].textContent;
    download(res, title);
  }
  function download(content, filename) {
    var blob = new Blob([content], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename + ".md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
})();
```
