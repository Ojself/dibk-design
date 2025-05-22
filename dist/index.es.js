import n, { Children as Gt, isValidElement as Ut, Fragment as He, cloneElement as Kt, useState as de, useEffect as ue, useRef as he, useCallback as bt } from "react";
function Zt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ye = { exports: {} }, ve = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Jt() {
  if (Qe) return $;
  Qe = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
  function C(c) {
    if (typeof c == "object" && c !== null) {
      var F = c.$$typeof;
      switch (F) {
        case r:
          switch (c = c.type, c) {
            case m:
            case g:
            case a:
            case l:
            case s:
            case v:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case d:
                case u:
                case w:
                case b:
                case f:
                  return c;
                default:
                  return F;
              }
          }
        case o:
          return F;
      }
    }
  }
  function O(c) {
    return C(c) === g;
  }
  return $.AsyncMode = m, $.ConcurrentMode = g, $.ContextConsumer = d, $.ContextProvider = f, $.Element = r, $.ForwardRef = u, $.Fragment = a, $.Lazy = w, $.Memo = b, $.Portal = o, $.Profiler = l, $.StrictMode = s, $.Suspense = v, $.isAsyncMode = function(c) {
    return O(c) || C(c) === m;
  }, $.isConcurrentMode = O, $.isContextConsumer = function(c) {
    return C(c) === d;
  }, $.isContextProvider = function(c) {
    return C(c) === f;
  }, $.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === r;
  }, $.isForwardRef = function(c) {
    return C(c) === u;
  }, $.isFragment = function(c) {
    return C(c) === a;
  }, $.isLazy = function(c) {
    return C(c) === w;
  }, $.isMemo = function(c) {
    return C(c) === b;
  }, $.isPortal = function(c) {
    return C(c) === o;
  }, $.isProfiler = function(c) {
    return C(c) === l;
  }, $.isStrictMode = function(c) {
    return C(c) === s;
  }, $.isSuspense = function(c) {
    return C(c) === v;
  }, $.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === a || c === g || c === l || c === s || c === v || c === y || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === b || c.$$typeof === f || c.$$typeof === d || c.$$typeof === u || c.$$typeof === N || c.$$typeof === E || c.$$typeof === B || c.$$typeof === p);
  }, $.typeOf = C, $;
}
var P = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Qt() {
  return et || (et = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, B = e ? Symbol.for("react.scope") : 60119;
    function C(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === a || h === g || h === l || h === s || h === v || h === y || typeof h == "object" && h !== null && (h.$$typeof === w || h.$$typeof === b || h.$$typeof === f || h.$$typeof === d || h.$$typeof === u || h.$$typeof === N || h.$$typeof === E || h.$$typeof === B || h.$$typeof === p);
    }
    function O(h) {
      if (typeof h == "object" && h !== null) {
        var j = h.$$typeof;
        switch (j) {
          case r:
            var _e = h.type;
            switch (_e) {
              case m:
              case g:
              case a:
              case l:
              case s:
              case v:
                return _e;
              default:
                var Je = _e && _e.$$typeof;
                switch (Je) {
                  case d:
                  case u:
                  case w:
                  case b:
                  case f:
                    return Je;
                  default:
                    return j;
                }
            }
          case o:
            return j;
        }
      }
    }
    var c = m, F = g, ce = d, ke = f, xe = r, Le = u, fe = a, Me = w, Oe = b, ee = o, Se = l, V = s, K = v, ge = !1;
    function Ie(h) {
      return ge || (ge = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(h) || O(h) === m;
    }
    function i(h) {
      return O(h) === g;
    }
    function _(h) {
      return O(h) === d;
    }
    function M(h) {
      return O(h) === f;
    }
    function x(h) {
      return typeof h == "object" && h !== null && h.$$typeof === r;
    }
    function T(h) {
      return O(h) === u;
    }
    function S(h) {
      return O(h) === a;
    }
    function k(h) {
      return O(h) === w;
    }
    function L(h) {
      return O(h) === b;
    }
    function I(h) {
      return O(h) === o;
    }
    function q(h) {
      return O(h) === l;
    }
    function z(h) {
      return O(h) === s;
    }
    function D(h) {
      return O(h) === v;
    }
    P.AsyncMode = c, P.ConcurrentMode = F, P.ContextConsumer = ce, P.ContextProvider = ke, P.Element = xe, P.ForwardRef = Le, P.Fragment = fe, P.Lazy = Me, P.Memo = Oe, P.Portal = ee, P.Profiler = Se, P.StrictMode = V, P.Suspense = K, P.isAsyncMode = Ie, P.isConcurrentMode = i, P.isContextConsumer = _, P.isContextProvider = M, P.isElement = x, P.isForwardRef = T, P.isFragment = S, P.isLazy = k, P.isMemo = L, P.isPortal = I, P.isProfiler = q, P.isStrictMode = z, P.isSuspense = D, P.isValidElementType = C, P.typeOf = O;
  }()), P;
}
var tt;
function Et() {
  return tt || (tt = 1, process.env.NODE_ENV === "production" ? ve.exports = Jt() : ve.exports = Qt()), ve.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ze, nt;
function en() {
  if (nt) return ze;
  nt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function a(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var f = {}, d = 0; d < 10; d++)
        f["_" + String.fromCharCode(d)] = d;
      var m = Object.getOwnPropertyNames(f).map(function(u) {
        return f[u];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        g[u] = u;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ze = s() ? Object.assign : function(l, f) {
    for (var d, m = a(l), g, u = 1; u < arguments.length; u++) {
      d = Object(arguments[u]);
      for (var v in d)
        r.call(d, v) && (m[v] = d[v]);
      if (e) {
        g = e(d);
        for (var y = 0; y < g.length; y++)
          o.call(d, g[y]) && (m[g[y]] = d[g[y]]);
      }
    }
    return m;
  }, ze;
}
var $e, rt;
function Xe() {
  if (rt) return $e;
  rt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = e, $e;
}
var Pe, at;
function Ct() {
  return at || (at = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var qe, ot;
function tn() {
  if (ot) return qe;
  ot = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = /* @__PURE__ */ Xe(), o = {}, a = /* @__PURE__ */ Ct();
    e = function(l) {
      var f = "Warning: " + l;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function s(l, f, d, m, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in l)
        if (a(l, u)) {
          var v;
          try {
            if (typeof l[u] != "function") {
              var y = Error(
                (m || "React class") + ": " + d + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            v = l[u](f, u, m, d, null, r);
          } catch (w) {
            v = w;
          }
          if (v && !(v instanceof Error) && e(
            (m || "React class") + ": type specification of " + d + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in o)) {
            o[v.message] = !0;
            var b = g ? g() : "";
            e(
              "Failed " + d + " type: " + v.message + (b ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, qe = s, qe;
}
var Ne, lt;
function nn() {
  if (lt) return Ne;
  lt = 1;
  var e = Et(), r = en(), o = /* @__PURE__ */ Xe(), a = /* @__PURE__ */ Ct(), s = /* @__PURE__ */ tn(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(d) {
    var m = "Warning: " + d;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return Ne = function(d, m) {
    var g = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function v(i) {
      var _ = i && (g && i[g] || i[u]);
      if (typeof _ == "function")
        return _;
    }
    var y = "<<anonymous>>", b = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: B(),
      arrayOf: C,
      element: O(),
      elementType: c(),
      instanceOf: F,
      node: Le(),
      objectOf: ke,
      oneOf: ce,
      oneOfType: xe,
      shape: Me,
      exact: Oe
    };
    function w(i, _) {
      return i === _ ? i !== 0 || 1 / i === 1 / _ : i !== i && _ !== _;
    }
    function p(i, _) {
      this.message = i, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function N(i) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, M = 0;
      function x(S, k, L, I, q, z, D) {
        if (I = I || y, z = z || L, D !== o) {
          if (m) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var j = I + ":" + L;
            !_[j] && // Avoid spamming the console because they are often not actionable except for lib authors
            M < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[j] = !0, M++);
          }
        }
        return k[L] == null ? S ? k[L] === null ? new p("The " + q + " `" + z + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new p("The " + q + " `" + z + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : i(k, L, I, q, z);
      }
      var T = x.bind(null, !1);
      return T.isRequired = x.bind(null, !0), T;
    }
    function E(i) {
      function _(M, x, T, S, k, L) {
        var I = M[x], q = V(I);
        if (q !== i) {
          var z = K(I);
          return new p(
            "Invalid " + S + " `" + k + "` of type " + ("`" + z + "` supplied to `" + T + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return N(_);
    }
    function B() {
      return N(f);
    }
    function C(i) {
      function _(M, x, T, S, k) {
        if (typeof i != "function")
          return new p("Property `" + k + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var L = M[x];
        if (!Array.isArray(L)) {
          var I = V(L);
          return new p("Invalid " + S + " `" + k + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected an array."));
        }
        for (var q = 0; q < L.length; q++) {
          var z = i(L, q, T, S, k + "[" + q + "]", o);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return N(_);
    }
    function O() {
      function i(_, M, x, T, S) {
        var k = _[M];
        if (!d(k)) {
          var L = V(k);
          return new p("Invalid " + T + " `" + S + "` of type " + ("`" + L + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(i);
    }
    function c() {
      function i(_, M, x, T, S) {
        var k = _[M];
        if (!e.isValidElementType(k)) {
          var L = V(k);
          return new p("Invalid " + T + " `" + S + "` of type " + ("`" + L + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(i);
    }
    function F(i) {
      function _(M, x, T, S, k) {
        if (!(M[x] instanceof i)) {
          var L = i.name || y, I = Ie(M[x]);
          return new p("Invalid " + S + " `" + k + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return N(_);
    }
    function ce(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), f;
      function _(M, x, T, S, k) {
        for (var L = M[x], I = 0; I < i.length; I++)
          if (w(L, i[I]))
            return null;
        var q = JSON.stringify(i, function(D, h) {
          var j = K(h);
          return j === "symbol" ? String(h) : h;
        });
        return new p("Invalid " + S + " `" + k + "` of value `" + String(L) + "` " + ("supplied to `" + T + "`, expected one of " + q + "."));
      }
      return N(_);
    }
    function ke(i) {
      function _(M, x, T, S, k) {
        if (typeof i != "function")
          return new p("Property `" + k + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var L = M[x], I = V(L);
        if (I !== "object")
          return new p("Invalid " + S + " `" + k + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected an object."));
        for (var q in L)
          if (a(L, q)) {
            var z = i(L, q, T, S, k + "." + q, o);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return N(_);
    }
    function xe(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var _ = 0; _ < i.length; _++) {
        var M = i[_];
        if (typeof M != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ge(M) + " at index " + _ + "."
          ), f;
      }
      function x(T, S, k, L, I) {
        for (var q = [], z = 0; z < i.length; z++) {
          var D = i[z], h = D(T, S, k, L, I, o);
          if (h == null)
            return null;
          h.data && a(h.data, "expectedType") && q.push(h.data.expectedType);
        }
        var j = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new p("Invalid " + L + " `" + I + "` supplied to " + ("`" + k + "`" + j + "."));
      }
      return N(x);
    }
    function Le() {
      function i(_, M, x, T, S) {
        return ee(_[M]) ? null : new p("Invalid " + T + " `" + S + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return N(i);
    }
    function fe(i, _, M, x, T) {
      return new p(
        (i || "React class") + ": " + _ + " type `" + M + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function Me(i) {
      function _(M, x, T, S, k) {
        var L = M[x], I = V(L);
        if (I !== "object")
          return new p("Invalid " + S + " `" + k + "` of type `" + I + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var q in i) {
          var z = i[q];
          if (typeof z != "function")
            return fe(T, S, k, q, K(z));
          var D = z(L, q, T, S, k + "." + q, o);
          if (D)
            return D;
        }
        return null;
      }
      return N(_);
    }
    function Oe(i) {
      function _(M, x, T, S, k) {
        var L = M[x], I = V(L);
        if (I !== "object")
          return new p("Invalid " + S + " `" + k + "` of type `" + I + "` " + ("supplied to `" + T + "`, expected `object`."));
        var q = r({}, M[x], i);
        for (var z in q) {
          var D = i[z];
          if (a(i, z) && typeof D != "function")
            return fe(T, S, k, z, K(D));
          if (!D)
            return new p(
              "Invalid " + S + " `" + k + "` key `" + z + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(M[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var h = D(L, z, T, S, k + "." + z, o);
          if (h)
            return h;
        }
        return null;
      }
      return N(_);
    }
    function ee(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(ee);
          if (i === null || d(i))
            return !0;
          var _ = v(i);
          if (_) {
            var M = _.call(i), x;
            if (_ !== i.entries) {
              for (; !(x = M.next()).done; )
                if (!ee(x.value))
                  return !1;
            } else
              for (; !(x = M.next()).done; ) {
                var T = x.value;
                if (T && !ee(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Se(i, _) {
      return i === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function V(i) {
      var _ = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : Se(_, i) ? "symbol" : _;
    }
    function K(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var _ = V(i);
      if (_ === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ge(i) {
      var _ = K(i);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function Ie(i) {
      return !i.constructor || !i.constructor.name ? y : i.constructor.name;
    }
    return b.checkPropTypes = s, b.resetWarningCache = s.resetWarningCache, b.PropTypes = b, b;
  }, Ne;
}
var Be, st;
function rn() {
  if (st) return Be;
  st = 1;
  var e = /* @__PURE__ */ Xe();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Be = function() {
    function a(f, d, m, g, u, v) {
      if (v !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    a.isRequired = a;
    function s() {
      return a;
    }
    var l = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: s,
      element: a,
      elementType: a,
      instanceOf: s,
      node: a,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: o,
      resetWarningCache: r
    };
    return l.PropTypes = l, l;
  }, Be;
}
var it;
function an() {
  if (it) return ye.exports;
  if (it = 1, process.env.NODE_ENV !== "production") {
    var e = Et(), r = !0;
    ye.exports = /* @__PURE__ */ nn()(e.isElement, r);
  } else
    ye.exports = /* @__PURE__ */ rn()();
  return ye.exports;
}
var on = /* @__PURE__ */ an();
const t = /* @__PURE__ */ Zt(on), R = (e) => {
  var r;
  return ((r = e == null ? void 0 : e.filter((o) => o)) == null ? void 0 : r.join(" ")) || "";
}, Tt = (e) => e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), ln = (e) => {
  var r;
  return !!(e != null && e.colors) && !!((r = Object.entries(e == null ? void 0 : e.colors)) != null && r.length) && Object.entries(e == null ? void 0 : e.colors).reduce((o, [a, s]) => (a != null && a.length && (s != null && s.length) && (o[`--color-${Tt(a)}`] = s), o), {});
}, sn = (e) => {
  var r;
  return !!(e != null && e.sizes) && !!((r = Object.entries(e == null ? void 0 : e.sizes)) != null && r.length) && Object.entries(e == null ? void 0 : e.sizes).reduce((o, [a, s]) => (a != null && a.length && (s != null && s.length) && (o[`--size-${Tt(a)}`] = s), o), {});
}, cn = (e) => ({
  ...ln(e),
  ...sn(e)
}), dn = (e, r) => {
  var a;
  if (typeof document > "u") return;
  const o = document.createElement("style");
  o.setAttribute("id", e), o.textContent = r, (a = document.getElementById(e)) == null || a.remove(), document.head.appendChild(o);
}, un = (e) => Object.keys(e).reduce((r, o) => `${r}${o}: ${e[o]};`, ""), se = (e) => Gt.map(e, (r) => Ut(r) ? r.type === He ? se(r.props.children) : Kt(r, { ...r.props }) : r), hn = (e) => {
  if (typeof document > "u") return;
  const r = document.createElement("button");
  e.prepend(r), r.focus(), r.remove();
}, mn = (e) => Array.from(
  e.querySelectorAll('button, [href], input, [tabindex="0"]')
).filter((r) => r), pt = (e) => {
  hn(e);
  const r = mn(e), o = r != null && r.length ? r[0] : null, a = (r == null ? void 0 : r.length) > 1 ? r[r.length - 1] : o;
  o && (o.onkeydown = (s) => {
    s.keyCode === 9 && s.shiftKey && a.focus();
  }), a && (a.onclick = () => {
    o.focus();
  }, a.onkeydown = (s) => {
    s.keyCode === 9 && !s.shiftKey && (s.preventDefault(), o.focus());
  });
}, fn = "_accordion_1o1ts_67", gn = "_panel_1o1ts_76", _n = "_content_1o1ts_77", yn = "_secondary_1o1ts_80", vn = "_margin_1o1ts_88", bn = "_panelText_1o1ts_122", En = "_panelChevron_1o1ts_128", Cn = "_expanded_1o1ts_155", Tn = "_initialized_1o1ts_171", pn = "_hide_1o1ts_1", wn = "_show_1o1ts_1", H = {
  accordion: fn,
  default: "_default_1o1ts_73",
  panel: gn,
  content: _n,
  secondary: yn,
  margin: vn,
  panelText: bn,
  panelChevron: En,
  expanded: Cn,
  initialized: Tn,
  hide: pn,
  show: wn
}, wt = (e) => {
  const [r, o] = de(e.expanded), [a, s] = de(e.initialized), l = () => {
    o(!r), s(!0), e.onToggleExpand && e.onToggleExpand();
  };
  ue(() => {
    o(e.expanded);
  }, [e.expanded]);
  const f = () => /* @__PURE__ */ n.createElement(
    "button",
    {
      ...e.buttonProps,
      className: H.panel,
      onClick: l,
      "aria-expanded": r ? "true" : "false"
    },
    /* @__PURE__ */ n.createElement("span", { className: H.panelText }, e.title),
    /* @__PURE__ */ n.createElement(
      "span",
      {
        className: `${H.panelChevron} ${r ? H.expanded : ""}`
      }
    )
  ), d = R([
    H.accordion,
    e.color && H[e.color],
    !e.noMargin && H.margin
  ]);
  return /* @__PURE__ */ n.createElement("div", { className: d }, f(), /* @__PURE__ */ n.createElement(
    "div",
    {
      className: `${H.content} ${a ? H.initialized : ""} ${r ? H.expanded : ""}`
    },
    e.children
  ));
};
wt.propTypes = {
  /** Content title inside box */
  title: t.string,
  titleSize: t.oneOf(["regular", "large"]),
  /** Text content inside box */
  content: t.string,
  color: t.oneOf(["default", "secondary"]),
  expanded: t.bool,
  onToggleExpand: t.func,
  buttonProps: t.object
};
wt.defaultProps = {
  title: null,
  titleSize: "regular",
  href: null,
  content: "",
  color: "default",
  expanded: !1,
  noMargin: !1
};
const kn = "_button_w916g_161", xn = "_noMargin_w916g_189", Ln = "_regular_w916g_199", Mn = "_small_w916g_202", On = "_primary_w916g_213", Sn = "_noHover_w916g_217", In = "_secondary_w916g_233", zn = "_disabled_w916g_252", $n = "_hasErrors_w916g_272", Pn = "_rounded_w916g_278", qn = "_hasArrowLeft_w916g_282", Nn = "_pushprev_w916g_1", Bn = "_hasArrowRight_w916g_320", Rn = "_pushnext_w916g_1", X = {
  button: kn,
  noMargin: xn,
  regular: Ln,
  small: Mn,
  primary: On,
  noHover: Sn,
  secondary: In,
  disabled: zn,
  hasErrors: $n,
  rounded: Pn,
  hasArrowLeft: qn,
  pushprev: Nn,
  hasArrowRight: Bn,
  pushnext: Rn
}, pe = (e) => {
  var m, g, u;
  const { linkComponent: r } = e, o = (v) => {
    switch (v) {
      case "left":
        return X.hasArrowLeft;
      case "right":
        return X.hasArrowRight;
      default:
        return "";
    }
  };
  let a = {
    ...e,
    "aria-invalid": e.hasErrors || null,
    href: !e.disabled && ((m = e.href) != null && m.length) ? e.href : null
  };
  delete a.noHover, delete a.hasErrors, delete a.rounded, delete a.inputType, delete a.color, delete a.content, delete a.arrow, delete a.noMargin, delete a.linkComponent;
  const s = (e == null ? void 0 : e.inputType) === "radio" ? e.defaultChecked ? "primary" : "secondary" : e.color, l = R([
    X.button,
    X[s],
    X[e.size],
    o(e.arrow),
    e.noHover || (e == null ? void 0 : e.inputType) === "radio" ? X.noHover : null,
    e.rounded && X.rounded,
    e.hasErrors && X.hasErrors,
    e.disabled && X.disabled,
    e.noMargin && X.noMargin
  ]), f = (v) => se(v).map((b, w) => {
    var N;
    const p = r && (b == null ? void 0 : b.type) === r && ((N = b == null ? void 0 : b.props) == null ? void 0 : N.to);
    return !a.disabled && p ? n.cloneElement(b, {
      className: l,
      key: `button-${w}`,
      to: b.props.to
    }) : /* @__PURE__ */ n.createElement("button", { ...a, key: `button-${w}`, className: l }, e.content || b.props.children);
  });
  return e.inputType === "button" ? /* @__PURE__ */ n.createElement(
    "input",
    {
      ...a,
      className: l,
      type: "button",
      value: e.content
    }
  ) : e.inputType === "radio" ? /* @__PURE__ */ n.createElement("label", { className: l }, /* @__PURE__ */ n.createElement("input", { ...a, type: "radio" }), e.content) : (g = e.href) != null && g.length && !e.disabled ? /* @__PURE__ */ n.createElement("a", { ...a, className: l }, e.content || e.children) : r && ((u = e == null ? void 0 : e.children) == null ? void 0 : u.type) === r ? /* @__PURE__ */ n.createElement(He, null, f(n.Children.toArray(e.children))) : /* @__PURE__ */ n.createElement("button", { ...a, className: l }, e.content || e.children);
};
pe.propTypes = {
  content: t.string,
  color: t.oneOf(["primary", "secondary"]),
  size: t.oneOf(["small", "regular"]),
  arrow: t.oneOf(["none", "left", "right"]),
  disabled: t.bool,
  inputType: t.oneOf(["button", "radio"]),
  name: t.string,
  defaultChecked: t.bool,
  required: t.bool,
  hasErrors: t.bool,
  "aria-describedby": t.string,
  noHover: t.bool,
  rounded: t.bool,
  href: t.string,
  onClick: t.func,
  noMargin: t.bool,
  linkComponent: t.elementType
};
pe.defaultProps = {
  color: "primary",
  size: "regular",
  disabled: !1,
  hasErrors: !1,
  noHover: !1,
  arrow: "none",
  noMargin: !1
};
const An = "_checkBoxIcon_1kc3w_1", Dn = "_showBox_1kc3w_22", Fn = "_hasErrors_1kc3w_27", Vn = "_checked_1kc3w_37", jn = "_disabled_1kc3w_53", Hn = "_checkmark_1kc3w_58", te = {
  checkBoxIcon: An,
  showBox: Dn,
  hasErrors: Fn,
  checked: Vn,
  disabled: jn,
  checkmark: Hn
}, Te = (e) => {
  let r = {
    height: e.size,
    width: e.size,
    fontSize: e.size
  };
  const o = {
    className: `${te.checkBoxIcon} ${e.checked ? te.checked : ""} ${e.disabled ? te.disabled : ""} ${e.showBox ? te.showBox : ""} ${e.hasErrors ? te.hasErrors : ""}`,
    style: r
  };
  return /* @__PURE__ */ n.createElement("span", { ...o }, /* @__PURE__ */ n.createElement("span", { "aria-hidden": !0, className: te.checkmark }, e.checked ? e.checkmarkCharacter : ""));
};
Te.propTypes = {
  /**
   * How large should the radio button icon be?
   */
  size: t.string,
  checked: t.bool,
  disabled: t.bool,
  showBox: t.bool,
  hasErrors: t.bool,
  checkmarkCharacter: t.string
};
Te.defaultProps = {
  size: "20px",
  checked: !1,
  disabled: !1,
  showBox: !0,
  hasErrors: !1,
  checkmarkCharacter: "✔"
};
const U = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32.275'%20height='30.469'%20focusable='false'%3e%3cpath%20fill='%239d2024'%20d='m0%2014.355%202.246-6.933c5.176%201.823%208.936%203.402%2011.28%204.736-.62-5.892-.945-9.944-.977-12.158h7.08c-.098%203.223-.472%207.26-1.123%2012.11%203.353-1.693%207.194-3.256%2011.523-4.688l2.246%206.933c-4.134%201.368-8.186%202.28-12.158%202.735%201.986%201.725%204.785%204.801%208.399%209.228l-5.86%204.15c-1.888-2.57-4.118-6.07-6.69-10.497-2.408%204.59-4.524%208.089-6.347%2010.498l-5.762-4.15c3.776-4.656%206.478-7.732%208.106-9.23-4.2-.813-8.187-1.724-11.963-2.734'/%3e%3c/svg%3e", Xn = "_checkBoxInput_f1w9m_1", Wn = "_requiredSymbol_f1w9m_6", Yn = "_contentOnly_f1w9m_13", Gn = "_disabled_f1w9m_13", Un = "_labelText_f1w9m_19", Kn = "_hasErrors_f1w9m_27", ne = {
  checkBoxInput: Xn,
  requiredSymbol: Wn,
  contentOnly: Yn,
  disabled: Gn,
  labelText: Un,
  hasErrors: Kn
}, We = (e) => {
  const r = {
    className: `${ne.checkBoxInput} ${e.contentOnly ? ne.contentOnly : ""} ${e.disabled ? ne.disabled : ""} ${e.hasErrors ? ne.hasErrors : ""}`,
    htmlFor: e.id
  }, o = {
    checked: e.checked,
    disabled: e.disabled,
    showBox: !e.contentOnly,
    hasErrors: e.contentOnly && e.hasErrors,
    checkmarkCharacter: e.checkmarkCharacter
  }, a = {
    id: e.id,
    name: e.name || null,
    type: "checkbox",
    checked: e.checked,
    disabled: e.disabled,
    required: e.required || e.requiredGroup,
    onChange: e.onChange,
    tabIndex: e.tabIndex || null,
    "aria-controls": e["aria-controls"],
    "aria-invalid": e.hasErrors ? "true" : null,
    "aria-describedby": e["aria-describedby"]
  };
  return /* @__PURE__ */ n.createElement("label", { ...r }, e.contentOnly ? /* @__PURE__ */ n.createElement(Te, { ...o }) : /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(Te, { ...o }), /* @__PURE__ */ n.createElement("input", { ...a })), /* @__PURE__ */ n.createElement("span", { className: ne.labelText }, e.children, e.required && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: ne.requiredSymbol })));
};
We.propTypes = {
  checked: t.bool,
  disabled: t.bool,
  required: t.bool,
  requiredGroup: t.bool,
  id: t.string.isRequired,
  name: t.string,
  onChange: t.func.isRequired,
  contentOnly: t.bool,
  hasErrors: t.bool,
  checkmarkCharacter: t.string,
  "aria-controls": t.string,
  "aria-describedby": t.string
};
We.defaultProps = {
  checked: !1,
  disabled: !1,
  required: !1,
  requiredGroup: !1,
  name: "",
  contentOnly: !1,
  hasErrors: !1,
  checkmarkCharacter: "✔"
};
const Zn = "_checkBoxList_1sp8d_1", Jn = "_requiredSymbol_1sp8d_16", ct = {
  checkBoxList: Zn,
  requiredSymbol: Jn
}, Qn = "_headerContainer_t2si7_1", er = "_header_t2si7_1", tr = "_bigHeader_t2si7_16", be = {
  headerContainer: Qn,
  header: er,
  "size-1": "_size-1_t2si7_8",
  bigHeader: tr,
  "size-2": "_size-2_t2si7_28",
  "size-3": "_size-3_t2si7_36",
  "size-4": "_size-4_t2si7_44",
  "size-5": "_size-5_t2si7_52"
}, we = (e) => {
  var f, d, m;
  const r = e.big ? be.bigHeader : "", o = (f = e.htmlTag) != null && f.length ? e.htmlTag : `h${e.size}`, a = be.header, s = be[`size-${e.size}`];
  let l = n.createElement(
    o,
    {
      className: R([a, s, r]),
      id: e.id || null,
      htmlFor: e.htmlFor || null,
      style: (d = e == null ? void 0 : e.label) != null && d.length ? { "--label": `"${e.label}"` } : null
    },
    (m = e.content) != null && m.length ? e.content : e.children
    // props.content for backward compatibility
  );
  return /* @__PURE__ */ n.createElement("div", { className: be.headerContainer }, " ", l, " ");
};
we.propTypes = {
  id: t.string,
  /** Text content inside button */
  content: t.string,
  size: t.oneOf([1, 2, 3, 4, 5]),
  big: t.bool,
  label: t.string,
  htmlTag: t.string,
  htmlFor: t.string
};
we.defaultProps = {
  size: 1
};
const kt = ({ required: e, compact: r, legend: o, legendSize: a, children: s }) => {
  const l = (f) => se(f).map((m, g) => {
    var v;
    return ((v = m == null ? void 0 : m.props) == null ? void 0 : v.type) === "CheckBoxListItem" ? n.cloneElement(m, {
      requiredGroup: e,
      compact: r,
      key: `checkboxListItem-${g}`
    }) : m;
  });
  return /* @__PURE__ */ n.createElement("fieldset", { className: ct.checkBoxList }, o != null && o.length ? /* @__PURE__ */ n.createElement("legend", null, a ? /* @__PURE__ */ n.createElement(we, { size: a }, o) : o, e && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: ct.requiredSymbol })) : null, l(n.Children.toArray(s)));
};
kt.propTypes = {
  legend: t.string,
  legendSize: t.oneOf([1, 2, 3, 4, 5]),
  required: t.bool,
  compact: t.bool
};
const nr = "_checkBoxListItem_jnb8z_1", rr = "_contentOnly_jnb8z_26", ar = "_compact_jnb8z_26", or = "_disabled_jnb8z_41", lr = "_checked_jnb8z_44", re = {
  checkBoxListItem: nr,
  contentOnly: rr,
  compact: ar,
  disabled: or,
  checked: lr
}, Ye = (e) => {
  const r = [
    re.checkBoxListItem,
    e.checked ? re.checked : null,
    e.disabled ? re.disabled : null,
    e.compact ? re.compact : null,
    e.contentOnly ? re.contentOnly : null,
    e.hasErrors ? re.hasErrors : null
  ], o = R(r), a = {
    onChange: e.onChange,
    checked: e.checked,
    disabled: e.disabled,
    required: e.required,
    requiredGroup: e.requiredGroup,
    contentOnly: e.contentOnly,
    hasErrors: e.hasErrors,
    "aria-controls": e["aria-controls"],
    "aria-describedby": e["aria-describedby"],
    id: e.id,
    name: e.name,
    checkmarkCharacter: e.checkmarkCharacter
  };
  return /* @__PURE__ */ n.createElement("div", { className: o }, /* @__PURE__ */ n.createElement(We, { ...a }, e.children));
};
Ye.propTypes = {
  checked: t.bool,
  disabled: t.bool,
  required: t.bool,
  requiredGroup: t.bool,
  id: t.string.isRequired,
  name: t.string,
  onChange: t.func.isRequired,
  contentOnly: t.bool,
  compact: t.bool,
  hasErrors: t.bool,
  checkmarkCharacter: t.string,
  "aria-controls": t.string,
  "aria-describedby": t.string
};
Ye.defaultProps = {
  checked: !1,
  disabled: !1,
  required: !1,
  requiredGroup: !1,
  id: "",
  name: "",
  contentOnly: !1,
  hasErrors: !1,
  checkmarkCharacter: "✔",
  type: "CheckBoxListItem"
};
const sr = "_container_f8z49_1", ir = {
  container: sr
}, xt = (e) => {
  var o;
  const r = {
    "--max-width": ((o = e == null ? void 0 : e.maxWidth) == null ? void 0 : o.length) && e.maxWidth
  };
  return /* @__PURE__ */ n.createElement("div", { className: ir.container, style: r }, e.children);
};
xt.propTypes = {
  maxWidth: t.string
};
const cr = "_contentBox_1ndvc_1", dr = "_link_1ndvc_8", ur = "_content_1ndvc_1", hr = "_title_1ndvc_25", mr = "_secondary_1ndvc_28", fr = "_regular_1ndvc_36", gr = "_large_1ndvc_45", Z = {
  contentBox: cr,
  link: dr,
  default: "_default_1ndvc_21",
  content: ur,
  title: hr,
  secondary: mr,
  regular: fr,
  large: gr
}, Lt = (e) => {
  var f;
  const r = () => {
    let d = Z.title + " " + Z[e.titleSize];
    if (e.title)
      return /* @__PURE__ */ n.createElement("h2", { className: d }, e.title);
  };
  let o = " " + Z[e.color], a = e.href ? " " + Z.link : "", s = Z.contentBox + o + a;
  const l = (f = e.content) != null && f.length ? e.content : e.children;
  return e.href ? /* @__PURE__ */ n.createElement("a", { href: e.href, className: s }, r(), /* @__PURE__ */ n.createElement("div", { className: Z.content }, l)) : /* @__PURE__ */ n.createElement("div", { className: s }, r(), /* @__PURE__ */ n.createElement("div", { className: Z.content }, l));
};
Lt.propTypes = {
  /** Content title inside box */
  title: t.string,
  titleSize: t.oneOf(["regular", "large"]),
  /** Text content inside box */
  content: t.string,
  /** HTML content inside box if not content is set */
  children: t.any,
  color: t.oneOf([
    "default",
    "secondary"
  ])
};
Lt.defaultProps = {
  title: null,
  titleSize: "regular",
  href: null,
  content: "",
  color: "default"
};
const _r = "_descriptionDetails_1d1dj_1", yr = "_compact_1d1dj_7", dt = {
  descriptionDetails: _r,
  compact: yr
}, Mt = ({ compact: e, titleWidth: r, children: o }) => /* @__PURE__ */ n.createElement(
  "dd",
  {
    className: R([dt.descriptionDetails, e && dt.compact]),
    style: { "--title-width": r || null }
  },
  o
);
Mt.propTypes = {
  compact: t.bool,
  titleWidth: t.string
};
Mt.defaultProps = {
  compact: !1
};
const vr = "_descriptionList_w11ua_1", br = "_compact_w11ua_13", ut = {
  descriptionList: vr,
  compact: br
}, Ot = ({ compact: e, titleWidth: r, children: o }) => {
  const a = (l) => se(l).map((d, m) => n.cloneElement(d, {
    compact: e,
    titleWidth: r,
    key: `descriptionListItem-${m}`
  }));
  return ((l) => n.createElement(
    "dl",
    {
      className: R([ut.descriptionList, !!e && ut.compact]),
      style: { "--title-width": r || null }
    },
    a(n.Children.toArray(l))
  ))(o);
};
Ot.propTypes = {
  compact: t.bool,
  titleWidth: t.string
};
Ot.defaultProps = {
  compact: !1
};
const Er = "_descriptionTerm_uuapd_1", Cr = "_compact_uuapd_8", ht = {
  descriptionTerm: Er,
  compact: Cr
}, St = ({ compact: e, titleWidth: r, children: o }) => /* @__PURE__ */ n.createElement(
  "dt",
  {
    className: R([ht.descriptionTerm, e && ht.compact]),
    style: { "--title-width": r || null }
  },
  o
);
St.propTypes = {
  compact: t.bool,
  titleWidth: t.string
};
St.defaultProps = {
  compact: !1
};
const Tr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%3e%3cpath%20fill='%23072938'%20stroke='%23072938'%20stroke-linecap='round'%20stroke-width='3.23'%20d='m3.97%203.57%2017.44%2018.2m-17.44.01L21.41%203.57'/%3e%3c/svg%3e", pr = "_dialog_1qsqp_19", wr = "_dialogContainer_1qsqp_33", kr = "_dialogContent_1qsqp_38", xr = "_closeButton_1qsqp_45", Lr = "_isSidebar_1qsqp_60", Mr = "_modalInVertical_1qsqp_1", Or = "_noPadding_1qsqp_74", Sr = "_left_1qsqp_113", Ir = "_modalInHorizontalLeft_1qsqp_1", zr = "_right_1qsqp_120", $r = "_modalInHorizontalRight_1qsqp_1", Pr = "_dialogOverlay_1qsqp_128", G = {
  dialog: pr,
  dialogContainer: wr,
  dialogContent: kr,
  closeButton: xr,
  isSidebar: Lr,
  modalInVertical: Mr,
  noPadding: Or,
  left: Sr,
  modalInHorizontalLeft: Ir,
  right: zr,
  modalInHorizontalRight: $r,
  dialogOverlay: Pr
}, It = (e) => {
  var f, d;
  const r = he(), o = he(), a = bt((m) => (m && pt(m), m), []);
  ue(() => {
    if (typeof document > "u") return;
    const m = (u) => {
      u.keyCode === 27 && e.onClickOutside && e.onClickOutside();
    }, g = (u) => {
      o != null && o.current && !o.current.contains(u.target) && e.onClickOutside();
    };
    document.addEventListener("mousedown", g), document.addEventListener("keydown", m, !1);
  }, [e, o]), ue(() => {
    r.current.close(), e.hidden || (e.modal ? r.current.showModal() : r.current.show());
  }, [r, e.hidden, e.modal]);
  const s = ((f = e.attachTo) == null ? void 0 : f.length) && R([G.isSidebar, G[e.attachTo]]), l = {
    "--max-width": ((d = e == null ? void 0 : e.maxWidth) == null ? void 0 : d.length) && e.maxWidth
  };
  return /* @__PURE__ */ n.createElement(
    "dialog",
    {
      className: R([
        G.dialog,
        s
      ]),
      ref: r
    },
    /* @__PURE__ */ n.createElement(
      "div",
      {
        ref: o,
        className: G.dialogContainer,
        style: l
      },
      /* @__PURE__ */ n.createElement(
        "div",
        {
          ref: a,
          className: R([
            G.dialogContent,
            e.noPadding && G.noPadding
          ])
        },
        e.closeButton ? /* @__PURE__ */ n.createElement(
          "button",
          {
            "aria-label": "Lukk dialog",
            onClick: e.onClickOutside,
            className: R([
              G.closeButton,
              e.noPadding && G.noPadding
            ])
          },
          /* @__PURE__ */ n.createElement("img", { src: Tr, alt: "" })
        ) : null,
        /* @__PURE__ */ n.createElement("div", { "aria-live": "assertive", role: "dialog" }, e.children)
      )
    )
  );
};
It.propTypes = {
  /** Sets max width for modal content element */
  maxWidth: t.string,
  /** Removes padding from modal content element */
  noPadding: t.bool,
  /** Displays close button in upper right corner */
  closeButton: t.bool,
  /** Function for click outside modal content element or click on close button element */
  onClickOutside: t.func.isRequired,
  modal: t.bool
};
It.defaultProps = {
  maxWidth: "none",
  modal: !1
};
const qr = "_errorMessage_i8u6b_7", Nr = "_errorSign_i8u6b_19", mt = {
  errorMessage: qr,
  errorSign: Nr
}, Br = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20role='presentation'%3e%3cg%20clip-path='url(%23clip0_1089_7422)'%3e%3cmask%20id='mask0_1089_7422'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%20style='mask-type:%20alpha;'%3e%3crect%20width='20'%20height='20'%20style='fill:%20white;'%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1089_7422)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2010C0%204.4775%204.4775%200%2010%200C15.5225%200%2020%204.4775%2020%2010C20%2015.5225%2015.5225%2020%2010%2020C4.4775%2020%200%2015.5225%200%2010ZM11%2014.0766C11%2014.8122%2010.5188%2015.3333%209.83335%2015.3333C9.13335%2015.3333%208.66669%2014.8122%208.66669%2014.0766C8.66669%2013.341%209.13335%2012.8046%209.83335%2012.8046C10.5188%2012.8046%2011%2013.341%2011%2014.0766ZM10.65%2011.9463H8.98752L8.75419%204.66663H10.8834L10.65%2011.9463Z'%20style='fill:%20rgb(219,%200,%200);'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1089_7422'%3e%3crect%20width='20'%20height='20'%20fill='white'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ie = (e) => {
  var o;
  const r = () => {
    var a;
    return {
      id: (a = e.id) != null && a.length ? e.id : null,
      className: mt.errorMessage
    };
  };
  return (o = e == null ? void 0 : e.content) != null && o.length ? /* @__PURE__ */ n.createElement("span", { "aria-live": "polite", ...r() }, /* @__PURE__ */ n.createElement("img", { src: Br, alt: "", className: mt.errorSign }), e.content) : null;
};
ie.propTypes = {
  id: t.string,
  /** Text content inside error message */
  content: t.oneOfType([
    t.string,
    t.arrayOf(t.oneOfType([t.string, t.object]))
  ])
};
ie.defaultProps = {
  content: ""
};
const Rr = "_label_18de6_1", Ar = "_inline_18de6_11", Dr = "_normalCursor_18de6_14", Re = {
  label: Rr,
  inline: Ar,
  normalCursor: Dr
}, Q = (e) => {
  var l;
  let r = { ...e };
  const o = (l = e.htmlTag) != null && l.length ? e.htmlTag : "label";
  delete r.inline, delete r.normalCursor, delete r.htmlTag;
  const a = `${Re.label} ${e.inline ? Re.inline : ""} ${e.normalCursor ? Re.normalCursor : ""}`;
  return n.createElement(
    o,
    {
      ...r,
      className: a,
      id: e.id || null
    },
    e.children
  );
};
Q.propTypes = {
  inline: t.bool,
  normalCursor: t.bool,
  htmlTag: t.string
};
Q.defaultProps = {
  inline: !1,
  normalCursor: !1,
  htmlTag: "label"
};
const Fr = "_dragAndDropFileInput_l98z1_1", Vr = "_requiredSymbol_l98z1_1", jr = "_dragAndDropContainer_l98z1_8", Hr = "_highlighted_l98z1_26", Ee = {
  dragAndDropFileInput: Fr,
  requiredSymbol: Vr,
  dragAndDropContainer: jr,
  highlighted: Hr
}, zt = (e) => {
  var v, y;
  const [r, o] = de(!1), a = he(), s = he(), l = (b) => {
    b.preventDefault(), b.stopPropagation();
  }, f = (b, w) => b || w, d = () => {
    s.current.click();
  }, m = () => `${e.id}-errorMessage`, g = {
    id: e.id,
    "aria-describedby": e.hasErrors && ((v = e.errorMessage) != null && v.length) ? m() : (y = e["aria-describedby"]) != null && y.length ? e["aria-describedby"] : null,
    "aria-invalid": e.hasErrors ? "true" : null,
    name: e.name,
    required: e.required
  };
  let u;
  return e.selectedFileName ? u = e.buttonContentWhenSelectedFile ? e.buttonContentWhenSelectedFile : e.buttonContent : u = e.buttonContent, ue(() => {
    const b = (p) => {
      e.onDragAndDropChange(p);
    }, w = (p) => {
      const N = p.dataTransfer.files;
      b(N);
    };
    if (a != null && a.current)
      return a.current.addEventListener("dragenter", l, !1), a.current.addEventListener("dragover", l, !1), a.current.addEventListener("dragleave", l, !1), a.current.addEventListener("drop", l, !1), a.current.addEventListener(
        "dragenter",
        () => {
          o(!0);
        },
        !1
      ), a.current.addEventListener(
        "dragover",
        () => {
          o(!0);
        },
        !1
      ), a.current.addEventListener(
        "dragleave",
        () => {
          o(!1);
        },
        !1
      ), a.current.addEventListener(
        "drop",
        () => {
          o(!1);
        },
        !1
      ), a.current.addEventListener("drop", w, !1), () => {
        a.current.removeEventListener("dragenter", l, !1), a.current.removeEventListener("dragover", l, !1), a.current.removeEventListener("dragleave", l, !1), a.current.removeEventListener("drop", l, !1), a.current.removeEventListener("dragenter", () => o(!0), !1), a.current.removeEventListener("dragover", () => o(!0), !1), a.current.removeEventListener("dragleave", () => o(!1), !1), a.current.removeEventListener("drop", () => o(!1), !1), a.current.removeEventListener("drop", w, !1);
      };
  }, [e]), /* @__PURE__ */ n.createElement("div", { className: Ee.dragAndDropFileInput }, /* @__PURE__ */ n.createElement(Q, { htmlFor: e.id }, e.label, e.required && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: Ee.requiredSymbol })), /* @__PURE__ */ n.createElement("div", null, e.children), e.contentOnly ? null : /* @__PURE__ */ n.createElement(
    "div",
    {
      ref: a,
      className: `${Ee.dragAndDropContainer} ${r ? Ee.highlighted : ""}`
    },
    e.selectedFileName ? /* @__PURE__ */ n.createElement("div", null, /* @__PURE__ */ n.createElement("span", null, /* @__PURE__ */ n.createElement("b", null, "Valgt fil:"), " ", e.selectedFileName)) : /* @__PURE__ */ n.createElement("div", null, "Slipp fil her"),
    /* @__PURE__ */ n.createElement(
      "input",
      {
        ...g,
        ref: s,
        type: "file",
        onChange: e.onSelectChange
      }
    ),
    e.buttonContent ? /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("div", null, e.selectedFileName ? "" : "eller klikk på knappen for å velge fil"), /* @__PURE__ */ n.createElement(
      pe,
      {
        size: "small",
        type: "button",
        color: e.buttonColor,
        onClick: () => d(),
        content: u,
        hasErrors: e.hasErrors,
        "data-transaction-name": e["data-transaction-name"]
      }
    )) : null
  ), e.contentOnly ? /* @__PURE__ */ n.createElement("span", null, f(e.selectedFileName, e.defaultContent)) : "", /* @__PURE__ */ n.createElement(ie, { id: m(), content: e.errorMessage }));
};
zt.propTypes = {
  /** Text content inside list item */
  id: t.string.isRequired,
  name: t.string,
  onSelectChange: t.func.isRequired,
  onDragAndDropChange: t.func.isRequired,
  label: t.oneOfType([
    t.string,
    t.arrayOf(t.oneOfType([t.string, t.object]))
  ]),
  contentOnly: t.bool,
  buttonColor: t.string,
  buttonContent: t.string,
  buttonContentWhenSelectedFile: t.string,
  selectedFileName: t.string,
  defaultContent: t.string,
  hasErrors: t.bool,
  errorMessage: t.oneOfType([
    t.string,
    t.arrayOf(t.oneOfType([t.string, t.object]))
  ]),
  required: t.bool,
  "data-transaction-name": t.string
};
zt.defaultProps = {
  label: "",
  contentOnly: !1,
  buttonColor: "primary",
  defaultContent: "",
  hasErrors: !1,
  errorMessage: "",
  required: !1
};
const Xr = "_errorBoxContainer_88ulw_7", Wr = "_messageIn_88ulw_1", Yr = "_warning_88ulw_14", Gr = "_error_88ulw_7", Ur = "_fullScreen_88ulw_22", Kr = "_errorBox_88ulw_7", Zr = "_infoSign_88ulw_38", ae = {
  errorBoxContainer: Xr,
  messageIn: Wr,
  warning: Yr,
  error: Gr,
  fullScreen: Ur,
  errorBox: Kr,
  infoSign: Zr
}, $t = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20role='presentation'%3e%3cpath%20d='M10%200C4.4775%200%200%204.4775%200%2010C0%2015.5225%204.4775%2020%2010%2020C15.5225%2020%2020%2015.5225%2020%2010C20%204.4775%2015.5225%200%2010%200ZM8.30583%2013.3417C8.77583%2011.8508%209.66583%2010.065%209.82333%209.61333C10.0508%208.9575%209.6475%208.66667%208.37333%209.7875L8.09%209.25417C9.54333%207.67333%2012.5358%207.31583%2011.5175%209.765C10.8817%2011.2942%2010.4267%2012.3267%2010.1667%2013.1233C9.7875%2014.2842%2010.745%2013.8133%2011.6825%2012.9475C11.81%2013.1558%2011.8517%2013.2233%2011.9792%2013.4633C9.8975%2015.445%207.58667%2015.62%208.30583%2013.3417ZM12.2575%206.53417C11.8142%206.91167%2011.1575%206.90333%2010.79%206.51583C10.4225%206.12833%2010.4842%205.50917%2010.9267%205.13167C11.37%204.75417%2012.0267%204.76333%2012.3942%205.15C12.76%205.53833%2012.7%206.1575%2012.2575%206.53417Z'%20style='fill:%20rgb(0,%2048,%2069);'%3e%3c/path%3e%3c/svg%3e", Pt = (e) => /* @__PURE__ */ n.createElement(
  "div",
  {
    className: R([
      ae.errorBoxContainer,
      ae[e.type],
      e.fullScreen && ae.fullScreen
    ])
  },
  /* @__PURE__ */ n.createElement("div", { className: R([ae.errorBox, e.fullScreen && ae.fullScreen]) }, /* @__PURE__ */ n.createElement("img", { src: $t, alt: "", className: ae.infoSign }), e.children)
);
Pt.propTypes = {
  type: t.oneOf(["warning", "error"]),
  fullScreen: t.bool
};
Pt.defaultProps = {
  children: "",
  type: "warning",
  fullScreen: !1
};
const Jr = "_footer_19fad_1", Qr = {
  footer: Jr
}, Do = (e) => /* @__PURE__ */ n.createElement("footer", { className: Qr.footer }, /* @__PURE__ */ n.createElement(xt, null, e.children)), ea = "_infoBox_1mh67_7", ta = "_infoSign_1mh67_15", ft = {
  infoBox: ea,
  infoSign: ta
}, na = (e) => /* @__PURE__ */ n.createElement("div", { className: ft.infoBox }, /* @__PURE__ */ n.createElement("img", { src: $t, alt: "", className: ft.infoSign }), e.children);
na.defaultProps = {
  children: ""
};
const Ge = (e) => {
  let r = "";
  const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = o.length;
  for (let s = 0; s < e; s++)
    r += o.charAt(Math.floor(Math.random() * a));
  return r;
}, ra = "_inputField_17rmz_1", aa = "_noMargin_17rmz_4", oa = "_requiredSymbol_17rmz_10", la = "_file_17rmz_17", sa = "_input_17rmz_1", ia = "_hasErrors_17rmz_50", ca = "_fileInputContainer_17rmz_62", J = {
  inputField: ra,
  noMargin: aa,
  requiredSymbol: oa,
  file: la,
  input: sa,
  hasErrors: ia,
  fileInputContainer: ca
}, qt = (e) => {
  var m;
  const r = (g) => {
    if (!g)
      return null;
    const u = new Date(g), v = u.getFullYear(), y = u.getMonth() + 1 < 10 ? `0${u.getMonth() + 1}` : u.getMonth() + 1;
    return `${u.getDate() < 10 ? `0${u.getDate()}` : u.getDate()}.${y}.${v}`;
  }, o = (g, u) => e.type === "date" ? g ? r(g) : u : g || u, a = () => `${e.id}-errorMessage`, s = (g, u, v) => {
    var y, b;
    return {
      name: e.name,
      readOnly: e.readOnly,
      disabled: e.disabled,
      required: e.required,
      type: e.type,
      role: e.role,
      id: e.id,
      key: u || `${e.id}-${Ge(6)}`,
      min: e.min || null,
      max: e.max || null,
      onChange: e.onChange,
      onBlur: e.onBlur,
      [g ? "defaultValue" : "value"]: g || e.value,
      placeholder: e.placeholder || null,
      className: e.hasErrors ? J.hasErrors : null,
      "aria-describedby": e.hasErrors && ((y = e.errorMessage) != null && y.length) ? a() : (b = e["aria-describedby"]) != null && b.length ? e["aria-describedby"] : null,
      "aria-invalid": e.hasErrors ? "true" : null,
      "aria-autocomplete": e["aria-autocomplete"] || null,
      style: v
    };
  }, l = e.defaultValue ? e.defaultValue : e.value || null, f = e.elementKey || null, d = {
    ...((m = e.width) == null ? void 0 : m.length) && { maxWidth: e.width }
  };
  return /* @__PURE__ */ n.createElement(
    "div",
    {
      className: R([
        J.inputField,
        J[e.type],
        e.noMargin && J.noMargin
      ])
    },
    /* @__PURE__ */ n.createElement(Q, { htmlFor: e.id }, e.label, e.required && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: J.requiredSymbol }), e.type === "file" ? /* @__PURE__ */ n.createElement("div", { className: J.fileInputContainer }, /* @__PURE__ */ n.createElement("span", { className: J.input }, e.selectedFileName), e.buttonContent ? /* @__PURE__ */ n.createElement(
      pe,
      {
        color: e.buttonColor,
        onClick: () => {
          if (typeof document < "u") {
            const g = document.getElementById(e.id);
            g == null || g.click();
          }
        },
        content: e.buttonContent,
        type: "button"
      }
    ) : null) : null),
    e.contentOnly ? /* @__PURE__ */ n.createElement("span", null, o(
      e.value || e.defaultValue,
      e.defaultContent
    )) : /* @__PURE__ */ n.createElement(
      "input",
      {
        ...s(l, f, d)
      }
    ),
    /* @__PURE__ */ n.createElement(ie, { id: a(), content: e.errorMessage })
  );
};
qt.propTypes = {
  id: t.string.isRequired,
  onChange: t.func.isRequired,
  onBlur: t.func,
  name: t.string,
  type: t.string,
  disabled: t.bool,
  required: t.bool,
  width: t.string,
  value: t.any,
  defaultValue: t.any,
  elementKey: t.string,
  label: t.oneOfType([
    t.string,
    t.arrayOf(
      t.oneOfType([t.string, t.object])
    )
  ]),
  contentOnly: t.bool,
  buttonColor: t.oneOf(["primary", "secondary"]),
  buttonContent: t.string,
  selectedFileName: t.string,
  dateFormat: t.string,
  placeholder: t.string,
  defaultContent: t.string,
  "aria-describedby": t.string,
  "aria-autocomplete": t.oneOf(["none", "inline", "list", "both"]),
  hasErrors: t.bool,
  errorMessage: t.oneOfType([
    t.string,
    t.arrayOf(
      t.oneOfType([t.string, t.object])
    )
  ]),
  noMargin: t.bool
};
qt.defaultProps = {
  onChange: () => !1,
  name: "",
  type: "text",
  disabled: !1,
  required: !1,
  label: "",
  contentOnly: !1,
  buttonColor: "primary",
  dateFormat: "d. MMMM, yyyy",
  placeholder: "",
  defaultContent: "",
  hasErrors: !1,
  errorMessage: "",
  noMargin: !1
};
const da = "_lead_176gy_1", ua = {
  lead: da
}, Nt = ({ id: e, htmlTag: r, children: o }) => {
  const a = ua.lead;
  return n.createElement(
    r,
    {
      className: a,
      id: e || null
    },
    o
  );
};
Nt.propTypes = {
  id: t.string,
  htmlTag: t.string
};
Nt.defaultProps = {
  htmlTag: "p"
};
const ha = "_list_16gsl_1", ma = "_compact_16gsl_10", gt = {
  list: ha,
  compact: ma
}, Bt = (e) => {
  const r = (a) => se(a).map((l, f) => n.cloneElement(l, {
    compact: e.compact,
    key: `listItem-${f}`
  }));
  return ((a) => {
    let s = e.ordered ? "ol" : "ul";
    const l = e.ordered ? "decimal" : "disc";
    return n.createElement(
      s,
      {
        className: `${gt.list} ${e.compact ? gt.compact : ""}`,
        style: { ["--listStyle"]: e.listStyle || l }
      },
      r(n.Children.toArray(a))
    );
  })(e.children);
};
Bt.propTypes = {
  listStyle: t.string,
  compact: t.bool,
  ordered: t.bool
};
Bt.defaultProps = {
  ordered: !1,
  compact: !1
};
const fa = "_listItem_33xs0_1", ga = "_compact_33xs0_5", _t = {
  listItem: fa,
  compact: ga
}, Rt = ({ compact: e, children: r }) => /* @__PURE__ */ n.createElement("li", { className: R([_t.listItem, e && _t.compact]) }, r);
Rt.propTypes = {
  compact: t.bool
};
Rt.defaultProps = {
  compact: !1
};
const _a = "_loadingAnimation_hzd5u_1", ya = "_fixed_hzd5u_17", Ae = {
  loadingAnimation: _a,
  fixed: ya
}, At = (e) => /* @__PURE__ */ n.createElement("div", { className: e.fixed ? Ae.loadingAnimation + " " + Ae.fixed : Ae.loadingAnimation }, e.message);
At.propTypes = {
  fixed: t.bool,
  active: t.bool,
  /** Text content inside button */
  message: t.string
};
At.defaultProps = {
  fixed: !1,
  active: !0,
  message: ""
};
const je = (e) => typeof e.listItem == "string" ? /* @__PURE__ */ n.createElement("li", null, /* @__PURE__ */ n.createElement("span", null, e.listItem)) : typeof e.listItem == "object" ? /* @__PURE__ */ n.createElement("li", null, /* @__PURE__ */ n.createElement("a", { href: e.listItem.href }, e.listItem.name)) : null;
je.propTypes = {
  listItem: t.oneOfType([t.string, t.object])
};
const va = (e) => (e == null ? void 0 : e.logo) || null, ba = (e) => (e == null ? void 0 : e.logoPadding) || null, Ea = (e) => (e == null ? void 0 : e.appName) || null, Ca = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='14%20337%20406%20110'%20style='enable-background:new%2014%20337%20406%20110;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{display:none;}%20.st1{fill:%23003045;}%20.st2{fill:%2389BAD6;}%20.st3{fill:%23FFFFFF;}%20.st4{display:inline;fill:%23FFFFFF;}%20.st5{display:inline;fill:%23D7D4D1;}%20%3c/style%3e%3cg%20id='skisse__x28_forstørret_x29_'%20class='st0'%3e%3c/g%3e%3cg%20id='logo'%3e%3crect%20id='XMLID_5_'%20x='14'%20y='337'%20class='st1'%20width='640'%20height='110'/%3e%3cg%20id='XMLID_82_'%3e%3crect%20id='XMLID_80_'%20x='14'%20y='337'%20class='st2'%20width='150'%20height='110'/%3e%3cg%20id='XMLID_74_'%3e%3cpolygon%20id='XMLID_79_'%20class='st3'%20points='75.1,420.7%2083.2,426.1%2083.2,389.4%20103,402.2%20103,384%2075.1,365.9%20'/%3e%3cpolygon%20id='XMLID_78_'%20class='st3'%20points='41.9,424.2%2041.9,404.7%2060.9,392.4%2060.9,350.3%2027.3,372.1%2027.3,433.7%20'/%3e%3cpolygon%20id='XMLID_77_'%20class='st3'%20points='106.1,381.9%20106.1,417.1%20118.9,425.4%20118.9,354.7%2091.6,372.5%20'/%3e%3cpolygon%20id='XMLID_76_'%20class='st3'%20points='64,350.3%2064,409.8%2071.9,404.7%2071.9,363.9%2071.9,355.5%20'/%3e%3cpolygon%20id='XMLID_75_'%20class='st3'%20points='128.4,385.6%20122.1,389.7%20122.1,423.4%20128.4,419.3%20150.7,433.7%20150.7,399.9%20'/%3e%3c/g%3e%3c/g%3e%3cg%20id='XMLID_6_'%3e%3crect%20id='XMLID_81_'%20x='164.5'%20y='367.5'%20class='st1'%20width='255.5'%20height='79.5'/%3e%3cg%20id='XMLID_7_'%3e%3cg%20id='XMLID_44_'%3e%3cpath%20id='XMLID_71_'%20class='st3'%20d='M187.3,385.6h4.7c5.5,0,8.7,2.2,8.7,8.2s-4,8.2-8.7,8.2h-4.7V385.6z%20M191.9,399.4%20c4.2,0,5.5-1.6,5.5-5.4c0-3.7-1.3-5.6-5.5-5.6h-1.5v11H191.9z'/%3e%3cpath%20id='XMLID_69_'%20class='st3'%20d='M203.5,385.6h3.2v16.5h-3.2V385.6z'/%3e%3cpath%20id='XMLID_66_'%20class='st3'%20d='M213.7,396h-0.2v6.1h-3.2v-16.5h4.7c3.8,0,6.4,1.4,6.4,4.9c0,2.8-1.7,4.6-4.4,5.2l5.6,6.3%20h-3.8L213.7,396z%20M215,393.7c2,0,3.2-1,3.2-2.9c0-1.9-1.2-2.7-3.2-2.7h-1.5v5.5h1.5V393.7z'/%3e%3cpath%20id='XMLID_64_'%20class='st3'%20d='M224.6,385.6h10.5v2.7h-7.3v4h4.9v2.5h-4.9v4.5h7.3v2.7h-10.5V385.6z'/%3e%3cpath%20id='XMLID_62_'%20class='st3'%20d='M238,385.6h3.2v7.4l6.5-7.3h3.3l-5.9,6.6l6.3,9.9h-3.6l-4.7-7.7l-1.9,2.1v5.5H238V385.6z'/%3e%3cpath%20id='XMLID_60_'%20class='st3'%20d='M256.8,388.4H252v-2.7h12.6v2.7H260v13.7h-3.2V388.4z'/%3e%3cpath%20id='XMLID_57_'%20class='st3'%20d='M265.7,393.9c0-5.7,4-8.6,8.1-8.6c4.8,0,8.1,3,8.1,8.6c0,5.7-4,8.6-8.1,8.6%20C269,402.5,265.7,399.6,265.7,393.9z%20M278.7,394c0-3.9-1.9-6-4.8-6s-4.8,2.1-4.8,5.8c0,3.9,1.9,6.1,4.8,6.1%20C276.7,399.8,278.7,397.7,278.7,394z'/%3e%3cpath%20id='XMLID_54_'%20class='st3'%20d='M288,396h-0.2v6.1h-3.2v-16.5h4.7c3.8,0,6.4,1.4,6.4,4.9c0,2.8-1.7,4.6-4.4,5.2l5.6,6.3%20h-3.8L288,396z%20M289.3,393.7c2,0,3.2-1,3.2-2.9c0-1.9-1.2-2.7-3.2-2.7h-1.5v5.5h1.5V393.7z'/%3e%3cpath%20id='XMLID_51_'%20class='st3'%20d='M303.1,387.3l-0.6-1.7h3.3l6.5,16.5H309l-1.3-3.4h-6.1l-1.3,3.4h-3.1L303.1,387.3z%20M302.5,396.4h4.4l-1.7-4.5l-0.5-1.4l-0.5,1.4L302.5,396.4z'/%3e%3cpath%20id='XMLID_49_'%20class='st3'%20d='M316,388.4h-4.7v-2.7h12.6v2.7h-4.7v13.7H316V388.4z'/%3e%3cpath%20id='XMLID_47_'%20class='st3'%20d='M326.2,385.6h10.5v2.7h-7.3v4h4.9v2.5h-4.9v4.5h7.3v2.7h-10.5V385.6z'/%3e%3cpath%20id='XMLID_45_'%20class='st3'%20d='M343.1,388.4h-4.7v-2.7H351v2.7h-4.7v13.7h-3.2L343.1,388.4L343.1,388.4z'/%3e%3c/g%3e%3cg%20id='XMLID_8_'%3e%3cpath%20id='XMLID_42_'%20class='st3'%20d='M187.3,412.3h10.3v2.7h-7.1v4.1h4.7v2.4h-4.7v7.2h-3.2V412.3z'/%3e%3cpath%20id='XMLID_39_'%20class='st3'%20d='M198.8,420.5c0-5.7,4-8.6,8.1-8.6c4.8,0,8.1,3,8.1,8.6c0,5.7-4,8.6-8.1,8.6%20C202.1,429.1,198.8,426.2,198.8,420.5z%20M211.7,420.6c0-3.9-1.9-6-4.8-6c-2.9,0-4.8,2.1-4.8,5.8c0,3.9,1.9,6.1,4.8,6.1%20C209.8,426.4,211.7,424.3,211.7,420.6z'/%3e%3cpath%20id='XMLID_36_'%20class='st3'%20d='M221.1,422.6h-0.2v6.1h-3.2v-16.4h4.7c3.8,0,6.4,1.4,6.4,4.9c0,2.8-1.7,4.6-4.4,5.2l5.6,6.3%20h-3.8L221.1,422.6z%20M222.4,420.3c2,0,3.2-1,3.2-2.9s-1.2-2.7-3.2-2.7h-1.5v5.5L222.4,420.3L222.4,420.3z'/%3e%3cpath%20id='XMLID_32_'%20class='st3'%20d='M237.8,412.3h4.9c4.5,0,6.4,1.5,6.4,4.1c0,2.3-1.3,3.4-3.1,3.8l0,0c2,0.3,3.3,1.3,3.3,3.9%20s-1.8,4.7-6.5,4.7h-5L237.8,412.3L237.8,412.3z%20M242.8,419c2.4,0,3.1-0.8,3.1-2.2c0-1.4-0.9-2-3.1-2H241v4.2H242.8z%20M243,426.1%20c2.4,0,3.2-0.8,3.2-2.3c0-1.4-0.8-2.3-3.2-2.3h-2v4.5h2V426.1z'/%3e%3cpath%20id='XMLID_30_'%20class='st3'%20d='M255.5,422l-5.4-9.7h3.5l3.6,6.9l3.7-6.9h3.2l-5.4,9.7v6.8h-3.2L255.5,422L255.5,422z'/%3e%3cpath%20id='XMLID_28_'%20class='st3'%20d='M264.5,420.5c0-5.7,3.6-8.6,8-8.6c2.7,0,4.3,0.8,5.2,1.6v3.6c-0.9-1.4-2.4-2.4-4.8-2.4%20c-3.3,0-5.2,2-5.2,5.7s1.8,6.2,4.7,6.2c0.8,0,1.5-0.1,2.1-0.3v-5.1h3.2v6.6c-1.1,0.7-2.9,1.4-5.4,1.4%20C267.7,429.1,264.5,426.3,264.5,420.5z'/%3e%3cpath%20id='XMLID_26_'%20class='st3'%20d='M280,420.5c0-5.7,3.6-8.6,8-8.6c2.7,0,4.3,0.8,5.2,1.6v3.6c-0.9-1.4-2.4-2.4-4.8-2.4%20c-3.3,0-5.2,2-5.2,5.7s1.8,6.2,4.7,6.2c0.8,0,1.5-0.1,2.1-0.3v-5.1h3.2v6.6c-1.1,0.7-2.9,1.4-5.4,1.4%20C283.2,429.1,280,426.3,280,420.5z'/%3e%3cpath%20id='XMLID_24_'%20class='st3'%20d='M296.5,412.3h3.2v7.3l6.5-7.3h3.3l-5.9,6.6l6.3,9.9h-3.6l-4.7-7.7l-1.9,2.1v5.5h-3.2%20L296.5,412.3L296.5,412.3z'/%3e%3cpath%20id='XMLID_22_'%20class='st3'%20d='M310.1,412.3h3.3l3.9,11.5h0.1l4-11.5h3.1l-5.9,16.5H316L310.1,412.3z'/%3e%3cpath%20id='XMLID_19_'%20class='st3'%20d='M329.2,413.9l-0.6-1.7h3.3l6.5,16.5h-3.3l-1.3-3.4h-6.1l-1.3,3.4h-3.1L329.2,413.9z%20M328.6,423h4.4l-1.7-4.5l-0.5-1.4l-0.5,1.4L328.6,423z'/%3e%3cpath%20id='XMLID_17_'%20class='st3'%20d='M340.4,412.3h3.2V426h6.1v2.8h-9.3L340.4,412.3L340.4,412.3z'/%3e%3cpath%20id='XMLID_15_'%20class='st3'%20d='M352.1,412.3h3.2v16.5h-3.2V412.3z'/%3e%3cpath%20id='XMLID_13_'%20class='st3'%20d='M362.3,415h-4.7v-2.7h12.6v2.7h-4.7v13.7h-3.2L362.3,415L362.3,415z'/%3e%3cpath%20id='XMLID_11_'%20class='st3'%20d='M372.6,412.3h10.5v2.7h-7.3v3.9h4.9v2.5h-4.9v4.6h7.3v2.7h-10.5V412.3z'/%3e%3cpath%20id='XMLID_9_'%20class='st3'%20d='M389.4,415h-4.7v-2.7h12.6v2.7h-4.7v13.7h-3.2L389.4,415L389.4,415z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='hamburgermeny'%20class='st0'%3e%3crect%20id='XMLID_94_'%20x='578'%20y='386'%20class='st4'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_95_'%20x='578'%20y='423'%20class='st4'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_96_'%20x='578'%20y='405'%20class='st4'%20width='60'%20height='6'/%3e%3c/g%3e%3cg%20id='hamburgermeny__hover'%20class='st0'%3e%3crect%20id='XMLID_97_'%20x='578'%20y='386'%20class='st5'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_93_'%20x='578'%20y='423'%20class='st5'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_91_'%20x='578'%20y='405'%20class='st5'%20width='60'%20height='6'/%3e%3c/g%3e%3c/svg%3e", Ta = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20id='Layer_1'%20x='0px'%20y='0px'%20viewBox='0%200%20340.2%20412.5'%20style='enable-background:new%200%200%20340.2%20412.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23003045;}%20.st1{fill:%2389BAD6;}%20.st2{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3crect%20x='0'%20y='253.2'%20class='st0'%20width='340.2'%20height='105.8'/%3e%3crect%20x='0'%20class='st1'%20width='340.2'%20height='249.4'/%3e%3cg%3e%3cpolygon%20class='st2'%20points='138.5,189.9%20157,202%20157,118.8%20201.7,147.8%20201.7,106.6%20138.5,65.5%20'/%3e%3cpolygon%20class='st2'%20points='63.3,197.7%2063.3,153.5%20106.3,125.5%20106.3,30.2%2030.2,79.7%2030.2,219.2%20'/%3e%3cpolygon%20class='st2'%20points='208.9,101.9%20208.9,181.7%20238,200.5%20238,40.1%20175.9,80.4%20'/%3e%3cpolygon%20class='st2'%20points='113.4,30.2%20113.4,165.2%20131.4,153.5%20131.4,60.9%20131.4,41.9%20'/%3e%3cpolygon%20class='st2'%20points='259.5,110.2%20245.1,119.6%20245.1,195.9%20259.5,186.5%20309.9,219.2%20309.9,142.6%20'/%3e%3c/g%3e%3cpolygon%20class='st0'%20points='0,362.8%2075.6,412%2075.6,362.8%20'/%3e%3cg%3e%3cg%3e%3cpath%20class='st2'%20d='M30.2,277.5h6.2c7.3,0,11.6,2.9,11.6,11s-5.3,11-11.6,11h-6.2V277.5z%20M36.5,295.7c5.6,0,7.3-2.2,7.3-7.2%20c0-5-1.7-7.5-7.3-7.5h-2v14.6H36.5z'/%3e%3cpath%20class='st2'%20d='M51.9,277.5h4.3v21.9h-4.3V277.5z'/%3e%3cpath%20class='st2'%20d='M65.5,291.2h-0.2v8.2H61v-21.9h6.2c5.1,0,8.6,1.8,8.6,6.5c0,3.7-2.3,6.2-5.8,7l7.5,8.5h-5.1L65.5,291.2z%20M67.2,288.2c2.7,0,4.3-1.3,4.3-3.8c0-2.5-1.6-3.5-4.3-3.5h-1.9v7.4H67.2z'/%3e%3cpath%20class='st2'%20d='M80,277.5h14v3.6h-9.7v5.3h6.5v3.4h-6.5v6H94v3.6H80V277.5z'/%3e%3cpath%20class='st2'%20d='M97.8,277.5h4.3v9.8l8.7-9.8h4.4l-7.9,8.7l8.4,13.2h-4.8l-6.2-10.2l-2.6,2.8v7.4h-4.3V277.5z'/%3e%3cpath%20class='st2'%20d='M122.8,281.1h-6.3v-3.6h16.8v3.6H127v18.3h-4.3V281.1z'/%3e%3cpath%20class='st2'%20d='M134.7,288.4c0-7.6,5.4-11.5,10.8-11.5c6.4,0,10.8,3.9,10.8,11.5c0,7.6-5.4,11.5-10.8,11.5%20C139.1,299.9,134.7,296,134.7,288.4z%20M151.9,288.6c0-5.2-2.5-8-6.5-8c-3.9,0-6.5,2.8-6.5,7.7c0,5.2,2.5,8.1,6.5,8.1%20C149.4,296.3,151.9,293.5,151.9,288.6z'/%3e%3cpath%20class='st2'%20d='M164.4,291.2h-0.2v8.2h-4.3v-21.9h6.2c5.1,0,8.6,1.8,8.6,6.5c0,3.7-2.3,6.2-5.8,7l7.5,8.5h-5.1L164.4,291.2z%20M166.2,288.2c2.7,0,4.3-1.3,4.3-3.8c0-2.5-1.5-3.5-4.3-3.5h-1.9v7.4H166.2z'/%3e%3cpath%20class='st2'%20d='M184.5,279.7l-0.8-2.2h4.4l8.6,21.9h-4.5l-1.7-4.5h-8.1l-1.7,4.5h-4.1L184.5,279.7z%20M183.6,291.7h5.8l-2.3-6%20l-0.6-1.9l-0.6,1.9L183.6,291.7z'/%3e%3cpath%20class='st2'%20d='M201.7,281.1h-6.3v-3.6h16.8v3.6h-6.3v18.3h-4.3V281.1z'/%3e%3cpath%20class='st2'%20d='M215.3,277.5h14v3.6h-9.7v5.3h6.5v3.4h-6.5v6h9.7v3.6h-14V277.5z'/%3e%3cpath%20class='st2'%20d='M237.7,281.1h-6.3v-3.6h16.8v3.6H242v18.3h-4.3V281.1z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st2'%20d='M30.2,312.9H44v3.6h-9.5v5.5h6.2v3.3h-6.2v9.6h-4.3V312.9z'/%3e%3cpath%20class='st2'%20d='M45.6,323.9c0-7.6,5.4-11.5,10.8-11.5c6.4,0,10.8,3.9,10.8,11.5c0,7.6-5.4,11.5-10.8,11.5%20C50,335.3,45.6,331.4,45.6,323.9z%20M62.8,324c0-5.2-2.5-8-6.5-8c-3.9,0-6.5,2.8-6.5,7.7c0,5.2,2.5,8.1,6.5,8.1%20C60.3,331.7,62.8,328.9,62.8,324z'/%3e%3cpath%20class='st2'%20d='M75.3,326.7h-0.2v8.2h-4.3v-21.9H77c5.1,0,8.6,1.8,8.6,6.5c0,3.7-2.3,6.2-5.8,7l7.5,8.5h-5.1L75.3,326.7z%20M77,323.7c2.7,0,4.3-1.3,4.3-3.8c0-2.5-1.5-3.5-4.3-3.5h-1.9v7.4H77z'/%3e%3cpath%20class='st2'%20d='M97.6,312.9h6.5c6,0,8.5,2,8.5,5.5c0,3-1.7,4.5-4.1,5.1v0.1c2.6,0.5,4.5,1.7,4.5,5.1c0,3.5-2.5,6.2-8.6,6.2%20h-6.7V312.9z%20M104.3,321.9c3.2,0,4.1-1.1,4.1-2.9c0-1.8-1.2-2.6-4.1-2.6h-2.4v5.5H104.3z%20M104.4,331.3c3.2,0,4.3-1.1,4.3-3%20c0-1.9-1.1-3-4.3-3h-2.6v6H104.4z'/%3e%3cpath%20class='st2'%20d='M121.2,325.8l-7.2-12.9h4.7l4.8,9.2l4.9-9.2h4.2l-7.2,12.9v9h-4.3V325.8z'/%3e%3cpath%20class='st2'%20d='M133,323.9c0-7.6,4.8-11.5,10.7-11.5c3.6,0,5.7,1.1,6.9,2.1v4.8c-1.2-1.9-3.2-3.3-6.4-3.3%20c-4.4,0-6.9,2.7-6.9,7.7c0,5,2.4,8.3,6.3,8.3c1,0,2-0.1,2.7-0.4v-6.8h4.3v8.8c-1.5,1-3.9,1.8-7.2,1.8%20C137.3,335.3,133,331.5,133,323.9z'/%3e%3cpath%20class='st2'%20d='M153.8,323.9c0-7.6,4.8-11.5,10.7-11.5c3.6,0,5.7,1.1,6.9,2.1v4.8c-1.2-1.9-3.2-3.3-6.4-3.3%20c-4.4,0-6.9,2.7-6.9,7.7c0,5,2.4,8.3,6.3,8.3c1,0,2-0.1,2.7-0.4v-6.8h4.3v8.8c-1.5,1-3.9,1.8-7.2,1.8%20C158,335.3,153.8,331.5,153.8,323.9z'/%3e%3cpath%20class='st2'%20d='M175.7,312.9h4.3v9.8l8.7-9.8h4.4l-7.9,8.7l8.4,13.2h-4.8l-6.2-10.2l-2.6,2.8v7.4h-4.3V312.9z'/%3e%3cpath%20class='st2'%20d='M193.8,312.9h4.4l5.2,15.4h0.1l5.3-15.4h4.1l-7.9,21.9h-3.5L193.8,312.9z'/%3e%3cpath%20class='st2'%20d='M219.3,315.1l-0.8-2.2h4.4l8.6,21.9h-4.5l-1.7-4.5h-8.1l-1.7,4.5h-4.1L219.3,315.1z%20M218.4,327.1h5.8l-2.3-6%20l-0.6-1.9l-0.6,1.9L218.4,327.1z'/%3e%3cpath%20class='st2'%20d='M234.1,312.9h4.3v18.3h8.2v3.7h-12.4V312.9z'/%3e%3cpath%20class='st2'%20d='M249.7,312.9h4.3v21.9h-4.3V312.9z'/%3e%3cpath%20class='st2'%20d='M263.4,316.5h-6.3v-3.6h16.8v3.6h-6.3v18.3h-4.3V316.5z'/%3e%3cpath%20class='st2'%20d='M277,312.9h14v3.6h-9.7v5.3h6.5v3.4h-6.5v6h9.7v3.6h-14V312.9z'/%3e%3cpath%20class='st2'%20d='M299.4,316.5h-6.3v-3.6h16.8v3.6h-6.3v18.3h-4.3V316.5z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", pa = "_navigationBarContainer_n1cc0_1", wa = "_mainContentLink_n1cc0_1", ka = "_compact_n1cc0_30", xa = "_navigationBar_n1cc0_1", La = "_preventStacking_n1cc0_63", Ma = "_logoContainer_n1cc0_82", Oa = "_childElements_n1cc0_91", Sa = "_menuToggle_n1cc0_97", Ia = "_hamburgerIcon_n1cc0_125", za = "_active_n1cc0_161", $a = "_dropdownContainer_n1cc0_170", Pa = "_dropdown_n1cc0_170", qa = "_primaryList_n1cc0_195", Na = "_secondaryList_n1cc0_196", Ba = "_line_n1cc0_392", A = {
  navigationBarContainer: pa,
  mainContentLink: wa,
  compact: ka,
  navigationBar: xa,
  preventStacking: La,
  logoContainer: Ma,
  childElements: Oa,
  menuToggle: Sa,
  hamburgerIcon: Ia,
  active: za,
  dropdownContainer: $a,
  dropdown: Pa,
  primaryList: qa,
  secondaryList: Na,
  line: Ba
}, Dt = (e) => {
  var g, u, v;
  const [r, o] = de(!1), a = () => {
    o(!r);
  }, s = (y) => ({
    padding: ba(y)
  }), l = (y = e.primaryListItems, b = 0) => {
    let w = y.map((p, N) => {
      let E = b + "-" + N;
      return p.listItems !== void 0 ? /* @__PURE__ */ n.createElement("li", { key: E }, /* @__PURE__ */ n.createElement("span", null, p.name), l(p.listItems, b + 1)) : /* @__PURE__ */ n.createElement(je, { listItem: p, key: E, theme: e.theme });
    });
    return !!(w != null && w.length) && /* @__PURE__ */ n.createElement("ul", { className: A.primaryList }, w);
  }, f = () => {
    let y = e.secondaryListItems.map((b, w) => /* @__PURE__ */ n.createElement(je, { listItem: b, key: w, theme: e.theme }));
    return !!(y != null && y.length) && /* @__PURE__ */ n.createElement("ul", { className: A.secondaryList }, y);
  }, d = (y, b) => {
    const w = va(e.theme), p = Ea(e.theme), N = () => y && b ? "" : w && p ? `${p} logo` : "DIBK logo", E = () => {
      const C = N();
      return w ? /* @__PURE__ */ n.createElement("img", { alt: C, src: w, style: s(e.theme) }) : /* @__PURE__ */ n.createElement("img", { alt: C, src: e.compact ? Ca : Ta });
    }, B = {
      target: e.openLogoLinkInNewTab ? "_blank" : null,
      rel: e.openLogoLinkInNewTab ? "noopener noreferrer" : null
    };
    return y && y.length ? /* @__PURE__ */ n.createElement("a", { ...B, href: y, title: b }, E()) : E();
  }, m = !!((g = e.primaryListItems) != null && g.length) || !!((u = e.secondaryListItems) != null && u.length);
  return /* @__PURE__ */ n.createElement(
    "div",
    {
      className: R([e.compact && A.compact, A.navigationBarContainer])
    },
    ((v = e.mainContentId) == null ? void 0 : v.length) && /* @__PURE__ */ n.createElement("a", { id: "main-content-link", href: `#${e.mainContentId}`, className: A.mainContentLink }, /* @__PURE__ */ n.createElement("span", { id: "main-content-link-text" }, "Hopp til hovedinnhold")),
    /* @__PURE__ */ n.createElement(
      "div",
      {
        className: R([
          A.navigationBar,
          e.preventChildElementStacking && A.preventStacking
        ])
      },
      /* @__PURE__ */ n.createElement("div", { className: A.logoContainer }, d(e.logoLink, e.logoLinkTitle)),
      !!e.children && /* @__PURE__ */ n.createElement("div", { className: A.childElements }, e.children),
      m && /* @__PURE__ */ n.createElement(
        "button",
        {
          type: "button",
          className: `${A.menuToggle} ${r ? A.active : ""}`,
          onClick: () => a(),
          "aria-expanded": r ? "true" : "false",
          "aria-controls": "main-menu-dropdown"
        },
        !e.compact && "Meny",
        /* @__PURE__ */ n.createElement("span", { className: A.hamburgerIcon }, /* @__PURE__ */ n.createElement("span", { className: A.line }), /* @__PURE__ */ n.createElement("span", { className: A.line }), /* @__PURE__ */ n.createElement("span", { className: A.line }))
      )
    ),
    m && /* @__PURE__ */ n.createElement(He, null, /* @__PURE__ */ n.createElement("div", { className: R([A.dropdownContainer, r && A.active]) }, /* @__PURE__ */ n.createElement("div", { id: "main-menu-dropdown", className: A.dropdown }, l(), f())))
  );
};
Dt.propTypes = {
  /** Main links in navigation bar */
  primaryListItems: t.array,
  /** Secondary links in navigation bar */
  secondaryListItems: t.array,
  /** Link for logo */
  logoLink: t.string,
  /** Title for the logo link */
  logoLinkTitle: t.string,
  /** Opens logo link in a new tab on click */
  openLogoLinkInNewTab: t.bool,
  /** Theme for navigation bar */
  theme: t.object,
  /** Prevent stacking of child elements on smaller screens */
  preventChildElementStacking: t.bool
};
Dt.defaultProps = {
  primaryListItems: [],
  secondaryListItems: [],
  logoLink: null,
  preventChildElementStacking: !1
};
const Ra = "_paper_1lgl3_1", Aa = "_noMargin_1lgl3_6", Da = "_noPadding_1lgl3_9", De = {
  paper: Ra,
  noMargin: Aa,
  noPadding: Da
}, Ft = (e) => /* @__PURE__ */ n.createElement(
  "div",
  {
    className: `${De.paper} ${e.noMargin ? De.noMargin : ""} ${e.noPadding ? De.noPadding : ""}`
  },
  e.children
);
Ft.propTypes = {
  noMargin: t.bool,
  noPadding: t.bool
};
Ft.defaultProps = {
  noMargin: !1,
  noPadding: !1
};
const Fa = "_progressBar_t5aid_1", Va = "_hasErrors_t5aid_23", yt = {
  progressBar: Fa,
  hasErrors: Va
}, Vt = (e) => /* @__PURE__ */ n.createElement(
  "div",
  {
    className: `${yt.progressBar} ${e.hasErrors ? yt.hasErrors : ""}`,
    role: "progressbar",
    "aria-valuenow": e.progress || 0,
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: { ["--value"]: e.progress || 0 }
  }
);
Vt.propTypes = {
  progress: t.number,
  hasErrors: t.bool
};
Vt.defaultProps = {
  progress: 0,
  hasErrors: !1
};
const ja = "_radioButtonIcon_32fe0_1", Ha = "_hasErrors_32fe0_22", Xa = "_checked_32fe0_32", Wa = "_disabled_32fe0_48", Ce = {
  radioButtonIcon: ja,
  hasErrors: Ha,
  checked: Xa,
  disabled: Wa
}, Ue = (e) => {
  let r = {
    height: e.size,
    width: e.size
  };
  const o = {
    className: `${Ce.radioButtonIcon} ${e.checked ? Ce.checked : ""} ${e.disabled ? Ce.disabled : ""} ${e.hasErrors ? Ce.hasErrors : ""}`,
    style: r
  };
  return /* @__PURE__ */ n.createElement("span", { ...o });
};
Ue.propTypes = {
  /**
   * How large should the radio button icon be?
   */
  size: t.string,
  checked: t.bool,
  disabled: t.bool,
  hasErrors: t.bool
};
Ue.defaultProps = {
  size: "10px",
  checked: !1,
  disabled: !1,
  hasErrors: !1
};
const Ya = "_radioButtonInput_1i7cy_1", Ga = "_requiredSymbol_1i7cy_6", Ua = "_disabled_1i7cy_13", Ka = "_labelText_1i7cy_19", Za = "_hasErrors_1i7cy_27", oe = {
  radioButtonInput: Ya,
  requiredSymbol: Ga,
  disabled: Ua,
  labelText: Ka,
  hasErrors: Za
}, Ke = (e) => {
  const r = {
    className: `${oe.radioButtonInput} ${e.checked ? oe.checked : ""} ${e.disabled ? oe.disabled : ""} ${e.hasErrors ? oe.hasErrors : ""}`,
    htmlFor: e.id
  }, o = {
    checked: e.checked,
    disabled: e.disabled,
    hasErrors: !e.contentOnly && e.hasErrors
  }, a = {
    id: e.id,
    name: e.name || null,
    type: "radio",
    value: e.inputValue,
    checked: e.checked,
    disabled: e.disabled,
    required: e.required || e.requiredGroup,
    onChange: e.onChange,
    tabIndex: e.tabIndex || null,
    "aria-controls": e["aria-controls"],
    "aria-invalid": e.hasErrors ? "true" : null,
    "aria-describedby": e["aria-describedby"]
  };
  return /* @__PURE__ */ n.createElement("label", { ...r }, e.contentOnly ? null : /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(Ue, { ...o }), /* @__PURE__ */ n.createElement("input", { ...a })), /* @__PURE__ */ n.createElement("span", { className: oe.labelText }, e.children, e.required && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: oe.requiredSymbol })));
};
Ke.propTypes = {
  checked: t.bool,
  disabled: t.bool,
  required: t.bool,
  requiredGroup: t.bool,
  id: t.string.isRequired,
  name: t.string,
  onChange: t.func,
  contentOnly: t.bool,
  hasErrors: t.bool,
  inputValue: t.string.isRequired,
  "aria-controls": t.string,
  "aria-describedby": t.string
};
Ke.defaultProps = {
  name: "",
  checked: !1,
  disabled: !1,
  required: !1,
  requiredGroup: !1,
  contentOnly: !1,
  hasErrors: !1
};
const Ja = "_radioButtonList_1cyu3_1", Qa = "_requiredSymbol_1cyu3_16", vt = {
  radioButtonList: Ja,
  requiredSymbol: Qa
}, eo = ({ required: e, compact: r, legend: o, legendSize: a, children: s }) => {
  const l = (f) => se(f).map((m, g) => {
    var v;
    return ((v = m == null ? void 0 : m.props) == null ? void 0 : v.type) === "RadioButtonListItem" ? n.cloneElement(m, {
      requiredGroup: e,
      compact: r,
      key: `radioButtonListItem-${g}`
    }) : m;
  });
  return /* @__PURE__ */ n.createElement("fieldset", { className: vt.radioButtonList }, o != null && o.length ? /* @__PURE__ */ n.createElement("legend", null, a ? /* @__PURE__ */ n.createElement(we, { size: a }, o) : o, e && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: vt.requiredSymbol })) : null, l(n.Children.toArray(s)));
};
eo.propTypes = {
  legend: t.string,
  legendSize: t.oneOf([1, 2, 3, 4, 5]),
  required: t.bool,
  compact: t.bool
};
const to = "_radioButtonListItem_1ggab_1", no = "_contentOnly_1ggab_26", ro = "_compact_1ggab_26", ao = "_disabled_1ggab_41", oo = "_checked_1ggab_44", le = {
  radioButtonListItem: to,
  contentOnly: no,
  compact: ro,
  disabled: ao,
  checked: oo
}, jt = (e) => {
  const r = [
    le.radioButtonListItem,
    e.checked ? le.checked : null,
    e.disabled ? le.disabled : null,
    e.compact ? le.compact : null,
    e.contentOnly ? le.contentOnly : null,
    e.hasErrors ? le.hasErrors : null
  ], o = R(r), a = {
    onChange: e.onChange,
    inputValue: e.inputValue,
    checked: e.checked,
    disabled: e.disabled,
    required: e.required,
    requiredGroup: e.requiredGroup,
    contentOnly: e.contentOnly,
    hasErrors: e.hasErrors,
    "aria-controls": e["aria-controls"],
    "aria-describedby": e["aria-describedby"],
    id: e.id,
    name: e.name
  };
  return /* @__PURE__ */ n.createElement("div", { className: o }, /* @__PURE__ */ n.createElement(Ke, { ...a }, e.children));
};
jt.propTypes = {
  inputValue: t.string.isRequired,
  checked: t.bool,
  disabled: t.bool,
  required: t.bool,
  requiredGroup: t.bool,
  name: t.string,
  id: t.string.isRequired,
  onChange: t.func,
  contentOnly: t.bool,
  compact: t.bool,
  hasErrors: t.bool,
  "aria-controls": t.string,
  "aria-describedby": t.string
};
jt.defaultProps = {
  name: "",
  checked: !1,
  required: !1,
  requiredGroup: !1,
  disabled: !1,
  contentOnly: !1,
  hasErrors: !1,
  type: "RadioButtonListItem"
};
const lo = "_select_18o2z_1", so = "_requiredSymbol_18o2z_1", io = "_selectContainer_18o2z_8", co = "_selectListArrow_18o2z_11", uo = "_multipleSelectDropdown_18o2z_40", ho = "_multipleSelectElement_18o2z_52", mo = "_multiple_18o2z_40", fo = "_hasErrors_18o2z_100", Y = {
  select: lo,
  requiredSymbol: so,
  selectContainer: io,
  selectListArrow: co,
  multipleSelectDropdown: uo,
  multipleSelectElement: ho,
  multiple: mo,
  hasErrors: fo
}, Ht = (e) => {
  var b, w, p, N;
  const [r, o] = de(!1), a = he(), s = bt((E) => {
    E && pt(E);
  }, []), l = () => {
    o(!1);
  };
  ue(() => {
    if (typeof document > "u") return;
    const E = (C) => {
      C.keyCode === 27 && l();
    }, B = (C) => {
      a != null && a.current && !a.current.contains(C.target) && l();
    };
    document.addEventListener("mousedown", B), document.addEventListener("keydown", E, !1);
  }, [e, s]);
  const f = (E, B) => {
    const C = B && B.length ? B.find((O) => typeof O == "object" ? O.value === E : O === E) : null;
    return C && C.key ? C.key : C && C.value ? C.value : C;
  }, d = (E) => typeof E == "object" ? {
    key: E.key ? E.key : "",
    value: E.value ? E.value : ""
  } : {
    key: E,
    value: E
  }, m = (E, B) => {
    const C = B.defaultValue || B.value;
    return C != null && C.length ? C.map((O) => f(O, E)).join(", ") : null;
  }, g = (E, B) => E.map((C, O) => {
    let c = d(C);
    const F = B.defaultValue || B.value, ce = F && F.length && F.includes(c.value);
    return /* @__PURE__ */ n.createElement(
      Ye,
      {
        key: O,
        id: `${e.id}-${O}`,
        value: c.value,
        checked: ce,
        onChange: () => B.onChange(c.value)
      },
      c.key
    );
  }), u = (E) => E.map((B, C) => {
    let O = d(B);
    return /* @__PURE__ */ n.createElement("option", { value: O.value, key: C }, O.key);
  }), v = (E, B) => E ? /* @__PURE__ */ n.createElement("option", { value: B || "", disabled: !0 }, E) : "", y = () => `${e.id}-errorMessage`;
  if (e.contentOnly) {
    const E = e.defaultValue ? e.defaultValue : e.value || null;
    return /* @__PURE__ */ n.createElement("div", { className: Y.select }, /* @__PURE__ */ n.createElement(Q, { htmlFor: e.id }, e.label), /* @__PURE__ */ n.createElement("span", null, E ? e.keyAsContent ? f(E, e.options) : E : e.defaultContent));
  } else {
    const E = !e.value && e.defaultValue ? e.defaultValue : !1, B = {
      ...((b = e.width) == null ? void 0 : b.length) && { maxWidth: e.width }
    }, C = R([
      e.hasErrors && Y.hasErrors,
      e.multiple && Y.multiple
    ]), O = {
      name: e.name,
      multiple: e.multiple,
      required: e.required,
      disabled: e.disabled,
      [E ? "defaultValue" : "value"]: E || e.value || "",
      onChange: e.onChange,
      id: e.id,
      role: e.role,
      key: `${e.id}-${Ge(6)}`,
      className: C,
      "aria-describedby": e.hasErrors && ((w = e.errorMessage) != null && w.length) ? y() : (p = e["aria-describedby"]) != null && p.length ? e["aria-describedby"] : null,
      "aria-invalid": e.hasErrors ? "true" : null,
      style: B
    };
    return /* @__PURE__ */ n.createElement("div", { className: Y.select }, /* @__PURE__ */ n.createElement(Q, { htmlFor: e.id }, e.label, e.required && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: Y.requiredSymbol })), /* @__PURE__ */ n.createElement(
      "div",
      {
        className: Y.selectContainer,
        style: { ...((N = e.width) == null ? void 0 : N.length) && { maxWidth: e.width } }
      },
      /* @__PURE__ */ n.createElement("span", { className: Y.selectListArrow }),
      e.multiple ? /* @__PURE__ */ n.createElement("div", { ref: a }, /* @__PURE__ */ n.createElement(
        "div",
        {
          onClick: () => {
            o(!r);
          },
          className: Y.multipleSelectElement
        },
        m(e.options, O)
      ), r ? /* @__PURE__ */ n.createElement("div", { className: Y.multipleSelectDropdown }, /* @__PURE__ */ n.createElement(kt, { compact: !0 }, g(e.options, O))) : null) : /* @__PURE__ */ n.createElement("select", { ...O }, v(
        e.placeholder,
        e.placeholderValue
      ), u(e.options))
    ), /* @__PURE__ */ n.createElement(ie, { id: y(), content: e.errorMessage }));
  }
};
Ht.propTypes = {
  id: t.string.isRequired,
  onChange: t.func.isRequired,
  name: t.string,
  required: t.bool,
  disabled: t.bool,
  multiple: t.bool,
  options: t.arrayOf(
    t.oneOfType([
      t.oneOfType([t.string, t.number]),
      t.shape({
        key: t.oneOfType([t.string, t.number]),
        value: t.oneOfType([t.string, t.number])
      })
    ])
  ),
  width: t.string,
  value: t.any,
  defaultValue: t.any,
  label: t.oneOfType([
    t.string,
    t.arrayOf(
      t.oneOfType([t.string, t.object])
    )
  ]),
  contentOnly: t.bool,
  keyAsContent: t.bool,
  placeholder: t.string,
  placeholderValue: t.string,
  defaultContent: t.string,
  "aria-describedby": t.string,
  hasErrors: t.bool,
  errorMessage: t.oneOfType([
    t.string,
    t.arrayOf(
      t.oneOfType([t.string, t.object])
    )
  ])
};
Ht.defaultProps = {
  onChange: () => !1,
  name: "",
  required: !1,
  disabled: !1,
  options: [],
  label: "",
  contentOnly: !1,
  keyAsContent: !1,
  placeholder: null,
  placeholderValue: "",
  defaultContent: null,
  hasErrors: !1,
  errorMessage: ""
};
const go = "_table_miy9l_1", me = {
  table: go,
  "captionSide-top": "_captionSide-top_miy9l_14",
  "captionSide-bottom": "_captionSide-bottom_miy9l_18",
  "captionAlign-left": "_captionAlign-left_miy9l_22",
  "captionAlign-center": "_captionAlign-center_miy9l_25",
  "captionAlign-right": "_captionAlign-right_miy9l_28"
}, _o = (e) => {
  const r = "left", o = ["left", "center", "right"];
  return e != null && e.length && o.includes(e) ? me[`captionAlign-${e}`] : me[`captionAlign-${r}`];
}, yo = (e) => {
  const r = "top", o = ["top", "bottom"];
  return e != null && e.length && o.includes(e) ? me[`captionSide-${e}`] : me[`captionSide-${r}`];
}, vo = (e) => /* @__PURE__ */ n.createElement(
  "table",
  {
    className: R([
      me.table,
      _o(e.captionAlign),
      yo(e.captionSide)
    ])
  },
  e.children
);
vo.propTypes = {
  captionAlign: t.oneOf(["left", "center", "right"]),
  captionSide: t.oneOf(["top", "bottom"])
};
const bo = "_textarea_1596u_1", Eo = "_requiredSymbol_1596u_4", Co = "_hasErrors_1596u_55", Fe = {
  textarea: bo,
  requiredSymbol: Eo,
  hasErrors: Co
}, Xt = (e) => {
  const r = (s, l) => s || l, o = () => `${e.id}-errorMessage`, a = () => {
    var m, g, u, v, y, b;
    const s = !((m = e.value) != null && m.length) && ((g = e.defaultValue) != null && g.length) ? e.defaultValue : !1, l = e.elementKey || null, f = {
      ...((u = e.width) == null ? void 0 : u.length) && { maxWidth: e.width },
      ...((v = e.resize) == null ? void 0 : v.length) && { resize: e.resize }
    }, d = {
      name: e.name,
      readOnly: e.readOnly,
      disabled: e.disabled,
      required: e.required,
      type: e.type,
      id: e.id,
      key: l || `${e.id}-${Ge(6)}`,
      onChange: e.onChange,
      onBlur: e.onBlur,
      [s ? "defaultValue" : "value"]: s || e.value,
      placeholder: e.placeholder,
      rows: e.rows,
      className: e.hasErrors ? Fe.hasErrors : "",
      "aria-describedby": e.hasErrors && ((y = e.errorMessage) != null && y.length) ? o() : (b = e["aria-describedby"]) != null && b.length ? e["aria-describedby"] : null,
      "aria-invalid": e.hasErrors ? "true" : null,
      style: f
    };
    return /* @__PURE__ */ n.createElement("textarea", { ...d });
  };
  return /* @__PURE__ */ n.createElement("div", { className: Fe.textarea }, /* @__PURE__ */ n.createElement(Q, { htmlFor: e.id }, e.label, e.required && /* @__PURE__ */ n.createElement("img", { src: U, alt: "", className: Fe.requiredSymbol })), e.contentOnly ? /* @__PURE__ */ n.createElement("span", null, r(e.value || e.defaultValue, e.defaultContent)) : a(), /* @__PURE__ */ n.createElement(ie, { id: o(), content: e.errorMessage }));
};
Xt.propTypes = {
  /** Text content inside list item */
  id: t.string.isRequired,
  onChange: t.func.isRequired,
  onBlur: t.func,
  name: t.string,
  type: t.string,
  required: t.bool,
  width: t.string,
  resize: t.oneOf(["both", "horizontal", "vertical", "none"]),
  value: t.string,
  defaultValue: t.string,
  elementKey: t.string,
  rows: t.string,
  label: t.oneOfType([
    t.string,
    t.arrayOf(t.oneOfType([t.string, t.object]))
  ]),
  contentOnly: t.bool,
  placeholder: t.string,
  defaultContent: t.string,
  "aria-describedby": t.string,
  hasErrors: t.bool,
  errorMessage: t.oneOfType([
    t.string,
    t.arrayOf(t.oneOfType([t.string, t.object]))
  ])
};
Xt.defaultProps = {
  onChange: () => !1,
  name: "",
  type: "text",
  required: !1,
  label: "",
  contentOnly: !1,
  resize: "both",
  placeholder: "",
  defaultContent: "",
  hasErrors: !1,
  errorMessage: ""
};
const To = ({ theme: e, children: r }) => {
  const o = cn(e), a = un(
    o
  );
  return dn("theme-provider", `:root {${a}}`), r;
};
To.propTypes = {
  theme: t.object
};
const po = "_toggleNavigationButton_1eb2w_1", wo = {
  toggleNavigationButton: po
}, Wt = ({ id: e, htmlTag: r, showText: o, hideText: a, buttonProps: s, isOpen: l }) => {
  const f = wo.toggleNavigationButton;
  return n.createElement(
    r,
    {
      ...s,
      className: f,
      id: e || null
    },
    l ? a : o
  );
};
Wt.propTypes = {
  id: t.string,
  htmlTag: t.string,
  showText: t.string,
  hideText: t.string,
  buttonProps: t.object,
  isOpen: t.bool
};
Wt.defaultProps = {
  htmlTag: "button",
  isOpen: !1
};
const ko = "_wizardTopnavItem_5ar16_1", xo = "_wizardTopnavItemContent_5ar16_4", Lo = "_vertical_5ar16_7", Mo = "_stepNumber_5ar16_24", Oo = "_stepName_5ar16_36", So = "_active_5ar16_46", Io = "_finished_5ar16_46", zo = "_hasErrors_5ar16_46", $o = "_horizontal_5ar16_64", W = {
  wizardTopnavItem: ko,
  wizardTopnavItemContent: xo,
  vertical: Lo,
  stepNumber: Mo,
  stepName: Oo,
  active: So,
  finished: Io,
  hasErrors: zo,
  horizontal: $o
}, Po = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20aria-label='Ferdig'%20style='fill:%20rgb(23,%20121,%2018);'%3e%3cmask%20id='mask0_1089_7430'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%20style='mask-type:%20alpha;'%3e%3crect%20width='20'%20height='20'%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1089_7430)'%3e%3cpath%20d='M5.71427%208.57149L3.80951%2010.4762L8.57141%2015.2382L17.1428%206.66672L15.2381%204.76196L8.57141%2011.4286L5.71427%208.57149Z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e", Ze = (e) => {
  const {
    step: r,
    index: o,
    activeStepId: a,
    direction: s,
    linkComponent: l
  } = e, f = (y) => a === y.id ? W.active : "", d = (y) => y.finished ? W.finished : "", m = (y) => y.hasErrors ? W.hasErrors : "", g = () => {
    const y = a === r.id, w = s === "vertical" && r.finished && !y;
    return /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("span", { className: W.stepNumber }, o + 1), /* @__PURE__ */ n.createElement("span", { className: W.stepName }, r.name), w && /* @__PURE__ */ n.createElement("img", { src: Po, alt: "", className: W.checkmarkSymbol }));
  }, u = R([
    W.wizardTopnavItem,
    f(r),
    d(r),
    m(r),
    W[s]
  ]), v = a === r.id ? "step" : null;
  return r.link && Object.keys(r.link).length && l ? /* @__PURE__ */ n.createElement("li", { className: u }, /* @__PURE__ */ n.createElement(
    l,
    {
      to: r.link,
      "aria-current": v,
      className: W.wizardTopnavItemContent
    },
    g()
  )) : /* @__PURE__ */ n.createElement("li", { className: u }, /* @__PURE__ */ n.createElement(
    "span",
    {
      "aria-current": v,
      className: W.wizardTopnavItemContent
    },
    g()
  ));
};
Ze.propTypes = {
  step: t.object.isRequired,
  activeStepId: t.oneOfType([t.string, t.number]).isRequired,
  index: t.number.isRequired,
  direction: t.oneOf(["vertical", "horizontal"]),
  linkComponent: t.elementType
};
Ze.defaultProps = {
  direction: "vertical"
};
const qo = "_wizardTopnavContainer_qiy2o_1", No = "_wizardTopnav_qiy2o_1", Bo = "_vertical_qiy2o_6", Ro = "_horizontal_qiy2o_11", Ve = {
  wizardTopnavContainer: qo,
  wizardTopnav: No,
  vertical: Bo,
  horizontal: Ro
}, Yt = (e) => {
  var l, f;
  const r = (d, m) => d && Object.keys(d).length ? Object.keys(d).map((u, v) => {
    const y = d[u];
    return /* @__PURE__ */ n.createElement(
      Ze,
      {
        direction: e.direction,
        step: y,
        activeStepId: m,
        index: v,
        key: u
      }
    );
  }) : null, a = `I dette skjemaet er det totalt ${e.steps && ((l = Object.keys(e.steps)) != null && l.length) ? Object.keys(e.steps).length : 0} steg som du skal gå igjennom`, s = (f = e["aria-label"]) != null && f.length ? e["aria-label"] : a;
  return /* @__PURE__ */ n.createElement(
    "nav",
    {
      "aria-label": s,
      className: R([
        Ve.wizardTopnavContainer,
        Ve[e.direction]
      ])
    },
    /* @__PURE__ */ n.createElement("ol", { className: Ve.wizardTopnav }, r(e.steps, e.activeStepId))
  );
};
Yt.propTypes = {
  steps: t.shape({
    id: t.oneOfType([t.string, t.number]),
    name: t.string,
    finished: t.bool,
    hasErrors: t.bool,
    link: t.shape({
      to: t.object,
      reactLink: t.bool
    })
  }).isRequired,
  activeStepId: t.oneOfType([t.string, t.number]).isRequired,
  "aria-label": t.string,
  direction: t.oneOf(["vertical", "horizontal"])
};
Yt.defaultProps = {
  direction: "vertical"
};
export {
  wt as Accordion,
  pe as Button,
  Te as CheckBoxIcon,
  We as CheckBoxInput,
  kt as CheckBoxList,
  Ye as CheckBoxListItem,
  xt as Container,
  Lt as ContentBox,
  Mt as DescriptionDetails,
  Ot as DescriptionList,
  St as DescriptionTerm,
  It as Dialog,
  zt as DragAndDropFileInput,
  Pt as ErrorBox,
  ie as ErrorMessage,
  Do as Footer,
  we as Header,
  na as InfoBox,
  qt as InputField,
  Q as Label,
  Nt as Lead,
  Bt as List,
  Rt as ListItem,
  At as LoadingAnimation,
  Dt as NavigationBar,
  je as NavigationBarListItem,
  Ft as Paper,
  Vt as ProgressBar,
  Ue as RadioButtonIcon,
  Ke as RadioButtonInput,
  eo as RadioButtonList,
  jt as RadioButtonListItem,
  Ht as Select,
  vo as Table,
  Xt as Textarea,
  To as ThemeProvider,
  Wt as ToggleNavigationButton,
  Yt as WizardNavigation,
  Ze as WizardNavigationStep
};
//# sourceMappingURL=index.es.js.map
