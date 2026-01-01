"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2641],
  {
    10275: (e, t, l) => {
      l.d(t, { News: () => h });
      var n = l(48983),
        s = l(46631),
        i = l(82540),
        r = l(29599),
        a = l(99741),
        o = l(59505),
        c = l(64995);
      let u = (0, r.forwardRef)((e, t) => {
        var l;
        let { href: s, title: i, date: r, image: a, ...u } = e;
        return (0, n.jsxs)(c.A, {
          href: s,
          className: "newsItem",
          ref: t,
          ...u,
          children: [
            (0, n.jsx)("div", {
              className: "newsItem-image",
              children:
                (null == a || null == (l = a.asset) ? void 0 : l._ref) &&
                (0, n.jsx)(o.s, {
                  className: "absolute inset-0 w-full h-full object-cover",
                  width: 400,
                  id: a.asset._ref,
                  alt: "News Item",
                }),
            }),
            (0, n.jsx)("p", {
              className: "copy3 blue | dissapear",
              children: r,
            }),
            (0, n.jsx)("h6", { className: "h6 | dissapear", children: i }),
          ],
        });
      });
      function d(e, t) {
        i.Ay.killTweensOf([t.outEle, t.inEle, t.firstEle, t.secondEle], {
          x: !0,
        }),
          e.to(t.outEle, { z: "-50px", duration: 0.8, ease: "power2.out" }, 0),
          e.to(
            t.outEle,
            {
              borderRadius: "100px",
              opacity: 0,
              duration: 0.4,
              ease: "power4.out",
            },
            0
          ),
          e.to(
            t.outEle,
            { duration: 0.1, ease: "power4.out", opacity: 0 },
            0.2
          ),
          e.to(
            t.outEle.querySelectorAll(".dissapear"),
            { opacity: 0, duration: 0.4, ease: "power2.out" },
            0
          ),
          e.to(
            t.firstEle,
            { x: t.firstX, duration: 0.4, ease: "back.out(0.75)" },
            0
          ),
          e.to(
            t.secondEle,
            { x: t.secondX, duration: 0.4, ease: "back.out(0.75)" },
            0.05
          ),
          e.set(t.nearInEle, { zIndex: t.zIndex }, 0),
          e.set(t.inEle, { zIndex: t.zIndex - 1 }, 0),
          e.fromTo(
            t.inEle,
            { x: t.inX, opacity: 1 },
            { x: t.inX, opacity: 1, duration: 0.6, ease: "bouncy" },
            0.1
          ),
          e.fromTo(
            t.inEle,
            { borderRadius: "100px", opacity: 0 },
            {
              borderRadius: "16px",
              duration: 0.8,
              opacity: 1,
              ease: "power4.out",
            },
            0.1
          ),
          e.fromTo(
            t.inEle.querySelectorAll(".dissapear"),
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power3.out" },
            0.25
          );
      }
      function h(e) {
        let { items: t } = e,
          [l, o] = (0, r.useState)(0),
          c = (0, r.useRef)([]),
          h =
            t.length < 3
              ? t.slice().concat(t.slice()).concat(t.slice())
              : t.slice(),
          C = h.concat(h.slice()),
          f = (0, r.useRef)(0);
        function p() {
          let e = c.current,
            t = (l + e.length - 1) % e.length,
            n = l % e.length,
            s = (l + 1) % e.length,
            r = (l + 2) % e.length,
            a = (l + 3) % e.length,
            u = e[t],
            h = e[n],
            C = e[s],
            p = e[r],
            w = e[a];
          if (null == u || null == h || null == C || null == p || null == w)
            return;
          let x = i.Ay.timeline(),
            g = h.offsetWidth + 24;
          d(x, {
            outEle: p,
            firstEle: C,
            firstX: g * (2 - s),
            secondEle: h,
            secondX: g * (1 - n),
            zIndex: f.current,
            inEle: u,
            nearInEle: h,
            inX: -(g * t),
          }),
            o((t) => (f.current++, (t + e.length - 1) % e.length));
        }
        function w() {
          let e = c.current;
          e.length;
          let t = (l + 1) % e.length,
            n = (l + 2) % e.length,
            s = (l + 3) % e.length;
          e[(l + e.length - 1) % e.length];
          let r = e[l % e.length],
            a = e[(l + 1) % e.length],
            u = e[(l + 2) % e.length],
            h = e[(l + 3) % e.length];
          if (null == r || null == a || null == u || null == h) return;
          let C = i.Ay.timeline(),
            p = (h.offsetWidth + 24) * (3 - s),
            w = -(h.offsetWidth + 24) + p;
          d(C, {
            outEle: r,
            firstEle: a,
            firstX: -((a.offsetWidth + 24) * t),
            secondEle: u,
            secondX: (u.offsetWidth + 24) * (1 - n),
            zIndex: f.current,
            inEle: h,
            inX: w,
            nearInEle: u,
          }),
            o((e) => (f.current++, e + 1));
        }
        let x = (0, a.uh)({
          onSwipedRight: (e) => p(),
          onSwipedLeft: () => w(),
          preventScrollOnSwipe: !0,
        });
        return (0, n.jsxs)("div", {
          className: "",
          children: [
          ],
        });
      }
      u.displayName = "NewsItem";
    },
    46631: (e, t, l) => {
      l.d(t, { Ay: () => u });
      var n = l(48983),
        s = l(29599),
        i = l(67066),
        r = l(82540),
        a = l(32979),
        o = l.n(a),
        c = l(64995);
      let u = (e) => {
        let {
            isLoading: t = !1,
            children: l,
            size: a,
            color: u = "white",
            className: d,
            disabled: h,
            padding: C = !0,
            ...f
          } = e,
          p = (0, s.useRef)(null);
        function w(e) {
          r.Ay.killTweensOf(e, "--scale");
          let t = r.Ay.timeline();
          t.to(e, { "--scale": 0.98, duration: 0.2, ease: "ease.out" }),
            t.to(e, { "--scale": 1.01, duration: 0.2, ease: "ease.out" }),
            t.to(e, { "--scale": 1, duration: 0.5, ease: "power2.out" });
        }
        let x = {
            onMouseDown: function () {
              if (null == p.current || h) return;
              let e = p.current,
                t = r.Ay.timeline();
              t.to(e, { "--scale": 0.95, duration: 0.1, ease: "ease.out" }),
                t.to(e, { "--scale": 1.05, duration: 0.1, ease: "ease.out" }),
                t.to(e, { "--scale": 0.975, duration: 0.1, ease: "ease.out" }),
                t.to(e, { "--scale": 1, duration: 0.1, ease: "ease.out" });
            },
            onMouseEnter: function () {
              if (null == p.current || h) return;
              let e = p.current;
              w(e),
                r.Ay.killTweensOf(e, "--follow"),
                r.Ay.to(e, { "--follow": 1, duration: 0.3, ease: "bouncy" });
            },
            onMouseLeave: function () {
              if (null == p.current || h) return;
              let e = p.current;
              w(e),
                r.Ay.killTweensOf(e, "--follow"),
                r.Ay.to(e, { "--follow": 0, duration: 0.3, ease: "bouncy" });
            },
            onMouseMove: function (e) {
              if (null == p.current || h) return;
              let t = p.current.getBoundingClientRect(),
                l = (e.clientX - t.x) / t.width,
                n = (e.clientY - t.y) / t.height;
              (l = r.Ay.utils.clamp(0, 1, l)),
                (n = r.Ay.utils.clamp(0, 1, n)),
                (l -= 0.5),
                (n -= 0.5),
                (l *= 1.5),
                (n *= 1.5),
                e.currentTarget.style.setProperty("--x", l + ""),
                e.currentTarget.style.setProperty("--y", n + "");
            },
          },
          g = (0, i.A)(d, o().toon, o().button, {
            [o().button]: C,
            [o().chunky]: "chunky" == a,
            [o().thin]: "thin" == a,
            [o().blue]: "blue" == u,
            [o().disabled]: h,
            [o().loading]: t,
          });
        return "href" in f
          ? (0, n.jsx)(c.A, { ...f, ...x, ref: p, className: g, children: l })
          : "fake" in f
          ? (0, n.jsx)("div", { ...f, ...x, ref: p, className: g, children: l })
          : (0, n.jsxs)("button", {
              ...x,
              ...f,
              disabled: h,
              ref: p,
              className: g,
              children: [
                t
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("svg", {
                          className: o().loadingSvg,
                          width: "28",
                          height: "27",
                          viewBox: "0 0 28 27",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, n.jsx)("path", {
                              d: "M15.5039 1.5V5.5C15.5039 5.89782 15.3459 6.27936 15.0646 6.56066C14.7833 6.84196 14.4017 7 14.0039 7C13.6061 7 13.2246 6.84196 12.9432 6.56066C12.6619 6.27936 12.5039 5.89782 12.5039 5.5V1.5C12.5039 1.10218 12.6619 0.720644 12.9432 0.43934C13.2246 0.158035 13.6061 0 14.0039 0C14.4017 0 14.7833 0.158035 15.0646 0.43934C15.3459 0.720644 15.5039 1.10218 15.5039 1.5Z",
                              fill: "#00142D",
                            }),
                            (0, n.jsx)("path", {
                              d: "M6.57877 3.95377C6.29698 3.67198 5.91479 3.51367 5.51627 3.51367C5.11776 3.51367 4.73557 3.67198 4.45377 3.95377C4.17198 4.23557 4.01367 4.61776 4.01367 5.01627C4.01367 5.41479 4.17198 5.79698 4.45377 6.07877L7.28627 8.90377C7.56807 9.18557 7.95026 9.34388 8.34877 9.34388C8.74729 9.34388 9.12948 9.18557 9.41127 8.90377C9.69307 8.62198 9.85138 8.23979 9.85138 7.84127C9.85138 7.44276 9.69307 7.06057 9.41127 6.77877L6.57877 3.95377Z",
                              fill: "#00142D",
                            }),
                            (0, n.jsx)("path", {
                              d: "M7.50391 13.5C7.50391 13.1022 7.34587 12.7206 7.06457 12.4393C6.78326 12.158 6.40173 12 6.00391 12H2.00391C1.60608 12 1.22455 12.158 0.943246 12.4393C0.661942 12.7206 0.503906 13.1022 0.503906 13.5C0.503906 13.8978 0.661942 14.2794 0.943246 14.5607C1.22455 14.842 1.60608 15 2.00391 15H6.00391C6.40173 15 6.78326 14.842 7.06457 14.5607C7.34587 14.2794 7.50391 13.8978 7.50391 13.5Z",
                              fill: "#00142D",
                            }),
                            (0, n.jsx)("path", {
                              d: "M7.28643 18.0964L4.45768 20.9251C4.17589 21.2069 4.01758 21.5891 4.01758 21.9876C4.01758 22.3861 4.17589 22.7683 4.45768 23.0501C4.73947 23.3319 5.12167 23.4902 5.52018 23.4902C5.9187 23.4902 6.30089 23.3319 6.58268 23.0501L9.41143 20.2214C9.69322 19.9396 9.85153 19.5574 9.85153 19.1589C9.85153 18.7603 9.69322 18.3781 9.41143 18.0964C9.12964 17.8146 8.74745 17.6562 8.34893 17.6562C7.95042 17.6562 7.56822 17.8146 7.28643 18.0964Z",
                              fill: "#00142D",
                            }),
                            (0, n.jsx)("path", {
                              d: "M14.0039 20C13.6061 20 13.2246 20.158 12.9432 20.4393C12.6619 20.7206 12.5039 21.1022 12.5039 21.5V25.5C12.5039 25.8978 12.6619 26.2794 12.9432 26.5607C13.2246 26.842 13.6061 27 14.0039 27C14.4017 27 14.7833 26.842 15.0646 26.5607C15.3459 26.2794 15.5039 25.8978 15.5039 25.5V21.5C15.5039 21.1022 15.3459 20.7206 15.0646 20.4393C14.7833 20.158 14.4017 20 14.0039 20Z",
                              fill: "#00142D",
                            }),
                            (0, n.jsx)("path", {
                              d: "M20.7214 18.0964C20.5818 17.9568 20.4162 17.8461 20.2339 17.7706C20.0516 17.6951 19.8562 17.6563 19.6589 17.6562C19.4615 17.6562 19.2661 17.6951 19.0838 17.7706C18.9015 17.8461 18.7359 17.9568 18.5964 18.0964C18.4568 18.2359 18.3461 18.4015 18.2706 18.5838C18.1951 18.7661 18.1562 18.9615 18.1562 19.1589C18.1563 19.3562 18.1951 19.5516 18.2706 19.7339C18.3461 19.9162 18.4568 20.0818 18.5964 20.2214L21.4251 23.0501C21.7069 23.3319 22.0891 23.4902 22.4876 23.4902C22.8861 23.4902 23.2683 23.3319 23.5501 23.0501C23.8319 22.7683 23.9902 22.3861 23.9902 21.9876C23.9902 21.5891 23.8319 21.2069 23.5501 20.9251L20.7214 18.0964Z",
                              fill: "#00142D",
                            }),
                            (0, n.jsx)("path", {
                              d: "M26.0039 12H22.0039C21.6061 12 21.2246 12.158 20.9432 12.4393C20.6619 12.7206 20.5039 13.1022 20.5039 13.5C20.5039 13.8978 20.6619 14.2794 20.9432 14.5607C21.2246 14.842 21.6061 15 22.0039 15H26.0039C26.4017 15 26.7833 14.842 27.0646 14.5607C27.3459 14.2794 27.5039 13.8978 27.5039 13.5C27.5039 13.1022 27.3459 12.7206 27.0646 12.4393C26.7833 12.158 26.4017 12 26.0039 12Z",
                              fill: "#00142D",
                            }),
                            (0, n.jsx)("path", {
                              d: "M21.4281 3.95417L18.5997 6.7826C18.3184 7.06391 18.1604 7.44543 18.1604 7.84326C18.1604 8.24108 18.3184 8.62262 18.5997 8.90392C18.881 9.18523 19.2626 9.34326 19.6604 9.34326C20.0582 9.34326 20.4397 9.18523 20.721 8.90392L23.5495 6.07549C23.8308 5.79419 23.9888 5.41266 23.9888 5.01483C23.9888 4.61701 23.8308 4.23548 23.5495 3.95417C23.2682 3.67287 22.8866 3.51483 22.4888 3.51483C22.091 3.51483 21.7095 3.67287 21.4281 3.95417Z",
                              fill: "#00142D",
                            }),
                          ],
                        }),
                        (0, n.jsx)("span", {
                          children: "processing please wait",
                        }),
                      ],
                    })
                  : l,
                " ",
              ],
            });
      };
    },
    46667: (e, t, l) => {
      l.d(t, { Lg: () => i, RT: () => s, XV: () => n });
      let n = l(55036).env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-05-03",
        s = r(
          "development",
          "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
        ),
        i = r(
          "ubc33cjp",
          "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
        );
      function r(e, t) {
        if (void 0 === e) throw Error(t);
        return e;
      }
    },
    59505: (e, t, l) => {
      l.d(t, { s: () => r });
      var n = l(48983),
        s = l(93087),
        i = l(46667);
      function r(e) {
        return (0, n.jsx)(s.sn, {
          baseUrl: "https://cdn.sanity.io/images/"
            .concat(i.Lg, "/")
            .concat(i.RT, "/"),
          ...e,
        });
      }
    },
    94763: (e, t, l) => {
      l.d(t, { Q: () => s });
      var n = l(8717);
      let s = (0, n.createServerReference)(
        "7f9e578d743e94cc6d721652ad72fad488f5b32bfe",
        n.callServer,
        void 0,
        n.findSourceMapURL,
        "revalidateSyncTags"
      );
    },
  },
]);
