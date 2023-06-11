var app = function() {
    "use strict";
    function e() {}
    const t = e=>e;
    function s(e) {
        return e()
    }
    function r() {
        return Object.create(null)
    }
    function o(e) {
        e.forEach(s)
    }
    function a(e) {
        return "function" == typeof e
    }
    function i(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    let n;
    function d(e, t) {
        return n || (n = document.createElement("a")),
        n.href = t,
        e === n.href
    }
    const l = "undefined" != typeof window;
    let C = l ? ()=>window.performance.now() : ()=>Date.now()
      , h = l ? e=>requestAnimationFrame(e) : e;
    const k = new Set;
    function c(e) {
        k.forEach((t=>{
            t.c(e) || (k.delete(t),
            t.f())
        }
        )),
        0 !== k.size && h(c)
    }
    function u(e) {
        let t;
        return 0 === k.size && h(c),
        {
            promise: new Promise((s=>{
                k.add(t = {
                    c: e,
                    f: s
                })
            }
            )),
            abort() {
                k.delete(t)
            }
        }
    }
    function w(e, t) {
        e.appendChild(t)
    }
    function f(e) {
        if (!e)
            return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }
    function m(e) {
        const t = v("style");
        return function(e, t) {
            w(e.head || e, t)
        }(f(e), t),
        t
    }
    function p(e, t, s) {
        e.insertBefore(t, s || null)
    }
    function z(e) {
        e.parentNode.removeChild(e)
    }
    function g(e, t) {
        for (let s = 0; s < e.length; s += 1)
            e[s] && e[s].d(t)
    }
    function v(e) {
        return document.createElement(e)
    }
    function _(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }
    function y(e) {
        return document.createTextNode(e)
    }
    function E() {
        return y(" ")
    }
    function O(e, t, s, r) {
        return e.addEventListener(t, s, r),
        ()=>e.removeEventListener(t, s, r)
    }
    function L(e, t, s) {
        null == s ? e.removeAttribute(t) : e.getAttribute(t) !== s && e.setAttribute(t, s)
    }
    function N(e, t) {
        t = "" + t,
        e.wholeText !== t && (e.data = t)
    }
    function M(e, t) {
        e.value = null == t ? "" : t
    }
    function b(e, t, s, r) {
        e.style.setProperty(t, s, r ? "important" : "")
    }
    const H = new Set;
    let x, $ = 0;
    function j(e, t, s, r, o, a, i, n=0) {
        const d = 16.666 / r;
        let l = "{\n";
        for (let e = 0; e <= 1; e += d) {
            const r = t + (s - t) * a(e);
            l += 100 * e + `%{${i(r, 1 - r)}}\n`
        }
        const C = l + `100% {${i(s, 1 - s)}}\n}`
          , h = `__svelte_ ${function(e) {
            let t = 5381
              , s = e.length;
            for (; s--; )
                t = (t << 5) - t ^ e.charCodeAt(s);
            return t >>> 0
        }(C)}_ ${n}`
          , k = f(e);
        H.add(k);
        const c = k.__svelte_stylesheet || (k.__svelte_stylesheet = m(e).sheet)
          , u = k.__svelte_rules || (k.__svelte_rules = {});
        u[h] || (u[h] = !0,
        c.insertRule(`@keyframes ${h} ${C}`, c.cssRules.length));
        const w = e.style.animation || "";
        return e.style.animation = `${w ? `${w}, ` : ""}${h} ${r}ms linear ${o}ms 1 both`,
        $ += 1,
        h
    }
    function V(e, t) {
        const s = (e.style.animation || "").split(", ")
          , r = s.filter(t ? e=>e.indexOf(t) < 0 : e=>-1 === e.indexOf("__svelte"))
          , o = s.length - r.length;
        o && (e.style.animation = r.join(", "),
        $ -= o,
        $ || h((()=>{
            $ || (H.forEach((e=>{
                const t = e.__svelte_stylesheet;
                let s = t.cssRules.length;
                for (; s--; )
                    t.deleteRule(s);
                e.__svelte_rules = {}
            }
            )),
            H.clear())
        }
        )))
    }
    function B(e) {
        x = e
    }
    const Z = []
      , T = []
      , Y = []
      , F = []
      , D = Promise.resolve();
    let I = !1;
    function S(e) {
        Y.push(e)
    }
    const X = new Set;
    let U, R = 0;
    function A() {
        const e = x;
        do {
            for (; R < Z.length; ) {
                const e = Z[R];
                R++,
                B(e),
                P(e.$$)
            }
            for (B(null),
            Z.length = 0,
            R = 0; T.length; )
                T.pop()();
            for (let e = 0; e < Y.length; e += 1) {
                const t = Y[e];
                X.has(t) || (X.add(t),
                t())
            }
            Y.length = 0
        } while (Z.length);
        for (; F.length; )
            F.pop()();
        I = !1,
        X.clear(),
        B(e)
    }
    function P(e) {
        if (null !== e.fragment) {
            e.update(),
            o(e.before_update);
            const t = e.dirty;
            e.dirty = [-1],
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(S)
        }
    }
    function q() {
        return U || (U = Promise.resolve(),
        U.then((()=>{
            U = null
        }
        ))),
        U
    }
    function Q(e, t, s) {
        e.dispatchEvent(function(e, t, s=!1) {
            const r = document.createEvent("CustomEvent");
            return r.initCustomEvent(e, s, !1, t),
            r
        }(`${t ? "intro" : "outro"}${s}`))
    }
    const G = new Set;
    let W;
    function K() {
        W = {
            r: 0,
            c: [],
            p: W
        }
    }
    function J() {
        W.r || o(W.c),
        W = W.p
    }
    function ee(e, t) {
        e && e.i && (G.delete(e),
        e.i(t))
    }
    function te(e, t, s, r) {
        if (e && e.o) {
            if (G.has(e))
                return;
            G.add(e),
            W.c.push((()=>{
                G.delete(e),
                r && (s && e.d(1),
                r())
            }
            )),
            e.o(t)
        }
    }
    const se = {
        duration: 0
    };
    function re(s, r, i, n) {
        let d = r(s, i)
          , l = n ? 0 : 1
          , h = null
          , k = null
          , c = null;
        function w() {
            c && V(s, c)
        }
        function f(e, t) {
            const s = e.b - l;
            return t *= Math.abs(s),
            {
                a: l,
                b: e.b,
                d: s,
                duration: t,
                start: e.start,
                end: e.start + t,
                group: e.group
            }
        }
        function m(r) {
            const {delay: a=0, duration: i=300, easing: n=t, tick: m=e, css: p} = d || se
              , z = {
                start: C() + a,
                b: r
            };
            r || (z.group = W,
            W.r += 1),
            h || k ? k = z : (p && (w(),
            c = j(s, l, r, i, a, n, p)),
            r && m(0, 1),
            h = f(z, i),
            S((()=>Q(s, r, "start"))),
            u((e=>{
                if (k && e > k.start && (h = f(k, i),
                k = null,
                Q(s, h.b, "start"),
                p && (w(),
                c = j(s, l, h.b, h.duration, 0, n, d.css))),
                h)
                    if (e >= h.end)
                        m(l = h.b, 1 - l),
                        Q(s, h.b, "end"),
                        k || (h.b ? w() : --h.group.r || o(h.group.c)),
                        h = null;
                    else if (e >= h.start) {
                        const t = e - h.start;
                        l = h.a + h.d * n(t / h.duration),
                        m(l, 1 - l)
                    }
                return !(!h && !k)
            }
            )))
        }
        return {
            run(e) {
                a(d) ? q().then((()=>{
                    d = d(),
                    m(e)
                }
                )) : m(e)
            },
            end() {
                w(),
                h = k = null
            }
        }
    }
    function oe(e) {
        e && e.c()
    }
    function ae(e, t, r, i) {
        const {fragment: n, on_mount: d, on_destroy: l, after_update: C} = e.$$;
        n && n.m(t, r),
        i || S((()=>{
            const t = d.map(s).filter(a);
            l ? l.push(...t) : o(t),
            e.$$.on_mount = []
        }
        )),
        C.forEach(S)
    }
    function ie(e, t) {
        const s = e.$$;
        null !== s.fragment && (o(s.on_destroy),
        s.fragment && s.fragment.d(t),
        s.on_destroy = s.fragment = null,
        s.ctx = [])
    }
    function ne(e, t) {
        -1 === e.$$.dirty[0] && (Z.push(e),
        I || (I = !0,
        D.then(A)),
        e.$$.dirty.fill(0)),
        e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }
    function de(t, s, a, i, n, d, l, C=[-1]) {
        const h = x;
        B(t);
        const k = t.$$ = {
            fragment: null,
            ctx: null,
            props: d,
            update: e,
            not_equal: n,
            bound: r(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(s.context || (h ? h.$$.context : [])),
            callbacks: r(),
            dirty: C,
            skip_bound: !1,
            root: s.target || h.$$.root
        };
        l && l(k.root);
        let c = !1;
        if (k.ctx = a ? a(t, s.props || {}, ((e,s,...r)=>{
            const o = r.length ? r[0] : s;
            return k.ctx && n(k.ctx[e], k.ctx[e] = o) && (!k.skip_bound && k.bound[e] && k.bound[e](o),
            c && ne(t, e)),
            s
        }
        )) : [],
        k.update(),
        c = !0,
        o(k.before_update),
        k.fragment = !!i && i(k.ctx),
        s.target) {
            if (s.hydrate) {
                const e = function(e) {
                    return Array.from(e.childNodes)
                }(s.target);
                k.fragment && k.fragment.l(e),
                e.forEach(z)
            } else
                k.fragment && k.fragment.c();
            s.intro && ee(t.$$.fragment),
            ae(t, s.target, s.anchor, s.customElement),
            A()
        }
        B(h)
    }
    class le {
        $destroy() {
            ie(this, 1),
            this.$destroy = e
        }
        $on(e, t) {
            const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return s.push(t),
            ()=>{
                const e = s.indexOf(t);
                -1 !== e && s.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e,
            0 !== Object.keys(t).length) && (this.$$.skip_bound = !0,
            this.$$set(e),
            this.$$.skip_bound = !1)
        }
    }
    function Ce(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m;
        return {
            c() {
                s = _("svg"),
                r = _("rect"),
                o = _("rect"),
                a = _("g"),
                i = _("rect"),
                n = _("rect"),
                d = _("circle"),
                l = _("circle"),
                C = _("circle"),
                h = _("circle"),
                k = _("defs"),
                c = _("filter"),
                u = _("feFlood"),
                f = _("feBlend"),
                m = _("feGaussianBlur"),
                L(r, "x", "9.61627"),
                L(r, "y", "8.62305"),
                L(r, "width", "20.4407"),
                L(r, "height", "2.18671"),
                L(r, "rx", "1.09336"),
                L(r, "transform", "rotate(45 9.61627 8.62305)"),
                L(r, "fill", "#FF3434"),
                L(o, "x", "24.07"),
                L(o, "y", "10.1693"),
                L(o, "width", "20.4407"),
                L(o, "height", "2.18671"),
                L(o, "rx", "1.09336"),
                L(o, "transform", "rotate(135 24.07 10.1693)"),
                L(o, "fill", "#FF3434"),
                L(i, "x", "9.61627"),
                L(i, "y", "8.62305"),
                L(i, "width", "20.4407"),
                L(i, "height", "2.18671"),
                L(i, "rx", "1.09336"),
                L(i, "transform", "rotate(45 9.61627 8.62305)"),
                L(i, "fill", "#FF3434"),
                L(n, "x", "24.07"),
                L(n, "y", "10.1693"),
                L(n, "width", "20.4407"),
                L(n, "height", "2.18671"),
                L(n, "rx", "1.09336"),
                L(n, "transform", "rotate(135 24.07 10.1693)"),
                L(n, "fill", "#FF3434"),
                L(a, "filter", "url(#filter0_f_713_2354)"),
                L(d, "cx", "16.5942"),
                L(d, "cy", "24.4686"),
                L(d, "r", "0.544223"),
                L(d, "transform", "rotate(-90 16.5942 24.4686)"),
                L(d, "stroke", "#FF3434"),
                L(d, "stroke-width", "0.1"),
                L(l, "cx", "16.5942"),
                L(l, "cy", "8.59422"),
                L(l, "r", "0.544223"),
                L(l, "transform", "rotate(-90 16.5942 8.59422)"),
                L(l, "stroke", "#FF3434"),
                L(l, "stroke-width", "0.1"),
                L(C, "cx", "7.59422"),
                L(C, "cy", "16.5942"),
                L(C, "r", "0.544223"),
                L(C, "stroke", "#FF3434"),
                L(C, "stroke-width", "0.1"),
                L(h, "cx", "23.4686"),
                L(h, "cy", "16.5942"),
                L(h, "r", "0.544223"),
                L(h, "stroke", "#FF3434"),
                L(h, "stroke-width", "0.1"),
                L(u, "flood-opacity", "0"),
                L(u, "result", "BackgroundImageFix"),
                L(f, "mode", "normal"),
                L(f, "in", "SourceGraphic"),
                L(f, "in2", "BackgroundImageFix"),
                L(f, "result", "shape"),
                L(m, "stdDeviation", "2"),
                L(m, "result", "effect1_foregroundBlur_713_2354"),
                L(c, "id", "filter0_f_713_2354"),
                L(c, "x", "4.52292"),
                L(c, "y", "5.0759"),
                L(c, "width", "23.0942"),
                L(c, "height", "23.0943"),
                L(c, "filterUnits", "userSpaceOnUse"),
                L(c, "color-interpolation-filters", "sRGB"),
                L(s, "width", "33"),
                L(s, "height", "33"),
                L(s, "viewBox", "0 0 33 33"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(a, i),
                w(a, n),
                w(s, d),
                w(s, l),
                w(s, C),
                w(s, h),
                w(s, k),
                w(k, c),
                w(c, u),
                w(c, f),
                w(c, m)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class he extends le {
        constructor(e) {
            super(),
            de(this, e, null, Ce, i, {})
        }
    }
    function ke(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u;
        return {
            c() {
                s = _("svg"),
                r = _("rect"),
                o = _("rect"),
                a = _("rect"),
                i = _("g"),
                n = _("rect"),
                d = _("rect"),
                l = _("rect"),
                C = _("defs"),
                h = _("filter"),
                k = _("feFlood"),
                c = _("feBlend"),
                u = _("feGaussianBlur"),
                L(r, "x", "6.68732"),
                L(r, "y", "6"),
                L(r, "width", "16"),
                L(r, "height", "2.28571"),
                L(r, "rx", "1.14286"),
                L(r, "fill", "#FF3434"),
                L(o, "x", "6.68732"),
                L(o, "y", "12.8571"),
                L(o, "width", "16"),
                L(o, "height", "2.28571"),
                L(o, "rx", "1.14286"),
                L(o, "fill", "#FF3434"),
                L(a, "x", "6.68732"),
                L(a, "y", "19.7143"),
                L(a, "width", "16"),
                L(a, "height", "2.28571"),
                L(a, "rx", "1.14286"),
                L(a, "fill", "#FF3434"),
                L(n, "x", "6.68732"),
                L(n, "y", "6"),
                L(n, "width", "16"),
                L(n, "height", "2.28571"),
                L(n, "rx", "1.14286"),
                L(n, "fill", "#FF3434"),
                L(d, "x", "6.68732"),
                L(d, "y", "12.8571"),
                L(d, "width", "16"),
                L(d, "height", "2.28571"),
                L(d, "rx", "1.14286"),
                L(d, "fill", "#FF3434"),
                L(l, "x", "6.68732"),
                L(l, "y", "19.7143"),
                L(l, "width", "16"),
                L(l, "height", "2.28571"),
                L(l, "rx", "1.14286"),
                L(l, "fill", "#FF3434"),
                L(i, "filter", "url(#filter0_f_654_2375)"),
                L(k, "flood-opacity", "0"),
                L(k, "result", "BackgroundImageFix"),
                L(c, "mode", "normal"),
                L(c, "in", "SourceGraphic"),
                L(c, "in2", "BackgroundImageFix"),
                L(c, "result", "shape"),
                L(u, "stdDeviation", "3"),
                L(u, "result", "effect1_foregroundBlur_654_2375"),
                L(h, "id", "filter0_f_654_2375"),
                L(h, "x", "0.687317"),
                L(h, "y", "0"),
                L(h, "width", "28"),
                L(h, "height", "28"),
                L(h, "filterUnits", "userSpaceOnUse"),
                L(h, "color-interpolation-filters", "sRGB"),
                L(s, "width", "29"),
                L(s, "height", "28"),
                L(s, "viewBox", "0 0 29 28"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(s, i),
                w(i, n),
                w(i, d),
                w(i, l),
                w(s, C),
                w(C, h),
                w(h, k),
                w(h, c),
                w(h, u)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class ce extends le {
        constructor(e) {
            super(),
            de(this, e, null, ke, i, {})
        }
    }
    function ue(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c;
        return {
            c() {
                s = _("svg"),
                r = _("path"),
                o = _("defs"),
                a = _("linearGradient"),
                i = _("stop"),
                n = _("stop"),
                d = _("stop"),
                l = _("stop"),
                C = _("stop"),
                h = _("stop"),
                k = _("stop"),
                c = _("stop"),
                L(r, "fill-rule", "evenodd"),
                L(r, "clip-rule", "evenodd"),
                L(r, "d", "M0.400452 4.65192L3.00049 2.37482V0.0010376H0.400452V0H0V44.3299L32.104 63.9379L37 79.5L67.046 99.8748L81.0944 99.8758V99.5H67.5L37.2701 78.8226L32.3711 63.2499L0.400452 43.7232V4.65192ZM2.5 10.8C2.66571 10.8 2.79999 10.6657 2.79999 10.5C2.79999 10.3343 2.66571 10.2 2.5 10.2C2.33429 10.2 2.20001 10.3343 2.20001 10.5C2.20001 10.6657 2.33429 10.8 2.5 10.8ZM2.5 11C2.77612 11 3 10.7761 3 10.5C3 10.2239 2.77612 10 2.5 10C2.22388 10 2 10.2239 2 10.5C2 10.7761 2.22388 11 2.5 11ZM2.79999 13.5C2.79999 13.6657 2.66571 13.8 2.5 13.8C2.33429 13.8 2.20001 13.6657 2.20001 13.5C2.20001 13.3343 2.33429 13.2 2.5 13.2C2.66571 13.2 2.79999 13.3343 2.79999 13.5ZM3 13.5C3 13.7761 2.77612 14 2.5 14C2.22388 14 2 13.7761 2 13.5C2 13.2239 2.22388 13 2.5 13C2.77612 13 3 13.2239 3 13.5ZM34 66H35.0769L36 69H34.9231L34 66ZM83 99V95H85V99H83ZM82 94H83H85H86V95V99V100H85H83H82V99V95V94ZM83 93H82V92H83H85H86V93H85H83ZM82 91H83H85H86V90H85H83H82V91ZM83 81H82V80H83H85H86V81H85H83ZM88 99H89V100H88V99ZM91 99H90V100H91V99ZM29 68C29.5523 68 30 67.5523 30 67C30 66.4477 29.5523 66 29 66C28.4477 66 28 66.4477 28 67C28 67.5523 28.4477 68 29 68ZM47 81C47 81.5523 46.5523 82 46 82C45.4477 82 45 81.5523 45 81C45 80.4477 45.4477 80 46 80C46.5523 80 47 80.4477 47 81ZM63.6828 95.9463L66.8203 96.0266L70.8067 98.7031L67.6692 98.6228L63.6828 95.9463ZM66.8835 95.8281L71.1797 98.7126L71.4895 98.9206L71.1165 98.9111L67.606 98.8213L63.3098 95.9368L63 95.7288L63.373 95.7383L66.8835 95.8281ZM2.19995 37.4828L2.20001 42.3991L2.79999 42.8422V38.0829L2.19995 37.4828ZM3 42.9899V38L2.19995 37.2L1.99994 37V37.2829L2 42.5L2.79999 43.0909L3 43.2386V42.9899ZM93.2 58.9621C93.2 52.2975 98.2935 46.8224 104.8 46.2176V56.0214C103.218 56.2405 102 57.5983 102 59.2405C102 60.8828 103.218 62.2405 104.8 62.4597V71.7066C98.2935 71.1017 93.2 65.6266 93.2 58.9621ZM105 62.4811V56V46.2006V46C104.968 46.0024 104.936 46.0049 104.904 46.0076L104.878 46.0099C104.852 46.0121 104.826 46.0144 104.8 46.0168C98.1828 46.6224 93 52.187 93 58.9621C93 65.7372 98.1828 71.3018 104.8 71.9075C104.867 71.9136 104.933 71.9191 105 71.9242V71.7236V62.4811ZM84 86C84.5523 86 85 85.5523 85 85C85 84.4477 84.5523 84 84 84C83.4477 84 83 84.4477 83 85C83 85.5523 83.4477 86 84 86Z"),
                L(r, "fill", "url(#paint0_linear_9_287)"),
                L(i, "stop-color", "#FF3434"),
                L(n, "offset", "0.0915471"),
                L(n, "stop-color", "#7D19FE"),
                L(n, "stop-opacity", "0.490266"),
                L(d, "offset", "0.269692"),
                L(d, "stop-color", "#FD0505"),
                L(d, "stop-opacity", "0.13"),
                L(l, "offset", "0.39116"),
                L(l, "stop-color", "#FF3434"),
                L(C, "offset", "0.515639"),
                L(C, "stop-color", "#FF7C7C"),
                L(C, "stop-opacity", "0.391122"),
                L(h, "offset", "0.647055"),
                L(h, "stop-color", "#FE2121"),
                L(h, "stop-opacity", "0"),
                L(k, "offset", "0.75779"),
                L(k, "stop-color", "#FF3434"),
                L(k, "stop-opacity", "0.89"),
                L(c, "offset", "1"),
                L(c, "stop-color", "#FF3434"),
                L(c, "stop-opacity", "0.37"),
                L(a, "id", "paint0_linear_9_287"),
                L(a, "x1", "0"),
                L(a, "y1", "0"),
                L(a, "x2", "129"),
                L(a, "y2", "100"),
                L(a, "gradientUnits", "userSpaceOnUse"),
                L(s, "width", "105"),
                L(s, "height", "100"),
                L(s, "viewBox", "0 0 105 100"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(o, a),
                w(a, i),
                w(a, n),
                w(a, d),
                w(a, l),
                w(a, C),
                w(a, h),
                w(a, k),
                w(a, c)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class we extends le {
        constructor(e) {
            super(),
            de(this, e, null, ue, i, {})
        }
    }
    function fe(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c;
        return {
            c() {
                s = _("svg"),
                r = _("path"),
                o = _("defs"),
                a = _("linearGradient"),
                i = _("stop"),
                n = _("stop"),
                d = _("stop"),
                l = _("stop"),
                C = _("stop"),
                h = _("stop"),
                k = _("stop"),
                c = _("stop"),
                L(r, "fill-rule", "evenodd"),
                L(r, "clip-rule", "evenodd"),
                L(r, "d", "M104.546 4.65192L101.599 2.37482V0.00102299H104.546V0H105V44.3299L68.6155 63.9379L63.0667 79.5L59.9255 81.3795C59.776 81.7436 59.4179 82 59 82C58.9653 82 58.931 81.9982 58.8972 81.9948L29.0146 99.8748L23 99.8752V100H22H20H19V99.8754L17 99.8755V100H16V99.8756L15 99.8757V100H14V99.8757L13.093 99.8758V99.5H14V99H15V99.5H16V99H17V99.5H19V99V95V94H20H22H23V95V99V99.5H28.5L58.1873 81.5827C58.0694 81.4187 58 81.2174 58 81C58 80.4477 58.4477 80 59 80C59.3914 80 59.7302 80.2248 59.8945 80.5524L62.7606 78.8226L68.3128 63.2499L104.546 43.7232V4.65192ZM102.167 10.8C101.94 10.8 101.8 10.6429 101.8 10.5C101.8 10.3571 101.94 10.2 102.167 10.2C102.393 10.2 102.533 10.3571 102.533 10.5C102.533 10.6429 102.393 10.8 102.167 10.8ZM102.167 11C101.854 11 101.6 10.7761 101.6 10.5C101.6 10.2239 101.854 10 102.167 10C102.48 10 102.733 10.2239 102.733 10.5C102.733 10.7761 102.48 11 102.167 11ZM101.8 13.5C101.8 13.6429 101.94 13.8 102.167 13.8C102.393 13.8 102.533 13.6429 102.533 13.5C102.533 13.3571 102.393 13.2 102.167 13.2C101.94 13.2 101.8 13.3571 101.8 13.5ZM101.6 13.5C101.6 13.7761 101.854 14 102.167 14C102.48 14 102.733 13.7761 102.733 13.5C102.733 13.2239 102.48 13 102.167 13C101.854 13 101.6 13.2239 101.6 13.5ZM66.4667 66H65.2462L64.2 69H65.4205L66.4667 66ZM22 99V95H20V99H22ZM22 93H23V92H22H20H19V93H20H22ZM23 91H22H20H19V90H20H22H23V91ZM22 81H23V80H22H20H19V81H20H22ZM76 68C75.4477 68 75 67.5523 75 67C75 66.4477 75.4477 66 76 66C76.5523 66 77 66.4477 77 67C77 67.5523 76.5523 68 76 68ZM41.3172 95.9463L38.1797 96.0266L34.1933 98.7031L37.3308 98.6228L41.3172 95.9463ZM38.1165 95.8281L33.8203 98.7126L33.5105 98.9206L33.8835 98.9111L37.394 98.8213L41.6902 95.9368L42 95.7288L41.627 95.7383L38.1165 95.8281ZM102.2 38.0829L102.8 37.4829L102.8 42.3991L102.2 42.8422L102.2 38.0829ZM102 42.9899L102 38L102.8 37.2L103 37L103 37.2829L103 42.5L102.2 43.0909L102 43.2386L102 42.9899ZM11.8 58.9621C11.8 52.2975 6.70645 46.8225 0.199997 46.2176V56.0214C1.78194 56.2405 3 57.5983 3 59.2405C3 60.8828 1.78194 62.2405 0.199997 62.4596V71.7066C6.70645 71.1018 11.8 65.6267 11.8 58.9621ZM0 62.4811V56V46.2006V46C0.0668106 46.0051 0.133476 46.0107 0.199997 46.0168C6.81718 46.6224 12 52.187 12 58.9621C12 65.7372 6.81718 71.3018 0.199997 71.9075C0.170219 71.9102 0.140411 71.9128 0.110573 71.9153L0.0776749 71.9181L0.0723877 71.9185L0.0319366 71.9218L0 71.9242V71.7236V62.4811ZM21 86C20.4477 86 20 85.5523 20 85C20 84.4477 20.4477 84 21 84C21.5523 84 22 84.4477 22 85C22 85.5523 21.5523 86 21 86Z"),
                L(r, "fill", "url(#paint0_linear_9_292)"),
                L(i, "stop-color", "#FF3434"),
                L(n, "offset", "0.0915471"),
                L(n, "stop-color", "#7D19FE"),
                L(n, "stop-opacity", "0.490266"),
                L(d, "offset", "0.269692"),
                L(d, "stop-color", "#FD0505"),
                L(d, "stop-opacity", "0.13"),
                L(l, "offset", "0.39116"),
                L(l, "stop-color", "#FF3434"),
                L(C, "offset", "0.515639"),
                L(C, "stop-color", "#FF7C7C"),
                L(C, "stop-opacity", "0.391122"),
                L(h, "offset", "0.647055"),
                L(h, "stop-color", "#FE2121"),
                L(h, "stop-opacity", "0"),
                L(k, "offset", "0.75779"),
                L(k, "stop-color", "#FF3434"),
                L(k, "stop-opacity", "0.89"),
                L(c, "offset", "1"),
                L(c, "stop-color", "#FF3434"),
                L(c, "stop-opacity", "0.37"),
                L(a, "id", "paint0_linear_9_292"),
                L(a, "x1", "105"),
                L(a, "y1", "0"),
                L(a, "x2", "-24"),
                L(a, "y2", "100"),
                L(a, "gradientUnits", "userSpaceOnUse"),
                L(s, "width", "105"),
                L(s, "height", "100"),
                L(s, "viewBox", "0 0 105 100"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(o, a),
                w(a, i),
                w(a, n),
                w(a, d),
                w(a, l),
                w(a, C),
                w(a, h),
                w(a, k),
                w(a, c)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class me extends le {
        constructor(e) {
            super(),
            de(this, e, null, fe, i, {})
        }
    }
    function pe(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, _, y, O, N, M, b, H, x, $, j, V, B, Z, T, Y, F, D, I, S, X, U;
        return n = new we({}),
        C = new we({}),
        c = new we({}),
        m = new we({}),
        y = new we({}),
        b = new me({}),
        $ = new me({}),
        B = new me({}),
        Y = new me({}),
        I = new me({}),
        {
            c() {
                s = v("section"),
                r = v("div"),
                o = v("div"),
                a = v("ul"),
                i = v("li"),
                oe(n.$$.fragment),
                d = E(),
                l = v("li"),
                oe(C.$$.fragment),
                h = E(),
                k = v("li"),
                oe(c.$$.fragment),
                u = E(),
                f = v("li"),
                oe(m.$$.fragment),
                g = E(),
                _ = v("li"),
                oe(y.$$.fragment),
                O = E(),
                N = v("ul"),
                M = v("li"),
                oe(b.$$.fragment),
                H = E(),
                x = v("li"),
                oe($.$$.fragment),
                j = E(),
                V = v("li"),
                oe(B.$$.fragment),
                Z = E(),
                T = v("li"),
                oe(Y.$$.fragment),
                F = E(),
                D = v("li"),
                oe(I.$$.fragment),
                S = E(),
                X = v("ul"),
                X.innerHTML = '<li class="dot svelte-1258p66"><a href="#one" class="glow svelte-1258p66"><span class="svelte-1258p66"><div class="menu-label glow svelte-1258p66">Home</div></span></a> \n          <div></div></li> \n        <li class="dot svelte-1258p66"><a href="#case-studies" class="glow svelte-1258p66"><span class="svelte-1258p66"><div class="menu-label glow svelte-1258p66">Case Studies</div></span></a></li> \n        <li class="dot svelte-1258p66"><a href="#personal-works" class="glow svelte-1258p66"><span class="svelte-1258p66"><div class="menu-label glow svelte-1258p66">Personal Works</div></span></a></li> \n        <li class="dot svelte-1258p66"><a href="#about" class="glow svelte-1258p66"><span class="svelte-1258p66"><div class="menu-label glow svelte-1258p66">About</div></span></a></li> \n        <li class="dot svelte-1258p66"><a href="#find-me" class="glow svelte-1258p66"><span class="svelte-1258p66"><div class="menu-label glow svelte-1258p66">Find Me</div></span></a></li>',
                L(i, "class", "svelte-1258p66"),
                L(l, "class", "svelte-1258p66"),
                L(k, "class", "svelte-1258p66"),
                L(f, "class", "svelte-1258p66"),
                L(_, "class", "svelte-1258p66"),
                L(a, "class", "spine-left"),
                L(M, "class", "svelte-1258p66"),
                L(x, "class", "svelte-1258p66"),
                L(V, "class", "svelte-1258p66"),
                L(T, "class", "svelte-1258p66"),
                L(D, "class", "svelte-1258p66"),
                L(N, "class", "spine-right"),
                L(X, "class", "spine-controller-ul dot-nav svelte-1258p66"),
                L(o, "class", "spine"),
                L(r, "class", "spine-container svelte-1258p66"),
                L(r, "id", "spine-controller"),
                L(s, "class", "section-03 svelte-1258p66"),
                L(s, "id", "personal-works")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(r, o),
                w(o, a),
                w(a, i),
                ae(n, i, null),
                w(a, d),
                w(a, l),
                ae(C, l, null),
                w(a, h),
                w(a, k),
                ae(c, k, null),
                w(a, u),
                w(a, f),
                ae(m, f, null),
                w(a, g),
                w(a, _),
                ae(y, _, null),
                w(o, O),
                w(o, N),
                w(N, M),
                ae(b, M, null),
                w(N, H),
                w(N, x),
                ae($, x, null),
                w(N, j),
                w(N, V),
                ae(B, V, null),
                w(N, Z),
                w(N, T),
                ae(Y, T, null),
                w(N, F),
                w(N, D),
                ae(I, D, null),
                w(o, S),
                w(o, X),
                U = !0
            },
            p: e,
            i(e) {
                U || (ee(n.$$.fragment, e),
                ee(C.$$.fragment, e),
                ee(c.$$.fragment, e),
                ee(m.$$.fragment, e),
                ee(y.$$.fragment, e),
                ee(b.$$.fragment, e),
                ee($.$$.fragment, e),
                ee(B.$$.fragment, e),
                ee(Y.$$.fragment, e),
                ee(I.$$.fragment, e),
                U = !0)
            },
            o(e) {
                te(n.$$.fragment, e),
                te(C.$$.fragment, e),
                te(c.$$.fragment, e),
                te(m.$$.fragment, e),
                te(y.$$.fragment, e),
                te(b.$$.fragment, e),
                te($.$$.fragment, e),
                te(B.$$.fragment, e),
                te(Y.$$.fragment, e),
                te(I.$$.fragment, e),
                U = !1
            },
            d(e) {
                e && z(s),
                ie(n),
                ie(C),
                ie(c),
                ie(m),
                ie(y),
                ie(b),
                ie($),
                ie(B),
                ie(Y),
                ie(I)
            }
        }
    }
    function ze(e) {
        return window.addEventListener("load", (function() {
            for (var e = document.getElementById("spine-controller").getElementsByClassName("spine-unit"), t = 0; t < e.length; t++)
                e[t].addEventListener("mouseover", (function() {
                    var e = document.getElementsByClassName(" active");
                    e[0].className = e[0].className.replace(" active", ""),
                    this.className += " active"
                }
                ))
        }
        )),
        []
    }
    class ge extends le {
        constructor(e) {
            super(),
            de(this, e, ze, pe, i, {})
        }
    }
    function ve(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, v, y, E, O, N, M, b, H, x;
        return {
            c() {
                s = _("svg"),
                r = _("path"),
                o = _("path"),
                a = _("g"),
                i = _("path"),
                n = _("defs"),
                d = _("filter"),
                l = _("feFlood"),
                C = _("feBlend"),
                h = _("feGaussianBlur"),
                k = _("linearGradient"),
                c = _("stop"),
                u = _("stop"),
                f = _("stop"),
                m = _("stop"),
                g = _("linearGradient"),
                v = _("stop"),
                y = _("stop"),
                E = _("stop"),
                O = _("stop"),
                N = _("linearGradient"),
                M = _("stop"),
                b = _("stop"),
                H = _("stop"),
                x = _("stop"),
                L(r, "d", "M10 32.9999L22.3849 18.3454C26.9004 13.0021 33.0249 10.0002 39.4109 10L110 10"),
                L(r, "stroke", "url(#paint0_linear_713_2360)"),
                L(r, "stroke-opacity", "0.3"),
                L(r, "stroke-miterlimit", "10"),
                L(o, "d", "M10 32.9999L22.3849 18.3454C26.9004 13.0021 33.0249 10.0002 39.4109 10L110 10"),
                L(o, "stroke", "url(#paint1_linear_713_2360)"),
                L(o, "stroke-miterlimit", "10"),
                L(i, "d", "M10 32.9999L22.3849 18.3454C26.9004 13.0021 33.0249 10.0002 39.4109 10L110 10"),
                L(i, "stroke", "url(#paint2_linear_713_2360)"),
                L(i, "stroke-opacity", "0.8"),
                L(i, "stroke-miterlimit", "10"),
                L(a, "filter", "url(#filter0_f_713_2360)"),
                L(l, "flood-opacity", "0"),
                L(l, "result", "BackgroundImageFix"),
                L(C, "mode", "normal"),
                L(C, "in", "SourceGraphic"),
                L(C, "in2", "BackgroundImageFix"),
                L(C, "result", "shape"),
                L(h, "stdDeviation", "4.5"),
                L(h, "result", "effect1_foregroundBlur_713_2360"),
                L(d, "id", "filter0_f_713_2360"),
                L(d, "x", "0.618103"),
                L(d, "y", "0.500008"),
                L(d, "width", "118.382"),
                L(d, "height", "41.8227"),
                L(d, "filterUnits", "userSpaceOnUse"),
                L(d, "color-interpolation-filters", "sRGB"),
                L(c, "offset", "0.14082"),
                L(c, "stop-color", "#FF3434"),
                L(c, "stop-opacity", "0"),
                L(u, "offset", "0.528091"),
                L(u, "stop-color", "#FF3434"),
                L(f, "offset", "0.667521"),
                L(f, "stop-color", "#FF3434"),
                L(f, "stop-opacity", "0.89"),
                L(m, "offset", "1"),
                L(m, "stop-color", "#FF3434"),
                L(m, "stop-opacity", "0"),
                L(k, "id", "paint0_linear_713_2360"),
                L(k, "x1", "110"),
                L(k, "y1", "10.0001"),
                L(k, "x2", "7.82123"),
                L(k, "y2", "27.86"),
                L(k, "gradientUnits", "userSpaceOnUse"),
                L(v, "offset", "0.14082"),
                L(v, "stop-color", "#FF3434"),
                L(v, "stop-opacity", "0"),
                L(y, "offset", "0.528091"),
                L(y, "stop-color", "#FF3434"),
                L(E, "offset", "0.667521"),
                L(E, "stop-color", "#FF3434"),
                L(E, "stop-opacity", "0.89"),
                L(O, "offset", "1"),
                L(O, "stop-color", "#FF3434"),
                L(O, "stop-opacity", "0"),
                L(g, "id", "paint1_linear_713_2360"),
                L(g, "x1", "110"),
                L(g, "y1", "10.0001"),
                L(g, "x2", "7.82123"),
                L(g, "y2", "27.86"),
                L(g, "gradientUnits", "userSpaceOnUse"),
                L(M, "offset", "0.14082"),
                L(M, "stop-color", "#FF3434"),
                L(M, "stop-opacity", "0"),
                L(b, "offset", "0.528091"),
                L(b, "stop-color", "#FF3434"),
                L(H, "offset", "0.667521"),
                L(H, "stop-color", "#FF3434"),
                L(H, "stop-opacity", "0.89"),
                L(x, "offset", "1"),
                L(x, "stop-color", "#FF3434"),
                L(x, "stop-opacity", "0"),
                L(N, "id", "paint2_linear_713_2360"),
                L(N, "x1", "100"),
                L(N, "y1", "4"),
                L(N, "x2", "0.418014"),
                L(N, "y2", "22.9401"),
                L(N, "gradientUnits", "userSpaceOnUse"),
                L(s, "width", "119"),
                L(s, "height", "43"),
                L(s, "viewBox", "0 0 119 43"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(a, i),
                w(s, n),
                w(n, d),
                w(d, l),
                w(d, C),
                w(d, h),
                w(n, k),
                w(k, c),
                w(k, u),
                w(k, f),
                w(k, m),
                w(n, g),
                w(g, v),
                w(g, y),
                w(g, E),
                w(g, O),
                w(n, N),
                w(N, M),
                w(N, b),
                w(N, H),
                w(N, x)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class _e extends le {
        constructor(e) {
            super(),
            de(this, e, null, ve, i, {})
        }
    }
    function ye(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, v, y, E, O, N, M, b, H, x;
        return {
            c() {
                s = _("svg"),
                r = _("path"),
                o = _("path"),
                a = _("g"),
                i = _("path"),
                n = _("defs"),
                d = _("filter"),
                l = _("feFlood"),
                C = _("feBlend"),
                h = _("feGaussianBlur"),
                k = _("linearGradient"),
                c = _("stop"),
                u = _("stop"),
                f = _("stop"),
                m = _("stop"),
                g = _("linearGradient"),
                v = _("stop"),
                y = _("stop"),
                E = _("stop"),
                O = _("stop"),
                N = _("linearGradient"),
                M = _("stop"),
                b = _("stop"),
                H = _("stop"),
                x = _("stop"),
                L(r, "d", "M109 33.0002L96.6151 18.3455C92.0996 13.0022 85.9751 10.0002 79.5891 10L9 9.99999"),
                L(r, "stroke", "url(#paint0_linear_713_2359)"),
                L(r, "stroke-opacity", "0.3"),
                L(r, "stroke-miterlimit", "10"),
                L(o, "d", "M109 33.0002L96.6151 18.3455C92.0996 13.0022 85.9751 10.0002 79.5891 10L9 9.99999"),
                L(o, "stroke", "url(#paint1_linear_713_2359)"),
                L(o, "stroke-miterlimit", "10"),
                L(i, "d", "M109 33.0002L96.6151 18.3455C92.0996 13.0022 85.9751 10.0002 79.5891 10L9 9.99999"),
                L(i, "stroke", "url(#paint2_linear_713_2359)"),
                L(i, "stroke-miterlimit", "10"),
                L(a, "filter", "url(#filter0_f_713_2359)"),
                L(l, "flood-opacity", "0"),
                L(l, "result", "BackgroundImageFix"),
                L(C, "mode", "normal"),
                L(C, "in", "SourceGraphic"),
                L(C, "in2", "BackgroundImageFix"),
                L(C, "result", "shape"),
                L(h, "stdDeviation", "4.5"),
                L(h, "result", "effect1_foregroundBlur_713_2359"),
                L(d, "id", "filter0_f_713_2359"),
                L(d, "x", "0"),
                L(d, "y", "0.499992"),
                L(d, "width", "118.382"),
                L(d, "height", "41.8229"),
                L(d, "filterUnits", "userSpaceOnUse"),
                L(d, "color-interpolation-filters", "sRGB"),
                L(c, "offset", "0.14082"),
                L(c, "stop-color", "#FF3434"),
                L(c, "stop-opacity", "0"),
                L(u, "offset", "0.528091"),
                L(u, "stop-color", "#FF3434"),
                L(f, "offset", "0.667521"),
                L(f, "stop-color", "#FF3434"),
                L(f, "stop-opacity", "0.89"),
                L(m, "offset", "1"),
                L(m, "stop-color", "#FF3434"),
                L(m, "stop-opacity", "0"),
                L(k, "id", "paint0_linear_713_2359"),
                L(k, "x1", "9"),
                L(k, "y1", "10"),
                L(k, "x2", "111.179"),
                L(k, "y2", "27.8598"),
                L(k, "gradientUnits", "userSpaceOnUse"),
                L(v, "offset", "0.14082"),
                L(v, "stop-color", "#FF3434"),
                L(v, "stop-opacity", "0"),
                L(y, "offset", "0.528091"),
                L(y, "stop-color", "#FF3434"),
                L(E, "offset", "0.667521"),
                L(E, "stop-color", "#FF3434"),
                L(E, "stop-opacity", "0.89"),
                L(O, "offset", "1"),
                L(O, "stop-color", "#FF3434"),
                L(O, "stop-opacity", "0"),
                L(g, "id", "paint1_linear_713_2359"),
                L(g, "x1", "9"),
                L(g, "y1", "10"),
                L(g, "x2", "111.179"),
                L(g, "y2", "27.8598"),
                L(g, "gradientUnits", "userSpaceOnUse"),
                L(M, "offset", "0.14082"),
                L(M, "stop-color", "#FF3434"),
                L(M, "stop-opacity", "0"),
                L(b, "offset", "0.528091"),
                L(b, "stop-color", "#FF3434"),
                L(H, "offset", "0.667521"),
                L(H, "stop-color", "#FF3434"),
                L(H, "stop-opacity", "0.89"),
                L(x, "offset", "1"),
                L(x, "stop-color", "#FF3434"),
                L(x, "stop-opacity", "0"),
                L(N, "id", "paint2_linear_713_2359"),
                L(N, "x1", "9"),
                L(N, "y1", "10"),
                L(N, "x2", "111.179"),
                L(N, "y2", "27.8598"),
                L(N, "gradientUnits", "userSpaceOnUse"),
                L(s, "width", "119"),
                L(s, "height", "43"),
                L(s, "viewBox", "0 0 119 43"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(a, i),
                w(s, n),
                w(n, d),
                w(d, l),
                w(d, C),
                w(d, h),
                w(n, k),
                w(k, c),
                w(k, u),
                w(k, f),
                w(k, m),
                w(n, g),
                w(g, v),
                w(g, y),
                w(g, E),
                w(g, O),
                w(n, N),
                w(N, M),
                w(N, b),
                w(N, H),
                w(N, x)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class Ee extends le {
        constructor(e) {
            super(),
            de(this, e, null, ye, i, {})
        }
    }
    function Oe(e) {
        const t = e - 1;
        return t * t * t + 1
    }
    function Le(e, {delay: s=0, duration: r=400, easing: o=t}={}) {
        const a = +getComputedStyle(e).opacity;
        return {
            delay: s,
            duration: r,
            easing: o,
            css: e=>"opacity: " + e * a
        }
    }
    function Ne(e, {delay: t=0, duration: s=400, easing: r=Oe}={}) {
        const o = getComputedStyle(e)
          , a = +o.opacity
          , i = parseFloat(o.height)
          , n = parseFloat(o.paddingTop)
          , d = parseFloat(o.paddingBottom)
          , l = parseFloat(o.marginTop)
          , C = parseFloat(o.marginBottom)
          , h = parseFloat(o.borderTopWidth)
          , k = parseFloat(o.borderBottomWidth);
        return {
            delay: t,
            duration: s,
            easing: r,
            css: e=>`overflow: hidden;opacity: ${Math.min(20 * e, 1) * a};height: ${e * i}px;padding-top: ${e * n}px;padding-bottom: ${e * d}px;margin-top: ${e * l}px;margin-bottom: ${e * C}px;border-top-width: ${e * h}px;border-bottom-width: ${e * k}px;`
        }
    }
    function Me(e, {delay: t=0, duration: s=400, easing: r=Oe, start: o=0, opacity: a=0}={}) {
        const i = getComputedStyle(e)
          , n = +i.opacity
          , d = "none" === i.transform ? "" : i.transform
          , l = 1 - o
          , C = n * (1 - a);
        return {
            delay: t,
            duration: s,
            easing: r,
            css: (e,t)=>`\n\t\t\ttransform: ${d} scale(${1 - l * t});\n\t\t\topacity: ${n - C * t}\n\t\t`
        }
    }
    function be(e) {
        let t, s, r, o, a, i;
        return s = new Ee({}),
        r = new ce({}),
        a = new _e({}),
        {
            c() {
                t = v("div"),
                oe(s.$$.fragment),
                oe(r.$$.fragment),
                o = E(),
                oe(a.$$.fragment),
                L(t, "class", "open-btn svelte-wx4pik")
            },
            m(e, n) {
                p(e, t, n),
                ae(s, t, null),
                ae(r, t, null),
                w(t, o),
                ae(a, t, null),
                i = !0
            },
            i(e) {
                i || (ee(s.$$.fragment, e),
                ee(r.$$.fragment, e),
                ee(a.$$.fragment, e),
                i = !0)
            },
            o(e) {
                te(s.$$.fragment, e),
                te(r.$$.fragment, e),
                te(a.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && z(t),
                ie(s),
                ie(r),
                ie(a)
            }
        }
    }
    function He(e) {
        let t, s, r;
        return s = new he({}),
        {
            c() {
                t = v("div"),
                oe(s.$$.fragment),
                L(t, "class", "close-btn svelte-wx4pik")
            },
            m(e, o) {
                p(e, t, o),
                ae(s, t, null),
                r = !0
            },
            i(e) {
                r || (ee(s.$$.fragment, e),
                r = !0)
            },
            o(e) {
                te(s.$$.fragment, e),
                r = !1
            },
            d(e) {
                e && z(t),
                ie(s)
            }
        }
    }
    function xe(t) {
        let s, r, o, a, i, n;
        return r = new ge({}),
        {
            c() {
                s = v("div"),
                oe(r.$$.fragment),
                L(s, "class", "menu-container svelte-wx4pik")
            },
            m(e, o) {
                p(e, s, o),
                ae(r, s, null),
                a = !0,
                i || (n = O(s, "click", t[2]),
                i = !0)
            },
            p: e,
            i(e) {
                a || (ee(r.$$.fragment, e),
                S((()=>{
                    o || (o = re(s, Ne, {}, !0)),
                    o.run(1)
                }
                )),
                a = !0)
            },
            o(e) {
                te(r.$$.fragment, e),
                o || (o = re(s, Ne, {}, !1)),
                o.run(0),
                a = !1
            },
            d(e) {
                e && z(s),
                ie(r),
                e && o && o.end(),
                i = !1,
                n()
            }
        }
    }
    function $e(e) {
        let t, s, r, o, a, i, n, d;
        const l = [He, be]
          , C = [];
        function h(e, t) {
            return e[0] ? 0 : 1
        }
        r = h(e),
        o = C[r] = l[r](e);
        let k = e[0] && xe(e);
        return {
            c() {
                t = v("div"),
                s = v("button"),
                o.c(),
                a = E(),
                k && k.c(),
                L(s, "class", "toggle-menu svelte-wx4pik"),
                L(t, "class", "menu-container svelte-wx4pik")
            },
            m(o, l) {
                p(o, t, l),
                w(t, s),
                C[r].m(s, null),
                w(t, a),
                k && k.m(t, null),
                i = !0,
                n || (d = O(s, "click", e[1]),
                n = !0)
            },
            p(e, [a]) {
                let i = r;
                r = h(e),
                r !== i && (K(),
                te(C[i], 1, 1, (()=>{
                    C[i] = null
                }
                )),
                J(),
                o = C[r],
                o || (o = C[r] = l[r](e),
                o.c()),
                ee(o, 1),
                o.m(s, null)),
                e[0] ? k ? (k.p(e, a),
                1 & a && ee(k, 1)) : (k = xe(e),
                k.c(),
                ee(k, 1),
                k.m(t, null)) : k && (K(),
                te(k, 1, 1, (()=>{
                    k = null
                }
                )),
                J())
            },
            i(e) {
                i || (ee(o),
                ee(k),
                i = !0)
            },
            o(e) {
                te(o),
                te(k),
                i = !1
            },
            d(e) {
                e && z(t),
                C[r].d(),
                k && k.d(),
                n = !1,
                d()
            }
        }
    }
    function je(e, t, s) {
        let r = !1;
        window.addEventListener("load", (function() {
            document.getElementById("menu");
            var e = document.getElementsByClassName("btn");
            console.log("click");
            for (var t = 0; t < e.length; t++)
                e[t].addEventListener("click", (function() {
                    console.log("click");
                    var e = document.getElementsByClassName("active");
                    e[0].className = e[0].className.replace("active", ""),
                    console.log(e[0].className),
                    this.className += " active"
                }
                ))
        }
        ));
        return [r, ()=>s(0, r = !r), ()=>s(0, r = !r)]
    }
    class Ve extends le {
        constructor(e) {
            super(),
            de(this, e, je, $e, i, {})
        }
    }
    function Be(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u;
        return {
            c() {
                s = _("svg"),
                r = _("g"),
                o = _("path"),
                a = _("defs"),
                i = _("clipPath"),
                n = _("path"),
                d = _("g"),
                l = _("path"),
                C = _("defs"),
                h = _("clipPath"),
                k = _("path"),
                c = _("style"),
                u = y("svg .seqpICfA_0 {\r\n\topacity: 1;\r\n\ttransition: 2;\r\n\tstroke-dasharray: 174 176;\r\n\tstroke-dashoffset: 175;\r\n\tanimation: seqpICfA_erase 1305ms ease-in 0ms forwards;\r\n    padding:20px;\r\n}\r\n\r\nsvg .seqpICfA_1 {\r\n\topacity: 1;\r\n\ttransition: 2;\r\n\tstroke-dasharray: 92 94;\r\n\tstroke-dashoffset: 93;\r\n\tanimation: seqpICfA_erase 1305ms ease-in 0ms forwards;\r\n    padding:20px;\r\n}\r\n\r\nsvg:hover .seqpICfA_0 {\r\n\tstroke-dasharray: 174 176;\r\n\tstroke-dashoffset: 175;\r\n\tanimation: seqpICfA_draw 1305ms ease-in 0ms forwards;\r\n\topacity: 1;\r\n}\r\n\r\nsvg:hover .seqpICfA_1 {\r\n\tstroke-dasharray: 92 94;\r\n\tstroke-dashoffset: 93;\r\n\tanimation: seqpICfA_draw 694ms ease-in 1305ms forwards;\r\n\topacity: 1;\r\n}\r\n\r\n.seqpICfA_2,\r\n.seqpICfA_3 {\r\n\topacity: 0.1;\r\n\ttransition: 0.5;\r\n}\r\n\r\n@keyframes seqpICfA_erase {\r\n\t0% {\r\n\t\tstroke-dashoffset: 0;\r\n\t}\r\n}\r\n\r\n@keyframes seqpICfA_draw {\r\n\t100% {\r\n\t\tstroke-dashoffset: 0;\r\n\t}\r\n}\r\n\r\n@keyframes seqpICfA_fade {\r\n\t0% {\r\n\t\tstroke-opacity: 1;\r\n\t}\r\n\t93.54838709677419% {\r\n\t\tstroke-opacity: 1;\r\n\t}\r\n\t100% {\r\n\t\tstroke-opacity: 0;\r\n\t}\r\n}"),
                L(o, "fill-rule", "evenodd"),
                L(o, "clip-rule", "evenodd"),
                L(o, "d", "M23.7409 3.29997L25.0109 1.49997L25.7209 0.49997H24.0909L23.6009 0.77997H14.7509L14.4809 1.31997H12.2009L11.9309 0.74997H3.08094L2.59094 0.469971H0.960938L1.67094 1.46997L2.95094 3.26997L3.46094 3.99997H5.05094L5.10094 4.06997L9.58094 10.6L9.64094 10.69V10.74V10.8V10.88V10.95L9.47094 11.51L9.34094 11.92L9.26094 12.15L9.75094 12.84L12.7509 17.08L13.3609 17.95L13.9709 17.08L16.9709 12.85L17.4609 12.15L17.3909 11.91L17.2609 11.51L17.0809 10.95V10.88V10.8V10.74V10.69L17.1409 10.6L21.6209 4.07997V4.00997H23.2009L23.7409 3.29997ZM21.2409 4.08997L21.9909 3.03997H15.0509L14.8309 3.48997H11.8409L11.6209 3.03997H4.69094L5.44094 4.08997H6.77094L7.03094 4.43997V4.49997L10.8809 10.1L11.1009 10.43L10.9909 10.81V10.86L10.7509 11.61L13.2809 15.18L15.8409 11.69L15.6109 10.96L15.4609 10.53L15.7209 10.17L19.5509 4.57997L19.6009 4.51997L19.8509 4.16997H21.2409V4.08997ZM13.3509 9.74997C13.7845 9.75195 14.2089 9.62519 14.5703 9.38576C14.9318 9.14633 15.2141 8.80499 15.3814 8.405C15.5486 8.00501 15.5934 7.56436 15.5101 7.13889C15.4267 6.71341 15.2189 6.32226 14.913 6.01498C14.6072 5.7077 14.217 5.49813 13.7919 5.41281C13.3668 5.3275 12.9259 5.37028 12.5252 5.53574C12.1244 5.70119 11.7818 5.98188 11.5407 6.34224C11.2996 6.7026 11.1709 7.1264 11.1709 7.55997C11.1709 8.13907 11.4003 8.69459 11.8088 9.10501C12.2174 9.51543 12.7718 9.74733 13.3509 9.74997V9.74997ZM23.5309 2.84997H22.3309L22.2309 2.98997L22.1409 3.12997L18.0009 9.12997L17.9409 9.20997L17.8609 9.31997V9.47997V9.57997L18.0909 10.33L18.4809 9.77997L18.5909 9.62997L18.8209 9.29997L22.8409 3.83997L23.0309 3.56997L23.1509 3.39997L23.5309 2.84997ZM8.32094 10.41L8.57094 9.61997V9.53997V9.37997L8.49094 9.26997L8.44094 9.20997L4.28094 3.13997L4.19094 3.00997L4.09094 2.85997H2.89094L3.28094 3.41997L3.40094 3.58997L3.59094 3.85997L7.51094 9.39997L7.84094 9.74997L7.94094 9.88997L8.32094 10.41Z"),
                L(o, "stroke", "white"),
                L(o, "stroke-miterlimit", "10"),
                L(o, "class", "seqpICfA_0"),
                L(r, "clip-path", "url(#clip0)"),
                L(n, "width", "26.68"),
                L(n, "height", "18.86"),
                L(n, "fill", "white"),
                L(n, "d", "M0 0 L26.68 0 L26.68 18.86 L0 18.86 Z"),
                L(n, "class", "seqpICfA_1"),
                L(i, "id", "clip0"),
                L(l, "clip-rule", "evenodd"),
                L(l, "d", "M23.7409 3.29997L25.0109 1.49997L25.7209 0.49997H24.0909L23.6009 0.77997H14.7509L14.4809 1.31997H12.2009L11.9309 0.74997H3.08094L2.59094 0.469971H0.960938L1.67094 1.46997L2.95094 3.26997L3.46094 3.99997H5.05094L5.10094 4.06997L9.58094 10.6L9.64094 10.69V10.74V10.8V10.88V10.95L9.47094 11.51L9.34094 11.92L9.26094 12.15L9.75094 12.84L12.7509 17.08L13.3609 17.95L13.9709 17.08L16.9709 12.85L17.4609 12.15L17.3909 11.91L17.2609 11.51L17.0809 10.95V10.88V10.8V10.74V10.69L17.1409 10.6L21.6209 4.07997V4.00997H23.2009L23.7409 3.29997ZM21.2409 4.08997L21.9909 3.03997H15.0509L14.8309 3.48997H11.8409L11.6209 3.03997H4.69094L5.44094 4.08997H6.77094L7.03094 4.43997V4.49997L10.8809 10.1L11.1009 10.43L10.9909 10.81V10.86L10.7509 11.61L13.2809 15.18L15.8409 11.69L15.6109 10.96L15.4609 10.53L15.7209 10.17L19.5509 4.57997L19.6009 4.51997L19.8509 4.16997H21.2409V4.08997ZM13.3509 9.74997C13.7845 9.75195 14.2089 9.62519 14.5703 9.38576C14.9318 9.14633 15.2141 8.80499 15.3814 8.405C15.5486 8.00501 15.5934 7.56436 15.5101 7.13889C15.4267 6.71341 15.2189 6.32226 14.913 6.01498C14.6072 5.7077 14.217 5.49813 13.7919 5.41281C13.3668 5.3275 12.9259 5.37028 12.5252 5.53574C12.1244 5.70119 11.7818 5.98188 11.5407 6.34224C11.2996 6.7026 11.1709 7.1264 11.1709 7.55997C11.1709 8.13907 11.4003 8.69459 11.8088 9.10501C12.2174 9.51543 12.7718 9.74733 13.3509 9.74997V9.74997ZM23.5309 2.84997H22.3309L22.2309 2.98997L22.1409 3.12997L18.0009 9.12997L17.9409 9.20997L17.8609 9.31997V9.47997V9.57997L18.0909 10.33L18.4809 9.77997L18.5909 9.62997L18.8209 9.29997L22.8409 3.83997L23.0309 3.56997L23.1509 3.39997L23.5309 2.84997ZM8.32094 10.41L8.57094 9.61997V9.53997V9.37997L8.49094 9.26997L8.44094 9.20997L4.28094 3.13997L4.19094 3.00997L4.09094 2.85997H2.89094L3.28094 3.41997L3.40094 3.58997L3.59094 3.85997L7.51094 9.39997L7.84094 9.74997L7.94094 9.88997L8.32094 10.41Z"),
                L(l, "stroke", "white"),
                L(l, "stroke-miterlimit", "10"),
                L(l, "class", "seqpICfA_2"),
                L(d, "clip-path", "url(#clip0)"),
                L(k, "width", "26.68"),
                L(k, "height", "18.86"),
                L(k, "fill", "black"),
                L(k, "d", "M0 0 L26.68 0 L26.68 18.86 L0 18.86 Z"),
                L(k, "class", "seqpICfA_2"),
                L(h, "id", "clip0"),
                L(c, "data-made-with", "vivus-instant"),
                L(s, "width", "100%"),
                L(s, "height", "100%"),
                L(s, "viewBox", "0 0 27 19"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg"),
                L(s, "style", "")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(r, o),
                w(s, a),
                w(a, i),
                w(i, n),
                w(s, d),
                w(d, l),
                w(s, C),
                w(C, h),
                w(h, k),
                w(s, c),
                w(c, u)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class Ze extends le {
        constructor(e) {
            super(),
            de(this, e, null, Be, i, {})
        }
    }
    var Te = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function Ye(e) {
        throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')
    }
    var Fe, De, Ie = (Fe = function(e, t) {
        e.exports = function e(t, s, r) {
            function o(i, n) {
                if (!s[i]) {
                    if (!t[i]) {
                        if (!n && Ye)
                            return Ye(i);
                        if (a)
                            return a(i, !0);
                        var d = new Error("Cannot find module '" + i + "'");
                        throw d.code = "MODULE_NOT_FOUND",
                        d
                    }
                    var l = s[i] = {
                        exports: {}
                    };
                    t[i][0].call(l.exports, (function(e) {
                        var s = t[i][1][e];
                        return o(s || e)
                    }
                    ), l, l.exports, e, t, s, r)
                }
                return s[i].exports
            }
            for (var a = Ye, i = 0; i < r.length; i++)
                o(r[i]);
            return o
        }({
            1: [function(e, t, s) {
                var r = Object.getOwnPropertySymbols
                  , o = Object.prototype.hasOwnProperty
                  , a = Object.prototype.propertyIsEnumerable;
                function i(e) {
                    if (null == e)
                        throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                function n() {
                    try {
                        if (!Object.assign)
                            return !1;
                        var e = new String("abc");
                        if (e[5] = "de",
                        "5" === Object.getOwnPropertyNames(e)[0])
                            return !1;
                        for (var t = {}, s = 0; s < 10; s++)
                            t["_" + String.fromCharCode(s)] = s;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        }
                        )).join(""))
                            return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            r[e] = e
                        }
                        )),
                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (e) {
                        return !1
                    }
                }
                t.exports = n() ? Object.assign : function(e, t) {
                    for (var s, n, d = i(e), l = 1; l < arguments.length; l++) {
                        for (var C in s = Object(arguments[l]))
                            o.call(s, C) && (d[C] = s[C]);
                        if (r) {
                            n = r(s);
                            for (var h = 0; h < n.length; h++)
                                a.call(s, n[h]) && (d[n[h]] = s[n[h]])
                        }
                    }
                    return d
                }
            }
            , {}],
            2: [function(e, t, s) {
                (function(e) {
                    (function() {
                        var s, r, o, a, i, n;
                        "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                            return performance.now()
                        }
                        : null != e && e.hrtime ? (t.exports = function() {
                            return (s() - i) / 1e6
                        }
                        ,
                        r = e.hrtime,
                        a = (s = function() {
                            var e;
                            return 1e9 * (e = r())[0] + e[1]
                        }
                        )(),
                        n = 1e9 * e.uptime(),
                        i = a - n) : Date.now ? (t.exports = function() {
                            return Date.now() - o
                        }
                        ,
                        o = Date.now()) : (t.exports = function() {
                            return (new Date).getTime() - o
                        }
                        ,
                        o = (new Date).getTime())
                    }
                    ).call(this)
                }
                ).call(this, e("_process"))
            }
            , {
                _process: 3
            }],
            3: [function(e, t, s) {
                var r, o, a = t.exports = {};
                function i() {
                    throw new Error("setTimeout has not been defined")
                }
                function n() {
                    throw new Error("clearTimeout has not been defined")
                }
                function d(e) {
                    if (r === setTimeout)
                        return setTimeout(e, 0);
                    if ((r === i || !r) && setTimeout)
                        return r = setTimeout,
                        setTimeout(e, 0);
                    try {
                        return r(e, 0)
                    } catch (t) {
                        try {
                            return r.call(null, e, 0)
                        } catch (t) {
                            return r.call(this, e, 0)
                        }
                    }
                }
                function l(e) {
                    if (o === clearTimeout)
                        return clearTimeout(e);
                    if ((o === n || !o) && clearTimeout)
                        return o = clearTimeout,
                        clearTimeout(e);
                    try {
                        return o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }
                !function() {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : i
                    } catch (e) {
                        r = i
                    }
                    try {
                        o = "function" == typeof clearTimeout ? clearTimeout : n
                    } catch (e) {
                        o = n
                    }
                }();
                var C, h = [], k = !1, c = -1;
                function u() {
                    k && C && (k = !1,
                    C.length ? h = C.concat(h) : c = -1,
                    h.length && w())
                }
                function w() {
                    if (!k) {
                        var e = d(u);
                        k = !0;
                        for (var t = h.length; t; ) {
                            for (C = h,
                            h = []; ++c < t; )
                                C && C[c].run();
                            c = -1,
                            t = h.length
                        }
                        C = null,
                        k = !1,
                        l(e)
                    }
                }
                function f(e, t) {
                    this.fun = e,
                    this.array = t
                }
                function m() {}
                a.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var s = 1; s < arguments.length; s++)
                            t[s - 1] = arguments[s];
                    h.push(new f(e,t)),
                    1 !== h.length || k || d(w)
                }
                ,
                f.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }
                ,
                a.title = "browser",
                a.browser = !0,
                a.env = {},
                a.argv = [],
                a.version = "",
                a.versions = {},
                a.on = m,
                a.addListener = m,
                a.once = m,
                a.off = m,
                a.removeListener = m,
                a.removeAllListeners = m,
                a.emit = m,
                a.prependListener = m,
                a.prependOnceListener = m,
                a.listeners = function(e) {
                    return []
                }
                ,
                a.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }
                ,
                a.cwd = function() {
                    return "/"
                }
                ,
                a.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }
                ,
                a.umask = function() {
                    return 0
                }
            }
            , {}],
            4: [function(e, t, s) {
                (function(s) {
                    for (var r = e("performance-now"), o = "undefined" == typeof window ? s : window, a = ["moz", "webkit"], i = "AnimationFrame", n = o["request" + i], d = o["cancel" + i] || o["cancelRequest" + i], l = 0; !n && l < a.length; l++)
                        n = o[a[l] + "Request" + i],
                        d = o[a[l] + "Cancel" + i] || o[a[l] + "CancelRequest" + i];
                    if (!n || !d) {
                        var C = 0
                          , h = 0
                          , k = []
                          , c = 1e3 / 60;
                        n = function(e) {
                            if (0 === k.length) {
                                var t = r()
                                  , s = Math.max(0, c - (t - C));
                                C = s + t,
                                setTimeout((function() {
                                    var e = k.slice(0);
                                    k.length = 0;
                                    for (var t = 0; t < e.length; t++)
                                        if (!e[t].cancelled)
                                            try {
                                                e[t].callback(C)
                                            } catch (e) {
                                                setTimeout((function() {
                                                    throw e
                                                }
                                                ), 0)
                                            }
                                }
                                ), Math.round(s))
                            }
                            return k.push({
                                handle: ++h,
                                callback: e,
                                cancelled: !1
                            }),
                            h
                        }
                        ,
                        d = function(e) {
                            for (var t = 0; t < k.length; t++)
                                k[t].handle === e && (k[t].cancelled = !0)
                        }
                    }
                    t.exports = function(e) {
                        return n.call(o, e)
                    }
                    ,
                    t.exports.cancel = function() {
                        d.apply(o, arguments)
                    }
                    ,
                    t.exports.polyfill = function() {
                        o.requestAnimationFrame = n,
                        o.cancelAnimationFrame = d
                    }
                }
                ).call(this, void 0 !== Te ? Te : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }
            , {
                "performance-now": 2
            }],
            5: [function(e, t, s) {
                var r = function() {
                    function e(e, t) {
                        for (var s = 0; s < t.length; s++) {
                            var r = t[s];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, s, r) {
                        return s && e(t.prototype, s),
                        r && e(t, r),
                        t
                    }
                }();
                function o(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                var a = e("raf")
                  , i = e("object-assign")
                  , n = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
                    clamp: function(e, t, s) {
                        return t < s ? e < t ? t : e > s ? s : e : e < s ? s : e > t ? t : e
                    },
                    data: function(e, t) {
                        return n.deserialize(e.getAttribute("data-" + t))
                    },
                    deserialize: function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : e)
                    },
                    camelCase: function(e) {
                        return e.replace(/-+(.)?/g, (function(e, t) {
                            return t ? t.toUpperCase() : ""
                        }
                        ))
                    },
                    accelerate: function(e) {
                        n.css(e, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
                        n.css(e, "transform-style", "preserve-3d"),
                        n.css(e, "backface-visibility", "hidden")
                    },
                    transformSupport: function(e) {
                        for (var t = document.createElement("div"), s = !1, r = null, o = !1, a = null, i = null, d = 0, l = n.vendors.length; d < l; d++)
                            if (null !== n.vendors[d] ? (a = n.vendors[d][0] + "transform",
                            i = n.vendors[d][1] + "Transform") : (a = "transform",
                            i = "transform"),
                            void 0 !== t.style[i]) {
                                s = !0;
                                break
                            }
                        switch (e) {
                        case "2D":
                            o = s;
                            break;
                        case "3D":
                            if (s) {
                                var C = document.body || document.createElement("body")
                                  , h = document.documentElement
                                  , k = h.style.overflow
                                  , c = !1;
                                document.body || (c = !0,
                                h.style.overflow = "hidden",
                                h.appendChild(C),
                                C.style.overflow = "hidden",
                                C.style.background = ""),
                                C.appendChild(t),
                                t.style[i] = "translate3d(1px,1px,1px)",
                                o = void 0 !== (r = window.getComputedStyle(t).getPropertyValue(a)) && r.length > 0 && "none" !== r,
                                h.style.overflow = k,
                                C.removeChild(t),
                                c && (C.removeAttribute("style"),
                                C.parentNode.removeChild(C))
                            }
                        }
                        return o
                    },
                    css: function(e, t, s) {
                        var r = n.propertyCache[t];
                        if (!r)
                            for (var o = 0, a = n.vendors.length; o < a; o++)
                                if (r = null !== n.vendors[o] ? n.camelCase(n.vendors[o][1] + "-" + t) : t,
                                void 0 !== e.style[r]) {
                                    n.propertyCache[t] = r;
                                    break
                                }
                        e.style[r] = s
                    }
                }
                  , d = 30
                  , l = {
                    relativeInput: !1,
                    clipRelativeInput: !1,
                    inputElement: null,
                    hoverOnly: !1,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: !1,
                    calibrateY: !0,
                    invertX: !0,
                    invertY: !0,
                    limitX: !1,
                    limitY: !1,
                    scalarX: 10,
                    scalarY: 10,
                    frictionX: .1,
                    frictionY: .1,
                    originX: .5,
                    originY: .5,
                    pointerEvents: !1,
                    precision: 1,
                    onReady: null,
                    selector: null
                }
                  , C = function() {
                    function e(t, s) {
                        o(this, e),
                        this.element = t;
                        var r = {
                            calibrateX: n.data(this.element, "calibrate-x"),
                            calibrateY: n.data(this.element, "calibrate-y"),
                            invertX: n.data(this.element, "invert-x"),
                            invertY: n.data(this.element, "invert-y"),
                            limitX: n.data(this.element, "limit-x"),
                            limitY: n.data(this.element, "limit-y"),
                            scalarX: n.data(this.element, "scalar-x"),
                            scalarY: n.data(this.element, "scalar-y"),
                            frictionX: n.data(this.element, "friction-x"),
                            frictionY: n.data(this.element, "friction-y"),
                            originX: n.data(this.element, "origin-x"),
                            originY: n.data(this.element, "origin-y"),
                            pointerEvents: n.data(this.element, "pointer-events"),
                            precision: n.data(this.element, "precision"),
                            relativeInput: n.data(this.element, "relative-input"),
                            clipRelativeInput: n.data(this.element, "clip-relative-input"),
                            hoverOnly: n.data(this.element, "hover-only"),
                            inputElement: document.querySelector(n.data(this.element, "input-element")),
                            selector: n.data(this.element, "selector")
                        };
                        for (var a in r)
                            null === r[a] && delete r[a];
                        i(this, l, r, s),
                        this.inputElement || (this.inputElement = this.element),
                        this.calibrationTimer = null,
                        this.calibrationFlag = !0,
                        this.enabled = !1,
                        this.depthsX = [],
                        this.depthsY = [],
                        this.raf = null,
                        this.bounds = null,
                        this.elementPositionX = 0,
                        this.elementPositionY = 0,
                        this.elementWidth = 0,
                        this.elementHeight = 0,
                        this.elementCenterX = 0,
                        this.elementCenterY = 0,
                        this.elementRangeX = 0,
                        this.elementRangeY = 0,
                        this.calibrationX = 0,
                        this.calibrationY = 0,
                        this.inputX = 0,
                        this.inputY = 0,
                        this.motionX = 0,
                        this.motionY = 0,
                        this.velocityX = 0,
                        this.velocityY = 0,
                        this.onMouseMove = this.onMouseMove.bind(this),
                        this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
                        this.onDeviceMotion = this.onDeviceMotion.bind(this),
                        this.onOrientationTimer = this.onOrientationTimer.bind(this),
                        this.onMotionTimer = this.onMotionTimer.bind(this),
                        this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
                        this.onAnimationFrame = this.onAnimationFrame.bind(this),
                        this.onWindowResize = this.onWindowResize.bind(this),
                        this.windowWidth = null,
                        this.windowHeight = null,
                        this.windowCenterX = null,
                        this.windowCenterY = null,
                        this.windowRadiusX = null,
                        this.windowRadiusY = null,
                        this.portrait = !1,
                        this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
                        this.motionSupport = !!window.DeviceMotionEvent && !this.desktop,
                        this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop,
                        this.orientationStatus = 0,
                        this.motionStatus = 0,
                        this.initialise()
                    }
                    return r(e, [{
                        key: "initialise",
                        value: function() {
                            void 0 === this.transform2DSupport && (this.transform2DSupport = n.transformSupport("2D"),
                            this.transform3DSupport = n.transformSupport("3D")),
                            this.transform3DSupport && n.accelerate(this.element),
                            "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"),
                            this.pointerEvents || (this.element.style.pointerEvents = "none"),
                            this.updateLayers(),
                            this.updateDimensions(),
                            this.enable(),
                            this.queueCalibration(this.calibrationDelay)
                        }
                    }, {
                        key: "doReadyCallback",
                        value: function() {
                            this.onReady && this.onReady()
                        }
                    }, {
                        key: "updateLayers",
                        value: function() {
                            this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children,
                            this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."),
                            this.depthsX = [],
                            this.depthsY = [];
                            for (var e = 0; e < this.layers.length; e++) {
                                var t = this.layers[e];
                                this.transform3DSupport && n.accelerate(t),
                                t.style.position = e ? "absolute" : "relative",
                                t.style.display = "block",
                                t.style.left = 0,
                                t.style.top = 0;
                                var s = n.data(t, "depth") || 0;
                                this.depthsX.push(n.data(t, "depth-x") || s),
                                this.depthsY.push(n.data(t, "depth-y") || s)
                            }
                        }
                    }, {
                        key: "updateDimensions",
                        value: function() {
                            this.windowWidth = window.innerWidth,
                            this.windowHeight = window.innerHeight,
                            this.windowCenterX = this.windowWidth * this.originX,
                            this.windowCenterY = this.windowHeight * this.originY,
                            this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX),
                            this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                        }
                    }, {
                        key: "updateBounds",
                        value: function() {
                            this.bounds = this.inputElement.getBoundingClientRect(),
                            this.elementPositionX = this.bounds.left,
                            this.elementPositionY = this.bounds.top,
                            this.elementWidth = this.bounds.width,
                            this.elementHeight = this.bounds.height,
                            this.elementCenterX = this.elementWidth * this.originX,
                            this.elementCenterY = this.elementHeight * this.originY,
                            this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX),
                            this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                        }
                    }, {
                        key: "queueCalibration",
                        value: function(e) {
                            clearTimeout(this.calibrationTimer),
                            this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            this.enabled || (this.enabled = !0,
                            this.orientationSupport ? (this.portrait = !1,
                            window.addEventListener("deviceorientation", this.onDeviceOrientation),
                            this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1,
                            window.addEventListener("devicemotion", this.onDeviceMotion),
                            this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0,
                            this.calibrationY = 0,
                            this.portrait = !1,
                            window.addEventListener("mousemove", this.onMouseMove),
                            this.doReadyCallback()),
                            window.addEventListener("resize", this.onWindowResize),
                            this.raf = a(this.onAnimationFrame))
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this.enabled && (this.enabled = !1,
                            this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove),
                            window.removeEventListener("resize", this.onWindowResize),
                            a.cancel(this.raf))
                        }
                    }, {
                        key: "calibrate",
                        value: function(e, t) {
                            this.calibrateX = void 0 === e ? this.calibrateX : e,
                            this.calibrateY = void 0 === t ? this.calibrateY : t
                        }
                    }, {
                        key: "invert",
                        value: function(e, t) {
                            this.invertX = void 0 === e ? this.invertX : e,
                            this.invertY = void 0 === t ? this.invertY : t
                        }
                    }, {
                        key: "friction",
                        value: function(e, t) {
                            this.frictionX = void 0 === e ? this.frictionX : e,
                            this.frictionY = void 0 === t ? this.frictionY : t
                        }
                    }, {
                        key: "scalar",
                        value: function(e, t) {
                            this.scalarX = void 0 === e ? this.scalarX : e,
                            this.scalarY = void 0 === t ? this.scalarY : t
                        }
                    }, {
                        key: "limit",
                        value: function(e, t) {
                            this.limitX = void 0 === e ? this.limitX : e,
                            this.limitY = void 0 === t ? this.limitY : t
                        }
                    }, {
                        key: "origin",
                        value: function(e, t) {
                            this.originX = void 0 === e ? this.originX : e,
                            this.originY = void 0 === t ? this.originY : t
                        }
                    }, {
                        key: "setInputElement",
                        value: function(e) {
                            this.inputElement = e,
                            this.updateDimensions()
                        }
                    }, {
                        key: "setPosition",
                        value: function(e, t, s) {
                            t = t.toFixed(this.precision) + "px",
                            s = s.toFixed(this.precision) + "px",
                            this.transform3DSupport ? n.css(e, "transform", "translate3d(" + t + "," + s + ",0)") : this.transform2DSupport ? n.css(e, "transform", "translate(" + t + "," + s + ")") : (e.style.left = t,
                            e.style.top = s)
                        }
                    }, {
                        key: "onOrientationTimer",
                        value: function() {
                            this.orientationSupport && 0 === this.orientationStatus ? (this.disable(),
                            this.orientationSupport = !1,
                            this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onMotionTimer",
                        value: function() {
                            this.motionSupport && 0 === this.motionStatus ? (this.disable(),
                            this.motionSupport = !1,
                            this.enable()) : this.doReadyCallback()
                        }
                    }, {
                        key: "onCalibrationTimer",
                        value: function() {
                            this.calibrationFlag = !0
                        }
                    }, {
                        key: "onWindowResize",
                        value: function() {
                            this.updateDimensions()
                        }
                    }, {
                        key: "onAnimationFrame",
                        value: function() {
                            this.updateBounds();
                            var e = this.inputX - this.calibrationX
                              , t = this.inputY - this.calibrationY;
                            (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0),
                            this.portrait ? (this.motionX = this.calibrateX ? t : this.inputY,
                            this.motionY = this.calibrateY ? e : this.inputX) : (this.motionX = this.calibrateX ? e : this.inputX,
                            this.motionY = this.calibrateY ? t : this.inputY),
                            this.motionX *= this.elementWidth * (this.scalarX / 100),
                            this.motionY *= this.elementHeight * (this.scalarY / 100),
                            isNaN(parseFloat(this.limitX)) || (this.motionX = n.clamp(this.motionX, -this.limitX, this.limitX)),
                            isNaN(parseFloat(this.limitY)) || (this.motionY = n.clamp(this.motionY, -this.limitY, this.limitY)),
                            this.velocityX += (this.motionX - this.velocityX) * this.frictionX,
                            this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var s = 0; s < this.layers.length; s++) {
                                var r = this.layers[s]
                                  , o = this.depthsX[s]
                                  , i = this.depthsY[s]
                                  , d = this.velocityX * (o * (this.invertX ? -1 : 1))
                                  , l = this.velocityY * (i * (this.invertY ? -1 : 1));
                                this.setPosition(r, d, l)
                            }
                            this.raf = a(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function(e, t) {
                            var s = (e || 0) / d
                              , r = (t || 0) / d
                              , o = this.windowHeight > this.windowWidth;
                            this.portrait !== o && (this.portrait = o,
                            this.calibrationFlag = !0),
                            this.calibrationFlag && (this.calibrationFlag = !1,
                            this.calibrationX = s,
                            this.calibrationY = r),
                            this.inputX = s,
                            this.inputY = r
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function(e) {
                            var t = e.beta
                              , s = e.gamma;
                            null !== t && null !== s && (this.orientationStatus = 1,
                            this.rotate(t, s))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function(e) {
                            var t = e.rotationRate.beta
                              , s = e.rotationRate.gamma;
                            null !== t && null !== s && (this.motionStatus = 1,
                            this.rotate(t, s))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function(e) {
                            var t = e.clientX
                              , s = e.clientY;
                            if (this.hoverOnly && (t < this.elementPositionX || t > this.elementPositionX + this.elementWidth || s < this.elementPositionY || s > this.elementPositionY + this.elementHeight))
                                return this.inputX = 0,
                                void (this.inputY = 0);
                            this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.elementPositionX),
                            t = Math.min(t, this.elementPositionX + this.elementWidth),
                            s = Math.max(s, this.elementPositionY),
                            s = Math.min(s, this.elementPositionY + this.elementHeight)),
                            this.elementRangeX && this.elementRangeY && (this.inputX = (t - this.elementPositionX - this.elementCenterX) / this.elementRangeX,
                            this.inputY = (s - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (t - this.windowCenterX) / this.windowRadiusX,
                            this.inputY = (s - this.windowCenterY) / this.windowRadiusY)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.disable(),
                            clearTimeout(this.calibrationTimer),
                            clearTimeout(this.detectionTimer),
                            this.element.removeAttribute("style");
                            for (var e = 0; e < this.layers.length; e++)
                                this.layers[e].removeAttribute("style");
                            delete this.element,
                            delete this.layers
                        }
                    }, {
                        key: "version",
                        value: function() {
                            return "3.1.0"
                        }
                    }]),
                    e
                }();
                t.exports = C
            }
            , {
                "object-assign": 1,
                raf: 4
            }]
        }, {}, [5])(5)
    }
    ,
    Fe(De = {
        exports: {}
    }, De.exports),
    De.exports);
    function Se(e, t, s) {
        const r = e.slice();
        return r[4] = t[s],
        r[6] = s,
        r
    }
    function Xe(t) {
        let s, r, o, a, i, n;
        return {
            c() {
                s = v("div"),
                r = v("img"),
                i = E(),
                d(r.src, o = t[4]) || L(r, "src", o),
                L(r, "alt", ""),
                L(r, "class", a = "rotating-ring" + t[6] + " svelte-cu94nu"),
                L(s, "data-depth", n = t[6] + .6)
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, i)
            },
            p: e,
            d(e) {
                e && z(s)
            }
        }
    }
    function Ue(s) {
        let r, o, i, n, d, l, h = s[0], k = [];
        for (let e = 0; e < h.length; e += 1)
            k[e] = Xe(Se(s, h, e));
        return {
            c() {
                r = v("main"),
                o = v("section"),
                i = v("div");
                for (let e = 0; e < k.length; e += 1)
                    k[e].c();
                L(i, "class", "container  svelte-cu94nu"),
                L(o, "class", "parallax svelte-cu94nu"),
                b(o, "--ring-size", Re),
                L(r, "class", "parallax-container svelte-cu94nu")
            },
            m(t, n) {
                p(t, r, n),
                w(r, o),
                w(o, i);
                for (let e = 0; e < k.length; e += 1)
                    k[e].m(i, null);
                var C;
                d || (C = s[1].call(null, i),
                l = C && a(C.destroy) ? C.destroy : e,
                d = !0)
            },
            p(e, [t]) {
                if (1 & t) {
                    let s;
                    for (h = e[0],
                    s = 0; s < h.length; s += 1) {
                        const r = Se(e, h, s);
                        k[s] ? k[s].p(r, t) : (k[s] = Xe(r),
                        k[s].c(),
                        k[s].m(i, null))
                    }
                    for (; s < k.length; s += 1)
                        k[s].d(1);
                    k.length = h.length
                }
            },
            i(s) {
                n || S((()=>{
                    n = function(s, r, o) {
                        let i, n, d = r(s, o), l = !1, h = 0;
                        function k() {
                            i && V(s, i)
                        }
                        function c() {
                            const {delay: r=0, duration: o=300, easing: a=t, tick: c=e, css: w} = d || se;
                            w && (i = j(s, 0, 1, o, r, a, w, h++)),
                            c(0, 1);
                            const f = C() + r
                              , m = f + o;
                            n && n.abort(),
                            l = !0,
                            S((()=>Q(s, !0, "start"))),
                            n = u((e=>{
                                if (l) {
                                    if (e >= m)
                                        return c(1, 0),
                                        Q(s, !0, "end"),
                                        k(),
                                        l = !1;
                                    if (e >= f) {
                                        const t = a((e - f) / o);
                                        c(t, 1 - t)
                                    }
                                }
                                return l
                            }
                            ))
                        }
                        let w = !1;
                        return {
                            start() {
                                w || (w = !0,
                                V(s),
                                a(d) ? (d = d(),
                                q().then(c)) : c())
                            },
                            invalidate() {
                                w = !1
                            },
                            end() {
                                l && (k(),
                                l = !1)
                            }
                        }
                    }(r, Me, {}),
                    n.start()
                }
                ))
            },
            o: e,
            d(e) {
                e && z(r),
                g(k, e),
                d = !1,
                l()
            }
        }
    }
    let Re = "50vw";
    function Ae(e) {
        let t;
        return [["images/RING-hero.svg", "images/radial-inner-ring.svg", "images/dotted-ring.svg", " images/radial-circle.svg", " images/Frame.svg", " images/Reticle.svg"], e=>{
            console.log(e),
            t = new Ie(e),
            t.scalar(5),
            t.invert(!1, !1)
        }
        ]
    }
    class Pe extends le {
        constructor(e) {
            super(),
            de(this, e, Ae, Ue, i, {})
        }
    }
    function qe(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, v, y, E;
        return {
            c() {
                s = _("svg"),
                r = _("rect"),
                o = _("circle"),
                a = _("circle"),
                i = _("circle"),
                n = _("circle"),
                d = _("circle"),
                l = _("circle"),
                C = _("mask"),
                h = _("path"),
                k = _("path"),
                c = _("path"),
                u = _("mask"),
                f = _("path"),
                m = _("path"),
                g = _("path"),
                v = _("circle"),
                y = _("path"),
                E = _("path"),
                L(r, "x", "0.5"),
                L(r, "y", "0.5"),
                L(r, "width", "205.581"),
                L(r, "height", "53"),
                L(r, "rx", "15.5"),
                L(r, "stroke", "#F2F2F2"),
                L(r, "class", "play-reel-1"),
                L(o, "cx", "194.553"),
                L(o, "cy", "26.7323"),
                L(o, "r", "1.8705"),
                L(o, "transform", "rotate(90 194.553 26.7323)"),
                L(o, "stroke", "#EB5757"),
                L(o, "class", "play-reel-2"),
                L(a, "cx", "188.378"),
                L(a, "cy", "23.1764"),
                L(a, "r", "1.8705"),
                L(a, "transform", "rotate(90 188.378 23.1764)"),
                L(a, "stroke", "#EB5757"),
                L(a, "class", "play-reel-3"),
                L(i, "cx", "188.192"),
                L(i, "cy", "31.0993"),
                L(i, "r", "1.8705"),
                L(i, "transform", "rotate(90 188.192 31.0993)"),
                L(i, "stroke", "#EB5757"),
                L(i, "class", "play-reel-4"),
                L(n, "cx", "11.6854"),
                L(n, "cy", "26.7374"),
                L(n, "r", "1.8705"),
                L(n, "transform", "rotate(-90 11.6854 26.7374)"),
                L(n, "stroke", "#EB5757"),
                L(n, "class", "play-reel-5"),
                L(d, "cx", "17.8602"),
                L(d, "cy", "30.2933"),
                L(d, "r", "1.8705"),
                L(d, "transform", "rotate(-90 17.8602 30.2933)"),
                L(d, "stroke", "#EB5757"),
                L(d, "class", "play-reel-6"),
                L(l, "cx", "18.0463"),
                L(l, "cy", "22.3705"),
                L(l, "r", "1.8705"),
                L(l, "transform", "rotate(-90 18.0463 22.3705)"),
                L(l, "stroke", "#EB5757"),
                L(l, "class", "play-reel-7"),
                L(h, "fill-rule", "evenodd"),
                L(h, "clip-rule", "evenodd"),
                L(h, "d", "M67.6924 29.5401C69.4651 28.3518 69.4651 25.7447 67.6924 24.5563L56.5698 17.1002C57.3738 16.8873 58.2744 17.0022 59.0573 17.5558L68.9505 24.5518C70.641 25.7472 70.641 28.2552 68.9505 29.4507L59.0573 36.4466C58.3076 36.9768 57.4499 37.1046 56.6724 36.9275L67.6924 29.5401Z"),
                L(h, "class", "play-reel-8"),
                L(C, "id", "path-8-inside-1_436_2393"),
                L(C, "fill", "white"),
                L(k, "fill-rule", "evenodd"),
                L(k, "clip-rule", "evenodd"),
                L(k, "d", "M67.6924 29.5401C69.4651 28.3518 69.4651 25.7447 67.6924 24.5563L56.5698 17.1002C57.3738 16.8873 58.2744 17.0022 59.0573 17.5558L68.9505 24.5518C70.641 25.7472 70.641 28.2552 68.9505 29.4507L59.0573 36.4466C58.3076 36.9768 57.4499 37.1046 56.6724 36.9275L67.6924 29.5401Z"),
                L(k, "fill", "#EB5757"),
                L(k, "class", "play-reel-9"),
                L(c, "d", "M67.6924 24.5563L68.2492 23.7257L68.2492 23.7257L67.6924 24.5563ZM67.6924 29.5401L67.1356 28.7095L67.1356 28.7095L67.6924 29.5401ZM56.5698 17.1002L56.3138 16.1335L54.1763 16.6996L56.013 17.9308L56.5698 17.1002ZM59.0573 17.5558L59.6347 16.7393L59.6347 16.7393L59.0573 17.5558ZM68.9505 24.5518L68.3732 25.3683L68.3732 25.3683L68.9505 24.5518ZM68.9505 29.4507L68.3732 28.6342L68.3732 28.6342L68.9505 29.4507ZM59.0573 36.4466L58.48 35.6301L58.48 35.6301L59.0573 36.4466ZM56.6724 36.9275L56.1156 36.0969L54.1902 37.3876L56.4503 37.9025L56.6724 36.9275ZM67.1356 25.387C68.3174 26.1792 68.3174 27.9173 67.1356 28.7095L68.2492 30.3708C70.6128 28.7863 70.6128 25.3102 68.2492 23.7257L67.1356 25.387ZM56.013 17.9308L67.1356 25.387L68.2492 23.7257L57.1266 16.2696L56.013 17.9308ZM56.8258 18.0669C57.3601 17.9254 57.9525 17.9993 58.48 18.3723L59.6347 16.7393C58.5963 16.005 57.3876 15.8492 56.3138 16.1335L56.8258 18.0669ZM58.48 18.3723L68.3732 25.3683L69.5279 23.7353L59.6347 16.7393L58.48 18.3723ZM68.3732 25.3683C69.5002 26.1652 69.5002 27.8372 68.3732 28.6342L69.5279 30.2671C71.7819 28.6732 71.7819 25.3292 69.5279 23.7353L68.3732 25.3683ZM68.3732 28.6342L58.48 35.6301L59.6347 37.2631L69.5279 30.2671L68.3732 28.6342ZM58.48 35.6301C57.9741 35.9878 57.4097 36.0699 56.8946 35.9525L56.4503 37.9025C57.49 38.1394 58.641 37.9658 59.6347 37.2631L58.48 35.6301ZM67.1356 28.7095L56.1156 36.0969L57.2293 37.7581L68.2492 30.3708L67.1356 28.7095Z"),
                L(c, "fill", "#EB5757"),
                L(c, "mask", "url(#path-8-inside-1_436_2393)"),
                L(c, "class", "play-reel-10"),
                L(f, "fill-rule", "evenodd"),
                L(f, "clip-rule", "evenodd"),
                L(f, "d", "M65.6253 29.4507C67.3158 28.2552 67.3158 25.7472 65.6253 24.5518L55.7321 17.5558C53.7451 16.1507 51 17.5716 51 20.0053V33.9972C51 36.4308 53.7451 37.8517 55.7321 36.4466L65.6253 29.4507ZM63.0327 29.5304C64.7936 28.3408 64.7936 25.7481 63.0327 24.5586L56.4245 20.0944C54.4321 18.7485 51.7451 20.1759 51.7451 22.5803L51.7451 31.5086C51.7451 33.913 54.4321 35.3405 56.4245 33.9945L63.0327 29.5304Z"),
                L(f, "class", "play-reel-11"),
                L(u, "id", "path-10-inside-2_436_2393"),
                L(u, "fill", "white"),
                L(m, "fill-rule", "evenodd"),
                L(m, "clip-rule", "evenodd"),
                L(m, "d", "M65.6253 29.4507C67.3158 28.2552 67.3158 25.7472 65.6253 24.5518L55.7321 17.5558C53.7451 16.1507 51 17.5716 51 20.0053V33.9972C51 36.4308 53.7451 37.8517 55.7321 36.4466L65.6253 29.4507ZM63.0327 29.5304C64.7936 28.3408 64.7936 25.7481 63.0327 24.5586L56.4245 20.0944C54.4321 18.7485 51.7451 20.1759 51.7451 22.5803L51.7451 31.5086C51.7451 33.913 54.4321 35.3405 56.4245 33.9945L63.0327 29.5304Z"),
                L(m, "fill", "#EB5757"),
                L(m, "class", "play-reel-12"),
                L(g, "d", "M65.6253 24.5518L65.0479 25.3683L65.0479 25.3683L65.6253 24.5518ZM65.6253 29.4507L66.2027 30.2671L66.2027 30.2671L65.6253 29.4507ZM55.7321 17.5558L55.1547 18.3723L55.7321 17.5558ZM55.7321 36.4466L55.1547 35.6301L55.1547 35.6301L55.7321 36.4466ZM63.0327 24.5586L63.5925 23.7299L63.5925 23.7299L63.0327 24.5586ZM63.0327 29.5304L63.5925 30.359L63.5925 30.359L63.0327 29.5304ZM56.4245 20.0944L56.9843 19.2658L56.9843 19.2658L56.4245 20.0944ZM51.7451 22.5803L50.7451 22.5803L51.7451 22.5803ZM51.7451 31.5086L52.7451 31.5086L51.7451 31.5086ZM56.4245 33.9945L55.8647 33.1659L55.8647 33.1659L56.4245 33.9945ZM65.0479 25.3683C66.175 26.1652 66.175 27.8372 65.0479 28.6342L66.2027 30.2671C68.4567 28.6732 68.4567 25.3292 66.2027 23.7353L65.0479 25.3683ZM55.1547 18.3723L65.0479 25.3683L66.2027 23.7353L56.3095 16.7393L55.1547 18.3723ZM52 20.0053C52 18.3828 53.8301 17.4356 55.1547 18.3723L56.3095 16.7393C53.6602 14.8659 50 16.7604 50 20.0053H52ZM52 33.9972V20.0053H50V33.9972H52ZM55.1547 35.6301C53.8301 36.5669 52 35.6196 52 33.9972H50C50 37.242 53.6602 39.1366 56.3095 37.2631L55.1547 35.6301ZM65.0479 28.6342L55.1547 35.6301L56.3095 37.2631L66.2027 30.2671L65.0479 28.6342ZM62.4729 25.3872C63.6468 26.1802 63.6468 27.9087 62.4729 28.7018L63.5925 30.359C65.9403 28.773 65.9403 25.316 63.5925 23.7299L62.4729 25.3872ZM55.8647 20.9231L62.4729 25.3872L63.5925 23.7299L56.9843 19.2658L55.8647 20.9231ZM52.7451 22.5803C52.7451 20.9774 54.5364 20.0258 55.8647 20.9231L56.9843 19.2658C54.3277 17.4712 50.7451 19.3744 50.7451 22.5803L52.7451 22.5803ZM52.7451 31.5086L52.7451 22.5803L50.7451 22.5803L50.7451 31.5086L52.7451 31.5086ZM55.8647 33.1659C54.5364 34.0632 52.7451 33.1116 52.7451 31.5086L50.7451 31.5086C50.7451 34.7145 54.3277 36.6178 56.9843 34.8232L55.8647 33.1659ZM62.4729 28.7018L55.8647 33.1659L56.9843 34.8232L63.5925 30.359L62.4729 28.7018Z"),
                L(g, "fill", "#EB5757"),
                L(g, "mask", "url(#path-10-inside-2_436_2393)"),
                L(g, "class", "play-reel-13"),
                L(v, "cx", "57"),
                L(v, "cy", "27"),
                L(v, "r", "1.5"),
                L(v, "fill", "#F2F2F2"),
                L(v, "stroke", "#F2F2F2"),
                L(v, "class", "play-reel-14"),
                L(y, "d", "M80.8573 22.144C80.2413 22.144 79.6973 22.04 79.2253 21.832C78.7533 21.616 78.3813 21.312 78.1093 20.92C77.8373 20.52 77.6973 20.036 77.6893 19.468H79.3093C79.3253 19.86 79.4653 20.192 79.7293 20.464C80.0013 20.728 80.3733 20.86 80.8453 20.86C81.2533 20.86 81.5773 20.764 81.8173 20.572C82.0573 20.372 82.1773 20.108 82.1773 19.78C82.1773 19.436 82.0693 19.168 81.8533 18.976C81.6453 18.784 81.3653 18.628 81.0133 18.508C80.6613 18.388 80.2853 18.26 79.8853 18.124C79.2373 17.9 78.7413 17.612 78.3973 17.26C78.0613 16.908 77.8933 16.44 77.8933 15.856C77.8853 15.36 78.0013 14.936 78.2413 14.584C78.4893 14.224 78.8253 13.948 79.2493 13.756C79.6733 13.556 80.1613 13.456 80.7133 13.456C81.2733 13.456 81.7653 13.556 82.1893 13.756C82.6213 13.956 82.9573 14.236 83.1973 14.596C83.4453 14.956 83.5773 15.384 83.5933 15.88H81.9493C81.9413 15.584 81.8253 15.324 81.6013 15.1C81.3853 14.868 81.0813 14.752 80.6893 14.752C80.3533 14.744 80.0693 14.828 79.8373 15.004C79.6133 15.172 79.5013 15.42 79.5013 15.748C79.5013 16.028 79.5893 16.252 79.7653 16.42C79.9413 16.58 80.1813 16.716 80.4853 16.828C80.7893 16.94 81.1373 17.06 81.5293 17.188C81.9453 17.332 82.3253 17.5 82.6693 17.692C83.0133 17.884 83.2893 18.14 83.4973 18.46C83.7053 18.772 83.8093 19.176 83.8093 19.672C83.8093 20.112 83.6973 20.52 83.4733 20.896C83.2493 21.272 82.9173 21.576 82.4773 21.808C82.0373 22.032 81.4973 22.144 80.8573 22.144ZM85.1495 22V13.6H86.6855V17.092H90.4535V13.6H91.9895V22H90.4535V18.34H86.6855V22H85.1495ZM97.5582 22.144C96.7182 22.144 95.9822 21.96 95.3502 21.592C94.7262 21.224 94.2342 20.716 93.8742 20.068C93.5222 19.412 93.3462 18.656 93.3462 17.8C93.3462 16.944 93.5222 16.192 93.8742 15.544C94.2342 14.888 94.7262 14.376 95.3502 14.008C95.9822 13.64 96.7182 13.456 97.5582 13.456C98.3902 13.456 99.1222 13.64 99.7542 14.008C100.386 14.376 100.878 14.888 101.23 15.544C101.582 16.192 101.758 16.944 101.758 17.8C101.758 18.656 101.582 19.412 101.23 20.068C100.878 20.716 100.386 21.224 99.7542 21.592C99.1222 21.96 98.3902 22.144 97.5582 22.144ZM97.5582 20.764C98.3582 20.764 98.9942 20.5 99.4662 19.972C99.9462 19.444 100.186 18.72 100.186 17.8C100.186 16.88 99.9462 16.156 99.4662 15.628C98.9942 15.1 98.3582 14.836 97.5582 14.836C96.7582 14.836 96.1182 15.1 95.6382 15.628C95.1582 16.156 94.9182 16.88 94.9182 17.8C94.9182 18.72 95.1582 19.444 95.6382 19.972C96.1182 20.5 96.7582 20.764 97.5582 20.764ZM104.455 22L102.235 13.6H103.879L105.391 20.284L107.167 13.6H108.859L110.587 20.284L112.099 13.6H113.755L111.475 22H109.651L107.983 15.772L106.267 22H104.455ZM114.868 22V13.6H117.952C118.624 13.6 119.176 13.716 119.608 13.948C120.048 14.172 120.376 14.48 120.592 14.872C120.808 15.256 120.916 15.684 120.916 16.156C120.916 16.668 120.78 17.136 120.508 17.56C120.244 17.984 119.828 18.292 119.26 18.484L121 22H119.236L117.676 18.688H116.404V22H114.868ZM116.404 17.56H117.856C118.368 17.56 118.744 17.436 118.984 17.188C119.224 16.94 119.344 16.612 119.344 16.204C119.344 15.804 119.224 15.484 118.984 15.244C118.752 15.004 118.372 14.884 117.844 14.884H116.404V17.56ZM122.345 22V13.6H127.829V14.836H123.881V17.14H127.469V18.34H123.881V20.764H127.829V22H122.345ZM129.282 22V13.6H134.766V14.836H130.818V17.14H134.406V18.34H130.818V20.764H134.766V22H129.282ZM136.22 22V13.6H137.756V20.8H141.476V22H136.22Z"),
                L(y, "fill", "#F2F2F2"),
                L(y, "class", "play-reel-15"),
                L(E, "d", "M77.4653 40L78.9413 31.6H83.9333L83.7893 32.404H79.8053L79.2893 35.392H82.6373L82.4933 36.172H79.1453L78.4733 40H77.4653ZM83.7565 40L85.2925 31.36H86.3005L84.7645 40H83.7565ZM88.3604 40.144C87.9124 40.144 87.5484 40.072 87.2684 39.928C86.9884 39.776 86.7804 39.58 86.6444 39.34C86.5084 39.092 86.4404 38.828 86.4404 38.548C86.4404 38.108 86.5644 37.728 86.8124 37.408C87.0604 37.088 87.4044 36.844 87.8444 36.676C88.2924 36.5 88.8124 36.412 89.4044 36.412H91.0004L91.0124 36.34C91.0364 36.204 91.0484 36.068 91.0484 35.932C91.0484 35.548 90.9364 35.256 90.7124 35.056C90.4964 34.856 90.1924 34.756 89.8004 34.756C89.4164 34.756 89.0604 34.856 88.7324 35.056C88.4044 35.248 88.1764 35.532 88.0484 35.908H87.0044C87.1324 35.476 87.3404 35.112 87.6284 34.816C87.9244 34.52 88.2724 34.296 88.6724 34.144C89.0724 33.984 89.4924 33.904 89.9324 33.904C90.6444 33.904 91.1764 34.072 91.5284 34.408C91.8884 34.744 92.0684 35.2 92.0684 35.776C92.0684 35.864 92.0644 35.956 92.0564 36.052C92.0484 36.148 92.0364 36.244 92.0204 36.34L91.3844 40H90.4724L90.5924 38.944C90.3684 39.28 90.0724 39.564 89.7044 39.796C89.3444 40.028 88.8964 40.144 88.3604 40.144ZM88.6604 39.292C89.0444 39.292 89.3884 39.192 89.6924 38.992C90.0044 38.792 90.2604 38.532 90.4604 38.212C90.6604 37.892 90.7924 37.556 90.8564 37.204V37.192H89.3444C88.7764 37.192 88.3284 37.304 88.0004 37.528C87.6804 37.744 87.5204 38.044 87.5204 38.428C87.5204 38.7 87.6164 38.912 87.8084 39.064C88.0084 39.216 88.2924 39.292 88.6604 39.292ZM95.2012 40.144C94.4572 40.144 93.8772 39.956 93.4612 39.58C93.0452 39.196 92.8652 38.68 92.9212 38.032H93.9412C93.9252 38.368 94.0252 38.664 94.2412 38.92C94.4572 39.168 94.8252 39.292 95.3452 39.292C95.7692 39.292 96.1092 39.2 96.3652 39.016C96.6212 38.824 96.7492 38.56 96.7492 38.224C96.7492 37.96 96.6292 37.768 96.3892 37.648C96.1572 37.528 95.8452 37.428 95.4532 37.348C95.1572 37.284 94.8692 37.196 94.5892 37.084C94.3092 36.964 94.0732 36.8 93.8812 36.592C93.6972 36.384 93.6052 36.12 93.6052 35.8C93.6052 35.44 93.7092 35.12 93.9172 34.84C94.1252 34.552 94.4092 34.324 94.7692 34.156C95.1372 33.988 95.5532 33.904 96.0172 33.904C96.6492 33.904 97.1532 34.064 97.5292 34.384C97.9132 34.696 98.0892 35.144 98.0572 35.728H97.0492C97.0652 35.432 96.9692 35.196 96.7612 35.02C96.5612 34.844 96.2772 34.756 95.9092 34.756C95.5412 34.756 95.2372 34.844 94.9972 35.02C94.7652 35.188 94.6492 35.396 94.6492 35.644C94.6492 35.884 94.7612 36.064 94.9852 36.184C95.2172 36.304 95.5252 36.408 95.9092 36.496C96.2372 36.568 96.5452 36.664 96.8332 36.784C97.1212 36.904 97.3532 37.068 97.5292 37.276C97.7132 37.484 97.8052 37.756 97.8052 38.092C97.8052 38.508 97.6932 38.872 97.4692 39.184C97.2452 39.488 96.9372 39.724 96.5452 39.892C96.1532 40.06 95.7052 40.144 95.2012 40.144ZM99.0732 40L100.585 31.36H101.593L100.945 35.068C101.201 34.708 101.525 34.424 101.917 34.216C102.317 34.008 102.737 33.904 103.177 33.904C103.873 33.904 104.393 34.12 104.737 34.552C105.089 34.976 105.185 35.632 105.025 36.52L104.413 40H103.405L103.993 36.628C104.209 35.388 103.809 34.768 102.793 34.768C102.281 34.768 101.821 34.956 101.413 35.332C101.005 35.7 100.741 36.228 100.621 36.916L100.081 40H99.0732ZM110.538 40L109.83 34.048H110.85L111.282 38.716L113.502 34.048H114.642L115.206 38.716L117.294 34.048H118.302L115.518 40H114.486L113.886 35.092L111.558 40H110.538ZM120.189 40.144C119.741 40.144 119.377 40.072 119.097 39.928C118.817 39.776 118.609 39.58 118.473 39.34C118.337 39.092 118.269 38.828 118.269 38.548C118.269 38.108 118.393 37.728 118.641 37.408C118.889 37.088 119.233 36.844 119.673 36.676C120.121 36.5 120.641 36.412 121.233 36.412H122.829L122.841 36.34C122.865 36.204 122.877 36.068 122.877 35.932C122.877 35.548 122.765 35.256 122.541 35.056C122.325 34.856 122.021 34.756 121.629 34.756C121.245 34.756 120.889 34.856 120.561 35.056C120.233 35.248 120.005 35.532 119.877 35.908H118.833C118.961 35.476 119.169 35.112 119.457 34.816C119.753 34.52 120.101 34.296 120.501 34.144C120.901 33.984 121.321 33.904 121.761 33.904C122.473 33.904 123.005 34.072 123.357 34.408C123.717 34.744 123.897 35.2 123.897 35.776C123.897 35.864 123.893 35.956 123.885 36.052C123.877 36.148 123.865 36.244 123.849 36.34L123.213 40H122.301L122.421 38.944C122.197 39.28 121.901 39.564 121.533 39.796C121.173 40.028 120.725 40.144 120.189 40.144ZM120.489 39.292C120.873 39.292 121.217 39.192 121.521 38.992C121.833 38.792 122.089 38.532 122.289 38.212C122.489 37.892 122.621 37.556 122.685 37.204V37.192H121.173C120.605 37.192 120.157 37.304 119.829 37.528C119.509 37.744 119.349 38.044 119.349 38.428C119.349 38.7 119.445 38.912 119.637 39.064C119.837 39.216 120.121 39.292 120.489 39.292ZM124.737 40L125.781 34.048H126.705L126.597 35.104C126.853 34.736 127.189 34.444 127.605 34.228C128.029 34.012 128.509 33.904 129.045 33.904L128.865 34.96H128.589C128.229 34.96 127.889 35.016 127.569 35.128C127.257 35.24 126.989 35.432 126.765 35.704C126.541 35.968 126.389 36.332 126.309 36.796L125.745 40H124.737ZM129.167 40L130.211 34.048H131.123L131.003 35.128C131.259 34.744 131.587 34.444 131.987 34.228C132.387 34.012 132.815 33.904 133.271 33.904C133.863 33.904 134.331 34.072 134.675 34.408C135.019 34.736 135.191 35.208 135.191 35.824C135.191 35.936 135.183 36.052 135.167 36.172C135.159 36.284 135.143 36.4 135.119 36.52L134.507 40H133.499L134.087 36.628C134.103 36.524 134.115 36.424 134.123 36.328C134.139 36.232 134.147 36.14 134.147 36.052C134.147 35.196 133.727 34.768 132.887 34.768C132.383 34.768 131.931 34.944 131.531 35.296C131.139 35.648 130.875 36.152 130.739 36.808L130.175 40H129.167ZM138.062 32.728C137.862 32.728 137.694 32.664 137.558 32.536C137.43 32.408 137.366 32.244 137.366 32.044C137.366 31.844 137.43 31.68 137.558 31.552C137.694 31.424 137.862 31.36 138.062 31.36C138.254 31.36 138.418 31.424 138.554 31.552C138.69 31.68 138.758 31.844 138.758 32.044C138.758 32.244 138.69 32.408 138.554 32.536C138.418 32.664 138.254 32.728 138.062 32.728ZM136.154 40L137.198 34.048H138.206L137.162 40H136.154ZM138.94 40L139.984 34.048H140.896L140.776 35.128C141.032 34.744 141.36 34.444 141.76 34.228C142.16 34.012 142.588 33.904 143.044 33.904C143.636 33.904 144.104 34.072 144.448 34.408C144.792 34.736 144.964 35.208 144.964 35.824C144.964 35.936 144.956 36.052 144.94 36.172C144.932 36.284 144.916 36.4 144.892 36.52L144.28 40H143.272L143.86 36.628C143.876 36.524 143.888 36.424 143.896 36.328C143.912 36.232 143.92 36.14 143.92 36.052C143.92 35.196 143.5 34.768 142.66 34.768C142.156 34.768 141.704 34.944 141.304 35.296C140.912 35.648 140.648 36.152 140.512 36.808L139.948 40H138.94ZM148.435 38.128C148.083 38.128 147.771 38.08 147.499 37.984L146.911 38.44C147.087 38.552 147.287 38.64 147.511 38.704C147.735 38.768 148.063 38.816 148.495 38.848C149.055 38.888 149.491 38.988 149.803 39.148C150.123 39.308 150.347 39.508 150.475 39.748C150.603 39.98 150.667 40.224 150.667 40.48C150.667 40.92 150.539 41.312 150.283 41.656C150.027 42.008 149.671 42.284 149.215 42.484C148.759 42.684 148.235 42.784 147.643 42.784C146.915 42.784 146.323 42.636 145.867 42.34C145.411 42.052 145.183 41.636 145.183 41.092C145.183 40.716 145.287 40.372 145.495 40.06C145.695 39.756 145.991 39.484 146.383 39.244C146.103 39.116 145.875 38.956 145.699 38.764L145.747 38.476L146.863 37.588C146.551 37.284 146.395 36.892 146.395 36.412C146.395 35.94 146.519 35.516 146.767 35.14C147.015 34.756 147.347 34.456 147.763 34.24C148.187 34.016 148.659 33.904 149.179 33.904C149.523 33.904 149.827 33.952 150.091 34.048H152.287L152.143 34.792L151.027 34.84C151.139 35.072 151.195 35.332 151.195 35.62C151.195 36.092 151.071 36.52 150.823 36.904C150.583 37.28 150.255 37.58 149.839 37.804C149.423 38.02 148.955 38.128 148.435 38.128ZM148.579 37.3C149.067 37.3 149.463 37.156 149.767 36.868C150.079 36.572 150.235 36.192 150.235 35.728C150.235 35.416 150.127 35.172 149.911 34.996C149.695 34.82 149.403 34.732 149.035 34.732C148.547 34.732 148.147 34.88 147.835 35.176C147.531 35.464 147.379 35.84 147.379 36.304C147.379 36.624 147.483 36.872 147.691 37.048C147.907 37.216 148.203 37.3 148.579 37.3ZM146.203 40.9C146.203 41.228 146.343 41.484 146.623 41.668C146.903 41.86 147.291 41.956 147.787 41.956C148.331 41.956 148.779 41.832 149.131 41.584C149.483 41.336 149.659 41 149.659 40.576C149.659 40.352 149.571 40.156 149.395 39.988C149.219 39.812 148.871 39.704 148.351 39.664C147.919 39.64 147.535 39.588 147.199 39.508C146.535 39.876 146.203 40.34 146.203 40.9ZM152.957 37.672L153.917 31.6H155.009L153.809 37.672H152.957ZM153.197 40.06C152.997 40.06 152.829 39.996 152.693 39.868C152.565 39.732 152.501 39.568 152.501 39.376C152.501 39.184 152.565 39.024 152.693 38.896C152.829 38.76 152.997 38.692 153.197 38.692C153.389 38.692 153.549 38.76 153.677 38.896C153.813 39.024 153.881 39.184 153.881 39.376C153.881 39.568 153.813 39.732 153.677 39.868C153.549 39.996 153.389 40.06 153.197 40.06Z"),
                L(E, "fill", "#F2F2F2"),
                L(E, "class", "play-reel-16"),
                L(s, "width", "207"),
                L(s, "height", "54"),
                L(s, "viewBox", "0 0 207 54"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(s, i),
                w(s, n),
                w(s, d),
                w(s, l),
                w(s, C),
                w(C, h),
                w(s, k),
                w(s, c),
                w(s, u),
                w(u, f),
                w(s, m),
                w(s, g),
                w(s, v),
                w(s, y),
                w(s, E)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class Qe extends le {
        constructor(e) {
            super(),
            de(this, e, null, qe, i, {})
        }
    }
    function Ge(t) {
        let s, r, a, i, n, l, C, h, k, c, u;
        return {
            c() {
                s = v("div"),
                r = v("div"),
                a = E(),
                i = v("div"),
                i.innerHTML = '<div style="padding:54.72% 0 0 0;position:relative;"><iframe class="video-frame svelte-jofrcv" src="https://player.vimeo.com/video/668675980?h=9e015db434&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Zac Ting Showreel"></iframe></div> \n          <script src="https://player.vimeo.com/api/player.js"><\/script>',
                n = E(),
                l = v("script"),
                h = E(),
                k = v("a"),
                k.textContent = "⤫",
                L(r, "class", "pulseLoader"),
                b(i, "height", "100% "),
                b(i, "position", "relative"),
                d(l.src, C = "https://player.vimeo.com/api/player.js") || L(l, "src", "https://player.vimeo.com/api/player.js"),
                L(k, "class", "close-btn svelte-jofrcv"),
                L(s, "class", "light-box svelte-jofrcv")
            },
            m(e, o) {
                p(e, s, o),
                w(s, r),
                w(s, a),
                w(s, i),
                w(s, n),
                w(s, l),
                w(s, h),
                w(s, k),
                c || (u = [O(k, "click", t[2]), O(s, "click", t[3])],
                c = !0)
            },
            p: e,
            d(e) {
                e && z(s),
                c = !1,
                o(u)
            }
        }
    }
    function We(e) {
        let t, s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, _, N, M;
        l = new Ze({}),
        c = new Qe({});
        let b = e[0] && Ge(e);
        return g = new Pe({}),
        {
            c() {
                
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(s, i),
                w(s, n),
                w(s, d),
                w(s, l),
                w(s, C),
                w(s, h),
                w(s, k),
                w(s, c),
                w(s, u),
                w(s, f),
                w(s, m),
                w(s, g),
                w(s, v),
                w(s, E),
                w(s, O),
                w(s, N),
                w(s, M),
                w(s, b),
                w(s, H),
                w(s, x),
                w(s, $),
                w(s, j),
                w(s, V),
                w(s, B),
                w(s, Z),
                w(s, T),
                w(s, Y),
                w(s, F),
                w(s, D),
                w(s, I),
                w(s, S),
                w(s, X),
                w(s, U),
                w(s, R),
                w(s, A),
                w(s, P),
                w(s, q),
                w(s, Q),
                w(s, G),
                w(s, W),
                w(s, K),
                w(s, J),
                w(s, ee),
                w(s, te),
                w(s, se),
                w(s, re),
                w(s, oe),
                w(s, ae),
                w(s, ie),
                w(s, ne),
                w(s, de),
                w(s, le),
                w(s, Ce),
                w(s, he),
                w(s, ke),
                w(s, ce),
                w(s, ue),
                w(s, we),
                w(s, fe),
                w(s, me),
                w(s, pe),
                w(s, ze),
                w(s, ge),
                w(s, ve),
                w(s, _e),
                w(s, ye),
                w(s, Ee),
                w(s, Oe),
                w(s, Le),
                w(s, Ne),
                w(s, Me),
                w(s, be),
                w(s, He),
                w(s, xe),
                w(s, $e),
                w(s, je),
                w(s, Ve),
                w(s, Be),
                w(s, Ze),
                w(s, Te),
                w(s, Ye),
                w(s, Fe),
                w(s, De),
                w(s, Ie),
                w(s, Se),
                w(s, Xe),
                w(s, Ue),
                w(s, Re),
                w(s, Ae),
                w(s, Pe),
                w(s, qe),
                w(s, Qe),
                w(s, Ge),
                w(s, We),
                w(s, Ke),
                w(s, Je),
                w(s, et),
                w(s, tt),
                w(s, st),
                w(s, rt),
                w(s, ot),
                w(s, at),
                w(s, it),
                w(s, nt),
                w(s, dt),
                w(s, lt),
                w(s, Ct),
                w(s, ht),
                w(s, kt),
                w(s, ct),
                w(s, ut),
                w(s, wt),
                w(s, ft),
                w(s, mt),
                w(s, pt),
                w(s, zt),
                w(s, gt),
                w(s, vt),
                w(s, _t),
                w(s, yt),
                w(s, Et),
                w(s, Ot),
                w(s, Lt),
                w(s, Nt),
                w(s, Mt),
                w(s, bt),
                w(s, Ht),
                w(s, xt),
                w(s, $t),
                w(s, jt),
                w(s, Vt),
                w(s, Bt),
                w(s, Zt),
                w(s, Tt),
                w(s, Yt),
                w(s, Ft),
                w(s, Dt),
                w(s, It),
                w(s, St),
                w(s, Xt),
                w(s, Ut),
                w(s, Rt),
                w(s, At),
                w(s, Pt),
                w(s, qt),
                w(s, Qt),
                w(s, Gt),
                w(s, Wt),
                w(s, Kt),
                w(s, Jt),
                w(s, es),
                w(s, ts),
                w(s, ss),
                w(s, rs),
                w(s, os),
                w(s, as),
                w(s, is),
                w(s, ns),
                w(s, ds),
                w(s, ls),
                w(s, Cs),
                w(s, hs),
                w(s, ks),
                w(s, cs),
                w(s, us),
                w(s, ws),
                w(s, fs),
                w(s, ms),
                w(s, ps),
                w(s, zs),
                w(s, gs),
                w(s, vs),
                w(s, _s),
                w(s, ys),
                w(s, Es),
                w(s, Os),
                w(s, Ls),
                w(s, Ns),
                w(s, Ms),
                w(s, bs),
                w(s, Hs),
                w(s, xs),
                w(s, $s),
                w(s, js),
                w(s, Vs),
                w(s, Bs),
                w(s, Zs),
                w(s, Ts),
                w(s, Ys),
                w(Ys, Fs)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class tt extends le {
        constructor(e) {
            super(),
            de(this, e, null, et, i, {})
        }
    }
    function st(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, v, E, O, N, M, H, x, $, j, V, B, Z, T, Y, F, D, I, S, X, U, R, A, P, q, Q, G, W, K, J, ee, te, se, re, oe, ae, ie, ne, de, le, Ce, he, ke, ce, ue, we, fe, me, pe, ze, ge, ve, _e, ye, Ee, Oe, Le;
        return {
            c() {
                s = _("svg"),
                r = _("g"),
                o = _("g"),
                a = _("path"),
                i = _("g"),
                n = _("path"),
                d = _("g"),
                l = _("path"),
                C = _("g"),
                h = _("path"),
                k = _("g"),
                c = _("path"),
                u = _("g"),
                f = _("path"),
                m = _("g"),
                g = _("path"),
                v = _("g"),
                E = _("path"),
                O = _("g"),
                N = _("path"),
                M = _("g"),
                H = _("path"),
                x = _("g"),
                $ = _("path"),
                j = _("g"),
                V = _("path"),
                B = _("g"),
                Z = _("path"),
                T = _("g"),
                Y = _("path"),
                F = _("g"),
                D = _("path"),
                I = _("g"),
                S = _("path"),
                X = _("g"),
                U = _("path"),
                R = _("g"),
                A = _("path"),
                P = _("g"),
                q = _("path"),
                Q = _("g"),
                G = _("path"),
                W = _("g"),
                K = _("path"),
                J = _("g"),
                ee = _("path"),
                te = _("g"),
                se = _("path"),
                re = _("g"),
                oe = _("path"),
                ae = _("g"),
                ie = _("path"),
                ne = _("g"),
                de = _("path"),
                le = _("g"),
                Ce = _("path"),
                he = _("g"),
                ke = _("path"),
                ce = _("g"),
                ue = _("path"),
                we = _("g"),
                fe = _("path"),
                me = _("g"),
                pe = _("path"),
                ze = _("g"),
                ge = _("path"),
                ve = _("g"),
                _e = _("path"),
                ye = _("g"),
                Ee = _("path"),
                Oe = _("style"),
                Le = y(".BzvYeTuu_0{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_1{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_2{stroke-dasharray:2655 2657;stroke-dashoffset:2656;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_3{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_4{stroke-dasharray:2655 2657;stroke-dashoffset:2656;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_5{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_6{stroke-dasharray:2655 2657;stroke-dashoffset:2656;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_7{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_8{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_9{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_10{stroke-dasharray:2656 2658;stroke-dashoffset:2657;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_11{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_12{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_13{stroke-dasharray:1264 1266;stroke-dashoffset:1265;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_14{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_15{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_16{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_17{stroke-dasharray:1264 1266;stroke-dashoffset:1265;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_18{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_19{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_20{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_21{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_22{stroke-dasharray:1264 1266;stroke-dashoffset:1265;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_23{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_24{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_25{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_26{stroke-dasharray:1264 1266;stroke-dashoffset:1265;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_27{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_28{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_29{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_30{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_31{stroke-dasharray:1264 1266;stroke-dashoffset:1265;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_32{stroke-dasharray:1266 1268;stroke-dashoffset:1267;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}.BzvYeTuu_33{stroke-dasharray:3931 3933;stroke-dashoffset:3932;animation:BzvYeTuu_draw 2000ms linear 0ms forwards;}@keyframes BzvYeTuu_draw{100%{stroke-dashoffset:0;}}@keyframes BzvYeTuu_fade{0%{stroke-opacity:1;}93.54838709677419%{stroke-opacity:1;}100%{stroke-opacity:0;}}"),
                L(a, "fill-rule", "evenodd"),
                L(a, "clip-rule", "evenodd"),
                L(a, "d", "M1328.94 4.55425L1.78418 4.55417V3.77112L1328.94 3.7712V4.55425Z"),
                L(a, "stroke", "white"),
                L(a, "class", "BzvYeTuu_0"),
                b(o, "mix-blend-mode", "hard-light"),
                L(o, "opacity", "0.2"),
                L(n, "fill-rule", "evenodd"),
                L(n, "clip-rule", "evenodd"),
                L(n, "d", "M1328.94 67.988H1.78418V67.2048H1328.94V67.988Z"),
                L(n, "stroke", "white"),
                L(n, "class", "BzvYeTuu_1"),
                b(i, "mix-blend-mode", "hard-light"),
                L(i, "opacity", "0.2"),
                L(l, "fill-rule", "evenodd"),
                L(l, "clip-rule", "evenodd"),
                L(l, "d", "M1328.94 130.639H1.78418H1328.94Z"),
                L(l, "stroke", "white"),
                L(l, "class", "BzvYeTuu_2"),
                b(d, "mix-blend-mode", "hard-light"),
                L(d, "opacity", "0.2"),
                L(h, "fill-rule", "evenodd"),
                L(h, "clip-rule", "evenodd"),
                L(h, "d", "M1328.94 194.072H1.78418V193.289H1328.94V194.072Z"),
                L(h, "stroke", "white"),
                L(h, "class", "BzvYeTuu_3"),
                b(C, "mix-blend-mode", "hard-light"),
                L(C, "opacity", "0.2"),
                L(c, "fill-rule", "evenodd"),
                L(c, "clip-rule", "evenodd"),
                L(c, "d", "M1328.94 256.724L1.78418 256.723L1328.94 256.724Z"),
                L(c, "stroke", "white"),
                L(c, "class", "BzvYeTuu_4"),
                b(k, "mix-blend-mode", "hard-light"),
                L(k, "opacity", "0.2"),
                L(f, "fill-rule", "evenodd"),
                L(f, "clip-rule", "evenodd"),
                L(f, "d", "M1328.94 320.157L1.78418 320.157V319.374H1328.94V320.157Z"),
                L(f, "stroke", "white"),
                L(f, "class", "BzvYeTuu_5"),
                b(u, "mix-blend-mode", "hard-light"),
                L(u, "opacity", "0.2"),
                L(g, "fill-rule", "evenodd"),
                L(g, "clip-rule", "evenodd"),
                L(g, "d", "M1328.94 382.808H1.78418H1328.94Z"),
                L(g, "stroke", "white"),
                L(g, "class", "BzvYeTuu_6"),
                b(m, "mix-blend-mode", "hard-light"),
                L(m, "opacity", "0.2"),
                L(E, "fill-rule", "evenodd"),
                L(E, "clip-rule", "evenodd"),
                L(E, "d", "M1328.94 446.242H1.78418V445.459H1328.94V446.242Z"),
                L(E, "stroke", "white"),
                L(E, "class", "BzvYeTuu_7"),
                b(v, "mix-blend-mode", "hard-light"),
                L(v, "opacity", "0.2"),
                L(N, "fill-rule", "evenodd"),
                L(N, "clip-rule", "evenodd"),
                L(N, "d", "M1328.94 509.675H1.78418V508.892H1328.94V509.675Z"),
                L(N, "stroke", "white"),
                L(N, "class", "BzvYeTuu_8"),
                b(O, "mix-blend-mode", "hard-light"),
                L(O, "opacity", "0.2"),
                L(H, "fill-rule", "evenodd"),
                L(H, "clip-rule", "evenodd"),
                L(H, "d", "M1328.94 573.109H1.78418V572.326H1328.94V573.109Z"),
                L(H, "stroke", "white"),
                L(H, "class", "BzvYeTuu_9"),
                b(M, "mix-blend-mode", "hard-light"),
                L(M, "opacity", "0.2"),
                L($, "fill-rule", "evenodd"),
                L($, "clip-rule", "evenodd"),
                L($, "d", "M1328.94 636.543H1.78418V635.76H1328.94V636.543Z"),
                L($, "stroke", "white"),
                L($, "class", "BzvYeTuu_10"),
                b(x, "mix-blend-mode", "hard-light"),
                L(x, "opacity", "0.2"),
                L(V, "fill-rule", "evenodd"),
                L(V, "clip-rule", "evenodd"),
                L(V, "d", "M1.78418 636.542L1.78433 4.5542H2.56854L2.56839 636.542H1.78418Z"),
                L(V, "stroke", "white"),
                L(V, "stroke-width", "2"),
                L(V, "class", "BzvYeTuu_11"),
                b(j, "mix-blend-mode", "hard-light"),
                L(j, "opacity", "0.2"),
                L(Z, "fill-rule", "evenodd"),
                L(Z, "clip-rule", "evenodd"),
                L(Z, "d", "M65.3184 636.542L65.3185 4.5542H66.1027L66.1026 636.542H65.3184Z"),
                L(Z, "stroke", "white"),
                L(Z, "stroke-width", "2"),
                L(Z, "class", "BzvYeTuu_12"),
                b(B, "mix-blend-mode", "hard-light"),
                L(B, "opacity", "0.2"),
                L(Y, "fill-rule", "evenodd"),
                L(Y, "clip-rule", "evenodd"),
                L(Y, "d", "M128.853 636.542V4.5542V636.542Z"),
                L(Y, "stroke", "white"),
                L(Y, "stroke-width", "2"),
                L(Y, "class", "BzvYeTuu_13"),
                b(T, "mix-blend-mode", "hard-light"),
                L(T, "opacity", "0.2"),
                L(D, "fill-rule", "evenodd"),
                L(D, "clip-rule", "evenodd"),
                L(D, "d", "M191.602 636.542L191.603 4.5542H192.386V636.542H191.602Z"),
                L(D, "stroke", "white"),
                L(D, "stroke-width", "2"),
                L(D, "class", "BzvYeTuu_14"),
                b(F, "mix-blend-mode", "hard-light"),
                L(F, "opacity", "0.2"),
                L(S, "fill-rule", "evenodd"),
                L(S, "clip-rule", "evenodd"),
                L(S, "d", "M255.136 636.542L255.137 4.5542H255.921V636.542H255.136Z"),
                L(S, "stroke", "white"),
                L(S, "stroke-width", "2"),
                L(S, "class", "BzvYeTuu_15"),
                b(I, "mix-blend-mode", "hard-light"),
                L(I, "opacity", "0.2"),
                L(U, "fill-rule", "evenodd"),
                L(U, "clip-rule", "evenodd"),
                L(U, "d", "M318.67 636.542L318.671 4.5542H319.455V636.542H318.67Z"),
                L(U, "stroke", "white"),
                L(U, "stroke-width", "2"),
                L(U, "class", "BzvYeTuu_16"),
                b(X, "mix-blend-mode", "hard-light"),
                L(X, "opacity", "0.2"),
                L(A, "fill-rule", "evenodd"),
                L(A, "clip-rule", "evenodd"),
                L(A, "d", "M382.205 636.542L382.205 4.5542H382.205V636.542Z"),
                L(A, "stroke", "white"),
                L(A, "stroke-width", "2"),
                L(A, "class", "BzvYeTuu_17"),
                b(R, "mix-blend-mode", "hard-light"),
                L(R, "opacity", "0.2"),
                L(q, "fill-rule", "evenodd"),
                L(q, "clip-rule", "evenodd"),
                L(q, "d", "M444.955 636.542V4.5542H445.739V636.542H444.955Z"),
                L(q, "stroke", "white"),
                L(q, "stroke-width", "2"),
                L(q, "class", "BzvYeTuu_18"),
                b(P, "mix-blend-mode", "hard-light"),
                L(P, "opacity", "0.2"),
                L(G, "fill-rule", "evenodd"),
                L(G, "clip-rule", "evenodd"),
                L(G, "d", "M508.489 636.542V4.5542H509.273V636.542H508.489Z"),
                L(G, "stroke", "white"),
                L(G, "stroke-width", "2"),
                L(G, "class", "BzvYeTuu_19"),
                b(Q, "mix-blend-mode", "hard-light"),
                L(Q, "opacity", "0.2"),
                L(K, "fill-rule", "evenodd"),
                L(K, "clip-rule", "evenodd"),
                L(K, "d", "M572.023 636.542V4.5542H572.807V636.542H572.023Z"),
                L(K, "stroke", "white"),
                L(K, "stroke-width", "2"),
                L(K, "class", "BzvYeTuu_20"),
                b(W, "mix-blend-mode", "hard-light"),
                L(W, "opacity", "0.2"),
                L(ee, "fill-rule", "evenodd"),
                L(ee, "clip-rule", "evenodd"),
                L(ee, "d", "M635.557 636.542V4.5542H636.341V636.542H635.557Z"),
                L(ee, "stroke", "white"),
                L(ee, "stroke-width", "2"),
                L(ee, "class", "BzvYeTuu_21"),
                b(J, "mix-blend-mode", "hard-light"),
                L(J, "opacity", "0.2"),
                L(se, "fill-rule", "evenodd"),
                L(se, "clip-rule", "evenodd"),
                L(se, "d", "M699.091 636.542V4.5542V636.542Z"),
                L(se, "stroke", "white"),
                L(se, "stroke-width", "2"),
                L(se, "class", "BzvYeTuu_22"),
                b(te, "mix-blend-mode", "hard-light"),
                L(te, "opacity", "0.2"),
                L(oe, "fill-rule", "evenodd"),
                L(oe, "clip-rule", "evenodd"),
                L(oe, "d", "M761.841 636.542V4.5542H762.625V636.542H761.841Z"),
                L(oe, "stroke", "white"),
                L(oe, "stroke-width", "2"),
                L(oe, "class", "BzvYeTuu_23"),
                b(re, "mix-blend-mode", "hard-light"),
                L(re, "opacity", "0.2"),
                L(ie, "fill-rule", "evenodd"),
                L(ie, "clip-rule", "evenodd"),
                L(ie, "d", "M825.374 636.542V4.5542H826.158V636.542H825.374Z"),
                L(ie, "stroke", "white"),
                L(ie, "stroke-width", "2"),
                L(ie, "class", "BzvYeTuu_24"),
                b(ae, "mix-blend-mode", "hard-light"),
                L(ae, "opacity", "0.2"),
                L(de, "fill-rule", "evenodd"),
                L(de, "clip-rule", "evenodd"),
                L(de, "d", "M888.908 636.542V4.5542H889.693V636.542H888.908Z"),
                L(de, "stroke", "white"),
                L(de, "stroke-width", "2"),
                L(de, "class", "BzvYeTuu_25"),
                b(ne, "mix-blend-mode", "hard-light"),
                L(ne, "opacity", "0.2"),
                L(Ce, "fill-rule", "evenodd"),
                L(Ce, "clip-rule", "evenodd"),
                L(Ce, "d", "M952.442 636.542V4.5542V636.542Z"),
                L(Ce, "stroke", "white"),
                L(Ce, "stroke-width", "2"),
                L(Ce, "class", "BzvYeTuu_26"),
                b(le, "mix-blend-mode", "hard-light"),
                L(le, "opacity", "0.2"),
                L(ke, "fill-rule", "evenodd"),
                L(ke, "clip-rule", "evenodd"),
                L(ke, "d", "M1015.19 636.542V4.5542H1015.98V636.542H1015.19Z"),
                L(ke, "stroke", "white"),
                L(ke, "stroke-width", "2"),
                L(ke, "class", "BzvYeTuu_27"),
                b(he, "mix-blend-mode", "hard-light"),
                L(he, "opacity", "0.2"),
                L(ue, "fill-rule", "evenodd"),
                L(ue, "clip-rule", "evenodd"),
                L(ue, "d", "M1078.73 636.542V4.5542H1079.51V636.542H1078.73Z"),
                L(ue, "stroke", "white"),
                L(ue, "stroke-width", "2"),
                L(ue, "class", "BzvYeTuu_28"),
                b(ce, "mix-blend-mode", "hard-light"),
                L(ce, "opacity", "0.2"),
                L(fe, "fill-rule", "evenodd"),
                L(fe, "clip-rule", "evenodd"),
                L(fe, "d", "M1142.26 636.542V4.5542H1143.04V636.542H1142.26Z"),
                L(fe, "stroke", "white"),
                L(fe, "stroke-width", "2"),
                L(fe, "class", "BzvYeTuu_29"),
                b(we, "mix-blend-mode", "hard-light"),
                L(we, "opacity", "0.2"),
                L(pe, "fill-rule", "evenodd"),
                L(pe, "clip-rule", "evenodd"),
                L(pe, "d", "M1205.79 636.542V4.5542H1206.58V636.542H1205.79Z"),
                L(pe, "stroke", "white"),
                L(pe, "stroke-width", "2"),
                L(pe, "class", "BzvYeTuu_30"),
                b(me, "mix-blend-mode", "hard-light"),
                L(me, "opacity", "0.2"),
                L(ge, "fill-rule", "evenodd"),
                L(ge, "clip-rule", "evenodd"),
                L(ge, "d", "M1269.33 636.542V4.5542V636.542Z"),
                L(ge, "stroke", "white"),
                L(ge, "stroke-width", "2"),
                L(ge, "class", "BzvYeTuu_31"),
                b(ze, "mix-blend-mode", "hard-light"),
                L(ze, "opacity", "0.2"),
                L(_e, "fill-rule", "evenodd"),
                L(_e, "clip-rule", "evenodd"),
                L(_e, "d", "M1332.08 636.542V4.5542H1332.86V636.542H1332.08Z"),
                L(_e, "stroke", "white"),
                L(_e, "stroke-width", "2"),
                L(_e, "class", "BzvYeTuu_32"),
                b(ve, "mix-blend-mode", "hard-light"),
                L(ve, "opacity", "0.2"),
                L(Ee, "d", "M1334.43 2.20483H3.35303V636.542H1334.43V2.20483Z"),
                L(Ee, "stroke", "white"),
                L(Ee, "stroke-width", "4"),
                L(Ee, "class", "BzvYeTuu_33"),
                b(ye, "mix-blend-mode", "hard-light"),
                L(ye, "opacity", "0.2"),
                b(r, "mix-blend-mode", "hard-light"),
                L(r, "opacity", "0.7"),
                L(Oe, "data-made-with", "vivus-instant"),
                L(s, "width", "100%"),
                L(s, "height", "100%"),
                L(s, "viewBox", "0 0 1337 639"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg"),
                L(s, "style", "")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(r, o),
                w(o, a),
                w(r, i),
                w(i, n),
                w(r, d),
                w(d, l),
                w(r, C),
                w(C, h),
                w(r, k),
                w(k, c),
                w(r, u),
                w(u, f),
                w(r, m),
                w(m, g),
                w(r, v),
                w(v, E),
                w(r, O),
                w(O, N),
                w(r, M),
                w(M, H),
                w(r, x),
                w(x, $),
                w(r, j),
                w(j, V),
                w(r, B),
                w(B, Z),
                w(r, T),
                w(T, Y),
                w(r, F),
                w(F, D),
                w(r, I),
                w(I, S),
                w(r, X),
                w(X, U),
                w(r, R),
                w(R, A),
                w(r, P),
                w(P, q),
                w(r, Q),
                w(Q, G),
                w(r, W),
                w(W, K),
                w(r, J),
                w(J, ee),
                w(r, te),
                w(te, se),
                w(r, re),
                w(re, oe),
                w(r, ae),
                w(ae, ie),
                w(r, ne),
                w(ne, de),
                w(r, le),
                w(le, Ce),
                w(r, he),
                w(he, ke),
                w(r, ce),
                w(ce, ue),
                w(r, we),
                w(we, fe),
                w(r, me),
                w(me, pe),
                w(r, ze),
                w(ze, ge),
                w(r, ve),
                w(ve, _e),
                w(r, ye),
                w(ye, Ee),
                w(s, Oe),
                w(Oe, Le)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class rt extends le {
        constructor(e) {
            super(),
            de(this, e, null, st, i, {})
        }
    }
    function ot(t) {
        let s;
        return {
            c() {
                s = v("div"),
                L(s, "class", "button-ripple svelte-1drmnne")
            },
            m(e, t) {
                p(e, s, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class at extends le {
        constructor(e) {
            super(),
            de(this, e, null, ot, i, {})
        }
    }
    function it(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, _, O, N, M;
        return C = new at({}),
        f = new at({}),
        _ = new tt({}),
        N = new rt({}),
        {
            c() {
                s = v("section"),
                r = v("div"),
                r.textContent = "FIND ME",
                o = E(),
                a = v("div"),
                i = v("div"),
                n = v("div"),
                d = v("div"),
                l = v("a"),
                oe(C.$$.fragment),
                h = y("\r\n            Behance"),
                k = E(),
                c = v("div"),
                u = v("a"),
                oe(f.$$.fragment),
                m = y("\r\n            LinkedIn"),
                g = E(),
                oe(_.$$.fragment),
                O = E(),
                oe(N.$$.fragment),
                L(r, "class", "title"),
                L(l, "href", "https://www.behance.net/zacting"),
                L(l, "target", "_blank"),
                L(d, "class", "marker-01 svelte-1msw6ge"),
                L(u, "href", " https://www.linkedin.com/in/issac-ting-b489a98b/"),
                L(u, "target", "_blank"),
                L(c, "class", "marker-03 svelte-1msw6ge"),
                L(n, "class", "marker-container svelte-1msw6ge"),
                L(i, "class", "terrain-container svelte-1msw6ge"),
                L(a, "class", "map-container"),
                L(s, "class", "section-02 svelte-1msw6ge"),
                L(s, "id", "find-me")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(a, i),
                w(i, n),
                w(n, d),
                w(d, l),
                ae(C, l, null),
                w(l, h),
                w(n, k),
                w(n, c),
                w(c, u),
                ae(f, u, null),
                w(u, m),
                w(i, g),
                ae(_, i, null),
                w(i, O),
                ae(N, i, null),
                M = !0
            },
            p: e,
            i(e) {
                M || (ee(C.$$.fragment, e),
                ee(f.$$.fragment, e),
                ee(_.$$.fragment, e),
                ee(N.$$.fragment, e),
                M = !0)
            },
            o(e) {
                te(C.$$.fragment, e),
                te(f.$$.fragment, e),
                te(_.$$.fragment, e),
                te(N.$$.fragment, e),
                M = !1
            },
            d(e) {
                e && z(s),
                ie(C),
                ie(f),
                ie(_),
                ie(N)
            }
        }
    }
    class nt extends le {
        constructor(e) {
            super(),
            de(this, e, null, it, i, {})
        }
    }
    function dt(t) {
        let s;
        return {
            c() {
                s = v("section"),
                s.innerHTML = '<div class="about-container svelte-flk14a"><div class="title svelte-flk14a">Designing and maintaining <br/> meaningful User experiences</div> \n\n    <div class="svg-padding"><svg width="30" height="1" viewBox="0 0 30 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2="30" y2="0.5" stroke="white"></line></svg></div> \n    <div class="about-text svelte-flk14a">For 4 years now, I had the pleasure of working in MNCs and Government\n      services to provide design and creative technological service to build\n      products ranging from small gamification projects to large scale Design\n      Systems.\n      <br/> I’ve been involved in variety of projects in the area of prototyping,\n      user experience design, research and design operations.</div> \n    <br/> \n\n    <div class="svg-padding"><svg width="1" height="40" viewBox="0 0 1 120" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="2.18557e-08" x2="0.499995" y2="120" stroke="white"></line></svg></div></div>',
                L(s, "class", "section-03 svelte-flk14a"),
                L(s, "id", "case-studies")
            },
            m(e, t) {
                p(e, s, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class lt extends le {
        constructor(e) {
            super(),
            de(this, e, null, dt, i, {})
        }
    }
    function Ct(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m;
        return {
            c() {
                s = _("svg"),
                r = _("path"),
                o = _("path"),
                a = _("path"),
                i = _("path"),
                n = _("path"),
                d = _("path"),
                l = _("path"),
                C = _("path"),
                h = _("path"),
                k = _("path"),
                c = _("path"),
                u = _("path"),
                f = _("style"),
                m = y(".BUpQDIzt_0{stroke-dasharray:346 348;stroke-dashoffset:347;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_1{stroke-dasharray:1458 1460;stroke-dashoffset:1459;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_2{stroke-dasharray:169 171;stroke-dashoffset:170;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_3{stroke-dasharray:346 348;stroke-dashoffset:347;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_4{stroke-dasharray:1458 1460;stroke-dashoffset:1459;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_5{stroke-dasharray:169 171;stroke-dashoffset:170;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_6{stroke-dasharray:330 332;stroke-dashoffset:331;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_7{stroke-dasharray:1422 1424;stroke-dashoffset:1423;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_8{stroke-dasharray:161 163;stroke-dashoffset:162;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_9{stroke-dasharray:331 333;stroke-dashoffset:332;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_10{stroke-dasharray:1422 1424;stroke-dashoffset:1423;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}.BUpQDIzt_11{stroke-dasharray:161 163;stroke-dashoffset:162;animation:BUpQDIzt_draw 500ms ease-in-out 0ms forwards;}@keyframes BUpQDIzt_draw{100%{stroke-dashoffset:0;}}@keyframes BUpQDIzt_fade{0%{stroke-opacity:1;}91.48936170212767%{stroke-opacity:1;}100%{stroke-opacity:0;}}"),
                L(r, "d", "M1340.49 2765.32L1355.84 2723.05L1553 2591.84L1615.6 2582.22"),
                L(r, "stroke", "white"),
                L(r, "stroke-width", "4"),
                L(r, "stroke-linecap", "round"),
                L(r, "stroke-linejoin", "round"),
                L(r, "class", "BUpQDIzt_0"),
                L(o, "d", "M23.8928 3280.58L455.951 3307.12L1255.82 2915.04L1328.1 2802.86"),
                L(o, "stroke", "white"),
                L(o, "stroke-width", "3"),
                L(o, "stroke-linecap", "round"),
                L(o, "class", "BUpQDIzt_1"),
                L(a, "d", "M1766.04 2510.41L1772.99 2537.7L1689.35 2592.71L1649.33 2587.16"),
                L(a, "stroke", "white"),
                L(a, "stroke-width", "3"),
                L(a, "stroke-linecap", "round"),
                L(a, "class", "BUpQDIzt_2"),
                L(i, "d", "M3637.64 2766.32L3622.29 2724.05L3425.13 2592.84L3362.53 2583.22"),
                L(i, "stroke", "white"),
                L(i, "stroke-width", "4"),
                L(i, "stroke-linecap", "round"),
                L(i, "stroke-linejoin", "round"),
                L(i, "class", "BUpQDIzt_3"),
                L(n, "d", "M4954.24 3281.58L4522.18 3308.12L3722.31 2916.04L3650.03 2803.86"),
                L(n, "stroke", "white"),
                L(n, "stroke-width", "3"),
                L(n, "stroke-linecap", "round"),
                L(n, "class", "BUpQDIzt_4"),
                L(d, "d", "M3212.09 2511.41L3205.14 2538.7L3288.78 2593.71L3328.8 2588.16"),
                L(d, "stroke", "white"),
                L(d, "stroke-width", "3"),
                L(d, "stroke-linecap", "round"),
                L(d, "class", "BUpQDIzt_5"),
                L(l, "d", "M3622.75 643.775L3607.4 680.213L3410.24 793.347L3347.64 801.637"),
                L(l, "stroke", "white"),
                L(l, "stroke-width", "4"),
                L(l, "stroke-linecap", "round"),
                L(l, "stroke-linejoin", "round"),
                L(l, "class", "BUpQDIzt_6"),
                L(C, "d", "M4939.34 199.527L4507.29 176.643L3707.42 514.69L3635.14 611.409"),
                L(C, "stroke", "white"),
                L(C, "stroke-width", "3"),
                L(C, "stroke-linecap", "round"),
                L(C, "class", "BUpQDIzt_7"),
                L(h, "d", "M3197.2 863.553L3190.25 840.023L3273.89 792.597L3313.91 797.377"),
                L(h, "stroke", "white"),
                L(h, "stroke-width", "3"),
                L(h, "stroke-linecap", "round"),
                L(h, "class", "BUpQDIzt_8"),
                L(k, "d", "M1318.6 643.775L1333.94 680.213L1531.11 793.347L1593.71 801.637"),
                L(k, "stroke", "white"),
                L(k, "stroke-width", "4"),
                L(k, "stroke-linecap", "round"),
                L(k, "stroke-linejoin", "round"),
                L(k, "class", "BUpQDIzt_9"),
                L(c, "d", "M1.99998 199.527L434.059 176.643L1233.93 514.691L1306.21 611.41"),
                L(c, "stroke", "white"),
                L(c, "stroke-width", "3"),
                L(c, "stroke-linecap", "round"),
                L(c, "class", "BUpQDIzt_10"),
                L(u, "d", "M1744.15 863.554L1751.1 840.023L1667.45 792.597L1627.44 797.378"),
                L(u, "stroke", "white"),
                L(u, "stroke-width", "3"),
                L(u, "stroke-linecap", "round"),
                L(u, "class", "BUpQDIzt_11"),
                L(f, "data-made-with", "vivus-instant"),
                L(s, "width", "100%"),
                L(s, "height", "100%"),
                L(s, "filter", "url(#glowingPulse2)"),
                L(s, "viewBox", "0 0 4956 3513"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg"),
                L(s, "style", "")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(s, i),
                w(s, n),
                w(s, d),
                w(s, l),
                w(s, C),
                w(s, h),
                w(s, k),
                w(s, c),
                w(s, u),
                w(s, f),
                w(f, m)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class ht extends le {
        constructor(e) {
            super(),
            de(this, e, null, Ct, i, {})
        }
    }
    function kt(t) {
        let s, r, o, a, i, n, d, l, C, h, k, c, u, f, m;
        return {
            c() {
                s = _("svg"),
                r = _("path"),
                o = _("path"),
                a = _("path"),
                i = _("path"),
                n = _("g"),
                d = _("path"),
                l = _("path"),
                C = _("path"),
                h = _("path"),
                k = _("defs"),
                c = _("filter"),
                u = _("feFlood"),
                f = _("feBlend"),
                m = _("feGaussianBlur"),
                L(r, "fill-rule", "evenodd"),
                L(r, "clip-rule", "evenodd"),
                L(r, "d", "M11.6698 12.2345L8 8.75445L8.73031 8L12.4031 11.4829C13.2832 12.3263 14.3356 12.9736 15.4895 13.3811C16.6434 13.7887 17.8721 13.947 19.093 13.8456L19.0949 13.8454L86.3167 8.50418L86.3282 8.50377C89.8917 8.37397 92.8889 8.28737 95.4719 8.24404L95.4808 8.24389C99.2298 8.24397 102.414 8.58248 105 11.0473C107.274 13.1636 108.028 15.1333 108.332 16.8516C108.443 17.4772 108.495 18.0779 108.541 18.6119C108.556 18.7909 108.571 18.9623 108.587 19.1247C108.654 19.7931 108.743 20.3164 108.954 20.75C109.293 21.4062 109.743 21.9997 110.285 22.5042L110.289 22.508L147.262 57.645C147.336 57.7164 147.425 57.7711 147.522 57.8054C148.793 58.2132 149.793 58.2285 150.762 58.2434C151.057 58.2479 151.348 58.2523 151.644 58.2677C152.271 58.3004 152.905 58.3866 153.555 58.6622C154.207 58.9388 154.843 59.3915 155.501 60.112L155.513 60.1255L155.524 60.1398C157.294 62.3707 158.166 65.1706 157.974 68L156.921 67.9299C157.095 65.364 156.306 62.8249 154.705 60.7993C154.134 60.1769 153.623 59.8278 153.139 59.6227C152.65 59.4153 152.155 59.3406 151.588 59.3111C151.348 59.2986 151.092 59.295 150.821 59.2912C149.831 59.2773 148.63 59.2604 147.189 58.7971L147.179 58.7936C146.934 58.7091 146.711 58.5726 146.526 58.3939C146.526 58.3937 146.526 58.3941 146.526 58.3939L109.562 23.2656C109.561 23.2648 109.561 23.2641 109.56 23.2634C108.928 22.6754 108.404 21.9839 108.011 21.2192L108.007 21.2101C107.706 20.596 107.605 19.9097 107.537 19.227C107.518 19.0397 107.502 18.8525 107.486 18.6639C107.441 18.1412 107.395 17.6079 107.293 17.032C107.023 15.5132 106.368 13.7541 104.275 11.8064L104.27 11.8019C102.006 9.64275 99.2056 9.2891 95.4853 9.28881C92.9155 9.33195 89.9309 9.41814 86.3784 9.54748L19.1813 14.8868C19.181 14.8868 19.1816 14.8867 19.1813 14.8868C17.8106 15.0005 16.4302 14.8227 15.1347 14.3652C13.8393 13.9077 12.6579 13.1812 11.6698 12.2345Z"),
                L(r, "fill", "white"),
                L(o, "fill-rule", "evenodd"),
                L(o, "clip-rule", "evenodd"),
                L(o, "d", "M94.9355 25.6128C93.9597 25.6128 93.1689 26.3954 93.1689 27.3606C93.1689 28.3257 93.9597 29.1084 94.9355 29.1084C95.9112 29.1084 96.7019 28.3257 96.7019 27.3606C96.7019 26.3954 95.9112 25.6128 94.9355 25.6128ZM92.1133 27.3606C92.1133 25.8181 93.377 24.5679 94.9355 24.5679C96.4939 24.5679 97.7575 25.8181 97.7575 27.3606C97.7575 28.903 96.4939 30.1532 94.9355 30.1532C93.377 30.1532 92.1133 28.9031 92.1133 27.3606Z"),
                L(o, "fill", "white"),
                L(a, "fill-rule", "evenodd"),
                L(a, "clip-rule", "evenodd"),
                L(a, "d", "M96.0056 37.6554C95.0299 37.6554 94.2392 38.438 94.2392 39.4032C94.2392 40.3683 95.0299 41.151 96.0056 41.151C96.9812 41.151 97.772 40.3683 97.772 39.4032C97.772 38.438 96.9812 37.6554 96.0056 37.6554ZM93.1836 39.4032C93.1836 37.8607 94.4471 36.6105 96.0056 36.6105C97.5641 36.6105 98.8276 37.8607 98.8276 39.4032C98.8276 40.9456 97.5641 42.1958 96.0056 42.1958C94.4471 42.1958 93.1836 40.9456 93.1836 39.4032Z"),
                L(a, "fill", "white"),
                L(i, "fill-rule", "evenodd"),
                L(i, "clip-rule", "evenodd"),
                L(i, "d", "M84.6854 32.6612C83.7097 32.6612 82.9189 33.4438 82.9189 34.409C82.9189 35.3741 83.7097 36.1568 84.6854 36.1568C85.6611 36.1568 86.4518 35.3741 86.4518 34.409C86.4518 33.4438 85.6611 32.6612 84.6854 32.6612ZM81.8633 34.409C81.8633 32.8665 83.127 31.6163 84.6854 31.6163C86.2439 31.6163 87.5074 32.8665 87.5074 34.409C87.5074 35.9514 86.2439 37.2016 84.6854 37.2016C83.127 37.2016 81.8633 35.9514 81.8633 34.409Z"),
                L(i, "fill", "white"),
                L(d, "fill-rule", "evenodd"),
                L(d, "clip-rule", "evenodd"),
                L(d, "d", "M11.6698 12.1911L8 8.74674L8.73031 8L12.4031 11.4472C13.2832 12.2821 14.3356 12.9227 15.4895 13.3261C16.6434 13.7294 17.8721 13.8862 19.093 13.7858L19.0949 13.7856L86.3167 8.49902L86.3282 8.49861C89.8917 8.37014 92.8889 8.28443 95.4719 8.24155L95.4808 8.2414C99.2298 8.24147 102.414 8.57652 105 11.0162C107.274 13.1108 108.028 15.0603 108.332 16.761C108.443 17.3802 108.495 17.9748 108.541 18.5033C108.556 18.6805 108.571 18.8502 108.587 19.0109C108.654 19.6725 108.743 20.1904 108.954 20.6196C109.293 21.2691 109.743 21.8565 110.285 22.3558L110.289 22.3596L147.262 57.1371C147.336 57.2078 147.425 57.2619 147.522 57.2958C148.793 57.6995 149.793 57.7147 150.762 57.7294C151.057 57.7338 151.348 57.7382 151.644 57.7535C152.271 57.7858 152.905 57.8711 153.555 58.1439C154.207 58.4177 154.843 58.8657 155.501 59.5788L155.513 59.5922L155.524 59.6064C157.294 61.8145 158.166 64.5857 157.974 67.3862L156.921 67.3168C157.095 64.7772 156.306 62.264 154.705 60.2591C154.134 59.6431 153.623 59.2975 153.139 59.0946C152.65 58.8893 152.155 58.8154 151.588 58.7862C151.348 58.7738 151.092 58.7702 150.821 58.7665C149.831 58.7527 148.63 58.736 147.189 58.2774L147.179 58.274C146.934 58.1903 146.711 58.0552 146.526 57.8783C146.526 57.8781 146.526 57.8785 146.526 57.8783L109.562 23.1094C109.561 23.1087 109.561 23.108 109.56 23.1072C108.928 22.5253 108.404 21.8408 108.011 21.084L108.007 21.075C107.706 20.4671 107.605 19.7879 107.537 19.1121C107.518 18.9268 107.502 18.7415 107.486 18.5548C107.441 18.0375 107.395 17.5096 107.293 16.9396C107.023 15.4363 106.368 13.6952 104.275 11.7675L104.27 11.763C102.006 9.62595 99.2056 9.27591 95.4853 9.27563C92.9155 9.31833 89.9309 9.40363 86.3784 9.53165L19.1813 14.8163C19.181 14.8163 19.1816 14.8163 19.1813 14.8163C17.8106 14.9289 16.4302 14.7529 15.1347 14.3001C13.8393 13.8473 12.6579 13.1282 11.6698 12.1911Z"),
                L(d, "fill", "#EB5757"),
                L(l, "fill-rule", "evenodd"),
                L(l, "clip-rule", "evenodd"),
                L(l, "d", "M94.9355 25.4326C93.9597 25.4326 93.1689 26.2073 93.1689 27.1625C93.1689 28.1178 93.9597 28.8924 94.9355 28.8924C95.9112 28.8924 96.7019 28.1178 96.7019 27.1625C96.7019 26.2072 95.9112 25.4326 94.9355 25.4326ZM92.1133 27.1625C92.1133 25.6358 93.377 24.3984 94.9355 24.3984C96.4939 24.3984 97.7575 25.6358 97.7575 27.1625C97.7575 28.6892 96.4939 29.9266 94.9355 29.9266C93.377 29.9266 92.1133 28.6892 92.1133 27.1625Z"),
                L(l, "fill", "#EB5757"),
                L(C, "fill-rule", "evenodd"),
                L(C, "clip-rule", "evenodd"),
                L(C, "d", "M96.0056 37.352C95.0299 37.352 94.2392 38.1266 94.2392 39.0819C94.2392 40.0372 95.0299 40.8118 96.0056 40.8118C96.9812 40.8118 97.772 40.0372 97.772 39.0819C97.772 38.1266 96.9812 37.352 96.0056 37.352ZM93.1836 39.0819C93.1836 37.5552 94.4471 36.3178 96.0056 36.3178C97.5641 36.3178 98.8276 37.5552 98.8276 39.0819C98.8276 40.6085 97.5641 41.8459 96.0056 41.8459C94.4471 41.8459 93.1836 40.6085 93.1836 39.0819Z"),
                L(C, "fill", "#EB5757"),
                L(h, "fill-rule", "evenodd"),
                L(h, "clip-rule", "evenodd"),
                L(h, "d", "M84.6854 32.4089C83.7097 32.4089 82.9189 33.1836 82.9189 34.1388C82.9189 35.0941 83.7097 35.8687 84.6854 35.8687C85.6611 35.8687 86.4518 35.0941 86.4518 34.1388C86.4518 33.1835 85.6611 32.4089 84.6854 32.4089ZM81.8633 34.1388C81.8633 32.6121 83.127 31.3748 84.6854 31.3748C86.2439 31.3748 87.5074 32.6122 87.5074 34.1388C87.5074 35.6655 86.2439 36.9029 84.6854 36.9029C83.127 36.9029 81.8633 35.6655 81.8633 34.1388Z"),
                L(h, "fill", "#EB5757"),
                L(n, "filter", "url(#filter0_f_741_2420)"),
                L(u, "flood-opacity", "0"),
                L(u, "result", "BackgroundImageFix"),
                L(f, "mode", "normal"),
                L(f, "in", "SourceGraphic"),
                L(f, "in2", "BackgroundImageFix"),
                L(f, "result", "shape"),
                L(m, "stdDeviation", "4"),
                L(m, "result", "effect1_foregroundBlur_741_2420"),
                L(c, "id", "filter0_f_741_2420"),
                L(c, "x", "0"),
                L(c, "y", "0"),
                L(c, "width", "166"),
                L(c, "height", "75.3862"),
                L(c, "filterUnits", "userSpaceOnUse"),
                L(c, "color-interpolation-filters", "sRGB"),
                L(s, "width", "166"),
                L(s, "height", "76"),
                L(s, "viewBox", "0 0 166 76"),
                L(s, "fill", "none"),
                L(s, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, t) {
                p(e, s, t),
                w(s, r),
                w(s, o),
                w(s, a),
                w(s, i),
                w(s, n),
                w(n, d),
                w(n, l),
                w(n, C),
                w(n, h),
                w(s, k),
                w(k, c),
                w(c, u),
                w(c, f),
                w(c, m)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class ct extends le {
        constructor(e) {
            super(),
            de(this, e, null, kt, i, {})
        }
    }
    function ut(e, t, s) {
        const r = e.slice();
        return r[4] = t[s],
        r[6] = s,
        r
    }
    function wt(e) {
        let t, s, r;
        function a() {
            return e[2](e[6])
        }
        function i() {
            return e[3](e[6])
        }
        return {
            c() {
                t = v("li"),
                L(t, "class", "spine-unit dot svelte-bn63j8")
            },
            m(e, o) {
                p(e, t, o),
                s || (r = [O(t, "mouseover", a), O(t, "focus", i)],
                s = !0)
            },
            p(t, s) {
                e = t
            },
            d(e) {
                e && z(t),
                s = !1,
                o(r)
            }
        }
    }
    function ft(e) {
        let t, s, r, o, a, i, n, l, C, h, k, c, u, f, m, _, O, M, H, x, $, j, V, B, Z, T, Y, F, D, I, X, U, R, A, P, q, Q, G = e[1][e[0]].name + "", W = e[1][e[0]].description + "";
        r = new ht({});
        let K = e[1]
          , J = [];
        for (let t = 0; t < K.length; t += 1)
            J[t] = wt(ut(e, K, t));
        return R = new ct({}),
        q = new ct({}),
        {
            c() {
                t = v("section"),
                s = v("div"),
                oe(r.$$.fragment),
                o = E(),
                a = v("div"),
                i = E(),
                n = v("div"),
                l = v("div"),
                C = v("img"),
                u = E(),
                f = v("div"),
                m = v("div"),
                _ = y(G),
                O = E(),
                M = v("div"),
                H = E(),
                x = v("div"),
                $ = y(W),
                j = E(),
                V = v("a"),
                B = y("See more"),
                T = E(),
                Y = v("div"),
                F = v("ul");
                for (let e = 0; e < J.length; e += 1)
                    J[e].c();
                D = E(),
                I = v("div"),
                I.innerHTML = '<svg width="100%" height="16" viewBox="0 0 463 16" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_121_3913" fill="white"><path d="M40 8.5L0 8.5L8.75085e-08 7.5L40 7.5L40 8.5Z"></path></mask><path d="M40 8.5L40 9.5L41 9.5L41 8.5L40 8.5ZM0 8.5L-1 8.5L-1 9.5L-8.75085e-08 9.5L0 8.5ZM8.75085e-08 7.5L1.75017e-07 6.5L-1 6.5L-1 7.5L8.75085e-08 7.5ZM40 7.5L41 7.5L41 6.5L40 6.5L40 7.5ZM40 7.5L8.75085e-08 7.5L-8.75085e-08 9.5L40 9.5L40 7.5ZM1 8.5L1 7.5L-1 7.5L-1 8.5L1 8.5ZM0 8.5L40 8.5L40 6.5L1.75017e-07 6.5L0 8.5ZM39 7.5L39 8.5L41 8.5L41 7.5L39 7.5Z" fill="url(#paint0_linear_121_3913)" mask="url(#path-1-inside-1_121_3913)"></path><path d="M149.198 13V3.54545H152.929C153.646 3.54545 154.257 3.68241 154.761 3.95632C155.266 4.22715 155.651 4.60417 155.915 5.08736C156.183 5.56747 156.317 6.12145 156.317 6.74929C156.317 7.37713 156.182 7.93111 155.911 8.41122C155.64 8.89133 155.248 9.26527 154.734 9.53303C154.223 9.80078 153.604 9.93466 152.878 9.93466H150.5V8.33274H152.555C152.939 8.33274 153.256 8.26657 153.506 8.13423C153.758 7.99882 153.946 7.81262 154.069 7.57564C154.195 7.33558 154.258 7.06013 154.258 6.74929C154.258 6.43537 154.195 6.16146 154.069 5.92756C153.946 5.69058 153.758 5.50746 153.506 5.3782C153.253 5.24586 152.933 5.17969 152.545 5.17969H151.197V13H149.198ZM160.995 13V3.54545H167.366V5.19354H162.994V7.44638H167.038V9.09446H162.994V11.3519H167.385V13H160.995ZM172.335 13V3.54545H176.065C176.779 3.54545 177.389 3.67318 177.894 3.92862C178.401 4.18099 178.788 4.53954 179.052 5.00426C179.32 5.46591 179.454 6.00911 179.454 6.63388C179.454 7.26172 179.319 7.80185 179.048 8.25426C178.777 8.7036 178.384 9.0483 177.871 9.28835C177.36 9.52841 176.741 9.64844 176.015 9.64844H173.517V8.0419H175.692C176.073 8.0419 176.39 7.98958 176.643 7.88494C176.895 7.7803 177.083 7.62334 177.206 7.41406C177.332 7.20478 177.395 6.94472 177.395 6.63388C177.395 6.31996 177.332 6.05528 177.206 5.83984C177.083 5.62441 176.893 5.46129 176.638 5.3505C176.386 5.23662 176.067 5.17969 175.682 5.17969H174.334V13H172.335ZM177.441 8.69744L179.791 13H177.584L175.285 8.69744H177.441ZM189.376 6.26456C189.339 5.89216 189.18 5.60286 188.9 5.39666C188.62 5.19046 188.24 5.08736 187.76 5.08736C187.434 5.08736 187.158 5.13352 186.933 5.22585C186.709 5.3151 186.536 5.43975 186.416 5.59979C186.299 5.75982 186.241 5.94141 186.241 6.14453C186.235 6.3138 186.27 6.46153 186.347 6.58771C186.427 6.7139 186.536 6.82315 186.675 6.91548C186.813 7.00473 186.973 7.08321 187.155 7.15092C187.337 7.21555 187.53 7.27095 187.737 7.31712L188.586 7.52024C188.999 7.61257 189.377 7.73568 189.722 7.88956C190.066 8.04344 190.365 8.23272 190.617 8.45739C190.87 8.68205 191.065 8.94673 191.204 9.25142C191.345 9.55611 191.418 9.90542 191.421 10.2994C191.418 10.878 191.27 11.3796 190.977 11.8043C190.688 12.226 190.27 12.5537 189.722 12.7876C189.177 13.0185 188.52 13.1339 187.751 13.1339C186.987 13.1339 186.322 13.0169 185.756 12.783C185.193 12.5491 184.753 12.2029 184.436 11.7443C184.122 11.2827 183.957 10.7118 183.942 10.0316H185.876C185.898 10.3486 185.989 10.6133 186.149 10.8256C186.312 11.0349 186.529 11.1934 186.8 11.3011C187.073 11.4058 187.383 11.4581 187.727 11.4581C188.066 11.4581 188.36 11.4089 188.609 11.3104C188.862 11.2119 189.057 11.0749 189.195 10.8995C189.334 10.7241 189.403 10.5225 189.403 10.2947C189.403 10.0824 189.34 9.90388 189.214 9.75923C189.091 9.61458 188.909 9.49148 188.669 9.38991C188.432 9.28835 188.141 9.19602 187.797 9.11293L186.767 8.8544C185.97 8.66051 185.341 8.35736 184.879 7.94496C184.417 7.53255 184.188 6.97704 184.191 6.27841C184.188 5.70597 184.34 5.20585 184.648 4.77805C184.959 4.35026 185.385 4.01634 185.927 3.77628C186.469 3.53622 187.084 3.41619 187.774 3.41619C188.475 3.41619 189.088 3.53622 189.611 3.77628C190.137 4.01634 190.547 4.35026 190.839 4.77805C191.131 5.20585 191.282 5.70135 191.291 6.26456H189.376ZM204.833 8.27273C204.833 9.30374 204.638 10.1809 204.247 10.9041C203.859 11.6274 203.33 12.1798 202.659 12.5614C201.991 12.94 201.24 13.1293 200.406 13.1293C199.566 13.1293 198.812 12.9384 198.144 12.5568C197.476 12.1752 196.948 11.6228 196.561 10.8995C196.173 10.1763 195.979 9.30066 195.979 8.27273C195.979 7.24171 196.173 6.36458 196.561 5.64134C196.948 4.91809 197.476 4.36719 198.144 3.98864C198.812 3.60701 199.566 3.41619 200.406 3.41619C201.24 3.41619 201.991 3.60701 202.659 3.98864C203.33 4.36719 203.859 4.91809 204.247 5.64134C204.638 6.36458 204.833 7.24171 204.833 8.27273ZM202.807 8.27273C202.807 7.60488 202.707 7.04167 202.507 6.5831C202.31 6.12453 202.031 5.77675 201.671 5.53977C201.311 5.30279 200.889 5.1843 200.406 5.1843C199.923 5.1843 199.501 5.30279 199.141 5.53977C198.781 5.77675 198.501 6.12453 198.301 6.5831C198.104 7.04167 198.006 7.60488 198.006 8.27273C198.006 8.94058 198.104 9.50379 198.301 9.96236C198.501 10.4209 198.781 10.7687 199.141 11.0057C199.501 11.2427 199.923 11.3612 200.406 11.3612C200.889 11.3612 201.311 11.2427 201.671 11.0057C202.031 10.7687 202.31 10.4209 202.507 9.96236C202.707 9.50379 202.807 8.94058 202.807 8.27273ZM217.602 3.54545V13H215.876L211.762 7.04936H211.693V13H209.694V3.54545H211.448L215.529 9.49148H215.612V3.54545H217.602ZM224.263 13H222.121L225.385 3.54545H227.961L231.22 13H229.078L226.71 5.70597H226.636L224.263 13ZM224.129 9.28374H229.189V10.8441H224.129V9.28374ZM235.738 13V3.54545H237.737V11.3519H241.791V13H235.738ZM255.011 13L252.306 3.54545H254.49L256.055 10.1147H256.133L257.86 3.54545H259.729L261.451 10.1286H261.534L263.099 3.54545H265.283L262.578 13H260.63L258.829 6.81854H258.755L256.959 13H255.011ZM277.888 8.27273C277.888 9.30374 277.692 10.1809 277.302 10.9041C276.914 11.6274 276.384 12.1798 275.713 12.5614C275.046 12.94 274.295 13.1293 273.461 13.1293C272.62 13.1293 271.866 12.9384 271.199 12.5568C270.531 12.1752 270.003 11.6228 269.615 10.8995C269.227 10.1763 269.033 9.30066 269.033 8.27273C269.033 7.24171 269.227 6.36458 269.615 5.64134C270.003 4.91809 270.531 4.36719 271.199 3.98864C271.866 3.60701 272.62 3.41619 273.461 3.41619C274.295 3.41619 275.046 3.60701 275.713 3.98864C276.384 4.36719 276.914 4.91809 277.302 5.64134C277.692 6.36458 277.888 7.24171 277.888 8.27273ZM275.861 8.27273C275.861 7.60488 275.761 7.04167 275.561 6.5831C275.364 6.12453 275.086 5.77675 274.726 5.53977C274.365 5.30279 273.944 5.1843 273.461 5.1843C272.977 5.1843 272.556 5.30279 272.196 5.53977C271.836 5.77675 271.556 6.12453 271.355 6.5831C271.159 7.04167 271.06 7.60488 271.06 8.27273C271.06 8.94058 271.159 9.50379 271.355 9.96236C271.556 10.4209 271.836 10.7687 272.196 11.0057C272.556 11.2427 272.977 11.3612 273.461 11.3612C273.944 11.3612 274.365 11.2427 274.726 11.0057C275.086 10.7687 275.364 10.4209 275.561 9.96236C275.761 9.50379 275.861 8.94058 275.861 8.27273ZM282.749 13V3.54545H286.479C287.193 3.54545 287.802 3.67318 288.307 3.92862C288.815 4.18099 289.201 4.53954 289.466 5.00426C289.733 5.46591 289.867 6.00911 289.867 6.63388C289.867 7.26172 289.732 7.80185 289.461 8.25426C289.19 8.7036 288.798 9.0483 288.284 9.28835C287.773 9.52841 287.154 9.64844 286.428 9.64844H283.93V8.0419H286.105C286.486 8.0419 286.803 7.98958 287.056 7.88494C287.308 7.7803 287.496 7.62334 287.619 7.41406C287.745 7.20478 287.808 6.94472 287.808 6.63388C287.808 6.31996 287.745 6.05528 287.619 5.83984C287.496 5.62441 287.307 5.46129 287.051 5.3505C286.799 5.23662 286.48 5.17969 286.095 5.17969H284.747V13H282.749ZM287.854 8.69744L290.204 13H287.997L285.698 8.69744H287.854ZM294.66 13V3.54545H296.659V7.71413H296.783L300.186 3.54545H302.582L299.073 7.77876L302.623 13H300.232L297.642 9.11293L296.659 10.3132V13H294.66ZM312.055 6.26456C312.018 5.89216 311.86 5.60286 311.58 5.39666C311.3 5.19046 310.92 5.08736 310.44 5.08736C310.113 5.08736 309.838 5.13352 309.613 5.22585C309.389 5.3151 309.216 5.43975 309.096 5.59979C308.979 5.75982 308.921 5.94141 308.921 6.14453C308.915 6.3138 308.95 6.46153 309.027 6.58771C309.107 6.7139 309.216 6.82315 309.355 6.91548C309.493 7.00473 309.653 7.08321 309.835 7.15092C310.016 7.21555 310.21 7.27095 310.417 7.31712L311.266 7.52024C311.678 7.61257 312.057 7.73568 312.402 7.88956C312.746 8.04344 313.045 8.23272 313.297 8.45739C313.55 8.68205 313.745 8.94673 313.884 9.25142C314.025 9.55611 314.097 9.90542 314.101 10.2994C314.097 10.878 313.95 11.3796 313.657 11.8043C313.368 12.226 312.949 12.5537 312.402 12.7876C311.857 13.0185 311.2 13.1339 310.43 13.1339C309.667 13.1339 309.002 13.0169 308.436 12.783C307.873 12.5491 307.433 12.2029 307.116 11.7443C306.802 11.2827 306.637 10.7118 306.622 10.0316H308.556C308.578 10.3486 308.668 10.6133 308.828 10.8256C308.992 11.0349 309.209 11.1934 309.479 11.3011C309.753 11.4058 310.063 11.4581 310.407 11.4581C310.746 11.4581 311.04 11.4089 311.289 11.3104C311.541 11.2119 311.737 11.0749 311.875 10.8995C312.014 10.7241 312.083 10.5225 312.083 10.2947C312.083 10.0824 312.02 9.90388 311.894 9.75923C311.771 9.61458 311.589 9.49148 311.349 9.38991C311.112 9.28835 310.821 9.19602 310.477 9.11293L309.447 8.8544C308.65 8.66051 308.021 8.35736 307.559 7.94496C307.097 7.53255 306.868 6.97704 306.871 6.27841C306.868 5.70597 307.02 5.20585 307.328 4.77805C307.639 4.35026 308.065 4.01634 308.607 3.77628C309.149 3.53622 309.764 3.41619 310.453 3.41619C311.155 3.41619 311.768 3.53622 312.291 3.77628C312.817 4.01634 313.226 4.35026 313.519 4.77805C313.811 5.20585 313.962 5.70135 313.971 6.26456H312.055Z" fill="white"></path><mask id="path-4-inside-2_121_3913" fill="white"><path d="M423 7.5H463V8.5H423V7.5Z"></path></mask><path d="M423 7.5V6.5H422V7.5H423ZM463 7.5H464V6.5H463V7.5ZM463 8.5V9.5H464V8.5H463ZM423 8.5H422V9.5H423V8.5ZM423 8.5H463V6.5H423V8.5ZM462 7.5V8.5H464V7.5H462ZM463 7.5H423V9.5H463V7.5ZM424 8.5V7.5H422V8.5H424Z" fill="url(#paint1_linear_121_3913)" mask="url(#path-4-inside-2_121_3913)"></path></svg>',
                X = E(),
                U = v("div"),
                oe(R.$$.fragment),
                A = E(),
                P = v("div"),
                oe(q.$$.fragment),
                L(s, "class", "frame-container svelte-bn63j8"),
                L(a, "class", "text-container"),
                d(C.src, h = e[1][e[0]].image) || L(C, "src", h),
                L(C, "alt", k = e[1][e[0]].name),
                b(C, "width", "100%"),
                L(C, "class", "svelte-bn63j8"),
                L(m, "class", "pw-name svelte-bn63j8"),
                L(M, "class", "line svelte-bn63j8"),
                L(x, "class", "pw-description svelte-bn63j8"),
                L(V, "href", Z = e[1][e[0]].link),
                L(V, "target", "_blank"),
                L(V, "class", "svelte-bn63j8"),
                L(f, "class", "text-box svelte-bn63j8"),
                L(l, "class", "mySlides  svelte-bn63j8"),
                L(n, "class", "slideshow-container"),
                L(F, "class", "spine-controller-ul dot-nav svelte-bn63j8"),
                L(Y, "class", "spine-container svelte-bn63j8"),
                L(Y, "id", "spine-controller"),
                L(I, "class", "title svelte-bn63j8"),
                L(P, "class", "mirror svelte-bn63j8"),
                L(U, "class", "corners svelte-bn63j8"),
                L(t, "class", "section-03 svelte-bn63j8"),
                L(t, "id", "personal-works")
            },
            m(e, d) {
                p(e, t, d),
                w(t, s),
                ae(r, s, null),
                w(t, o),
                w(t, a),
                w(t, i),
                w(t, n),
                w(n, l),
                w(l, C),
                w(l, u),
                w(l, f),
                w(f, m),
                w(m, _),
                w(f, O),
                w(f, M),
                w(f, H),
                w(f, x),
                w(x, $),
                w(f, j),
                w(f, V),
                w(V, B),
                w(t, T),
                w(t, Y),
                w(Y, F);
                for (let e = 0; e < J.length; e += 1)
                    J[e].m(F, null);
                w(t, D),
                w(t, I),
                w(t, X),
                w(t, U),
                ae(R, U, null),
                w(U, A),
                w(U, P),
                ae(q, P, null),
                Q = !0
            },
            p(e, [t]) {
                if ((!Q || 1 & t && !d(C.src, h = e[1][e[0]].image)) && L(C, "src", h),
                (!Q || 1 & t && k !== (k = e[1][e[0]].name)) && L(C, "alt", k),
                (!Q || 1 & t) && G !== (G = e[1][e[0]].name + "") && N(_, G),
                (!Q || 1 & t) && W !== (W = e[1][e[0]].description + "") && N($, W),
                (!Q || 1 & t && Z !== (Z = e[1][e[0]].link)) && L(V, "href", Z),
                1 & t) {
                    let s;
                    for (K = e[1],
                    s = 0; s < K.length; s += 1) {
                        const r = ut(e, K, s);
                        J[s] ? J[s].p(r, t) : (J[s] = wt(r),
                        J[s].c(),
                        J[s].m(F, null))
                    }
                    for (; s < J.length; s += 1)
                        J[s].d(1);
                    J.length = K.length
                }
            },
            i(e) {
                Q || (ee(r.$$.fragment, e),
                S((()=>{
                    c || (c = re(C, Ne, {}, !0)),
                    c.run(1)
                }
                )),
                ee(R.$$.fragment, e),
                ee(q.$$.fragment, e),
                Q = !0)
            },
            o(e) {
                te(r.$$.fragment, e),
                c || (c = re(C, Ne, {}, !1)),
                c.run(0),
                te(R.$$.fragment, e),
                te(q.$$.fragment, e),
                Q = !1
            },
            d(e) {
                e && z(t),
                ie(r),
                e && c && c.end(),
                g(J, e),
                ie(R),
                ie(q)
            }
        }
    }
    function mt(e, t, s) {
        window.addEventListener("load", (function() {
            for (var e = document.getElementById("spine-controller").getElementsByClassName("spine-unit"), t = 0; t < e.length; t++)
                e[t].addEventListener("mouseover", (function() {
                    var e = document.getElementsByClassName(" active");
                    e[0].className = e[0].className.replace(" active", ""),
                    this.className += " active"
                }
                ))
        }
        ));
        let r = 0;
        return [r, [{
            no: "1",
            id: "stealth",
            name: "Stealth Game Concept",
            image: " /images/STEALTH.png",
            link: "https://www.behance.net/gallery/112545991/Pyke-Stealth-game",
            description: "UI concept for a Stealth Game"
        }, {
            no: "2",
            id: "dark-future",
            name: "Dark Future",
            image: "images/DARK FUTURE.png",
            link: "https://www.behance.net/gallery/71387117/Dark-Future",
            description: "3D art of a dystopian city"
        }, {
            no: "3",
            id: "lynn",
            name: "Lynn",
            image: "images/LYNN.png",
            link: "https://zacting.itch.io/lynn",
            description: "2.5D platformer done in Unreal Engine"
        }, {
            no: "4",
            id: "icarus",
            name: "ICARUS",
            image: "/images/ICARUS.png",
            link: "https://www.behance.net/gallery/99721631/STEAMPUNK-HUD-DESIGNS",
            description: "UI concept based on Steampunk theme"
        }, {
            no: "5",
            id: "division",
            name: "Division (Redesign)",
            image: "images/THE DIVISION.png",
            link: "https://www.behance.net/gallery/108280961/DIVISION-III-Fan-art",
            description: "UI concept redesign of The Division"
        }, {
            no: "6",
            id: "drifter",
            name: "Drifter",
            image: "/images/DRIFTER.png",
            link: "https://www.youtube.com/watch?v=yK0yUYrHmXQ",
            description: "3D art done in Unreal Engine 4"
        }, {
            no: "7",
            id: "blackmonarch",
            name: "Black Monarch ",
            image: "/images/Black Monarch.png",
            link: "https://www.behance.net/gallery/108694895/The-Black-Monarch",
            description: "Graphic Design concept exploration"
        }], e=>s(0, r = e), e=>s(0, r = e)]
    }
    class pt extends le {
        constructor(e) {
            super(),
            de(this, e, mt, ft, i, {})
        }
    }
    function zt(t) {
        let s, r, a, i, n;
        return {
            c() {
                s = v("p"),
                s.textContent = "Please enter password to view case studies",
                r = E(),
                a = v("input"),
                L(s, "class", "svelte-16e2k6y"),
                L(a, "type", "password"),
                L(a, "class", "password-input svelte-16e2k6y"),
                L(a, "placeholder", "enter password")
            },
            m(e, o) {
                p(e, s, o),
                p(e, r, o),
                p(e, a, o),
                M(a, t[3]),
                i || (n = [O(a, "input", t[6]), O(a, "keypress", t[5])],
                i = !0)
            },
            p(e, t) {
                8 & t && a.value !== e[3] && M(a, e[3])
            },
            i: e,
            o: e,
            d(e) {
                e && z(s),
                e && z(r),
                e && z(a),
                i = !1,
                o(n)
            }
        }
    }
    function gt(t) {
        let s, r, o;
        return {
            c() {
                s = v("a"),
                s.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-16e2k6y"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 7.5V13.307L9.88327 11.9403L8.82261 13.0009L11.4697 15.648L12 16.1783L12.5303 15.648L15.1774 13.0009L14.1167 11.9403L12.75 13.307V7.5H19C20.3807 7.5 21.5 8.61929 21.5 10V17C21.5 18.3807 20.3807 19.5 19 19.5H5C3.61929 19.5 2.5 18.3807 2.5 17V10C2.5 8.61929 3.61929 7.5 5 7.5H11.25Z" fill="white"></path><path d="M12 4.5V7.5" stroke="white" stroke-width="1.5"></path></svg>\n\n        Download Resume',
                L(s, "class", "resume-tag svelte-16e2k6y"),
                L(s, "href", "/images/Issac Ting Resume.pdf"),
                L(s, "download", "")
            },
            m(e, t) {
                p(e, s, t),
                o = !0
            },
            p: e,
            i(e) {
                o || (S((()=>{
                    r || (r = re(s, Le, {}, !0)),
                    r.run(1)
                }
                )),
                o = !0)
            },
            o(e) {
                r || (r = re(s, Le, {}, !1)),
                r.run(0),
                o = !1
            },
            d(e) {
                e && z(s),
                e && r && r.end()
            }
        }
    }
    function vt(t) {
        let s, r, o, a, i;
        return {
            c() {
                s = v("div"),
                s.innerHTML = '<div class="pulseLoader svelte-16e2k6y"></div> \n      <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGEmhtqmH0KbyOf2Si9efgw%2FIssac-Portfolio-2022%3Fpage-id%3D101%253A2099%26node-id%3D102%253A3104%26viewport%3D947%252C672%252C0.07%26scaling%3Dscale-down-width%26starting-point-node-id%3D102%253A3104" allowfullscreen="" class="svelte-16e2k6y"></iframe>',
                L(s, "class", "light-box svelte-16e2k6y")
            },
            m(e, r) {
                p(e, s, r),
                o = !0,
                a || (i = O(s, "click", t[7]),
                a = !0)
            },
            p: e,
            i(e) {
                o || (S((()=>{
                    r || (r = re(s, Ne, {}, !0)),
                    r.run(1)
                }
                )),
                o = !0)
            },
            o(e) {
                r || (r = re(s, Ne, {}, !1)),
                r.run(0),
                o = !1
            },
            d(e) {
                e && z(s),
                e && r && r.end(),
                a = !1,
                i()
            }
        }
    }
    function _t(t) {
        let s, r, o, a, i;
        return {
            c() {
                s = v("div"),
                s.innerHTML = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGEmhtqmH0KbyOf2Si9efgw%2FPortfolio-2022%3Fpage-id%3D101%253A2099%26node-id%3D109%253A2654%26viewport%3D344%252C48%252C0.16%26scaling%3Dmin-zoom%26starting-point-node-id%3D109%253A2654" allowfullscreen="" class="svelte-16e2k6y"></iframe> \n      <div class="pulseLoader svelte-16e2k6y"></div>',
                L(s, "class", "light-box svelte-16e2k6y")
            },
            m(e, r) {
                p(e, s, r),
                o = !0,
                a || (i = O(s, "click", t[8]),
                a = !0)
            },
            p: e,
            i(e) {
                o || (S((()=>{
                    r || (r = re(s, Ne, {}, !0)),
                    r.run(1)
                }
                )),
                o = !0)
            },
            o(e) {
                r || (r = re(s, Ne, {}, !1)),
                r.run(0),
                o = !1
            },
            d(e) {
                e && z(s),
                e && r && r.end(),
                a = !1,
                i()
            }
        }
    }
    function yt(t) {
        let s, r, o, a, i;
        return {
            c() {
                s = v("div"),
                s.innerHTML = '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGEmhtqmH0KbyOf2Si9efgw%2FPortfolio-2022%3Fpage-id%3D101%253A2099%26node-id%3D351%253A2592%26viewport%3D344%252C48%252C0.38%26scaling%3Dmin-zoom%26starting-point-node-id%3D351%253A2592" allowfullscreen="" class="svelte-16e2k6y"></iframe> \n      <div class="pulseLoader svelte-16e2k6y"></div>',
                L(s, "class", "light-box svelte-16e2k6y")
            },
            m(e, r) {
                p(e, s, r),
                o = !0,
                a || (i = O(s, "click", t[9]),
                a = !0)
            },
            p: e,
            i(e) {
                o || (S((()=>{
                    r || (r = re(s, Ne, {}, !0)),
                    r.run(1)
                }
                )),
                o = !0)
            },
            o(e) {
                r || (r = re(s, Ne, {}, !1)),
                r.run(0),
                o = !1
            },
            d(e) {
                e && z(s),
                e && r && r.end(),
                a = !1,
                i()
            }
        }
    }
    function Et(e) {
        let t, s;
        return {
            c() {
                t = v("img"),
                L(t, "class", "lock svelte-16e2k6y"),
                d(t.src, s = "images/lock.svg") || L(t, "src", "images/lock.svg"),
                L(t, "alt", "")
            },
            m(e, s) {
                p(e, t, s)
            },
            d(e) {
                e && z(t)
            }
        }
    }
    function Ot(e) {
        let t;
        return {
            c() {
                t = v("button"),
                t.textContent = "Learn More",
                L(t, "onclick", "location.href=' https://glossy-ink-3c8.notion.site/Govtech-77902b3f200047f7abb7087f5dea9304'"),
                L(t, "class", "svelte-16e2k6y")
            },
            m(e, s) {
                p(e, t, s)
            },
            d(e) {
                e && z(t)
            }
        }
    }
    function Lt(t) {
        let s, r;
        return {
            c() {
                s = v("img"),
                L(s, "class", "lock svelte-16e2k6y"),
                d(s.src, r = "images/lock.svg") || L(s, "src", "images/lock.svg"),
                L(s, "alt", "")
            },
            m(e, t) {
                p(e, s, t)
            },
            p: e,
            d(e) {
                e && z(s)
            }
        }
    }
    function Nt(t) {
        let s, r, o;
        return {
            c() {
                s = v("button"),
                s.textContent = "Read Case Study",
                L(s, "class", "svelte-16e2k6y")
            },
            m(e, a) {
                p(e, s, a),
                r || (o = O(s, "click", t[10]),
                r = !0)
            },
            p: e,
            d(e) {
                e && z(s),
                r = !1,
                o()
            }
        }
    }
    function Mt(t) {
        let s, r;
        return {
            c() {
                s = v("img"),
                L(s, "class", "lock svelte-16e2k6y"),
                d(s.src, r = "images/lock.svg") || L(s, "src", "images/lock.svg"),
                L(s, "alt", "")
            },
            m(e, t) {
                p(e, s, t)
            },
            p: e,
            d(e) {
                e && z(s)
            }
        }
    }
    function bt(t) {
        let s, r, o;
        return {
            c() {
                s = v("button"),
                s.textContent = "Read Case Study",
                L(s, "class", "svelte-16e2k6y")
            },
            m(e, a) {
                p(e, s, a),
                r || (o = O(s, "click", t[11]),
                r = !0)
            },
            p: e,
            d(e) {
                e && z(s),
                r = !1,
                o()
            }
        }
    }
    function Ht(e) {
        let t, s;
        return {
            c() {
                t = v("img"),
                L(t, "class", "lock svelte-16e2k6y"),
                d(t.src, s = "images/lock.svg") || L(t, "src", "images/lock.svg"),
                L(t, "alt", "")
            },
            m(e, s) {
                p(e, t, s)
            },
            d(e) {
                e && z(t)
            }
        }
    }
    function xt(e) {
        let t;
        return {
            c() {
                t = v("button"),
                t.textContent = "Read Case Study",
                L(t, "onclick", "location.href='https://glossy-ink-3c8.notion.site/StepUp-case-study-317f7a4225a74b2c8e37f0607b3a1046'"),
                L(t, "type", "button"),
                L(t, "class", "svelte-16e2k6y")
            },
            m(e, s) {
                p(e, t, s)
            },
            d(e) {
                e && z(t)
            }
        }
    }
    function $t(e) {
        let t;
        return {
            c() {
                t = v("div"),
                t.innerHTML = '<img class="lock invert svelte-16e2k6y" src="images/lock.svg" alt=""/>',
                L(t, "class", "show-more-locked svelte-16e2k6y")
            },
            m(e, s) {
                p(e, t, s)
            },
            d(e) {
                e && z(t)
            }
        }
    }
    function jt(e) {
        let t;
        return {
            c() {
                t = v("a"),
                t.textContent = "See more",
                L(t, "class", "show-more-locked svelte-16e2k6y"),
                L(t, "href", "https://glossy-ink-3c8.notion.site/dd4f6a145a0642fa9e8620733de50336?v=b34fe9b851804a6089a4697eaeabff9d")
            },
            m(e, s) {
                p(e, t, s)
            },
            d(e) {
                e && z(t)
            }
        }
    }
    function Vt(e) {
        let t, s, r, o, a, i, n, d, l, C, h, k, c, u, f, m, g, _, y, O, N, M, b, H, x, $, j, V, B, Z, T, Y, F, D, I, S, X, U, R, A, P, q, Q, G, W, se, re, oe, ae, ie, ne;
        const de = [gt, zt]
          , le = [];
        function Ce(e, t) {
            return e[4] ? 0 : 1
        }
        a = Ce(e),
        i = le[a] = de[a](e);
        let he = e[0] && vt(e)
          , ke = e[1] && _t(e)
          , ce = e[2] && yt(e);
        function ue(e, t) {
            return e[4] ? Ot : Et
        }
        let we = ue(e)
          , fe = we(e);
        function me(e, t) {
            return e[4] ? Nt : Lt
        }
        let pe = me(e)
          , ze = pe(e);
        function ge(e, t) {
            return e[4] ? bt : Mt
        }
        let ve = ge(e)
          , _e = ve(e);
        function ye(e, t) {
            return e[4] ? xt : Ht
        }
        let Ee = ye(e)
          , Oe = Ee(e);
        function Le(e, t) {
            return e[4] ? jt : $t
        }
        let Ne = Le(e)
          , Me = Ne(e);
        return {
            c() {
                t = v("section"),
                s = v("div"),
                r = v("div"),
                r.textContent = "Case Studies",
                o = E(),
                i.c(),
                n = E(),
                he && he.c(),
                d = E(),
                ke && ke.c(),
                l = E(),
                ce && ce.c(),
                C = E(),
                h = v("div"),
                k = v("div"),
                c = v("div"),
                c.innerHTML = '<img class="screen-img svelte-16e2k6y" src="images/thumbnail.png" alt=""/>',
                u = E(),
                f = v("div"),
                m = v("div"),
                m.textContent = "CC4",
                g = E(),
                _ = v("div"),
                _.textContent = "As one of the 2 designers responsible for the Career Coach Platform, I\r\n          was responsible for conceptualising data-driven solution, facilitating\r\n          design workshops and overseeing the entire design process.",
                y = E(),
                fe.c(),
                O = E(),
                N = v("div"),
                M = v("div"),
                b = v("div"),
                b.innerHTML = '<img class="screen-img svelte-16e2k6y" src="images/Screen.png" alt=""/>',
                H = E(),
                x = v("div"),
                $ = v("div"),
                $.textContent = "Ember Design Language System",
                j = E(),
                V = v("div"),
                V.innerHTML = "Creating Singtel&#39;s <b>Design Language System</b> used across Digital\n          Experience team. Here is how we have build a\n          <b>living, breathing system</b> to cater to the needs of a growing design\n          team over the course of 18 months.",
                B = E(),
                ze.c(),
                Z = E(),
                T = v("div"),
                Y = v("div"),
                F = v("div"),
                F.innerHTML = '<img class="phone-img svelte-16e2k6y" src="images/phone-01.png" alt=""/>',
                D = E(),
                I = v("div"),
                S = v("div"),
                S.textContent = "hi!Carnival",
                X = E(),
                U = v("div"),
                U.innerHTML = "Singtel&#39;s first <b>award winning gamification project</b> which\n          helped to drive <b>MAU by 20%</b> on our prepaid App.",
                R = E(),
                _e.c(),
                A = E(),
                P = v("div"),
                q = v("div"),
                Q = v("div"),
                Q.innerHTML = '<img class="phone-img svelte-16e2k6y" src="images/stepUp-thumbnail.png" alt=""/>',
                G = E(),
                W = v("div"),
                se = v("div"),
                se.textContent = "StepUp",
                re = E(),
                oe = v("div"),
                oe.textContent = "Created a Wellness app that rewards users for walking. Singtel's first\r\n          collaboration with AIA that has a 97% on-boarding rate.",
                ae = E(),
                Oe.c(),
                ie = E(),
                Me.c(),
                L(r, "class", "title svelte-16e2k6y"),
                L(s, "class", "password-container svelte-16e2k6y"),
                L(c, "class", "case-image svelte-16e2k6y"),
                L(m, "class", "case-title svelte-16e2k6y"),
                L(_, "class", "case-description svelte-16e2k6y"),
                L(f, "class", "case-text svelte-16e2k6y"),
                L(k, "class", "case-container svelte-16e2k6y"),
                L(h, "class", "case-study-section svelte-16e2k6y"),
                L(h, "id", "three"),
                L(b, "class", "case-image svelte-16e2k6y"),
                L($, "class", "case-title svelte-16e2k6y"),
                L(V, "class", "case-description svelte-16e2k6y"),
                L(x, "class", "case-text svelte-16e2k6y"),
                L(M, "class", "case-container svelte-16e2k6y"),
                L(N, "class", "case-study-section svelte-16e2k6y"),
                L(N, "id", "three"),
                L(F, "class", "case-image svelte-16e2k6y"),
                L(S, "class", "case-title svelte-16e2k6y"),
                L(U, "class", "case-description svelte-16e2k6y"),
                L(I, "class", "case-text svelte-16e2k6y"),
                L(Y, "class", "case-container svelte-16e2k6y"),
                L(T, "class", "case-study-section svelte-16e2k6y"),
                L(T, "id", "three"),
                L(Q, "class", "case-image svelte-16e2k6y"),
                L(se, "class", "case-title svelte-16e2k6y"),
                L(oe, "class", "case-description svelte-16e2k6y"),
                L(W, "class", "case-text svelte-16e2k6y"),
                L(q, "class", "case-container svelte-16e2k6y"),
                L(P, "class", "case-study-section svelte-16e2k6y"),
                L(P, "id", "three"),
                L(t, "class", "case-section svelte-16e2k6y")
            },
            m(e, i) {
                p(e, t, i),
                w(t, s),
                w(s, r),
                w(s, o),
                le[a].m(s, null),
                w(t, n),
                he && he.m(t, null),
                w(t, d),
                ke && ke.m(t, null),
                w(t, l),
                ce && ce.m(t, null),
                w(t, C),
                w(t, h),
                w(h, k),
                w(k, c),
                w(k, u),
                w(k, f),
                w(f, m),
                w(f, g),
                w(f, _),
                w(f, y),
                fe.m(f, null),
                w(t, O),
                w(t, N),
                w(N, M),
                w(M, b),
                w(M, H),
                w(M, x),
                w(x, $),
                w(x, j),
                w(x, V),
                w(x, B),
                ze.m(x, null),
                w(t, Z),
                w(t, T),
                w(T, Y),
                w(Y, F),
                w(Y, D),
                w(Y, I),
                w(I, S),
                w(I, X),
                w(I, U),
                w(I, R),
                _e.m(I, null),
                w(t, A),
                w(t, P),
                w(P, q),
                w(q, Q),
                w(q, G),
                w(q, W),
                w(W, se),
                w(W, re),
                w(W, oe),
                w(W, ae),
                Oe.m(W, null),
                w(t, ie),
                Me.m(t, null),
                ne = !0
            },
            p(e, [r]) {
                let o = a;
                a = Ce(e),
                a === o ? le[a].p(e, r) : (K(),
                te(le[o], 1, 1, (()=>{
                    le[o] = null
                }
                )),
                J(),
                i = le[a],
                i ? i.p(e, r) : (i = le[a] = de[a](e),
                i.c()),
                ee(i, 1),
                i.m(s, null)),
                e[0] ? he ? (he.p(e, r),
                1 & r && ee(he, 1)) : (he = vt(e),
                he.c(),
                ee(he, 1),
                he.m(t, d)) : he && (K(),
                te(he, 1, 1, (()=>{
                    he = null
                }
                )),
                J()),
                e[1] ? ke ? (ke.p(e, r),
                2 & r && ee(ke, 1)) : (ke = _t(e),
                ke.c(),
                ee(ke, 1),
                ke.m(t, l)) : ke && (K(),
                te(ke, 1, 1, (()=>{
                    ke = null
                }
                )),
                J()),
                e[2] ? ce ? (ce.p(e, r),
                4 & r && ee(ce, 1)) : (ce = yt(e),
                ce.c(),
                ee(ce, 1),
                ce.m(t, C)) : ce && (K(),
                te(ce, 1, 1, (()=>{
                    ce = null
                }
                )),
                J()),
                we !== (we = ue(e)) && (fe.d(1),
                fe = we(e),
                fe && (fe.c(),
                fe.m(f, null))),
                pe === (pe = me(e)) && ze ? ze.p(e, r) : (ze.d(1),
                ze = pe(e),
                ze && (ze.c(),
                ze.m(x, null))),
                ve === (ve = ge(e)) && _e ? _e.p(e, r) : (_e.d(1),
                _e = ve(e),
                _e && (_e.c(),
                _e.m(I, null))),
                Ee !== (Ee = ye(e)) && (Oe.d(1),
                Oe = Ee(e),
                Oe && (Oe.c(),
                Oe.m(W, null))),
                Ne !== (Ne = Le(e)) && (Me.d(1),
                Me = Ne(e),
                Me && (Me.c(),
                Me.m(t, null)))
            },
            i(e) {
                ne || (ee(i),
                ee(he),
                ee(ke),
                ee(ce),
                ne = !0)
            },
            o(e) {
                te(i),
                te(he),
                te(ke),
                te(ce),
                ne = !1
            },
            d(e) {
                e && z(t),
                le[a].d(),
                he && he.d(),
                ke && ke.d(),
                ce && ce.d(),
                fe.d(),
                ze.d(),
                _e.d(),
                Oe.d(),
                Me.d()
            }
        }
    }
    function Bt(e, t, s) {
        let r = !1
          , o = !1
          , a = !1;
        window.addEventListener("load", (function() {
            for (var e = document.getElementById("spine-controller").getElementsByClassName("spine-unit"), t = 0; t < e.length; t++)
                e[t].addEventListener("mouseover", (function() {
                    var e = document.getElementsByClassName(" active");
                    e[0].className = e[0].className.replace(" active", ""),
                    this.className += " active"
                }
                ))
        }
        ));
        let i = ""
          , n = !1;
        return [r, o, a, i, n, e=>{
            13 === e.charCode && ("portfolioReview" == i ? (s(4, n = !0),
            console.log("password is correct")) : console.log("password is" + i))
        }
        , function() {
            i = this.value,
            s(3, i)
        }
        , ()=>s(0, r = !r), ()=>s(1, o = !o), ()=>s(2, a = !a), ()=>s(0, r = !r), ()=>s(1, o = !o)]
    }
    class Zt extends le {
        constructor(e) {
            super(),
            de(this, e, Bt, Vt, i, {})
        }
    }
    function Tt(t) {
        let s;
        return {
            c() {
                s = v("section"),
                s.innerHTML = '<div class="col-01 svelte-svxyug"><img class="my-photo svelte-svxyug" src="images/my-photo.jpg" alt=""/></div> \n  <div class="col-01 svelte-svxyug"><div class="profile-title svelte-svxyug">I do a little more than just design.</div> \n    <div><div class="sub-header svelte-svxyug">Skills</div> \n      <div class="description svelte-svxyug">UX . UI . Scifi UI . 3D . Music . Motion . Frontend development .</div> \n      <br/> \n\n      <div class="sub-header svelte-svxyug">Software</div> \n\n      <div class="description svelte-svxyug">Blender . Unreal . AfterEffects . Html . Css .</div> \n      <br/></div> \n    <br/> \n    <br/></div>',
                L(s, "class", "profile-container svelte-svxyug"),
                L(s, "id", "about")
            },
            m(e, t) {
                p(e, s, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class Yt extends le {
        constructor(e) {
            super(),
            de(this, e, null, Tt, i, {})
        }
    }
    function Ft(t) {
        let s;
        return {
            c() {
                s = v("div"),
                s.innerHTML = '<div class="col svelte-1yp41zp"><div class="sub-header  svelte-1yp41zp">Writings</div> \n    <div class="list svelte-1yp41zp"><a href="https://medium.com/@issaczting/i-built-a-sci-fi-style-portfolio-website-53cb6ac440b2#cee4-d0ecd5abb8c8">Here&#39;s how I made this website. <br/> \n        <span class="sub-text svelte-1yp41zp">Published in Bootcamp</span></a> \n      <span class="date svelte-1yp41zp">05.2022</span></div> \n    <div class="list svelte-1yp41zp"><a href="https://medium.com/@issaczting/welcome-to-the-age-of-design-industrialization-let-me-explain-344c38196da7">Welcome to the age of Design Industrialization. Let me explain…</a> \n      <span class="date svelte-1yp41zp">12.2021</span></div> \n    <div class="list svelte-1yp41zp"><a href="https://medium.com/@issaczting/creating-micro-interactions-for-beginners-2eb31c48c689">Creating micro-interactions for beginners</a> \n      <span class="date svelte-1yp41zp">09.2018</span></div> \n    <div class="list svelte-1yp41zp"><a href="https://medium.com/@issaczting/a-simple-tutorial-on-interactive-animations-e41ded01cf66">A simple tutorial on Interactive Animations</a> \n      <span class="date svelte-1yp41zp">09.2018</span></div></div> \n  <div class="col svelte-1yp41zp"><div class="sub-header svelte-1yp41zp">Figma Community</div> \n    <div class="list svelte-1yp41zp"><a href="https://www.figma.com/community/plugin/1032111792919656443">Markers - <span class="sub-text svelte-1yp41zp">Figma Plugin</span></a> \n      <span class="date svelte-1yp41zp">11.2021</span></div> \n    <div class="list svelte-1yp41zp"><a href="https://www.figma.com/community/file/1081845377665077907">SCIFI KIT - <span class="sub-text svelte-1yp41zp">Figma UI kit</span></a> \n      <span class="date svelte-1yp41zp">03.2022</span></div> \n    <div class="list svelte-1yp41zp"><a href="https://www.figma.com/community/file/1085496823591867207">Elden Ring Themed Retro. <br/> \n        <span class="sub-text svelte-1yp41zp">Bring the game to your team.</span></a> \n      <span class="date svelte-1yp41zp">04.2022</span></div></div> \n  <div class="col svelte-1yp41zp"><div class="sub-header  svelte-1yp41zp">Talks</div> \n\n    <div class="list svelte-1yp41zp"><a href="https://youtu.be/rmX55ODcYeI">Dating Tips 101 - <span class="sub-text svelte-1yp41zp">A talk on CX</span></a> \n      <span class="date svelte-1yp41zp">12.2019</span></div> \n\n    <div class="list svelte-1yp41zp"><a href="https://youtu.be/ui2zG7kZxj4">The future of UX - <span class="sub-text svelte-1yp41zp">Why you should start a religion</span></a> \n      <span class="date svelte-1yp41zp">01.2021</span></div> \n    <br/> \n    <div class="sub-header  svelte-1yp41zp">Resources</div> \n    <div class="list svelte-1yp41zp"><a href="https://glossy-ink-3c8.notion.site/UX-Resource-e6b1726d50d944db8156e756c2731094">UX Resources</a></div></div>',
                L(s, "class", "horizontal grid-container svelte-1yp41zp")
            },
            m(e, t) {
                p(e, s, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && z(s)
            }
        }
    }
    class Dt extends le {
        constructor(e) {
            super(),
            de(this, e, null, Ft, i, {})
        }
    }
    function It(t) {
        let s, r, o, a, i, n, l, C, h, k, c, u, f, m, g, _, y, O, N, M, b, H, x, $, j, V;
        return c = new Ve({}),
        f = new Je({}),
        g = new lt({}),
        y = new Zt({}),
        N = new pt({}),
        b = new Yt({}),
        x = new nt({}),
        j = new Dt({}),
        {
            c() {
                s = v("link"),
                r = E(),
                o = v("script"),
                i = E(),
                n = v("link"),
                l = E(),
                C = v("link"),
                h = E(),
                k = v("main"),
                oe(c.$$.fragment),
                u = E(),
                oe(f.$$.fragment),
                m = E(),
                oe(g.$$.fragment),
                _ = E(),
                oe(y.$$.fragment),
                O = E(),
                oe(N.$$.fragment),
                M = E(),
                oe(b.$$.fragment),
                H = E(),
                oe(x.$$.fragment),
                $ = E(),
                oe(j.$$.fragment),
                L(s, "rel", "preconnect"),
                L(s, "href", "https://fonts.googleapis.com"),
                d(o.src, a = "https://code.jquery.com/pep/0.4.3/pep.js") || L(o, "src", "https://code.jquery.com/pep/0.4.3/pep.js"),
                L(n, "rel", "preconnect"),
                L(n, "href", "https://fonts.gstatic.com"),
                L(n, "crossorigin", ""),
                L(C, "href", "https://fonts.googleapis.com/css2?family=Barlow:wght@100;500;600;900&display=swap"),
                L(C, "rel", "stylesheet")
            },
            m(e, t) {
                p(e, s, t),
                p(e, r, t),
                w(document.head, o),
                p(e, i, t),
                p(e, n, t),
                p(e, l, t),
                p(e, C, t),
                p(e, h, t),
                p(e, k, t),
                ae(c, k, null),
                w(k, u),
                ae(f, k, null),
                w(k, m),
                ae(g, k, null),
                w(k, _),
                ae(y, k, null),
                w(k, O),
                ae(N, k, null),
                w(k, M),
                ae(b, k, null),
                w(k, H),
                ae(x, k, null),
                w(k, $),
                ae(j, k, null),
                V = !0
            },
            p: e,
            i(e) {
                V || (ee(c.$$.fragment, e),
                ee(f.$$.fragment, e),
                ee(g.$$.fragment, e),
                ee(y.$$.fragment, e),
                ee(N.$$.fragment, e),
                ee(b.$$.fragment, e),
                ee(x.$$.fragment, e),
                ee(j.$$.fragment, e),
                V = !0)
            },
            o(e) {
                te(c.$$.fragment, e),
                te(f.$$.fragment, e),
                te(g.$$.fragment, e),
                te(y.$$.fragment, e),
                te(N.$$.fragment, e),
                te(b.$$.fragment, e),
                te(x.$$.fragment, e),
                te(j.$$.fragment, e),
                V = !1
            },
            d(e) {
                e && z(s),
                e && z(r),
                z(o),
                e && z(i),
                e && z(n),
                e && z(l),
                e && z(C),
                e && z(h),
                e && z(k),
                ie(c),
                ie(f),
                ie(g),
                ie(y),
                ie(N),
                ie(b),
                ie(x),
                ie(j)
            }
        }
    }
    return new class extends le {
        constructor(e) {
            super(),
            de(this, e, null, It, i, {})
        }
    }
    ({
        target: document.body,
        props: {
            name: "world"
        }
    })
}();
//# sourceMappingURL=bundle.js.map
