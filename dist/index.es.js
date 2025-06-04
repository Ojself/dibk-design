function An(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ke = { exports: {} }, Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function On() {
  if (Bt) return Ae;
  Bt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, s, i) {
    var f = null;
    if (i !== void 0 && (f = "" + i), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      i = {};
      for (var h in s)
        h !== "key" && (i[h] = s[h]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: a,
      key: f,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return Ae.Fragment = t, Ae.jsx = r, Ae.jsxs = r, Ae;
}
var Oe = {}, Qe = { exports: {} }, O = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Pn() {
  if (Ft) return O;
  Ft = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), w = Symbol.iterator;
  function g(o) {
    return o === null || typeof o != "object" ? null : (o = w && o[w] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, v = Object.assign, b = {};
  function N(o, m, k) {
    this.props = o, this.context = m, this.refs = b, this.updater = k || x;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(o, m) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, m, "setState");
  }, N.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function y() {
  }
  y.prototype = N.prototype;
  function S(o, m, k) {
    this.props = o, this.context = m, this.refs = b, this.updater = k || x;
  }
  var L = S.prototype = new y();
  L.constructor = S, v(L, N.prototype), L.isPureReactComponent = !0;
  var T = Array.isArray, j = { H: null, A: null, T: null, S: null, V: null }, X = Object.prototype.hasOwnProperty;
  function G(o, m, k, R, I, V) {
    return k = V.ref, {
      $$typeof: e,
      type: o,
      key: m,
      ref: k !== void 0 ? k : null,
      props: V
    };
  }
  function z(o, m) {
    return G(
      o.type,
      m,
      void 0,
      void 0,
      void 0,
      o.props
    );
  }
  function Y(o) {
    return typeof o == "object" && o !== null && o.$$typeof === e;
  }
  function ee(o) {
    var m = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(k) {
      return m[k];
    });
  }
  var B = /\/+/g;
  function re(o, m) {
    return typeof o == "object" && o !== null && o.key != null ? ee("" + o.key) : m.toString(36);
  }
  function F() {
  }
  function $(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(F, F) : (o.status = "pending", o.then(
          function(m) {
            o.status === "pending" && (o.status = "fulfilled", o.value = m);
          },
          function(m) {
            o.status === "pending" && (o.status = "rejected", o.reason = m);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function Q(o, m, k, R, I) {
    var V = typeof o;
    (V === "undefined" || V === "boolean") && (o = null);
    var A = !1;
    if (o === null) A = !0;
    else
      switch (V) {
        case "bigint":
        case "string":
        case "number":
          A = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case e:
            case t:
              A = !0;
              break;
            case _:
              return A = o._init, Q(
                A(o._payload),
                m,
                k,
                R,
                I
              );
          }
      }
    if (A)
      return I = I(o), A = R === "" ? "." + re(o, 0) : R, T(I) ? (k = "", A != null && (k = A.replace(B, "$&/") + "/"), Q(I, m, k, "", function(se) {
        return se;
      })) : I != null && (Y(I) && (I = z(
        I,
        k + (I.key == null || o && o.key === I.key ? "" : ("" + I.key).replace(
          B,
          "$&/"
        ) + "/") + A
      )), m.push(I)), 1;
    A = 0;
    var oe = R === "" ? "." : R + ":";
    if (T(o))
      for (var P = 0; P < o.length; P++)
        R = o[P], V = oe + re(R, P), A += Q(
          R,
          m,
          k,
          V,
          I
        );
    else if (P = g(o), typeof P == "function")
      for (o = P.call(o), P = 0; !(R = o.next()).done; )
        R = R.value, V = oe + re(R, P++), A += Q(
          R,
          m,
          k,
          V,
          I
        );
    else if (V === "object") {
      if (typeof o.then == "function")
        return Q(
          $(o),
          m,
          k,
          R,
          I
        );
      throw m = String(o), Error(
        "Objects are not valid as a React child (found: " + (m === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : m) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return A;
  }
  function W(o, m, k) {
    if (o == null) return o;
    var R = [], I = 0;
    return Q(o, R, "", "", function(V) {
      return m.call(k, V, I++);
    }), R;
  }
  function Z(o) {
    if (o._status === -1) {
      var m = o._result;
      m = m(), m.then(
        function(k) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = k);
        },
        function(k) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = k);
        }
      ), o._status === -1 && (o._status = 0, o._result = m);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ie = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var m = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(m)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  };
  function Ee() {
  }
  return O.Children = {
    map: W,
    forEach: function(o, m, k) {
      W(
        o,
        function() {
          m.apply(this, arguments);
        },
        k
      );
    },
    count: function(o) {
      var m = 0;
      return W(o, function() {
        m++;
      }), m;
    },
    toArray: function(o) {
      return W(o, function(m) {
        return m;
      }) || [];
    },
    only: function(o) {
      if (!Y(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  }, O.Component = N, O.Fragment = r, O.Profiler = s, O.PureComponent = S, O.StrictMode = a, O.Suspense = l, O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, O.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return j.H.useMemoCache(o);
    }
  }, O.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, O.cloneElement = function(o, m, k) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var R = v({}, o.props), I = o.key, V = void 0;
    if (m != null)
      for (A in m.ref !== void 0 && (V = void 0), m.key !== void 0 && (I = "" + m.key), m)
        !X.call(m, A) || A === "key" || A === "__self" || A === "__source" || A === "ref" && m.ref === void 0 || (R[A] = m[A]);
    var A = arguments.length - 2;
    if (A === 1) R.children = k;
    else if (1 < A) {
      for (var oe = Array(A), P = 0; P < A; P++)
        oe[P] = arguments[P + 2];
      R.children = oe;
    }
    return G(o.type, I, void 0, void 0, V, R);
  }, O.createContext = function(o) {
    return o = {
      $$typeof: f,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: i,
      _context: o
    }, o;
  }, O.createElement = function(o, m, k) {
    var R, I = {}, V = null;
    if (m != null)
      for (R in m.key !== void 0 && (V = "" + m.key), m)
        X.call(m, R) && R !== "key" && R !== "__self" && R !== "__source" && (I[R] = m[R]);
    var A = arguments.length - 2;
    if (A === 1) I.children = k;
    else if (1 < A) {
      for (var oe = Array(A), P = 0; P < A; P++)
        oe[P] = arguments[P + 2];
      I.children = oe;
    }
    if (o && o.defaultProps)
      for (R in A = o.defaultProps, A)
        I[R] === void 0 && (I[R] = A[R]);
    return G(o, V, void 0, void 0, null, I);
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(o) {
    return { $$typeof: h, render: o };
  }, O.isValidElement = Y, O.lazy = function(o) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: o },
      _init: Z
    };
  }, O.memo = function(o, m) {
    return {
      $$typeof: c,
      type: o,
      compare: m === void 0 ? null : m
    };
  }, O.startTransition = function(o) {
    var m = j.T, k = {};
    j.T = k;
    try {
      var R = o(), I = j.S;
      I !== null && I(k, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(Ee, ie);
    } catch (V) {
      ie(V);
    } finally {
      j.T = m;
    }
  }, O.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, O.use = function(o) {
    return j.H.use(o);
  }, O.useActionState = function(o, m, k) {
    return j.H.useActionState(o, m, k);
  }, O.useCallback = function(o, m) {
    return j.H.useCallback(o, m);
  }, O.useContext = function(o) {
    return j.H.useContext(o);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(o, m) {
    return j.H.useDeferredValue(o, m);
  }, O.useEffect = function(o, m, k) {
    var R = j.H;
    if (typeof k == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return R.useEffect(o, m);
  }, O.useId = function() {
    return j.H.useId();
  }, O.useImperativeHandle = function(o, m, k) {
    return j.H.useImperativeHandle(o, m, k);
  }, O.useInsertionEffect = function(o, m) {
    return j.H.useInsertionEffect(o, m);
  }, O.useLayoutEffect = function(o, m) {
    return j.H.useLayoutEffect(o, m);
  }, O.useMemo = function(o, m) {
    return j.H.useMemo(o, m);
  }, O.useOptimistic = function(o, m) {
    return j.H.useOptimistic(o, m);
  }, O.useReducer = function(o, m, k) {
    return j.H.useReducer(o, m, k);
  }, O.useRef = function(o) {
    return j.H.useRef(o);
  }, O.useState = function(o) {
    return j.H.useState(o);
  }, O.useSyncExternalStore = function(o, m, k) {
    return j.H.useSyncExternalStore(
      o,
      m,
      k
    );
  }, O.useTransition = function() {
    return j.H.useTransition();
  }, O.version = "19.1.0", O;
}
var De = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
De.exports;
var Ht;
function zn() {
  return Ht || (Ht = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      function r(n, u) {
        Object.defineProperty(i.prototype, n, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              u[0],
              u[1]
            );
          }
        });
      }
      function a(n) {
        return n === null || typeof n != "object" ? null : (n = Ue && n[Ue] || n["@@iterator"], typeof n == "function" ? n : null);
      }
      function s(n, u) {
        n = (n = n.constructor) && (n.displayName || n.name) || "ReactClass";
        var E = n + "." + u;
        St[E] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          u,
          n
        ), St[E] = !0);
      }
      function i(n, u, E) {
        this.props = n, this.context = u, this.refs = ct, this.updater = E || Lt;
      }
      function f() {
      }
      function h(n, u, E) {
        this.props = n, this.context = u, this.refs = ct, this.updater = E || Lt;
      }
      function l(n) {
        return "" + n;
      }
      function c(n) {
        try {
          l(n);
          var u = !1;
        } catch {
          u = !0;
        }
        if (u) {
          u = console;
          var E = u.error, C = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
          return E.call(
            u,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            C
          ), l(n);
        }
      }
      function _(n) {
        if (n == null) return null;
        if (typeof n == "function")
          return n.$$typeof === Tn ? null : n.displayName || n.name || null;
        if (typeof n == "string") return n;
        switch (n) {
          case o:
            return "Fragment";
          case k:
            return "Profiler";
          case m:
            return "StrictMode";
          case A:
            return "Suspense";
          case oe:
            return "SuspenseList";
          case Ie:
            return "Activity";
        }
        if (typeof n == "object")
          switch (typeof n.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), n.$$typeof) {
            case Ee:
              return "Portal";
            case I:
              return (n.displayName || "Context") + ".Provider";
            case R:
              return (n._context.displayName || "Context") + ".Consumer";
            case V:
              var u = n.render;
              return n = n.displayName, n || (n = u.displayName || u.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
            case P:
              return u = n.displayName || null, u !== null ? u : _(n.type) || "Memo";
            case se:
              u = n._payload, n = n._init;
              try {
                return _(n(u));
              } catch {
              }
          }
        return null;
      }
      function w(n) {
        if (n === o) return "<>";
        if (typeof n == "object" && n !== null && n.$$typeof === se)
          return "<...>";
        try {
          var u = _(n);
          return u ? "<" + u + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function g() {
        var n = q.A;
        return n === null ? null : n.getOwner();
      }
      function x() {
        return Error("react-stack-top-frame");
      }
      function v(n) {
        if (Ye.call(n, "key")) {
          var u = Object.getOwnPropertyDescriptor(n, "key").get;
          if (u && u.isReactWarning) return !1;
        }
        return n.key !== void 0;
      }
      function b(n, u) {
        function E() {
          Mt || (Mt = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            u
          ));
        }
        E.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: E,
          configurable: !0
        });
      }
      function N() {
        var n = _(this.type);
        return It[n] || (It[n] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), n = this.props.ref, n !== void 0 ? n : null;
      }
      function y(n, u, E, C, M, U, D, K) {
        return E = U.ref, n = {
          $$typeof: ie,
          type: n,
          key: u,
          props: U,
          _owner: M
        }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(n, "ref", {
          enumerable: !1,
          get: N
        }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(n, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(n, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: D
        }), Object.defineProperty(n, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: K
        }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
      }
      function S(n, u) {
        return u = y(
          n.type,
          u,
          void 0,
          void 0,
          n._owner,
          n.props,
          n._debugStack,
          n._debugTask
        ), n._store && (u._store.validated = n._store.validated), u;
      }
      function L(n) {
        return typeof n == "object" && n !== null && n.$$typeof === ie;
      }
      function T(n) {
        var u = { "=": "=0", ":": "=2" };
        return "$" + n.replace(/[=:]/g, function(E) {
          return u[E];
        });
      }
      function j(n, u) {
        return typeof n == "object" && n !== null && n.key != null ? (c(n.key), T("" + n.key)) : u.toString(36);
      }
      function X() {
      }
      function G(n) {
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw n.reason;
          default:
            switch (typeof n.status == "string" ? n.then(X, X) : (n.status = "pending", n.then(
              function(u) {
                n.status === "pending" && (n.status = "fulfilled", n.value = u);
              },
              function(u) {
                n.status === "pending" && (n.status = "rejected", n.reason = u);
              }
            )), n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw n.reason;
            }
        }
        throw n;
      }
      function z(n, u, E, C, M) {
        var U = typeof n;
        (U === "undefined" || U === "boolean") && (n = null);
        var D = !1;
        if (n === null) D = !0;
        else
          switch (U) {
            case "bigint":
            case "string":
            case "number":
              D = !0;
              break;
            case "object":
              switch (n.$$typeof) {
                case ie:
                case Ee:
                  D = !0;
                  break;
                case se:
                  return D = n._init, z(
                    D(n._payload),
                    u,
                    E,
                    C,
                    M
                  );
              }
          }
        if (D) {
          D = n, M = M(D);
          var K = C === "" ? "." + j(D, 0) : C;
          return Tt(M) ? (E = "", K != null && (E = K.replace(Ot, "$&/") + "/"), z(M, u, E, "", function(ge) {
            return ge;
          })) : M != null && (L(M) && (M.key != null && (D && D.key === M.key || c(M.key)), E = S(
            M,
            E + (M.key == null || D && D.key === M.key ? "" : ("" + M.key).replace(
              Ot,
              "$&/"
            ) + "/") + K
          ), C !== "" && D != null && L(D) && D.key == null && D._store && !D._store.validated && (E._store.validated = 2), M = E), u.push(M)), 1;
        }
        if (D = 0, K = C === "" ? "." : C + ":", Tt(n))
          for (var H = 0; H < n.length; H++)
            C = n[H], U = K + j(C, H), D += z(
              C,
              u,
              E,
              U,
              M
            );
        else if (H = a(n), typeof H == "function")
          for (H === n.entries && (At || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), At = !0), n = H.call(n), H = 0; !(C = n.next()).done; )
            C = C.value, U = K + j(C, H++), D += z(
              C,
              u,
              E,
              U,
              M
            );
        else if (U === "object") {
          if (typeof n.then == "function")
            return z(
              G(n),
              u,
              E,
              C,
              M
            );
          throw u = String(n), Error(
            "Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return D;
      }
      function Y(n, u, E) {
        if (n == null) return n;
        var C = [], M = 0;
        return z(n, C, "", "", function(U) {
          return u.call(E, U, M++);
        }), C;
      }
      function ee(n) {
        if (n._status === -1) {
          var u = n._result;
          u = u(), u.then(
            function(E) {
              (n._status === 0 || n._status === -1) && (n._status = 1, n._result = E);
            },
            function(E) {
              (n._status === 0 || n._status === -1) && (n._status = 2, n._result = E);
            }
          ), n._status === -1 && (n._status = 0, n._result = u);
        }
        if (n._status === 1)
          return u = n._result, u === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            u
          ), "default" in u || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            u
          ), u.default;
        throw n._result;
      }
      function B() {
        var n = q.H;
        return n === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), n;
      }
      function re() {
      }
      function F(n) {
        if (We === null)
          try {
            var u = ("require" + Math.random()).slice(0, 7);
            We = (e && e[u]).call(
              e,
              "timers"
            ).setImmediate;
          } catch {
            We = function(C) {
              zt === !1 && (zt = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var M = new MessageChannel();
              M.port1.onmessage = C, M.port2.postMessage(void 0);
            };
          }
        return We(n);
      }
      function $(n) {
        return 1 < n.length && typeof AggregateError == "function" ? new AggregateError(n) : n[0];
      }
      function Q(n, u) {
        u !== Xe - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Xe = u;
      }
      function W(n, u, E) {
        var C = q.actQueue;
        if (C !== null)
          if (C.length !== 0)
            try {
              Z(C), F(function() {
                return W(n, u, E);
              });
              return;
            } catch (M) {
              q.thrownErrors.push(M);
            }
          else q.actQueue = null;
        0 < q.thrownErrors.length ? (C = $(q.thrownErrors), q.thrownErrors.length = 0, E(C)) : u(n);
      }
      function Z(n) {
        if (!ut) {
          ut = !0;
          var u = 0;
          try {
            for (; u < n.length; u++) {
              var E = n[u];
              do {
                q.didUsePromise = !1;
                var C = E(!1);
                if (C !== null) {
                  if (q.didUsePromise) {
                    n[u] = E, n.splice(0, u);
                    return;
                  }
                  E = C;
                } else break;
              } while (!0);
            }
            n.length = 0;
          } catch (M) {
            n.splice(0, u + 1), q.thrownErrors.push(M);
          } finally {
            ut = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ie = Symbol.for("react.transitional.element"), Ee = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), I = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Ie = Symbol.for("react.activity"), Ue = Symbol.iterator, St = {}, Lt = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(n) {
          s(n, "forceUpdate");
        },
        enqueueReplaceState: function(n) {
          s(n, "replaceState");
        },
        enqueueSetState: function(n) {
          s(n, "setState");
        }
      }, jt = Object.assign, ct = {};
      Object.freeze(ct), i.prototype.isReactComponent = {}, i.prototype.setState = function(n, u) {
        if (typeof n != "object" && typeof n != "function" && n != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, n, u, "setState");
      }, i.prototype.forceUpdate = function(n) {
        this.updater.enqueueForceUpdate(this, n, "forceUpdate");
      };
      var ae = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Ve;
      for (Ve in ae)
        ae.hasOwnProperty(Ve) && r(Ve, ae[Ve]);
      f.prototype = i.prototype, ae = h.prototype = new f(), ae.constructor = h, jt(ae, i.prototype), ae.isPureReactComponent = !0;
      var Tt = Array.isArray, Tn = Symbol.for("react.client.reference"), q = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ye = Object.prototype.hasOwnProperty, $t = console.createTask ? console.createTask : function() {
        return null;
      };
      ae = {
        "react-stack-bottom-frame": function(n) {
          return n();
        }
      };
      var Mt, Nt, It = {}, $n = ae["react-stack-bottom-frame"].bind(ae, x)(), Mn = $t(w(x)), At = !1, Ot = /\/+/g, Pt = typeof reportError == "function" ? reportError : function(n) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var u = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
            error: n
          });
          if (!window.dispatchEvent(u)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", n);
          return;
        }
        console.error(n);
      }, zt = !1, We = null, Xe = 0, Ge = !1, ut = !1, Dt = typeof queueMicrotask == "function" ? function(n) {
        queueMicrotask(function() {
          return queueMicrotask(n);
        });
      } : F;
      ae = Object.freeze({
        __proto__: null,
        c: function(n) {
          return B().useMemoCache(n);
        }
      }), t.Children = {
        map: Y,
        forEach: function(n, u, E) {
          Y(
            n,
            function() {
              u.apply(this, arguments);
            },
            E
          );
        },
        count: function(n) {
          var u = 0;
          return Y(n, function() {
            u++;
          }), u;
        },
        toArray: function(n) {
          return Y(n, function(u) {
            return u;
          }) || [];
        },
        only: function(n) {
          if (!L(n))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return n;
        }
      }, t.Component = i, t.Fragment = o, t.Profiler = k, t.PureComponent = h, t.StrictMode = m, t.Suspense = A, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, t.__COMPILER_RUNTIME = ae, t.act = function(n) {
        var u = q.actQueue, E = Xe;
        Xe++;
        var C = q.actQueue = u !== null ? u : [], M = !1;
        try {
          var U = n();
        } catch (H) {
          q.thrownErrors.push(H);
        }
        if (0 < q.thrownErrors.length)
          throw Q(u, E), n = $(q.thrownErrors), q.thrownErrors.length = 0, n;
        if (U !== null && typeof U == "object" && typeof U.then == "function") {
          var D = U;
          return Dt(function() {
            M || Ge || (Ge = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(H, ge) {
              M = !0, D.then(
                function(Ce) {
                  if (Q(u, E), E === 0) {
                    try {
                      Z(C), F(function() {
                        return W(
                          Ce,
                          H,
                          ge
                        );
                      });
                    } catch (In) {
                      q.thrownErrors.push(In);
                    }
                    if (0 < q.thrownErrors.length) {
                      var Nn = $(
                        q.thrownErrors
                      );
                      q.thrownErrors.length = 0, ge(Nn);
                    }
                  } else H(Ce);
                },
                function(Ce) {
                  Q(u, E), 0 < q.thrownErrors.length && (Ce = $(
                    q.thrownErrors
                  ), q.thrownErrors.length = 0), ge(Ce);
                }
              );
            }
          };
        }
        var K = U;
        if (Q(u, E), E === 0 && (Z(C), C.length !== 0 && Dt(function() {
          M || Ge || (Ge = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), q.actQueue = null), 0 < q.thrownErrors.length)
          throw n = $(q.thrownErrors), q.thrownErrors.length = 0, n;
        return {
          then: function(H, ge) {
            M = !0, E === 0 ? (q.actQueue = C, F(function() {
              return W(
                K,
                H,
                ge
              );
            })) : H(K);
          }
        };
      }, t.cache = function(n) {
        return function() {
          return n.apply(null, arguments);
        };
      }, t.captureOwnerStack = function() {
        var n = q.getCurrentStack;
        return n === null ? null : n();
      }, t.cloneElement = function(n, u, E) {
        if (n == null)
          throw Error(
            "The argument must be a React element, but you passed " + n + "."
          );
        var C = jt({}, n.props), M = n.key, U = n._owner;
        if (u != null) {
          var D;
          e: {
            if (Ye.call(u, "ref") && (D = Object.getOwnPropertyDescriptor(
              u,
              "ref"
            ).get) && D.isReactWarning) {
              D = !1;
              break e;
            }
            D = u.ref !== void 0;
          }
          D && (U = g()), v(u) && (c(u.key), M = "" + u.key);
          for (K in u)
            !Ye.call(u, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && u.ref === void 0 || (C[K] = u[K]);
        }
        var K = arguments.length - 2;
        if (K === 1) C.children = E;
        else if (1 < K) {
          D = Array(K);
          for (var H = 0; H < K; H++)
            D[H] = arguments[H + 2];
          C.children = D;
        }
        for (C = y(
          n.type,
          M,
          void 0,
          void 0,
          U,
          C,
          n._debugStack,
          n._debugTask
        ), M = 2; M < arguments.length; M++)
          U = arguments[M], L(U) && U._store && (U._store.validated = 1);
        return C;
      }, t.createContext = function(n) {
        return n = {
          $$typeof: I,
          _currentValue: n,
          _currentValue2: n,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, n.Provider = n, n.Consumer = {
          $$typeof: R,
          _context: n
        }, n._currentRenderer = null, n._currentRenderer2 = null, n;
      }, t.createElement = function(n, u, E) {
        for (var C = 2; C < arguments.length; C++) {
          var M = arguments[C];
          L(M) && M._store && (M._store.validated = 1);
        }
        if (C = {}, M = null, u != null)
          for (H in Nt || !("__self" in u) || "key" in u || (Nt = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), v(u) && (c(u.key), M = "" + u.key), u)
            Ye.call(u, H) && H !== "key" && H !== "__self" && H !== "__source" && (C[H] = u[H]);
        var U = arguments.length - 2;
        if (U === 1) C.children = E;
        else if (1 < U) {
          for (var D = Array(U), K = 0; K < U; K++)
            D[K] = arguments[K + 2];
          Object.freeze && Object.freeze(D), C.children = D;
        }
        if (n && n.defaultProps)
          for (H in U = n.defaultProps, U)
            C[H] === void 0 && (C[H] = U[H]);
        M && b(
          C,
          typeof n == "function" ? n.displayName || n.name || "Unknown" : n
        );
        var H = 1e4 > q.recentlyCreatedOwnerStacks++;
        return y(
          n,
          M,
          void 0,
          void 0,
          g(),
          C,
          H ? Error("react-stack-top-frame") : $n,
          H ? $t(w(n)) : Mn
        );
      }, t.createRef = function() {
        var n = { current: null };
        return Object.seal(n), n;
      }, t.forwardRef = function(n) {
        n != null && n.$$typeof === P ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof n != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          n === null ? "null" : typeof n
        ) : n.length !== 0 && n.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          n.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), n != null && n.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var u = { $$typeof: V, render: n }, E;
        return Object.defineProperty(u, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return E;
          },
          set: function(C) {
            E = C, n.name || n.displayName || (Object.defineProperty(n, "name", { value: C }), n.displayName = C);
          }
        }), u;
      }, t.isValidElement = L, t.lazy = function(n) {
        return {
          $$typeof: se,
          _payload: { _status: -1, _result: n },
          _init: ee
        };
      }, t.memo = function(n, u) {
        n == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          n === null ? "null" : typeof n
        ), u = {
          $$typeof: P,
          type: n,
          compare: u === void 0 ? null : u
        };
        var E;
        return Object.defineProperty(u, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return E;
          },
          set: function(C) {
            E = C, n.name || n.displayName || (Object.defineProperty(n, "name", { value: C }), n.displayName = C);
          }
        }), u;
      }, t.startTransition = function(n) {
        var u = q.T, E = {};
        q.T = E, E._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var C = n(), M = q.S;
          M !== null && M(E, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(re, Pt);
        } catch (U) {
          Pt(U);
        } finally {
          u === null && E._updatedFibers && (n = E._updatedFibers.size, E._updatedFibers.clear(), 10 < n && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), q.T = u;
        }
      }, t.unstable_useCacheRefresh = function() {
        return B().useCacheRefresh();
      }, t.use = function(n) {
        return B().use(n);
      }, t.useActionState = function(n, u, E) {
        return B().useActionState(
          n,
          u,
          E
        );
      }, t.useCallback = function(n, u) {
        return B().useCallback(n, u);
      }, t.useContext = function(n) {
        var u = B();
        return n.$$typeof === R && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), u.useContext(n);
      }, t.useDebugValue = function(n, u) {
        return B().useDebugValue(n, u);
      }, t.useDeferredValue = function(n, u) {
        return B().useDeferredValue(n, u);
      }, t.useEffect = function(n, u, E) {
        n == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var C = B();
        if (typeof E == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return C.useEffect(n, u);
      }, t.useId = function() {
        return B().useId();
      }, t.useImperativeHandle = function(n, u, E) {
        return B().useImperativeHandle(n, u, E);
      }, t.useInsertionEffect = function(n, u) {
        return n == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), B().useInsertionEffect(n, u);
      }, t.useLayoutEffect = function(n, u) {
        return n == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), B().useLayoutEffect(n, u);
      }, t.useMemo = function(n, u) {
        return B().useMemo(n, u);
      }, t.useOptimistic = function(n, u) {
        return B().useOptimistic(n, u);
      }, t.useReducer = function(n, u, E) {
        return B().useReducer(n, u, E);
      }, t.useRef = function(n) {
        return B().useRef(n);
      }, t.useState = function(n) {
        return B().useState(n);
      }, t.useSyncExternalStore = function(n, u, E) {
        return B().useSyncExternalStore(
          n,
          u,
          E
        );
      }, t.useTransition = function() {
        return B().useTransition();
      }, t.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(De, De.exports)), De.exports;
}
var qt;
function cn() {
  return qt || (qt = 1, process.env.NODE_ENV === "production" ? Qe.exports = Pn() : Qe.exports = zn()), Qe.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Dn() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && function() {
    function e(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === ee ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case b:
          return "Fragment";
        case y:
          return "Profiler";
        case N:
          return "StrictMode";
        case j:
          return "Suspense";
        case X:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case v:
            return "Portal";
          case L:
            return (o.displayName || "Context") + ".Provider";
          case S:
            return (o._context.displayName || "Context") + ".Consumer";
          case T:
            var m = o.render;
            return o = o.displayName, o || (o = m.displayName || m.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case G:
            return m = o.displayName || null, m !== null ? m : e(o.type) || "Memo";
          case z:
            m = o._payload, o = o._init;
            try {
              return e(o(m));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function r(o) {
      try {
        t(o);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var k = m.error, R = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return k.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(o);
      }
    }
    function a(o) {
      if (o === b) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === z)
        return "<...>";
      try {
        var m = e(o);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var o = B.A;
      return o === null ? null : o.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function f(o) {
      if (re.call(o, "key")) {
        var m = Object.getOwnPropertyDescriptor(o, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function h(o, m) {
      function k() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: k,
        configurable: !0
      });
    }
    function l() {
      var o = e(this.type);
      return W[o] || (W[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function c(o, m, k, R, I, V, A, oe) {
      return k = V.ref, o = {
        $$typeof: x,
        type: o,
        key: m,
        props: V,
        _owner: I
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function _(o, m, k, R, I, V, A, oe) {
      var P = m.children;
      if (P !== void 0)
        if (R)
          if (F(P)) {
            for (R = 0; R < P.length; R++)
              w(P[R]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(P);
      if (re.call(m, "key")) {
        P = e(o);
        var se = Object.keys(m).filter(function(Ue) {
          return Ue !== "key";
        });
        R = 0 < se.length ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}", Ee[P + R] || (se = 0 < se.length ? "{" + se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          P,
          se,
          P
        ), Ee[P + R] = !0);
      }
      if (P = null, k !== void 0 && (r(k), P = "" + k), f(m) && (r(m.key), P = "" + m.key), "key" in m) {
        k = {};
        for (var Ie in m)
          Ie !== "key" && (k[Ie] = m[Ie]);
      } else k = m;
      return P && h(
        k,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), c(
        o,
        P,
        V,
        I,
        s(),
        k,
        A,
        oe
      );
    }
    function w(o) {
      typeof o == "object" && o !== null && o.$$typeof === x && o._store && (o._store.validated = 1);
    }
    var g = cn(), x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), L = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), B = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = Object.prototype.hasOwnProperty, F = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var Q, W = {}, Z = g["react-stack-bottom-frame"].bind(
      g,
      i
    )(), ie = $(a(i)), Ee = {};
    Oe.Fragment = b, Oe.jsx = function(o, m, k, R, I) {
      var V = 1e4 > B.recentlyCreatedOwnerStacks++;
      return _(
        o,
        m,
        k,
        !1,
        R,
        I,
        V ? Error("react-stack-top-frame") : Z,
        V ? $(a(o)) : ie
      );
    }, Oe.jsxs = function(o, m, k, R, I) {
      var V = 1e4 > B.recentlyCreatedOwnerStacks++;
      return _(
        o,
        m,
        k,
        !0,
        R,
        I,
        V ? Error("react-stack-top-frame") : Z,
        V ? $(a(o)) : ie
      );
    };
  }()), Oe;
}
var Vt;
function Bn() {
  return Vt || (Vt = 1, process.env.NODE_ENV === "production" ? Ke.exports = On() : Ke.exports = Dn()), Ke.exports;
}
var d = Bn(), p = cn();
const fe = /* @__PURE__ */ An(p), J = (e) => (e == null ? void 0 : e.filter(Boolean).join(" ")) || "", un = (e) => e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase(), Fn = (e) => !(e != null && e.colors) || !Object.entries(e.colors).length ? {} : Object.entries(e.colors).reduce(
  (t, [r, a]) => (r && a && (t[`--color-${un(r)}`] = a), t),
  {}
), Hn = (e) => !(e != null && e.sizes) || !Object.entries(e.sizes).length ? {} : Object.entries(e.sizes).reduce(
  (t, [r, a]) => (r && a && (t[`--size-${un(r)}`] = a), t),
  {}
), qn = (e) => ({
  ...Fn(e),
  ...Hn(e)
}), Un = (e, t) => {
  if (typeof document > "u") return;
  const r = document.createElement("style");
  r.setAttribute("id", e), r.textContent = t;
  const a = document.getElementById(e);
  a && a.remove(), document.head.appendChild(r);
}, Vn = (e) => Object.entries(e).map(([t, r]) => `${t}: ${r};`).join(""), Me = (e) => {
  const t = [];
  return p.Children.forEach(e, (r) => {
    if (p.isValidElement(r)) {
      const a = r;
      if (a.type === p.Fragment) {
        const s = Me(a.props.children);
        t.push(...s);
      } else
        t.push(p.cloneElement(a, { ...a.props }));
    } else
      t.push(r);
  }), t;
}, Yn = (e) => {
  if (typeof document > "u") return;
  const t = document.createElement("button");
  t.style.position = "absolute", t.style.opacity = "0", e.prepend(t), t.focus(), t.remove();
}, Wn = (e) => Array.from(
  e.querySelectorAll('button, [href], input, [tabindex="0"]')
).filter((r) => !!r), dn = (e) => {
  Yn(e);
  const t = Wn(e), r = t[0], a = t[t.length - 1] || r;
  r && (r.onkeydown = (s) => {
    s.key === "Tab" && s.shiftKey && (s.preventDefault(), a.focus());
  }), a && (a.onclick = () => {
    r == null || r.focus();
  }, a.onkeydown = (s) => {
    s.key === "Tab" && !s.shiftKey && (s.preventDefault(), r == null || r.focus());
  });
}, Xn = "_accordion_1o1ts_67", Gn = "_panel_1o1ts_76", Kn = "_content_1o1ts_77", Qn = "_secondary_1o1ts_80", Zn = "_margin_1o1ts_88", Jn = "_panelText_1o1ts_122", er = "_panelChevron_1o1ts_128", tr = "_expanded_1o1ts_155", nr = "_initialized_1o1ts_171", rr = "_hide_1o1ts_1", or = "_show_1o1ts_1", le = {
  accordion: Xn,
  default: "_default_1o1ts_73",
  panel: Gn,
  content: Kn,
  secondary: Qn,
  margin: Zn,
  panelText: Jn,
  panelChevron: er,
  expanded: tr,
  initialized: nr,
  hide: rr,
  show: or
}, Bi = ({
  title: e,
  color: t = "default",
  expanded: r = !1,
  onToggleExpand: a,
  buttonProps: s,
  noMargin: i = !1,
  initialized: f,
  children: h,
  ...l
}) => {
  const [c, _] = p.useState(r), [w, g] = p.useState(f), x = () => {
    _(!c), g(!0), a && a();
  };
  p.useEffect(() => {
    _(r);
  }, [r]);
  const v = () => /* @__PURE__ */ d.jsxs(
    "button",
    {
      ...s,
      className: le.panel,
      onClick: x,
      "aria-expanded": c ? "true" : "false",
      children: [
        /* @__PURE__ */ d.jsx("span", { className: le.panelText, children: e }),
        /* @__PURE__ */ d.jsx(
          "span",
          {
            className: `${le.panelChevron} ${c ? le.expanded : ""}`
          }
        )
      ]
    }
  ), b = J([
    le.accordion,
    t && le[t],
    !i && le.margin
  ]);
  return /* @__PURE__ */ d.jsxs("div", { className: b, ...l, children: [
    /* @__PURE__ */ d.jsx(v, {}),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: `${le.content} ${w ? le.initialized : ""} ${c ? le.expanded : ""}`,
        children: h
      }
    )
  ] });
};
var Pe = {}, Yt;
function sr() {
  if (Yt) return Pe;
  Yt = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.parse = f, Pe.serialize = c;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, a = /^[\u0020-\u003A\u003D-\u007E]*$/, s = Object.prototype.toString, i = /* @__PURE__ */ (() => {
    const g = function() {
    };
    return g.prototype = /* @__PURE__ */ Object.create(null), g;
  })();
  function f(g, x) {
    const v = new i(), b = g.length;
    if (b < 2)
      return v;
    const N = (x == null ? void 0 : x.decode) || _;
    let y = 0;
    do {
      const S = g.indexOf("=", y);
      if (S === -1)
        break;
      const L = g.indexOf(";", y), T = L === -1 ? b : L;
      if (S > T) {
        y = g.lastIndexOf(";", S - 1) + 1;
        continue;
      }
      const j = h(g, y, S), X = l(g, S, j), G = g.slice(j, X);
      if (v[G] === void 0) {
        let z = h(g, S + 1, T), Y = l(g, T, z);
        const ee = N(g.slice(z, Y));
        v[G] = ee;
      }
      y = T + 1;
    } while (y < b);
    return v;
  }
  function h(g, x, v) {
    do {
      const b = g.charCodeAt(x);
      if (b !== 32 && b !== 9)
        return x;
    } while (++x < v);
    return v;
  }
  function l(g, x, v) {
    for (; x > v; ) {
      const b = g.charCodeAt(--x);
      if (b !== 32 && b !== 9)
        return x + 1;
    }
    return v;
  }
  function c(g, x, v) {
    const b = (v == null ? void 0 : v.encode) || encodeURIComponent;
    if (!e.test(g))
      throw new TypeError(`argument name is invalid: ${g}`);
    const N = b(x);
    if (!t.test(N))
      throw new TypeError(`argument val is invalid: ${x}`);
    let y = g + "=" + N;
    if (!v)
      return y;
    if (v.maxAge !== void 0) {
      if (!Number.isInteger(v.maxAge))
        throw new TypeError(`option maxAge is invalid: ${v.maxAge}`);
      y += "; Max-Age=" + v.maxAge;
    }
    if (v.domain) {
      if (!r.test(v.domain))
        throw new TypeError(`option domain is invalid: ${v.domain}`);
      y += "; Domain=" + v.domain;
    }
    if (v.path) {
      if (!a.test(v.path))
        throw new TypeError(`option path is invalid: ${v.path}`);
      y += "; Path=" + v.path;
    }
    if (v.expires) {
      if (!w(v.expires) || !Number.isFinite(v.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${v.expires}`);
      y += "; Expires=" + v.expires.toUTCString();
    }
    if (v.httpOnly && (y += "; HttpOnly"), v.secure && (y += "; Secure"), v.partitioned && (y += "; Partitioned"), v.priority)
      switch (typeof v.priority == "string" ? v.priority.toLowerCase() : void 0) {
        case "low":
          y += "; Priority=Low";
          break;
        case "medium":
          y += "; Priority=Medium";
          break;
        case "high":
          y += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${v.priority}`);
      }
    if (v.sameSite)
      switch (typeof v.sameSite == "string" ? v.sameSite.toLowerCase() : v.sameSite) {
        case !0:
        case "strict":
          y += "; SameSite=Strict";
          break;
        case "lax":
          y += "; SameSite=Lax";
          break;
        case "none":
          y += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${v.sameSite}`);
      }
    return y;
  }
  function _(g) {
    if (g.indexOf("%") === -1)
      return g;
    try {
      return decodeURIComponent(g);
    } catch {
      return g;
    }
  }
  function w(g) {
    return s.call(g) === "[object Date]";
  }
  return Pe;
}
sr();
/**
 * react-router v7.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ne(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function pe(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function vt({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function yt(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substring(a), e = e.substring(0, a)), e && (t.pathname = e);
  }
  return t;
}
function fn(e, t, r = "/") {
  return ar(e, t, r, !1);
}
function ar(e, t, r, a) {
  let s = typeof t == "string" ? yt(t) : t, i = ye(s.pathname || "/", r);
  if (i == null)
    return null;
  let f = hn(e);
  ir(f);
  let h = null;
  for (let l = 0; h == null && l < f.length; ++l) {
    let c = vr(i);
    h = _r(
      f[l],
      c,
      a
    );
  }
  return h;
}
function hn(e, t = [], r = [], a = "") {
  let s = (i, f, h) => {
    let l = {
      relativePath: h === void 0 ? i.path || "" : h,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: f,
      route: i
    };
    l.relativePath.startsWith("/") && (ne(
      l.relativePath.startsWith(a),
      `Absolute route path "${l.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), l.relativePath = l.relativePath.slice(a.length));
    let c = he([a, l.relativePath]), _ = r.concat(l);
    i.children && i.children.length > 0 && (ne(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${c}".`
    ), hn(i.children, t, _, c)), !(i.path == null && !i.index) && t.push({
      path: c,
      score: pr(c, i.index),
      routesMeta: _
    });
  };
  return e.forEach((i, f) => {
    var h;
    if (i.path === "" || !((h = i.path) != null && h.includes("?")))
      s(i, f);
    else
      for (let l of pn(i.path))
        s(i, f, l);
  }), t;
}
function pn(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...a] = t, s = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (a.length === 0)
    return s ? [i, ""] : [i];
  let f = pn(a.join("/")), h = [];
  return h.push(
    ...f.map(
      (l) => l === "" ? i : [i, l].join("/")
    )
  ), s && h.push(...f), h.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function ir(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : mr(
      t.routesMeta.map((a) => a.childrenIndex),
      r.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var lr = /^:[\w-]+$/, cr = 3, ur = 2, dr = 1, fr = 10, hr = -2, Wt = (e) => e === "*";
function pr(e, t) {
  let r = e.split("/"), a = r.length;
  return r.some(Wt) && (a += hr), t && (a += ur), r.filter((s) => !Wt(s)).reduce(
    (s, i) => s + (lr.test(i) ? cr : i === "" ? dr : fr),
    a
  );
}
function mr(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, s) => a === t[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function _r(e, t, r = !1) {
  let { routesMeta: a } = e, s = {}, i = "/", f = [];
  for (let h = 0; h < a.length; ++h) {
    let l = a[h], c = h === a.length - 1, _ = i === "/" ? t : t.slice(i.length) || "/", w = ot(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
      _
    ), g = l.route;
    if (!w && c && r && !a[a.length - 1].route.index && (w = ot(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      _
    )), !w)
      return null;
    Object.assign(s, w.params), f.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: he([i, w.pathname]),
      pathnameBase: br(
        he([i, w.pathnameBase])
      ),
      route: g
    }), w.pathnameBase !== "/" && (i = he([i, w.pathnameBase]));
  }
  return f;
}
function ot(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, a] = gr(
    e.path,
    e.caseSensitive,
    e.end
  ), s = t.match(r);
  if (!s) return null;
  let i = s[0], f = i.replace(/(.)\/+$/, "$1"), h = s.slice(1);
  return {
    params: a.reduce(
      (c, { paramName: _, isOptional: w }, g) => {
        if (_ === "*") {
          let v = h[g] || "";
          f = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const x = h[g];
        return w && !x ? c[_] = void 0 : c[_] = (x || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: i,
    pathnameBase: f,
    pattern: e
  };
}
function gr(e, t = !1, r = !0) {
  pe(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let a = [], s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (f, h, l) => (a.push({ paramName: h, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (a.push({ paramName: "*" }), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, t ? void 0 : "i"), a];
}
function vr(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return pe(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function ye(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
function yr(e, t = "/") {
  let {
    pathname: r,
    search: a = "",
    hash: s = ""
  } = typeof e == "string" ? yt(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : wr(r, t) : t,
    search: xr(a),
    hash: Cr(s)
  };
}
function wr(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((s) => {
    s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
  }), r.length > 1 ? r.join("/") : "/";
}
function dt(e, t, r, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Er(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function mn(e) {
  let t = Er(e);
  return t.map(
    (r, a) => a === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function _n(e, t, r, a = !1) {
  let s;
  typeof e == "string" ? s = yt(e) : (s = { ...e }, ne(
    !s.pathname || !s.pathname.includes("?"),
    dt("?", "pathname", "search", s)
  ), ne(
    !s.pathname || !s.pathname.includes("#"),
    dt("#", "pathname", "hash", s)
  ), ne(
    !s.search || !s.search.includes("#"),
    dt("#", "search", "hash", s)
  ));
  let i = e === "" || s.pathname === "", f = i ? "/" : s.pathname, h;
  if (f == null)
    h = r;
  else {
    let w = t.length - 1;
    if (!a && f.startsWith("..")) {
      let g = f.split("/");
      for (; g[0] === ".."; )
        g.shift(), w -= 1;
      s.pathname = g.join("/");
    }
    h = w >= 0 ? t[w] : "/";
  }
  let l = yr(s, h), c = f && f !== "/" && f.endsWith("/"), _ = (i || f === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (c || _) && (l.pathname += "/"), l;
}
var he = (e) => e.join("/").replace(/\/\/+/g, "/"), br = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), xr = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Cr = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function kr(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var gn = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  gn
);
var Rr = [
  "GET",
  ...gn
];
new Set(Rr);
var Ne = p.createContext(null);
Ne.displayName = "DataRouter";
var st = p.createContext(null);
st.displayName = "DataRouterState";
var vn = p.createContext({
  isTransitioning: !1
});
vn.displayName = "ViewTransition";
var Sr = p.createContext(
  /* @__PURE__ */ new Map()
);
Sr.displayName = "Fetchers";
var Lr = p.createContext(null);
Lr.displayName = "Await";
var me = p.createContext(
  null
);
me.displayName = "Navigation";
var wt = p.createContext(
  null
);
wt.displayName = "Location";
var _e = p.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
_e.displayName = "Route";
var Et = p.createContext(null);
Et.displayName = "RouteError";
function jr(e, { relative: t } = {}) {
  ne(
    at(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: a } = p.useContext(me), { hash: s, pathname: i, search: f } = qe(e, { relative: t }), h = i;
  return r !== "/" && (h = i === "/" ? r : he([r, i])), a.createHref({ pathname: h, search: f, hash: s });
}
function at() {
  return p.useContext(wt) != null;
}
function xe() {
  return ne(
    at(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), p.useContext(wt).location;
}
var yn = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function wn(e) {
  p.useContext(me).static || p.useLayoutEffect(e);
}
function Tr() {
  let { isDataRoute: e } = p.useContext(_e);
  return e ? qr() : $r();
}
function $r() {
  ne(
    at(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = p.useContext(Ne), { basename: t, navigator: r } = p.useContext(me), { matches: a } = p.useContext(_e), { pathname: s } = xe(), i = JSON.stringify(mn(a)), f = p.useRef(!1);
  return wn(() => {
    f.current = !0;
  }), p.useCallback(
    (l, c = {}) => {
      if (pe(f.current, yn), !f.current) return;
      if (typeof l == "number") {
        r.go(l);
        return;
      }
      let _ = _n(
        l,
        JSON.parse(i),
        s,
        c.relative === "path"
      );
      e == null && t !== "/" && (_.pathname = _.pathname === "/" ? t : he([t, _.pathname])), (c.replace ? r.replace : r.push)(
        _,
        c.state,
        c
      );
    },
    [
      t,
      r,
      i,
      s,
      e
    ]
  );
}
p.createContext(null);
function qe(e, { relative: t } = {}) {
  let { matches: r } = p.useContext(_e), { pathname: a } = xe(), s = JSON.stringify(mn(r));
  return p.useMemo(
    () => _n(
      e,
      JSON.parse(s),
      a,
      t === "path"
    ),
    [e, s, a, t]
  );
}
function Mr(e, t, r, a) {
  ne(
    at(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s } = p.useContext(me), { matches: i } = p.useContext(_e), f = i[i.length - 1], h = f ? f.params : {}, l = f ? f.pathname : "/", c = f ? f.pathnameBase : "/", _ = f && f.route;
  {
    let y = _ && _.path || "";
    En(
      l,
      !_ || y.endsWith("*") || y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y === "/" ? "*" : `${y}/*`}">.`
    );
  }
  let w = xe(), g;
  g = w;
  let x = g.pathname || "/", v = x;
  if (c !== "/") {
    let y = c.replace(/^\//, "").split("/");
    v = "/" + x.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let b = fn(e, { pathname: v });
  return pe(
    _ || b != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), pe(
    b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), Pr(
    b && b.map(
      (y) => Object.assign({}, y, {
        params: Object.assign({}, h, y.params),
        pathname: he([
          c,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(y.pathname).pathname : y.pathname
        ]),
        pathnameBase: y.pathnameBase === "/" ? c : he([
          c,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(y.pathnameBase).pathname : y.pathnameBase
        ])
      })
    ),
    i,
    r,
    a
  );
}
function Nr() {
  let e = Hr(), t = kr(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: a }, i = { padding: "2px 4px", backgroundColor: a }, f = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), f = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ p.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ p.createElement("code", { style: i }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ p.createElement("code", { style: i }, "errorElement"), " prop on your route.")), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ p.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ p.createElement("pre", { style: s }, r) : null, f);
}
var Ir = /* @__PURE__ */ p.createElement(Nr, null), Ar = class extends p.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ p.createElement(_e.Provider, { value: this.props.routeContext }, /* @__PURE__ */ p.createElement(
      Et.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Or({ routeContext: e, match: t, children: r }) {
  let a = p.useContext(Ne);
  return a && a.static && a.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ p.createElement(_e.Provider, { value: e }, r);
}
function Pr(e, t = [], r = null, a = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let s = e, i = r == null ? void 0 : r.errors;
  if (i != null) {
    let l = s.findIndex(
      (c) => c.route.id && (i == null ? void 0 : i[c.route.id]) !== void 0
    );
    ne(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        i
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, l + 1)
    );
  }
  let f = !1, h = -1;
  if (r)
    for (let l = 0; l < s.length; l++) {
      let c = s[l];
      if ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (h = l), c.route.id) {
        let { loaderData: _, errors: w } = r, g = c.route.loader && !_.hasOwnProperty(c.route.id) && (!w || w[c.route.id] === void 0);
        if (c.route.lazy || g) {
          f = !0, h >= 0 ? s = s.slice(0, h + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((l, c, _) => {
    let w, g = !1, x = null, v = null;
    r && (w = i && c.route.id ? i[c.route.id] : void 0, x = c.route.errorElement || Ir, f && (h < 0 && _ === 0 ? (En(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), g = !0, v = null) : h === _ && (g = !0, v = c.route.hydrateFallbackElement || null)));
    let b = t.concat(s.slice(0, _ + 1)), N = () => {
      let y;
      return w ? y = x : g ? y = v : c.route.Component ? y = /* @__PURE__ */ p.createElement(c.route.Component, null) : c.route.element ? y = c.route.element : y = l, /* @__PURE__ */ p.createElement(
        Or,
        {
          match: c,
          routeContext: {
            outlet: l,
            matches: b,
            isDataRoute: r != null
          },
          children: y
        }
      );
    };
    return r && (c.route.ErrorBoundary || c.route.errorElement || _ === 0) ? /* @__PURE__ */ p.createElement(
      Ar,
      {
        location: r.location,
        revalidation: r.revalidation,
        component: x,
        error: w,
        children: N(),
        routeContext: { outlet: null, matches: b, isDataRoute: !0 }
      }
    ) : N();
  }, null);
}
function bt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zr(e) {
  let t = p.useContext(Ne);
  return ne(t, bt(e)), t;
}
function Dr(e) {
  let t = p.useContext(st);
  return ne(t, bt(e)), t;
}
function Br(e) {
  let t = p.useContext(_e);
  return ne(t, bt(e)), t;
}
function xt(e) {
  let t = Br(e), r = t.matches[t.matches.length - 1];
  return ne(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Fr() {
  return xt(
    "useRouteId"
    /* UseRouteId */
  );
}
function Hr() {
  var a;
  let e = p.useContext(Et), t = Dr(
    "useRouteError"
    /* UseRouteError */
  ), r = xt(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (a = t.errors) == null ? void 0 : a[r];
}
function qr() {
  let { router: e } = zr(
    "useNavigate"
    /* UseNavigateStable */
  ), t = xt(
    "useNavigate"
    /* UseNavigateStable */
  ), r = p.useRef(!1);
  return wn(() => {
    r.current = !0;
  }), p.useCallback(
    async (s, i = {}) => {
      pe(r.current, yn), r.current && (typeof s == "number" ? e.navigate(s) : await e.navigate(s, { fromRouteId: t, ...i }));
    },
    [e, t]
  );
}
var Xt = {};
function En(e, t, r) {
  !t && !Xt[e] && (Xt[e] = !0, pe(!1, r));
}
p.memo(Ur);
function Ur({
  routes: e,
  future: t,
  state: r
}) {
  return Mr(e, void 0, r, t);
}
var nt = "get", rt = "application/x-www-form-urlencoded";
function it(e) {
  return e != null && typeof e.tagName == "string";
}
function Vr(e) {
  return it(e) && e.tagName.toLowerCase() === "button";
}
function Yr(e) {
  return it(e) && e.tagName.toLowerCase() === "form";
}
function Wr(e) {
  return it(e) && e.tagName.toLowerCase() === "input";
}
function Xr(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Gr(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Xr(e);
}
var Ze = null;
function Kr() {
  if (Ze === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ze = !1;
    } catch {
      Ze = !0;
    }
  return Ze;
}
var Qr = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ft(e) {
  return e != null && !Qr.has(e) ? (pe(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rt}"`
  ), null) : e;
}
function Zr(e, t) {
  let r, a, s, i, f;
  if (Yr(e)) {
    let h = e.getAttribute("action");
    a = h ? ye(h, t) : null, r = e.getAttribute("method") || nt, s = ft(e.getAttribute("enctype")) || rt, i = new FormData(e);
  } else if (Vr(e) || Wr(e) && (e.type === "submit" || e.type === "image")) {
    let h = e.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || h.getAttribute("action");
    if (a = l ? ye(l, t) : null, r = e.getAttribute("formmethod") || h.getAttribute("method") || nt, s = ft(e.getAttribute("formenctype")) || ft(h.getAttribute("enctype")) || rt, i = new FormData(h, e), !Kr()) {
      let { name: c, type: _, value: w } = e;
      if (_ === "image") {
        let g = c ? `${c}.` : "";
        i.append(`${g}x`, "0"), i.append(`${g}y`, "0");
      } else c && i.append(c, w);
    }
  } else {
    if (it(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = nt, a = null, s = rt, f = e;
  }
  return i && s === "text/plain" && (f = i, i = void 0), { action: a, method: r.toLowerCase(), encType: s, formData: i, body: f };
}
function Ct(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
async function Jr(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function eo(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function to(e, t, r) {
  let a = await Promise.all(
    e.map(async (s) => {
      let i = t.routes[s.route.id];
      if (i) {
        let f = await Jr(i, r);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return so(
    a.flat(1).filter(eo).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function Gt(e, t, r, a, s, i) {
  let f = (l, c) => r[c] ? l.route.id !== r[c].route.id : !0, h = (l, c) => {
    var _;
    return (
      // param change, /users/123 -> /users/456
      r[c].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((_ = r[c].route.path) == null ? void 0 : _.endsWith("*")) && r[c].params["*"] !== l.params["*"]
    );
  };
  return i === "assets" ? t.filter(
    (l, c) => f(l, c) || h(l, c)
  ) : i === "data" ? t.filter((l, c) => {
    var w;
    let _ = a.routes[l.route.id];
    if (!_ || !_.hasLoader)
      return !1;
    if (f(l, c) || h(l, c))
      return !0;
    if (l.route.shouldRevalidate) {
      let g = l.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: ((w = r[0]) == null ? void 0 : w.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof g == "boolean")
        return g;
    }
    return !0;
  }) : [];
}
function no(e, t, { includeHydrateFallback: r } = {}) {
  return ro(
    e.map((a) => {
      let s = t.routes[a.route.id];
      if (!s) return [];
      let i = [s.module];
      return s.clientActionModule && (i = i.concat(s.clientActionModule)), s.clientLoaderModule && (i = i.concat(s.clientLoaderModule)), r && s.hydrateFallbackModule && (i = i.concat(s.hydrateFallbackModule)), s.imports && (i = i.concat(s.imports)), i;
    }).flat(1)
  );
}
function ro(e) {
  return [...new Set(e)];
}
function oo(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let a of r)
    t[a] = e[a];
  return t;
}
function so(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((a, s) => {
    let i = JSON.stringify(oo(s));
    return r.has(i) || (r.add(i), a.push({ key: i, link: s })), a;
  }, []);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ao = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function io(e, t) {
  let r = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r.pathname === "/" ? r.pathname = "_root.data" : t && ye(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.data` : r.pathname = `${r.pathname.replace(/\/$/, "")}.data`, r;
}
function bn() {
  let e = p.useContext(Ne);
  return Ct(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function lo() {
  let e = p.useContext(st);
  return Ct(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var kt = p.createContext(void 0);
kt.displayName = "FrameworkContext";
function xn() {
  let e = p.useContext(kt);
  return Ct(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function co(e, t) {
  let r = p.useContext(kt), [a, s] = p.useState(!1), [i, f] = p.useState(!1), { onFocus: h, onBlur: l, onMouseEnter: c, onMouseLeave: _, onTouchStart: w } = t, g = p.useRef(null);
  p.useEffect(() => {
    if (e === "render" && f(!0), e === "viewport") {
      let b = (y) => {
        y.forEach((S) => {
          f(S.isIntersecting);
        });
      }, N = new IntersectionObserver(b, { threshold: 0.5 });
      return g.current && N.observe(g.current), () => {
        N.disconnect();
      };
    }
  }, [e]), p.useEffect(() => {
    if (a) {
      let b = setTimeout(() => {
        f(!0);
      }, 100);
      return () => {
        clearTimeout(b);
      };
    }
  }, [a]);
  let x = () => {
    s(!0);
  }, v = () => {
    s(!1), f(!1);
  };
  return r ? e !== "intent" ? [i, g, {}] : [
    i,
    g,
    {
      onFocus: ze(h, x),
      onBlur: ze(l, v),
      onMouseEnter: ze(c, x),
      onMouseLeave: ze(_, v),
      onTouchStart: ze(w, x)
    }
  ] : [!1, g, {}];
}
function ze(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function uo({
  page: e,
  ...t
}) {
  let { router: r } = bn(), a = p.useMemo(
    () => fn(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return a ? /* @__PURE__ */ p.createElement(ho, { page: e, matches: a, ...t }) : null;
}
function fo(e) {
  let { manifest: t, routeModules: r } = xn(), [a, s] = p.useState([]);
  return p.useEffect(() => {
    let i = !1;
    return to(e, t, r).then(
      (f) => {
        i || s(f);
      }
    ), () => {
      i = !0;
    };
  }, [e, t, r]), a;
}
function ho({
  page: e,
  matches: t,
  ...r
}) {
  let a = xe(), { manifest: s, routeModules: i } = xn(), { basename: f } = bn(), { loaderData: h, matches: l } = lo(), c = p.useMemo(
    () => Gt(
      e,
      t,
      l,
      s,
      a,
      "data"
    ),
    [e, t, l, s, a]
  ), _ = p.useMemo(
    () => Gt(
      e,
      t,
      l,
      s,
      a,
      "assets"
    ),
    [e, t, l, s, a]
  ), w = p.useMemo(() => {
    if (e === a.pathname + a.search + a.hash)
      return [];
    let v = /* @__PURE__ */ new Set(), b = !1;
    if (t.forEach((y) => {
      var L;
      let S = s.routes[y.route.id];
      !S || !S.hasLoader || (!c.some((T) => T.route.id === y.route.id) && y.route.id in h && ((L = i[y.route.id]) != null && L.shouldRevalidate) || S.hasClientLoader ? b = !0 : v.add(y.route.id));
    }), v.size === 0)
      return [];
    let N = io(e, f);
    return b && v.size > 0 && N.searchParams.set(
      "_routes",
      t.filter((y) => v.has(y.route.id)).map((y) => y.route.id).join(",")
    ), [N.pathname + N.search];
  }, [
    f,
    h,
    a,
    s,
    c,
    t,
    e,
    i
  ]), g = p.useMemo(
    () => no(_, s),
    [_, s]
  ), x = fo(_);
  return /* @__PURE__ */ p.createElement(p.Fragment, null, w.map((v) => /* @__PURE__ */ p.createElement("link", { key: v, rel: "prefetch", as: "fetch", href: v, ...r })), g.map((v) => /* @__PURE__ */ p.createElement("link", { key: v, rel: "modulepreload", href: v, ...r })), x.map(({ key: v, link: b }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ p.createElement("link", { key: v, ...b })
  )));
}
function po(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Cn && (window.__reactRouterVersion = "7.6.1");
} catch {
}
var kn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Be = p.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: a = "none",
    relative: s,
    reloadDocument: i,
    replace: f,
    state: h,
    target: l,
    to: c,
    preventScrollReset: _,
    viewTransition: w,
    ...g
  }, x) {
    let { basename: v } = p.useContext(me), b = typeof c == "string" && kn.test(c), N, y = !1;
    if (typeof c == "string" && b && (N = c, Cn))
      try {
        let Y = new URL(window.location.href), ee = c.startsWith("//") ? new URL(Y.protocol + c) : new URL(c), B = ye(ee.pathname, v);
        ee.origin === Y.origin && B != null ? c = B + ee.search + ee.hash : y = !0;
      } catch {
        pe(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let S = jr(c, { relative: s }), [L, T, j] = co(
      a,
      g
    ), X = vo(c, {
      replace: f,
      state: h,
      target: l,
      preventScrollReset: _,
      relative: s,
      viewTransition: w
    });
    function G(Y) {
      t && t(Y), Y.defaultPrevented || X(Y);
    }
    let z = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ p.createElement(
        "a",
        {
          ...g,
          ...j,
          href: N || S,
          onClick: y || i ? t : G,
          ref: po(x, T),
          target: l,
          "data-discover": !b && r === "render" ? "true" : void 0
        }
      )
    );
    return L && !b ? /* @__PURE__ */ p.createElement(p.Fragment, null, z, /* @__PURE__ */ p.createElement(uo, { page: S })) : z;
  }
);
Be.displayName = "Link";
var mo = p.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: a = "",
    end: s = !1,
    style: i,
    to: f,
    viewTransition: h,
    children: l,
    ...c
  }, _) {
    let w = qe(f, { relative: c.relative }), g = xe(), x = p.useContext(st), { navigator: v, basename: b } = p.useContext(me), N = x != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    xo(w) && h === !0, y = v.encodeLocation ? v.encodeLocation(w).pathname : w.pathname, S = g.pathname, L = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    r || (S = S.toLowerCase(), L = L ? L.toLowerCase() : null, y = y.toLowerCase()), L && b && (L = ye(L, b) || L);
    const T = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
    let j = S === y || !s && S.startsWith(y) && S.charAt(T) === "/", X = L != null && (L === y || !s && L.startsWith(y) && L.charAt(y.length) === "/"), G = {
      isActive: j,
      isPending: X,
      isTransitioning: N
    }, z = j ? t : void 0, Y;
    typeof a == "function" ? Y = a(G) : Y = [
      a,
      j ? "active" : null,
      X ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ee = typeof i == "function" ? i(G) : i;
    return /* @__PURE__ */ p.createElement(
      Be,
      {
        ...c,
        "aria-current": z,
        className: Y,
        ref: _,
        style: ee,
        to: f,
        viewTransition: h
      },
      typeof l == "function" ? l(G) : l
    );
  }
);
mo.displayName = "NavLink";
var _o = p.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: a,
    replace: s,
    state: i,
    method: f = nt,
    action: h,
    onSubmit: l,
    relative: c,
    preventScrollReset: _,
    viewTransition: w,
    ...g
  }, x) => {
    let v = Eo(), b = bo(h, { relative: c }), N = f.toLowerCase() === "get" ? "get" : "post", y = typeof h == "string" && kn.test(h), S = (L) => {
      if (l && l(L), L.defaultPrevented) return;
      L.preventDefault();
      let T = L.nativeEvent.submitter, j = (T == null ? void 0 : T.getAttribute("formmethod")) || f;
      v(T || L.currentTarget, {
        fetcherKey: t,
        method: j,
        navigate: r,
        replace: s,
        state: i,
        relative: c,
        preventScrollReset: _,
        viewTransition: w
      });
    };
    return /* @__PURE__ */ p.createElement(
      "form",
      {
        ref: x,
        method: N,
        action: b,
        onSubmit: a ? l : S,
        ...g,
        "data-discover": !y && e === "render" ? "true" : void 0
      }
    );
  }
);
_o.displayName = "Form";
function go(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rn(e) {
  let t = p.useContext(Ne);
  return ne(t, go(e)), t;
}
function vo(e, {
  target: t,
  replace: r,
  state: a,
  preventScrollReset: s,
  relative: i,
  viewTransition: f
} = {}) {
  let h = Tr(), l = xe(), c = qe(e, { relative: i });
  return p.useCallback(
    (_) => {
      if (Gr(_, t)) {
        _.preventDefault();
        let w = r !== void 0 ? r : vt(l) === vt(c);
        h(e, {
          replace: w,
          state: a,
          preventScrollReset: s,
          relative: i,
          viewTransition: f
        });
      }
    },
    [
      l,
      h,
      c,
      r,
      a,
      t,
      e,
      s,
      i,
      f
    ]
  );
}
var yo = 0, wo = () => `__${String(++yo)}__`;
function Eo() {
  let { router: e } = Rn(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = p.useContext(me), r = Fr();
  return p.useCallback(
    async (a, s = {}) => {
      let { action: i, method: f, encType: h, formData: l, body: c } = Zr(
        a,
        t
      );
      if (s.navigate === !1) {
        let _ = s.fetcherKey || wo();
        await e.fetch(_, r, s.action || i, {
          preventScrollReset: s.preventScrollReset,
          formData: l,
          body: c,
          formMethod: s.method || f,
          formEncType: s.encType || h,
          flushSync: s.flushSync
        });
      } else
        await e.navigate(s.action || i, {
          preventScrollReset: s.preventScrollReset,
          formData: l,
          body: c,
          formMethod: s.method || f,
          formEncType: s.encType || h,
          replace: s.replace,
          state: s.state,
          fromRouteId: r,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [e, t, r]
  );
}
function bo(e, { relative: t } = {}) {
  let { basename: r } = p.useContext(me), a = p.useContext(_e);
  ne(a, "useFormAction must be used inside a RouteContext");
  let [s] = a.matches.slice(-1), i = { ...qe(e || ".", { relative: t }) }, f = xe();
  if (e == null) {
    i.search = f.search;
    let h = new URLSearchParams(i.search), l = h.getAll("index");
    if (l.some((_) => _ === "")) {
      h.delete("index"), l.filter((w) => w).forEach((w) => h.append("index", w));
      let _ = h.toString();
      i.search = _ ? `?${_}` : "";
    }
  }
  return (!e || e === ".") && s.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (i.pathname = i.pathname === "/" ? r : he([r, i.pathname])), vt(i);
}
function xo(e, t = {}) {
  let r = p.useContext(vn);
  ne(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = Rn(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = qe(e, { relative: t.relative });
  if (!r.isTransitioning)
    return !1;
  let i = ye(r.currentLocation.pathname, a) || r.currentLocation.pathname, f = ye(r.nextLocation.pathname, a) || r.nextLocation.pathname;
  return ot(s.pathname, f) != null || ot(s.pathname, i) != null;
}
[
  ...ao
];
const Co = "_button_w916g_161", ko = "_noMargin_w916g_189", Ro = "_regular_w916g_199", So = "_small_w916g_202", Lo = "_primary_w916g_213", jo = "_noHover_w916g_217", To = "_secondary_w916g_233", $o = "_disabled_w916g_252", Mo = "_hasErrors_w916g_272", No = "_rounded_w916g_278", Io = "_hasArrowLeft_w916g_282", Ao = "_pushprev_w916g_1", Oo = "_hasArrowRight_w916g_320", Po = "_pushnext_w916g_1", ce = {
  button: Co,
  noMargin: ko,
  regular: Ro,
  small: So,
  primary: Lo,
  noHover: jo,
  secondary: To,
  disabled: $o,
  hasErrors: Mo,
  rounded: No,
  hasArrowLeft: Io,
  pushprev: Ao,
  hasArrowRight: Oo,
  pushnext: Po
}, Sn = ({
  content: e,
  color: t = "primary",
  size: r = "regular",
  arrow: a = "none",
  disabled: s = !1,
  inputType: i,
  defaultChecked: f,
  hasErrors: h = !1,
  noHover: l = !1,
  rounded: c = !1,
  noMargin: _ = !1,
  href: w,
  children: g,
  ...x
}) => {
  const v = (T) => {
    switch (T) {
      case "left":
        return ce.hasArrowLeft;
      case "right":
        return ce.hasArrowRight;
      default:
        return "";
    }
  }, b = i === "radio" ? f ? "primary" : "secondary" : t, N = J([
    ce.button,
    ce[b],
    ce[r],
    v(a),
    l || i === "radio" ? ce.noHover : null,
    c && ce.rounded,
    h && ce.hasErrors,
    s && ce.disabled,
    _ && ce.noMargin
  ]), y = {
    "aria-invalid": h || void 0,
    href: !s && (w != null && w.length) ? w : void 0,
    className: N,
    // Always include className in buttonProps for all elements
    ...x
  }, S = (T) => fe.Children.toArray(
    Me(T)
  ).map((X, G) => {
    if (!fe.isValidElement(X)) return null;
    const z = X, Y = z.type === Be && typeof z.props == "object" && z.props !== null && "to" in z.props;
    return !s && Y ? p.cloneElement(z, {
      className: N,
      key: `button-${G}`,
      to: z.props.to
    }) : /* @__PURE__ */ p.createElement("button", { ...y, key: `button-${G}` }, e || z.props && z.props.children);
  });
  if (i === "button")
    return /* @__PURE__ */ d.jsx("button", { type: "button", ...y, children: e || g });
  if (i === "radio") {
    const T = { ...y };
    return delete T.href, /* @__PURE__ */ d.jsxs("label", { className: N, children: [
      /* @__PURE__ */ d.jsx(
        "input",
        {
          ...T,
          type: "radio"
        }
      ),
      e
    ] });
  }
  if (w != null && w.length && !s) {
    const T = { ...y };
    return "type" in T && delete T.type, /* @__PURE__ */ d.jsx("a", { ...T, children: e || g });
  }
  return fe.isValidElement(g) && g.type === Be ? /* @__PURE__ */ d.jsx(p.Fragment, { children: S(p.Children.toArray(g)) }) : /* @__PURE__ */ d.jsx("button", { ...y, children: e || g });
}, zo = "_checkBoxIcon_1kc3w_1", Do = "_showBox_1kc3w_22", Bo = "_hasErrors_1kc3w_27", Fo = "_checked_1kc3w_37", Ho = "_disabled_1kc3w_53", qo = "_checkmark_1kc3w_58", ke = {
  checkBoxIcon: zo,
  showBox: Do,
  hasErrors: Bo,
  checked: Fo,
  disabled: Ho,
  checkmark: qo
}, Kt = ({
  size: e = "20px",
  checked: t = !1,
  disabled: r = !1,
  showBox: a = !0,
  hasErrors: s = !1,
  checkmarkCharacter: i = "✔"
}) => {
  const f = {
    height: e,
    width: e,
    fontSize: e
  }, h = [
    ke.checkBoxIcon,
    t && ke.checked,
    r && ke.disabled,
    a && ke.showBox,
    s && ke.hasErrors
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d.jsx("span", { className: h, style: f, children: /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: ke.checkmark, children: t ? i : "" }) });
}, we = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32.275'%20height='30.469'%20focusable='false'%3e%3cpath%20fill='%239d2024'%20d='m0%2014.355%202.246-6.933c5.176%201.823%208.936%203.402%2011.28%204.736-.62-5.892-.945-9.944-.977-12.158h7.08c-.098%203.223-.472%207.26-1.123%2012.11%203.353-1.693%207.194-3.256%2011.523-4.688l2.246%206.933c-4.134%201.368-8.186%202.28-12.158%202.735%201.986%201.725%204.785%204.801%208.399%209.228l-5.86%204.15c-1.888-2.57-4.118-6.07-6.69-10.497-2.408%204.59-4.524%208.089-6.347%2010.498l-5.762-4.15c3.776-4.656%206.478-7.732%208.106-9.23-4.2-.813-8.187-1.724-11.963-2.734'/%3e%3c/svg%3e", Uo = "_checkBoxInput_f1w9m_1", Vo = "_requiredSymbol_f1w9m_6", Yo = "_contentOnly_f1w9m_13", Wo = "_disabled_f1w9m_13", Xo = "_labelText_f1w9m_19", Go = "_hasErrors_f1w9m_27", Re = {
  checkBoxInput: Uo,
  requiredSymbol: Vo,
  contentOnly: Yo,
  disabled: Wo,
  labelText: Xo,
  hasErrors: Go
}, Ko = ({
  checked: e = !1,
  disabled: t = !1,
  required: r = !1,
  requiredGroup: a = !1,
  id: s,
  name: i = "",
  onChange: f,
  contentOnly: h = !1,
  hasErrors: l = !1,
  checkmarkCharacter: c = "✔",
  tabIndex: _ = 0,
  children: w,
  "aria-controls": g,
  "aria-describedby": x
}) => {
  const v = [
    Re.checkBoxInput,
    h && Re.contentOnly,
    t && Re.disabled,
    l && Re.hasErrors
  ].filter(Boolean).join(" "), b = {
    checked: e,
    disabled: t,
    showBox: !h,
    hasErrors: h && l,
    checkmarkCharacter: c
  }, N = {
    id: s,
    name: i,
    type: "checkbox",
    checked: e,
    disabled: t,
    required: r || a,
    onChange: f,
    tabIndex: _,
    "aria-controls": g,
    "aria-invalid": l ? "true" : void 0,
    "aria-describedby": x
  };
  return /* @__PURE__ */ d.jsxs("label", { htmlFor: s, className: v, children: [
    h ? /* @__PURE__ */ d.jsx(Kt, { ...b }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(Kt, { ...b }),
      /* @__PURE__ */ d.jsx("input", { ...N })
    ] }),
    /* @__PURE__ */ d.jsxs("span", { className: Re.labelText, children: [
      w,
      r && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: Re.requiredSymbol })
    ] })
  ] });
}, Qo = "_checkBoxList_1sp8d_1", Zo = "_requiredSymbol_1sp8d_16", Qt = {
  checkBoxList: Qo,
  requiredSymbol: Zo
}, Jo = "_headerContainer_t2si7_1", es = "_header_t2si7_1", ts = "_bigHeader_t2si7_16", Je = {
  headerContainer: Jo,
  header: es,
  "size-1": "_size-1_t2si7_8",
  bigHeader: ts,
  "size-2": "_size-2_t2si7_28",
  "size-3": "_size-3_t2si7_36",
  "size-4": "_size-4_t2si7_44",
  "size-5": "_size-5_t2si7_52"
}, Ln = ({
  id: e,
  content: t,
  size: r = 1,
  big: a,
  label: s,
  htmlTag: i,
  htmlFor: f,
  children: h
}) => {
  const l = i || `h${r}`, c = J([
    Je.header,
    Je[`size-${r}`],
    a && Je.bigHeader
  ]), _ = s != null && s.length && typeof s == "string" ? { "--label": `"${s}"` } : void 0, w = fe.createElement(
    l,
    {
      className: c,
      id: e || void 0,
      htmlFor: f || void 0,
      style: _
    },
    t != null && t.length ? t : h
  );
  return /* @__PURE__ */ d.jsx("div", { className: Je.headerContainer, children: w });
}, ns = ({
  legend: e,
  legendSize: t,
  required: r = !1,
  compact: a = !1,
  children: s
}) => {
  const i = (f) => Me(f).map((l, c) => {
    var _;
    return p.isValidElement(
      l
    ) && ((_ = l.type) == null ? void 0 : _.displayName) === "RadioButtonListItem" ? p.cloneElement(l, {
      requiredGroup: r,
      compact: a,
      key: `checkboxListItem-${c}`
    }) : l;
  });
  return /* @__PURE__ */ d.jsxs("fieldset", { className: Qt.checkBoxList, children: [
    !!(e != null && e.length) && /* @__PURE__ */ d.jsxs("legend", { children: [
      t ? /* @__PURE__ */ d.jsx(Ln, { size: t, children: e }) : e,
      r && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: Qt.requiredSymbol })
    ] }),
    i(p.Children.toArray(s))
  ] });
}, rs = "_checkBoxListItem_jnb8z_1", os = "_contentOnly_jnb8z_26", ss = "_compact_jnb8z_26", as = "_disabled_jnb8z_41", is = "_checked_jnb8z_44", Se = {
  checkBoxListItem: rs,
  contentOnly: os,
  compact: ss,
  disabled: as,
  checked: is
}, ls = ({
  checked: e = !1,
  disabled: t = !1,
  required: r = !1,
  requiredGroup: a = !1,
  id: s,
  name: i = "",
  onChange: f,
  contentOnly: h = !1,
  compact: l = !1,
  hasErrors: c = !1,
  checkmarkCharacter: _ = "✔",
  "aria-controls": w,
  "aria-describedby": g,
  children: x
}) => {
  const v = J([
    Se.checkBoxListItem,
    e && Se.checked,
    t && Se.disabled,
    l && Se.compact,
    h && Se.contentOnly,
    c && Se.hasErrors
  ]), b = {
    onChange: f ?? (() => {
    }),
    checked: e,
    disabled: t,
    required: r,
    requiredGroup: a,
    contentOnly: h,
    hasErrors: c,
    "aria-controls": w,
    "aria-describedby": g,
    id: s,
    name: i,
    checkmarkCharacter: _
  };
  return /* @__PURE__ */ d.jsx("div", { className: v, children: /* @__PURE__ */ d.jsx(Ko, { ...b, children: x }) });
}, cs = "_container_f8z49_1", us = {
  container: cs
}, ds = ({ maxWidth: e, children: t }) => {
  const r = {
    "--max-width": e != null && e.length ? e : void 0
  };
  return /* @__PURE__ */ d.jsx("div", { className: us.container, style: r, children: t });
}, fs = "_contentBox_1ndvc_1", hs = "_link_1ndvc_8", ps = "_content_1ndvc_1", ms = "_title_1ndvc_25", _s = "_secondary_1ndvc_28", gs = "_regular_1ndvc_36", vs = "_large_1ndvc_45", Le = {
  contentBox: fs,
  link: hs,
  default: "_default_1ndvc_21",
  content: ps,
  title: ms,
  secondary: _s,
  regular: gs,
  large: vs
}, Fi = ({
  title: e = null,
  titleSize: t = "regular",
  content: r = "",
  children: a,
  color: s = "default",
  href: i = null
}) => {
  const f = () => {
    if (!e) return null;
    const g = `${Le.title} ${Le[t]}`;
    return /* @__PURE__ */ d.jsx("h2", { className: g, children: e });
  }, h = Le[s] || "", l = i ? Le.link : "", c = `${Le.contentBox} ${h} ${l}`.trim(), _ = r != null && r.length ? r : a, w = /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    f(),
    /* @__PURE__ */ d.jsx("div", { className: Le.content, children: _ })
  ] });
  return i ? /* @__PURE__ */ d.jsx("a", { href: i, className: c, children: w }) : /* @__PURE__ */ d.jsx("div", { className: c, children: w });
}, ys = "_descriptionDetails_1d1dj_1", ws = "_compact_1d1dj_7", Zt = {
  descriptionDetails: ys,
  compact: ws
}, Hi = ({
  compact: e = !1,
  titleWidth: t,
  children: r
}) => /* @__PURE__ */ d.jsx(
  "dd",
  {
    className: J([
      Zt.descriptionDetails,
      e && Zt.compact
    ]),
    style: { "--title-width": t || void 0 },
    children: r
  }
), Es = "_descriptionList_w11ua_1", bs = "_compact_w11ua_13", Jt = {
  descriptionList: Es,
  compact: bs
}, qi = ({
  compact: e = !1,
  titleWidth: t,
  children: r
}) => {
  const a = (s) => Me(s).map((f, h) => p.isValidElement(f) ? p.cloneElement(f, {
    compact: e,
    titleWidth: t,
    key: `descriptionListItem-${h}`
  }) : f);
  return fe.createElement(
    "dl",
    {
      className: J([
        Jt.descriptionList,
        e && Jt.compact
      ]),
      style: {
        "--title-width": t || void 0
      }
    },
    a(p.Children.toArray(r))
  );
}, xs = "_descriptionTerm_uuapd_1", Cs = "_compact_uuapd_8", en = {
  descriptionTerm: xs,
  compact: Cs
}, Ui = ({
  compact: e = !1,
  titleWidth: t,
  children: r
}) => /* @__PURE__ */ d.jsx(
  "dt",
  {
    className: J([
      en.descriptionTerm,
      e && en.compact
    ]),
    style: { "--title-width": t || void 0 },
    children: r
  }
), ks = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%3e%3cpath%20fill='%23072938'%20stroke='%23072938'%20stroke-linecap='round'%20stroke-width='3.23'%20d='m3.97%203.57%2017.44%2018.2m-17.44.01L21.41%203.57'/%3e%3c/svg%3e", Rs = "_dialog_1qsqp_19", Ss = "_dialogContainer_1qsqp_33", Ls = "_dialogContent_1qsqp_38", js = "_closeButton_1qsqp_45", Ts = "_isSidebar_1qsqp_60", $s = "_modalInVertical_1qsqp_1", Ms = "_noPadding_1qsqp_74", Ns = "_left_1qsqp_113", Is = "_modalInHorizontalLeft_1qsqp_1", As = "_right_1qsqp_120", Os = "_modalInHorizontalRight_1qsqp_1", Ps = "_dialogOverlay_1qsqp_128", ve = {
  dialog: Rs,
  dialogContainer: Ss,
  dialogContent: Ls,
  closeButton: js,
  isSidebar: Ts,
  modalInVertical: $s,
  noPadding: Ms,
  left: Ns,
  modalInHorizontalLeft: Is,
  right: As,
  modalInHorizontalRight: Os,
  dialogOverlay: Ps
}, Vi = ({
  maxWidth: e = "none",
  noPadding: t,
  closeButton: r,
  onClickOutside: a,
  modal: s = !1,
  attachTo: i,
  hidden: f = !1,
  children: h
}) => {
  const l = p.useRef(null), c = p.useRef(null), _ = p.useCallback(
    (x) => {
      x && dn(x);
    },
    []
  );
  p.useEffect(() => {
    const x = (b) => {
      b.key === "Escape" && a && a();
    }, v = (b) => {
      c.current && !c.current.contains(b.target) && a();
    };
    return document.addEventListener("mousedown", v), document.addEventListener("keydown", x, !1), () => {
      document.removeEventListener("mousedown", v), document.removeEventListener("keydown", x, !1);
    };
  }, [a]), p.useEffect(() => {
    l.current && (l.current.close(), f || (s ? l.current.showModal() : l.current.show()));
  }, [f, s]);
  const w = i && J([ve.isSidebar, ve[i]]), g = {
    "--max-width": e
  };
  return /* @__PURE__ */ d.jsx(
    "dialog",
    {
      className: J([
        ve.dialog,
        w
      ]),
      ref: l,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: c,
          className: ve.dialogContainer,
          style: g,
          children: /* @__PURE__ */ d.jsxs(
            "div",
            {
              ref: _,
              className: J([
                ve.dialogContent,
                t && ve.noPadding
              ]),
              children: [
                r && /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    "aria-label": "Lukk dialog",
                    onClick: a,
                    className: J([
                      ve.closeButton,
                      t && ve.noPadding
                    ]),
                    children: /* @__PURE__ */ d.jsx("img", { src: ks, alt: "" })
                  }
                ),
                /* @__PURE__ */ d.jsx("div", { "aria-live": "assertive", role: "dialog", children: h })
              ]
            }
          )
        }
      )
    }
  );
}, zs = "_label_18de6_1", Ds = "_inline_18de6_11", Bs = "_normalCursor_18de6_14", ht = {
  label: zs,
  inline: Ds,
  normalCursor: Bs
}, Fe = ({
  inline: e = !1,
  normalCursor: t = !1,
  htmlTag: r = "label",
  children: a,
  id: s,
  ...i
}) => {
  const f = [
    ht.label,
    e && ht.inline,
    t && ht.normalCursor
  ].filter(Boolean).join(" "), h = {
    ...i,
    className: f,
    id: s || void 0
  };
  return fe.createElement(r, h, a);
}, Fs = "_dragAndDropFileInput_l98z1_1", Hs = "_requiredSymbol_l98z1_1", qs = "_dragAndDropContainer_l98z1_8", Us = "_highlighted_l98z1_26", et = {
  dragAndDropFileInput: Fs,
  requiredSymbol: Hs,
  dragAndDropContainer: qs,
  highlighted: Us
}, Vs = "_errorMessage_i8u6b_7", Ys = "_errorSign_i8u6b_19", tn = {
  errorMessage: Vs,
  errorSign: Ys
}, Ws = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20role='presentation'%3e%3cg%20clip-path='url(%23clip0_1089_7422)'%3e%3cmask%20id='mask0_1089_7422'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%20style='mask-type:%20alpha;'%3e%3crect%20width='20'%20height='20'%20style='fill:%20white;'%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1089_7422)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2010C0%204.4775%204.4775%200%2010%200C15.5225%200%2020%204.4775%2020%2010C20%2015.5225%2015.5225%2020%2010%2020C4.4775%2020%200%2015.5225%200%2010ZM11%2014.0766C11%2014.8122%2010.5188%2015.3333%209.83335%2015.3333C9.13335%2015.3333%208.66669%2014.8122%208.66669%2014.0766C8.66669%2013.341%209.13335%2012.8046%209.83335%2012.8046C10.5188%2012.8046%2011%2013.341%2011%2014.0766ZM10.65%2011.9463H8.98752L8.75419%204.66663H10.8834L10.65%2011.9463Z'%20style='fill:%20rgb(219,%200,%200);'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1089_7422'%3e%3crect%20width='20'%20height='20'%20fill='white'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", lt = ({ id: e, content: t = "" }) => {
  const r = () => ({
    id: e != null && e.length ? e : void 0,
    className: tn.errorMessage
  });
  return (typeof t == "string" ? t.trim().length > 0 : !!t) ? /* @__PURE__ */ d.jsxs("span", { "aria-live": "polite", ...r(), children: [
    /* @__PURE__ */ d.jsx("img", { src: Ws, alt: "", className: tn.errorSign }),
    t
  ] }) : null;
}, Yi = ({
  id: e,
  name: t,
  onSelectChange: r,
  onDragAndDropChange: a,
  label: s = "",
  contentOnly: i = !1,
  buttonColor: f = "primary",
  buttonContent: h,
  buttonContentWhenSelectedFile: l,
  selectedFileName: c,
  defaultContent: _ = "",
  hasErrors: w = !1,
  errorMessage: g = "",
  required: x = !1,
  children: v,
  "data-transaction-name": b
}) => {
  const [N, y] = p.useState(!1), S = p.useRef(null), L = p.useRef(null), T = (F) => {
    F.preventDefault(), F.stopPropagation();
  }, j = (F, $) => F || $, X = () => {
    var F;
    (F = L.current) == null || F.click();
  }, G = () => `${e}-errorMessage`, z = {
    id: e,
    "aria-describedby": w && (g != null && g.toString().length) ? G() : void 0,
    "aria-invalid": w ? "true" : void 0,
    name: t,
    required: x
  }, Y = c && l || h, ee = p.useCallback(() => y(!0), []), B = p.useCallback(() => y(!1), []), re = p.useCallback(
    (F) => {
      var $;
      T(F), ($ = F.dataTransfer) != null && $.files && a(F.dataTransfer.files), y(!1);
    },
    [a]
  );
  return p.useEffect(() => {
    const F = S.current;
    if (F)
      return ["dragenter", "dragover"].forEach(
        ($) => F.addEventListener($, ee)
      ), ["dragleave", "drop"].forEach(
        ($) => F.addEventListener($, B)
      ), ["dragenter", "dragover", "dragleave", "drop"].forEach(
        ($) => F.addEventListener($, T)
      ), F.addEventListener("drop", re), () => {
        ["dragenter", "dragover", "dragleave", "drop"].forEach(($) => {
          F.removeEventListener($, T), F.removeEventListener($, ee), F.removeEventListener($, B);
        }), F.removeEventListener("drop", re);
      };
  }, [a]), /* @__PURE__ */ d.jsxs("div", { className: et.dragAndDropFileInput, children: [
    /* @__PURE__ */ d.jsxs(Fe, { htmlFor: e, children: [
      s,
      x && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: et.requiredSymbol })
    ] }),
    /* @__PURE__ */ d.jsx("div", { children: v }),
    !i && /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: S,
        className: `${et.dragAndDropContainer} ${N ? et.highlighted : ""}`,
        children: [
          c ? /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("span", { children: [
            /* @__PURE__ */ d.jsx("b", { children: "Valgt fil:" }),
            " ",
            c
          ] }) }) : /* @__PURE__ */ d.jsx("div", { children: "Slipp fil her" }),
          /* @__PURE__ */ d.jsx(
            "input",
            {
              ...z,
              ref: L,
              type: "file",
              onChange: r
            }
          ),
          h && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            /* @__PURE__ */ d.jsx("div", { children: c ? "" : "eller klikk på knappen for å velge fil" }),
            /* @__PURE__ */ d.jsx(
              Sn,
              {
                size: "small",
                inputType: "button",
                color: f,
                onClick: X,
                content: Y,
                hasErrors: w,
                "data-transaction-name": b
              }
            )
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ d.jsx("span", { children: j(c, _) }),
    /* @__PURE__ */ d.jsx(lt, { id: G(), content: g })
  ] });
}, Xs = "_errorBoxContainer_88ulw_7", Gs = "_messageIn_88ulw_1", Ks = "_warning_88ulw_14", Qs = "_error_88ulw_7", Zs = "_fullScreen_88ulw_22", Js = "_errorBox_88ulw_7", ea = "_infoSign_88ulw_38", je = {
  errorBoxContainer: Xs,
  messageIn: Gs,
  warning: Ks,
  error: Qs,
  fullScreen: Zs,
  errorBox: Js,
  infoSign: ea
}, jn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20role='presentation'%3e%3cpath%20d='M10%200C4.4775%200%200%204.4775%200%2010C0%2015.5225%204.4775%2020%2010%2020C15.5225%2020%2020%2015.5225%2020%2010C20%204.4775%2015.5225%200%2010%200ZM8.30583%2013.3417C8.77583%2011.8508%209.66583%2010.065%209.82333%209.61333C10.0508%208.9575%209.6475%208.66667%208.37333%209.7875L8.09%209.25417C9.54333%207.67333%2012.5358%207.31583%2011.5175%209.765C10.8817%2011.2942%2010.4267%2012.3267%2010.1667%2013.1233C9.7875%2014.2842%2010.745%2013.8133%2011.6825%2012.9475C11.81%2013.1558%2011.8517%2013.2233%2011.9792%2013.4633C9.8975%2015.445%207.58667%2015.62%208.30583%2013.3417ZM12.2575%206.53417C11.8142%206.91167%2011.1575%206.90333%2010.79%206.51583C10.4225%206.12833%2010.4842%205.50917%2010.9267%205.13167C11.37%204.75417%2012.0267%204.76333%2012.3942%205.15C12.76%205.53833%2012.7%206.1575%2012.2575%206.53417Z'%20style='fill:%20rgb(0,%2048,%2069);'%3e%3c/path%3e%3c/svg%3e", Wi = ({
  type: e = "warning",
  fullScreen: t = !1,
  children: r = ""
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: J([
      je.errorBoxContainer,
      je[e],
      t && je.fullScreen
    ]),
    children: /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: J([
          je.errorBox,
          t && je.fullScreen
        ]),
        children: [
          /* @__PURE__ */ d.jsx("img", { src: jn, alt: "", className: je.infoSign }),
          r
        ]
      }
    )
  }
), ta = "_footer_19fad_1", na = {
  footer: ta
}, Xi = ({ children: e }) => /* @__PURE__ */ d.jsx("footer", { className: na.footer, children: /* @__PURE__ */ d.jsx(ds, { children: e }) }), ra = "_infoBox_1mh67_7", oa = "_infoSign_1mh67_15", nn = {
  infoBox: ra,
  infoSign: oa
}, Gi = ({ children: e = "" }) => /* @__PURE__ */ d.jsxs("div", { className: nn.infoBox, children: [
  /* @__PURE__ */ d.jsx("img", { src: jn, alt: "", className: nn.infoSign }),
  e
] }), sa = "_inputField_17rmz_1", aa = "_noMargin_17rmz_4", ia = "_requiredSymbol_17rmz_10", la = "_file_17rmz_17", ca = "_input_17rmz_1", ua = "_hasErrors_17rmz_50", da = "_fileInputContainer_17rmz_62", be = {
  inputField: sa,
  noMargin: aa,
  requiredSymbol: ia,
  file: la,
  input: ca,
  hasErrors: ua,
  fileInputContainer: da
}, Rt = (e) => {
  let t = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = r.length;
  for (let s = 0; s < e; s++)
    t += r.charAt(Math.floor(Math.random() * a));
  return t;
}, Ki = ({
  id: e,
  onChange: t,
  onBlur: r,
  name: a = "",
  type: s = "text",
  disabled: i = !1,
  required: f = !1,
  readOnly: h,
  width: l,
  value: c,
  defaultValue: _,
  elementKey: w,
  label: g = "",
  contentOnly: x = !1,
  buttonColor: v = "primary",
  buttonContent: b,
  selectedFileName: N,
  placeholder: y = "",
  defaultContent: S = "",
  min: L,
  max: T,
  role: j,
  "aria-describedby": X,
  "aria-autocomplete": G,
  hasErrors: z = !1,
  errorMessage: Y = "",
  noMargin: ee = !1
}) => {
  const B = (W) => {
    const Z = new Date(W);
    return `${String(Z.getDate()).padStart(2, "0")}.${String(
      Z.getMonth() + 1
    ).padStart(2, "0")}.${Z.getFullYear()}`;
  }, re = (W, Z) => s === "date" ? W ? B(W) : Z : W || Z, F = () => `${e}-errorMessage`, $ = l ? { maxWidth: l } : {}, Q = {
    name: a,
    readOnly: h,
    disabled: i,
    required: f,
    type: s,
    role: j,
    id: e,
    min: L,
    max: T,
    onChange: t,
    onBlur: r,
    ...c !== void 0 ? { value: c } : _ !== void 0 ? { defaultValue: _ } : {},
    placeholder: y,
    className: z ? be.hasErrors : void 0,
    "aria-describedby": z && Y ? F() : X,
    "aria-invalid": z ? "true" : void 0,
    "aria-autocomplete": G || void 0,
    style: $
  };
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: J([
        be.inputField,
        be[s],
        ee && be.noMargin
      ]),
      children: [
        /* @__PURE__ */ d.jsxs(Fe, { htmlFor: e, children: [
          g,
          f && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: be.requiredSymbol }),
          s === "file" && /* @__PURE__ */ d.jsxs("div", { className: be.fileInputContainer, children: [
            /* @__PURE__ */ d.jsx("span", { className: be.input, children: N }),
            b && /* @__PURE__ */ d.jsx(
              Sn,
              {
                color: v,
                inputType: "button",
                onClick: () => {
                  const W = document == null ? void 0 : document.getElementById(e);
                  W == null || W.click();
                },
                content: b
              }
            )
          ] })
        ] }),
        x ? /* @__PURE__ */ d.jsx("span", { children: re(c ?? _, S) }) : /* @__PURE__ */ d.jsx(
          "input",
          {
            ...Q
          },
          w || `${e}-${Rt(6)}`
        ),
        /* @__PURE__ */ d.jsx(lt, { id: F(), content: Y })
      ]
    }
  );
}, fa = "_lead_176gy_1", ha = {
  lead: fa
}, Qi = ({ id: e, htmlTag: t = "p", children: r }) => fe.createElement(
  t,
  {
    className: ha.lead,
    id: e || void 0
  },
  r
), pa = "_list_16gsl_1", ma = "_compact_16gsl_10", rn = {
  list: pa,
  compact: ma
}, Zi = ({
  listStyle: e,
  compact: t = !1,
  ordered: r = !1,
  children: a
}) => {
  const s = (l) => Me(l).map((_, w) => p.isValidElement(_) ? p.cloneElement(_, {
    compact: t,
    key: `listItem-${w}`
  }) : _), i = r ? "ol" : "ul", f = r ? "decimal" : "disc";
  return fe.createElement(
    i,
    {
      className: `${rn.list} ${t ? rn.compact : ""}`,
      style: { ["--listStyle"]: e || f }
    },
    s(p.Children.toArray(a))
  );
}, _a = "_listItem_33xs0_1", ga = "_compact_33xs0_5", on = {
  listItem: _a,
  compact: ga
}, Ji = ({ compact: e = !1, children: t }) => {
  const r = J([
    on.listItem,
    e && on.compact
  ]);
  return /* @__PURE__ */ d.jsx("li", { className: r, children: t });
}, va = "_loadingAnimation_hzd5u_1", ya = "_fixed_hzd5u_17", pt = {
  loadingAnimation: va,
  fixed: ya
}, el = ({
  fixed: e = !1,
  message: t = ""
}) => {
  const r = e ? `${pt.loadingAnimation} ${pt.fixed}` : pt.loadingAnimation;
  return /* @__PURE__ */ d.jsx("div", { className: r, children: t });
}, sn = ({ listItem: e }) => typeof e == "string" ? /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("span", { children: e }) }) : typeof e == "object" ? /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx("a", { href: e.href, children: e.name }) }) : null, wa = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='14%20337%20406%20110'%20style='enable-background:new%2014%20337%20406%20110;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{display:none;}%20.st1{fill:%23003045;}%20.st2{fill:%2389BAD6;}%20.st3{fill:%23FFFFFF;}%20.st4{display:inline;fill:%23FFFFFF;}%20.st5{display:inline;fill:%23D7D4D1;}%20%3c/style%3e%3cg%20id='skisse__x28_forstørret_x29_'%20class='st0'%3e%3c/g%3e%3cg%20id='logo'%3e%3crect%20id='XMLID_5_'%20x='14'%20y='337'%20class='st1'%20width='640'%20height='110'/%3e%3cg%20id='XMLID_82_'%3e%3crect%20id='XMLID_80_'%20x='14'%20y='337'%20class='st2'%20width='150'%20height='110'/%3e%3cg%20id='XMLID_74_'%3e%3cpolygon%20id='XMLID_79_'%20class='st3'%20points='75.1,420.7%2083.2,426.1%2083.2,389.4%20103,402.2%20103,384%2075.1,365.9%20'/%3e%3cpolygon%20id='XMLID_78_'%20class='st3'%20points='41.9,424.2%2041.9,404.7%2060.9,392.4%2060.9,350.3%2027.3,372.1%2027.3,433.7%20'/%3e%3cpolygon%20id='XMLID_77_'%20class='st3'%20points='106.1,381.9%20106.1,417.1%20118.9,425.4%20118.9,354.7%2091.6,372.5%20'/%3e%3cpolygon%20id='XMLID_76_'%20class='st3'%20points='64,350.3%2064,409.8%2071.9,404.7%2071.9,363.9%2071.9,355.5%20'/%3e%3cpolygon%20id='XMLID_75_'%20class='st3'%20points='128.4,385.6%20122.1,389.7%20122.1,423.4%20128.4,419.3%20150.7,433.7%20150.7,399.9%20'/%3e%3c/g%3e%3c/g%3e%3cg%20id='XMLID_6_'%3e%3crect%20id='XMLID_81_'%20x='164.5'%20y='367.5'%20class='st1'%20width='255.5'%20height='79.5'/%3e%3cg%20id='XMLID_7_'%3e%3cg%20id='XMLID_44_'%3e%3cpath%20id='XMLID_71_'%20class='st3'%20d='M187.3,385.6h4.7c5.5,0,8.7,2.2,8.7,8.2s-4,8.2-8.7,8.2h-4.7V385.6z%20M191.9,399.4%20c4.2,0,5.5-1.6,5.5-5.4c0-3.7-1.3-5.6-5.5-5.6h-1.5v11H191.9z'/%3e%3cpath%20id='XMLID_69_'%20class='st3'%20d='M203.5,385.6h3.2v16.5h-3.2V385.6z'/%3e%3cpath%20id='XMLID_66_'%20class='st3'%20d='M213.7,396h-0.2v6.1h-3.2v-16.5h4.7c3.8,0,6.4,1.4,6.4,4.9c0,2.8-1.7,4.6-4.4,5.2l5.6,6.3%20h-3.8L213.7,396z%20M215,393.7c2,0,3.2-1,3.2-2.9c0-1.9-1.2-2.7-3.2-2.7h-1.5v5.5h1.5V393.7z'/%3e%3cpath%20id='XMLID_64_'%20class='st3'%20d='M224.6,385.6h10.5v2.7h-7.3v4h4.9v2.5h-4.9v4.5h7.3v2.7h-10.5V385.6z'/%3e%3cpath%20id='XMLID_62_'%20class='st3'%20d='M238,385.6h3.2v7.4l6.5-7.3h3.3l-5.9,6.6l6.3,9.9h-3.6l-4.7-7.7l-1.9,2.1v5.5H238V385.6z'/%3e%3cpath%20id='XMLID_60_'%20class='st3'%20d='M256.8,388.4H252v-2.7h12.6v2.7H260v13.7h-3.2V388.4z'/%3e%3cpath%20id='XMLID_57_'%20class='st3'%20d='M265.7,393.9c0-5.7,4-8.6,8.1-8.6c4.8,0,8.1,3,8.1,8.6c0,5.7-4,8.6-8.1,8.6%20C269,402.5,265.7,399.6,265.7,393.9z%20M278.7,394c0-3.9-1.9-6-4.8-6s-4.8,2.1-4.8,5.8c0,3.9,1.9,6.1,4.8,6.1%20C276.7,399.8,278.7,397.7,278.7,394z'/%3e%3cpath%20id='XMLID_54_'%20class='st3'%20d='M288,396h-0.2v6.1h-3.2v-16.5h4.7c3.8,0,6.4,1.4,6.4,4.9c0,2.8-1.7,4.6-4.4,5.2l5.6,6.3%20h-3.8L288,396z%20M289.3,393.7c2,0,3.2-1,3.2-2.9c0-1.9-1.2-2.7-3.2-2.7h-1.5v5.5h1.5V393.7z'/%3e%3cpath%20id='XMLID_51_'%20class='st3'%20d='M303.1,387.3l-0.6-1.7h3.3l6.5,16.5H309l-1.3-3.4h-6.1l-1.3,3.4h-3.1L303.1,387.3z%20M302.5,396.4h4.4l-1.7-4.5l-0.5-1.4l-0.5,1.4L302.5,396.4z'/%3e%3cpath%20id='XMLID_49_'%20class='st3'%20d='M316,388.4h-4.7v-2.7h12.6v2.7h-4.7v13.7H316V388.4z'/%3e%3cpath%20id='XMLID_47_'%20class='st3'%20d='M326.2,385.6h10.5v2.7h-7.3v4h4.9v2.5h-4.9v4.5h7.3v2.7h-10.5V385.6z'/%3e%3cpath%20id='XMLID_45_'%20class='st3'%20d='M343.1,388.4h-4.7v-2.7H351v2.7h-4.7v13.7h-3.2L343.1,388.4L343.1,388.4z'/%3e%3c/g%3e%3cg%20id='XMLID_8_'%3e%3cpath%20id='XMLID_42_'%20class='st3'%20d='M187.3,412.3h10.3v2.7h-7.1v4.1h4.7v2.4h-4.7v7.2h-3.2V412.3z'/%3e%3cpath%20id='XMLID_39_'%20class='st3'%20d='M198.8,420.5c0-5.7,4-8.6,8.1-8.6c4.8,0,8.1,3,8.1,8.6c0,5.7-4,8.6-8.1,8.6%20C202.1,429.1,198.8,426.2,198.8,420.5z%20M211.7,420.6c0-3.9-1.9-6-4.8-6c-2.9,0-4.8,2.1-4.8,5.8c0,3.9,1.9,6.1,4.8,6.1%20C209.8,426.4,211.7,424.3,211.7,420.6z'/%3e%3cpath%20id='XMLID_36_'%20class='st3'%20d='M221.1,422.6h-0.2v6.1h-3.2v-16.4h4.7c3.8,0,6.4,1.4,6.4,4.9c0,2.8-1.7,4.6-4.4,5.2l5.6,6.3%20h-3.8L221.1,422.6z%20M222.4,420.3c2,0,3.2-1,3.2-2.9s-1.2-2.7-3.2-2.7h-1.5v5.5L222.4,420.3L222.4,420.3z'/%3e%3cpath%20id='XMLID_32_'%20class='st3'%20d='M237.8,412.3h4.9c4.5,0,6.4,1.5,6.4,4.1c0,2.3-1.3,3.4-3.1,3.8l0,0c2,0.3,3.3,1.3,3.3,3.9%20s-1.8,4.7-6.5,4.7h-5L237.8,412.3L237.8,412.3z%20M242.8,419c2.4,0,3.1-0.8,3.1-2.2c0-1.4-0.9-2-3.1-2H241v4.2H242.8z%20M243,426.1%20c2.4,0,3.2-0.8,3.2-2.3c0-1.4-0.8-2.3-3.2-2.3h-2v4.5h2V426.1z'/%3e%3cpath%20id='XMLID_30_'%20class='st3'%20d='M255.5,422l-5.4-9.7h3.5l3.6,6.9l3.7-6.9h3.2l-5.4,9.7v6.8h-3.2L255.5,422L255.5,422z'/%3e%3cpath%20id='XMLID_28_'%20class='st3'%20d='M264.5,420.5c0-5.7,3.6-8.6,8-8.6c2.7,0,4.3,0.8,5.2,1.6v3.6c-0.9-1.4-2.4-2.4-4.8-2.4%20c-3.3,0-5.2,2-5.2,5.7s1.8,6.2,4.7,6.2c0.8,0,1.5-0.1,2.1-0.3v-5.1h3.2v6.6c-1.1,0.7-2.9,1.4-5.4,1.4%20C267.7,429.1,264.5,426.3,264.5,420.5z'/%3e%3cpath%20id='XMLID_26_'%20class='st3'%20d='M280,420.5c0-5.7,3.6-8.6,8-8.6c2.7,0,4.3,0.8,5.2,1.6v3.6c-0.9-1.4-2.4-2.4-4.8-2.4%20c-3.3,0-5.2,2-5.2,5.7s1.8,6.2,4.7,6.2c0.8,0,1.5-0.1,2.1-0.3v-5.1h3.2v6.6c-1.1,0.7-2.9,1.4-5.4,1.4%20C283.2,429.1,280,426.3,280,420.5z'/%3e%3cpath%20id='XMLID_24_'%20class='st3'%20d='M296.5,412.3h3.2v7.3l6.5-7.3h3.3l-5.9,6.6l6.3,9.9h-3.6l-4.7-7.7l-1.9,2.1v5.5h-3.2%20L296.5,412.3L296.5,412.3z'/%3e%3cpath%20id='XMLID_22_'%20class='st3'%20d='M310.1,412.3h3.3l3.9,11.5h0.1l4-11.5h3.1l-5.9,16.5H316L310.1,412.3z'/%3e%3cpath%20id='XMLID_19_'%20class='st3'%20d='M329.2,413.9l-0.6-1.7h3.3l6.5,16.5h-3.3l-1.3-3.4h-6.1l-1.3,3.4h-3.1L329.2,413.9z%20M328.6,423h4.4l-1.7-4.5l-0.5-1.4l-0.5,1.4L328.6,423z'/%3e%3cpath%20id='XMLID_17_'%20class='st3'%20d='M340.4,412.3h3.2V426h6.1v2.8h-9.3L340.4,412.3L340.4,412.3z'/%3e%3cpath%20id='XMLID_15_'%20class='st3'%20d='M352.1,412.3h3.2v16.5h-3.2V412.3z'/%3e%3cpath%20id='XMLID_13_'%20class='st3'%20d='M362.3,415h-4.7v-2.7h12.6v2.7h-4.7v13.7h-3.2L362.3,415L362.3,415z'/%3e%3cpath%20id='XMLID_11_'%20class='st3'%20d='M372.6,412.3h10.5v2.7h-7.3v3.9h4.9v2.5h-4.9v4.6h7.3v2.7h-10.5V412.3z'/%3e%3cpath%20id='XMLID_9_'%20class='st3'%20d='M389.4,415h-4.7v-2.7h12.6v2.7h-4.7v13.7h-3.2L389.4,415L389.4,415z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='hamburgermeny'%20class='st0'%3e%3crect%20id='XMLID_94_'%20x='578'%20y='386'%20class='st4'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_95_'%20x='578'%20y='423'%20class='st4'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_96_'%20x='578'%20y='405'%20class='st4'%20width='60'%20height='6'/%3e%3c/g%3e%3cg%20id='hamburgermeny__hover'%20class='st0'%3e%3crect%20id='XMLID_97_'%20x='578'%20y='386'%20class='st5'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_93_'%20x='578'%20y='423'%20class='st5'%20width='60'%20height='6'/%3e%3crect%20id='XMLID_91_'%20x='578'%20y='405'%20class='st5'%20width='60'%20height='6'/%3e%3c/g%3e%3c/svg%3e", Ea = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20id='Layer_1'%20x='0px'%20y='0px'%20viewBox='0%200%20340.2%20412.5'%20style='enable-background:new%200%200%20340.2%20412.5;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23003045;}%20.st1{fill:%2389BAD6;}%20.st2{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3crect%20x='0'%20y='253.2'%20class='st0'%20width='340.2'%20height='105.8'/%3e%3crect%20x='0'%20class='st1'%20width='340.2'%20height='249.4'/%3e%3cg%3e%3cpolygon%20class='st2'%20points='138.5,189.9%20157,202%20157,118.8%20201.7,147.8%20201.7,106.6%20138.5,65.5%20'/%3e%3cpolygon%20class='st2'%20points='63.3,197.7%2063.3,153.5%20106.3,125.5%20106.3,30.2%2030.2,79.7%2030.2,219.2%20'/%3e%3cpolygon%20class='st2'%20points='208.9,101.9%20208.9,181.7%20238,200.5%20238,40.1%20175.9,80.4%20'/%3e%3cpolygon%20class='st2'%20points='113.4,30.2%20113.4,165.2%20131.4,153.5%20131.4,60.9%20131.4,41.9%20'/%3e%3cpolygon%20class='st2'%20points='259.5,110.2%20245.1,119.6%20245.1,195.9%20259.5,186.5%20309.9,219.2%20309.9,142.6%20'/%3e%3c/g%3e%3cpolygon%20class='st0'%20points='0,362.8%2075.6,412%2075.6,362.8%20'/%3e%3cg%3e%3cg%3e%3cpath%20class='st2'%20d='M30.2,277.5h6.2c7.3,0,11.6,2.9,11.6,11s-5.3,11-11.6,11h-6.2V277.5z%20M36.5,295.7c5.6,0,7.3-2.2,7.3-7.2%20c0-5-1.7-7.5-7.3-7.5h-2v14.6H36.5z'/%3e%3cpath%20class='st2'%20d='M51.9,277.5h4.3v21.9h-4.3V277.5z'/%3e%3cpath%20class='st2'%20d='M65.5,291.2h-0.2v8.2H61v-21.9h6.2c5.1,0,8.6,1.8,8.6,6.5c0,3.7-2.3,6.2-5.8,7l7.5,8.5h-5.1L65.5,291.2z%20M67.2,288.2c2.7,0,4.3-1.3,4.3-3.8c0-2.5-1.6-3.5-4.3-3.5h-1.9v7.4H67.2z'/%3e%3cpath%20class='st2'%20d='M80,277.5h14v3.6h-9.7v5.3h6.5v3.4h-6.5v6H94v3.6H80V277.5z'/%3e%3cpath%20class='st2'%20d='M97.8,277.5h4.3v9.8l8.7-9.8h4.4l-7.9,8.7l8.4,13.2h-4.8l-6.2-10.2l-2.6,2.8v7.4h-4.3V277.5z'/%3e%3cpath%20class='st2'%20d='M122.8,281.1h-6.3v-3.6h16.8v3.6H127v18.3h-4.3V281.1z'/%3e%3cpath%20class='st2'%20d='M134.7,288.4c0-7.6,5.4-11.5,10.8-11.5c6.4,0,10.8,3.9,10.8,11.5c0,7.6-5.4,11.5-10.8,11.5%20C139.1,299.9,134.7,296,134.7,288.4z%20M151.9,288.6c0-5.2-2.5-8-6.5-8c-3.9,0-6.5,2.8-6.5,7.7c0,5.2,2.5,8.1,6.5,8.1%20C149.4,296.3,151.9,293.5,151.9,288.6z'/%3e%3cpath%20class='st2'%20d='M164.4,291.2h-0.2v8.2h-4.3v-21.9h6.2c5.1,0,8.6,1.8,8.6,6.5c0,3.7-2.3,6.2-5.8,7l7.5,8.5h-5.1L164.4,291.2z%20M166.2,288.2c2.7,0,4.3-1.3,4.3-3.8c0-2.5-1.5-3.5-4.3-3.5h-1.9v7.4H166.2z'/%3e%3cpath%20class='st2'%20d='M184.5,279.7l-0.8-2.2h4.4l8.6,21.9h-4.5l-1.7-4.5h-8.1l-1.7,4.5h-4.1L184.5,279.7z%20M183.6,291.7h5.8l-2.3-6%20l-0.6-1.9l-0.6,1.9L183.6,291.7z'/%3e%3cpath%20class='st2'%20d='M201.7,281.1h-6.3v-3.6h16.8v3.6h-6.3v18.3h-4.3V281.1z'/%3e%3cpath%20class='st2'%20d='M215.3,277.5h14v3.6h-9.7v5.3h6.5v3.4h-6.5v6h9.7v3.6h-14V277.5z'/%3e%3cpath%20class='st2'%20d='M237.7,281.1h-6.3v-3.6h16.8v3.6H242v18.3h-4.3V281.1z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st2'%20d='M30.2,312.9H44v3.6h-9.5v5.5h6.2v3.3h-6.2v9.6h-4.3V312.9z'/%3e%3cpath%20class='st2'%20d='M45.6,323.9c0-7.6,5.4-11.5,10.8-11.5c6.4,0,10.8,3.9,10.8,11.5c0,7.6-5.4,11.5-10.8,11.5%20C50,335.3,45.6,331.4,45.6,323.9z%20M62.8,324c0-5.2-2.5-8-6.5-8c-3.9,0-6.5,2.8-6.5,7.7c0,5.2,2.5,8.1,6.5,8.1%20C60.3,331.7,62.8,328.9,62.8,324z'/%3e%3cpath%20class='st2'%20d='M75.3,326.7h-0.2v8.2h-4.3v-21.9H77c5.1,0,8.6,1.8,8.6,6.5c0,3.7-2.3,6.2-5.8,7l7.5,8.5h-5.1L75.3,326.7z%20M77,323.7c2.7,0,4.3-1.3,4.3-3.8c0-2.5-1.5-3.5-4.3-3.5h-1.9v7.4H77z'/%3e%3cpath%20class='st2'%20d='M97.6,312.9h6.5c6,0,8.5,2,8.5,5.5c0,3-1.7,4.5-4.1,5.1v0.1c2.6,0.5,4.5,1.7,4.5,5.1c0,3.5-2.5,6.2-8.6,6.2%20h-6.7V312.9z%20M104.3,321.9c3.2,0,4.1-1.1,4.1-2.9c0-1.8-1.2-2.6-4.1-2.6h-2.4v5.5H104.3z%20M104.4,331.3c3.2,0,4.3-1.1,4.3-3%20c0-1.9-1.1-3-4.3-3h-2.6v6H104.4z'/%3e%3cpath%20class='st2'%20d='M121.2,325.8l-7.2-12.9h4.7l4.8,9.2l4.9-9.2h4.2l-7.2,12.9v9h-4.3V325.8z'/%3e%3cpath%20class='st2'%20d='M133,323.9c0-7.6,4.8-11.5,10.7-11.5c3.6,0,5.7,1.1,6.9,2.1v4.8c-1.2-1.9-3.2-3.3-6.4-3.3%20c-4.4,0-6.9,2.7-6.9,7.7c0,5,2.4,8.3,6.3,8.3c1,0,2-0.1,2.7-0.4v-6.8h4.3v8.8c-1.5,1-3.9,1.8-7.2,1.8%20C137.3,335.3,133,331.5,133,323.9z'/%3e%3cpath%20class='st2'%20d='M153.8,323.9c0-7.6,4.8-11.5,10.7-11.5c3.6,0,5.7,1.1,6.9,2.1v4.8c-1.2-1.9-3.2-3.3-6.4-3.3%20c-4.4,0-6.9,2.7-6.9,7.7c0,5,2.4,8.3,6.3,8.3c1,0,2-0.1,2.7-0.4v-6.8h4.3v8.8c-1.5,1-3.9,1.8-7.2,1.8%20C158,335.3,153.8,331.5,153.8,323.9z'/%3e%3cpath%20class='st2'%20d='M175.7,312.9h4.3v9.8l8.7-9.8h4.4l-7.9,8.7l8.4,13.2h-4.8l-6.2-10.2l-2.6,2.8v7.4h-4.3V312.9z'/%3e%3cpath%20class='st2'%20d='M193.8,312.9h4.4l5.2,15.4h0.1l5.3-15.4h4.1l-7.9,21.9h-3.5L193.8,312.9z'/%3e%3cpath%20class='st2'%20d='M219.3,315.1l-0.8-2.2h4.4l8.6,21.9h-4.5l-1.7-4.5h-8.1l-1.7,4.5h-4.1L219.3,315.1z%20M218.4,327.1h5.8l-2.3-6%20l-0.6-1.9l-0.6,1.9L218.4,327.1z'/%3e%3cpath%20class='st2'%20d='M234.1,312.9h4.3v18.3h8.2v3.7h-12.4V312.9z'/%3e%3cpath%20class='st2'%20d='M249.7,312.9h4.3v21.9h-4.3V312.9z'/%3e%3cpath%20class='st2'%20d='M263.4,316.5h-6.3v-3.6h16.8v3.6h-6.3v18.3h-4.3V316.5z'/%3e%3cpath%20class='st2'%20d='M277,312.9h14v3.6h-9.7v5.3h6.5v3.4h-6.5v6h9.7v3.6h-14V312.9z'/%3e%3cpath%20class='st2'%20d='M299.4,316.5h-6.3v-3.6h16.8v3.6h-6.3v18.3h-4.3V316.5z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", ba = "_navigationBarContainer_n1cc0_1", xa = "_mainContentLink_n1cc0_1", Ca = "_compact_n1cc0_30", ka = "_navigationBar_n1cc0_1", Ra = "_preventStacking_n1cc0_63", Sa = "_logoContainer_n1cc0_82", La = "_childElements_n1cc0_91", ja = "_menuToggle_n1cc0_97", Ta = "_hamburgerIcon_n1cc0_125", $a = "_active_n1cc0_161", Ma = "_dropdownContainer_n1cc0_170", Na = "_dropdown_n1cc0_170", Ia = "_primaryList_n1cc0_195", Aa = "_secondaryList_n1cc0_196", Oa = "_line_n1cc0_392", te = {
  navigationBarContainer: ba,
  mainContentLink: xa,
  compact: Ca,
  navigationBar: ka,
  preventStacking: Ra,
  logoContainer: Sa,
  childElements: La,
  menuToggle: ja,
  hamburgerIcon: Ta,
  active: $a,
  dropdownContainer: Ma,
  dropdown: Na,
  primaryList: Ia,
  secondaryList: Aa,
  line: Oa
}, Pa = (e) => (e == null ? void 0 : e.logo) ?? "", za = (e) => (e == null ? void 0 : e.logoPadding) ?? "", Da = (e) => (e == null ? void 0 : e.appName) ?? "", tl = ({
  primaryListItems: e = [],
  secondaryListItems: t = [],
  logoLink: r = "",
  logoLinkTitle: a,
  openLogoLinkInNewTab: s,
  theme: i,
  compact: f,
  mainContentId: h,
  preventChildElementStacking: l = !1,
  children: c
}) => {
  const [_, w] = p.useState(!1), g = () => w(!_), x = (S) => ({
    padding: za(S)
  }), v = (S = e, L = 0) => S.length ? /* @__PURE__ */ d.jsx("ul", { className: te.primaryList, children: S.map((T, j) => {
    const X = `${L}-${j}`;
    return T.listItems ? /* @__PURE__ */ d.jsxs("li", { children: [
      /* @__PURE__ */ d.jsx("span", { children: T.name }),
      v(T.listItems, L + 1)
    ] }, X) : /* @__PURE__ */ d.jsx(sn, { listItem: T }, X);
  }) }) : null, b = () => t.length ? /* @__PURE__ */ d.jsx("ul", { className: te.secondaryList, children: t.map((S, L) => /* @__PURE__ */ d.jsx(sn, { listItem: S }, L)) }) : null, N = (S, L) => {
    const T = Pa(i), j = Da(i), X = S && L ? "" : T && j ? `${j} logo` : "DIBK logo", G = T ? /* @__PURE__ */ d.jsx("img", { alt: X, src: T, style: x(i) }) : /* @__PURE__ */ d.jsx("img", { alt: X, src: f ? wa : Ea });
    return S != null && S.length ? /* @__PURE__ */ d.jsx(
      "a",
      {
        href: S,
        title: L,
        target: s ? "_blank" : void 0,
        rel: s ? "noopener noreferrer" : void 0,
        children: G
      }
    ) : G;
  }, y = e.length > 0 || t.length > 0;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: J([
        f && te.compact,
        te.navigationBarContainer
      ]),
      children: [
        h && /* @__PURE__ */ d.jsx(
          "a",
          {
            id: "main-content-link",
            href: `#${h}`,
            className: te.mainContentLink,
            children: /* @__PURE__ */ d.jsx("span", { id: "main-content-link-text", children: "Hopp til hovedinnhold" })
          }
        ),
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: J([
              te.navigationBar,
              l && te.preventStacking
            ]),
            children: [
              /* @__PURE__ */ d.jsx("div", { className: te.logoContainer, children: N(r, a) }),
              c && /* @__PURE__ */ d.jsx("div", { className: te.childElements, children: c }),
              y && /* @__PURE__ */ d.jsxs(
                "button",
                {
                  type: "button",
                  className: `${te.menuToggle} ${_ ? te.active : ""}`,
                  onClick: g,
                  "aria-expanded": _ ? "true" : "false",
                  "aria-controls": "main-menu-dropdown",
                  children: [
                    !f && "Meny",
                    /* @__PURE__ */ d.jsxs("span", { className: te.hamburgerIcon, children: [
                      /* @__PURE__ */ d.jsx("span", { className: te.line }),
                      /* @__PURE__ */ d.jsx("span", { className: te.line }),
                      /* @__PURE__ */ d.jsx("span", { className: te.line })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        y && /* @__PURE__ */ d.jsx(p.Fragment, { children: /* @__PURE__ */ d.jsx(
          "div",
          {
            className: J([
              te.dropdownContainer,
              _ && te.active
            ]),
            children: /* @__PURE__ */ d.jsxs("div", { id: "main-menu-dropdown", className: te.dropdown, children: [
              v(),
              b()
            ] })
          }
        ) })
      ]
    }
  );
}, Ba = "_paper_1lgl3_1", Fa = "_noMargin_1lgl3_6", Ha = "_noPadding_1lgl3_9", mt = {
  paper: Ba,
  noMargin: Fa,
  noPadding: Ha
}, nl = ({
  noMargin: e = !1,
  noPadding: t = !1,
  children: r
}) => {
  const a = [
    mt.paper,
    e && mt.noMargin,
    t && mt.noPadding
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d.jsx("div", { className: a, children: r });
}, qa = "_progressBar_t5aid_1", Ua = "_hasErrors_t5aid_23", an = {
  progressBar: qa,
  hasErrors: Ua
}, rl = ({ progress: e = 0, hasErrors: t = !1 }) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: `${an.progressBar} ${t ? an.hasErrors : ""}`,
    role: "progressbar",
    "aria-valuenow": e,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: { "--value": e }
  }
), Va = "_radioButtonIcon_32fe0_1", Ya = "_hasErrors_32fe0_22", Wa = "_checked_32fe0_32", Xa = "_disabled_32fe0_48", tt = {
  radioButtonIcon: Va,
  hasErrors: Ya,
  checked: Wa,
  disabled: Xa
}, Ga = ({
  size: e = "10px",
  checked: t = !1,
  disabled: r = !1,
  hasErrors: a = !1
}) => {
  const s = {
    height: e,
    width: e
  }, i = [
    tt.radioButtonIcon,
    t && tt.checked,
    r && tt.disabled,
    a && tt.hasErrors
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d.jsx("span", { className: i, style: s });
}, Ka = "_radioButtonInput_1i7cy_1", Qa = "_requiredSymbol_1i7cy_6", Za = "_disabled_1i7cy_13", Ja = "_labelText_1i7cy_19", ei = "_hasErrors_1i7cy_27", Te = {
  radioButtonInput: Ka,
  requiredSymbol: Qa,
  disabled: Za,
  labelText: Ja,
  hasErrors: ei
}, ti = ({
  checked: e = !1,
  disabled: t = !1,
  required: r = !1,
  requiredGroup: a = !1,
  id: s,
  name: i = "",
  onChange: f,
  contentOnly: h = !1,
  hasErrors: l = !1,
  inputValue: c,
  tabIndex: _,
  children: w,
  "aria-controls": g,
  "aria-describedby": x
}) => {
  const v = [
    Te.radioButtonInput,
    e && Te.checked,
    t && Te.disabled,
    l && Te.hasErrors
  ].filter(Boolean).join(" "), b = {
    checked: e,
    disabled: t,
    hasErrors: !h && l
  }, N = {
    id: s,
    name: i,
    type: "radio",
    value: c,
    checked: e,
    disabled: t,
    required: r || a,
    onChange: f,
    tabIndex: _ ?? void 0,
    "aria-controls": g,
    "aria-invalid": l ? "true" : void 0,
    "aria-describedby": x
  };
  return /* @__PURE__ */ d.jsxs("label", { htmlFor: s, className: v, children: [
    !h && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(Ga, { ...b }),
      /* @__PURE__ */ d.jsx("input", { ...N })
    ] }),
    /* @__PURE__ */ d.jsxs("span", { className: Te.labelText, children: [
      w,
      r && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: Te.requiredSymbol })
    ] })
  ] });
}, ni = "_radioButtonList_1cyu3_1", ri = "_requiredSymbol_1cyu3_16", ln = {
  radioButtonList: ni,
  requiredSymbol: ri
}, ol = ({
  legend: e,
  legendSize: t,
  required: r = !1,
  compact: a = !1,
  children: s
}) => {
  const i = (f) => Me(f).map((l, c) => {
    var _;
    return p.isValidElement(l) && ((_ = l.type) == null ? void 0 : _.displayName) === "RadioButtonListItem" ? p.cloneElement(l, {
      requiredGroup: r,
      compact: a,
      key: `radioButtonListItem-${c}`
    }) : l;
  });
  return /* @__PURE__ */ d.jsxs("fieldset", { className: ln.radioButtonList, children: [
    !!(e != null && e.length) && /* @__PURE__ */ d.jsxs("legend", { children: [
      t ? /* @__PURE__ */ d.jsx(Ln, { size: t, children: e }) : e,
      r && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: ln.requiredSymbol })
    ] }),
    i(p.Children.toArray(s))
  ] });
}, oi = "_radioButtonListItem_1ggab_1", si = "_contentOnly_1ggab_26", ai = "_compact_1ggab_26", ii = "_disabled_1ggab_41", li = "_checked_1ggab_44", $e = {
  radioButtonListItem: oi,
  contentOnly: si,
  compact: ai,
  disabled: ii,
  checked: li
}, sl = ({
  inputValue: e,
  checked: t = !1,
  disabled: r = !1,
  required: a = !1,
  requiredGroup: s = !1,
  name: i = "",
  id: f,
  onChange: h,
  contentOnly: l = !1,
  compact: c = !1,
  hasErrors: _ = !1,
  "aria-controls": w,
  "aria-describedby": g,
  children: x
}) => {
  const v = J([
    $e.radioButtonListItem,
    t && $e.checked,
    r && $e.disabled,
    c && $e.compact,
    l && $e.contentOnly,
    _ && $e.hasErrors
  ]), b = {
    onChange: h,
    inputValue: e,
    checked: t,
    disabled: r,
    required: a,
    requiredGroup: s,
    contentOnly: l,
    hasErrors: _,
    "aria-controls": w,
    "aria-describedby": g,
    id: f,
    name: i
  };
  return /* @__PURE__ */ d.jsx("div", { className: v, children: /* @__PURE__ */ d.jsx(ti, { ...b, children: x }) });
}, ci = "_select_18o2z_1", ui = "_requiredSymbol_18o2z_1", di = "_selectContainer_18o2z_8", fi = "_selectListArrow_18o2z_11", hi = "_multipleSelectDropdown_18o2z_40", pi = "_multipleSelectElement_18o2z_52", mi = "_multiple_18o2z_40", _i = "_hasErrors_18o2z_100", de = {
  select: ci,
  requiredSymbol: ui,
  selectContainer: di,
  selectListArrow: fi,
  multipleSelectDropdown: hi,
  multipleSelectElement: pi,
  multiple: mi,
  hasErrors: _i
}, al = ({
  id: e,
  onChange: t,
  name: r = "",
  required: a = !1,
  disabled: s = !1,
  multiple: i = !1,
  options: f = [],
  width: h,
  value: l,
  defaultValue: c,
  label: _ = "",
  contentOnly: w = !1,
  keyAsContent: g = !1,
  placeholder: x = "",
  placeholderValue: v = "",
  defaultContent: b = "",
  role: N,
  "aria-describedby": y,
  hasErrors: S = !1,
  errorMessage: L = ""
}) => {
  const [T, j] = p.useState(!1), X = p.useRef(null);
  p.useCallback(($) => {
    $ && dn($);
  }, []);
  const G = () => j(!1);
  p.useEffect(() => {
    const $ = (W) => {
      W.key === "Escape" && G();
    }, Q = (W) => {
      X.current && !X.current.contains(W.target) && G();
    };
    return document.addEventListener("mousedown", Q), document.addEventListener("keydown", $), () => {
      document.removeEventListener("mousedown", Q), document.removeEventListener("keydown", $);
    };
  }, []);
  const z = ($, Q) => {
    const W = Q.find(
      (Z) => typeof Z == "object" ? Z.value === $ : Z === $
    );
    return typeof W == "object" ? W.key ?? W.value : W;
  }, Y = ($) => typeof $ == "object" ? { key: $.key, value: $.value } : { key: $, value: $ }, ee = () => {
    var $;
    return (($ = c || l) == null ? void 0 : $.map((Q) => z(Q, f)).join(", ")) || null;
  }, B = () => f.map(($, Q) => {
    const { key: W, value: Z } = Y($), ie = (c || l || []).includes(Z);
    return /* @__PURE__ */ d.jsx(
      ls,
      {
        id: `${e}-${Q}`,
        value: Z,
        checked: ie,
        onChange: () => t(Z),
        children: W
      },
      Q
    );
  }), re = () => `${e}-errorMessage`;
  if (w) {
    const $ = c || l || null;
    return /* @__PURE__ */ d.jsxs("div", { className: de.select, children: [
      /* @__PURE__ */ d.jsx(Fe, { htmlFor: e, children: _ }),
      /* @__PURE__ */ d.jsx("span", { children: $ ? g ? z($, f) : $ : b })
    ] });
  }
  const F = {
    name: r,
    multiple: i,
    required: a,
    disabled: s,
    onChange: t,
    id: e,
    role: N,
    className: J([
      S && de.hasErrors,
      i && de.multiple
    ]),
    "aria-describedby": S && L ? re() : y,
    "aria-invalid": S || void 0,
    style: h ? { maxWidth: h } : void 0,
    ...c && !l ? { defaultValue: c } : { value: l || "" }
  };
  return /* @__PURE__ */ d.jsxs("div", { className: de.select, children: [
    /* @__PURE__ */ d.jsxs(Fe, { htmlFor: e, children: [
      _,
      a && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: de.requiredSymbol })
    ] }),
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: de.selectContainer,
        style: h ? { maxWidth: h } : void 0,
        children: [
          /* @__PURE__ */ d.jsx("span", { className: de.selectListArrow }),
          i ? /* @__PURE__ */ d.jsxs("div", { ref: X, children: [
            /* @__PURE__ */ d.jsx(
              "div",
              {
                onClick: () => j(!T),
                className: de.multipleSelectElement,
                children: ee()
              }
            ),
            T && /* @__PURE__ */ d.jsx("div", { className: de.multipleSelectDropdown, children: /* @__PURE__ */ d.jsx(ns, { compact: !0, children: B() }) })
          ] }) : /* @__PURE__ */ d.jsxs("select", { ...F, children: [
            x && /* @__PURE__ */ d.jsx("option", { value: v, disabled: !0, children: x }),
            f.map(($, Q) => {
              const { key: W, value: Z } = Y($);
              return /* @__PURE__ */ d.jsx("option", { value: Z, children: W }, Q);
            })
          ] }, `${e}-${Rt(6)}`)
        ]
      }
    ),
    /* @__PURE__ */ d.jsx(lt, { id: re(), content: L })
  ] });
}, gi = "_table_miy9l_1", He = {
  table: gi,
  "captionSide-top": "_captionSide-top_miy9l_14",
  "captionSide-bottom": "_captionSide-bottom_miy9l_18",
  "captionAlign-left": "_captionAlign-left_miy9l_22",
  "captionAlign-center": "_captionAlign-center_miy9l_25",
  "captionAlign-right": "_captionAlign-right_miy9l_28"
}, vi = (e) => e && ["left", "center", "right"].includes(e) ? He[`captionAlign-${e}`] : He["captionAlign-left"], yi = (e) => e && ["top", "bottom"].includes(e) ? He[`captionSide-${e}`] : He["captionSide-top"], il = ({ captionAlign: e, captionSide: t, children: r }) => {
  const a = J([
    He.table,
    vi(e),
    yi(t)
  ]);
  return /* @__PURE__ */ d.jsx("table", { className: a, children: r });
}, wi = "_textarea_1596u_1", Ei = "_requiredSymbol_1596u_4", bi = "_hasErrors_1596u_55", _t = {
  textarea: wi,
  requiredSymbol: Ei,
  hasErrors: bi
}, ll = ({
  id: e,
  onChange: t,
  onBlur: r,
  name: a = "",
  required: s = !1,
  readOnly: i,
  disabled: f,
  width: h,
  resize: l = "both",
  value: c,
  defaultValue: _,
  elementKey: w,
  rows: g,
  label: x = "",
  contentOnly: v = !1,
  placeholder: b = "",
  defaultContent: N = "",
  "aria-describedby": y,
  hasErrors: S = !1,
  errorMessage: L = ""
}) => {
  const T = () => `${e}-errorMessage`, j = !(c != null && c.length) && (_ != null && _.length) ? _ : void 0, X = w || `${e}-${Rt(6)}`, G = {
    ...h && { maxWidth: h },
    ...l && { resize: l }
  }, z = {
    name: a,
    readOnly: i,
    disabled: f,
    required: s,
    id: e,
    onChange: t,
    onBlur: r,
    value: j ? void 0 : c,
    defaultValue: j || void 0,
    placeholder: b,
    rows: g ? parseInt(g, 10) : void 0,
    className: S ? _t.hasErrors : "",
    "aria-describedby": S && L ? T() : y,
    "aria-invalid": S ? "true" : void 0,
    style: G
  };
  return /* @__PURE__ */ d.jsxs("div", { className: _t.textarea, children: [
    /* @__PURE__ */ d.jsxs(Fe, { htmlFor: e, children: [
      x,
      s && /* @__PURE__ */ d.jsx("img", { src: we, alt: "", className: _t.requiredSymbol })
    ] }),
    v ? /* @__PURE__ */ d.jsx("span", { children: c || _ || N }) : /* @__PURE__ */ d.jsx("textarea", { ...z }, X),
    /* @__PURE__ */ d.jsx(lt, { id: T(), content: L })
  ] });
}, cl = ({ theme: e, children: t }) => {
  const r = qn(e), a = Vn(
    r
  );
  return Un("theme-provider", `:root {${a}}`), t;
}, xi = "_toggleNavigationButton_1eb2w_1", Ci = {
  toggleNavigationButton: xi
}, ul = ({
  id: e,
  htmlTag: t = "button",
  showText: r,
  hideText: a,
  buttonProps: s = {},
  isOpen: i = !1
}) => fe.createElement(
  t,
  {
    ...s,
    className: Ci.toggleNavigationButton,
    id: e || void 0
  },
  i ? a : r
), ki = "_wizardTopnavItem_5ar16_1", Ri = "_wizardTopnavItemContent_5ar16_4", Si = "_vertical_5ar16_7", Li = "_stepNumber_5ar16_24", ji = "_stepName_5ar16_36", Ti = "_active_5ar16_46", $i = "_finished_5ar16_46", Mi = "_hasErrors_5ar16_46", Ni = "_horizontal_5ar16_64", ue = {
  wizardTopnavItem: ki,
  wizardTopnavItemContent: Ri,
  vertical: Si,
  stepNumber: Li,
  stepName: ji,
  active: Ti,
  finished: $i,
  hasErrors: Mi,
  horizontal: Ni
}, Ii = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20aria-label='Ferdig'%20style='fill:%20rgb(23,%20121,%2018);'%3e%3cmask%20id='mask0_1089_7430'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='20'%20height='20'%20style='mask-type:%20alpha;'%3e%3crect%20width='20'%20height='20'%3e%3c/rect%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1089_7430)'%3e%3cpath%20d='M5.71427%208.57149L3.80951%2010.4762L8.57141%2015.2382L17.1428%206.66672L15.2381%204.76196L8.57141%2011.4286L5.71427%208.57149Z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e", Ai = ({
  step: e,
  index: t,
  activeStepId: r,
  direction: a = "vertical"
}) => {
  const s = r === e.id, i = a === "vertical", f = J([
    ue.wizardTopnavItem,
    s && ue.active,
    e.finished && ue.finished,
    e.hasErrors && ue.hasErrors,
    ue[a]
  ]), h = s ? "step" : void 0, l = () => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("span", { className: ue.stepNumber, children: t + 1 }),
    /* @__PURE__ */ d.jsx("span", { className: ue.stepName, children: e.name }),
    i && e.finished && !s && /* @__PURE__ */ d.jsx("img", { src: Ii, alt: "", className: ue.checkmarkSymbol })
  ] });
  return e.link && Object.keys(e.link).length > 0 ? /* @__PURE__ */ d.jsx("li", { className: f, children: /* @__PURE__ */ d.jsx(
    Be,
    {
      to: e.link,
      "aria-current": h,
      className: ue.wizardTopnavItemContent,
      children: l()
    }
  ) }) : /* @__PURE__ */ d.jsx("li", { className: f, children: /* @__PURE__ */ d.jsx(
    "span",
    {
      "aria-current": h,
      className: ue.wizardTopnavItemContent,
      children: l()
    }
  ) });
}, Oi = "_wizardTopnavContainer_qiy2o_1", Pi = "_wizardTopnav_qiy2o_1", zi = "_vertical_qiy2o_6", Di = "_horizontal_qiy2o_11", gt = {
  wizardTopnavContainer: Oi,
  wizardTopnav: Pi,
  vertical: zi,
  horizontal: Di
}, dl = ({
  steps: e,
  activeStepId: t,
  direction: r = "vertical",
  "aria-label": a
}) => {
  const s = Object.keys(e), f = `I dette skjemaet er det totalt ${s.length} steg som du skal gå igjennom`, h = a != null && a.length ? a : f;
  return /* @__PURE__ */ d.jsx(
    "nav",
    {
      "aria-label": h,
      className: J([
        gt.wizardTopnavContainer,
        gt[r]
      ]),
      children: /* @__PURE__ */ d.jsx("ol", { className: gt.wizardTopnav, children: s.map((l, c) => /* @__PURE__ */ d.jsx(
        Ai,
        {
          step: e[l],
          activeStepId: t,
          direction: r,
          index: c
        },
        l
      )) })
    }
  );
};
export {
  Bi as Accordion,
  Sn as Button,
  Kt as CheckBoxIcon,
  Ko as CheckBoxInput,
  ns as CheckBoxList,
  ls as CheckBoxListItem,
  ds as Container,
  Fi as ContentBox,
  Hi as DescriptionDetails,
  qi as DescriptionList,
  Ui as DescriptionTerm,
  Vi as Dialog,
  Yi as DragAndDropFileInput,
  Wi as ErrorBox,
  lt as ErrorMessage,
  Xi as Footer,
  Ln as Header,
  Gi as InfoBox,
  Ki as InputField,
  Fe as Label,
  Qi as Lead,
  Zi as List,
  Ji as ListItem,
  el as LoadingAnimation,
  tl as NavigationBar,
  sn as NavigationBarListItem,
  nl as Paper,
  rl as ProgressBar,
  Ga as RadioButtonIcon,
  ti as RadioButtonInput,
  ol as RadioButtonList,
  sl as RadioButtonListItem,
  al as Select,
  il as Table,
  ll as Textarea,
  cl as ThemeProvider,
  ul as ToggleNavigationButton,
  dl as WizardNavigation,
  Ai as WizardNavigationStep
};
//# sourceMappingURL=index.es.js.map
