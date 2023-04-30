export var TrimbleConnectWorkspace = (function (e) {
  "use strict";
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function t(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    );
  }
  var n,
    s,
    r = { exports: {} };
  ((n = r).exports = (function () {
    var e, s;
    function r() {
      return e.apply(null, arguments);
    }
    function i(t) {
      e = t;
    }
    function a(e) {
      return (
        e instanceof Array ||
        "[object Array]" === Object.prototype.toString.call(e)
      );
    }
    function o(e) {
      return (
        null != e && "[object Object]" === Object.prototype.toString.call(e)
      );
    }
    function d(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function u(e) {
      if (Object.getOwnPropertyNames)
        return 0 === Object.getOwnPropertyNames(e).length;
      var t;
      for (t in e) if (d(e, t)) return !1;
      return !0;
    }
    function l(e) {
      return void 0 === e;
    }
    function c(e) {
      return (
        "number" == typeof e ||
        "[object Number]" === Object.prototype.toString.call(e)
      );
    }
    function h(e) {
      return (
        e instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(e)
      );
    }
    function _(e, t) {
      var n,
        s = [],
        r = e.length;
      for (n = 0; n < r; ++n) s.push(t(e[n], n));
      return s;
    }
    function m(e, t) {
      for (var n in t) d(t, n) && (e[n] = t[n]);
      return (
        d(t, "toString") && (e.toString = t.toString),
        d(t, "valueOf") && (e.valueOf = t.valueOf),
        e
      );
    }
    function f(e, t, n, s) {
      return Jn(e, t, n, s, !0).utc();
    }
    function y() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1,
      };
    }
    function M(e) {
      return null == e._pf && (e._pf = y()), e._pf;
    }
    function p(e) {
      if (null == e._isValid) {
        var t = M(e),
          n = s.call(t.parsedDateParts, function (e) {
            return null != e;
          }),
          r =
            !isNaN(e._d.getTime()) &&
            t.overflow < 0 &&
            !t.empty &&
            !t.invalidEra &&
            !t.invalidMonth &&
            !t.invalidWeekday &&
            !t.weekdayMismatch &&
            !t.nullInput &&
            !t.invalidFormat &&
            !t.userInvalidated &&
            (!t.meridiem || (t.meridiem && n));
        if (
          (e._strict &&
            (r =
              r &&
              0 === t.charsLeftOver &&
              0 === t.unusedTokens.length &&
              void 0 === t.bigHour),
          null != Object.isFrozen && Object.isFrozen(e))
        )
          return r;
        e._isValid = r;
      }
      return e._isValid;
    }
    function g(e) {
      var t = f(NaN);
      return null != e ? m(M(t), e) : (M(t).userInvalidated = !0), t;
    }
    s = Array.prototype.some
      ? Array.prototype.some
      : function (e) {
          var t,
            n = Object(this),
            s = n.length >>> 0;
          for (t = 0; t < s; t++)
            if (t in n && e.call(this, n[t], t, n)) return !0;
          return !1;
        };
    var Y = (r.momentProperties = []),
      w = !1;
    function v(e, t) {
      var n,
        s,
        r,
        i = Y.length;
      if (
        (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        l(t._i) || (e._i = t._i),
        l(t._f) || (e._f = t._f),
        l(t._l) || (e._l = t._l),
        l(t._strict) || (e._strict = t._strict),
        l(t._tzm) || (e._tzm = t._tzm),
        l(t._isUTC) || (e._isUTC = t._isUTC),
        l(t._offset) || (e._offset = t._offset),
        l(t._pf) || (e._pf = M(t)),
        l(t._locale) || (e._locale = t._locale),
        i > 0)
      )
        for (n = 0; n < i; n++) l((r = t[(s = Y[n])])) || (e[s] = r);
      return e;
    }
    function k(e) {
      v(this, e),
        (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === w && ((w = !0), r.updateOffset(this), (w = !1));
    }
    function D(e) {
      return e instanceof k || (null != e && null != e._isAMomentObject);
    }
    function L(e) {
      !1 === r.suppressDeprecationWarnings &&
        "undefined" != typeof console &&
        console.warn &&
        console.warn("Deprecation warning: " + e);
    }
    function S(e, t) {
      var n = !0;
      return m(function () {
        if (
          (null != r.deprecationHandler && r.deprecationHandler(null, e), n)
        ) {
          var s,
            i,
            a,
            o = [],
            u = arguments.length;
          for (i = 0; i < u; i++) {
            if (((s = ""), "object" == typeof arguments[i])) {
              for (a in ((s += "\n[" + i + "] "), arguments[0]))
                d(arguments[0], a) && (s += a + ": " + arguments[0][a] + ", ");
              s = s.slice(0, -2);
            } else s = arguments[i];
            o.push(s);
          }
          L(
            e +
              "\nArguments: " +
              Array.prototype.slice.call(o).join("") +
              "\n" +
              new Error().stack
          ),
            (n = !1);
        }
        return t.apply(this, arguments);
      }, t);
    }
    var b,
      T = {};
    function O(e, t) {
      null != r.deprecationHandler && r.deprecationHandler(e, t),
        T[e] || (L(t), (T[e] = !0));
    }
    function x(e) {
      return (
        ("undefined" != typeof Function && e instanceof Function) ||
        "[object Function]" === Object.prototype.toString.call(e)
      );
    }
    function H(e) {
      var t, n;
      for (n in e)
        d(e, n) && (x((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            "|" +
            /\d{1,2}/.source
        ));
    }
    function P(e, t) {
      var n,
        s = m({}, e);
      for (n in t)
        d(t, n) &&
          (o(e[n]) && o(t[n])
            ? ((s[n] = {}), m(s[n], e[n]), m(s[n], t[n]))
            : null != t[n]
            ? (s[n] = t[n])
            : delete s[n]);
      for (n in e) d(e, n) && !d(t, n) && o(e[n]) && (s[n] = m({}, s[n]));
      return s;
    }
    function j(e) {
      null != e && this.set(e);
    }
    (r.suppressDeprecationWarnings = !1),
      (r.deprecationHandler = null),
      (b = Object.keys
        ? Object.keys
        : function (e) {
            var t,
              n = [];
            for (t in e) d(e, t) && n.push(t);
            return n;
          });
    var N = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    };
    function W(e, t, n) {
      var s = this._calendar[e] || this._calendar.sameElse;
      return x(s) ? s.call(t, n) : s;
    }
    function R(e, t, n) {
      var s = "" + Math.abs(e),
        r = t - s.length;
      return (
        (e >= 0 ? (n ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, r)).toString().substr(1) +
        s
      );
    }
    var C =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      F = {},
      A = {};
    function U(e, t, n, s) {
      var r = s;
      "string" == typeof s &&
        (r = function () {
          return this[s]();
        }),
        e && (A[e] = r),
        t &&
          (A[t[0]] = function () {
            return R(r.apply(this, arguments), t[1], t[2]);
          }),
        n &&
          (A[n] = function () {
            return this.localeData().ordinal(r.apply(this, arguments), e);
          });
    }
    function V(e) {
      return e.match(/\[[\s\S]/)
        ? e.replace(/^\[|\]$/g, "")
        : e.replace(/\\/g, "");
    }
    function I(e) {
      var t,
        n,
        s = e.match(C);
      for (t = 0, n = s.length; t < n; t++)
        A[s[t]] ? (s[t] = A[s[t]]) : (s[t] = V(s[t]));
      return function (t) {
        var r,
          i = "";
        for (r = 0; r < n; r++) i += x(s[r]) ? s[r].call(t, e) : s[r];
        return i;
      };
    }
    function G(e, t) {
      return e.isValid()
        ? ((t = z(t, e.localeData())), (F[t] = F[t] || I(t)), F[t](e))
        : e.localeData().invalidDate();
    }
    function z(e, t) {
      var n = 5;
      function s(e) {
        return t.longDateFormat(e) || e;
      }
      for (E.lastIndex = 0; n >= 0 && E.test(e); )
        (e = e.replace(E, s)), (E.lastIndex = 0), (n -= 1);
      return e;
    }
    var Z = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    };
    function $(e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n
            .match(C)
            .map(function (e) {
              return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                ? e.slice(1)
                : e;
            })
            .join("")),
          this._longDateFormat[e]);
    }
    var q = "Invalid date";
    function J() {
      return this._invalidDate;
    }
    var B = "%d",
      Q = /\d{1,2}/;
    function X(e) {
      return this._ordinal.replace("%d", e);
    }
    var K = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    };
    function ee(e, t, n, s) {
      var r = this._relativeTime[n];
      return x(r) ? r(e, t, n, s) : r.replace(/%d/i, e);
    }
    function te(e, t) {
      var n = this._relativeTime[e > 0 ? "future" : "past"];
      return x(n) ? n(t) : n.replace(/%s/i, t);
    }
    var ne = {};
    function se(e, t) {
      var n = e.toLowerCase();
      ne[n] = ne[n + "s"] = ne[t] = e;
    }
    function re(e) {
      return "string" == typeof e ? ne[e] || ne[e.toLowerCase()] : void 0;
    }
    function ie(e) {
      var t,
        n,
        s = {};
      for (n in e) d(e, n) && (t = re(n)) && (s[t] = e[n]);
      return s;
    }
    var ae = {};
    function oe(e, t) {
      ae[e] = t;
    }
    function de(e) {
      var t,
        n = [];
      for (t in e) d(e, t) && n.push({ unit: t, priority: ae[t] });
      return (
        n.sort(function (e, t) {
          return e.priority - t.priority;
        }),
        n
      );
    }
    function ue(e) {
      return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }
    function le(e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function ce(e) {
      var t = +e,
        n = 0;
      return 0 !== t && isFinite(t) && (n = le(t)), n;
    }
    function he(e, t) {
      return function (n) {
        return null != n
          ? (me(this, e, n), r.updateOffset(this, t), this)
          : _e(this, e);
      };
    }
    function _e(e, t) {
      return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
    }
    function me(e, t, n) {
      e.isValid() &&
        !isNaN(n) &&
        ("FullYear" === t && ue(e.year()) && 1 === e.month() && 29 === e.date()
          ? ((n = ce(n)),
            e._d["set" + (e._isUTC ? "UTC" : "") + t](
              n,
              e.month(),
              et(n, e.month())
            ))
          : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
    }
    function fe(e) {
      return x(this[(e = re(e))]) ? this[e]() : this;
    }
    function ye(e, t) {
      if ("object" == typeof e) {
        var n,
          s = de((e = ie(e))),
          r = s.length;
        for (n = 0; n < r; n++) this[s[n].unit](e[s[n].unit]);
      } else if (x(this[(e = re(e))])) return this[e](t);
      return this;
    }
    var Me,
      pe = /\d/,
      ge = /\d\d/,
      Ye = /\d{3}/,
      we = /\d{4}/,
      ve = /[+-]?\d{6}/,
      ke = /\d\d?/,
      De = /\d\d\d\d?/,
      Le = /\d\d\d\d\d\d?/,
      Se = /\d{1,3}/,
      be = /\d{1,4}/,
      Te = /[+-]?\d{1,6}/,
      Oe = /\d+/,
      xe = /[+-]?\d+/,
      He = /Z|[+-]\d\d:?\d\d/gi,
      Pe = /Z|[+-]\d\d(?::?\d\d)?/gi,
      je = /[+-]?\d+(\.\d{1,3})?/,
      Ne =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    function We(e, t, n) {
      Me[e] = x(t)
        ? t
        : function (e, s) {
            return e && n ? n : t;
          };
    }
    function Re(e, t) {
      return d(Me, e) ? Me[e](t._strict, t._locale) : new RegExp(Ce(e));
    }
    function Ce(e) {
      return Ee(
        e
          .replace("\\", "")
          .replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function (e, t, n, s, r) {
              return t || n || s || r;
            }
          )
      );
    }
    function Ee(e) {
      return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    Me = {};
    var Fe = {};
    function Ae(e, t) {
      var n,
        s,
        r = t;
      for (
        "string" == typeof e && (e = [e]),
          c(t) &&
            (r = function (e, n) {
              n[t] = ce(e);
            }),
          s = e.length,
          n = 0;
        n < s;
        n++
      )
        Fe[e[n]] = r;
    }
    function Ue(e, t) {
      Ae(e, function (e, n, s, r) {
        (s._w = s._w || {}), t(e, s._w, s, r);
      });
    }
    function Ve(e, t, n) {
      null != t && d(Fe, e) && Fe[e](t, n._a, n, e);
    }
    var Ie,
      Ge = 0,
      ze = 1,
      Ze = 2,
      $e = 3,
      qe = 4,
      Je = 5,
      Be = 6,
      Qe = 7,
      Xe = 8;
    function Ke(e, t) {
      return ((e % t) + t) % t;
    }
    function et(e, t) {
      if (isNaN(e) || isNaN(t)) return NaN;
      var n = Ke(t, 12);
      return (
        (e += (t - n) / 12), 1 === n ? (ue(e) ? 29 : 28) : 31 - ((n % 7) % 2)
      );
    }
    (Ie = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function (e) {
          var t;
          for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
          return -1;
        }),
      U("M", ["MM", 2], "Mo", function () {
        return this.month() + 1;
      }),
      U("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e);
      }),
      U("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e);
      }),
      se("month", "M"),
      oe("month", 8),
      We("M", ke),
      We("MM", ke, ge),
      We("MMM", function (e, t) {
        return t.monthsShortRegex(e);
      }),
      We("MMMM", function (e, t) {
        return t.monthsRegex(e);
      }),
      Ae(["M", "MM"], function (e, t) {
        t[ze] = ce(e) - 1;
      }),
      Ae(["MMM", "MMMM"], function (e, t, n, s) {
        var r = n._locale.monthsParse(e, s, n._strict);
        null != r ? (t[ze] = r) : (M(n).invalidMonth = e);
      });
    var tt =
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      nt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      st = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      rt = Ne,
      it = Ne;
    function at(e, t) {
      return e
        ? a(this._months)
          ? this._months[e.month()]
          : this._months[
              (this._months.isFormat || st).test(t) ? "format" : "standalone"
            ][e.month()]
        : a(this._months)
        ? this._months
        : this._months.standalone;
    }
    function ot(e, t) {
      return e
        ? a(this._monthsShort)
          ? this._monthsShort[e.month()]
          : this._monthsShort[st.test(t) ? "format" : "standalone"][e.month()]
        : a(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }
    function dt(e, t, n) {
      var s,
        r,
        i,
        a = e.toLocaleLowerCase();
      if (!this._monthsParse)
        for (
          this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            s = 0;
          s < 12;
          ++s
        )
          (i = f([2e3, s])),
            (this._shortMonthsParse[s] = this.monthsShort(
              i,
              ""
            ).toLocaleLowerCase()),
            (this._longMonthsParse[s] = this.months(i, "").toLocaleLowerCase());
      return n
        ? "MMM" === t
          ? -1 !== (r = Ie.call(this._shortMonthsParse, a))
            ? r
            : null
          : -1 !== (r = Ie.call(this._longMonthsParse, a))
          ? r
          : null
        : "MMM" === t
        ? -1 !== (r = Ie.call(this._shortMonthsParse, a)) ||
          -1 !== (r = Ie.call(this._longMonthsParse, a))
          ? r
          : null
        : -1 !== (r = Ie.call(this._longMonthsParse, a)) ||
          -1 !== (r = Ie.call(this._shortMonthsParse, a))
        ? r
        : null;
    }
    function ut(e, t, n) {
      var s, r, i;
      if (this._monthsParseExact) return dt.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((r = f([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              "^" + this.months(r, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[s] = new RegExp(
              "^" + this.monthsShort(r, "").replace(".", "") + "$",
              "i"
            ))),
          n ||
            this._monthsParse[s] ||
            ((i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
            (this._monthsParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && "MMMM" === t && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }
    function lt(e, t) {
      var n;
      if (!e.isValid()) return e;
      if ("string" == typeof t)
        if (/^\d+$/.test(t)) t = ce(t);
        else if (!c((t = e.localeData().monthsParse(t)))) return e;
      return (
        (n = Math.min(e.date(), et(e.year(), t))),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
      );
    }
    function ct(e) {
      return null != e
        ? (lt(this, e), r.updateOffset(this, !0), this)
        : _e(this, "Month");
    }
    function ht() {
      return et(this.year(), this.month());
    }
    function _t(e) {
      return this._monthsParseExact
        ? (d(this, "_monthsRegex") || ft.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = rt),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }
    function mt(e) {
      return this._monthsParseExact
        ? (d(this, "_monthsRegex") || ft.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (d(this, "_monthsRegex") || (this._monthsRegex = it),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }
    function ft() {
      function e(e, t) {
        return t.length - e.length;
      }
      var t,
        n,
        s = [],
        r = [],
        i = [];
      for (t = 0; t < 12; t++)
        (n = f([2e3, t])),
          s.push(this.monthsShort(n, "")),
          r.push(this.months(n, "")),
          i.push(this.months(n, "")),
          i.push(this.monthsShort(n, ""));
      for (s.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++)
        (s[t] = Ee(s[t])), (r[t] = Ee(r[t]));
      for (t = 0; t < 24; t++) i[t] = Ee(i[t]);
      (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
        (this._monthsShortStrictRegex = new RegExp(
          "^(" + s.join("|") + ")",
          "i"
        ));
    }
    function yt(e) {
      return ue(e) ? 366 : 365;
    }
    U("Y", 0, 0, function () {
      var e = this.year();
      return e <= 9999 ? R(e, 4) : "+" + e;
    }),
      U(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }),
      U(0, ["YYYY", 4], 0, "year"),
      U(0, ["YYYYY", 5], 0, "year"),
      U(0, ["YYYYYY", 6, !0], 0, "year"),
      se("year", "y"),
      oe("year", 1),
      We("Y", xe),
      We("YY", ke, ge),
      We("YYYY", be, we),
      We("YYYYY", Te, ve),
      We("YYYYYY", Te, ve),
      Ae(["YYYYY", "YYYYYY"], Ge),
      Ae("YYYY", function (e, t) {
        t[Ge] = 2 === e.length ? r.parseTwoDigitYear(e) : ce(e);
      }),
      Ae("YY", function (e, t) {
        t[Ge] = r.parseTwoDigitYear(e);
      }),
      Ae("Y", function (e, t) {
        t[Ge] = parseInt(e, 10);
      }),
      (r.parseTwoDigitYear = function (e) {
        return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
      });
    var Mt = he("FullYear", !0);
    function pt() {
      return ue(this.year());
    }
    function gt(e, t, n, s, r, i, a) {
      var o;
      return (
        e < 100 && e >= 0
          ? ((o = new Date(e + 400, t, n, s, r, i, a)),
            isFinite(o.getFullYear()) && o.setFullYear(e))
          : (o = new Date(e, t, n, s, r, i, a)),
        o
      );
    }
    function Yt(e) {
      var t, n;
      return (
        e < 100 && e >= 0
          ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
            (t = new Date(Date.UTC.apply(null, n))),
            isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
          : (t = new Date(Date.UTC.apply(null, arguments))),
        t
      );
    }
    function wt(e, t, n) {
      var s = 7 + t - n;
      return (-(7 + Yt(e, 0, s).getUTCDay() - t) % 7) + s - 1;
    }
    function vt(e, t, n, s, r) {
      var i,
        a,
        o = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + wt(e, s, r);
      return (
        o <= 0
          ? (a = yt((i = e - 1)) + o)
          : o > yt(e)
          ? ((i = e + 1), (a = o - yt(e)))
          : ((i = e), (a = o)),
        { year: i, dayOfYear: a }
      );
    }
    function kt(e, t, n) {
      var s,
        r,
        i = wt(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
      return (
        a < 1
          ? (s = a + Dt((r = e.year() - 1), t, n))
          : a > Dt(e.year(), t, n)
          ? ((s = a - Dt(e.year(), t, n)), (r = e.year() + 1))
          : ((r = e.year()), (s = a)),
        { week: s, year: r }
      );
    }
    function Dt(e, t, n) {
      var s = wt(e, t, n),
        r = wt(e + 1, t, n);
      return (yt(e) - s + r) / 7;
    }
    function Lt(e) {
      return kt(e, this._week.dow, this._week.doy).week;
    }
    U("w", ["ww", 2], "wo", "week"),
      U("W", ["WW", 2], "Wo", "isoWeek"),
      se("week", "w"),
      se("isoWeek", "W"),
      oe("week", 5),
      oe("isoWeek", 5),
      We("w", ke),
      We("ww", ke, ge),
      We("W", ke),
      We("WW", ke, ge),
      Ue(["w", "ww", "W", "WW"], function (e, t, n, s) {
        t[s.substr(0, 1)] = ce(e);
      });
    var St = { dow: 0, doy: 6 };
    function bt() {
      return this._week.dow;
    }
    function Tt() {
      return this._week.doy;
    }
    function Ot(e) {
      var t = this.localeData().week(this);
      return null == e ? t : this.add(7 * (e - t), "d");
    }
    function xt(e) {
      var t = kt(this, 1, 4).week;
      return null == e ? t : this.add(7 * (e - t), "d");
    }
    function Ht(e, t) {
      return "string" != typeof e
        ? e
        : isNaN(e)
        ? "number" == typeof (e = t.weekdaysParse(e))
          ? e
          : null
        : parseInt(e, 10);
    }
    function Pt(e, t) {
      return "string" == typeof e
        ? t.weekdaysParse(e) % 7 || 7
        : isNaN(e)
        ? null
        : e;
    }
    function jt(e, t) {
      return e.slice(t, 7).concat(e.slice(0, t));
    }
    U("d", 0, "do", "day"),
      U("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e);
      }),
      U("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e);
      }),
      U("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e);
      }),
      U("e", 0, 0, "weekday"),
      U("E", 0, 0, "isoWeekday"),
      se("day", "d"),
      se("weekday", "e"),
      se("isoWeekday", "E"),
      oe("day", 11),
      oe("weekday", 11),
      oe("isoWeekday", 11),
      We("d", ke),
      We("e", ke),
      We("E", ke),
      We("dd", function (e, t) {
        return t.weekdaysMinRegex(e);
      }),
      We("ddd", function (e, t) {
        return t.weekdaysShortRegex(e);
      }),
      We("dddd", function (e, t) {
        return t.weekdaysRegex(e);
      }),
      Ue(["dd", "ddd", "dddd"], function (e, t, n, s) {
        var r = n._locale.weekdaysParse(e, s, n._strict);
        null != r ? (t.d = r) : (M(n).invalidWeekday = e);
      }),
      Ue(["d", "e", "E"], function (e, t, n, s) {
        t[s] = ce(e);
      });
    var Nt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      Wt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Rt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      Ct = Ne,
      Et = Ne,
      Ft = Ne;
    function At(e, t) {
      var n = a(this._weekdays)
        ? this._weekdays
        : this._weekdays[
            e && !0 !== e && this._weekdays.isFormat.test(t)
              ? "format"
              : "standalone"
          ];
      return !0 === e ? jt(n, this._week.dow) : e ? n[e.day()] : n;
    }
    function Ut(e) {
      return !0 === e
        ? jt(this._weekdaysShort, this._week.dow)
        : e
        ? this._weekdaysShort[e.day()]
        : this._weekdaysShort;
    }
    function Vt(e) {
      return !0 === e
        ? jt(this._weekdaysMin, this._week.dow)
        : e
        ? this._weekdaysMin[e.day()]
        : this._weekdaysMin;
    }
    function It(e, t, n) {
      var s,
        r,
        i,
        a = e.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (
          this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            s = 0;
          s < 7;
          ++s
        )
          (i = f([2e3, 1]).day(s)),
            (this._minWeekdaysParse[s] = this.weekdaysMin(
              i,
              ""
            ).toLocaleLowerCase()),
            (this._shortWeekdaysParse[s] = this.weekdaysShort(
              i,
              ""
            ).toLocaleLowerCase()),
            (this._weekdaysParse[s] = this.weekdays(i, "").toLocaleLowerCase());
      return n
        ? "dddd" === t
          ? -1 !== (r = Ie.call(this._weekdaysParse, a))
            ? r
            : null
          : "ddd" === t
          ? -1 !== (r = Ie.call(this._shortWeekdaysParse, a))
            ? r
            : null
          : -1 !== (r = Ie.call(this._minWeekdaysParse, a))
          ? r
          : null
        : "dddd" === t
        ? -1 !== (r = Ie.call(this._weekdaysParse, a)) ||
          -1 !== (r = Ie.call(this._shortWeekdaysParse, a)) ||
          -1 !== (r = Ie.call(this._minWeekdaysParse, a))
          ? r
          : null
        : "ddd" === t
        ? -1 !== (r = Ie.call(this._shortWeekdaysParse, a)) ||
          -1 !== (r = Ie.call(this._weekdaysParse, a)) ||
          -1 !== (r = Ie.call(this._minWeekdaysParse, a))
          ? r
          : null
        : -1 !== (r = Ie.call(this._minWeekdaysParse, a)) ||
          -1 !== (r = Ie.call(this._weekdaysParse, a)) ||
          -1 !== (r = Ie.call(this._shortWeekdaysParse, a))
        ? r
        : null;
    }
    function Gt(e, t, n) {
      var s, r, i;
      if (this._weekdaysParseExact) return It.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((r = f([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
              "i"
            ))),
          this._weekdaysParse[s] ||
            ((i =
              "^" +
              this.weekdays(r, "") +
              "|^" +
              this.weekdaysShort(r, "") +
              "|^" +
              this.weekdaysMin(r, "")),
            (this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }
    function zt(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != e
        ? ((e = Ht(e, this.localeData())), this.add(e - t, "d"))
        : t;
    }
    function Zt(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, "d");
    }
    function $t(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        var t = Pt(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7);
      }
      return this.day() || 7;
    }
    function qt(e) {
      return this._weekdaysParseExact
        ? (d(this, "_weekdaysRegex") || Qt.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Ct),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }
    function Jt(e) {
      return this._weekdaysParseExact
        ? (d(this, "_weekdaysRegex") || Qt.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Et),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }
    function Bt(e) {
      return this._weekdaysParseExact
        ? (d(this, "_weekdaysRegex") || Qt.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ft),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }
    function Qt() {
      function e(e, t) {
        return t.length - e.length;
      }
      var t,
        n,
        s,
        r,
        i,
        a = [],
        o = [],
        d = [],
        u = [];
      for (t = 0; t < 7; t++)
        (n = f([2e3, 1]).day(t)),
          (s = Ee(this.weekdaysMin(n, ""))),
          (r = Ee(this.weekdaysShort(n, ""))),
          (i = Ee(this.weekdays(n, ""))),
          a.push(s),
          o.push(r),
          d.push(i),
          u.push(s),
          u.push(r),
          u.push(i);
      a.sort(e),
        o.sort(e),
        d.sort(e),
        u.sort(e),
        (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")),
        (this._weekdaysShortStrictRegex = new RegExp(
          "^(" + o.join("|") + ")",
          "i"
        )),
        (this._weekdaysMinStrictRegex = new RegExp(
          "^(" + a.join("|") + ")",
          "i"
        ));
    }
    function Xt() {
      return this.hours() % 12 || 12;
    }
    function Kt() {
      return this.hours() || 24;
    }
    function en(e, t) {
      U(e, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), t);
      });
    }
    function tn(e, t) {
      return t._meridiemParse;
    }
    function nn(e) {
      return "p" === (e + "").toLowerCase().charAt(0);
    }
    U("H", ["HH", 2], 0, "hour"),
      U("h", ["hh", 2], 0, Xt),
      U("k", ["kk", 2], 0, Kt),
      U("hmm", 0, 0, function () {
        return "" + Xt.apply(this) + R(this.minutes(), 2);
      }),
      U("hmmss", 0, 0, function () {
        return (
          "" + Xt.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2)
        );
      }),
      U("Hmm", 0, 0, function () {
        return "" + this.hours() + R(this.minutes(), 2);
      }),
      U("Hmmss", 0, 0, function () {
        return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2);
      }),
      en("a", !0),
      en("A", !1),
      se("hour", "h"),
      oe("hour", 13),
      We("a", tn),
      We("A", tn),
      We("H", ke),
      We("h", ke),
      We("k", ke),
      We("HH", ke, ge),
      We("hh", ke, ge),
      We("kk", ke, ge),
      We("hmm", De),
      We("hmmss", Le),
      We("Hmm", De),
      We("Hmmss", Le),
      Ae(["H", "HH"], $e),
      Ae(["k", "kk"], function (e, t, n) {
        var s = ce(e);
        t[$e] = 24 === s ? 0 : s;
      }),
      Ae(["a", "A"], function (e, t, n) {
        (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
      }),
      Ae(["h", "hh"], function (e, t, n) {
        (t[$e] = ce(e)), (M(n).bigHour = !0);
      }),
      Ae("hmm", function (e, t, n) {
        var s = e.length - 2;
        (t[$e] = ce(e.substr(0, s))),
          (t[qe] = ce(e.substr(s))),
          (M(n).bigHour = !0);
      }),
      Ae("hmmss", function (e, t, n) {
        var s = e.length - 4,
          r = e.length - 2;
        (t[$e] = ce(e.substr(0, s))),
          (t[qe] = ce(e.substr(s, 2))),
          (t[Je] = ce(e.substr(r))),
          (M(n).bigHour = !0);
      }),
      Ae("Hmm", function (e, t, n) {
        var s = e.length - 2;
        (t[$e] = ce(e.substr(0, s))), (t[qe] = ce(e.substr(s)));
      }),
      Ae("Hmmss", function (e, t, n) {
        var s = e.length - 4,
          r = e.length - 2;
        (t[$e] = ce(e.substr(0, s))),
          (t[qe] = ce(e.substr(s, 2))),
          (t[Je] = ce(e.substr(r)));
      });
    var sn = /[ap]\.?m?\.?/i,
      rn = he("Hours", !0);
    function an(e, t, n) {
      return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }
    var on,
      dn = {
        calendar: N,
        longDateFormat: Z,
        invalidDate: q,
        ordinal: B,
        dayOfMonthOrdinalParse: Q,
        relativeTime: K,
        months: tt,
        monthsShort: nt,
        week: St,
        weekdays: Nt,
        weekdaysMin: Rt,
        weekdaysShort: Wt,
        meridiemParse: sn,
      },
      un = {},
      ln = {};
    function cn(e, t) {
      var n,
        s = Math.min(e.length, t.length);
      for (n = 0; n < s; n += 1) if (e[n] !== t[n]) return n;
      return s;
    }
    function hn(e) {
      return e ? e.toLowerCase().replace("_", "-") : e;
    }
    function _n(e) {
      for (var t, n, s, r, i = 0; i < e.length; ) {
        for (
          t = (r = hn(e[i]).split("-")).length,
            n = (n = hn(e[i + 1])) ? n.split("-") : null;
          t > 0;

        ) {
          if ((s = fn(r.slice(0, t).join("-")))) return s;
          if (n && n.length >= t && cn(r, n) >= t - 1) break;
          t--;
        }
        i++;
      }
      return on;
    }
    function mn(e) {
      return null != e.match("^[^/\\\\]*$");
    }
    function fn(e) {
      var s = null;
      if (void 0 === un[e] && n && n.exports && mn(e))
        try {
          (s = on._abbr), t("./locale/" + e), yn(s);
        } catch (t) {
          un[e] = null;
        }
      return un[e];
    }
    function yn(e, t) {
      var n;
      return (
        e &&
          ((n = l(t) ? gn(e) : Mn(e, t))
            ? (on = n)
            : "undefined" != typeof console &&
              console.warn &&
              console.warn(
                "Locale " + e + " not found. Did you forget to load it?"
              )),
        on._abbr
      );
    }
    function Mn(e, t) {
      if (null !== t) {
        var n,
          s = dn;
        if (((t.abbr = e), null != un[e]))
          O(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          ),
            (s = un[e]._config);
        else if (null != t.parentLocale)
          if (null != un[t.parentLocale]) s = un[t.parentLocale]._config;
          else {
            if (null == (n = fn(t.parentLocale)))
              return (
                ln[t.parentLocale] || (ln[t.parentLocale] = []),
                ln[t.parentLocale].push({ name: e, config: t }),
                null
              );
            s = n._config;
          }
        return (
          (un[e] = new j(P(s, t))),
          ln[e] &&
            ln[e].forEach(function (e) {
              Mn(e.name, e.config);
            }),
          yn(e),
          un[e]
        );
      }
      return delete un[e], null;
    }
    function pn(e, t) {
      if (null != t) {
        var n,
          s,
          r = dn;
        null != un[e] && null != un[e].parentLocale
          ? un[e].set(P(un[e]._config, t))
          : (null != (s = fn(e)) && (r = s._config),
            (t = P(r, t)),
            null == s && (t.abbr = e),
            ((n = new j(t)).parentLocale = un[e]),
            (un[e] = n)),
          yn(e);
      } else
        null != un[e] &&
          (null != un[e].parentLocale
            ? ((un[e] = un[e].parentLocale), e === yn() && yn(e))
            : null != un[e] && delete un[e]);
      return un[e];
    }
    function gn(e) {
      var t;
      if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
        return on;
      if (!a(e)) {
        if ((t = fn(e))) return t;
        e = [e];
      }
      return _n(e);
    }
    function Yn() {
      return b(un);
    }
    function wn(e) {
      var t,
        n = e._a;
      return (
        n &&
          -2 === M(e).overflow &&
          ((t =
            n[ze] < 0 || n[ze] > 11
              ? ze
              : n[Ze] < 1 || n[Ze] > et(n[Ge], n[ze])
              ? Ze
              : n[$e] < 0 ||
                n[$e] > 24 ||
                (24 === n[$e] && (0 !== n[qe] || 0 !== n[Je] || 0 !== n[Be]))
              ? $e
              : n[qe] < 0 || n[qe] > 59
              ? qe
              : n[Je] < 0 || n[Je] > 59
              ? Je
              : n[Be] < 0 || n[Be] > 999
              ? Be
              : -1),
          M(e)._overflowDayOfYear && (t < Ge || t > Ze) && (t = Ze),
          M(e)._overflowWeeks && -1 === t && (t = Qe),
          M(e)._overflowWeekday && -1 === t && (t = Xe),
          (M(e).overflow = t)),
        e
      );
    }
    var vn =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      kn =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Dn = /Z|[+-]\d\d(?::?\d\d)?/,
      Ln = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1],
      ],
      Sn = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      bn = /^\/?Date\((-?\d+)/i,
      Tn =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      On = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      };
    function xn(e) {
      var t,
        n,
        s,
        r,
        i,
        a,
        o = e._i,
        d = vn.exec(o) || kn.exec(o),
        u = Ln.length,
        l = Sn.length;
      if (d) {
        for (M(e).iso = !0, t = 0, n = u; t < n; t++)
          if (Ln[t][1].exec(d[1])) {
            (r = Ln[t][0]), (s = !1 !== Ln[t][2]);
            break;
          }
        if (null == r) return void (e._isValid = !1);
        if (d[3]) {
          for (t = 0, n = l; t < n; t++)
            if (Sn[t][1].exec(d[3])) {
              i = (d[2] || " ") + Sn[t][0];
              break;
            }
          if (null == i) return void (e._isValid = !1);
        }
        if (!s && null != i) return void (e._isValid = !1);
        if (d[4]) {
          if (!Dn.exec(d[4])) return void (e._isValid = !1);
          a = "Z";
        }
        (e._f = r + (i || "") + (a || "")), Vn(e);
      } else e._isValid = !1;
    }
    function Hn(e, t, n, s, r, i) {
      var a = [
        Pn(e),
        nt.indexOf(t),
        parseInt(n, 10),
        parseInt(s, 10),
        parseInt(r, 10),
      ];
      return i && a.push(parseInt(i, 10)), a;
    }
    function Pn(e) {
      var t = parseInt(e, 10);
      return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
    }
    function jn(e) {
      return e
        .replace(/\([^()]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "");
    }
    function Nn(e, t, n) {
      return (
        !e ||
        Wt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
        ((M(n).weekdayMismatch = !0), (n._isValid = !1), !1)
      );
    }
    function Wn(e, t, n) {
      if (e) return On[e];
      if (t) return 0;
      var s = parseInt(n, 10),
        r = s % 100;
      return ((s - r) / 100) * 60 + r;
    }
    function Rn(e) {
      var t,
        n = Tn.exec(jn(e._i));
      if (n) {
        if (((t = Hn(n[4], n[3], n[2], n[5], n[6], n[7])), !Nn(n[1], t, e)))
          return;
        (e._a = t),
          (e._tzm = Wn(n[8], n[9], n[10])),
          (e._d = Yt.apply(null, e._a)),
          e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          (M(e).rfc2822 = !0);
      } else e._isValid = !1;
    }
    function Cn(e) {
      var t = bn.exec(e._i);
      null === t
        ? (xn(e),
          !1 === e._isValid &&
            (delete e._isValid,
            Rn(e),
            !1 === e._isValid &&
              (delete e._isValid,
              e._strict ? (e._isValid = !1) : r.createFromInputFallback(e))))
        : (e._d = new Date(+t[1]));
    }
    function En(e, t, n) {
      return null != e ? e : null != t ? t : n;
    }
    function Fn(e) {
      var t = new Date(r.now());
      return e._useUTC
        ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
        : [t.getFullYear(), t.getMonth(), t.getDate()];
    }
    function An(e) {
      var t,
        n,
        s,
        r,
        i,
        a = [];
      if (!e._d) {
        for (
          s = Fn(e),
            e._w && null == e._a[Ze] && null == e._a[ze] && Un(e),
            null != e._dayOfYear &&
              ((i = En(e._a[Ge], s[Ge])),
              (e._dayOfYear > yt(i) || 0 === e._dayOfYear) &&
                (M(e)._overflowDayOfYear = !0),
              (n = Yt(i, 0, e._dayOfYear)),
              (e._a[ze] = n.getUTCMonth()),
              (e._a[Ze] = n.getUTCDate())),
            t = 0;
          t < 3 && null == e._a[t];
          ++t
        )
          e._a[t] = a[t] = s[t];
        for (; t < 7; t++)
          e._a[t] = a[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
        24 === e._a[$e] &&
          0 === e._a[qe] &&
          0 === e._a[Je] &&
          0 === e._a[Be] &&
          ((e._nextDay = !0), (e._a[$e] = 0)),
          (e._d = (e._useUTC ? Yt : gt).apply(null, a)),
          (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
          null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
          e._nextDay && (e._a[$e] = 24),
          e._w &&
            void 0 !== e._w.d &&
            e._w.d !== r &&
            (M(e).weekdayMismatch = !0);
      }
    }
    function Un(e) {
      var t, n, s, r, i, a, o, d, u;
      null != (t = e._w).GG || null != t.W || null != t.E
        ? ((i = 1),
          (a = 4),
          (n = En(t.GG, e._a[Ge], kt(Bn(), 1, 4).year)),
          (s = En(t.W, 1)),
          ((r = En(t.E, 1)) < 1 || r > 7) && (d = !0))
        : ((i = e._locale._week.dow),
          (a = e._locale._week.doy),
          (u = kt(Bn(), i, a)),
          (n = En(t.gg, e._a[Ge], u.year)),
          (s = En(t.w, u.week)),
          null != t.d
            ? ((r = t.d) < 0 || r > 6) && (d = !0)
            : null != t.e
            ? ((r = t.e + i), (t.e < 0 || t.e > 6) && (d = !0))
            : (r = i)),
        s < 1 || s > Dt(n, i, a)
          ? (M(e)._overflowWeeks = !0)
          : null != d
          ? (M(e)._overflowWeekday = !0)
          : ((o = vt(n, s, r, i, a)),
            (e._a[Ge] = o.year),
            (e._dayOfYear = o.dayOfYear));
    }
    function Vn(e) {
      if (e._f !== r.ISO_8601)
        if (e._f !== r.RFC_2822) {
          (e._a = []), (M(e).empty = !0);
          var t,
            n,
            s,
            i,
            a,
            o,
            d,
            u = "" + e._i,
            l = u.length,
            c = 0;
          for (
            d = (s = z(e._f, e._locale).match(C) || []).length, t = 0;
            t < d;
            t++
          )
            (i = s[t]),
              (n = (u.match(Re(i, e)) || [])[0]) &&
                ((a = u.substr(0, u.indexOf(n))).length > 0 &&
                  M(e).unusedInput.push(a),
                (u = u.slice(u.indexOf(n) + n.length)),
                (c += n.length)),
              A[i]
                ? (n ? (M(e).empty = !1) : M(e).unusedTokens.push(i),
                  Ve(i, n, e))
                : e._strict && !n && M(e).unusedTokens.push(i);
          (M(e).charsLeftOver = l - c),
            u.length > 0 && M(e).unusedInput.push(u),
            e._a[$e] <= 12 &&
              !0 === M(e).bigHour &&
              e._a[$e] > 0 &&
              (M(e).bigHour = void 0),
            (M(e).parsedDateParts = e._a.slice(0)),
            (M(e).meridiem = e._meridiem),
            (e._a[$e] = In(e._locale, e._a[$e], e._meridiem)),
            null !== (o = M(e).era) &&
              (e._a[Ge] = e._locale.erasConvertYear(o, e._a[Ge])),
            An(e),
            wn(e);
        } else Rn(e);
      else xn(e);
    }
    function In(e, t, n) {
      var s;
      return null == n
        ? t
        : null != e.meridiemHour
        ? e.meridiemHour(t, n)
        : null != e.isPM
        ? ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0), t)
        : t;
    }
    function Gn(e) {
      var t,
        n,
        s,
        r,
        i,
        a,
        o = !1,
        d = e._f.length;
      if (0 === d)
        return (M(e).invalidFormat = !0), void (e._d = new Date(NaN));
      for (r = 0; r < d; r++)
        (i = 0),
          (a = !1),
          (t = v({}, e)),
          null != e._useUTC && (t._useUTC = e._useUTC),
          (t._f = e._f[r]),
          Vn(t),
          p(t) && (a = !0),
          (i += M(t).charsLeftOver),
          (i += 10 * M(t).unusedTokens.length),
          (M(t).score = i),
          o
            ? i < s && ((s = i), (n = t))
            : (null == s || i < s || a) && ((s = i), (n = t), a && (o = !0));
      m(e, n || t);
    }
    function zn(e) {
      if (!e._d) {
        var t = ie(e._i),
          n = void 0 === t.day ? t.date : t.day;
        (e._a = _(
          [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
          function (e) {
            return e && parseInt(e, 10);
          }
        )),
          An(e);
      }
    }
    function Zn(e) {
      var t = new k(wn($n(e)));
      return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
    }
    function $n(e) {
      var t = e._i,
        n = e._f;
      return (
        (e._locale = e._locale || gn(e._l)),
        null === t || (void 0 === n && "" === t)
          ? g({ nullInput: !0 })
          : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
            D(t)
              ? new k(wn(t))
              : (h(t) ? (e._d = t) : a(n) ? Gn(e) : n ? Vn(e) : qn(e),
                p(e) || (e._d = null),
                e))
      );
    }
    function qn(e) {
      var t = e._i;
      l(t)
        ? (e._d = new Date(r.now()))
        : h(t)
        ? (e._d = new Date(t.valueOf()))
        : "string" == typeof t
        ? Cn(e)
        : a(t)
        ? ((e._a = _(t.slice(0), function (e) {
            return parseInt(e, 10);
          })),
          An(e))
        : o(t)
        ? zn(e)
        : c(t)
        ? (e._d = new Date(t))
        : r.createFromInputFallback(e);
    }
    function Jn(e, t, n, s, r) {
      var i = {};
      return (
        (!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
        (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
        ((o(e) && u(e)) || (a(e) && 0 === e.length)) && (e = void 0),
        (i._isAMomentObject = !0),
        (i._useUTC = i._isUTC = r),
        (i._l = n),
        (i._i = e),
        (i._f = t),
        (i._strict = s),
        Zn(i)
      );
    }
    function Bn(e, t, n, s) {
      return Jn(e, t, n, s, !1);
    }
    (r.createFromInputFallback = S(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
      }
    )),
      (r.ISO_8601 = function () {}),
      (r.RFC_2822 = function () {});
    var Qn = S(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var e = Bn.apply(null, arguments);
          return this.isValid() && e.isValid() ? (e < this ? this : e) : g();
        }
      ),
      Xn = S(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var e = Bn.apply(null, arguments);
          return this.isValid() && e.isValid() ? (e > this ? this : e) : g();
        }
      );
    function Kn(e, t) {
      var n, s;
      if ((1 === t.length && a(t[0]) && (t = t[0]), !t.length)) return Bn();
      for (n = t[0], s = 1; s < t.length; ++s)
        (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
      return n;
    }
    function es() {
      return Kn("isBefore", [].slice.call(arguments, 0));
    }
    function ts() {
      return Kn("isAfter", [].slice.call(arguments, 0));
    }
    var ns = function () {
        return Date.now ? Date.now() : +new Date();
      },
      ss = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond",
      ];
    function rs(e) {
      var t,
        n,
        s = !1,
        r = ss.length;
      for (t in e)
        if (d(e, t) && (-1 === Ie.call(ss, t) || (null != e[t] && isNaN(e[t]))))
          return !1;
      for (n = 0; n < r; ++n)
        if (e[ss[n]]) {
          if (s) return !1;
          parseFloat(e[ss[n]]) !== ce(e[ss[n]]) && (s = !0);
        }
      return !0;
    }
    function is() {
      return this._isValid;
    }
    function as() {
      return Os(NaN);
    }
    function os(e) {
      var t = ie(e),
        n = t.year || 0,
        s = t.quarter || 0,
        r = t.month || 0,
        i = t.week || t.isoWeek || 0,
        a = t.day || 0,
        o = t.hour || 0,
        d = t.minute || 0,
        u = t.second || 0,
        l = t.millisecond || 0;
      (this._isValid = rs(t)),
        (this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60),
        (this._days = +a + 7 * i),
        (this._months = +r + 3 * s + 12 * n),
        (this._data = {}),
        (this._locale = gn()),
        this._bubble();
    }
    function ds(e) {
      return e instanceof os;
    }
    function us(e) {
      return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function ls(e, t, n) {
      var s,
        r = Math.min(e.length, t.length),
        i = Math.abs(e.length - t.length),
        a = 0;
      for (s = 0; s < r; s++)
        ((n && e[s] !== t[s]) || (!n && ce(e[s]) !== ce(t[s]))) && a++;
      return a + i;
    }
    function cs(e, t) {
      U(e, 0, 0, function () {
        var e = this.utcOffset(),
          n = "+";
        return (
          e < 0 && ((e = -e), (n = "-")),
          n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
        );
      });
    }
    cs("Z", ":"),
      cs("ZZ", ""),
      We("Z", Pe),
      We("ZZ", Pe),
      Ae(["Z", "ZZ"], function (e, t, n) {
        (n._useUTC = !0), (n._tzm = _s(Pe, e));
      });
    var hs = /([\+\-]|\d\d)/gi;
    function _s(e, t) {
      var n,
        s,
        r = (t || "").match(e);
      return null === r
        ? null
        : 0 ===
          (s =
            60 *
              (n = ((r[r.length - 1] || []) + "").match(hs) || ["-", 0, 0])[1] +
            ce(n[2]))
        ? 0
        : "+" === n[0]
        ? s
        : -s;
    }
    function ms(e, t) {
      var n, s;
      return t._isUTC
        ? ((n = t.clone()),
          (s = (D(e) || h(e) ? e.valueOf() : Bn(e).valueOf()) - n.valueOf()),
          n._d.setTime(n._d.valueOf() + s),
          r.updateOffset(n, !1),
          n)
        : Bn(e).local();
    }
    function fs(e) {
      return -Math.round(e._d.getTimezoneOffset());
    }
    function ys(e, t, n) {
      var s,
        i = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        if ("string" == typeof e) {
          if (null === (e = _s(Pe, e))) return this;
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return (
          !this._isUTC && t && (s = fs(this)),
          (this._offset = e),
          (this._isUTC = !0),
          null != s && this.add(s, "m"),
          i !== e &&
            (!t || this._changeInProgress
              ? Ns(this, Os(e - i, "m"), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                r.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this
        );
      }
      return this._isUTC ? i : fs(this);
    }
    function Ms(e, t) {
      return null != e
        ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
        : -this.utcOffset();
    }
    function ps(e) {
      return this.utcOffset(0, e);
    }
    function gs(e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(fs(this), "m")),
        this
      );
    }
    function Ys() {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
        var e = _s(He, this._i);
        null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
      }
      return this;
    }
    function ws(e) {
      return (
        !!this.isValid() &&
        ((e = e ? Bn(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }
    function vs() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }
    function ks() {
      if (!l(this._isDSTShifted)) return this._isDSTShifted;
      var e,
        t = {};
      return (
        v(t, this),
        (t = $n(t))._a
          ? ((e = t._isUTC ? f(t._a) : Bn(t._a)),
            (this._isDSTShifted = this.isValid() && ls(t._a, e.toArray()) > 0))
          : (this._isDSTShifted = !1),
        this._isDSTShifted
      );
    }
    function Ds() {
      return !!this.isValid() && !this._isUTC;
    }
    function Ls() {
      return !!this.isValid() && this._isUTC;
    }
    function Ss() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    r.updateOffset = function () {};
    var bs = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
      Ts =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function Os(e, t) {
      var n,
        s,
        r,
        i = e,
        a = null;
      return (
        ds(e)
          ? (i = { ms: e._milliseconds, d: e._days, M: e._months })
          : c(e) || !isNaN(+e)
          ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
          : (a = bs.exec(e))
          ? ((n = "-" === a[1] ? -1 : 1),
            (i = {
              y: 0,
              d: ce(a[Ze]) * n,
              h: ce(a[$e]) * n,
              m: ce(a[qe]) * n,
              s: ce(a[Je]) * n,
              ms: ce(us(1e3 * a[Be])) * n,
            }))
          : (a = Ts.exec(e))
          ? ((n = "-" === a[1] ? -1 : 1),
            (i = {
              y: xs(a[2], n),
              M: xs(a[3], n),
              w: xs(a[4], n),
              d: xs(a[5], n),
              h: xs(a[6], n),
              m: xs(a[7], n),
              s: xs(a[8], n),
            }))
          : null == i
          ? (i = {})
          : "object" == typeof i &&
            ("from" in i || "to" in i) &&
            ((r = Ps(Bn(i.from), Bn(i.to))),
            ((i = {}).ms = r.milliseconds),
            (i.M = r.months)),
        (s = new os(i)),
        ds(e) && d(e, "_locale") && (s._locale = e._locale),
        ds(e) && d(e, "_isValid") && (s._isValid = e._isValid),
        s
      );
    }
    function xs(e, t) {
      var n = e && parseFloat(e.replace(",", "."));
      return (isNaN(n) ? 0 : n) * t;
    }
    function Hs(e, t) {
      var n = {};
      return (
        (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        (n.milliseconds = +t - +e.clone().add(n.months, "M")),
        n
      );
    }
    function Ps(e, t) {
      var n;
      return e.isValid() && t.isValid()
        ? ((t = ms(t, e)),
          e.isBefore(t)
            ? (n = Hs(e, t))
            : (((n = Hs(t, e)).milliseconds = -n.milliseconds),
              (n.months = -n.months)),
          n)
        : { milliseconds: 0, months: 0 };
    }
    function js(e, t) {
      return function (n, s) {
        var r;
        return (
          null === s ||
            isNaN(+s) ||
            (O(
              t,
              "moment()." +
                t +
                "(period, number) is deprecated. Please use moment()." +
                t +
                "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            ),
            (r = n),
            (n = s),
            (s = r)),
          Ns(this, Os(n, s), e),
          this
        );
      };
    }
    function Ns(e, t, n, s) {
      var i = t._milliseconds,
        a = us(t._days),
        o = us(t._months);
      e.isValid() &&
        ((s = null == s || s),
        o && lt(e, _e(e, "Month") + o * n),
        a && me(e, "Date", _e(e, "Date") + a * n),
        i && e._d.setTime(e._d.valueOf() + i * n),
        s && r.updateOffset(e, a || o));
    }
    (Os.fn = os.prototype), (Os.invalid = as);
    var Ws = js(1, "add"),
      Rs = js(-1, "subtract");
    function Cs(e) {
      return "string" == typeof e || e instanceof String;
    }
    function Es(e) {
      return D(e) || h(e) || Cs(e) || c(e) || As(e) || Fs(e) || null == e;
    }
    function Fs(e) {
      var t,
        n,
        s = o(e) && !u(e),
        r = !1,
        i = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms",
        ],
        a = i.length;
      for (t = 0; t < a; t += 1) (n = i[t]), (r = r || d(e, n));
      return s && r;
    }
    function As(e) {
      var t = a(e),
        n = !1;
      return (
        t &&
          (n =
            0 ===
            e.filter(function (t) {
              return !c(t) && Cs(e);
            }).length),
        t && n
      );
    }
    function Us(e) {
      var t,
        n,
        s = o(e) && !u(e),
        r = !1,
        i = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse",
        ];
      for (t = 0; t < i.length; t += 1) (n = i[t]), (r = r || d(e, n));
      return s && r;
    }
    function Vs(e, t) {
      var n = e.diff(t, "days", !0);
      return n < -6
        ? "sameElse"
        : n < -1
        ? "lastWeek"
        : n < 0
        ? "lastDay"
        : n < 1
        ? "sameDay"
        : n < 2
        ? "nextDay"
        : n < 7
        ? "nextWeek"
        : "sameElse";
    }
    function Is(e, t) {
      1 === arguments.length &&
        (arguments[0]
          ? Es(arguments[0])
            ? ((e = arguments[0]), (t = void 0))
            : Us(arguments[0]) && ((t = arguments[0]), (e = void 0))
          : ((e = void 0), (t = void 0)));
      var n = e || Bn(),
        s = ms(n, this).startOf("day"),
        i = r.calendarFormat(this, s) || "sameElse",
        a = t && (x(t[i]) ? t[i].call(this, n) : t[i]);
      return this.format(a || this.localeData().calendar(i, this, Bn(n)));
    }
    function Gs() {
      return new k(this);
    }
    function zs(e, t) {
      var n = D(e) ? e : Bn(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = re(t) || "millisecond")
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      );
    }
    function Zs(e, t) {
      var n = D(e) ? e : Bn(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = re(t) || "millisecond")
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      );
    }
    function $s(e, t, n, s) {
      var r = D(e) ? e : Bn(e),
        i = D(t) ? t : Bn(t);
      return (
        !!(this.isValid() && r.isValid() && i.isValid()) &&
        ("(" === (s = s || "()")[0]
          ? this.isAfter(r, n)
          : !this.isBefore(r, n)) &&
        (")" === s[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
      );
    }
    function qs(e, t) {
      var n,
        s = D(e) ? e : Bn(e);
      return (
        !(!this.isValid() || !s.isValid()) &&
        ("millisecond" === (t = re(t) || "millisecond")
          ? this.valueOf() === s.valueOf()
          : ((n = s.valueOf()),
            this.clone().startOf(t).valueOf() <= n &&
              n <= this.clone().endOf(t).valueOf()))
      );
    }
    function Js(e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }
    function Bs(e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }
    function Qs(e, t, n) {
      var s, r, i;
      if (!this.isValid()) return NaN;
      if (!(s = ms(e, this)).isValid()) return NaN;
      switch (((r = 6e4 * (s.utcOffset() - this.utcOffset())), (t = re(t)))) {
        case "year":
          i = Xs(this, s) / 12;
          break;
        case "month":
          i = Xs(this, s);
          break;
        case "quarter":
          i = Xs(this, s) / 3;
          break;
        case "second":
          i = (this - s) / 1e3;
          break;
        case "minute":
          i = (this - s) / 6e4;
          break;
        case "hour":
          i = (this - s) / 36e5;
          break;
        case "day":
          i = (this - s - r) / 864e5;
          break;
        case "week":
          i = (this - s - r) / 6048e5;
          break;
        default:
          i = this - s;
      }
      return n ? i : le(i);
    }
    function Xs(e, t) {
      if (e.date() < t.date()) return -Xs(t, e);
      var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, "months");
      return (
        -(
          n +
          (t - s < 0
            ? (t - s) / (s - e.clone().add(n - 1, "months"))
            : (t - s) / (e.clone().add(n + 1, "months") - s))
        ) || 0
      );
    }
    function Ks() {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function er(e) {
      if (!this.isValid()) return null;
      var t = !0 !== e,
        n = t ? this.clone().utc() : this;
      return n.year() < 0 || n.year() > 9999
        ? G(
            n,
            t
              ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
              : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          )
        : x(Date.prototype.toISOString)
        ? t
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
              .toISOString()
              .replace("Z", G(n, "Z"))
        : G(
            n,
            t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
    }
    function tr() {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var e,
        t,
        n,
        s,
        r = "moment",
        i = "";
      return (
        this.isLocal() ||
          ((r = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
          (i = "Z")),
        (e = "[" + r + '("]'),
        (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
        (n = "-MM-DD[T]HH:mm:ss.SSS"),
        (s = i + '[")]'),
        this.format(e + t + n + s)
      );
    }
    function nr(e) {
      e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
      var t = G(this, e);
      return this.localeData().postformat(t);
    }
    function sr(e, t) {
      return this.isValid() && ((D(e) && e.isValid()) || Bn(e).isValid())
        ? Os({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function rr(e) {
      return this.from(Bn(), e);
    }
    function ir(e, t) {
      return this.isValid() && ((D(e) && e.isValid()) || Bn(e).isValid())
        ? Os({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }
    function ar(e) {
      return this.to(Bn(), e);
    }
    function or(e) {
      var t;
      return void 0 === e
        ? this._locale._abbr
        : (null != (t = gn(e)) && (this._locale = t), this);
    }
    (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
      (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var dr = S(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (e) {
        return void 0 === e ? this.localeData() : this.locale(e);
      }
    );
    function ur() {
      return this._locale;
    }
    var lr = 1e3,
      cr = 60 * lr,
      hr = 60 * cr,
      _r = 3506328 * hr;
    function mr(e, t) {
      return ((e % t) + t) % t;
    }
    function fr(e, t, n) {
      return e < 100 && e >= 0
        ? new Date(e + 400, t, n) - _r
        : new Date(e, t, n).valueOf();
    }
    function yr(e, t, n) {
      return e < 100 && e >= 0
        ? Date.UTC(e + 400, t, n) - _r
        : Date.UTC(e, t, n);
    }
    function Mr(e) {
      var t, n;
      if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
        return this;
      switch (((n = this._isUTC ? yr : fr), e)) {
        case "year":
          t = n(this.year(), 0, 1);
          break;
        case "quarter":
          t = n(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case "month":
          t = n(this.year(), this.month(), 1);
          break;
        case "week":
          t = n(this.year(), this.month(), this.date() - this.weekday());
          break;
        case "isoWeek":
          t = n(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date());
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t -= mr(t + (this._isUTC ? 0 : this.utcOffset() * cr), hr));
          break;
        case "minute":
          (t = this._d.valueOf()), (t -= mr(t, cr));
          break;
        case "second":
          (t = this._d.valueOf()), (t -= mr(t, lr));
      }
      return this._d.setTime(t), r.updateOffset(this, !0), this;
    }
    function pr(e) {
      var t, n;
      if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
        return this;
      switch (((n = this._isUTC ? yr : fr), e)) {
        case "year":
          t = n(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
          break;
        case "month":
          t = n(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          t =
            n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case "isoWeek":
          t =
            n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t +=
              hr - mr(t + (this._isUTC ? 0 : this.utcOffset() * cr), hr) - 1);
          break;
        case "minute":
          (t = this._d.valueOf()), (t += cr - mr(t, cr) - 1);
          break;
        case "second":
          (t = this._d.valueOf()), (t += lr - mr(t, lr) - 1);
      }
      return this._d.setTime(t), r.updateOffset(this, !0), this;
    }
    function gr() {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }
    function Yr() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function wr() {
      return new Date(this.valueOf());
    }
    function vr() {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }
    function kr() {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }
    function Dr() {
      return this.isValid() ? this.toISOString() : null;
    }
    function Lr() {
      return p(this);
    }
    function Sr() {
      return m({}, M(this));
    }
    function br() {
      return M(this).overflow;
    }
    function Tr() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }
    function Or(e, t) {
      var n,
        s,
        i,
        a = this._eras || gn("en")._eras;
      for (n = 0, s = a.length; n < s; ++n)
        switch (
          ("string" == typeof a[n].since &&
            ((i = r(a[n].since).startOf("day")), (a[n].since = i.valueOf())),
          typeof a[n].until)
        ) {
          case "undefined":
            a[n].until = 1 / 0;
            break;
          case "string":
            (i = r(a[n].until).startOf("day").valueOf()),
              (a[n].until = i.valueOf());
        }
      return a;
    }
    function xr(e, t, n) {
      var s,
        r,
        i,
        a,
        o,
        d = this.eras();
      for (e = e.toUpperCase(), s = 0, r = d.length; s < r; ++s)
        if (
          ((i = d[s].name.toUpperCase()),
          (a = d[s].abbr.toUpperCase()),
          (o = d[s].narrow.toUpperCase()),
          n)
        )
          switch (t) {
            case "N":
            case "NN":
            case "NNN":
              if (a === e) return d[s];
              break;
            case "NNNN":
              if (i === e) return d[s];
              break;
            case "NNNNN":
              if (o === e) return d[s];
          }
        else if ([i, a, o].indexOf(e) >= 0) return d[s];
    }
    function Hr(e, t) {
      var n = e.since <= e.until ? 1 : -1;
      return void 0 === t
        ? r(e.since).year()
        : r(e.since).year() + (t - e.offset) * n;
    }
    function Pr() {
      var e,
        t,
        n,
        s = this.localeData().eras();
      for (e = 0, t = s.length; e < t; ++e) {
        if (
          ((n = this.clone().startOf("day").valueOf()),
          s[e].since <= n && n <= s[e].until)
        )
          return s[e].name;
        if (s[e].until <= n && n <= s[e].since) return s[e].name;
      }
      return "";
    }
    function jr() {
      var e,
        t,
        n,
        s = this.localeData().eras();
      for (e = 0, t = s.length; e < t; ++e) {
        if (
          ((n = this.clone().startOf("day").valueOf()),
          s[e].since <= n && n <= s[e].until)
        )
          return s[e].narrow;
        if (s[e].until <= n && n <= s[e].since) return s[e].narrow;
      }
      return "";
    }
    function Nr() {
      var e,
        t,
        n,
        s = this.localeData().eras();
      for (e = 0, t = s.length; e < t; ++e) {
        if (
          ((n = this.clone().startOf("day").valueOf()),
          s[e].since <= n && n <= s[e].until)
        )
          return s[e].abbr;
        if (s[e].until <= n && n <= s[e].since) return s[e].abbr;
      }
      return "";
    }
    function Wr() {
      var e,
        t,
        n,
        s,
        i = this.localeData().eras();
      for (e = 0, t = i.length; e < t; ++e)
        if (
          ((n = i[e].since <= i[e].until ? 1 : -1),
          (s = this.clone().startOf("day").valueOf()),
          (i[e].since <= s && s <= i[e].until) ||
            (i[e].until <= s && s <= i[e].since))
        )
          return (this.year() - r(i[e].since).year()) * n + i[e].offset;
      return this.year();
    }
    function Rr(e) {
      return (
        d(this, "_erasNameRegex") || Ir.call(this),
        e ? this._erasNameRegex : this._erasRegex
      );
    }
    function Cr(e) {
      return (
        d(this, "_erasAbbrRegex") || Ir.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
      );
    }
    function Er(e) {
      return (
        d(this, "_erasNarrowRegex") || Ir.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
      );
    }
    function Fr(e, t) {
      return t.erasAbbrRegex(e);
    }
    function Ar(e, t) {
      return t.erasNameRegex(e);
    }
    function Ur(e, t) {
      return t.erasNarrowRegex(e);
    }
    function Vr(e, t) {
      return t._eraYearOrdinalRegex || Oe;
    }
    function Ir() {
      var e,
        t,
        n = [],
        s = [],
        r = [],
        i = [],
        a = this.eras();
      for (e = 0, t = a.length; e < t; ++e)
        s.push(Ee(a[e].name)),
          n.push(Ee(a[e].abbr)),
          r.push(Ee(a[e].narrow)),
          i.push(Ee(a[e].name)),
          i.push(Ee(a[e].abbr)),
          i.push(Ee(a[e].narrow));
      (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
        (this._erasNameRegex = new RegExp("^(" + s.join("|") + ")", "i")),
        (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
        (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
    }
    function Gr(e, t) {
      U(0, [e, e.length], 0, t);
    }
    function zr(e) {
      return Qr.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function Zr(e) {
      return Qr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function $r() {
      return Dt(this.year(), 1, 4);
    }
    function qr() {
      return Dt(this.isoWeekYear(), 1, 4);
    }
    function Jr() {
      var e = this.localeData()._week;
      return Dt(this.year(), e.dow, e.doy);
    }
    function Br() {
      var e = this.localeData()._week;
      return Dt(this.weekYear(), e.dow, e.doy);
    }
    function Qr(e, t, n, s, r) {
      var i;
      return null == e
        ? kt(this, s, r).year
        : (t > (i = Dt(e, s, r)) && (t = i), Xr.call(this, e, t, n, s, r));
    }
    function Xr(e, t, n, s, r) {
      var i = vt(e, t, n, s, r),
        a = Yt(i.year, 0, i.dayOfYear);
      return (
        this.year(a.getUTCFullYear()),
        this.month(a.getUTCMonth()),
        this.date(a.getUTCDate()),
        this
      );
    }
    function Kr(e) {
      return null == e
        ? Math.ceil((this.month() + 1) / 3)
        : this.month(3 * (e - 1) + (this.month() % 3));
    }
    U("N", 0, 0, "eraAbbr"),
      U("NN", 0, 0, "eraAbbr"),
      U("NNN", 0, 0, "eraAbbr"),
      U("NNNN", 0, 0, "eraName"),
      U("NNNNN", 0, 0, "eraNarrow"),
      U("y", ["y", 1], "yo", "eraYear"),
      U("y", ["yy", 2], 0, "eraYear"),
      U("y", ["yyy", 3], 0, "eraYear"),
      U("y", ["yyyy", 4], 0, "eraYear"),
      We("N", Fr),
      We("NN", Fr),
      We("NNN", Fr),
      We("NNNN", Ar),
      We("NNNNN", Ur),
      Ae(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, s) {
        var r = n._locale.erasParse(e, s, n._strict);
        r ? (M(n).era = r) : (M(n).invalidEra = e);
      }),
      We("y", Oe),
      We("yy", Oe),
      We("yyy", Oe),
      We("yyyy", Oe),
      We("yo", Vr),
      Ae(["y", "yy", "yyy", "yyyy"], Ge),
      Ae(["yo"], function (e, t, n, s) {
        var r;
        n._locale._eraYearOrdinalRegex &&
          (r = e.match(n._locale._eraYearOrdinalRegex)),
          n._locale.eraYearOrdinalParse
            ? (t[Ge] = n._locale.eraYearOrdinalParse(e, r))
            : (t[Ge] = parseInt(e, 10));
      }),
      U(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100;
      }),
      U(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }),
      Gr("gggg", "weekYear"),
      Gr("ggggg", "weekYear"),
      Gr("GGGG", "isoWeekYear"),
      Gr("GGGGG", "isoWeekYear"),
      se("weekYear", "gg"),
      se("isoWeekYear", "GG"),
      oe("weekYear", 1),
      oe("isoWeekYear", 1),
      We("G", xe),
      We("g", xe),
      We("GG", ke, ge),
      We("gg", ke, ge),
      We("GGGG", be, we),
      We("gggg", be, we),
      We("GGGGG", Te, ve),
      We("ggggg", Te, ve),
      Ue(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
        t[s.substr(0, 2)] = ce(e);
      }),
      Ue(["gg", "GG"], function (e, t, n, s) {
        t[s] = r.parseTwoDigitYear(e);
      }),
      U("Q", 0, "Qo", "quarter"),
      se("quarter", "Q"),
      oe("quarter", 7),
      We("Q", pe),
      Ae("Q", function (e, t) {
        t[ze] = 3 * (ce(e) - 1);
      }),
      U("D", ["DD", 2], "Do", "date"),
      se("date", "D"),
      oe("date", 9),
      We("D", ke),
      We("DD", ke, ge),
      We("Do", function (e, t) {
        return e
          ? t._dayOfMonthOrdinalParse || t._ordinalParse
          : t._dayOfMonthOrdinalParseLenient;
      }),
      Ae(["D", "DD"], Ze),
      Ae("Do", function (e, t) {
        t[Ze] = ce(e.match(ke)[0]);
      });
    var ei = he("Date", !0);
    function ti(e) {
      var t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == e ? t : this.add(e - t, "d");
    }
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
      se("dayOfYear", "DDD"),
      oe("dayOfYear", 4),
      We("DDD", Se),
      We("DDDD", Ye),
      Ae(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = ce(e);
      }),
      U("m", ["mm", 2], 0, "minute"),
      se("minute", "m"),
      oe("minute", 14),
      We("m", ke),
      We("mm", ke, ge),
      Ae(["m", "mm"], qe);
    var ni = he("Minutes", !1);
    U("s", ["ss", 2], 0, "second"),
      se("second", "s"),
      oe("second", 15),
      We("s", ke),
      We("ss", ke, ge),
      Ae(["s", "ss"], Je);
    var si,
      ri,
      ii = he("Seconds", !1);
    for (
      U("S", 0, 0, function () {
        return ~~(this.millisecond() / 100);
      }),
        U(0, ["SS", 2], 0, function () {
          return ~~(this.millisecond() / 10);
        }),
        U(0, ["SSS", 3], 0, "millisecond"),
        U(0, ["SSSS", 4], 0, function () {
          return 10 * this.millisecond();
        }),
        U(0, ["SSSSS", 5], 0, function () {
          return 100 * this.millisecond();
        }),
        U(0, ["SSSSSS", 6], 0, function () {
          return 1e3 * this.millisecond();
        }),
        U(0, ["SSSSSSS", 7], 0, function () {
          return 1e4 * this.millisecond();
        }),
        U(0, ["SSSSSSSS", 8], 0, function () {
          return 1e5 * this.millisecond();
        }),
        U(0, ["SSSSSSSSS", 9], 0, function () {
          return 1e6 * this.millisecond();
        }),
        se("millisecond", "ms"),
        oe("millisecond", 16),
        We("S", Se, pe),
        We("SS", Se, ge),
        We("SSS", Se, Ye),
        si = "SSSS";
      si.length <= 9;
      si += "S"
    )
      We(si, Oe);
    function ai(e, t) {
      t[Be] = ce(1e3 * ("0." + e));
    }
    for (si = "S"; si.length <= 9; si += "S") Ae(si, ai);
    function oi() {
      return this._isUTC ? "UTC" : "";
    }
    function di() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    (ri = he("Milliseconds", !1)),
      U("z", 0, 0, "zoneAbbr"),
      U("zz", 0, 0, "zoneName");
    var ui = k.prototype;
    function li(e) {
      return Bn(1e3 * e);
    }
    function ci() {
      return Bn.apply(null, arguments).parseZone();
    }
    function hi(e) {
      return e;
    }
    (ui.add = Ws),
      (ui.calendar = Is),
      (ui.clone = Gs),
      (ui.diff = Qs),
      (ui.endOf = pr),
      (ui.format = nr),
      (ui.from = sr),
      (ui.fromNow = rr),
      (ui.to = ir),
      (ui.toNow = ar),
      (ui.get = fe),
      (ui.invalidAt = br),
      (ui.isAfter = zs),
      (ui.isBefore = Zs),
      (ui.isBetween = $s),
      (ui.isSame = qs),
      (ui.isSameOrAfter = Js),
      (ui.isSameOrBefore = Bs),
      (ui.isValid = Lr),
      (ui.lang = dr),
      (ui.locale = or),
      (ui.localeData = ur),
      (ui.max = Xn),
      (ui.min = Qn),
      (ui.parsingFlags = Sr),
      (ui.set = ye),
      (ui.startOf = Mr),
      (ui.subtract = Rs),
      (ui.toArray = vr),
      (ui.toObject = kr),
      (ui.toDate = wr),
      (ui.toISOString = er),
      (ui.inspect = tr),
      "undefined" != typeof Symbol &&
        null != Symbol.for &&
        (ui[Symbol.for("nodejs.util.inspect.custom")] = function () {
          return "Moment<" + this.format() + ">";
        }),
      (ui.toJSON = Dr),
      (ui.toString = Ks),
      (ui.unix = Yr),
      (ui.valueOf = gr),
      (ui.creationData = Tr),
      (ui.eraName = Pr),
      (ui.eraNarrow = jr),
      (ui.eraAbbr = Nr),
      (ui.eraYear = Wr),
      (ui.year = Mt),
      (ui.isLeapYear = pt),
      (ui.weekYear = zr),
      (ui.isoWeekYear = Zr),
      (ui.quarter = ui.quarters = Kr),
      (ui.month = ct),
      (ui.daysInMonth = ht),
      (ui.week = ui.weeks = Ot),
      (ui.isoWeek = ui.isoWeeks = xt),
      (ui.weeksInYear = Jr),
      (ui.weeksInWeekYear = Br),
      (ui.isoWeeksInYear = $r),
      (ui.isoWeeksInISOWeekYear = qr),
      (ui.date = ei),
      (ui.day = ui.days = zt),
      (ui.weekday = Zt),
      (ui.isoWeekday = $t),
      (ui.dayOfYear = ti),
      (ui.hour = ui.hours = rn),
      (ui.minute = ui.minutes = ni),
      (ui.second = ui.seconds = ii),
      (ui.millisecond = ui.milliseconds = ri),
      (ui.utcOffset = ys),
      (ui.utc = ps),
      (ui.local = gs),
      (ui.parseZone = Ys),
      (ui.hasAlignedHourOffset = ws),
      (ui.isDST = vs),
      (ui.isLocal = Ds),
      (ui.isUtcOffset = Ls),
      (ui.isUtc = Ss),
      (ui.isUTC = Ss),
      (ui.zoneAbbr = oi),
      (ui.zoneName = di),
      (ui.dates = S("dates accessor is deprecated. Use date instead.", ei)),
      (ui.months = S("months accessor is deprecated. Use month instead", ct)),
      (ui.years = S("years accessor is deprecated. Use year instead", Mt)),
      (ui.zone = S(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        Ms
      )),
      (ui.isDSTShifted = S(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        ks
      ));
    var _i = j.prototype;
    function mi(e, t, n, s) {
      var r = gn(),
        i = f().set(s, t);
      return r[n](i, e);
    }
    function fi(e, t, n) {
      if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
        return mi(e, t, n, "month");
      var s,
        r = [];
      for (s = 0; s < 12; s++) r[s] = mi(e, s, n, "month");
      return r;
    }
    function yi(e, t, n, s) {
      "boolean" == typeof e
        ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
        : ((n = t = e),
          (e = !1),
          c(t) && ((n = t), (t = void 0)),
          (t = t || ""));
      var r,
        i = gn(),
        a = e ? i._week.dow : 0,
        o = [];
      if (null != n) return mi(t, (n + a) % 7, s, "day");
      for (r = 0; r < 7; r++) o[r] = mi(t, (r + a) % 7, s, "day");
      return o;
    }
    function Mi(e, t) {
      return fi(e, t, "months");
    }
    function pi(e, t) {
      return fi(e, t, "monthsShort");
    }
    function gi(e, t, n) {
      return yi(e, t, n, "weekdays");
    }
    function Yi(e, t, n) {
      return yi(e, t, n, "weekdaysShort");
    }
    function wi(e, t, n) {
      return yi(e, t, n, "weekdaysMin");
    }
    (_i.calendar = W),
      (_i.longDateFormat = $),
      (_i.invalidDate = J),
      (_i.ordinal = X),
      (_i.preparse = hi),
      (_i.postformat = hi),
      (_i.relativeTime = ee),
      (_i.pastFuture = te),
      (_i.set = H),
      (_i.eras = Or),
      (_i.erasParse = xr),
      (_i.erasConvertYear = Hr),
      (_i.erasAbbrRegex = Cr),
      (_i.erasNameRegex = Rr),
      (_i.erasNarrowRegex = Er),
      (_i.months = at),
      (_i.monthsShort = ot),
      (_i.monthsParse = ut),
      (_i.monthsRegex = mt),
      (_i.monthsShortRegex = _t),
      (_i.week = Lt),
      (_i.firstDayOfYear = Tt),
      (_i.firstDayOfWeek = bt),
      (_i.weekdays = At),
      (_i.weekdaysMin = Vt),
      (_i.weekdaysShort = Ut),
      (_i.weekdaysParse = Gt),
      (_i.weekdaysRegex = qt),
      (_i.weekdaysShortRegex = Jt),
      (_i.weekdaysMinRegex = Bt),
      (_i.isPM = nn),
      (_i.meridiem = an),
      yn("en", {
        eras: [
          {
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD",
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC",
          },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 === ce((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
      }),
      (r.lang = S("moment.lang is deprecated. Use moment.locale instead.", yn)),
      (r.langData = S(
        "moment.langData is deprecated. Use moment.localeData instead.",
        gn
      ));
    var vi = Math.abs;
    function ki() {
      var e = this._data;
      return (
        (this._milliseconds = vi(this._milliseconds)),
        (this._days = vi(this._days)),
        (this._months = vi(this._months)),
        (e.milliseconds = vi(e.milliseconds)),
        (e.seconds = vi(e.seconds)),
        (e.minutes = vi(e.minutes)),
        (e.hours = vi(e.hours)),
        (e.months = vi(e.months)),
        (e.years = vi(e.years)),
        this
      );
    }
    function Di(e, t, n, s) {
      var r = Os(t, n);
      return (
        (e._milliseconds += s * r._milliseconds),
        (e._days += s * r._days),
        (e._months += s * r._months),
        e._bubble()
      );
    }
    function Li(e, t) {
      return Di(this, e, t, 1);
    }
    function Si(e, t) {
      return Di(this, e, t, -1);
    }
    function bi(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function Ti() {
      var e,
        t,
        n,
        s,
        r,
        i = this._milliseconds,
        a = this._days,
        o = this._months,
        d = this._data;
      return (
        (i >= 0 && a >= 0 && o >= 0) ||
          (i <= 0 && a <= 0 && o <= 0) ||
          ((i += 864e5 * bi(xi(o) + a)), (a = 0), (o = 0)),
        (d.milliseconds = i % 1e3),
        (e = le(i / 1e3)),
        (d.seconds = e % 60),
        (t = le(e / 60)),
        (d.minutes = t % 60),
        (n = le(t / 60)),
        (d.hours = n % 24),
        (a += le(n / 24)),
        (o += r = le(Oi(a))),
        (a -= bi(xi(r))),
        (s = le(o / 12)),
        (o %= 12),
        (d.days = a),
        (d.months = o),
        (d.years = s),
        this
      );
    }
    function Oi(e) {
      return (4800 * e) / 146097;
    }
    function xi(e) {
      return (146097 * e) / 4800;
    }
    function Hi(e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        s = this._milliseconds;
      if ("month" === (e = re(e)) || "quarter" === e || "year" === e)
        switch (((t = this._days + s / 864e5), (n = this._months + Oi(t)), e)) {
          case "month":
            return n;
          case "quarter":
            return n / 3;
          case "year":
            return n / 12;
        }
      else
        switch (((t = this._days + Math.round(xi(this._months))), e)) {
          case "week":
            return t / 7 + s / 6048e5;
          case "day":
            return t + s / 864e5;
          case "hour":
            return 24 * t + s / 36e5;
          case "minute":
            return 1440 * t + s / 6e4;
          case "second":
            return 86400 * t + s / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + s;
          default:
            throw new Error("Unknown unit " + e);
        }
    }
    function Pi() {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * ce(this._months / 12)
        : NaN;
    }
    function ji(e) {
      return function () {
        return this.as(e);
      };
    }
    var Ni = ji("ms"),
      Wi = ji("s"),
      Ri = ji("m"),
      Ci = ji("h"),
      Ei = ji("d"),
      Fi = ji("w"),
      Ai = ji("M"),
      Ui = ji("Q"),
      Vi = ji("y");
    function Ii() {
      return Os(this);
    }
    function Gi(e) {
      return (e = re(e)), this.isValid() ? this[e + "s"]() : NaN;
    }
    function zi(e) {
      return function () {
        return this.isValid() ? this._data[e] : NaN;
      };
    }
    var Zi = zi("milliseconds"),
      $i = zi("seconds"),
      qi = zi("minutes"),
      Ji = zi("hours"),
      Bi = zi("days"),
      Qi = zi("months"),
      Xi = zi("years");
    function Ki() {
      return le(this.days() / 7);
    }
    var ea = Math.round,
      ta = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
    function na(e, t, n, s, r) {
      return r.relativeTime(t || 1, !!n, e, s);
    }
    function sa(e, t, n, s) {
      var r = Os(e).abs(),
        i = ea(r.as("s")),
        a = ea(r.as("m")),
        o = ea(r.as("h")),
        d = ea(r.as("d")),
        u = ea(r.as("M")),
        l = ea(r.as("w")),
        c = ea(r.as("y")),
        h =
          (i <= n.ss && ["s", i]) ||
          (i < n.s && ["ss", i]) ||
          (a <= 1 && ["m"]) ||
          (a < n.m && ["mm", a]) ||
          (o <= 1 && ["h"]) ||
          (o < n.h && ["hh", o]) ||
          (d <= 1 && ["d"]) ||
          (d < n.d && ["dd", d]);
      return (
        null != n.w && (h = h || (l <= 1 && ["w"]) || (l < n.w && ["ww", l])),
        ((h = h ||
          (u <= 1 && ["M"]) ||
          (u < n.M && ["MM", u]) ||
          (c <= 1 && ["y"]) || ["yy", c])[2] = t),
        (h[3] = +e > 0),
        (h[4] = s),
        na.apply(null, h)
      );
    }
    function ra(e) {
      return void 0 === e ? ea : "function" == typeof e && ((ea = e), !0);
    }
    function ia(e, t) {
      return (
        void 0 !== ta[e] &&
        (void 0 === t ? ta[e] : ((ta[e] = t), "s" === e && (ta.ss = t - 1), !0))
      );
    }
    function aa(e, t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var n,
        s,
        r = !1,
        i = ta;
      return (
        "object" == typeof e && ((t = e), (e = !1)),
        "boolean" == typeof e && (r = e),
        "object" == typeof t &&
          ((i = Object.assign({}, ta, t)),
          null != t.s && null == t.ss && (i.ss = t.s - 1)),
        (s = sa(this, !r, i, (n = this.localeData()))),
        r && (s = n.pastFuture(+this, s)),
        n.postformat(s)
      );
    }
    var oa = Math.abs;
    function da(e) {
      return (e > 0) - (e < 0) || +e;
    }
    function ua() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var e,
        t,
        n,
        s,
        r,
        i,
        a,
        o,
        d = oa(this._milliseconds) / 1e3,
        u = oa(this._days),
        l = oa(this._months),
        c = this.asSeconds();
      return c
        ? ((e = le(d / 60)),
          (t = le(e / 60)),
          (d %= 60),
          (e %= 60),
          (n = le(l / 12)),
          (l %= 12),
          (s = d ? d.toFixed(3).replace(/\.?0+$/, "") : ""),
          (r = c < 0 ? "-" : ""),
          (i = da(this._months) !== da(c) ? "-" : ""),
          (a = da(this._days) !== da(c) ? "-" : ""),
          (o = da(this._milliseconds) !== da(c) ? "-" : ""),
          r +
            "P" +
            (n ? i + n + "Y" : "") +
            (l ? i + l + "M" : "") +
            (u ? a + u + "D" : "") +
            (t || e || d ? "T" : "") +
            (t ? o + t + "H" : "") +
            (e ? o + e + "M" : "") +
            (d ? o + s + "S" : ""))
        : "P0D";
    }
    var la = os.prototype;
    return (
      (la.isValid = is),
      (la.abs = ki),
      (la.add = Li),
      (la.subtract = Si),
      (la.as = Hi),
      (la.asMilliseconds = Ni),
      (la.asSeconds = Wi),
      (la.asMinutes = Ri),
      (la.asHours = Ci),
      (la.asDays = Ei),
      (la.asWeeks = Fi),
      (la.asMonths = Ai),
      (la.asQuarters = Ui),
      (la.asYears = Vi),
      (la.valueOf = Pi),
      (la._bubble = Ti),
      (la.clone = Ii),
      (la.get = Gi),
      (la.milliseconds = Zi),
      (la.seconds = $i),
      (la.minutes = qi),
      (la.hours = Ji),
      (la.days = Bi),
      (la.weeks = Ki),
      (la.months = Qi),
      (la.years = Xi),
      (la.humanize = aa),
      (la.toISOString = ua),
      (la.toString = ua),
      (la.toJSON = ua),
      (la.locale = or),
      (la.localeData = ur),
      (la.toIsoString = S(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        ua
      )),
      (la.lang = dr),
      U("X", 0, 0, "unix"),
      U("x", 0, 0, "valueOf"),
      We("x", xe),
      We("X", je),
      Ae("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e));
      }),
      Ae("x", function (e, t, n) {
        n._d = new Date(ce(e));
      }),
      //! moment.js
      (r.version = "2.29.4"),
      i(Bn),
      (r.fn = ui),
      (r.min = es),
      (r.max = ts),
      (r.now = ns),
      (r.utc = f),
      (r.unix = li),
      (r.months = Mi),
      (r.isDate = h),
      (r.locale = yn),
      (r.invalid = g),
      (r.duration = Os),
      (r.isMoment = D),
      (r.weekdays = gi),
      (r.parseZone = ci),
      (r.localeData = gn),
      (r.isDuration = ds),
      (r.monthsShort = pi),
      (r.weekdaysMin = wi),
      (r.defineLocale = Mn),
      (r.updateLocale = pn),
      (r.locales = Yn),
      (r.weekdaysShort = Yi),
      (r.normalizeUnits = re),
      (r.relativeTimeRounding = ra),
      (r.relativeTimeThreshold = ia),
      (r.calendarFormat = Vs),
      (r.prototype = ui),
      (r.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM",
      }),
      r
    );
  })()),
    (s = function (e) {
      //! moment.js locale configuration
      var t = {
          format:
            "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split(
              "_"
            ),
          standalone:
            "ledna_Ãºnora_bÅ™ezna_dubna_kvÄ›tna_Äervna_Äervence_srpna_zÃ¡Å™Ã­_Å™Ã­jna_listopadu_prosince".split(
              "_"
            ),
        },
        n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
        s = [
          /^led/i,
          /^Ãºno/i,
          /^bÅ™e/i,
          /^dub/i,
          /^kvÄ›/i,
          /^(Ävn|Äerven$|Äervna)/i,
          /^(Ävc|Äervenec|Äervence)/i,
          /^srp/i,
          /^zÃ¡Å™/i,
          /^Å™Ã­j/i,
          /^lis/i,
          /^pro/i,
        ],
        r =
          /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;
      function i(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
      }
      function a(e, t, n, s) {
        var r = e + " ";
        switch (n) {
          case "s":
            return t || s ? "pÃ¡r sekund" : "pÃ¡r sekundami";
          case "ss":
            return t || s ? r + (i(e) ? "sekundy" : "sekund") : r + "sekundami";
          case "m":
            return t ? "minuta" : s ? "minutu" : "minutou";
          case "mm":
            return t || s ? r + (i(e) ? "minuty" : "minut") : r + "minutami";
          case "h":
            return t ? "hodina" : s ? "hodinu" : "hodinou";
          case "hh":
            return t || s ? r + (i(e) ? "hodiny" : "hodin") : r + "hodinami";
          case "d":
            return t || s ? "den" : "dnem";
          case "dd":
            return t || s ? r + (i(e) ? "dny" : "dnÃ­") : r + "dny";
          case "M":
            return t || s ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
          case "MM":
            return t || s
              ? r + (i(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯")
              : r + "mÄ›sÃ­ci";
          case "y":
            return t || s ? "rok" : "rokem";
          case "yy":
            return t || s ? r + (i(e) ? "roky" : "let") : r + "lety";
        }
      }
      return e.defineLocale("cs", {
        months: t,
        monthsShort: n,
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex:
          /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
        monthsParse: s,
        longMonthsParse: s,
        shortMonthsParse: s,
        weekdays:
          "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
        weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
        weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
          l: "D. M. YYYY",
        },
        calendar: {
          sameDay: "[dnes v] LT",
          nextDay: "[zÃ­tra v] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v nedÄ›li v] LT";
              case 1:
              case 2:
                return "[v] dddd [v] LT";
              case 3:
                return "[ve stÅ™edu v] LT";
              case 4:
                return "[ve Ätvrtek v] LT";
              case 5:
                return "[v pÃ¡tek v] LT";
              case 6:
                return "[v sobotu v] LT";
            }
          },
          lastDay: "[vÄera v] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulou nedÄ›li v] LT";
              case 1:
              case 2:
                return "[minulÃ©] dddd [v] LT";
              case 3:
                return "[minulou stÅ™edu v] LT";
              case 4:
              case 5:
                return "[minulÃ½] dddd [v] LT";
              case 6:
                return "[minulou sobotu v] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "pÅ™ed %s",
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    }),
    s(r.exports),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("da", {
        months:
          "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split(
          "_"
        ),
        weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
        weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "pÃ¥ dddd [kl.] LT",
          lastDay: "[i gÃ¥r kl.] LT",
          lastWeek: "[i] dddd[s kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "fÃ¥ sekunder",
          ss: "%d sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en mÃ¥ned",
          MM: "%d mÃ¥neder",
          y: "et Ã¥r",
          yy: "%d Ã¥r",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      //! moment.js locale configuration
      function t(e, t, n, s) {
        var r = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          w: ["eine Woche", "einer Woche"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? r[n][0] : r[n][1];
      }
      return e.defineLocale("de", {
        months:
          "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          w: t,
          ww: "%d Wochen",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      //! moment.js locale configuration
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        s = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i,
        ],
        r =
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
        monthsShort: function (e, s) {
          return e ? (/-MMM-/.test(s) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: s,
        longMonthsParse: s,
        shortMonthsParse: s,
        weekdays:
          "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
        weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un dÃ­a",
          dd: "%d dÃ­as",
          w: "una semana",
          ww: "%d semanas",
          M: "un mes",
          MM: "%d meses",
          y: "un aÃ±o",
          yy: "%d aÃ±os",
        },
        dayOfMonthOrdinalParse: /\d{1,2}Âº/,
        ordinal: "%dÂº",
        week: { dow: 1, doy: 4 },
        invalidDate: "Fecha invÃ¡lida",
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      //! moment.js locale configuration
      var t =
          "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(
            " "
          ),
        n = [
          "nolla",
          "yhden",
          "kahden",
          "kolmen",
          "neljÃ¤n",
          "viiden",
          "kuuden",
          t[7],
          t[8],
          t[9],
        ];
      function s(e, s, r, i) {
        var a = "";
        switch (r) {
          case "s":
            return i ? "muutaman sekunnin" : "muutama sekunti";
          case "ss":
            a = i ? "sekunnin" : "sekuntia";
            break;
          case "m":
            return i ? "minuutin" : "minuutti";
          case "mm":
            a = i ? "minuutin" : "minuuttia";
            break;
          case "h":
            return i ? "tunnin" : "tunti";
          case "hh":
            a = i ? "tunnin" : "tuntia";
            break;
          case "d":
            return i ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
          case "dd":
            a = i ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
            break;
          case "M":
            return i ? "kuukauden" : "kuukausi";
          case "MM":
            a = i ? "kuukauden" : "kuukautta";
            break;
          case "y":
            return i ? "vuoden" : "vuosi";
          case "yy":
            a = i ? "vuoden" : "vuotta";
        }
        return (
          (a =
            (function (e, s) {
              return e < 10 ? (s ? n[e] : t[e]) : e;
            })(e, i) +
            " " +
            a),
          a
        );
      }
      return e.defineLocale("fi", {
        months:
          "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
            "_"
          ),
        monthsShort:
          "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split(
            "_"
          ),
        weekdays:
          "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
            "_"
          ),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm",
        },
        calendar: {
          sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s pÃ¤Ã¤stÃ¤",
          past: "%s sitten",
          s: s,
          ss: s,
          m: s,
          mm: s,
          h: s,
          hh: s,
          d: s,
          dd: s,
          M: s,
          MM: s,
          y: s,
          yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      //! moment.js locale configuration
      var t =
          /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?|janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
        n = [
          /^janv/i,
          /^fÃ©vr/i,
          /^mars/i,
          /^avr/i,
          /^mai/i,
          /^juin/i,
          /^juil/i,
          /^aoÃ»t/i,
          /^sept/i,
          /^oct/i,
          /^nov/i,
          /^dÃ©c/i,
        ];
      return e.defineLocale("fr", {
        months:
          "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split(
            "_"
          ),
        monthsShort:
          "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split(
            "_"
          ),
        monthsRegex: t,
        monthsShortRegex: t,
        monthsStrictRegex:
          /^(janvier|fÃ©vrier|mars|avril|mai|juin|juillet|aoÃ»t|septembre|octobre|novembre|dÃ©cembre)/i,
        monthsShortStrictRegex:
          /(janv\.?|fÃ©vr\.?|mars|avr\.?|mai|juin|juil\.?|aoÃ»t|sept\.?|oct\.?|nov\.?|dÃ©c\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourdâ€™hui Ã ] LT",
          nextDay: "[Demain Ã ] LT",
          nextWeek: "dddd [Ã ] LT",
          lastDay: "[Hier Ã ] LT",
          lastWeek: "dddd [dernier Ã ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          w: "une semaine",
          ww: "%d semaines",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + (1 === e ? "er" : "");
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e");
          }
        },
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("it", {
        months:
          "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
            "_"
          ),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
          "_"
        ),
        weekdays:
          "domenica_lunedÃ¬_martedÃ¬_mercoledÃ¬_giovedÃ¬_venerdÃ¬_sabato".split(
            "_"
          ),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: function () {
            return (
              "[Oggi a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          nextDay: function () {
            return (
              "[Domani a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          nextWeek: function () {
            return (
              "dddd [a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          lastDay: function () {
            return (
              "[Ieri a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          lastWeek: function () {
            return 0 === this.day()
              ? "[La scorsa] dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
              : "[Lo scorso] dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "tra %s",
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          w: "una settimana",
          ww: "%d settimane",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni",
        },
        dayOfMonthOrdinalParse: /\d{1,2}Âº/,
        ordinal: "%dÂº",
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("ja", {
        eras: [
          {
            since: "2019-05-01",
            offset: 1,
            name: "ä»¤å’Œ",
            narrow: "ã‹¿",
            abbr: "R",
          },
          {
            since: "1989-01-08",
            until: "2019-04-30",
            offset: 1,
            name: "å¹³æˆ",
            narrow: "ã»",
            abbr: "H",
          },
          {
            since: "1926-12-25",
            until: "1989-01-07",
            offset: 1,
            name: "æ˜­å’Œ",
            narrow: "ã¼",
            abbr: "S",
          },
          {
            since: "1912-07-30",
            until: "1926-12-24",
            offset: 1,
            name: "å¤§æ­£",
            narrow: "ã½",
            abbr: "T",
          },
          {
            since: "1873-01-01",
            until: "1912-07-29",
            offset: 6,
            name: "æ˜Žæ²»",
            narrow: "ã¾",
            abbr: "M",
          },
          {
            since: "0001-01-01",
            until: "1873-12-31",
            offset: 1,
            name: "è¥¿æš¦",
            narrow: "AD",
            abbr: "AD",
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "ç´€å…ƒå‰",
            narrow: "BC",
            abbr: "BC",
          },
        ],
        eraYearOrdinalRegex: /(å…ƒ|\d+)å¹´/,
        eraYearOrdinalParse: function (e, t) {
          return "å…ƒ" === t[1] ? 1 : parseInt(t[1] || e, 10);
        },
        months:
          "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split(
            "_"
          ),
        monthsShort:
          "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split(
            "_"
          ),
        weekdays:
          "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split(
            "_"
          ),
        weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
        weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYYå¹´MæœˆDæ—¥",
          LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
          LLLL: "YYYYå¹´MæœˆDæ—¥ dddd HH:mm",
          l: "YYYY/MM/DD",
          ll: "YYYYå¹´MæœˆDæ—¥",
          lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
          llll: "YYYYå¹´MæœˆDæ—¥(ddd) HH:mm",
        },
        meridiemParse: /åˆå‰|åˆå¾Œ/i,
        isPM: function (e) {
          return "åˆå¾Œ" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "åˆå‰" : "åˆå¾Œ";
        },
        calendar: {
          sameDay: "[ä»Šæ—¥] LT",
          nextDay: "[æ˜Žæ—¥] LT",
          nextWeek: function (e) {
            return e.week() !== this.week() ? "[æ¥é€±]dddd LT" : "dddd LT";
          },
          lastDay: "[æ˜¨æ—¥] LT",
          lastWeek: function (e) {
            return this.week() !== e.week() ? "[å…ˆé€±]dddd LT" : "dddd LT";
          },
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}æ—¥/,
        ordinal: function (e, t) {
          switch (t) {
            case "y":
              return 1 === e ? "å…ƒå¹´" : e + "å¹´";
            case "d":
            case "D":
            case "DDD":
              return e + "æ—¥";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%så¾Œ",
          past: "%så‰",
          s: "æ•°ç§’",
          ss: "%dç§’",
          m: "1åˆ†",
          mm: "%dåˆ†",
          h: "1æ™‚é–“",
          hh: "%dæ™‚é–“",
          d: "1æ—¥",
          dd: "%dæ—¥",
          M: "1ãƒ¶æœˆ",
          MM: "%dãƒ¶æœˆ",
          y: "1å¹´",
          yy: "%då¹´",
        },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("ko", {
        months:
          "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split(
            "_"
          ),
        monthsShort:
          "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split(
            "_"
          ),
        weekdays:
          "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split(
            "_"
          ),
        weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
        weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYYë…„ MMMM Dì¼",
          LLL: "YYYYë…„ MMMM Dì¼ A h:mm",
          LLLL: "YYYYë…„ MMMM Dì¼ dddd A h:mm",
          l: "YYYY.MM.DD.",
          ll: "YYYYë…„ MMMM Dì¼",
          lll: "YYYYë…„ MMMM Dì¼ A h:mm",
          llll: "YYYYë…„ MMMM Dì¼ dddd A h:mm",
        },
        calendar: {
          sameDay: "ì˜¤ëŠ˜ LT",
          nextDay: "ë‚´ì¼ LT",
          nextWeek: "dddd LT",
          lastDay: "ì–´ì œ LT",
          lastWeek: "ì§€ë‚œì£¼ dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s í›„",
          past: "%s ì „",
          s: "ëª‡ ì´ˆ",
          ss: "%dì´ˆ",
          m: "1ë¶„",
          mm: "%dë¶„",
          h: "í•œ ì‹œê°„",
          hh: "%dì‹œê°„",
          d: "í•˜ë£¨",
          dd: "%dì¼",
          M: "í•œ ë‹¬",
          MM: "%dë‹¬",
          y: "ì¼ ë…„",
          yy: "%dë…„",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ì¼|ì›”|ì£¼)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "ì¼";
            case "M":
              return e + "ì›”";
            case "w":
            case "W":
              return e + "ì£¼";
            default:
              return e;
          }
        },
        meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
        isPM: function (e) {
          return "ì˜¤í›„" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ì˜¤ì „" : "ì˜¤í›„";
        },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("nb", {
        months:
          "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split(
          "_"
        ),
        weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
        weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i gÃ¥r kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          w: "en uke",
          ww: "%d uker",
          M: "en mÃ¥ned",
          MM: "%d mÃ¥neder",
          y: "ett Ã¥r",
          yy: "%d Ã¥r",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      //! moment.js locale configuration
      var t =
          "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        s = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i,
        ],
        r =
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale("nl", {
        months:
          "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: function (e, s) {
          return e ? (/-MMM-/.test(s) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex:
          /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: s,
        longMonthsParse: s,
        shortMonthsParse: s,
        weekdays:
          "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
            "_"
          ),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "Ã©Ã©n minuut",
          mm: "%d minuten",
          h: "Ã©Ã©n uur",
          hh: "%d uur",
          d: "Ã©Ã©n dag",
          dd: "%d dagen",
          w: "Ã©Ã©n week",
          ww: "%d weken",
          M: "Ã©Ã©n maand",
          MM: "%d maanden",
          y: "Ã©Ã©n jaar",
          yy: "%d jaar",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("pt", {
        months:
          "janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
            "_"
          ),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
          "_"
        ),
        weekdays:
          "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split(
            "_"
          ),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
        weekdaysMin: "Do_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hoje Ã s] LT",
          nextDay: "[AmanhÃ£ Ã s] LT",
          nextWeek: "dddd [Ã s] LT",
          lastDay: "[Ontem Ã s] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day()
              ? "[Ãšltimo] dddd [Ã s] LT"
              : "[Ãšltima] dddd [Ã s] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "em %s",
          past: "hÃ¡ %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          w: "uma semana",
          ww: "%d semanas",
          M: "um mÃªs",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos",
        },
        dayOfMonthOrdinalParse: /\d{1,2}Âº/,
        ordinal: "%dÂº",
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      function t(e, t, n) {
        var s, r;
        return "m" === n
          ? t
            ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"
            : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ"
          : e +
              " " +
              ((s = +e),
              (r = {
                ss: t
                  ? "ÑÐµÐºÑƒÐ½Ð´Ð°_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´"
                  : "ÑÐµÐºÑƒÐ½Ð´Ñƒ_ÑÐµÐºÑƒÐ½Ð´Ñ‹_ÑÐµÐºÑƒÐ½Ð´",
                mm: t
                  ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚"
                  : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
                hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
                dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
                ww: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð½ÐµÐ´ÐµÐ»Ð¸_Ð½ÐµÐ´ÐµÐ»ÑŒ",
                MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
                yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚",
              }[n].split("_")),
              s % 10 == 1 && s % 100 != 11
                ? r[0]
                : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20)
                ? r[1]
                : r[2]);
      }
      var n = [
        /^ÑÐ½Ð²/i,
        /^Ñ„ÐµÐ²/i,
        /^Ð¼Ð°Ñ€/i,
        /^Ð°Ð¿Ñ€/i,
        /^Ð¼Ð°[Ð¹Ñ]/i,
        /^Ð¸ÑŽÐ½/i,
        /^Ð¸ÑŽÐ»/i,
        /^Ð°Ð²Ð³/i,
        /^ÑÐµÐ½/i,
        /^Ð¾ÐºÑ‚/i,
        /^Ð½Ð¾Ñ/i,
        /^Ð´ÐµÐº/i,
      ];
      return e.defineLocale("ru", {
        months: {
          format:
            "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split(
              "_"
            ),
          standalone:
            "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split(
              "_"
            ),
        },
        monthsShort: {
          format:
            "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split(
              "_"
            ),
          standalone:
            "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split(
              "_"
            ),
        },
        weekdays: {
          standalone:
            "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split(
              "_"
            ),
          format:
            "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split(
              "_"
            ),
          isFormat:
            /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?] ?dddd/,
        },
        weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
        weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex:
          /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
        monthsShortRegex:
          /^(ÑÐ½Ð²Ð°Ñ€[ÑŒÑ]|ÑÐ½Ð²\.?|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑŒÑ]|Ñ„ÐµÐ²Ñ€?\.?|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¼Ð°Ñ€\.?|Ð°Ð¿Ñ€ÐµÐ»[ÑŒÑ]|Ð°Ð¿Ñ€\.?|Ð¼Ð°[Ð¹Ñ]|Ð¸ÑŽÐ½[ÑŒÑ]|Ð¸ÑŽÐ½\.?|Ð¸ÑŽÐ»[ÑŒÑ]|Ð¸ÑŽÐ»\.?|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð°Ð²Ð³\.?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑŒÑ]|ÑÐµÐ½Ñ‚?\.?|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑŒÑ]|Ð¾ÐºÑ‚\.?|Ð½Ð¾ÑÐ±Ñ€[ÑŒÑ]|Ð½Ð¾ÑÐ±?\.?|Ð´ÐµÐºÐ°Ð±Ñ€[ÑŒÑ]|Ð´ÐµÐº\.?)/i,
        monthsStrictRegex:
          /^(ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ])/i,
        monthsShortStrictRegex:
          /^(ÑÐ½Ð²\.|Ñ„ÐµÐ²Ñ€?\.|Ð¼Ð°Ñ€[Ñ‚.]|Ð°Ð¿Ñ€\.|Ð¼Ð°[ÑÐ¹]|Ð¸ÑŽÐ½[ÑŒÑ.]|Ð¸ÑŽÐ»[ÑŒÑ.]|Ð°Ð²Ð³\.|ÑÐµÐ½Ñ‚?\.|Ð¾ÐºÑ‚\.|Ð½Ð¾ÑÐ±?\.|Ð´ÐµÐº\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY Ð³.",
          LLL: "D MMMM YYYY Ð³., H:mm",
          LLLL: "dddd, D MMMM YYYY Ð³., H:mm",
        },
        calendar: {
          sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ, Ð²] LT",
          nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð°, Ð²] LT",
          lastDay: "[Ð’Ñ‡ÐµÑ€Ð°, Ð²] LT",
          nextWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day()
                ? "[Ð’Ð¾] dddd, [Ð²] LT"
                : "[Ð’] dddd, [Ð²] LT";
            switch (this.day()) {
              case 0:
                return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd, [Ð²] LT";
              case 1:
              case 2:
              case 4:
                return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd, [Ð²] LT";
              case 3:
              case 5:
              case 6:
                return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd, [Ð²] LT";
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day()
                ? "[Ð’Ð¾] dddd, [Ð²] LT"
                : "[Ð’] dddd, [Ð²] LT";
            switch (this.day()) {
              case 0:
                return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd, [Ð²] LT";
              case 1:
              case 2:
              case 4:
                return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd, [Ð²] LT";
              case 3:
              case 5:
              case 6:
                return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd, [Ð²] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "Ñ‡ÐµÑ€ÐµÐ· %s",
          past: "%s Ð½Ð°Ð·Ð°Ð´",
          s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
          ss: t,
          m: t,
          mm: t,
          h: "Ñ‡Ð°Ñ",
          hh: t,
          d: "Ð´ÐµÐ½ÑŒ",
          dd: t,
          w: "Ð½ÐµÐ´ÐµÐ»Ñ",
          ww: t,
          M: "Ð¼ÐµÑÑÑ†",
          MM: t,
          y: "Ð³Ð¾Ð´",
          yy: t,
        },
        meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
        isPM: function (e) {
          return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "Ð½Ð¾Ñ‡Ð¸"
            : e < 12
            ? "ÑƒÑ‚Ñ€Ð°"
            : e < 17
            ? "Ð´Ð½Ñ"
            : "Ð²ÐµÑ‡ÐµÑ€Ð°";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
              return e + "-Ð¹";
            case "D":
              return e + "-Ð³Ð¾";
            case "w":
            case "W":
              return e + "-Ñ";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("sv", {
        months:
          "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split(
          "_"
        ),
        weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
        weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[IgÃ¥r] LT",
          nextWeek: "[PÃ¥] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "fÃ¶r %s sedan",
          s: "nÃ¥gra sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en mÃ¥nad",
          MM: "%d mÃ¥nader",
          y: "ett Ã¥r",
          yy: "%d Ã¥r",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("zh-cn", {
        months:
          "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split(
            "_"
          ),
        monthsShort:
          "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split(
            "_"
          ),
        weekdays:
          "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split(
            "_"
          ),
        weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split(
          "_"
        ),
        weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYYå¹´MæœˆDæ—¥",
          LLL: "YYYYå¹´MæœˆDæ—¥Ahç‚¹mmåˆ†",
          LLLL: "YYYYå¹´MæœˆDæ—¥ddddAhç‚¹mmåˆ†",
          l: "YYYY/M/D",
          ll: "YYYYå¹´MæœˆDæ—¥",
          lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
          llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
        },
        meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t
              ? e
              : "ä¸‹åˆ" === t || "æ™šä¸Š" === t
              ? e + 12
              : e >= 11
              ? e
              : e + 12
          );
        },
        meridiem: function (e, t, n) {
          var s = 100 * e + t;
          return s < 600
            ? "å‡Œæ™¨"
            : s < 900
            ? "æ—©ä¸Š"
            : s < 1130
            ? "ä¸Šåˆ"
            : s < 1230
            ? "ä¸­åˆ"
            : s < 1800
            ? "ä¸‹åˆ"
            : "æ™šä¸Š";
        },
        calendar: {
          sameDay: "[ä»Šå¤©]LT",
          nextDay: "[æ˜Žå¤©]LT",
          nextWeek: function (e) {
            return e.week() !== this.week() ? "[ä¸‹]dddLT" : "[æœ¬]dddLT";
          },
          lastDay: "[æ˜¨å¤©]LT",
          lastWeek: function (e) {
            return this.week() !== e.week() ? "[ä¸Š]dddLT" : "[æœ¬]dddLT";
          },
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "æ—¥";
            case "M":
              return e + "æœˆ";
            case "w":
            case "W":
              return e + "å‘¨";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%såŽ",
          past: "%så‰",
          s: "å‡ ç§’",
          ss: "%d ç§’",
          m: "1 åˆ†é’Ÿ",
          mm: "%d åˆ†é’Ÿ",
          h: "1 å°æ—¶",
          hh: "%d å°æ—¶",
          d: "1 å¤©",
          dd: "%d å¤©",
          w: "1 å‘¨",
          ww: "%d å‘¨",
          M: "1 ä¸ªæœˆ",
          MM: "%d ä¸ªæœˆ",
          y: "1 å¹´",
          yy: "%d å¹´",
        },
        week: { dow: 1, doy: 4 },
      });
    }),
    (function (e, t) {
      t(r.exports);
    })(0, function (e) {
      return e.defineLocale("zh-tw", {
        months:
          "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split(
            "_"
          ),
        monthsShort:
          "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split(
            "_"
          ),
        weekdays:
          "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split(
            "_"
          ),
        weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split(
          "_"
        ),
        weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYYå¹´MæœˆDæ—¥",
          LLL: "YYYYå¹´MæœˆDæ—¥ HH:mm",
          LLLL: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYYå¹´MæœˆDæ—¥",
          lll: "YYYYå¹´MæœˆDæ—¥ HH:mm",
          llll: "YYYYå¹´MæœˆDæ—¥dddd HH:mm",
        },
        meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t
              ? e
              : "ä¸­åˆ" === t
              ? e >= 11
                ? e
                : e + 12
              : "ä¸‹åˆ" === t || "æ™šä¸Š" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          var s = 100 * e + t;
          return s < 600
            ? "å‡Œæ™¨"
            : s < 900
            ? "æ—©ä¸Š"
            : s < 1130
            ? "ä¸Šåˆ"
            : s < 1230
            ? "ä¸­åˆ"
            : s < 1800
            ? "ä¸‹åˆ"
            : "æ™šä¸Š";
        },
        calendar: {
          sameDay: "[ä»Šå¤©] LT",
          nextDay: "[æ˜Žå¤©] LT",
          nextWeek: "[ä¸‹]dddd LT",
          lastDay: "[æ˜¨å¤©] LT",
          lastWeek: "[ä¸Š]dddd LT",
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "æ—¥";
            case "M":
              return e + "æœˆ";
            case "w":
            case "W":
              return e + "é€±";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%så¾Œ",
          past: "%så‰",
          s: "å¹¾ç§’",
          ss: "%d ç§’",
          m: "1 åˆ†é˜",
          mm: "%d åˆ†é˜",
          h: "1 å°æ™‚",
          hh: "%d å°æ™‚",
          d: "1 å¤©",
          dd: "%d å¤©",
          M: "1 å€‹æœˆ",
          MM: "%d å€‹æœˆ",
          y: "1 å¹´",
          yy: "%d å¹´",
        },
      });
    });
  const i = {};
  !(function (e) {
    if (i[e]) return i[e];
    const t = {},
      n = {
        debug: "#7f8c8d",
        log: "#2ecc71",
        warn: "#f39c12",
        error: "#c0392b",
      },
      s = (t, ...s) => {
        const r = [
          `%c${e}`,
          [
            `border: 1px solid ${n[t]}`,
            "border-radius: 0.5em",
            `color: ${n[t]}`,
            "font-weight: bold",
            "padding: 2px 0.5em",
          ].join(";"),
        ];
        console[t](...r, ...s);
      };
    for (const e of Object.keys(n)) t[e] = (...t) => s(e, ...t);
    i[e] = t;
  })("App");
  const a = "Trimble.dispatcher.v1",
    o = {},
    d = {};
  let u = 1;
  function l(e) {
    const t = m();
    return (d[t] = e), () => delete d[t];
  }
  function c(e, t, n, s, r = 1e4) {
    return new Promise((i, d) => {
      const u = m(),
        l = { scope: a, type: "request", id: u, api: n, args: s };
      let c;
      r > 0 &&
        (c = setTimeout(() => {
          delete o[u],
            d(new Error("dispatcher.ts | sendRequest(): Operation timed out."));
        }, r)),
        (o[u] = (e) => {
          delete o[u], c && clearTimeout(c), e.error ? d(e.error) : i(e.result);
        }),
        e.postMessage(l, t);
    });
  }
  async function h(e) {
    const t = e.source,
      n = "null" === e.origin ? "*" : e.origin,
      s = e.data;
    if (
      (function (e) {
        return _(e) && "event" === e.type;
      })(s)
    )
      for (const e in d) {
        if (!d.hasOwnProperty(e)) continue;
        const r = d[e].event;
        r && r(t, n, s.event, s.data);
      }
    else if (
      (function (e) {
        return _(e) && "request" === e.type;
      })(s)
    ) {
      let e;
      for (const r in d) {
        if (!d.hasOwnProperty(r)) continue;
        const i = d[r].request;
        if (i && !e) {
          const r = i(t, n, s.api, s.args);
          if (void 0 !== r)
            try {
              e = {
                scope: a,
                type: "response",
                id: s.id,
                api: s.api,
                result: await r,
              };
            } catch (t) {
              e = {
                scope: a,
                type: "response",
                id: s.id,
                api: s.api,
                error: String(t),
              };
            }
        }
      }
      e ||
        (e = {
          scope: a,
          type: "response",
          id: s.id,
          api: s.api,
          error: "Not supported",
        }),
        t.postMessage(e, n);
    } else if (
      (function (e) {
        return _(e) && "response" === e.type;
      })(s)
    ) {
      const e = o[s.id];
      e && e(s);
    }
  }
  function _(e) {
    return !!e && e.scope === a;
  }
  function m() {
    return u++;
  }
  const f = ".connect_api_client_v1",
    y = ".api_function_v1",
    M = {},
    p = [];
  let g;
  const Y = new Promise((e) => {
    g = () => {
      (g = () => {}), e();
    };
  });
  function w(e) {
    if ("object" != typeof e) throw new Error("Api must be an object");
    k(M, e), g();
  }
  function v(e, t) {
    return (
      ("function" == typeof e && "function" == typeof t && e.name === t.name) ||
      ("string" == typeof e && "string" == typeof t) ||
      ("number" == typeof e && "number" == typeof t)
    );
  }
  function k(e, t) {
    for (const n in t) {
      const s = t[n];
      if (s)
        if (n in e) {
          const t = e[n];
          if ("object" == typeof s && "object" == typeof t) k(t, s);
          else {
            if (!v(s, t)) throw new Error(`Cannot merge ${n} (${t} and ${s})`);
            e[n] = s;
          }
        } else
          switch (typeof s) {
            case "object": {
              const t = {};
              k(t, s), (e[n] = t);
              break;
            }
            default:
              e[n] = s;
          }
    }
  }
  function D(e, t, n) {
    const s = {};
    for (const r in e) {
      const i = e[r];
      if ((void 0 !== n || ("onConnect" !== r && "onRequest" !== r)) && i)
        if ("object" == typeof i) {
          const e = (n && n + "." + String(r)) || String(r);
          s[r] = D(i, t, e);
        } else s[r] = t(r, e[r], n);
    }
    return s;
  }
  l({
    request: (e, t, n, s) => {
      if (n === f)
        return Y.then(() => {
          let n = p.find((t) => t.dispatcher === e);
          var s;
          return (
            n
              ? (n.origin = t)
              : ((n = { dispatcher: e, origin: t }), p.push(n)),
            (s = M) && "function" == typeof s.onConnect && M.onConnect(n),
            D(M, (e, t) => ("function" == typeof t ? y : t))
          );
        });
      {
        const i = p.find((n) => n.dispatcher === e && n.origin === t);
        if (i) {
          if ((r = M) && "function" == typeof r.onRequest) {
            const e = M.onRequest(i, n, s);
            if (void 0 !== e) return e;
          }
          const e = (function (e, t) {
            const n = t.split(".");
            let s = e;
            for (const e of n)
              s = "object" == typeof s && s && e in s ? s[e] : void 0;
            return s;
          })(M, n);
          if ("function" == typeof e) {
            const t = e.apply(void 0, s);
            return void 0 === t ? Promise.resolve(t) : t;
          }
          return Promise.resolve(e);
        }
        return;
      }
      var r;
    },
  });
  class L {
    storage = new Map();
    itemInsertionCallback;
    get length() {
      return this.storage.size;
    }
    getItem(e) {
      const t = this.storage.get(e);
      return void 0 === t ? null : t;
    }
    setItem(e, t) {
      this.storage.set(e, t),
        this.itemInsertionCallback && this.itemInsertionCallback(this.length);
    }
    removeItem(e) {
      this.storage.delete(e);
    }
    clear() {
      return this.storage.clear();
    }
    key(e) {
      const t = [];
      for (const e of this.storage.keys()) t.push(e);
      return t[e];
    }
  }
  class S {
    storageType;
    _underlyingStorage;
    constructor(e) {
      (this.storageType = e), (this._underlyingStorage = this.getStorage());
    }
    getStorage() {
      let e;
      try {
        e =
          "undefined" == typeof window
            ? global[this.storageType]
            : window[this.storageType];
        const t = "__storage_test__";
        return e.setItem(t, t), e.removeItem(t), e;
      } catch (t) {
        if (
          (22 !== t.code &&
            1014 !== t.code &&
            "QuotaExceededError" !== t.name &&
            "NS_ERROR_DOM_QUOTA_REACHED" !== t.name) ||
          !e ||
          0 === e.length
        ) {
          const e = "undefined" == typeof window ? global : window,
            t = `emulated${this.storageType}`;
          return e.hasOwnProperty(t) || (e[t] = new L()), e[t];
        }
        throw t;
      }
    }
    get underlyingStorage() {
      return this._underlyingStorage;
    }
    reload() {
      this._underlyingStorage = this.getStorage();
    }
    get length() {
      return this._underlyingStorage.length;
    }
    getItem(e) {
      return this._underlyingStorage.getItem(e);
    }
    setItem(e, t) {
      return this._underlyingStorage.setItem(e, t);
    }
    removeItem(e) {
      return this._underlyingStorage.removeItem(e);
    }
    clear() {
      return this._underlyingStorage.clear();
    }
    key(e) {
      return this._underlyingStorage.key(e);
    }
  }
  var b, T, O, x;
  new S("localStorage"),
    new S("sessionStorage"),
    (function (e) {
      (e[(e.AllowNegative = 1)] = "AllowNegative"),
        (e[(e.AllowIntegers = 2)] = "AllowIntegers"),
        (e[(e.AllowDecimals = 4)] = "AllowDecimals"),
        (e[(e.AllowScientific = 8)] = "AllowScientific"),
        (e[(e.AllowFractions = 16)] = "AllowFractions"),
        (e[(e.Any = 31)] = "Any");
    })(b || (b = {})),
    (function (e) {
      (e[(e.Feet = 0)] = "Feet"),
        (e[(e.Inches = 1)] = "Inches"),
        (e[(e.FeetInches = 2)] = "FeetInches");
    })(T || (T = {})),
    (e.PropertyType = void 0),
    ((O = e.PropertyType || (e.PropertyType = {}))[(O.LengthMeasure = 0)] =
      "LengthMeasure"),
    (O[(O.AreaMeasure = 1)] = "AreaMeasure"),
    (O[(O.VolumeMeasure = 2)] = "VolumeMeasure"),
    (O[(O.MassMeasure = 3)] = "MassMeasure"),
    (O[(O.AngleMeasure = 4)] = "AngleMeasure"),
    (O[(O.StringValue = 5)] = "StringValue"),
    (O[(O.IntValue = 6)] = "IntValue"),
    (O[(O.DoubleValue = 7)] = "DoubleValue"),
    (O[(O.DateTime = 8)] = "DateTime"),
    (O[(O.Logical = 9)] = "Logical"),
    (O[(O.Boolean = 10)] = "Boolean"),
    (e.ViewEntityStates = void 0),
    ((x = e.ViewEntityStates || (e.ViewEntityStates = {}))[(x.Selected = 1)] =
      "Selected"),
    (x[(x.Hidden = 4)] = "Hidden"),
    (x[(x.SelectedHidden = 5)] = "SelectedHidden"),
    (x[(x.Visible = 6)] = "Visible"),
    (x[(x.SelectedVisible = 7)] = "SelectedVisible"),
    (x[(x.Highlighted = 8)] = "Highlighted");
  var H;
  function P(e) {
    return h(e);
  }
  return (
    (e.SortDirection = void 0),
    ((H = e.SortDirection || (e.SortDirection = {}))[(H.SORT_NONE = 0)] =
      "SORT_NONE"),
    (H[(H.SORT_UP = 1)] = "SORT_UP"),
    (H[(H.SORT_DOWN = -1)] = "SORT_DOWN"),
    (e.TOOLS = [
      "reset",
      "selection",
      "areaSelection",
      "measurement",
      "pointMarkup",
      "cloudMarkup",
      "arrowMarkup",
      "lineMarkup",
      "textMarkup",
      "freelineMarkup",
      "clipPlane",
      "verticalClipPlane",
      "picking",
    ]),
    (e.TOOL_SNAP_TYPES = ["edge", "point", "surface"]),
    (e.connect = function (e, t, n) {
      return (
        window.removeEventListener("message", P),
        window.addEventListener("message", P),
        (function (e, t, n = 1e4) {
          async function s(e, t) {
            const s = await c(e, t, f, [], 0);
            if (s && "object" == typeof s)
              return D(s, (s, r, i) => {
                if (r === y) {
                  const r = i ? i + "." + String(s) : String(s);
                  return (...s) => c(e, t, r, s, n);
                }
                return r;
              });
            throw new Error("Failed to connect");
          }
          function r(e) {
            if (!e) return "*";
            try {
              return new URL(e).origin;
            } catch {
              return "*";
            }
          }
          if ((t && l({ event: (e, n, s, r) => t(s, r) }), e === window))
            return 0 !== Object.keys(M).length
              ? Promise.resolve(M)
              : (function () {
                  const e = window;
                  return e && "CefSharp" in e;
                })()
              ? new Promise(async (e) => {
                  await CefSharp.BindObjectAsync("connectWsApiIntegrator");
                  const t = {
                    postMessage: (e, t) => {
                      const n = JSON.stringify(e);
                      connectWsApiIntegrator.postMessage(n);
                    },
                  };
                  e(await s(t, "*"));
                })
              : (function () {
                  const e = window;
                  return e && e.chrome && e.chrome.webview;
                })()
              ? s(
                  {
                    postMessage: (e, t) => {
                      window.chrome.webview.postMessage(e);
                    },
                  },
                  "*"
                )
              : Promise.resolve(M);
          if ((i = e) && "function" == typeof i.postMessage) return s(e, "*");
          if (
            (function (e) {
              return e && "object" == typeof e.contentWindow;
            })(e)
          ) {
            const t = [];
            return (
              t.push(
                new Promise((t, n) => {
                  const i = async () => {
                    e.removeEventListener("load", i),
                      e.contentWindow
                        ? t(await s(e.contentWindow, r(e.src)))
                        : n(
                            new Error("Cannot access the target content window")
                          );
                  };
                  e.addEventListener("load", i);
                })
              ),
              e.contentWindow && t.push(s(e.contentWindow, r(e.src))),
              Promise.race(t)
            );
          }
          return Promise.reject(
            new Error("Target must be a window or an iframe")
          );
          var i;
        })(e, t, n)
      );
    }),
    (e.dispatcherEventListener = P),
    (e.expose = function (e) {
      return w(e);
    }),
    (e.getConnectEmbedUrl = function (e = "prod") {
      return `https://${
        { int: "web.int", qa: "web.qa", stage: "web.stage", prod: "web" }[e]
      }.connect.trimble.com?isEmbedded=true`;
    }),
    (e.sendEvent = function (e, t, n, s) {
      !(function (e, t, n, s) {
        const r = { scope: a, type: "event", event: n, data: s };
        e.postMessage(r, t);
      })(e, t, n, s);
    }),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    e
  );
})({});
