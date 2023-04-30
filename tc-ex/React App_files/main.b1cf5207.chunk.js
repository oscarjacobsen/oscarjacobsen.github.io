(this["webpackJsonpmy-test-app"] = this["webpackJsonpmy-test-app"] || []).push([
  [0],
  {
    32: function (e, t, n) {},
    38: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        s = n.n(c),
        r = n(7),
        a = n.n(r),
        i = (n(32), n(25)),
        o = {
          extension: "render_tc_embed_api",
          embed: "render_tc_extension_api",
        },
        l = "Projects",
        d = "Explorer",
        j = "3DViewer",
        m = n(8),
        u = n(6),
        b = n(5),
        h = n(9),
        O = n(10),
        x = n(11),
        p = n(16),
        f = n(19),
        g = n(4),
        v = n(18),
        S = n(2),
        k = !Object({
          NODE_ENV: "production",
          PUBLIC_URL: "/trimble-connect-workspace-api/examples",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
        }).REACT_APP_ENV_URL,
        I = (function (e) {
          Object(p.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var c;
            return (
              Object(O.a)(this, n),
              ((c = t.call(this, e)).iframeElement = void 0),
              (c.API = void 0),
              (c.getEnvironment = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "";
                if (e) {
                  if ("int" === e) return "web.int";
                  if ("qa" === e) return "web.qa";
                  if ("stage" === e) return "web.stage";
                  if ("prod" === e) return "web";
                }
                return "web";
              }),
              (c.getIFrameSrc = function () {
                var e = c.state,
                  t = e.env,
                  n = e.embedModule,
                  s = e.projectId;
                return "local" === t
                  ? "http://localhost:9000/".concat(
                      n === j && s ? "?projectId=".concat(s) : ""
                    )
                  : "https://"
                      .concat(c.getEnvironment(t), ".connect.trimble.com/")
                      .concat(
                        n === j
                          ? "projects/".concat(s || "undefined", "/viewer/3d")
                          : ""
                      );
              }),
              (c.unLoadEmbed = function () {
                c.iframeElement &&
                  c.iframeElement.current &&
                  ((c.iframeElement.current.src = ""),
                  (c.iframeElement.current.hidden = !0));
              }),
              (c.doConnect = Object(h.a)(
                Object(b.a)().mark(function e() {
                  var t, n, s, r, a, i, o, j, m, O;
                  return Object(b.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = c.state),
                            (n = t.projectId),
                            (s = t.folderId),
                            (r = void 0 === s ? "" : s),
                            (a = t.accessToken),
                            (i = t.refreshToken),
                            (o = t.embedModule),
                            (j = t.projectEmbedFeatures),
                            (m = ""),
                            a)
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (o !== d) {
                            e.next = 6;
                            break;
                          }
                          if (n) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          if (
                            ((m = "".concat(
                              c.getIFrameSrc(),
                              "?isEmbedded=true"
                            )),
                            c.iframeElement)
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          return (
                            ((O = c.iframeElement.current).src = m),
                            (O.hidden = !1),
                            (e.next = 14),
                            Object(v.a)(
                              O,
                              (function () {
                                var e = Object(h.a)(
                                  Object(b.a)().mark(function e(t, n) {
                                    return Object(b.a)().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            console.log("embed:event", t, n);
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t, n) {
                                  return e.apply(this, arguments);
                                };
                              })(),
                              3e4
                            )
                          );
                        case 14:
                          return (
                            (c.API = e.sent),
                            (e.next = 17),
                            c.API.embed.setTokens({
                              accessToken: a,
                              refreshToken: i,
                            })
                          );
                        case 17:
                          o === d
                            ? c.API.embed.initFileExplorer({
                                projectId: n,
                                folderId: r,
                              })
                            : o === l &&
                              c.API.embed.initProjectList({
                                projectEmbedFeatures: Object(u.a)(
                                  Object(u.a)({}, j),
                                  {},
                                  { enableRegion: "", embedViewMode: "list" }
                                ),
                              });
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (c.iframeElement = s.a.createRef()),
              (c.state = {
                accessToken: "",
                projectId: "",
                rootId: "",
                folderId: "",
                renderExplorer: !1,
                env: "prod",
                projectEmbedFeatures: {
                  enableRegion: !1,
                  enableNewProject: !1,
                  enableCloneProject: !1,
                  enableLeaveProject: !1,
                  enableThumbnail: !1,
                },
                embedModule: "",
              }),
              c
            );
          }
          return (
            Object(x.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.isSubmitClicked,
                    c = void 0 !== n && n,
                    s = t.embedModule,
                    r = void 0 === s ? "" : s,
                    a = this.getIFrameSrc();
                  return Object(S.jsxs)(g.d, {
                    children: [
                      Object(S.jsx)(g.p, {
                        className: "section",
                        children: Object(S.jsxs)(g.c, {
                          md: "12",
                          children: [
                            Object(S.jsx)("h3", {
                              style: { margin: "10px" },
                              children:
                                "Trimble connect Workspace API - Embed Example",
                            }),
                            Object(S.jsxs)(g.a, {
                              color: "primary",
                              children: [
                                "All fields marked with * are required.",
                                a &&
                                  Object(S.jsxs)(S.Fragment, {
                                    children: [
                                      Object(S.jsx)("br", {}),
                                      "URL :",
                                      " ",
                                      Object(S.jsx)("span", {
                                        style: {
                                          fontStyle: "italic",
                                          color: "green",
                                        },
                                        children: a,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            Object(S.jsxs)(g.g, {
                              row: !0,
                              className: "my-3",
                              children: [
                                Object(S.jsx)(g.j, {
                                  for: "selectEnv",
                                  sm: 2,
                                  children: "Modules",
                                }),
                                Object(S.jsx)(g.c, {
                                  sm: 10,
                                  children: Object(S.jsxs)(g.h, {
                                    id: "Modules",
                                    name: "module",
                                    type: "select",
                                    onChange: function (t) {
                                      return e.setState({
                                        embedModule: t.target.value,
                                      });
                                    },
                                    defaultValue: this.state.embedModule,
                                    children: [
                                      Object(S.jsx)("option", {
                                        children: "Select",
                                      }),
                                      Object(S.jsx)("option", { children: d }),
                                      Object(S.jsx)("option", { children: l }),
                                      Object(S.jsx)("option", { children: j }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(S.jsxs)(g.g, {
                              row: !0,
                              className: "my-3",
                              children: [
                                Object(S.jsx)(g.j, {
                                  for: "selectEnv",
                                  sm: 2,
                                  children: "Environment",
                                }),
                                Object(S.jsx)(g.c, {
                                  sm: 10,
                                  children: Object(S.jsxs)(g.h, {
                                    id: "selectEnv",
                                    name: "env",
                                    type: "select",
                                    onChange: function (t) {
                                      return e.setState({
                                        env: t.target.value,
                                      });
                                    },
                                    defaultValue: "prod",
                                    children: [
                                      Object(S.jsx)("option", {
                                        children: "prod",
                                      }),
                                      Object(S.jsx)("option", {
                                        children: "local",
                                      }),
                                      !k &&
                                        Object(S.jsxs)(S.Fragment, {
                                          children: [
                                            Object(S.jsx)("option", {
                                              children: "int",
                                            }),
                                            Object(S.jsx)("option", {
                                              children: "qa",
                                            }),
                                            Object(S.jsx)("option", {
                                              children: "stage",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(S.jsxs)(g.g, {
                              row: !0,
                              className: "my-3",
                              children: [
                                Object(S.jsx)(g.j, {
                                  for: "accessToken",
                                  sm: 2,
                                  children: "AccessToken",
                                }),
                                Object(S.jsxs)(g.c, {
                                  sm: 10,
                                  children: [
                                    Object(S.jsx)(
                                      g.h,
                                      Object(u.a)(
                                        {
                                          type: "text",
                                          id: "accessToken",
                                          className: "form-control",
                                          onChange: function (t) {
                                            return e.setState({
                                              accessToken:
                                                t.currentTarget.value,
                                            });
                                          },
                                          defaultValue: this.state.accessToken,
                                          placeholder: "Access Token *",
                                        },
                                        c
                                          ? this.state.accessToken
                                            ? { valid: !0 }
                                            : { invalid: !0 }
                                          : null
                                      )
                                    ),
                                    Object(S.jsx)(g.f, {
                                      children:
                                        "Oh noes! accessToken is required!",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(S.jsxs)(g.g, {
                              row: !0,
                              className: "my-3",
                              children: [
                                Object(S.jsx)(g.j, {
                                  for: "refreshToken",
                                  sm: 2,
                                  children: "RefreshToken",
                                }),
                                Object(S.jsx)(g.c, {
                                  sm: 10,
                                  children: Object(S.jsx)(g.h, {
                                    type: "text",
                                    id: "refreshToken",
                                    className: "form-control",
                                    onChange: function (t) {
                                      return e.setState({
                                        refreshToken: t.currentTarget.value,
                                      });
                                    },
                                    defaultValue: this.state.refreshToken,
                                    placeholder: "Refresh Token",
                                  }),
                                }),
                              ],
                            }),
                            r === d &&
                              Object(S.jsxs)(S.Fragment, {
                                children: [
                                  Object(S.jsxs)(g.g, {
                                    row: !0,
                                    className: "my-3",
                                    children: [
                                      Object(S.jsx)(g.j, {
                                        for: "projectId",
                                        sm: 2,
                                        children: "Project ID",
                                      }),
                                      Object(S.jsxs)(g.c, {
                                        sm: 10,
                                        children: [
                                          Object(S.jsx)(
                                            g.h,
                                            Object(u.a)(
                                              {
                                                id: "projectId",
                                                type: "text",
                                                className: "form-control",
                                                onChange: function (t) {
                                                  return e.setState({
                                                    projectId:
                                                      t.currentTarget.value,
                                                  });
                                                },
                                                defaultValue:
                                                  this.state.projectId,
                                                placeholder: "Project ID *",
                                              },
                                              c
                                                ? this.state.projectId
                                                  ? { valid: !0 }
                                                  : { invalid: !0 }
                                                : null
                                            )
                                          ),
                                          Object(S.jsx)(g.f, {
                                            children:
                                              "Oh noes! Project ID is required!",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(S.jsxs)(g.g, {
                                    row: !0,
                                    className: "my-3",
                                    children: [
                                      Object(S.jsx)(g.j, {
                                        for: "folderId",
                                        sm: 2,
                                        children: "Folder ID",
                                      }),
                                      Object(S.jsx)(g.c, {
                                        sm: 10,
                                        children: Object(S.jsx)(g.h, {
                                          id: "folderId",
                                          type: "text",
                                          className: "form-control",
                                          onChange: function (t) {
                                            return e.setState({
                                              folderId: t.currentTarget.value,
                                            });
                                          },
                                          defaultValue: this.state.folderId,
                                          placeholder: "Folder ID",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            r === l &&
                              Object(S.jsx)(S.Fragment, {
                                children: Object.keys(
                                  this.state.projectEmbedFeatures
                                ).map(function (t) {
                                  return Object(S.jsxs)(
                                    "div",
                                    {
                                      className: "form-check form-switch",
                                      children: [
                                        Object(S.jsx)("input", {
                                          className: "form-check-input",
                                          type: "checkbox",
                                          id: t,
                                          onChange: function (n) {
                                            return e.setState({
                                              projectEmbedFeatures: Object(u.a)(
                                                Object(u.a)(
                                                  {},
                                                  e.state.projectEmbedFeatures
                                                ),
                                                {},
                                                Object(m.a)(
                                                  {},
                                                  t,
                                                  n.target.checked
                                                )
                                              ),
                                            });
                                          },
                                        }),
                                        Object(S.jsx)("label", {
                                          className: "form-check-label",
                                          htmlFor: t,
                                          children: t.replace(
                                            "enable",
                                            e.state.projectEmbedFeatures[t]
                                              ? "Disable "
                                              : "Enable "
                                          ),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              }),
                            r === j &&
                              Object(S.jsxs)(g.g, {
                                row: !0,
                                className: "my-3",
                                children: [
                                  Object(S.jsx)(g.j, {
                                    for: "projectId",
                                    sm: 2,
                                    children: "Project ID",
                                  }),
                                  Object(S.jsx)(g.c, {
                                    sm: 10,
                                    children: Object(S.jsx)(g.h, {
                                      id: "projectId",
                                      type: "text",
                                      className: "form-control",
                                      onChange: function (t) {
                                        return e.setState({
                                          projectId: t.currentTarget.value,
                                        });
                                      },
                                      defaultValue: this.state.projectId,
                                      placeholder: "Project ID",
                                    }),
                                  }),
                                ],
                              }),
                            r &&
                              Object(S.jsxs)(g.c, {
                                className: "my-4",
                                children: [
                                  Object(S.jsx)(g.b, {
                                    type: "button",
                                    color: "primary",
                                    onClick: function () {
                                      e.setState({ isSubmitClicked: !0 }),
                                        e.unLoadEmbed(),
                                        e.doConnect();
                                    },
                                    children: "Submit",
                                  }),
                                  Object(S.jsx)(g.b, {
                                    type: "button",
                                    className: "mx-3",
                                    onClick: function () {
                                      return e.unLoadEmbed();
                                    },
                                    children: "Load with Null",
                                  }),
                                  Object(S.jsx)(g.b, {
                                    type: "button",
                                    color: "primary",
                                    children: "Update Token",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      Object(S.jsx)("iframe", {
                        hidden: !0,
                        ref: this.iframeElement,
                        sandbox:
                          "allow-scripts allow-modals allow-forms allow-same-origin allow-popups",
                        width: "100%",
                        height: "700px",
                        title: "File Explorer",
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(s.a.Component),
        T = I,
        y = n(13),
        E = n(24),
        C = n.n(E),
        P = Object({
          NODE_ENV: "production",
          PUBLIC_URL: "/trimble-connect-workspace-api/examples",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
        }).REACT_APP_ENV_URL
          ? ".".concat(
              Object({
                NODE_ENV: "production",
                PUBLIC_URL: "/trimble-connect-workspace-api/examples",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }).REACT_APP_ENV_URL,
              "."
            )
          : ".",
        M = "https://oscarjacobsen.no/tc-ex/favicon.png",
        w = (function (e) {
          Object(p.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var c;
            return (
              Object(O.a)(this, n),
              ((c = t.call(this, e)).API = void 0),
              (c.addSubMenu = function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  c.onCancel(),
                  c.setState({
                    modal: !0,
                    formData: { title: "", icon: "", command: "" },
                  });
              }),
              (c.onCancel = function () {
                c.setState({
                  modal: !1,
                  editMenu: void 0,
                  formData: void 0,
                  editIndex: void 0,
                });
              }),
              (c.editMainMenu = function () {
                var e = Object(u.a)({}, c.state.mainMenu);
                c.setState({ modal: !0, editMenu: "mainMenu", formData: e });
              }),
              (c.setActiveCommand = function (e, t) {
                e.preventDefault(),
                  e.stopPropagation(),
                  c.setState({ activeCommand: t });
              }),
              (c.updateStatus = function () {
                var e = c.state.statusMessage,
                  t = void 0 === e ? "" : e;
                c.API && c.API.extension.setStatusMessage(t);
              }),
              (c.getProjectDetails = function () {
                c.API &&
                  c.API.project.getProject().then(function (e) {
                    return c.setState({ projectInfo: e });
                  });
              }),
              (c.getUserSettings = function () {
                c.API &&
                  c.API.user.getUser().then(function (e) {
                    return c.setState({ userSettings: e });
                  });
              }),
              (c.getAccessToken = function () {
                c.API &&
                  c.API.extension
                    .getPermission("accesstoken")
                    .then(function (e) {
                      return c.setState({ accessToken: e });
                    });
              }),
              (c.goTo = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "settings-extensions";
                c.API && c.API.extension.goTo(e);
              }),
              (c.toggle = function () {
                return c.setState({ modal: !c.state.modal });
              }),
              (c.onChange = function (e) {
                c.setState({
                  formData: Object(u.a)(
                    Object(u.a)({}, c.state.formData),
                    {},
                    Object(m.a)({}, e.target.name, e.target.value)
                  ),
                });
              }),
              (c.onSave = function () {
                var e = c.state,
                  t = e.formData,
                  n = e.editMenu,
                  s = e.editIndex,
                  r = void 0 === s ? 0 : s,
                  a = e.subMenuItems,
                  i = void 0 === a ? [] : a;
                if (t)
                  if ("mainMenu" === n)
                    c.setState({ mainMenu: Object(u.a)({}, t) });
                  else if ("subMenuItems" === n) {
                    if (0 === i.length) return;
                    var o = i.map(function (e, n) {
                      return n === r ? Object(u.a)({}, t) : e;
                    });
                    c.setState({ subMenuItems: Object(y.a)(o) });
                  } else
                    c.setState({
                      subMenuItems: [].concat(Object(y.a)(i), [
                        Object(u.a)({}, t),
                      ]),
                    }),
                      c.onCancel();
              }),
              (c.editSubmenu = function (e, t) {
                e.preventDefault(), e.stopPropagation();
                var n = Object(u.a)({}, c.state.subMenuItems[t]);
                c.setState({
                  modal: !0,
                  editMenu: "subMenuItems",
                  editIndex: t,
                  formData: n,
                });
              }),
              (c.removeSubmenu = function (e, t) {
                e.preventDefault(), e.stopPropagation();
                var n = Object(y.a)(c.state.subMenuItems);
                n.splice(t, 1), c.setState({ subMenuItems: Object(y.a)(n) });
              }),
              (c.state = {
                mainMenu: {
                  title: "Test React app",
                  icon: M,
                  command: "main_nav_menu_cliked",
                },
                subMenuItems: [
                  { title: "Extension API", icon: M, command: o.extension },
                  { title: "Embed API", icon: M, command: o.embed },
                ],
                accessToken: "",
              }),
              c
            );
          }
          return (
            Object(x.a)(n, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(h.a)(
                    Object(b.a)().mark(function e() {
                      var t,
                        n,
                        c,
                        s,
                        r,
                        a,
                        i = this;
                      return Object(b.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (c = this.state),
                                  (s = c.mainMenu),
                                  (r = c.subMenuItems),
                                  (a = void 0 === r ? [] : r),
                                  (e.next = 3),
                                  Object(v.a)(
                                    window.parent,
                                    function (e, t) {
                                      if (null !== t && void 0 !== t && t.data)
                                        switch (e) {
                                          case "extension.command":
                                            "string" ===
                                              typeof (null === t || void 0 === t
                                                ? void 0
                                                : t.data) &&
                                              Object.values(o).includes(
                                                t.data
                                              ) &&
                                              i.props.setAPIType(t.data),
                                              i.setState({
                                                alertMessage:
                                                  "Command executed by the user {command:".concat(
                                                    t.data,
                                                    "}"
                                                  ),
                                              });
                                            break;
                                          case "extension.accessToken":
                                            i.setState({ accessToken: t.data });
                                            break;
                                          case "extension.userSettingsChanged":
                                            i.setState({
                                              alertMessage:
                                                "User settings changed!",
                                            }),
                                              i.getUserSettings();
                                        }
                                    },
                                    3e4
                                  )
                                );
                              case 3:
                                (this.API = e.sent),
                                  null === (t = this.API) ||
                                    void 0 === t ||
                                    null === (n = t.ui) ||
                                    void 0 === n ||
                                    n
                                      .setMenu(
                                        Object(u.a)(
                                          Object(u.a)({}, s),
                                          {},
                                          { subMenus: Object(y.a)(a) }
                                        )
                                      )
                                      .then();
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.mainMenu,
                    c = t.subMenuItems,
                    s = void 0 === c ? [] : c,
                    r = t.activeCommand,
                    a = t.modal,
                    i = void 0 !== a && a,
                    o = t.formData,
                    l = void 0 === o ? {} : o,
                    d = t.alertMessage,
                    j = t.statusMessage,
                    m = void 0 === j ? "" : j,
                    u = t.projectInfo,
                    b = void 0 === u ? {} : u,
                    h = t.userSettings,
                    O = void 0 === h ? {} : h,
                    x = t.accessToken,
                    p = void 0 === x ? "" : x;
                  return (
                    console.log(P),
                    Object(S.jsxs)(g.d, {
                      children: [
                        Object(S.jsxs)(g.p, {
                          className: "section",
                          children: [
                            d &&
                              Object(S.jsx)(g.c, {
                                md: "12",
                                children: Object(S.jsx)(g.a, {
                                  color: "success",
                                  isOpen: !!d,
                                  toggle: function () {
                                    return e.setState({ alertMessage: void 0 });
                                  },
                                  fade: !1,
                                  children: d,
                                }),
                              }),
                            Object(S.jsxs)(g.c, {
                              md: "12",
                              children: [
                                Object(S.jsxs)("h3", {
                                  children: [
                                    "Example: ",
                                    Object(S.jsx)("i", {
                                      children: "ui.setMenu",
                                    }),
                                    " & ",
                                    Object(S.jsx)("i", {
                                      children: "ui.setActiveMenuItem",
                                    }),
                                  ],
                                }),
                                Object(S.jsxs)("p", {
                                  children: [
                                    "Dynamically manage the submenu items. (",
                                    Object(S.jsx)("strong", {
                                      children: "Menu Title",
                                    }),
                                    ":",
                                    Object(S.jsx)("i", { children: "command" }),
                                    ")",
                                    " ",
                                    Object(S.jsx)(g.b, {
                                      color: "primary",
                                      size: "sm",
                                      style: { marginLeft: "2rem" },
                                      onClick: this.addSubMenu,
                                      children: "Add sub-menu",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(S.jsx)(g.c, {
                              md: "12",
                              children: Object(S.jsxs)(g.k, {
                                children: [
                                  Object(S.jsxs)(g.l, {
                                    tag: "div",
                                    className: "menu-item",
                                    children: [
                                      Object(S.jsxs)("div", {
                                        children: [
                                          n.icon &&
                                            Object(S.jsx)("img", {
                                              src: n.icon,
                                              className: "sml-img",
                                              alt: "",
                                            }),
                                          Object(S.jsx)("strong", {
                                            children: n.title,
                                          }),
                                          ":",
                                          Object(S.jsx)("i", {
                                            children: n.command,
                                          }),
                                          Object(S.jsx)(g.b, {
                                            color: "info",
                                            size: "sm",
                                            style: { marginLeft: "2rem" },
                                            onClick: this.editMainMenu,
                                            children: "Edit",
                                          }),
                                        ],
                                      }),
                                      Object(S.jsx)("div", {
                                        children: "Main-menu",
                                      }),
                                    ],
                                  }),
                                  s.map(function (t, n) {
                                    return Object(S.jsxs)(
                                      g.l,
                                      {
                                        tag: "a",
                                        href: "#",
                                        className: "menu-item submenu",
                                        active: r && r === t.command,
                                        onClick: function (n) {
                                          return e.setActiveCommand(
                                            n,
                                            t.command + "?payload=testdatanew"
                                          );
                                        },
                                        children: [
                                          Object(S.jsxs)("div", {
                                            children: [
                                              t.icon &&
                                                Object(S.jsx)("img", {
                                                  src: t.icon,
                                                  className: "sml-img",
                                                  alt: "",
                                                }),
                                              Object(S.jsx)("strong", {
                                                children: t.title,
                                              }),
                                              ":",
                                              Object(S.jsx)("i", {
                                                children: t.command,
                                              }),
                                              " ",
                                              Object(S.jsx)(g.b, {
                                                color: "info",
                                                size: "sm",
                                                style: { marginLeft: "2rem" },
                                                onClick: function (t) {
                                                  return e.editSubmenu(t, n);
                                                },
                                                children: "Edit",
                                              }),
                                              Object(S.jsx)(g.b, {
                                                color: "danger",
                                                size: "sm",
                                                style: { marginLeft: "2rem" },
                                                onClick: function (t) {
                                                  return e.removeSubmenu(t, n);
                                                },
                                                children: "Remove",
                                              }),
                                            ],
                                          }),
                                          Object(S.jsx)("div", {
                                            children: "Sub-menu",
                                          }),
                                        ],
                                      },
                                      t.command
                                    );
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(S.jsxs)(g.p, {
                          className: "section",
                          children: [
                            Object(S.jsxs)(g.c, {
                              md: "12",
                              children: [
                                Object(S.jsxs)("h3", {
                                  children: [
                                    "Example: ",
                                    Object(S.jsx)("i", {
                                      children: "extension.setStatusMessage",
                                    }),
                                  ],
                                }),
                                Object(S.jsx)("p", {
                                  children:
                                    "Dynamically update the extension status message.",
                                }),
                              ],
                            }),
                            Object(S.jsx)(g.c, {
                              md: "12",
                              children: Object(S.jsxs)(g.i, {
                                children: [
                                  Object(S.jsx)(g.h, {
                                    onChange: function (t) {
                                      return e.setState({
                                        statusMessage: t.target.value,
                                      });
                                    },
                                    defaultValue: m,
                                  }),
                                  Object(S.jsx)(g.b, {
                                    color: "primary",
                                    onClick: this.updateStatus,
                                    children: "Update",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(S.jsxs)(g.p, {
                          className: "section",
                          children: [
                            Object(S.jsxs)(g.c, {
                              md: "12",
                              children: [
                                Object(S.jsxs)("h3", {
                                  children: [
                                    "Example: ",
                                    Object(S.jsx)("i", {
                                      children: "project.getCurrentProject",
                                    }),
                                  ],
                                }),
                                Object(S.jsxs)("p", {
                                  children: [
                                    "Get the current project details.",
                                    " ",
                                    Object(S.jsx)(g.b, {
                                      color: "primary",
                                      size: "sm",
                                      style: { marginLeft: "2rem" },
                                      onClick: this.getProjectDetails,
                                      children: "Get Project",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(S.jsx)(g.c, {
                              md: "12",
                              children: Object(S.jsx)(C.a, { src: b }),
                            }),
                          ],
                        }),
                        Object(S.jsxs)(g.p, {
                          className: "section",
                          children: [
                            Object(S.jsxs)(g.c, {
                              md: "12",
                              children: [
                                Object(S.jsxs)("h3", {
                                  children: [
                                    "Example: ",
                                    Object(S.jsx)("i", {
                                      children: "user.getUserSettings",
                                    }),
                                  ],
                                }),
                                Object(S.jsxs)("p", {
                                  children: [
                                    "Get the current user settings details.",
                                    " ",
                                    Object(S.jsx)(g.b, {
                                      color: "primary",
                                      size: "sm",
                                      style: { marginLeft: "2rem" },
                                      onClick: this.getUserSettings,
                                      children: "Get User Settings",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(S.jsx)(g.c, {
                              md: "12",
                              children: Object(S.jsx)(g.e, {
                                children: Object.keys(O).map(function (e) {
                                  var t = O[e];
                                  return Object(S.jsxs)(
                                    g.g,
                                    {
                                      row: !0,
                                      style: { marginBottom: "1rem" },
                                      children: [
                                        Object(S.jsx)(g.j, {
                                          for: e,
                                          sm: 2,
                                          className: "capz",
                                          children: e,
                                        }),
                                        Object(S.jsx)(g.c, {
                                          sm: 10,
                                          children: Object(S.jsx)(g.h, {
                                            type: "text",
                                            name: e,
                                            id: e,
                                            defaultValue: t,
                                            readOnly: !0,
                                          }),
                                        }),
                                      ],
                                    },
                                    e
                                  );
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(S.jsxs)(g.p, {
                          className: "section",
                          children: [
                            Object(S.jsxs)(g.c, {
                              md: "12",
                              children: [
                                Object(S.jsxs)("h3", {
                                  children: [
                                    "Example: ",
                                    Object(S.jsx)("i", {
                                      children: "extension.getPermission",
                                    }),
                                  ],
                                }),
                                Object(S.jsxs)("p", {
                                  children: [
                                    "Request the accessToken.",
                                    " ",
                                    Object(S.jsx)(g.b, {
                                      color: "primary",
                                      size: "sm",
                                      style: { marginLeft: "2rem" },
                                      onClick: this.getAccessToken,
                                      children: "Get accessToken",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(S.jsx)(g.c, {
                              md: "12",
                              children: Object(S.jsx)(g.e, {
                                children: Object(S.jsxs)(g.g, {
                                  row: !0,
                                  style: { marginBottom: "1rem" },
                                  children: [
                                    Object(S.jsx)(g.j, {
                                      for: "accessToken",
                                      sm: 2,
                                      className: "capz",
                                      children: "AccessToken",
                                    }),
                                    Object(S.jsx)(g.c, {
                                      sm: 10,
                                      children: Object(S.jsx)(g.h, {
                                        type: "text",
                                        name: "accessToken",
                                        id: "accessToken",
                                        defaultValue: p,
                                        readOnly: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(S.jsx)(g.p, {
                          className: "section",
                          children: Object(S.jsxs)(g.c, {
                            md: "12",
                            children: [
                              Object(S.jsxs)("h3", {
                                children: [
                                  "Example: ",
                                  Object(S.jsx)("i", {
                                    children: "extension.goTo",
                                  }),
                                ],
                              }),
                              Object(S.jsxs)("p", {
                                children: [
                                  "Go to a specific route/page.",
                                  " ",
                                  Object(S.jsx)(g.b, {
                                    color: "primary",
                                    size: "sm",
                                    style: { marginLeft: "2rem" },
                                    onClick: function () {
                                      return e.goTo();
                                    },
                                    children: "Click here",
                                  }),
                                ],
                              }),
                              Object(S.jsxs)("p", {
                                children: [
                                  "Go to the project settings page.",
                                  " ",
                                  Object(S.jsx)(g.b, {
                                    color: "primary",
                                    size: "sm",
                                    style: { marginLeft: "2rem" },
                                    onClick: function () {
                                      return e.goTo("settings-details");
                                    },
                                    children: "Click here",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(S.jsxs)(g.m, {
                          isOpen: i,
                          toggle: this.toggle,
                          children: [
                            Object(S.jsx)("div", {
                              className: "modal-header",
                              children: Object(S.jsx)("h5", {
                                className: "modal-title",
                                children: "Modal title",
                              }),
                            }),
                            Object(S.jsx)(g.n, {
                              children: Object(S.jsx)(g.e, {
                                children: Object.keys(l).map(function (t) {
                                  var n = l[t];
                                  return Object(S.jsxs)(
                                    g.g,
                                    {
                                      row: !0,
                                      style: { marginBottom: "1rem" },
                                      children: [
                                        Object(S.jsx)(g.j, {
                                          for: t,
                                          sm: 2,
                                          className: "capz",
                                          children: t,
                                        }),
                                        Object(S.jsx)(g.c, {
                                          sm: 10,
                                          children: Object(S.jsx)(g.h, {
                                            type: "text",
                                            name: t,
                                            id: t,
                                            placeholder: "Enter ".concat(t),
                                            defaultValue: n,
                                            onChange: e.onChange,
                                          }),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              }),
                            }),
                            Object(S.jsxs)(g.o, {
                              children: [
                                Object(S.jsx)(g.b, {
                                  color: "primary",
                                  onClick: this.onSave,
                                  children: "Submit",
                                }),
                                " ",
                                Object(S.jsx)(g.b, {
                                  color: "secondary",
                                  onClick: this.onCancel,
                                  children: "Cancel",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            n
          );
        })(s.a.Component),
        A = w,
        _ = function () {
          var e = Object(c.useState)(
              (function () {
                try {
                  return window.self !== window.top;
                } catch (e) {
                  return !0;
                }
              })()
                ? o.extension
                : o.embed
            ),
            t = Object(i.a)(e, 2),
            n = t[0],
            s = t[1];
          return Object(S.jsxs)(S.Fragment, {
            children: [
              n === o.extension &&
                Object(S.jsx)(A, { APIType: n, setAPIType: s }),
              n === o.embed && Object(S.jsx)(T, {}),
            ],
          });
        },
        N = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 45))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  s = t.getFCP,
                  r = t.getLCP,
                  a = t.getTTFB;
                n(e), c(e), s(e), r(e), a(e);
              });
        };
      n(37);
      a.a.render(
        Object(S.jsx)(s.a.StrictMode, { children: Object(S.jsx)(_, {}) }),
        document.getElementById("root")
      ),
        N();
    },
  },
  [[38, 1, 2]],
]);
//# sourceMappingURL=main.b1cf5207.chunk.js.map
