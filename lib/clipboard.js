;(() => {
  'use strict'
  var e = {
      823: (e, t, r) => {
        r.d(t, { Z: () => c })
        var n = r(81),
          o = r.n(n),
          a = r(645),
          i = r.n(a)()(o())
        i.push([
          e.id,
          '.button {\r\n  appearance: none;\r\n  border-width: 0px;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  background-color: transparent;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  display: grid;\r\n}\r\n\r\n.icon {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n}\r\n',
          '',
        ])
        const c = i
      },
      645: (e) => {
        e.exports = function (e) {
          var t = []
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = '',
                  n = void 0 !== t[5]
                return (
                  t[4] && (r += '@supports ('.concat(t[4], ') {')),
                  t[2] && (r += '@media '.concat(t[2], ' {')),
                  n &&
                    (r += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (r += e(t)),
                  n && (r += '}'),
                  t[2] && (r += '}'),
                  t[4] && (r += '}'),
                  r
                )
              }).join('')
            }),
            (t.i = function (e, r, n, o, a) {
              'string' == typeof e && (e = [[null, e, void 0]])
              var i = {}
              if (n)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0]
                  null != s && (i[s] = !0)
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l])
                ;(n && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = a)),
                  r &&
                    (u[2]
                      ? ((u[1] = '@media '
                          .concat(u[2], ' {')
                          .concat(u[1], '}')),
                        (u[2] = r))
                      : (u[2] = r)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('
                          .concat(u[4], ') {')
                          .concat(u[1], '}')),
                        (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  t.push(u))
              }
            }),
            t
          )
        }
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1]
        }
      },
      379: (e) => {
        var t = []
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n
              break
            }
          return r
        }
        function n(e, n) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              l = n.base ? s[0] + n.base : s[0],
              u = a[l] || 0,
              p = ''.concat(l, ' ').concat(u)
            a[l] = u + 1
            var d = r(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              }
            if (-1 !== d) t[d].references++, t[d].updater(f)
            else {
              var v = o(f, n)
              ;(n.byIndex = c),
                t.splice(c, 0, { identifier: p, updater: v, references: 1 })
            }
            i.push(p)
          }
          return i
        }
        function o(e, t) {
          var r = t.domAPI(t)
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return
                r.update((e = t))
              } else r.remove()
            }
          )
        }
        e.exports = function (e, o) {
          var a = n((e = e || []), (o = o || {}))
          return function (e) {
            e = e || []
            for (var i = 0; i < a.length; i++) {
              var c = r(a[i])
              t[c].references--
            }
            for (var s = n(e, o), l = 0; l < a.length; l++) {
              var u = r(a[l])
              0 === t[u].references && (t[u].updater(), t.splice(u, 1))
            }
            a = s
          }
        }
      },
      569: (e) => {
        var t = {}
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e)
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head
                } catch (e) {
                  r = null
                }
              t[e] = r
            }
            return t[e]
          })(e)
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          n.appendChild(r)
        }
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement('style')
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
        }
      },
      565: (e, t, r) => {
        e.exports = function (e) {
          var t = r.nc
          t && e.setAttribute('nonce', t)
        }
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e)
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = ''
                r.supports && (n += '@supports ('.concat(r.supports, ') {')),
                  r.media && (n += '@media '.concat(r.media, ' {'))
                var o = void 0 !== r.layer
                o &&
                  (n += '@layer'.concat(
                    r.layer.length > 0 ? ' '.concat(r.layer) : '',
                    ' {'
                  )),
                  (n += r.css),
                  o && (n += '}'),
                  r.media && (n += '}'),
                  r.supports && (n += '}')
                var a = r.sourceMap
                a &&
                  'undefined' != typeof btoa &&
                  (n +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  t.styleTagTransform(n, e, t.options)
              })(t, e, r)
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(t)
            },
          }
        }
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(e))
          }
        }
      },
    },
    t = {}
  function r(n) {
    var o = t[n]
    if (void 0 !== o) return o.exports
    var a = (t[n] = { id: n, exports: {} })
    return e[n](a, a.exports, r), a.exports
  }
  ;(r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e
    return r.d(t, { a: t }), t
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    })
  var n = {}
  ;(() => {
    r.r(n), r.d(n, { Check: () => x, Clippy: () => b, default: () => k })
    var e = r(379),
      t = r.n(e),
      o = r(795),
      a = r.n(o),
      i = r(569),
      c = r.n(i),
      s = r(565),
      l = r.n(s),
      u = r(216),
      p = r.n(u),
      d = r(589),
      f = r.n(d),
      v = r(823),
      h = {}
    ;(h.styleTagTransform = f()),
      (h.setAttributes = l()),
      (h.insert = c().bind(null, 'head')),
      (h.domAPI = a()),
      (h.insertStyleElement = p()),
      t()(v.Z, h),
      v.Z && v.Z.locals && v.Z.locals
    const m = require('react')
    var y = r.n(m)
    function g() {
      return (
        (g =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }),
        g.apply(this, arguments)
      )
    }
    function b(e) {
      return y().createElement(
        'svg',
        g(
          {
            width: '20',
            height: '20',
            viewBox: '0 0 16 16',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          e
        ),
        y().createElement('path', { d: 'M5.75 4.75H10.25V1.75H5.75V4.75Z' }),
        y().createElement('path', {
          d: 'M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379',
        })
      )
    }
    function x(e) {
      return y().createElement(
        'svg',
        g(
          {
            width: '20',
            height: '20',
            viewBox: '0 0 16 16',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          e
        ),
        y().createElement('path', { d: 'M13.25 4.75L6 12L2.75 8.75' })
      )
    }
    function k(e) {
      var t = e.copied,
        r = e.setCopied,
        n = e.text,
        o = e.color,
        a = function (e) {
          if (void 0 === e) return !1
          var t = new Option().style
          return (t.color = e), '' !== t.color
        }
      return y().createElement(
        'div',
        {
          onClick: function () {
            r(!0), navigator.clipboard.writeText(n)
          },
          className: 'button',
        },
        y().createElement(b, {
          className: 'icon',
          style: {
            color: a(o) ? o : 'black',
            strokeDasharray: 50,
            strokeDashoffset: t ? -50 : 0,
            transition: 'all 300ms ease-in-out',
          },
        }),
        y().createElement(x, {
          className: 'icon',
          style: {
            color: a(o) ? o : 'black',
            strokeDasharray: 50,
            strokeDashoffset: t ? 0 : -50,
            transition: 'all 300ms ease-in-out',
          },
        })
      )
    }
  })(),
    (module.exports = n)
})()
