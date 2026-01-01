"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3470],
  {
    8717: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          callServer: function () {
            return n.callServer;
          },
          createServerReference: function () {
            return i;
          },
          findSourceMapURL: function () {
            return r.findSourceMapURL;
          },
        });
      let n = s(82606),
        r = s(12586),
        i = s(17263).createServerReference;
    },
    10892: (e, t, s) => {
      s.d(t, { a: () => i });
      var n = s(29448);
      function r(e, t, s, r, { assignment: i }) {
        if (!t.context)
          throw Error(
            "Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config."
          );
        let o = {},
          a = {
            context: t.context,
            event: s.event,
            spawn: (function (e, { machine: t, context: s }, r, i) {
              let o = (o, a) => {
                if ("string" != typeof o)
                  return (0, n.c)(o, {
                    id: a?.id,
                    parent: e.self,
                    syncSnapshot: a?.syncSnapshot,
                    input: a?.input,
                    src: o,
                    systemId: a?.systemId,
                  });
                {
                  let u = (0, n.R)(t, o);
                  if (!u)
                    throw Error(
                      `Actor logic '${o}' not implemented in machine '${t.id}'`
                    );
                  let c = (0, n.c)(u, {
                    id: a?.id,
                    parent: e.self,
                    syncSnapshot: a?.syncSnapshot,
                    input:
                      "function" == typeof a?.input
                        ? a.input({ context: s, event: r, self: e.self })
                        : a?.input,
                    src: o,
                    systemId: a?.systemId,
                  });
                  return (i[c.id] = c), c;
                }
              };
              return (t, s) => {
                let r = o(t, s);
                return (
                  (i[r.id] = r),
                  e.defer(() => {
                    r._processingStatus !== n.V.Stopped && r.start();
                  }),
                  r
                );
              };
            })(e, t, s.event, o),
            self: e.self,
            system: e.system,
          },
          u = {};
        if ("function" == typeof i) u = i(a, r);
        else
          for (let e of Object.keys(i)) {
            let t = i[e];
            u[e] = "function" == typeof t ? t(a, r) : t;
          }
        let c = Object.assign({}, t.context, u);
        return [
          (0, n.W)(t, {
            context: c,
            children: Object.keys(o).length
              ? { ...t.children, ...o }
              : t.children,
          }),
          void 0,
          void 0,
        ];
      }
      function i(e) {
        function t(e, t) {}
        return (
          (t.type = "xstate.assign"), (t.assignment = e), (t.resolve = r), t
        );
      }
    },
    13436: (e, t, s) => {
      s.d(t, { default: () => i });
      var n = s(48983);
      let r = (0, s(24020).default)(() => s.e(5091).then(s.bind(s, 85091)), {
        loadableGenerated: {
          webpack: () => [
            require.resolveWeak("../_chunks-es/SanityLiveStream.js"),
          ],
        },
        ssr: !1,
      });
      function i(e) {
        return (0, n.jsx)(r, { ...e });
      }
    },
    18753: (e, t, s) => {
      s.d(t, { DT: () => d, mj: () => h }), s(50647);
      var n = s(29448),
        r = s(10892);
      let i = new WeakMap();
      function o(e, t, s) {
        let n = i.get(e);
        return (
          n ? t in n || (n[t] = s()) : ((n = { [t]: s() }), i.set(e, n)), n[t]
        );
      }
      let a = {},
        u = (e) =>
          "string" == typeof e
            ? { type: e }
            : "function" == typeof e
            ? "resolve" in e
              ? { type: e.type }
              : { type: e.name }
            : e;
      class c {
        constructor(e, t) {
          if (
            ((this.config = e),
            (this.key = void 0),
            (this.id = void 0),
            (this.type = void 0),
            (this.path = void 0),
            (this.states = void 0),
            (this.history = void 0),
            (this.entry = void 0),
            (this.exit = void 0),
            (this.parent = void 0),
            (this.machine = void 0),
            (this.meta = void 0),
            (this.output = void 0),
            (this.order = -1),
            (this.description = void 0),
            (this.tags = []),
            (this.transitions = void 0),
            (this.always = void 0),
            (this.parent = t._parent),
            (this.key = t._key),
            (this.machine = t._machine),
            (this.path = this.parent ? this.parent.path.concat(this.key) : []),
            (this.id =
              this.config.id || [this.machine.id, ...this.path].join(n.S)),
            (this.type =
              this.config.type ||
              (this.config.states && Object.keys(this.config.states).length
                ? "compound"
                : this.config.history
                ? "history"
                : "atomic")),
            (this.description = this.config.description),
            (this.order = this.machine.idMap.size),
            this.machine.idMap.set(this.id, this),
            (this.states = this.config.states
              ? (0, n.l)(
                  this.config.states,
                  (e, t) =>
                    new c(e, { _parent: this, _key: t, _machine: this.machine })
                )
              : a),
            "compound" === this.type && !this.config.initial)
          )
            throw Error(
              `No initial state specified for compound state node "#${
                this.id
              }". Try adding { initial: "${
                Object.keys(this.states)[0]
              }" } to the state config.`
            );
          (this.history =
            !0 === this.config.history ? "shallow" : this.config.history || !1),
            (this.entry = (0, n.t)(this.config.entry).slice()),
            (this.exit = (0, n.t)(this.config.exit).slice()),
            (this.meta = this.config.meta),
            (this.output =
              "final" !== this.type && this.parent
                ? void 0
                : this.config.output),
            (this.tags = (0, n.t)(e.tags).slice());
        }
        _initialize() {
          (this.transitions = (0, n.q)(this)),
            this.config.always &&
              (this.always = (0, n.u)(this.config.always).map((e) =>
                (0, n.v)(this, n.N, e)
              )),
            Object.keys(this.states).forEach((e) => {
              this.states[e]._initialize();
            });
        }
        get definition() {
          return {
            id: this.id,
            key: this.key,
            version: this.machine.version,
            type: this.type,
            initial: this.initial
              ? {
                  target: this.initial.target,
                  source: this,
                  actions: this.initial.actions.map(u),
                  eventType: null,
                  reenter: !1,
                  toJSON: () => ({
                    target: this.initial.target.map((e) => `#${e.id}`),
                    source: `#${this.id}`,
                    actions: this.initial.actions.map(u),
                    eventType: null,
                  }),
                }
              : void 0,
            history: this.history,
            states: (0, n.l)(this.states, (e) => e.definition),
            on: this.on,
            transitions: [...this.transitions.values()]
              .flat()
              .map((e) => ({ ...e, actions: e.actions.map(u) })),
            entry: this.entry.map(u),
            exit: this.exit.map(u),
            meta: this.meta,
            order: this.order || -1,
            output: this.output,
            invoke: this.invoke,
            description: this.description,
            tags: this.tags,
          };
        }
        toJSON() {
          return this.definition;
        }
        get invoke() {
          return o(this, "invoke", () =>
            (0, n.t)(this.config.invoke).map((e, t) => {
              let { src: s, systemId: r } = e,
                i = e.id ?? (0, n.x)(this.id, t),
                o =
                  "string" == typeof s
                    ? s
                    : `xstate.invoke.${(0, n.x)(this.id, t)}`;
              return {
                ...e,
                src: o,
                id: i,
                systemId: r,
                toJSON() {
                  let { onDone: t, onError: s, ...n } = e;
                  return { ...n, type: "xstate.invoke", src: o, id: i };
                },
              };
            })
          );
        }
        get on() {
          return o(this, "on", () =>
            [...this.transitions]
              .flatMap(([e, t]) => t.map((t) => [e, t]))
              .reduce((e, [t, s]) => ((e[t] = e[t] || []), e[t].push(s), e), {})
          );
        }
        get after() {
          return o(this, "delayedTransitions", () => (0, n.y)(this));
        }
        get initial() {
          return o(this, "initial", () => (0, n.z)(this, this.config.initial));
        }
        next(e, t) {
          let s,
            r = t.type,
            i = [];
          for (let a of o(this, `candidates-${r}`, () => (0, n.B)(this, r))) {
            let { guard: o } = a,
              u = e.context,
              c = !1;
            try {
              c = !o || (0, n.w)(o, u, t, e);
            } catch (t) {
              let e =
                "string" == typeof o
                  ? o
                  : "object" == typeof o
                  ? o.type
                  : void 0;
              throw Error(`Unable to evaluate guard ${
                e ? `'${e}' ` : ""
              }in transition for event '${r}' in state node '${this.id}':
${t.message}`);
            }
            if (c) {
              i.push(...a.actions), (s = a);
              break;
            }
          }
          return s ? [s] : void 0;
        }
        get events() {
          return o(this, "events", () => {
            let { states: e } = this,
              t = new Set(this.ownEvents);
            if (e)
              for (let s of Object.keys(e)) {
                let n = e[s];
                if (n.states) for (let e of n.events) t.add(`${e}`);
              }
            return Array.from(t);
          });
        }
        get ownEvents() {
          return Array.from(
            new Set(
              [...this.transitions.keys()].filter((e) =>
                this.transitions
                  .get(e)
                  .some((e) => !(!e.target && !e.actions.length && !e.reenter))
              )
            )
          );
        }
      }
      class l {
        constructor(e, t) {
          (this.config = e),
            (this.version = void 0),
            (this.schemas = void 0),
            (this.implementations = void 0),
            (this.__xstatenode = !0),
            (this.idMap = new Map()),
            (this.root = void 0),
            (this.id = void 0),
            (this.states = void 0),
            (this.events = void 0),
            (this.id = e.id || "(machine)"),
            (this.implementations = {
              actors: t?.actors ?? {},
              actions: t?.actions ?? {},
              delays: t?.delays ?? {},
              guards: t?.guards ?? {},
            }),
            (this.version = this.config.version),
            (this.schemas = this.config.schemas),
            (this.transition = this.transition.bind(this)),
            (this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
            (this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
            (this.restoreSnapshot = this.restoreSnapshot.bind(this)),
            (this.start = this.start.bind(this)),
            (this.root = new c(e, { _key: this.id, _machine: this })),
            this.root._initialize(),
            (this.states = this.root.states),
            (this.events = this.root.events);
        }
        provide(e) {
          let {
            actions: t,
            guards: s,
            actors: n,
            delays: r,
          } = this.implementations;
          return new l(this.config, {
            actions: { ...t, ...e.actions },
            guards: { ...s, ...e.guards },
            actors: { ...n, ...e.actors },
            delays: { ...r, ...e.delays },
          });
        }
        resolveState(e) {
          let t = (0, n.C)(this.root, e.value),
            s = (0, n.D)((0, n.g)(this.root, t));
          return (0, n.E)(
            {
              _nodes: [...s],
              context: e.context || {},
              children: {},
              status: (0, n.F)(s, this.root) ? "done" : e.status || "active",
              output: e.output,
              error: e.error,
              historyValue: e.historyValue,
            },
            this
          );
        }
        transition(e, t, s) {
          return (0, n.G)(e, t, s, []).snapshot;
        }
        microstep(e, t, s) {
          return (0, n.G)(e, t, s, []).microstates;
        }
        getTransitionData(e, t) {
          return (0, n.H)(this.root, e.value, e, t) || [];
        }
        getPreInitialState(e, t, s) {
          let { context: i } = this.config,
            o = (0, n.E)(
              {
                context: "function" != typeof i && i ? i : {},
                _nodes: [this.root],
                children: {},
                status: "active",
              },
              this
            );
          return "function" == typeof i
            ? (0, n.I)(
                o,
                t,
                e,
                [
                  (0, r.a)(({ spawn: e, event: t, self: s }) =>
                    i({ spawn: e, input: t.input, self: s })
                  ),
                ],
                s,
                void 0
              )
            : o;
        }
        getInitialSnapshot(e, t) {
          let s = (0, n.J)(t),
            r = [],
            i = this.getPreInitialState(e, s, r),
            o = (0, n.K)(
              [
                {
                  target: [...(0, n.L)(this.root)],
                  source: this.root,
                  reenter: !0,
                  actions: [],
                  eventType: null,
                  toJSON: null,
                },
              ],
              i,
              e,
              s,
              !0,
              r
            ),
            { snapshot: a } = (0, n.G)(o, s, e, r);
          return a;
        }
        start(e) {
          Object.values(e.children).forEach((e) => {
            "active" === e.getSnapshot().status && e.start();
          });
        }
        getStateNodeById(e) {
          let t = (0, n.M)(e),
            s = t.slice(1),
            r = (0, n.O)(t[0]) ? t[0].slice(1) : t[0],
            i = this.idMap.get(r);
          if (!i)
            throw Error(
              `Child state node '#${r}' does not exist on machine '${this.id}'`
            );
          return (0, n.P)(i, s);
        }
        get definition() {
          return this.root.definition;
        }
        toJSON() {
          return this.definition;
        }
        getPersistedSnapshot(e, t) {
          return (0, n.Q)(e, t);
        }
        restoreSnapshot(e, t) {
          let s = {},
            r = e.children;
          Object.keys(r).forEach((e) => {
            let i = r[e],
              o = i.snapshot,
              a = i.src,
              u = "string" == typeof a ? (0, n.R)(this, a) : a;
            if (!u) return;
            let c = (0, n.c)(u, {
              id: e,
              parent: t.self,
              syncSnapshot: i.syncSnapshot,
              snapshot: o,
              src: a,
              systemId: i.systemId,
            });
            s[e] = c;
          });
          let i = (function (e, t) {
              if (!t || "object" != typeof t) return {};
              let s = {};
              for (let n in t)
                for (let r of t[n]) {
                  let t = (function (e, t) {
                    if (t instanceof c) return t;
                    try {
                      return e.machine.getStateNodeById(t.id);
                    } catch {}
                  })(e, r);
                  t && ((s[n] ??= []), s[n].push(t));
                }
              return s;
            })(this.root, e.historyValue),
            o = (0, n.E)(
              {
                ...e,
                children: s,
                _nodes: Array.from((0, n.D)((0, n.g)(this.root, e.value))),
                historyValue: i,
              },
              this
            ),
            a = new Set();
          return (
            !(function e(t, s) {
              if (!a.has(t))
                for (let r in (a.add(t), t)) {
                  let i = t[r];
                  if (i && "object" == typeof i) {
                    if ("xstate$$type" in i && i.xstate$$type === n.$) {
                      t[r] = s[i.id];
                      continue;
                    }
                    e(i, s);
                  }
                }
            })(o.context, s),
            o
          );
        }
      }
      function d(e, t) {
        let s = (0, n.t)(t);
        if (!s.includes(e.type)) {
          let t =
            1 === s.length
              ? `type "${s[0]}"`
              : `one of types "${s.join('", "')}"`;
          throw Error(`Expected event ${JSON.stringify(e)} to have ${t}`);
        }
      }
      function h({ schemas: e, actors: t, actions: s, guards: n, delays: r }) {
        return {
          createStateConfig: (e) => e,
          createMachine: (i) =>
            new l(
              { ...i, schemas: e },
              { actors: t, actions: s, guards: n, delays: r }
            ),
        };
      }
    },
    19031: (e, t, s) => {
      s.d(t, { default: () => m });
      var n = s(48983),
        r = s(58807),
        i = s(94763),
        o = s(70484),
        a = s(24020),
        u = s(65679),
        c = s(29599),
        l = s(98767),
        d = s(71674);
      let h = (0, a.default)(() => s.e(6290).then(s.bind(s, 86290)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/PresentationComlink.js"),
            ],
          },
          ssr: !1,
        }),
        f = (0, a.default)(() => s.e(4940).then(s.bind(s, 34940)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnMount.js"),
            ],
          },
          ssr: !1,
        }),
        p = (0, a.default)(() => s.e(8841).then(s.bind(s, 8841)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnFocus.js"),
            ],
          },
          ssr: !1,
        }),
        y = (0, a.default)(() => s.e(6304).then(s.bind(s, 16304)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnReconnect.js"),
            ],
          },
          ssr: !1,
        });
      function g(e) {
        var t;
        e instanceof r.u_
          ? console.warn(
              "Sanity Live is unable to connect to the Sanity API as the current origin - ".concat(
                window.origin,
                " - is not in the list of allowed CORS origins for this Sanity Project."
              ),
              e.addOriginUrl && "Add it here:",
              null == (t = e.addOriginUrl) ? void 0 : t.toString()
            )
          : console.error(e);
      }
      function v(e, t) {
        t
          ? console.warn(
              "Sanity Live connection closed, switching to long polling set to a interval of",
              t / 1e3,
              "seconds and the server gave this reason:",
              e.reason
            )
          : console.error(
              "Sanity Live connection closed, automatic revalidation is disabled, the server gave this reason:",
              e.reason
            );
      }
      function m(e) {
        let {
            projectId: t,
            dataset: s,
            apiHost: a,
            apiVersion: m,
            useProjectHostname: _,
            token: b,
            requestTagPrefix: S,
            draftModeEnabled: x,
            draftModePerspective: k,
            refreshOnMount: w = !1,
            refreshOnFocus: I = !x &&
              (typeof window > "u" || window.self === window.top),
            refreshOnReconnect: T = !0,
            intervalOnGoAway: E = 3e4,
            requestTag: j = "next-loader.live",
            onError: $ = g,
            onGoAway: O = v,
            revalidateSyncTags: R = i.Q,
          } = e,
          P = (0, c.useMemo)(
            () =>
              (0, r.UU)({
                projectId: t,
                dataset: s,
                apiHost: a,
                apiVersion: m,
                useProjectHostname: _,
                ignoreBrowserTokenWarning: !0,
                token: b,
                useCdn: !1,
                requestTagPrefix: S,
              }),
            [a, m, s, t, S, b, _]
          ),
          [q, M] = (0, c.useState)(!1),
          A = (0, u.useRouter)(),
          N = (0, l.J)((e) => {
            "message" === e.type
              ? R(e.tags)
              : "restart" === e.type || "reconnect" === e.type
              ? A.refresh()
              : "goaway" === e.type && (O(e, E), M(E));
          });
        (0, c.useEffect)(() => {
          let e = P.live.events({ includeDrafts: !!b, tag: j }).subscribe({
            next: N,
            error: (e) => {
              $(e);
            },
          });
          return () => e.unsubscribe();
        }, [P.live, $, j, b]),
          (0, c.useEffect)(() => {
            x && k ? (0, d.NL)(k) : (0, d.NL)("unknown");
          }, [x, k]);
        let [D, C] = (0, c.useState)(!1);
        (0, c.useEffect)(() => {
          if (!(0, o.vY)()) {
            if (x && b) return void (0, d.kN)("live");
            if (x) return void (0, d.kN)("static");
            (0, d.kN)("unknown");
          }
        }, [x, b]),
          (0, c.useEffect)(() => {
            if (!(0, o.vY)()) return;
            let e = new AbortController(),
              t = setTimeout(() => (0, d.kN)("live"), 3e3);
            return (
              window.addEventListener(
                "message",
                (s) => {
                  let { data: n } = s;
                  n &&
                    "object" == typeof n &&
                    "domain" in n &&
                    "sanity/channels" === n.domain &&
                    "from" in n &&
                    "presentation" === n.from &&
                    (clearTimeout(t),
                    (0, d.kN)(
                      (0, o.v$)()
                        ? "presentation-window"
                        : "presentation-iframe"
                    ),
                    C(!0),
                    e.abort());
                },
                { signal: e.signal }
              ),
              () => {
                clearTimeout(t), e.abort();
              }
            );
          }, []);
        let L = (0, c.useRef)(void 0);
        return (
          (0, c.useEffect)(() => {
            if (x)
              return (
                clearTimeout(L.current),
                () => {
                  L.current = setTimeout(() => {
                    console.warn(
                      "Sanity Live: Draft mode was enabled, but is now being disabled"
                    );
                  });
                }
              );
          }, [x]),
          (0, c.useEffect)(() => {
            if (!q) return;
            let e = setInterval(() => A.refresh(), q);
            return () => clearInterval(e);
          }, [q, A]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              x &&
                D &&
                (0, n.jsx)(h, {
                  projectId: t,
                  dataset: s,
                  draftModeEnabled: x,
                  draftModePerspective: k,
                }),
              !x && w && (0, n.jsx)(f, {}),
              !x && I && (0, n.jsx)(p, {}),
              !x && T && (0, n.jsx)(y, {}),
            ],
          })
        );
      }
      m.displayName = "SanityLive";
    },
    19842: (e, t, s) => {
      function n(e) {
        let { reason: t, children: s } = e;
        return s;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        s(74510);
    },
    24020: (e, t, s) => {
      s.d(t, { default: () => r.a });
      var n = s(34661),
        r = s.n(n);
    },
    26520: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, s(28858).createAsyncLocalStorage)();
    },
    28655: (e, t, s) => {
      function n(e) {
        let { moduleIds: t } = e;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        s(48983),
        s(77358),
        s(41232),
        s(73965);
    },
    28858: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          bindSnapshot: function () {
            return o;
          },
          createAsyncLocalStorage: function () {
            return i;
          },
          createSnapshot: function () {
            return a;
          },
        });
      let s = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class n {
        disable() {
          throw s;
        }
        getStore() {}
        run() {
          throw s;
        }
        exit() {
          throw s;
        }
        enterWith() {
          throw s;
        }
        static bind(e) {
          return e;
        }
      }
      let r = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function i() {
        return r ? new r() : new n();
      }
      function o(e) {
        return r ? r.bind(e) : n.bind(e);
      }
      function a() {
        return r
          ? r.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    29448: (e, t, s) => {
      s.d(t, {
        $: () => O,
        B: () => Z,
        C: () => ek,
        D: () => H,
        E: () => e$,
        F: () => Q,
        G: () => eb,
        H: () =>
          function e(t, s, n, r) {
            if ("string" == typeof s) {
              let e = eu(t, s).next(n, r);
              return e && e.length ? e : t.next(n, r);
            }
            if (1 === Object.keys(s).length) {
              let i = Object.keys(s),
                o = e(eu(t, i[0]), s[i[0]], n, r);
              return o && o.length ? o : t.next(n, r);
            }
            let i = [];
            for (let o of Object.keys(s)) {
              let a = s[o];
              if (!a) continue;
              let u = e(eu(t, o), a, n, r);
              u && i.push(...u);
            }
            return i.length ? i : t.next(n, r);
          },
        I: () => e_,
        J: () => h,
        K: () => eg,
        L: () => ea,
        M: () => y,
        N: () => o,
        O: () => Y,
        P: () => ec,
        Q: () => eR,
        R: () => T,
        S: () => i,
        T: () => u,
        U: () => d,
        V: () => R,
        W: () => eO,
        X: () => c,
        c: () => M,
        f: () => D,
        g: () => el,
        h: () => W,
        k: () => F,
        l: () => v,
        q: () => es,
        r: () => eM,
        t: () => _,
        u: () => x,
        v: () => et,
        w: () => J,
        x: () => I,
        y: () => ee,
        z: () => en,
      });
      let n = (e) => {
        if ("undefined" == typeof window) return;
        let t = (function () {
          let e =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : void 0 !== s.g
              ? s.g
              : void 0;
          if (e.__xstate__) return e.__xstate__;
        })();
        t && t.register(e);
      };
      class r {
        constructor(e) {
          (this._process = e),
            (this._active = !1),
            (this._current = null),
            (this._last = null);
        }
        start() {
          (this._active = !0), this.flush();
        }
        clear() {
          this._current &&
            ((this._current.next = null), (this._last = this._current));
        }
        enqueue(e) {
          let t = { value: e, next: null };
          if (this._current) {
            (this._last.next = t), (this._last = t);
            return;
          }
          (this._current = t), (this._last = t), this._active && this.flush();
        }
        flush() {
          for (; this._current; ) {
            let e = this._current;
            this._process(e.value), (this._current = e.next);
          }
          this._last = null;
        }
      }
      let i = ".",
        o = "",
        a = "xstate.init",
        u = "xstate.error",
        c = "xstate.stop";
      function l(e, t) {
        return { type: `xstate.done.state.${e}`, output: t };
      }
      function d(e, t) {
        return { type: `xstate.error.actor.${e}`, error: t, actorId: e };
      }
      function h(e) {
        return { type: a, input: e };
      }
      function f(e) {
        setTimeout(() => {
          throw e;
        });
      }
      let p =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function y(e) {
        if (S(e)) return e;
        let t = [],
          s = "";
        for (let n = 0; n < e.length; n++) {
          switch (e.charCodeAt(n)) {
            case 92:
              (s += e[n + 1]), n++;
              continue;
            case 46:
              t.push(s), (s = "");
              continue;
          }
          s += e[n];
        }
        return t.push(s), t;
      }
      function g(e) {
        var t;
        return (t = e) && "object" == typeof t && "machine" in t && "value" in t
          ? e.value
          : "string" != typeof e
          ? e
          : (function (e) {
              if (1 === e.length) return e[0];
              let t = {},
                s = t;
              for (let t = 0; t < e.length - 1; t++)
                if (t === e.length - 2) s[e[t]] = e[t + 1];
                else {
                  let n = s;
                  (s = {}), (n[e[t]] = s);
                }
              return t;
            })(y(e));
      }
      function v(e, t) {
        let s = {},
          n = Object.keys(e);
        for (let r = 0; r < n.length; r++) {
          let i = n[r];
          s[i] = t(e[i], i, e, r);
        }
        return s;
      }
      function m(e) {
        return S(e) ? e : [e];
      }
      function _(e) {
        var t;
        return void 0 === e ? [] : S((t = e)) ? t : [t];
      }
      function b(e, t, s, n) {
        return "function" == typeof e
          ? e({ context: t, event: s, self: n })
          : e;
      }
      function S(e) {
        return Array.isArray(e);
      }
      function x(e) {
        var t;
        return (S((t = e)) ? t : [t]).map((e) =>
          void 0 === e || "string" == typeof e ? { target: e } : e
        );
      }
      function k(e) {
        if (void 0 !== e && "" !== e) return _(e);
      }
      function w(e, t, s) {
        let n = "object" == typeof e,
          r = n ? e : void 0;
        return {
          next: (n ? e.next : e)?.bind(r),
          error: (n ? e.error : t)?.bind(r),
          complete: (n ? e.complete : s)?.bind(r),
        };
      }
      function I(e, t) {
        return `${t}.${e}`;
      }
      function T(e, t) {
        let s = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
        if (!s) return e.implementations.actors[t];
        let [, n, r] = s,
          i = e.getStateNodeById(r).config.invoke;
        return (Array.isArray(i) ? i[n] : i).src;
      }
      function E(e, t) {
        return `${e.sessionId}.${t}`;
      }
      let j = 0,
        $ = !1,
        O = 1,
        R = (function (e) {
          return (
            (e[(e.NotStarted = 0)] = "NotStarted"),
            (e[(e.Running = 1)] = "Running"),
            (e[(e.Stopped = 2)] = "Stopped"),
            e
          );
        })({}),
        P = {
          clock: {
            setTimeout: (e, t) => setTimeout(e, t),
            clearTimeout: (e) => clearTimeout(e),
          },
          logger: console.log.bind(console),
          devTools: !1,
        };
      class q {
        constructor(e, t) {
          (this.logic = e),
            (this._snapshot = void 0),
            (this.clock = void 0),
            (this.options = void 0),
            (this.id = void 0),
            (this.mailbox = new r(this._process.bind(this))),
            (this.observers = new Set()),
            (this.eventListeners = new Map()),
            (this.logger = void 0),
            (this._processingStatus = R.NotStarted),
            (this._parent = void 0),
            (this._syncSnapshot = void 0),
            (this.ref = void 0),
            (this._actorScope = void 0),
            (this._systemId = void 0),
            (this.sessionId = void 0),
            (this.system = void 0),
            (this._doneEvent = void 0),
            (this.src = void 0),
            (this._deferred = []);
          let s = { ...P, ...t },
            {
              clock: n,
              logger: i,
              parent: o,
              syncSnapshot: a,
              id: u,
              systemId: c,
              inspect: l,
            } = s;
          (this.system = o
            ? o.system
            : (function (e, t) {
                let s = new Map(),
                  n = new Map(),
                  r = new WeakMap(),
                  i = new Set(),
                  o = {},
                  { clock: a, logger: u } = t,
                  c = {
                    schedule: (
                      e,
                      t,
                      s,
                      n,
                      r = Math.random().toString(36).slice(2)
                    ) => {
                      let i = {
                          source: e,
                          target: t,
                          event: s,
                          delay: n,
                          id: r,
                          startedAt: Date.now(),
                        },
                        u = E(e, r);
                      l._snapshot._scheduledEvents[u] = i;
                      let c = a.setTimeout(() => {
                        delete o[u],
                          delete l._snapshot._scheduledEvents[u],
                          l._relay(e, t, s);
                      }, n);
                      o[u] = c;
                    },
                    cancel: (e, t) => {
                      let s = E(e, t),
                        n = o[s];
                      delete o[s],
                        delete l._snapshot._scheduledEvents[s],
                        void 0 !== n && a.clearTimeout(n);
                    },
                    cancelAll: (e) => {
                      for (let t in l._snapshot._scheduledEvents) {
                        let s = l._snapshot._scheduledEvents[t];
                        s.source === e && c.cancel(e, s.id);
                      }
                    },
                  },
                  l = {
                    _snapshot: {
                      _scheduledEvents:
                        (t?.snapshot && t.snapshot.scheduler) ?? {},
                    },
                    _bookId: () => `x:${j++}`,
                    _register: (e, t) => (s.set(e, t), e),
                    _unregister: (e) => {
                      s.delete(e.sessionId);
                      let t = r.get(e);
                      void 0 !== t && (n.delete(t), r.delete(e));
                    },
                    get: (e) => n.get(e),
                    _set: (e, t) => {
                      let s = n.get(e);
                      if (s && s !== t)
                        throw Error(
                          `Actor with system ID '${e}' already exists.`
                        );
                      n.set(e, t), r.set(t, e);
                    },
                    inspect: (e) => {
                      let t = w(e);
                      return (
                        i.add(t),
                        {
                          unsubscribe() {
                            i.delete(t);
                          },
                        }
                      );
                    },
                    _sendInspectionEvent: (t) => {
                      if (!i.size) return;
                      let s = { ...t, rootId: e.sessionId };
                      i.forEach((e) => e.next?.(s));
                    },
                    _relay: (e, t, s) => {
                      l._sendInspectionEvent({
                        type: "@xstate.event",
                        sourceRef: e,
                        actorRef: t,
                        event: s,
                      }),
                        t._send(s);
                    },
                    scheduler: c,
                    getSnapshot: () => ({
                      _scheduledEvents: { ...l._snapshot._scheduledEvents },
                    }),
                    start: () => {
                      let e = l._snapshot._scheduledEvents;
                      for (let t in ((l._snapshot._scheduledEvents = {}), e)) {
                        let {
                          source: s,
                          target: n,
                          event: r,
                          delay: i,
                          id: o,
                        } = e[t];
                        c.schedule(s, n, r, i, o);
                      }
                    },
                    _clock: a,
                    _logger: u,
                  };
                return l;
              })(this, { clock: n, logger: i })),
            l && !o && this.system.inspect(w(l)),
            (this.sessionId = this.system._bookId()),
            (this.id = u ?? this.sessionId),
            (this.logger = t?.logger ?? this.system._logger),
            (this.clock = t?.clock ?? this.system._clock),
            (this._parent = o),
            (this._syncSnapshot = a),
            (this.options = s),
            (this.src = s.src ?? e),
            (this.ref = this),
            (this._actorScope = {
              self: this,
              id: this.id,
              sessionId: this.sessionId,
              logger: this.logger,
              defer: (e) => {
                this._deferred.push(e);
              },
              system: this.system,
              stopChild: (e) => {
                if (e._parent !== this)
                  throw Error(
                    `Cannot stop child actor ${e.id} of ${this.id} because it is not a child`
                  );
                e._stop();
              },
              emit: (e) => {
                let t = this.eventListeners.get(e.type),
                  s = this.eventListeners.get("*");
                if (t || s)
                  for (let n of [
                    ...(t ? t.values() : []),
                    ...(s ? s.values() : []),
                  ])
                    try {
                      n(e);
                    } catch (e) {
                      f(e);
                    }
              },
              actionExecutor: (e) => {
                let t = () => {
                  if (
                    (this._actorScope.system._sendInspectionEvent({
                      type: "@xstate.action",
                      actorRef: this,
                      action: { type: e.type, params: e.params },
                    }),
                    !e.exec)
                  )
                    return;
                  let t = $;
                  try {
                    ($ = !0), e.exec(e.info, e.params);
                  } finally {
                    $ = t;
                  }
                };
                this._processingStatus === R.Running
                  ? t()
                  : this._deferred.push(t);
              },
            }),
            (this.send = this.send.bind(this)),
            this.system._sendInspectionEvent({
              type: "@xstate.actor",
              actorRef: this,
            }),
            c && ((this._systemId = c), this.system._set(c, this)),
            this._initState(t?.snapshot ?? t?.state),
            c &&
              "active" !== this._snapshot.status &&
              this.system._unregister(this);
        }
        _initState(e) {
          try {
            this._snapshot = e
              ? this.logic.restoreSnapshot
                ? this.logic.restoreSnapshot(e, this._actorScope)
                : e
              : this.logic.getInitialSnapshot(
                  this._actorScope,
                  this.options?.input
                );
          } catch (e) {
            this._snapshot = { status: "error", output: void 0, error: e };
          }
        }
        update(e, t) {
          let s;
          for (this._snapshot = e; (s = this._deferred.shift()); )
            try {
              s();
            } catch (t) {
              (this._deferred.length = 0),
                (this._snapshot = { ...e, status: "error", error: t });
            }
          switch (this._snapshot.status) {
            case "active":
              for (let t of this.observers)
                try {
                  t.next?.(e);
                } catch (e) {
                  f(e);
                }
              break;
            case "done":
              var n;
              for (let t of this.observers)
                try {
                  t.next?.(e);
                } catch (e) {
                  f(e);
                }
              this._stopProcedure(),
                this._complete(),
                (this._doneEvent =
                  ((n = this.id),
                  {
                    type: `xstate.done.actor.${n}`,
                    output: this._snapshot.output,
                    actorId: n,
                  })),
                this._parent &&
                  this.system._relay(this, this._parent, this._doneEvent);
              break;
            case "error":
              this._error(this._snapshot.error);
          }
          this.system._sendInspectionEvent({
            type: "@xstate.snapshot",
            actorRef: this,
            event: t,
            snapshot: e,
          });
        }
        subscribe(e, t, s) {
          let n = w(e, t, s);
          if (this._processingStatus !== R.Stopped) this.observers.add(n);
          else
            switch (this._snapshot.status) {
              case "done":
                try {
                  n.complete?.();
                } catch (e) {
                  f(e);
                }
                break;
              case "error": {
                let e = this._snapshot.error;
                if (n.error)
                  try {
                    n.error(e);
                  } catch (e) {
                    f(e);
                  }
                else f(e);
              }
            }
          return {
            unsubscribe: () => {
              this.observers.delete(n);
            },
          };
        }
        on(e, t) {
          let s = this.eventListeners.get(e);
          s || ((s = new Set()), this.eventListeners.set(e, s));
          let n = t.bind(void 0);
          return (
            s.add(n),
            {
              unsubscribe: () => {
                s.delete(n);
              },
            }
          );
        }
        start() {
          if (this._processingStatus === R.Running) return this;
          this._syncSnapshot &&
            this.subscribe({
              next: (e) => {
                "active" === e.status &&
                  this.system._relay(this, this._parent, {
                    type: `xstate.snapshot.${this.id}`,
                    snapshot: e,
                  });
              },
              error: () => {},
            }),
            this.system._register(this.sessionId, this),
            this._systemId && this.system._set(this._systemId, this),
            (this._processingStatus = R.Running);
          let e = h(this.options.input);
          switch (
            (this.system._sendInspectionEvent({
              type: "@xstate.event",
              sourceRef: this._parent,
              actorRef: this,
              event: e,
            }),
            this._snapshot.status)
          ) {
            case "done":
              return this.update(this._snapshot, e), this;
            case "error":
              return this._error(this._snapshot.error), this;
          }
          if ((this._parent || this.system.start(), this.logic.start))
            try {
              this.logic.start(this._snapshot, this._actorScope);
            } catch (e) {
              return (
                (this._snapshot = {
                  ...this._snapshot,
                  status: "error",
                  error: e,
                }),
                this._error(e),
                this
              );
            }
          return (
            this.update(this._snapshot, e),
            this.options.devTools && this.attachDevTools(),
            this.mailbox.start(),
            this
          );
        }
        _process(e) {
          let t, s;
          try {
            t = this.logic.transition(this._snapshot, e, this._actorScope);
          } catch (e) {
            s = { err: e };
          }
          if (s) {
            let { err: e } = s;
            (this._snapshot = { ...this._snapshot, status: "error", error: e }),
              this._error(e);
            return;
          }
          this.update(t, e),
            e.type === c && (this._stopProcedure(), this._complete());
        }
        _stop() {
          return (
            this._processingStatus === R.Stopped ||
              ((this.mailbox.clear(), this._processingStatus === R.NotStarted)
                ? (this._processingStatus = R.Stopped)
                : this.mailbox.enqueue({ type: c })),
            this
          );
        }
        stop() {
          if (this._parent)
            throw Error("A non-root actor cannot be stopped directly.");
          return this._stop();
        }
        _complete() {
          for (let e of this.observers)
            try {
              e.complete?.();
            } catch (e) {
              f(e);
            }
          this.observers.clear();
        }
        _reportError(e) {
          if (!this.observers.size) {
            this._parent || f(e);
            return;
          }
          let t = !1;
          for (let s of this.observers) {
            let n = s.error;
            t ||= !n;
            try {
              n?.(e);
            } catch (e) {
              f(e);
            }
          }
          this.observers.clear(), t && f(e);
        }
        _error(e) {
          this._stopProcedure(),
            this._reportError(e),
            this._parent &&
              this.system._relay(this, this._parent, d(this.id, e));
        }
        _stopProcedure() {
          return (
            this._processingStatus !== R.Running ||
              (this.system.scheduler.cancelAll(this),
              this.mailbox.clear(),
              (this.mailbox = new r(this._process.bind(this))),
              (this._processingStatus = R.Stopped),
              this.system._unregister(this)),
            this
          );
        }
        _send(e) {
          this._processingStatus !== R.Stopped && this.mailbox.enqueue(e);
        }
        send(e) {
          this.system._relay(void 0, this, e);
        }
        attachDevTools() {
          let { devTools: e } = this.options;
          e && ("function" == typeof e ? e : n)(this);
        }
        toJSON() {
          return { xstate$$type: O, id: this.id };
        }
        getPersistedSnapshot(e) {
          return this.logic.getPersistedSnapshot(this._snapshot, e);
        }
        [p]() {
          return this;
        }
        getSnapshot() {
          return this._snapshot;
        }
      }
      function M(e, ...[t]) {
        return new q(e, t);
      }
      function A(e, t, s, n, { sendId: r }) {
        return [t, { sendId: "function" == typeof r ? r(s, n) : r }, void 0];
      }
      function N(e, t) {
        e.defer(() => {
          e.system.scheduler.cancel(e.self, t.sendId);
        });
      }
      function D(e) {
        function t(e, t) {}
        return (
          (t.type = "xstate.cancel"),
          (t.sendId = e),
          (t.resolve = A),
          (t.execute = N),
          t
        );
      }
      function C(
        e,
        t,
        s,
        n,
        { id: r, systemId: i, src: o, input: a, syncSnapshot: u }
      ) {
        let c,
          l,
          d = "string" == typeof o ? T(t.machine, o) : o,
          h = "function" == typeof r ? r(s) : r;
        return (
          d &&
            ((l =
              "function" == typeof a
                ? a({ context: t.context, event: s.event, self: e.self })
                : a),
            (c = M(d, {
              id: h,
              src: o,
              parent: e.self,
              syncSnapshot: u,
              systemId: i,
              input: l,
            }))),
          [
            eO(t, { children: { ...t.children, [h]: c } }),
            { id: r, systemId: i, actorRef: c, src: o, input: l },
            void 0,
          ]
        );
      }
      function L(e, { actorRef: t }) {
        t &&
          e.defer(() => {
            t._processingStatus !== R.Stopped && t.start();
          });
      }
      function W(
        ...[e, { id: t, systemId: s, input: n, syncSnapshot: r = !1 } = {}]
      ) {
        function i(e, t) {}
        return (
          (i.type = "xstate.spawnChild"),
          (i.id = t),
          (i.systemId = s),
          (i.src = e),
          (i.input = n),
          (i.syncSnapshot = r),
          (i.resolve = C),
          (i.execute = L),
          i
        );
      }
      function B(e, t, s, n, { actorRef: r }) {
        let i = "function" == typeof r ? r(s, n) : r,
          o = "string" == typeof i ? t.children[i] : i,
          a = t.children;
        return (
          o && ((a = { ...a }), delete a[o.id]),
          [eO(t, { children: a }), o, void 0]
        );
      }
      function V(e, t) {
        if (t) {
          if ((e.system._unregister(t), t._processingStatus !== R.Running))
            return void e.stopChild(t);
          e.defer(() => {
            e.stopChild(t);
          });
        }
      }
      function F(e) {
        function t(e, t) {}
        return (
          (t.type = "xstate.stopChild"),
          (t.actorRef = e),
          (t.resolve = B),
          (t.execute = V),
          t
        );
      }
      function J(e, t, s, n) {
        let { machine: r } = n,
          i = "function" == typeof e,
          o = i
            ? e
            : r.implementations.guards["string" == typeof e ? e : e.type];
        if (!i && !o)
          throw Error(
            `Guard '${"string" == typeof e ? e : e.type}' is not implemented.'.`
          );
        if ("function" != typeof o) return J(o, t, s, n);
        let a = { context: t, event: s },
          u =
            i || "string" == typeof e
              ? void 0
              : "params" in e
              ? "function" == typeof e.params
                ? e.params({ context: t, event: s })
                : e.params
              : void 0;
        return "check" in o ? o.check(n, a, o) : o(a, u);
      }
      let U = (e) => "atomic" === e.type || "final" === e.type;
      function z(e) {
        return Object.values(e.states).filter((e) => "history" !== e.type);
      }
      function G(e, t) {
        let s = [];
        if (t === e) return s;
        let n = e.parent;
        for (; n && n !== t; ) s.push(n), (n = n.parent);
        return s;
      }
      function H(e) {
        let t = new Set(e),
          s = X(t);
        for (let e of t)
          if ("compound" !== e.type || (s.get(e) && s.get(e).length)) {
            if ("parallel" === e.type) {
              for (let s of z(e))
                if ("history" !== s.type && !t.has(s))
                  for (let e of eo(s)) t.add(e);
            }
          } else eo(e).forEach((e) => t.add(e));
        for (let e of t) {
          let s = e.parent;
          for (; s; ) t.add(s), (s = s.parent);
        }
        return t;
      }
      function X(e) {
        let t = new Map();
        for (let s of e)
          t.has(s) || t.set(s, []),
            s.parent &&
              (t.has(s.parent) || t.set(s.parent, []), t.get(s.parent).push(s));
        return t;
      }
      function K(e, t) {
        return (function e(t, s) {
          let n = s.get(t);
          if (!n) return {};
          if ("compound" === t.type) {
            let e = n[0];
            if (!e) return {};
            if (U(e)) return e.key;
          }
          let r = {};
          for (let t of n) r[t.key] = e(t, s);
          return r;
        })(e, X(H(t)));
      }
      function Q(e, t) {
        return "compound" === t.type
          ? z(t).some((t) => "final" === t.type && e.has(t))
          : "parallel" === t.type
          ? z(t).every((t) => Q(e, t))
          : "final" === t.type;
      }
      let Y = (e) => "#" === e[0];
      function Z(e, t) {
        return (
          e.transitions.get(t) ||
          [...e.transitions.keys()]
            .filter((e) => {
              if ("*" === e) return !0;
              if (!e.endsWith(".*")) return !1;
              let s = e.split("."),
                n = t.split(".");
              for (let e = 0; e < s.length; e++) {
                let t = s[e],
                  r = n[e];
                if ("*" === t) return e === s.length - 1;
                if (t !== r) return !1;
              }
              return !0;
            })
            .sort((e, t) => t.length - e.length)
            .flatMap((t) => e.transitions.get(t))
        );
      }
      function ee(e) {
        let t = e.config.after;
        if (!t) return [];
        let s = (t) => {
          var s;
          let n = ((s = e.id), { type: `xstate.after.${t}.${s}` }),
            r = n.type;
          return e.entry.push(eM(n, { id: r, delay: t })), e.exit.push(D(r)), r;
        };
        return Object.keys(t)
          .flatMap((e) => {
            let n = t[e],
              r = Number.isNaN(+e) ? e : +e,
              i = s(r);
            return _("string" == typeof n ? { target: n } : n).map((e) => ({
              ...e,
              event: i,
              delay: r,
            }));
          })
          .map((t) => {
            let { delay: s } = t;
            return { ...et(e, t.event, t), delay: s };
          });
      }
      function et(e, t, s) {
        let n = k(s.target),
          r = s.reenter ?? !1,
          o = (function (e, t) {
            if (void 0 !== t)
              return t.map((t) => {
                if ("string" != typeof t) return t;
                if (Y(t)) return e.machine.getStateNodeById(t);
                let s = t[0] === i;
                if (s && !e.parent) return ec(e, t.slice(1));
                let n = s ? e.key + t : t;
                if (e.parent)
                  try {
                    return ec(e.parent, n);
                  } catch (t) {
                    throw Error(`Invalid transition definition for state node '${e.id}':
${t.message}`);
                  }
                throw Error(
                  `Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`
                );
              });
          })(e, n),
          a = {
            ...s,
            actions: _(s.actions),
            guard: s.guard,
            target: o,
            source: e,
            reenter: r,
            eventType: t,
            toJSON: () => ({
              ...a,
              source: `#${e.id}`,
              target: o ? o.map((e) => `#${e.id}`) : void 0,
            }),
          };
        return a;
      }
      function es(e) {
        let t = new Map();
        if (e.config.on)
          for (let s of Object.keys(e.config.on)) {
            if (s === o)
              throw Error(
                'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.'
              );
            let n = e.config.on[s];
            t.set(
              s,
              x(n).map((t) => et(e, s, t))
            );
          }
        if (e.config.onDone) {
          let s = `xstate.done.state.${e.id}`;
          t.set(
            s,
            x(e.config.onDone).map((t) => et(e, s, t))
          );
        }
        for (let s of e.invoke) {
          if (s.onDone) {
            let n = `xstate.done.actor.${s.id}`;
            t.set(
              n,
              x(s.onDone).map((t) => et(e, n, t))
            );
          }
          if (s.onError) {
            let n = `xstate.error.actor.${s.id}`;
            t.set(
              n,
              x(s.onError).map((t) => et(e, n, t))
            );
          }
          if (s.onSnapshot) {
            let n = `xstate.snapshot.${s.id}`;
            t.set(
              n,
              x(s.onSnapshot).map((t) => et(e, n, t))
            );
          }
        }
        for (let s of e.after) {
          let e = t.get(s.eventType);
          e || ((e = []), t.set(s.eventType, e)), e.push(s);
        }
        return t;
      }
      function en(e, t) {
        let s =
          "string" == typeof t ? e.states[t] : t ? e.states[t.target] : void 0;
        if (!s && t)
          throw Error(
            `Initial state node "${t}" not found on parent state node #${e.id}`
          );
        let n = {
          source: e,
          actions: t && "string" != typeof t ? _(t.actions) : [],
          eventType: null,
          reenter: !1,
          target: s ? [s] : [],
          toJSON: () => ({
            ...n,
            source: `#${e.id}`,
            target: s ? [`#${s.id}`] : [],
          }),
        };
        return n;
      }
      function er(e) {
        let t = k(e.config.target);
        return t
          ? {
              target: t.map((t) =>
                "string" == typeof t ? ec(e.parent, t) : t
              ),
            }
          : e.parent.initial;
      }
      function ei(e) {
        return "history" === e.type;
      }
      function eo(e) {
        let t = ea(e);
        for (let s of t) for (let n of G(s, e)) t.add(n);
        return t;
      }
      function ea(e) {
        let t = new Set();
        return (
          !(function e(s) {
            if (!t.has(s)) {
              if ((t.add(s), "compound" === s.type)) e(s.initial.target[0]);
              else if ("parallel" === s.type) for (let t of z(s)) e(t);
            }
          })(e),
          t
        );
      }
      function eu(e, t) {
        if (Y(t)) return e.machine.getStateNodeById(t);
        if (!e.states)
          throw Error(
            `Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`
          );
        let s = e.states[t];
        if (!s) throw Error(`Child state '${t}' does not exist on '${e.id}'`);
        return s;
      }
      function ec(e, t) {
        if ("string" == typeof t && Y(t))
          try {
            return e.machine.getStateNodeById(t);
          } catch {}
        let s = y(t).slice(),
          n = e;
        for (; s.length; ) {
          let e = s.shift();
          if (!e.length) break;
          n = eu(n, e);
        }
        return n;
      }
      function el(e, t) {
        if ("string" == typeof t) {
          let s = e.states[t];
          if (!s) throw Error(`State '${t}' does not exist on '${e.id}'`);
          return [e, s];
        }
        let s = Object.keys(t),
          n = s.map((t) => eu(e, t)).filter(Boolean);
        return [e.machine.root, e].concat(
          n,
          s.reduce((s, n) => {
            let r = eu(e, n);
            if (!r) return s;
            let i = el(r, t[n]);
            return s.concat(i);
          }, [])
        );
      }
      function ed(e, t) {
        let s = e;
        for (; s.parent && s.parent !== t; ) s = s.parent;
        return s.parent === t;
      }
      function eh(e, t, s) {
        let n = new Set();
        for (let r of e) {
          let e = !1,
            i = new Set();
          for (let o of n)
            if (
              (function (e, t) {
                let s = new Set(e),
                  n = new Set(t);
                for (let e of s) if (n.has(e)) return !0;
                for (let e of n) if (s.has(e)) return !0;
                return !1;
              })(ey([r], t, s), ey([o], t, s))
            )
              if (ed(r.source, o.source)) i.add(o);
              else {
                e = !0;
                break;
              }
          if (!e) {
            for (let e of i) n.delete(e);
            n.add(r);
          }
        }
        return Array.from(n);
      }
      function ef(e, t) {
        if (!e.target) return [];
        let s = new Set();
        for (let n of e.target)
          if (ei(n))
            if (t[n.id]) for (let e of t[n.id]) s.add(e);
            else for (let e of ef(er(n), t)) s.add(e);
          else s.add(n);
        return [...s];
      }
      function ep(e, t) {
        let s = ef(e, t);
        if (!s) return;
        if (!e.reenter && s.every((t) => t === e.source || ed(t, e.source)))
          return e.source;
        let n = (function (e) {
          let [t, ...s] = e;
          for (let e of G(t, void 0)) if (s.every((t) => ed(t, e))) return e;
        })(s.concat(e.source));
        return n || (e.reenter ? void 0 : e.source.machine.root);
      }
      function ey(e, t, s) {
        let n = new Set();
        for (let r of e)
          if (r.target?.length) {
            let e = ep(r, s);
            for (let s of (r.reenter && r.source === e && n.add(e), t))
              ed(s, e) && n.add(s);
          }
        return [...n];
      }
      function eg(e, t, s, n, r, i) {
        if (!e.length) return t;
        let o = new Set(t._nodes),
          a = t.historyValue,
          u = eh(e, o, a),
          c = t;
        r ||
          ([c, a] = (function (e, t, s, n, r, i, o, a) {
            let u,
              c = e,
              l = ey(n, r, i);
            for (let e of (l.sort((e, t) => t.order - e.order), l))
              for (let t of (function (e) {
                return Object.keys(e.states)
                  .map((t) => e.states[t])
                  .filter((e) => "history" === e.type);
              })(e)) {
                let s;
                (s =
                  "deep" === t.history
                    ? (t) => U(t) && ed(t, e)
                    : (t) => t.parent === e),
                  ((u ??= { ...i })[t.id] = Array.from(r).filter(s));
              }
            for (let e of l)
              (c = e_(
                c,
                t,
                s,
                [...e.exit, ...e.invoke.map((e) => F(e.id))],
                o,
                void 0
              )),
                r.delete(e);
            return [c, u || i];
          })(c, n, s, u, o, a, i, s.actionExecutor)),
          (c = (function (e, t, s, n, r, i, o, a) {
            let u = e,
              c = new Set(),
              d = new Set();
            (function (e, t, s, n) {
              for (let r of e) {
                let e = ep(r, t);
                for (let i of r.target || [])
                  !ei(i) &&
                    (r.source !== i || r.source !== e || r.reenter) &&
                    (n.add(i), s.add(i)),
                    ev(i, t, s, n);
                for (let i of ef(r, t)) {
                  let o = G(i, e);
                  e?.type === "parallel" && o.push(e),
                    em(n, t, s, o, !r.source.parent && r.reenter ? void 0 : e);
                }
              }
            })(n, o, d, c),
              a && d.add(e.machine.root);
            let h = new Set();
            for (let e of [...c].sort((e, t) => e.order - t.order)) {
              r.add(e);
              let n = [];
              for (let t of (n.push(...e.entry), e.invoke))
                n.push(W(t.src, { ...t, syncSnapshot: !!t.onSnapshot }));
              if (d.has(e)) {
                let t = e.initial.actions;
                n.push(...t);
              }
              if (
                ((u = e_(
                  u,
                  t,
                  s,
                  n,
                  i,
                  e.invoke.map((e) => e.id)
                )),
                "final" === e.type)
              ) {
                let n = e.parent,
                  o = n?.type === "parallel" ? n : n?.parent,
                  a = o || e;
                for (
                  n?.type === "compound" &&
                  i.push(
                    l(
                      n.id,
                      void 0 !== e.output
                        ? b(e.output, u.context, t, s.self)
                        : void 0
                    )
                  );
                  o?.type === "parallel" && !h.has(o) && Q(r, o);

                )
                  h.add(o), i.push(l(o.id)), (a = o), (o = o.parent);
                if (o) continue;
                u = eO(u, {
                  status: "done",
                  output: (function (e, t, s, n, r) {
                    if (void 0 === n.output) return;
                    let i = l(
                      r.id,
                      void 0 !== r.output && r.parent
                        ? b(r.output, e.context, t, s.self)
                        : void 0
                    );
                    return b(n.output, e.context, i, s.self);
                  })(u, t, s, u.machine.root, a),
                });
              }
            }
            return u;
          })(
            (c = e_(
              c,
              n,
              s,
              u.flatMap((e) => e.actions),
              i,
              void 0
            )),
            n,
            s,
            u,
            o,
            i,
            a,
            r
          ));
        let d = [...o];
        "done" === c.status &&
          (c = e_(
            c,
            n,
            s,
            d.sort((e, t) => t.order - e.order).flatMap((e) => e.exit),
            i,
            void 0
          ));
        try {
          if (
            a === t.historyValue &&
            (function (e, t) {
              if (e.length !== t.size) return !1;
              for (let s of e) if (!t.has(s)) return !1;
              return !0;
            })(t._nodes, o)
          )
            return c;
          return eO(c, { _nodes: d, historyValue: a });
        } catch (e) {
          throw e;
        }
      }
      function ev(e, t, s, n) {
        var r, i, o, a;
        if (ei(e))
          if (t[e.id]) {
            let o = t[e.id];
            for (let e of o) n.add(e), ev(e, t, s, n);
            for (let a of o) {
              (r = a), (i = e.parent), em(n, t, s, G(r, i));
            }
          } else {
            let r = er(e);
            for (let i of r.target)
              n.add(i),
                r === e.parent?.initial && s.add(e.parent),
                ev(i, t, s, n);
            for (let i of r.target) {
              (o = i), (a = e.parent), em(n, t, s, G(o, a));
            }
          }
        else if ("compound" === e.type) {
          let [r] = e.initial.target;
          ei(r) || (n.add(r), s.add(r)), ev(r, t, s, n), em(n, t, s, G(r, e));
        } else if ("parallel" === e.type)
          for (let r of z(e).filter((e) => !ei(e)))
            [...n].some((e) => ed(e, r)) ||
              (ei(r) || (n.add(r), s.add(r)), ev(r, t, s, n));
      }
      function em(e, t, s, n, r) {
        for (let i of n)
          if (((!r || ed(i, r)) && e.add(i), "parallel" === i.type))
            for (let n of z(i).filter((e) => !ei(e)))
              [...e].some((e) => ed(e, n)) || (e.add(n), ev(n, t, s, e));
      }
      function e_(e, t, s, n, r, i) {
        let o = i ? [] : void 0,
          a = (function e(t, s, n, r, i, o) {
            let { machine: a } = t,
              u = t;
            for (let t of r) {
              var c;
              let r = "function" == typeof t,
                l = r
                  ? t
                  : ((c = "string" == typeof t ? t : t.type),
                    a.implementations.actions[c]),
                d = {
                  context: u.context,
                  event: s,
                  self: n.self,
                  system: n.system,
                },
                h =
                  r || "string" == typeof t
                    ? void 0
                    : "params" in t
                    ? "function" == typeof t.params
                      ? t.params({ context: u.context, event: s })
                      : t.params
                    : void 0;
              if (!l || !("resolve" in l)) {
                n.actionExecutor({
                  type:
                    "string" == typeof t
                      ? t
                      : "object" == typeof t
                      ? t.type
                      : t.name || "(anonymous)",
                  info: d,
                  params: h,
                  exec: l,
                });
                continue;
              }
              let [f, p, y] = l.resolve(n, u, d, h, l, i);
              (u = f),
                "retryResolve" in l && o?.push([l, p]),
                "execute" in l &&
                  n.actionExecutor({
                    type: l.type,
                    info: d,
                    params: p,
                    exec: l.execute.bind(null, n, p),
                  }),
                y && (u = e(u, s, n, y, i, o));
            }
            return u;
          })(e, t, s, n, { internalQueue: r, deferredActorIds: i }, o);
        return (
          o?.forEach(([e, t]) => {
            e.retryResolve(s, a, t);
          }),
          a
        );
      }
      function eb(e, t, s, n) {
        let r = e,
          i = [];
        function o(e, t, n) {
          s.system._sendInspectionEvent({
            type: "@xstate.microstep",
            actorRef: s.self,
            event: t,
            snapshot: e,
            _transitions: n,
          }),
            i.push(e);
        }
        if (t.type === c)
          return (
            o((r = eO(eS(r, t, s), { status: "stopped" })), t, []),
            { snapshot: r, microstates: i }
          );
        let u = t;
        if (u.type !== a) {
          let t = u,
            a = t.type.startsWith("xstate.error.actor"),
            c = ex(t, r);
          if (a && !c.length)
            return (
              o((r = eO(e, { status: "error", error: t.error })), t, []),
              { snapshot: r, microstates: i }
            );
          o((r = eg(c, e, s, u, !1, n)), t, c);
        }
        let l = !0;
        for (; "active" === r.status; ) {
          let e = l
              ? (function (e, t) {
                  let s = new Set();
                  for (let n of e._nodes.filter(U))
                    e: for (let r of [n].concat(G(n, void 0)))
                      if (r.always) {
                        for (let n of r.always)
                          if (
                            void 0 === n.guard ||
                            J(n.guard, e.context, t, e)
                          ) {
                            s.add(n);
                            break e;
                          }
                      }
                  return eh(Array.from(s), new Set(e._nodes), e.historyValue);
                })(r, u)
              : [],
            t = e.length ? r : void 0;
          if (!e.length) {
            if (!n.length) break;
            e = ex((u = n.shift()), r);
          }
          (l = (r = eg(e, r, s, u, !1, n)) !== t), o(r, u, e);
        }
        return (
          "active" !== r.status && eS(r, u, s), { snapshot: r, microstates: i }
        );
      }
      function eS(e, t, s) {
        return e_(
          e,
          t,
          s,
          Object.values(e.children).map((e) => F(e)),
          [],
          void 0
        );
      }
      function ex(e, t) {
        return t.machine.getTransitionData(t, e);
      }
      function ek(e, t) {
        let s = H(el(e, t));
        return K(e, [...s]);
      }
      let ew = function (e) {
          return (function e(t, s) {
            let n = g(t),
              r = g(s);
            return "string" == typeof r
              ? "string" == typeof n && r === n
              : "string" == typeof n
              ? n in r
              : Object.keys(n).every((t) => t in r && e(n[t], r[t]));
          })(e, this.value);
        },
        eI = function (e) {
          return this.tags.has(e);
        },
        eT = function (e) {
          let t = this.machine.getTransitionData(this, e);
          return (
            !!t?.length &&
            t.some((e) => void 0 !== e.target || e.actions.length)
          );
        },
        eE = function () {
          let {
            _nodes: e,
            tags: t,
            machine: s,
            getMeta: n,
            toJSON: r,
            can: i,
            hasTag: o,
            matches: a,
            ...u
          } = this;
          return { ...u, tags: Array.from(t) };
        },
        ej = function () {
          return this._nodes.reduce(
            (e, t) => (void 0 !== t.meta && (e[t.id] = t.meta), e),
            {}
          );
        };
      function e$(e, t) {
        return {
          status: e.status,
          output: e.output,
          error: e.error,
          machine: t,
          context: e.context,
          _nodes: e._nodes,
          value: K(t.root, e._nodes),
          tags: new Set(e._nodes.flatMap((e) => e.tags)),
          children: e.children,
          historyValue: e.historyValue || {},
          matches: ew,
          hasTag: eI,
          can: eT,
          getMeta: ej,
          toJSON: eE,
        };
      }
      function eO(e, t = {}) {
        return e$({ ...e, ...t }, e.machine);
      }
      function eR(e, t) {
        let {
            _nodes: s,
            tags: n,
            machine: r,
            children: i,
            context: o,
            can: a,
            hasTag: u,
            matches: c,
            getMeta: l,
            toJSON: d,
            ...h
          } = e,
          f = {};
        for (let e in i) {
          let s = i[e];
          f[e] = {
            snapshot: s.getPersistedSnapshot(t),
            src: s.src,
            systemId: s._systemId,
            syncSnapshot: s._syncSnapshot,
          };
        }
        return {
          ...h,
          context: (function e(t) {
            let s;
            for (let n in t) {
              let r = t[n];
              if (r && "object" == typeof r)
                if ("sessionId" in r && "send" in r && "ref" in r)
                  (s ??= Array.isArray(t) ? t.slice() : { ...t })[n] = {
                    xstate$$type: O,
                    id: r.id,
                  };
                else {
                  let i = e(r);
                  i !== r &&
                    ((s ??= Array.isArray(t) ? t.slice() : { ...t })[n] = i);
                }
            }
            return s ?? t;
          })(o),
          children: f,
          historyValue: (function (e) {
            if ("object" != typeof e || null === e) return {};
            let t = {};
            for (let s in e) {
              let n = e[s];
              Array.isArray(n) && (t[s] = n.map((e) => ({ id: e.id })));
            }
            return t;
          })(h.historyValue),
        };
      }
      function eP(
        e,
        t,
        s,
        n,
        { event: r, id: i, delay: o },
        { internalQueue: a }
      ) {
        let u,
          c = t.machine.implementations.delays;
        if ("string" == typeof r)
          throw Error(
            `Only event objects may be used with raise; use raise({ type: "${r}" }) instead`
          );
        let l = "function" == typeof r ? r(s, n) : r;
        if ("string" == typeof o) {
          let e = c && c[o];
          u = "function" == typeof e ? e(s, n) : e;
        } else u = "function" == typeof o ? o(s, n) : o;
        return (
          "number" != typeof u && a.push(l),
          [t, { event: l, id: i, delay: u }, void 0]
        );
      }
      function eq(e, t) {
        let { event: s, delay: n, id: r } = t;
        if ("number" == typeof n)
          return void e.defer(() => {
            let t = e.self;
            e.system.scheduler.schedule(t, t, s, n, r);
          });
      }
      function eM(e, t) {
        function s(e, t) {}
        return (
          (s.type = "xstate.raise"),
          (s.event = e),
          (s.id = t?.id),
          (s.delay = t?.delay),
          (s.resolve = eP),
          (s.execute = eq),
          s
        );
      }
    },
    34661: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = s(55871)._(s(78685));
      function r(e, t) {
        var s;
        let r = {};
        "function" == typeof e && (r.loader = e);
        let i = { ...r, ...t };
        return (0, n.default)({
          ...i,
          modules: null == (s = i.loadableGenerated) ? void 0 : s.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    41232: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        });
      let n = s(26520);
    },
    50647: (e, t, s) => {
      s.d(t, { H6: () => p, OX: () => u, SP: () => i, Sx: () => h });
      var n = s(29448);
      let r = new WeakMap();
      function i(e) {
        return {
          config: e,
          start: (t, s) => {
            let { self: n, system: i, emit: o } = s,
              a = { receivers: void 0, dispose: void 0 };
            r.set(n, a),
              (a.dispose = e({
                input: t.input,
                system: i,
                self: n,
                sendBack: (e) => {
                  "stopped" !== n.getSnapshot().status &&
                    n._parent &&
                    i._relay(n, n._parent, e);
                },
                receive: (e) => {
                  (a.receivers ??= new Set()), a.receivers.add(e);
                },
                emit: o,
              }));
          },
          transition: (e, t, s) => {
            let i = r.get(s.self);
            return (
              t.type === n.X
                ? ((e = { ...e, status: "stopped", error: void 0 }),
                  i.dispose?.())
                : i.receivers?.forEach((e) => e(t)),
              e
            );
          },
          getInitialSnapshot: (e, t) => ({
            status: "active",
            output: void 0,
            error: void 0,
            input: t,
          }),
          getPersistedSnapshot: (e) => e,
          restoreSnapshot: (e) => e,
        };
      }
      let o = "xstate.observable.error",
        a = "xstate.observable.complete";
      function u(e) {
        return {
          config: e,
          transition: (e, t) => {
            if ("active" !== e.status) return e;
            switch (t.type) {
              case o:
                return {
                  ...e,
                  status: "error",
                  error: t.data,
                  input: void 0,
                  _subscription: void 0,
                };
              case a:
                return {
                  ...e,
                  status: "done",
                  input: void 0,
                  _subscription: void 0,
                };
              case n.X:
                return (
                  e._subscription.unsubscribe(),
                  {
                    ...e,
                    status: "stopped",
                    input: void 0,
                    _subscription: void 0,
                  }
                );
              default:
                return e;
            }
          },
          getInitialSnapshot: (e, t) => ({
            status: "active",
            output: void 0,
            error: void 0,
            context: void 0,
            input: t,
            _subscription: void 0,
          }),
          start: (t, { self: s, system: n, emit: r }) => {
            "done" !== t.status &&
              (t._subscription = e({
                input: t.input,
                system: n,
                self: s,
                emit: r,
              }).subscribe({
                next: (e) => {
                  s._parent && n._relay(s, s._parent, e);
                },
                error: (e) => {
                  n._relay(s, s, { type: o, data: e });
                },
                complete: () => {
                  n._relay(s, s, { type: a });
                },
              }));
          },
          getPersistedSnapshot: ({ _subscription: e, ...t }) => t,
          restoreSnapshot: (e) => ({ ...e, _subscription: void 0 }),
        };
      }
      let c = "xstate.promise.resolve",
        l = "xstate.promise.reject",
        d = new WeakMap();
      function h(e) {
        return {
          config: e,
          transition: (e, t, s) => {
            if ("active" !== e.status) return e;
            switch (t.type) {
              case c: {
                let s = t.data;
                return { ...e, status: "done", output: s, input: void 0 };
              }
              case l:
                return { ...e, status: "error", error: t.data, input: void 0 };
              case n.X:
                return (
                  d.get(s.self)?.abort(),
                  { ...e, status: "stopped", input: void 0 }
                );
              default:
                return e;
            }
          },
          start: (t, { self: s, system: n, emit: r }) => {
            if ("active" !== t.status) return;
            let i = new AbortController();
            d.set(s, i),
              Promise.resolve(
                e({
                  input: t.input,
                  system: n,
                  self: s,
                  signal: i.signal,
                  emit: r,
                })
              ).then(
                (e) => {
                  "active" === s.getSnapshot().status &&
                    (d.delete(s), n._relay(s, s, { type: c, data: e }));
                },
                (e) => {
                  "active" === s.getSnapshot().status &&
                    (d.delete(s), n._relay(s, s, { type: l, data: e }));
                }
              );
          },
          getInitialSnapshot: (e, t) => ({
            status: "active",
            output: void 0,
            error: void 0,
            input: t,
          }),
          getPersistedSnapshot: (e) => e,
          restoreSnapshot: (e) => e,
        };
      }
      let f = (function (e, t) {
        return {
          config: e,
          transition: (t, s, n) => ({ ...t, context: e(t.context, s, n) }),
          getInitialSnapshot: (e, s) => ({
            status: "active",
            output: void 0,
            error: void 0,
            context: "function" == typeof t ? t({ input: s }) : t,
          }),
          getPersistedSnapshot: (e) => e,
          restoreSnapshot: (e) => e,
        };
      })((e) => void 0, void 0);
      function p() {
        return (0, n.c)(f);
      }
    },
    50875: (e, t, s) => {
      s.d(t, {
        CC: () => k,
        FS: () => E,
        IM: () => O,
        RM: () => M,
        Rr: () => $,
        Tx: () => j,
        Uc: () => q,
        V2: () => w,
        _K: () => I,
        tP: () => P,
        vd: () => T,
      });
      var n = s(16397),
        r = s(50647),
        i = s(18753),
        o = s(90828),
        a = s(10892),
        u = s(29448),
        c = s(11175),
        l = s(58303),
        d = s(53019),
        h = s(40514),
        f = s(42629),
        p = s(31260),
        y = s(26291),
        g = s(2736),
        v = s(20670),
        m = s(66176);
      let _ =
          (e) =>
          ({ context: t }) => {
            let {
              count: s,
              include: n,
              exclude: r,
              responseType: i = "message.received",
            } = e;
            return {
              count: s,
              domain: t.domain,
              from: t.connectTo,
              include: n ? (Array.isArray(n) ? n : [n]) : [],
              exclude: r ? (Array.isArray(r) ? r : [r]) : [],
              responseType: i,
              target: t.target,
              to: t.name,
            };
          },
        b = (e) => (t) => {
          let { data: s } = t;
          return (
            (!e.include.length || e.include.includes(s.type)) &&
            (!e.exclude.length || !e.exclude.includes(s.type)) &&
            s.domain === e.domain &&
            s.from === e.from &&
            s.to === e.to &&
            (!e.target || t.source === e.target)
          );
        },
        S = (e) => (t) => ({ type: e, message: t }),
        x = (0, c.v)(() => (0, l.R)(window, "message")),
        k = (e) =>
          (0, r.OX)(({ input: t }) =>
            x.pipe(
              e ? (0, d.T)(e) : (0, h.F)(),
              (0, f.p)(b(t)),
              (0, d.T)(S(t.responseType)),
              t.count
                ? (0, h.F)(
                    (0, p.S)(t.count),
                    (0, y.H)((e) => e),
                    (0, g.s)(t.count)
                  )
                : (0, h.F)()
            )
          ),
        w = "sanity/comlink",
        I = "comlink/response",
        T = "comlink/heartbeat",
        E = "comlink/disconnect",
        j = "comlink/handshake/syn",
        $ = "comlink/handshake/syn-ack",
        O = "comlink/handshake/ack",
        R = (e) => (t) =>
          t.pipe(
            (0, g.s)(1),
            (0, d.T)(() => {
              throw Error(e);
            })
          ),
        P = () =>
          (0, i.mj)({
            types: {},
            actors: {
              listen: (0, r.OX)(({ input: e }) => {
                let t = e.signal
                  ? (0, l.R)(e.signal, "abort").pipe(
                      R(`Request ${e.requestId} aborted`)
                    )
                  : v.w;
                return (0, l.R)(window, "message").pipe(
                  (0, f.p)(
                    (t) =>
                      t.data?.type === I &&
                      t.data?.responseTo === e.requestId &&
                      !!t.source &&
                      e.sources.has(t.source)
                  ),
                  (0, g.s)(e.sources.size),
                  (0, m.Q)(t)
                );
              }),
            },
            actions: {
              "send message": ({ context: e }, t) => {
                let { sources: s, targetOrigin: n } = e,
                  { message: r } = t;
                s.forEach((e) => {
                  e.postMessage(r, { targetOrigin: n });
                });
              },
              "on success": (0, o.b)(
                ({ context: e }) => e.parentRef,
                ({ context: e, self: t }) => (
                  e.response && e.resolvable?.resolve(e.response),
                  {
                    type: "request.success",
                    requestId: t.id,
                    response: e.response,
                    responseTo: e.responseTo,
                  }
                )
              ),
              "on fail": (0, o.b)(
                ({ context: e }) => e.parentRef,
                ({ context: e, self: t }) => (
                  e.suppressWarnings ||
                    console.warn(
                      `[@sanity/comlink] Received no response to message '${e.type}' on client '${e.from}' (ID: '${e.id}').`
                    ),
                  e.resolvable?.reject(Error("No response received")),
                  { type: "request.failed", requestId: t.id }
                )
              ),
              "on abort": (0, o.b)(
                ({ context: e }) => e.parentRef,
                ({ context: e, self: t }) => (
                  e.resolvable?.reject(Error("Request aborted")),
                  { type: "request.aborted", requestId: t.id }
                )
              ),
            },
            guards: { expectsResponse: ({ context: e }) => e.expectResponse },
            delays: {
              initialTimeout: 0,
              responseTimeout: ({ context: e }) => e.responseTimeout ?? 3e3,
            },
          }).createMachine({
            context: ({ input: e }) => ({
              channelId: e.channelId,
              data: e.data,
              domain: e.domain,
              expectResponse: e.expectResponse ?? !1,
              from: e.from,
              id: `msg-${(0, n.A)()}`,
              parentRef: e.parentRef,
              resolvable: e.resolvable,
              response: null,
              responseTimeout: e.responseTimeout,
              responseTo: e.responseTo,
              signal: e.signal,
              sources:
                e.sources instanceof Set ? e.sources : new Set([e.sources]),
              suppressWarnings: e.suppressWarnings,
              targetOrigin: e.targetOrigin,
              to: e.to,
              type: e.type,
            }),
            initial: "idle",
            on: { abort: ".aborted" },
            states: {
              idle: { after: { initialTimeout: [{ target: "sending" }] } },
              sending: {
                entry: {
                  type: "send message",
                  params: ({ context: e }) => {
                    let {
                      channelId: t,
                      data: s,
                      domain: n,
                      from: r,
                      id: i,
                      responseTo: o,
                      to: a,
                      type: u,
                    } = e;
                    return {
                      message: {
                        channelId: t,
                        data: s,
                        domain: n,
                        from: r,
                        id: i,
                        to: a,
                        type: u,
                        responseTo: o,
                      },
                    };
                  },
                },
                always: [
                  { guard: "expectsResponse", target: "awaiting" },
                  "success",
                ],
              },
              awaiting: {
                invoke: {
                  id: "listen for response",
                  src: "listen",
                  input: ({ context: e }) => ({
                    requestId: e.id,
                    sources: e.sources,
                    signal: e.signal,
                  }),
                  onError: "aborted",
                },
                after: { responseTimeout: "failed" },
                on: {
                  message: {
                    actions: (0, a.a)({
                      response: ({ event: e }) => e.data.data,
                      responseTo: ({ event: e }) => e.data.responseTo,
                    }),
                    target: "success",
                  },
                },
              },
              failed: { type: "final", entry: "on fail" },
              success: { type: "final", entry: "on success" },
              aborted: { type: "final", entry: "on abort" },
            },
            output: ({ context: e, self: t }) => ({
              requestId: t.id,
              response: e.response,
              responseTo: e.responseTo,
            }),
          });
      (0, r.SP)(({ sendBack: e, input: t }) => {
        let s = () => {
          e(t.event);
        };
        t.immediate && s();
        let n = setInterval(s, t.interval);
        return () => {
          clearInterval(n);
        };
      });
      let q = () =>
          (0, i.mj)({
            types: {},
            actors: { requestMachine: P(), listen: k() },
            actions: {
              "buffer handshake": (0, a.a)({
                handshakeBuffer: ({ event: e, context: t }) => (
                  (0, i.DT)(e, "message.received"), [...t.handshakeBuffer, e]
                ),
              }),
              "buffer message": (0, o.a)(({ enqueue: e }) => {
                e.assign({
                  buffer: ({ event: e, context: t }) => (
                    (0, i.DT)(e, "post"),
                    [
                      ...t.buffer,
                      {
                        data: e.data,
                        resolvable: e.resolvable,
                        options: e.options,
                      },
                    ]
                  ),
                }),
                  e.emit(
                    ({ event: e }) => (
                      (0, i.DT)(e, "post"),
                      { type: "buffer.added", message: e.data }
                    )
                  );
              }),
              "create request": (0, a.a)({
                requests: ({ context: e, event: t, self: s, spawn: r }) => {
                  (0, i.DT)(t, "request");
                  let o = (Array.isArray(t.data) ? t.data : [t.data]).map((t) =>
                    r("requestMachine", {
                      id: `req-${(0, n.A)()}`,
                      input: {
                        channelId: e.channelId,
                        data: t.data,
                        domain: e.domain,
                        expectResponse: t.expectResponse,
                        from: e.name,
                        parentRef: s,
                        resolvable: t.resolvable,
                        responseTimeout: t.options?.responseTimeout,
                        responseTo: t.responseTo,
                        signal: t.options?.signal,
                        sources: e.target,
                        suppressWarnings: t.options?.suppressWarnings,
                        targetOrigin: e.targetOrigin,
                        to: e.connectTo,
                        type: t.type,
                      },
                    })
                  );
                  return [...e.requests, ...o];
                },
              }),
              "emit heartbeat": (0, o.e)(() => ({ type: "heartbeat" })),
              "emit received message": (0, o.a)(({ enqueue: e }) => {
                e.emit(
                  ({ event: e }) => (
                    (0, i.DT)(e, "message.received"),
                    { type: "message", message: e.message.data }
                  )
                );
              }),
              "emit status": (0, o.e)((e, t) => ({
                type: "status",
                status: t.status,
              })),
              "post message": (0, u.r)(
                ({ event: e }) => (
                  (0, i.DT)(e, "post"),
                  {
                    type: "request",
                    data: {
                      data: e.data.data,
                      expectResponse: !!e.resolvable,
                      type: e.data.type,
                      resolvable: e.resolvable,
                      options: e.options,
                    },
                  }
                )
              ),
              "process pending handshakes": (0, o.a)(
                ({ context: e, enqueue: t }) => {
                  e.handshakeBuffer.forEach((e) => t.raise(e)),
                    t.assign({ handshakeBuffer: [] });
                }
              ),
              "remove request": (0, o.a)(
                ({ context: e, enqueue: t, event: s }) => {
                  (0, i.DT)(s, [
                    "request.success",
                    "request.failed",
                    "request.aborted",
                  ]),
                    (0, u.k)(s.requestId),
                    t.assign({
                      requests: e.requests.filter(
                        ({ id: e }) => e !== s.requestId
                      ),
                    });
                }
              ),
              "send response": (0, u.r)(
                ({ event: e }) => (
                  (0, i.DT)(e, ["message.received", "heartbeat.received"]),
                  {
                    type: "request",
                    data: {
                      type: I,
                      responseTo: e.message.data.id,
                      data: void 0,
                    },
                  }
                )
              ),
              "send handshake syn ack": (0, u.r)({
                type: "request",
                data: { type: $ },
              }),
              "send pending messages": (0, o.a)(({ enqueue: e }) => {
                e.raise(({ context: e }) => ({
                  type: "request",
                  data: e.buffer.map(
                    ({ data: e, resolvable: t, options: s }) => ({
                      data: e.data,
                      type: e.type,
                      expectResponse: !!t,
                      resolvable: t,
                      options: s,
                    })
                  ),
                })),
                  e.emit(({ context: e }) => ({
                    type: "buffer.flushed",
                    messages: e.buffer.map(({ data: e }) => e),
                  })),
                  e.assign({ buffer: [] });
              }),
              "set connection config": (0, a.a)({
                channelId: ({ event: e }) => (
                  (0, i.DT)(e, "handshake.syn"), e.message.data.channelId
                ),
                target: ({ event: e }) => (
                  (0, i.DT)(e, "handshake.syn"), e.message.source || void 0
                ),
                targetOrigin: ({ event: e }) => (
                  (0, i.DT)(e, "handshake.syn"), e.message.origin
                ),
              }),
            },
            guards: { hasSource: ({ context: e }) => null !== e.target },
          }).createMachine({
            id: "node",
            context: ({ input: e }) => ({
              buffer: [],
              channelId: null,
              connectTo: e.connectTo,
              domain: e.domain ?? w,
              handshakeBuffer: [],
              name: e.name,
              requests: [],
              target: void 0,
              targetOrigin: null,
            }),
            invoke: {
              id: "listen for handshake syn",
              src: "listen",
              input: _({ include: j, responseType: "handshake.syn" }),
            },
            on: {
              "request.success": { actions: "remove request" },
              "request.failed": { actions: "remove request" },
              "request.aborted": { actions: "remove request" },
              "handshake.syn": {
                actions: "set connection config",
                target: ".handshaking",
              },
            },
            initial: "idle",
            states: {
              idle: {
                entry: [{ type: "emit status", params: { status: "idle" } }],
                on: { post: { actions: "buffer message" } },
              },
              handshaking: {
                guard: "hasSource",
                entry: [
                  "send handshake syn ack",
                  { type: "emit status", params: { status: "handshaking" } },
                ],
                invoke: [
                  {
                    id: "listen for handshake ack",
                    src: "listen",
                    input: _({
                      include: O,
                      count: 1,
                      responseType: "handshake.complete",
                    }),
                    onDone: "connected",
                  },
                  {
                    id: "listen for disconnect",
                    src: "listen",
                    input: _({
                      include: E,
                      count: 1,
                      responseType: "disconnect",
                    }),
                  },
                  {
                    id: "listen for messages",
                    src: "listen",
                    input: _({ exclude: [E, j, O, T, I] }),
                  },
                ],
                on: {
                  request: { actions: "create request" },
                  post: { actions: "buffer message" },
                  "message.received": { actions: "buffer handshake" },
                  disconnect: { target: "idle" },
                },
              },
              connected: {
                entry: [
                  "process pending handshakes",
                  "send pending messages",
                  { type: "emit status", params: { status: "connected" } },
                ],
                invoke: [
                  {
                    id: "listen for messages",
                    src: "listen",
                    input: _({ exclude: [E, j, O, T, I] }),
                  },
                  {
                    id: "listen for heartbeat",
                    src: "listen",
                    input: _({
                      include: T,
                      responseType: "heartbeat.received",
                    }),
                  },
                  {
                    id: "listen for disconnect",
                    src: "listen",
                    input: _({
                      include: E,
                      count: 1,
                      responseType: "disconnect",
                    }),
                  },
                ],
                on: {
                  request: { actions: "create request" },
                  post: { actions: "post message" },
                  disconnect: { target: "idle" },
                  "message.received": {
                    actions: ["send response", "emit received message"],
                  },
                  "heartbeat.received": {
                    actions: ["send response", "emit heartbeat"],
                  },
                },
              },
            },
          }),
        M = (e, t = q()) => {
          let s,
            n = (0, u.c)(t, { input: e }),
            r = new Map(),
            i = new Map();
          n.on("message", ({ message: e }) => {
            let t = r.get(e.type);
            if (t) return void t.forEach((t) => t(e.data));
            let s = i.get(e.type);
            s ? s.add(e) : i.set(e.type, new Set([e]));
          });
          let o = () => {
            n.stop();
          };
          return {
            actor: n,
            fetch: (e, t, s) => {
              let {
                  responseTimeout: r = 1e4,
                  signal: i,
                  suppressWarnings: o,
                } = s || {},
                a = (function () {
                  let e, t;
                  return "function" == typeof Promise.withResolvers
                    ? Promise.withResolvers()
                    : {
                        promise: new Promise((s, n) => {
                          (e = s), (t = n);
                        }),
                        resolve: e,
                        reject: t,
                      };
                })();
              return (
                n.send({
                  type: "post",
                  data: { type: e, data: t },
                  resolvable: a,
                  options: {
                    responseTimeout: r,
                    signal: i,
                    suppressWarnings: o,
                  },
                }),
                a.promise
              );
            },
            machine: t,
            on: (e, t, s) => {
              let n = r.get(e) || new Set();
              r.has(e) || r.set(e, n), n.add(t);
              let o = i.get(e);
              if (o) {
                let n = s?.replay ?? 1;
                Array.from(o)
                  .slice(-n)
                  .forEach(({ data: e }) => t(e)),
                  i.delete(e);
              }
              return () => {
                n.delete(t);
              };
            },
            onStatus: (e, t) => {
              let { unsubscribe: r } = n.on("status", (n) => {
                (s = n.status), (t && n.status !== t) || e(n.status);
              });
              return s && e(s), r;
            },
            post: (e, t) => {
              n.send({ type: "post", data: { type: e, data: t } });
            },
            start: () => (n.start(), o),
            stop: o,
          };
        };
    },
    65679: (e, t, s) => {
      var n = s(79607);
      s.o(n, "useParams") &&
        s.d(t, {
          useParams: function () {
            return n.useParams;
          },
        }),
        s.o(n, "usePathname") &&
          s.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        s.o(n, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        s.o(n, "useSearchParams") &&
          s.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          }),
        s.o(n, "useServerInsertedHTML") &&
          s.d(t, {
            useServerInsertedHTML: function () {
              return n.useServerInsertedHTML;
            },
          });
    },
    70484: (e, t, s) => {
      s.d(t, { Fk: () => l, jF: () => c, v$: () => d, vY: () => h });
      var n = s(50875);
      let r = {
          "handshake/syn": n.Tx,
          "handshake/syn-ack": n.Rr,
          "handshake/ack": n.IM,
          "channel/response": n._K,
          "channel/heartbeat": n.vd,
          "channel/disconnect": n.FS,
          "overlay/focus": "visual-editing/focus",
          "overlay/navigate": "visual-editing/navigate",
          "overlay/toggle": "visual-editing/toggle",
          "presentation/toggleOverlay": "presentation/toggle-overlay",
        },
        i = {
          [n.Tx]: "handshake/syn",
          [n.Rr]: "handshake/syn-ack",
          [n.IM]: "handshake/ack",
          [n._K]: "channel/response",
          [n.vd]: "channel/heartbeat",
          [n.FS]: "channel/disconnect",
          "visual-editing/focus": "overlay/focus",
          "visual-editing/navigate": "overlay/navigate",
          "visual-editing/toggle": "overlay/toggle",
          "presentation/toggle-overlay": "presentation/toggleOverlay",
        },
        o = (e) => {
          let { data: t } = e;
          return (
            t &&
              "object" == typeof t &&
              "domain" in t &&
              "type" in t &&
              "from" in t &&
              "to" in t &&
              ("sanity/channels" === t.domain && (t.domain = n.V2),
              "overlays" === t.to && (t.to = "visual-editing"),
              "overlays" === t.from && (t.from = "visual-editing"),
              (t.channelId = t.connectionId),
              delete t.connectionId,
              (t.type = r[t.type] ?? t.type)),
            e
          );
        },
        a = (e) => {
          let { channelId: t, ...s } = e,
            r = { ...s, connectionId: t };
          return (
            r.domain === n.V2 && (r.domain = "sanity/channels"),
            "visual-editing" === r.to && (r.to = "overlays"),
            "visual-editing" === r.from && (r.from = "overlays"),
            (r.type = i[r.type] ?? r.type),
            "channel/response" === r.type &&
              r.responseTo &&
              !r.data &&
              (r.data = { responseTo: r.responseTo }),
            ("handshake/syn" === r.type ||
              "handshake/syn-ack" === r.type ||
              "handshake/ack" === r.type) &&
              (r.data = { id: r.connectionId }),
            r
          );
        },
        u = ({ context: e }, t) => {
          let { sources: s, targetOrigin: n } = e,
            r = a(t.message);
          s.forEach((e) => {
            e.postMessage(r, { targetOrigin: n });
          });
        },
        c = () => ({
          listen: (0, n.CC)(o),
          requestMachine: (0, n.tP)().provide({
            actions: { "send message": u },
          }),
        });
      function l() {
        return window.self !== window.top;
      }
      function d() {
        return !!window.opener;
      }
      function h() {
        return l() || d();
      }
    },
    71674: (e, t, s) => {
      s.d(t, {
        El: () => l,
        Hi: () => u,
        NL: () => i,
        kN: () => a,
        lc: () => d,
        sq: () => c,
      });
      let n = new Set(),
        r = "checking";
      function i(e) {
        if (r !== e) for (let t of ((r = e), n)) t();
      }
      let o = new Set();
      function a(e) {
        for (let e of o) e();
      }
      let u = new Set(),
        c = null;
      function l(e) {
        for (let t of ((c = e), u)) t();
      }
      function d(e, t) {
        for (let e of u) e();
      }
    },
    73821: (e, t, s) => {
      s.d(t, { default: () => o });
      var n = s(48983),
        r = s(29599);
      let i = (0, r.lazy)(() =>
        Promise.all([
          s.e(311),
          s.e(2307),
          s.e(3310),
          s.e(8202),
          s.e(4311),
          s.e(3019),
        ]).then(s.bind(s, 84311))
      );
      function o(e) {
        return (0, n.jsx)(r.Suspense, {
          fallback: null,
          children: (0, n.jsx)(i, { ...e }),
        });
      }
    },
    78685: (e, t, s) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = s(48983),
        r = s(29599),
        i = s(19842);
      function o(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      s(28655);
      let a = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        u = function (e) {
          let t = { ...a, ...e },
            s = (0, r.lazy)(() => t.loader().then(o)),
            u = t.loading;
          function c(e) {
            let o = u
                ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              a = !t.ssr || !!t.loading,
              c = a ? r.Suspense : r.Fragment,
              l = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [null, (0, n.jsx)(s, { ...e })],
                  })
                : (0, n.jsx)(i.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(s, { ...e }),
                  });
            return (0, n.jsx)(c, {
              ...(a ? { fallback: o } : {}),
              children: l,
            });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    90828: (e, t, s) => {
      s.d(t, { a: () => y, b: () => h, e: () => a, s: () => f });
      var n = s(29448),
        r = s(10892);
      function i(e, t, s, n, { event: r }) {
        return [t, { event: "function" == typeof r ? r(s, n) : r }, void 0];
      }
      function o(e, { event: t }) {
        e.defer(() => e.emit(t));
      }
      function a(e) {
        function t(e, t) {}
        return (
          (t.type = "xstate.emit"),
          (t.event = e),
          (t.resolve = i),
          (t.execute = o),
          t
        );
      }
      let u = (function (e) {
        return (e.Parent = "#_parent"), (e.Internal = "#_internal"), e;
      })({});
      function c(e, t, s, n, { to: r, event: i, id: o, delay: a }, c) {
        let l,
          d,
          h = t.machine.implementations.delays;
        if ("string" == typeof i)
          throw Error(
            `Only event objects may be used with sendTo; use sendTo({ type: "${i}" }) instead`
          );
        let f = "function" == typeof i ? i(s, n) : i;
        if ("string" == typeof a) {
          let e = h && h[a];
          l = "function" == typeof e ? e(s, n) : e;
        } else l = "function" == typeof a ? a(s, n) : a;
        let p = "function" == typeof r ? r(s, n) : r;
        if ("string" == typeof p) {
          if (
            !(d =
              p === u.Parent
                ? e.self._parent
                : p === u.Internal
                ? e.self
                : p.startsWith("#_")
                ? t.children[p.slice(2)]
                : c.deferredActorIds?.includes(p)
                ? p
                : t.children[p])
          )
            throw Error(
              `Unable to send event to actor '${p}' from machine '${t.machine.id}'.`
            );
        } else d = p || e.self;
        return [
          t,
          {
            to: d,
            targetId: "string" == typeof p ? p : void 0,
            event: f,
            id: o,
            delay: l,
          },
          void 0,
        ];
      }
      function l(e, t, s) {
        "string" == typeof s.to && (s.to = t.children[s.to]);
      }
      function d(e, t) {
        e.defer(() => {
          let { to: s, event: r, delay: i, id: o } = t;
          if ("number" == typeof i)
            return void e.system.scheduler.schedule(e.self, s, r, i, o);
          e.system._relay(
            e.self,
            s,
            r.type === n.T ? (0, n.U)(e.self.id, r.data) : r
          );
        });
      }
      function h(e, t, s) {
        function n(e, t) {}
        return (
          (n.type = "xstate.sendTo"),
          (n.to = e),
          (n.event = t),
          (n.id = s?.id),
          (n.delay = s?.delay),
          (n.resolve = c),
          (n.retryResolve = l),
          (n.execute = d),
          n
        );
      }
      function f(e, t) {
        return h(u.Parent, e, t);
      }
      function p(e, t, s, i, { collect: o }) {
        let u = [],
          c = function (e) {
            u.push(e);
          };
        return (
          (c.assign = (...e) => {
            u.push((0, r.a)(...e));
          }),
          (c.cancel = (...e) => {
            u.push((0, n.f)(...e));
          }),
          (c.raise = (...e) => {
            u.push((0, n.r)(...e));
          }),
          (c.sendTo = (...e) => {
            u.push(h(...e));
          }),
          (c.sendParent = (...e) => {
            u.push(f(...e));
          }),
          (c.spawnChild = (...e) => {
            u.push((0, n.h)(...e));
          }),
          (c.stopChild = (...e) => {
            u.push((0, n.k)(...e));
          }),
          (c.emit = (...e) => {
            u.push(a(...e));
          }),
          o(
            {
              context: s.context,
              event: s.event,
              enqueue: c,
              check: (e) => (0, n.w)(e, t.context, s.event, t),
              self: e.self,
              system: e.system,
            },
            i
          ),
          [t, void 0, u]
        );
      }
      function y(e) {
        function t(e, t) {}
        return (
          (t.type = "xstate.enqueueActions"),
          (t.collect = e),
          (t.resolve = p),
          t
        );
      }
    },
  },
]);
