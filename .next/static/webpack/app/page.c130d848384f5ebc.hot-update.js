"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Components/Sidebar/Profile.jsx":
/*!********************************************!*\
  !*** ./src/Components/Sidebar/Profile.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Avatar */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Menu */ \"(app-pages-browser)/./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemIcon/ListItemIcon.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Divider */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tooltip */ \"(app-pages-browser)/./node_modules/@mui/material/Tooltip/Tooltip.js\");\n/* harmony import */ var _mui_icons_material_PersonAdd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/PersonAdd */ \"(app-pages-browser)/./node_modules/@mui/icons-material/PersonAdd.js\");\n/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Settings */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Settings.js\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Logout.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AccountMenu() {\n    _s();\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    const handlelogout = ()=>{\n        window.location.href = \"/api/auth/signout\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    textAlign: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: \"Account settings\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClick: handleClick,\n                        size: \"small\",\n                        sx: {\n                            ml: 2\n                        },\n                        \"aria-controls\": open ? \"account-menu\" : undefined,\n                        \"aria-haspopup\": \"true\",\n                        \"aria-expanded\": open ? \"true\" : undefined,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                width: 32,\n                                height: 32\n                            },\n                            children: \"M\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                anchorEl: anchorEl,\n                id: \"account-menu\",\n                open: open,\n                onClose: handleClose,\n                onClick: handleClose,\n                PaperProps: {\n                    elevation: 0,\n                    sx: {\n                        overflow: \"visible\",\n                        filter: \"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))\",\n                        mt: 1.5,\n                        \"& .MuiAvatar-root\": {\n                            width: 32,\n                            height: 32,\n                            ml: -0.5,\n                            mr: 1\n                        },\n                        \"&::before\": {\n                            content: '\"\"',\n                            display: \"block\",\n                            position: \"absolute\",\n                            top: 0,\n                            right: 14,\n                            width: 10,\n                            height: 10,\n                            bgcolor: \"background.paper\",\n                            transform: \"translateY(-50%) rotate(45deg)\",\n                            zIndex: 0\n                        }\n                    }\n                },\n                transformOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"top\"\n                },\n                anchorOrigin: {\n                    horizontal: \"right\",\n                    vertical: \"bottom\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClick: handleClose,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            \" Ayush\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClick: handleClose,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_PersonAdd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    fontSize: \"small\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this),\n                            \"Add another user\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClick: handleClose,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    fontSize: \"small\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            \"Settings\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onClick: handlelogout,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    fontSize: \"small\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            \"Logout\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\next js\\\\Auth\\\\my-auth\\\\src\\\\Components\\\\Sidebar\\\\Profile.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountMenu, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n_c = AccountMenu;\nvar _c;\n$RefreshReg$(_c, \"AccountMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1NpZGViYXIvUHJvZmlsZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDSztBQUNNO0FBQ0o7QUFDUTtBQUNRO0FBQ1Y7QUFDTTtBQUNBO0FBQ047QUFDVTtBQUNGO0FBQ0o7QUFDVjtBQUM0QjtBQUluRCxTQUFTZTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdqQiwyQ0FBYyxDQUFDO0lBQy9DLE1BQU1tQixPQUFPQyxRQUFRSjtJQUNyQixNQUFNSyxjQUFjLENBQUNDO1FBQ25CTCxZQUFZSyxNQUFNQyxhQUFhO0lBQ2pDO0lBQ0EsTUFBTUMsY0FBYztRQUNsQlAsWUFBWTtJQUNkO0lBR0EsTUFBTVEsZUFBYztRQUNsQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFFekI7SUFFQSxxQkFDRSw4REFBQzVCLDJDQUFjOzswQkFDYiw4REFBQ0MseURBQUdBO2dCQUFDNkIsSUFBSTtvQkFBRUMsU0FBUztvQkFBUUMsWUFBWTtvQkFBVUMsV0FBVztnQkFBUzswQkFDcEUsNEVBQUN4Qiw2REFBT0E7b0JBQUN5QixPQUFNOzhCQUNiLDRFQUFDM0IsZ0VBQVVBO3dCQUNUNEIsU0FBU2Q7d0JBQ1RlLE1BQUs7d0JBQ0xOLElBQUk7NEJBQUVPLElBQUk7d0JBQUU7d0JBQ1pDLGlCQUFlbkIsT0FBTyxpQkFBaUJvQjt3QkFDdkNDLGlCQUFjO3dCQUNkQyxpQkFBZXRCLE9BQU8sU0FBU29CO2tDQUUvQiw0RUFBQ3JDLDREQUFNQTs0QkFBQzRCLElBQUk7Z0NBQUVZLE9BQU87Z0NBQUlDLFFBQVE7NEJBQUc7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLN0MsOERBQUN4QywwREFBSUE7Z0JBQ0hhLFVBQVVBO2dCQUNWNEIsSUFBRztnQkFDSHpCLE1BQU1BO2dCQUNOMEIsU0FBU3JCO2dCQUNUVyxTQUFTWDtnQkFDVHNCLFlBQVk7b0JBQ1ZDLFdBQVc7b0JBQ1hqQixJQUFJO3dCQUNGa0IsVUFBVTt3QkFDVkMsUUFBUTt3QkFDUkMsSUFBSTt3QkFDSixxQkFBcUI7NEJBQ25CUixPQUFPOzRCQUNQQyxRQUFROzRCQUNSTixJQUFJLENBQUM7NEJBQ0xjLElBQUk7d0JBQ047d0JBQ0EsYUFBYTs0QkFDWEMsU0FBUzs0QkFDVHJCLFNBQVM7NEJBQ1RzQixVQUFVOzRCQUNWQyxLQUFLOzRCQUNMQyxPQUFPOzRCQUNQYixPQUFPOzRCQUNQQyxRQUFROzRCQUNSYSxTQUFTOzRCQUNUQyxXQUFXOzRCQUNYQyxRQUFRO3dCQUNWO29CQUNGO2dCQUNGO2dCQUNBQyxpQkFBaUI7b0JBQUVDLFlBQVk7b0JBQVNDLFVBQVU7Z0JBQU07Z0JBQ3hEQyxjQUFjO29CQUFFRixZQUFZO29CQUFTQyxVQUFVO2dCQUFTOztrQ0FHeEQsOERBQUN6RCw4REFBUUE7d0JBQUMrQixTQUFTWDs7MENBQ2pCLDhEQUFDdEIsNERBQU1BOzs7Ozs0QkFBRzs7Ozs7OztrQ0FFWiw4REFBQ0ksNkRBQU9BOzs7OztrQ0FDUiw4REFBQ0YsOERBQVFBO3dCQUFDK0IsU0FBU1g7OzBDQUNqQiw4REFBQ25CLGtFQUFZQTswQ0FDWCw0RUFBQ0ssc0VBQVNBO29DQUFDcUQsVUFBUzs7Ozs7Ozs7Ozs7NEJBQ1A7Ozs7Ozs7a0NBR2pCLDhEQUFDM0QsOERBQVFBO3dCQUFDK0IsU0FBU1g7OzBDQUNqQiw4REFBQ25CLGtFQUFZQTswQ0FDWCw0RUFBQ00scUVBQVFBO29DQUFDb0QsVUFBUzs7Ozs7Ozs7Ozs7NEJBQ047Ozs7Ozs7a0NBR2pCLDhEQUFDM0QsOERBQVFBO3dCQUFDK0IsU0FBU1Y7OzBDQUNqQiw4REFBQ3BCLGtFQUFZQTswQ0FDWCw0RUFBQ08sbUVBQU1BO29DQUFDbUQsVUFBUzs7Ozs7Ozs7Ozs7NEJBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekI7R0EvRndCaEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvU2lkZWJhci9Qcm9maWxlLmpzeD9iMjNlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IFBlcnNvbkFkZCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BlcnNvbkFkZCc7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50TWVudSgpIHtcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVsb2dvdXQgPSgpPT57XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYXBpL2F1dGgvc2lnbm91dCc7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWNjb3VudCBzZXR0aW5nc1wiPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN4PXt7IG1sOiAyIH19XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnYWNjb3VudC1tZW51JyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHN4PXt7IHdpZHRoOiAzMiwgaGVpZ2h0OiAzMiB9fT5NPC9BdmF0YXI+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgXHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgIGlkPVwiYWNjb3VudC1tZW51XCJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIFBhcGVyUHJvcHM9e3tcclxuICAgICAgICAgIGVsZXZhdGlvbjogMCxcclxuICAgICAgICAgIHN4OiB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KDBweCAycHggOHB4IHJnYmEoMCwwLDAsMC4zMikpJyxcclxuICAgICAgICAgICAgbXQ6IDEuNSxcclxuICAgICAgICAgICAgJyYgLk11aUF2YXRhci1yb290Jzoge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMyLFxyXG4gICAgICAgICAgICAgIG1sOiAtMC41LFxyXG4gICAgICAgICAgICAgIG1yOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICByaWdodDogMTQsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKScsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfX1cclxuICAgICAgICBhbmNob3JPcmlnaW49e3sgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICdib3R0b20nIH19XHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPEF2YXRhciAvPiBBeXVzaFxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPFBlcnNvbkFkZCBmb250U2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgQWRkIGFub3RoZXIgdXNlclxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+IFxyXG4gICAgICAgICAgICA8U2V0dGluZ3MgZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlbG9nb3V0fT5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxMb2dvdXQgZm9udFNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgXHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQXZhdGFyIiwiTWVudSIsIk1lbnVJdGVtIiwiTGlzdEl0ZW1JY29uIiwiRGl2aWRlciIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiVG9vbHRpcCIsIlBlcnNvbkFkZCIsIlNldHRpbmdzIiwiTG9nb3V0IiwiQmFkZ2UiLCJOb3RpZmljYXRpb25zSWNvbiIsIkFjY291bnRNZW51IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZVN0YXRlIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlbG9nb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiRnJhZ21lbnQiLCJzeCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwidGl0bGUiLCJvbkNsaWNrIiwic2l6ZSIsIm1sIiwiYXJpYS1jb250cm9scyIsInVuZGVmaW5lZCIsImFyaWEtaGFzcG9wdXAiLCJhcmlhLWV4cGFuZGVkIiwid2lkdGgiLCJoZWlnaHQiLCJpZCIsIm9uQ2xvc2UiLCJQYXBlclByb3BzIiwiZWxldmF0aW9uIiwib3ZlcmZsb3ciLCJmaWx0ZXIiLCJtdCIsIm1yIiwiY29udGVudCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJiZ2NvbG9yIiwidHJhbnNmb3JtIiwiekluZGV4IiwidHJhbnNmb3JtT3JpZ2luIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwiYW5jaG9yT3JpZ2luIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Sidebar/Profile.jsx\n"));

/***/ })

});