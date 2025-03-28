!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
	  ? (module.exports = t(require("react")))
	  : "function" == typeof define && define.amd
	  ? define(["react"], t)
	  : "object" == typeof exports
	  ? (exports.PhotoFeed = t(require("react")))
	  : (e.PhotoFeed = t(e.React))
  })(this, function (e) {
	return (function (e) {
	  function t(r) {
		if (n[r]) return n[r].exports
		var o = (n[r] = { i: r, l: !1, exports: {} })
		return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
	  }
	  var n = {}
	  return (
		(t.m = e),
		(t.c = n),
		(t.d = function (e, n, r) {
		  t.o(e, n) ||
			Object.defineProperty(e, n, {
			  configurable: !1,
			  enumerable: !0,
			  get: r,
			})
		}),
		(t.n = function (e) {
		  var n =
			e && e.__esModule
			  ? function () {
				  return e.default
				}
			  : function () {
				  return e
				}
		  return t.d(n, "a", n), n
		}),
		(t.o = function (e, t) {
		  return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(t.p = ""),
		t((t.s = 6))
	  )
	})([
	  function (e, t) {
		function n() {
		  throw new Error("setTimeout has not been defined")
		}
		function r() {
		  throw new Error("clearTimeout has not been defined")
		}
		function o(e) {
		  if (f === setTimeout) return setTimeout(e, 0)
		  if ((f === n || !f) && setTimeout)
			return (f = setTimeout), setTimeout(e, 0)
		  try {
			return f(e, 0)
		  } catch (t) {
			try {
			  return f.call(null, e, 0)
			} catch (t) {
			  return f.call(this, e, 0)
			}
		  }
		}
		function i(e) {
		  if (s === clearTimeout) return clearTimeout(e)
		  if ((s === r || !s) && clearTimeout)
			return (s = clearTimeout), clearTimeout(e)
		  try {
			return s(e)
		  } catch (t) {
			try {
			  return s.call(null, e)
			} catch (t) {
			  return s.call(this, e)
			}
		  }
		}
		function u() {
		  h &&
			d &&
			((h = !1), d.length ? (m = d.concat(m)) : (y = -1), m.length && a())
		}
		function a() {
		  if (!h) {
			var e = o(u)
			h = !0
			for (var t = m.length; t; ) {
			  for (d = m, m = []; ++y < t; ) d && d[y].run()
			  ;(y = -1), (t = m.length)
			}
			;(d = null), (h = !1), i(e)
		  }
		}
		function c(e, t) {
		  ;(this.fun = e), (this.array = t)
		}
		function l() {}
		var f,
		  s,
		  p = (e.exports = {})
		!(function () {
		  try {
			f = "function" == typeof setTimeout ? setTimeout : n
		  } catch (e) {
			f = n
		  }
		  try {
			s = "function" == typeof clearTimeout ? clearTimeout : r
		  } catch (e) {
			s = r
		  }
		})()
		var d,
		  m = [],
		  h = !1,
		  y = -1
		;(p.nextTick = function (e) {
		  var t = new Array(arguments.length - 1)
		  if (arguments.length > 1)
			for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
		  m.push(new c(e, t)), 1 !== m.length || h || o(a)
		}),
		  (c.prototype.run = function () {
			this.fun.apply(null, this.array)
		  }),
		  (p.title = "browser"),
		  (p.browser = !0),
		  (p.env = {}),
		  (p.argv = []),
		  (p.version = ""),
		  (p.versions = {}),
		  (p.on = l),
		  (p.addListener = l),
		  (p.once = l),
		  (p.off = l),
		  (p.removeListener = l),
		  (p.removeAllListeners = l),
		  (p.emit = l),
		  (p.prependListener = l),
		  (p.prependOnceListener = l),
		  (p.listeners = function (e) {
			return []
		  }),
		  (p.binding = function (e) {
			throw new Error("process.binding is not supported")
		  }),
		  (p.cwd = function () {
			return "/"
		  }),
		  (p.chdir = function (e) {
			throw new Error("process.chdir is not supported")
		  }),
		  (p.umask = function () {
			return 0
		  })
	  },
	  function (e, t, n) {
		"use strict"
		function r(e) {
		  return function () {
			return e
		  }
		}
		var o = function () {}
		;(o.thatReturns = r),
		  (o.thatReturnsFalse = r(!1)),
		  (o.thatReturnsTrue = r(!0)),
		  (o.thatReturnsNull = r(null)),
		  (o.thatReturnsThis = function () {
			return this
		  }),
		  (o.thatReturnsArgument = function (e) {
			return e
		  }),
		  (e.exports = o)
	  },
	  function (e, t, n) {
		"use strict"
		;(function (t) {
		  function n(e, t, n, o, i, u, a, c) {
			if ((r(t), !e)) {
			  var l
			  if (void 0 === t)
				l = new Error(
				  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
				)
			  else {
				var f = [n, o, i, u, a, c],
				  s = 0
				;(l = new Error(
				  t.replace(/%s/g, function () {
					return f[s++]
				  })
				)),
				  (l.name = "Invariant Violation")
			  }
			  throw ((l.framesToPop = 1), l)
			}
		  }
		  var r = function (e) {}
		  "production" !== t.env.NODE_ENV &&
			(r = function (e) {
			  if (void 0 === e)
				throw new Error("invariant requires an error message argument")
			}),
			(e.exports = n)
		}.call(t, n(0)))
	  },
	  function (e, t, n) {
		"use strict"
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	  },
	  function (e, t, n) {
		"use strict"
		;(function (t) {
		  var r = n(1),
			o = r
		  "production" !== t.env.NODE_ENV &&
			(function () {
			  var e = function (e) {
				for (
				  var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
				  r < t;
				  r++
				)
				  n[r - 1] = arguments[r]
				var o = 0,
				  i =
					"Warning: " +
					e.replace(/%s/g, function () {
					  return n[o++]
					})
				"undefined" != typeof console && console.error(i)
				try {
				  throw new Error(i)
				} catch (e) {}
			  }
			  o = function (t, n) {
				if (void 0 === n)
				  throw new Error(
					"`warning(condition, format, ...args)` requires a warning message argument"
				  )
				if (0 !== n.indexOf("Failed Composite propType: ") && !t) {
				  for (
					var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), i = 2;
					i < r;
					i++
				  )
					o[i - 2] = arguments[i]
				  e.apply(void 0, [n].concat(o))
				}
			  }
			})(),
			(e.exports = o)
		}.call(t, n(0)))
	  },
	  function (t, n) {
		t.exports = e
	  },
	  function (e, t, n) {
		e.exports = n(7)
	  },
	  function (e, t, n) {
		"use strict"
		e.exports = n(8)
	  },
	  function (e, t, n) {
		"use strict"
		function r(e) {
		  return e && e.__esModule ? e : { default: e }
		}
		function o(e, t) {
		  if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
		}
		function i(e, t) {
		  if (!e)
			throw new ReferenceError(
			  "this hasn't been initialised - super() hasn't been called"
			)
		  return !t || ("object" != typeof t && "function" != typeof t) ? e : t
		}
		function u(e, t) {
		  if ("function" != typeof t && null !== t)
			throw new TypeError(
			  "Super expression must either be null or a function, not " +
				typeof t
			)
		  ;(e.prototype = Object.create(t && t.prototype, {
			constructor: {
			  value: e,
			  enumerable: !1,
			  writable: !0,
			  configurable: !0,
			},
		  })),
			t &&
			  (Object.setPrototypeOf
				? Object.setPrototypeOf(e, t)
				: (e.__proto__ = t))
		}
		Object.defineProperty(t, "__esModule", { value: !0 })
		var a = (function () {
			function e(e, t) {
			  for (var n = 0; n < t.length; n++) {
				var r = t[n]
				;(r.enumerable = r.enumerable || !1),
				  (r.configurable = !0),
				  "value" in r && (r.writable = !0),
				  Object.defineProperty(e, r.key, r)
			  }
			}
			return function (t, n, r) {
			  return n && e(t.prototype, n), r && e(t, r), t
			}
		  })(),
		  c = n(9),
		  l = r(c),
		  f = n(5),
		  s = r(f),
		  p = n(13),
		  d = r(p),
		  m = n(14),
		  h = (function (e) {
			function t() {
			  o(this, t)
			  var e = i(
				this,
				(t.__proto__ || Object.getPrototypeOf(t)).call(this)
			  )
			  return (
				(e.getVideoElement = function (t, fs) {
				  var r = e.props.InformationElement
					  ? e.props.InformationElement
					  : m.DefaultInfoElement,
					o = [d.default.imageWrapper]
					// bs
				  // videoReact = require("video-react")
				  // 영상을 이미지로 바꾸느라 주석처리
				//   switch (e.props.cardColumn) {
				// 	case 1:
				// 	  bs = "40"
				// 	  break
				// 	case 2:
				// 	  bs = "30"
				// 	  break
				// 	default:
				// 	  bs = "20"
				//   }
				  return s.default.createElement(
					"div",
					{
					  className: o.join(" "),
					  onClick:
						e.pinchInFlag || e.pinchOutFlag
						  ? null
						  : e.image_clickHandler(t, fs),
					  key: `video_${fs}`,
					},
					s.default.createElement("img", {
					  className: "image__in__video",
					  src: t.thumbnailUrl,
					  style: {
						width: "100%",
						heigh: "100%",
					  },
					}),
					s.default.createElement("img", {
					  className: "video-play-button",
					  src: `feed-grid-guide/ic_play_video_20.png`,
					  srcSet: `feed-grid-guide/ic_play_video_20@2x.png 2x, feed-grid-guide/ic_play_video_20@3x.png 3x`,
					})
					// 영상 엘리먼트 이미지로 변경하기 위해 제거
					// s.default.createElement(
					//   videoReact.Player,
					//   {
					//     className: vn + cn,
					//     poster: t.thumbnailUrl,
					//     src: t.originUrl,
					//   },
					//   s.default.createElement(videoReact.BigPlayButton, {
					//     position: "center",
					//   })
					// )
				  )
				}),
				(e.getImageElement = function (t, fs) {
				  var r = e.props.InformationElement
					  ? e.props.InformationElement
					  : m.DefaultInfoElement,
					o = [d.default.imageWrapper]
				  return s.default.createElement("img", {
					className: o.join(" "),
					src: t.thumbnailUrl,
					onClick:
					  e.pinchInFlag || e.pinchOutFlag
						? null
						: e.image_clickHandler(t, fs),
					key: `img_${fs}`,
				  })
				}),
				(e.getFullScreenImage = function (t) {
				  let n
				  if (t) {
					n = [d.default.lightbox]
				  } else {
					n = [d.default.hide, d.default.lightbox]
				  }
				  let r = e.props.contents
				  return s.default.createElement(
					"div",
					{
					  className: n.join(" "),
					  onClick: e.lightBox_clickHandler,
					},
					r.map(function (n, r) {
					  if (n.isVideo) {
						return s.default.createElement(
						  "video",
						  {
							key: n.id,
							poster: n.thumbnailUrl,
							controls: true,
							className: n.originUrl === t ? "opaque" : "",
						  },
						  s.default.createElement("source", {
							src: n.originUrl,
							type: "video/mp4",
						  })
						)
					  } else {
						return s.default.createElement("img", {
						  key: n.id,
						  src: n.originUrl,
						  className: n.originUrl == t ? "opaque" : "",
						})
					  }
					})
				  )
				}),
				(e.image_clickHandler = function (t, fs) {
				  return function () {
					e.props.isFeed
					  ? e.props.goFeedViewPage(fs)
					  : e.setState({
						  fullScreenImage: t.originUrl,
						  fullScreenImageIndex: n,
						}) && e.props.changeOptionsPinch(false)
				  }
				}),
				(e.lightBox_clickHandler = function (t) {
				  "IMG" != t.target.tagName.toUpperCase() &&
					e.setState({
					  fullScreenImage: null,
					  fullScreenImageIndex: null,
					})
				  t.targetClassName !== d.default.lightbox &&
					e.props.changeOptionsPinch(true)
				}),
				// (e.getPercentWidth = function () {
				//   return 100 / e.props.columns - 1
				// }),
				// (e.getPercentHeight = function () {
				//   return 50 / e.props.columns - 1
				// }),
				(e.getNextPhotoIndex = function (t) {
				  return e.props.contents.length > t + 1 ? t + 1 : 0
				}),
				(e.getPreviousPhotoIndex = function (t) {
				  return t - 1 >= 0 ? t - 1 : e.props.contents.length - 1
				}),
				(e.getPhoto = function (t) {
				  return e.props.contents.length > t ? e.props.contents[t] : null
				}),
				(e.state = { fullScreenImage: null, fullScreenImageIndex: null }),
				e
			  )
			}
			return (
			  u(t, e),
			  a(t, [
				{
				  key: "render",
				  value: function () {
					// overflow 속성 추가함으로써 높이 지정안해도 됨
					// var cw = this.props.contentsAreaWidth,
					// 	cardColumn = this.props.cardColumn,
					// 	contents = this.props.contents;
					return s.default.createElement(
					  "div",
					  {
						className: "photoGrid",
						style: {
						  width: window.outerWidth - 40 + "px",
						  // height:
						  //   Math.ceil(contents.length / cardColumn) *
						  //     ((cw / cardColumn) * 0.562 + 3) +
						  //   "px",
						},
					  },
					  this.getGridElements()
					  // 마이 라운드 모아보기 페이지 만들 시 주석 풀기
					  // this.getFullScreenImage(this.state.fullScreenImage)
					)
				  },
				},
				{
				  key: "getGridElements",
				  value: function () {
					var e = this,
					  t = this.props.contents,
					  n = [d.default.imageGridItem],
					  cw = (window.outerWidth - 40) / this.props.cardColumn,
					  r = {
						width: cw + "px",
						height: cw * 0.562 + "px",
					  }
					return t.map(function (t, o) {
					  return s.default.createElement(
						"div",
						{
						  className: n.join(" "),
						  style: r,
						  key: t.feedSeq,
						},
						t.feedContentInfo.contentAttribute === "VIDEO"
						  ? e.getVideoElement(t.feedContentInfo, t.feedSeq)
						  : e.getImageElement(t.feedContentInfo, t.feedSeq)
					  )
					})
				  },
				},
			  ]),
			  t
			)
		  })(s.default.Component)
		;(h.propTypes = {
		  photos: l.default.array,
		  columns: l.default.number,
		  InformationElement: l.default.func,
		}),
		  (t.default = h)
	  },
	  function (e, t, n) {
		;(function (t) {
		  if ("production" !== t.env.NODE_ENV) {
			var r =
				("function" == typeof Symbol &&
				  Symbol.for &&
				  Symbol.for("react.element")) ||
				60103,
			  o = function (e) {
				return "object" == typeof e && null !== e && e.$$typeof === r
			  }
			e.exports = n(10)(o, !0)
		  } else e.exports = n(12)()
		}.call(t, n(0)))
	  },
	  function (e, t, n) {
		"use strict"
		;(function (t) {
		  var r = n(1),
			o = n(2),
			i = n(4),
			u = n(3),
			a = n(11)
		  e.exports = function (e, n) {
			function c(e) {
			  var t = e && ((T && e[T]) || e[O])
			  if ("function" == typeof t) return t
			}
			function l(e, t) {
			  return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
			}
			function f(e) {
			  ;(this.message = e), (this.stack = "")
			}
			function s(e) {
			  function r(r, l, s, p, d, m, h) {
				if (((p = p || P), (m = m || s), h !== u))
				  if (n)
					o(
					  !1,
					  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
					)
				  else if (
					"production" !== t.env.NODE_ENV &&
					"undefined" != typeof console
				  ) {
					var y = p + ":" + s
					!a[y] &&
					  c < 3 &&
					  (i(
						!1,
						"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
						m,
						p
					  ),
					  (a[y] = !0),
					  c++)
				  }
				return null == l[s]
				  ? r
					? new f(
						null === l[s]
						  ? "The " +
							d +
							" `" +
							m +
							"` is marked as required in `" +
							p +
							"`, but its value is `null`."
						  : "The " +
							d +
							" `" +
							m +
							"` is marked as required in `" +
							p +
							"`, but its value is `undefined`."
					  )
					: null
				  : e(l, s, p, d, m)
			  }
			  if ("production" !== t.env.NODE_ENV)
				var a = {},
				  c = 0
			  var l = r.bind(null, !1)
			  return (l.isRequired = r.bind(null, !0)), l
			}
			function p(e) {
			  function t(t, n, r, o, i, u) {
				var a = t[n]
				if (E(a) !== e)
				  return new f(
					"Invalid " +
					  o +
					  " `" +
					  i +
					  "` of type `" +
					  x(a) +
					  "` supplied to `" +
					  r +
					  "`, expected `" +
					  e +
					  "`."
				  )
				return null
			  }
			  return s(t)
			}
			function d(e) {
			  function t(t, n, r, o, i) {
				if ("function" != typeof e)
				  return new f(
					"Property `" +
					  i +
					  "` of component `" +
					  r +
					  "` has invalid PropType notation inside arrayOf."
				  )
				var a = t[n]
				if (!Array.isArray(a)) {
				  return new f(
					"Invalid " +
					  o +
					  " `" +
					  i +
					  "` of type `" +
					  E(a) +
					  "` supplied to `" +
					  r +
					  "`, expected an array."
				  )
				}
				for (var c = 0; c < a.length; c++) {
				  var l = e(a, c, r, o, i + "[" + c + "]", u)
				  if (l instanceof Error) return l
				}
				return null
			  }
			  return s(t)
			}
			function m(e) {
			  function t(t, n, r, o, i) {
				if (!(t[n] instanceof e)) {
				  var u = e.name || P
				  return new f(
					"Invalid " +
					  o +
					  " `" +
					  i +
					  "` of type `" +
					  I(t[n]) +
					  "` supplied to `" +
					  r +
					  "`, expected instance of `" +
					  u +
					  "`."
				  )
				}
				return null
			  }
			  return s(t)
			}
			function h(e) {
			  function n(t, n, r, o, i) {
				for (var u = t[n], a = 0; a < e.length; a++)
				  if (l(u, e[a])) return null
				return new f(
				  "Invalid " +
					o +
					" `" +
					i +
					"` of value `" +
					u +
					"` supplied to `" +
					r +
					"`, expected one of " +
					JSON.stringify(e) +
					"."
				)
			  }
			  return Array.isArray(e)
				? s(n)
				: ("production" !== t.env.NODE_ENV &&
					i(
					  !1,
					  "Invalid argument supplied to oneOf, expected an instance of array."
					),
				  r.thatReturnsNull)
			}
			function y(e) {
			  function t(t, n, r, o, i) {
				if ("function" != typeof e)
				  return new f(
					"Property `" +
					  i +
					  "` of component `" +
					  r +
					  "` has invalid PropType notation inside objectOf."
				  )
				var a = t[n],
				  c = E(a)
				if ("object" !== c)
				  return new f(
					"Invalid " +
					  o +
					  " `" +
					  i +
					  "` of type `" +
					  c +
					  "` supplied to `" +
					  r +
					  "`, expected an object."
				  )
				for (var l in a)
				  if (a.hasOwnProperty(l)) {
					var s = e(a, l, r, o, i + "." + l, u)
					if (s instanceof Error) return s
				  }
				return null
			  }
			  return s(t)
			}
			function g(e) {
			  function n(t, n, r, o, i) {
				for (var a = 0; a < e.length; a++) {
				  if (null == (0, e[a])(t, n, r, o, i, u)) return null
				}
				return new f(
				  "Invalid " + o + " `" + i + "` supplied to `" + r + "`."
				)
			  }
			  if (!Array.isArray(e))
				return (
				  "production" !== t.env.NODE_ENV &&
					i(
					  !1,
					  "Invalid argument supplied to oneOfType, expected an instance of array."
					),
				  r.thatReturnsNull
				)
			  for (var o = 0; o < e.length; o++) {
				var a = e[o]
				if ("function" != typeof a)
				  return (
					i(
					  !1,
					  "Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",
					  w(a),
					  o
					),
					r.thatReturnsNull
				  )
			  }
			  return s(n)
			}
			function v(e) {
			  function t(t, n, r, o, i) {
				var a = t[n],
				  c = E(a)
				if ("object" !== c)
				  return new f(
					"Invalid " +
					  o +
					  " `" +
					  i +
					  "` of type `" +
					  c +
					  "` supplied to `" +
					  r +
					  "`, expected `object`."
				  )
				for (var l in e) {
				  var s = e[l]
				  if (s) {
					var p = s(a, l, r, o, i + "." + l, u)
					if (p) return p
				  }
				}
				return null
			  }
			  return s(t)
			}
			function b(t) {
			  switch (typeof t) {
				case "number":
				case "string":
				case "undefined":
				  return !0
				case "boolean":
				  return !t
				case "object":
				  if (Array.isArray(t)) return t.every(b)
				  if (null === t || e(t)) return !0
				  var n = c(t)
				  if (!n) return !1
				  var r,
					o = n.call(t)
				  if (n !== t.entries) {
					for (; !(r = o.next()).done; ) if (!b(r.value)) return !1
				  } else
					for (; !(r = o.next()).done; ) {
					  var i = r.value
					  if (i && !b(i[1])) return !1
					}
				  return !0
				default:
				  return !1
			  }
			}
			function _(e, t) {
			  return (
				"symbol" === e ||
				"Symbol" === t["@@toStringTag"] ||
				("function" == typeof Symbol && t instanceof Symbol)
			  )
			}
			function E(e) {
			  var t = typeof e
			  return Array.isArray(e)
				? "array"
				: e instanceof RegExp
				? "object"
				: _(t, e)
				? "symbol"
				: t
			}
			function x(e) {
			  if (void 0 === e || null === e) return "" + e
			  var t = E(e)
			  if ("object" === t) {
				if (e instanceof Date) return "date"
				if (e instanceof RegExp) return "regexp"
			  }
			  return t
			}
			function w(e) {
			  var t = x(e)
			  switch (t) {
				case "array":
				case "object":
				  return "an " + t
				case "boolean":
				case "date":
				case "regexp":
				  return "a " + t
				default:
				  return t
			  }
			}
			function I(e) {
			  return e.constructor && e.constructor.name ? e.constructor.name : P
			}
			var T = "function" == typeof Symbol && Symbol.iterator,
			  O = "@@iterator",
			  P = "<<anonymous>>",
			  S = {
				array: p("array"),
				bool: p("boolean"),
				func: p("function"),
				number: p("number"),
				object: p("object"),
				string: p("string"),
				symbol: p("symbol"),
				any: (function () {
				  return s(r.thatReturnsNull)
				})(),
				arrayOf: d,
				element: (function () {
				  function t(t, n, r, o, i) {
					var u = t[n]
					if (!e(u)) {
					  return new f(
						"Invalid " +
						  o +
						  " `" +
						  i +
						  "` of type `" +
						  E(u) +
						  "` supplied to `" +
						  r +
						  "`, expected a single ReactElement."
					  )
					}
					return null
				  }
				  return s(t)
				})(),
				instanceOf: m,
				node: (function () {
				  function e(e, t, n, r, o) {
					return b(e[t])
					  ? null
					  : new f(
						  "Invalid " +
							r +
							" `" +
							o +
							"` supplied to `" +
							n +
							"`, expected a ReactNode."
						)
				  }
				  return s(e)
				})(),
				objectOf: y,
				oneOf: h,
				oneOfType: g,
				shape: v,
			  }
			return (
			  (f.prototype = Error.prototype),
			  (S.checkPropTypes = a),
			  (S.PropTypes = S),
			  S
			)
		  }
		}.call(t, n(0)))
	  },
	  function (e, t, n) {
		"use strict"
		;(function (t) {
		  function r(e, n, r, c, l) {
			if ("production" !== t.env.NODE_ENV)
			  for (var f in e)
				if (e.hasOwnProperty(f)) {
				  var s
				  try {
					o(
					  "function" == typeof e[f],
					  "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
					  c || "React class",
					  r,
					  f
					),
					  (s = e[f](n, f, c, r, null, u))
				  } catch (e) {
					s = e
				  }
				  if (
					(i(
					  !s || s instanceof Error,
					  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
					  c || "React class",
					  r,
					  f,
					  typeof s
					),
					s instanceof Error && !(s.message in a))
				  ) {
					a[s.message] = !0
					var p = l ? l() : ""
					i(
					  !1,
					  "Failed %s type: %s%s",
					  r,
					  s.message,
					  null != p ? p : ""
					)
				  }
				}
		  }
		  if ("production" !== t.env.NODE_ENV)
			var o = n(2),
			  i = n(4),
			  u = n(3),
			  a = {}
		  e.exports = r
		}.call(t, n(0)))
	  },
	  function (e, t, n) {
		"use strict"
		var r = n(1),
		  o = n(2),
		  i = n(3)
		e.exports = function () {
		  function e(e, t, n, r, u, a) {
			a !== i &&
			  o(
				!1,
				"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
			  )
		  }
		  function t() {
			return e
		  }
		  e.isRequired = e
		  var n = {
			array: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
		  }
		  return (n.checkPropTypes = r), (n.PropTypes = n), n
		}
	  },
	  function (e, t) {
		e.exports = {
		  imageGridItem: "PhotoGrid__imageGridItem___hFxCm",
		  imageWrapper: "PhotoGrid__imageWrapper___1YTK9",
		  column1: "PhotoGrid__column1___3xTvr",
		  column1Image: "PhotoGrid__column1Image___2KDMR",
		  lightbox: "PhotoGrid__lightbox___2hnqF",
		  hide: "PhotoGrid__hide___3-4dl",
		}
	  },
	  function (e, t, n) {
		"use strict"
		function r(e) {
		  return e && e.__esModule ? e : { default: e }
		}
		Object.defineProperty(t, "__esModule", { value: !0 }),
		  (t.DefaultInfoElement = void 0)
		var o = n(5),
		  i = r(o),
		  u = n(15),
		  a = r(u)
		t.DefaultInfoElement = function (e) {
		  var t = e.photo,
			n = new Date(t.created).toLocaleString()
		  return i.default.createElement(
			"div",
			{ className: a.default.info },
			i.default.createElement("h3", null, t.title),
			i.default.createElement("p", null, n),
			i.default.createElement(
			  "p",
			  null,
			  i.default.createElement("a", { href: t.link }, t.link)
			),
			i.default.createElement("p", null, "tags: ", t.tags)
		  )
		}
	  },
	  function (e, t) {
		e.exports = { info: "DefaultInfoElement__info___OKuK5" }
	  },
	])
  })
  