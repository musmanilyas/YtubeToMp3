"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_YouTubeDownload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/YouTubeDownload */ \"./components/YouTubeDownload.jsx\");\n/* harmony import */ var _components_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProgressBar */ \"./components/ProgressBar.jsx\");\n/* harmony import */ var _components_Instructions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Instructions */ \"./components/Instructions.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [audioUrl, setAudioUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleDownload = (info)=>{\n        setAudioUrl(info.url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"centered-div\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_YouTubeDownload__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onDownload: handleDownload\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    audioUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: audioUrl,\n                        controls: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 22\n                    }, this),\n                    audioUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProgressBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        url: audioUrl\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Instructions__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"5eo6jAYthe5r0e2lUH+l9mMZgRQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDWTtBQUNlO0FBQ1I7QUFDQztBQUV0QyxTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1RLGlCQUFpQixDQUFDQztRQUN0QkYsWUFBWUUsS0FBS0MsR0FBRztJQUN0QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVixtRUFBZUE7d0JBQUNXLFlBQVlMOzs7Ozs7b0JBQzVCRiwwQkFBWSw4REFBQ0wsMkRBQVdBO3dCQUFDYSxLQUFLUjt3QkFBVVMsUUFBUTs7Ozs7O29CQUNoRFQsMEJBQVksOERBQUNILCtEQUFXQTt3QkFBQ08sS0FBS0o7Ozs7Ozs7Ozs7OzswQkFFakMsOERBQUNGLGdFQUFXQTs7Ozs7Ozs7Ozs7QUFHbEI7R0FqQndCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcInJlYWN0LWF1ZGlvLXBsYXllclwiO1xuaW1wb3J0IFlvdVR1YmVEb3dubG9hZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Zb3VUdWJlRG93bmxvYWRcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IEluc3RydWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0luc3RydWN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYXVkaW9VcmwsIHNldEF1ZGlvVXJsXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKGluZm8pID0+IHtcbiAgICBzZXRBdWRpb1VybChpbmZvLnVybCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyZWQtZGl2XCI+XG4gICAgICAgIDxZb3VUdWJlRG93bmxvYWQgb25Eb3dubG9hZD17aGFuZGxlRG93bmxvYWR9IC8+XG4gICAgICAgIHthdWRpb1VybCAmJiA8QXVkaW9QbGF5ZXIgc3JjPXthdWRpb1VybH0gY29udHJvbHMgLz59XG4gICAgICAgIHthdWRpb1VybCAmJiA8UHJvZ3Jlc3NCYXIgdXJsPXthdWRpb1VybH0gLz59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbnN0cnVjdGlvbj48L0luc3RydWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQXVkaW9QbGF5ZXIiLCJZb3VUdWJlRG93bmxvYWQiLCJQcm9ncmVzc0JhciIsIkluc3RydWN0aW9uIiwiSG9tZSIsImF1ZGlvVXJsIiwic2V0QXVkaW9VcmwiLCJoYW5kbGVEb3dubG9hZCIsImluZm8iLCJ1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkRvd25sb2FkIiwic3JjIiwiY29udHJvbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});