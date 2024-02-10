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

/***/ "./components/YouTubeDownload.jsx":
/*!****************************************!*\
  !*** ./components/YouTubeDownload.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ \"./components/AudioPlayer.jsx\");\n/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instructions */ \"./components/Instructions.jsx\");\n// const handleDownload = async () => {\n//   try {\n//     const options = {\n//       // Defines options for request\n//       responseType: \"blob\",\n//       // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n//       onDownloadProgress: function (progressEvent) {\n//         // Function fires when there is download progress\n//         console.log(\n//           progressEvent,\n//           Math.floor(progressEvent.loaded / progressEvent.total)\n//         );\n//         // Logs percentage complete to the console\n//       },\n//     };\n//     let fileName = \"fileName.mp3\";\n//     const response = await axios\n//       .get(`/api/getMp3?url=${videoUrl}`, options)\n//       .then((res) => {\n//         console.log(\n//           \"All DONE: \",\n//           res.headers[\"content-disposition\"].split(\"=\")[1]\n//         );\n//         fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n//         return res.data;\n//       });\n//     const url = window.URL.createObjectURL(response);\n//     const link = document.createElement(\"a\");\n//     link.href = url;\n//     link.setAttribute(\"download\", fileName);\n//     // Append to html link element page\n//     document.body.appendChild(link);\n//     // Start download\n//     link.click();\n//     // Clean up and remove the link\n//     link.parentNode.removeChild(link);\n//     // onDownload({ url: data });\n//   } catch (error) {\n//     console.error(\"Error downloading video:\", error);\n//   }\n// };\n//   return (\n//     <div>\n//       <input\n//         type=\"text\"\n//         value={videoUrl}\n//         onChange={(e) => setVideoUrl(e.target.value)}\n//         placeholder=\"Enter YouTube video URL\"\n//       />\n//       <button onClick={handleDownload}>Download Audio</button>\n//     </div>\n//   );\n// };\n// export default YouTubeDownload;\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst YouTubeDownload = ()=>{\n    _s();\n    const [videoLink, setVideoLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [audioFile, setAudioFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const convertToMp3 = async () => {\n    //   try {\n    //     setIsLoading(true);\n    //     setAudioFile(\"\");\n    //     const response = await axios.post(\n    //       \"http://localhost:3001/convert\",\n    //       { videoLink },\n    //       { responseType: \"blob\" }\n    //     );\n    //     // Create a blob URL for the response data\n    //     const blob = new Blob([response.data], { type: \"audio/mp3\" });\n    //     const url = URL.createObjectURL(blob);\n    //     console.log(\"url\", url);\n    //     setAudioFile(url);\n    //   } catch (error) {\n    //     console.error(\"Error converting video to MP3:\", error.message);\n    //   } finally {\n    //     setIsLoading(false);\n    //   }\n    // };\n    const convertToMp3 = async ()=>{\n        try {\n            setIsLoading(true);\n            console.log(\"callled\");\n            const options = {\n                // Defines options for request\n                responseType: \"blob\",\n                // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n                onDownloadProgress: function(progressEvent) {\n                    // Function fires when there is download progress\n                    console.log(progressEvent, Math.floor(progressEvent.loaded / progressEvent.total));\n                // Logs percentage complete to the console\n                }\n            };\n            let fileName = \"fileName.mp3\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"api/getMp3?url=\".concat(videoLink), options).then((res)=>{\n                console.log(\"All DONE: \", res.headers[\"content-disposition\"].split(\"=\")[1]);\n                fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n                return res.data;\n            });\n            const url = window.URL.createObjectURL(response);\n            setAudioFile(url);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.setAttribute(\"download\", fileName);\n            // Append to html link element page\n            document.body.appendChild(link);\n            // Start download\n            link.click();\n            // Clean up and remove the link\n            link.parentNode.removeChild(link);\n        // onDownload({ url: data });\n        } catch (error) {\n            console.log(error);\n            alert(\"Try again! Error converting video to MP3:\", error.message);\n            setIsLoading(false);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleDownload = ()=>{\n        const link = document.createElement(\"a\");\n        link.href = audioFile;\n        link.download = \"audio\" + Math.floor(Math.random() * 1000) + \".mp3\";\n        link.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"grey\"\n                },\n                children: \"Please insert a valid YouTube video URL\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter YouTube video link\",\n                        value: videoLink,\n                        onChange: (e)=>setVideoLink(e.target.value),\n                        className: \"search-bar\",\n                        style: {\n                            flex: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: isLoading ? \"search-button-disabled\" : \"search-button\",\n                        onClick: convertToMp3,\n                        disabled: isLoading,\n                        children: \"Convert\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 182,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 10\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            audioFile: audioFile\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                            lineNumber: 188,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 187,\n                        columnNumber: 11\n                    }, undefined),\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: handleDownload,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 192,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n        lineNumber: 162,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YouTubeDownload, \"TsphUSlsVmBEBcqYf8tg4VuiEi4=\");\n_c = YouTubeDownload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YouTubeDownload);\nvar _c;\n$RefreshReg$(_c, \"YouTubeDownload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztvQkFDM0IvQywyQkFDQyw4REFBQzJDO3dCQUFJRSxPQUFPOzRCQUFFVyxNQUFNO3dCQUFHO2tDQUNyQiw0RUFBQzdELG9EQUFXQTs0QkFBQ0ssV0FBV0E7Ozs7Ozs7Ozs7O29CQUczQkEsMkJBQ0MsOERBQUN5RDt3QkFBT0YsV0FBVTt3QkFBa0JHLFNBQVNsQjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RTtHQWxJTTNDO0tBQUFBO0FBb0lOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvWW91VHViZURvd25sb2FkLmpzeD85MTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4vLyAgICAgICAvLyBEZWZpbmVzIG9wdGlvbnMgZm9yIHJlcXVlc3RcblxuLy8gICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbi8vICAgICAgIC8vIEZvciBhIGZpbGUgKGUuZy4gaW1hZ2UsIGF1ZGlvKSwgcmVzcG9uc2Ugc2hvdWxkIGJlIHJlYWQgdG8gQmxvYiAoZGVmYXVsdCB0byBKUyBvYmplY3QgZnJvbSBKU09OKVxuXG4vLyAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4vLyAgICAgICAgIC8vIEZ1bmN0aW9uIGZpcmVzIHdoZW4gdGhlcmUgaXMgZG93bmxvYWQgcHJvZ3Jlc3NcblxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgICAgICBwcm9ncmVzc0V2ZW50LFxuLy8gICAgICAgICAgIE1hdGguZmxvb3IocHJvZ3Jlc3NFdmVudC5sb2FkZWQgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBMb2dzIHBlcmNlbnRhZ2UgY29tcGxldGUgdG8gdGhlIGNvbnNvbGVcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgICBsZXQgZmlsZU5hbWUgPSBcImZpbGVOYW1lLm1wM1wiO1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Ncbi8vICAgICAgIC5nZXQoYC9hcGkvZ2V0TXAzP3VybD0ke3ZpZGVvVXJsfWAsIG9wdGlvbnMpXG4vLyAgICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFxuLy8gICAgICAgICAgIFwiQWxsIERPTkU6IFwiLFxuLy8gICAgICAgICAgIHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV1cbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgZmlsZU5hbWUgPSByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdO1xuLy8gICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbi8vICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vLyAgICAgbGluay5ocmVmID0gdXJsO1xuLy8gICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXG4vLyAgICAgLy8gQXBwZW5kIHRvIGh0bWwgbGluayBlbGVtZW50IHBhZ2Vcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuXG4vLyAgICAgLy8gU3RhcnQgZG93bmxvYWRcbi8vICAgICBsaW5rLmNsaWNrKCk7XG5cbi8vICAgICAvLyBDbGVhbiB1cCBhbmQgcmVtb3ZlIHRoZSBsaW5rXG4vLyAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuLy8gICAgIC8vIG9uRG93bmxvYWQoeyB1cmw6IGRhdGEgfSk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRvd25sb2FkaW5nIHZpZGVvOlwiLCBlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGlucHV0XG4vLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgdmFsdWU9e3ZpZGVvVXJsfVxuLy8gICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZpZGVvVXJsKGUudGFyZ2V0LnZhbHVlKX1cbi8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VUdWJlIHZpZGVvIFVSTFwiXG4vLyAgICAgICAvPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+RG93bmxvYWQgQXVkaW88L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFlvdVR1YmVEb3dubG9hZDtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbmltcG9ydCBJbnN0cnVjdGlvbiBmcm9tIFwiLi9JbnN0cnVjdGlvbnNcIjtcbmNvbnN0IFlvdVR1YmVEb3dubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZGVvTGluaywgc2V0VmlkZW9MaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXVkaW9GaWxlLCBzZXRBdWRpb0ZpbGVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBjb252ZXJ0VG9NcDMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgICAgc2V0QXVkaW9GaWxlKFwiXCIpO1xuICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAvLyAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb252ZXJ0XCIsXG4gIC8vICAgICAgIHsgdmlkZW9MaW5rIH0sXG4gIC8vICAgICAgIHsgcmVzcG9uc2VUeXBlOiBcImJsb2JcIiB9XG4gIC8vICAgICApO1xuXG4gIC8vICAgICAvLyBDcmVhdGUgYSBibG9iIFVSTCBmb3IgdGhlIHJlc3BvbnNlIGRhdGFcbiAgLy8gICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0sIHsgdHlwZTogXCJhdWRpby9tcDNcIiB9KTtcbiAgLy8gICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidXJsXCIsIHVybCk7XG4gIC8vICAgICBzZXRBdWRpb0ZpbGUodXJsKTtcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbnZlcnRpbmcgdmlkZW8gdG8gTVAzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgLy8gICB9IGZpbmFsbHkge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3QgY29udmVydFRvTXAzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxsZWRcIik7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAvLyBEZWZpbmVzIG9wdGlvbnMgZm9yIHJlcXVlc3RcblxuICAgICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiLFxuICAgICAgICAvLyBGb3IgYSBmaWxlIChlLmcuIGltYWdlLCBhdWRpbyksIHJlc3BvbnNlIHNob3VsZCBiZSByZWFkIHRvIEJsb2IgKGRlZmF1bHQgdG8gSlMgb2JqZWN0IGZyb20gSlNPTilcblxuICAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4gICAgICAgICAgLy8gRnVuY3Rpb24gZmlyZXMgd2hlbiB0aGVyZSBpcyBkb3dubG9hZCBwcm9ncmVzc1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBwcm9ncmVzc0V2ZW50LFxuICAgICAgICAgICAgTWF0aC5mbG9vcihwcm9ncmVzc0V2ZW50LmxvYWRlZCAvIHByb2dyZXNzRXZlbnQudG90YWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBMb2dzIHBlcmNlbnRhZ2UgY29tcGxldGUgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBsZXQgZmlsZU5hbWUgPSBcImZpbGVOYW1lLm1wM1wiO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KGBhcGkvZ2V0TXAzP3VybD0ke3ZpZGVvTGlua31gLCBvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIkFsbCBET05FOiBcIixcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICApO1xuICAgICAgICAgIGZpbGVOYW1lID0gcmVzLmhlYWRlcnNbXCJjb250ZW50LWRpc3Bvc2l0aW9uXCJdLnNwbGl0KFwiPVwiKVsxXTtcbiAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZSk7XG4gICAgICBzZXRBdWRpb0ZpbGUodXJsKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXG4gICAgICAvLyBBcHBlbmQgdG8gaHRtbCBsaW5rIGVsZW1lbnQgcGFnZVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgICAgLy8gU3RhcnQgZG93bmxvYWRcbiAgICAgIGxpbmsuY2xpY2soKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgYW5kIHJlbW92ZSB0aGUgbGlua1xuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgLy8gb25Eb3dubG9hZCh7IHVybDogZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgYWxlcnQoXCJUcnkgYWdhaW4hIEVycm9yIGNvbnZlcnRpbmcgdmlkZW8gdG8gTVAzOlwiLCBlcnJvci5tZXNzYWdlKTtcblxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IGF1ZGlvRmlsZTtcbiAgICBsaW5rLmRvd25sb2FkID0gXCJhdWRpb1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyBcIi5tcDNcIjtcbiAgICBsaW5rLmNsaWNrKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiB9fT5QbGVhc2UgaW5zZXJ0IGEgdmFsaWQgWW91VHViZSB2aWRlbyBVUkw8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VUdWJlIHZpZGVvIGxpbmtcIlxuICAgICAgICAgIHZhbHVlPXt2aWRlb0xpbmt9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWaWRlb0xpbmsoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIlxuICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDEwIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17aXNMb2FkaW5nID8gXCJzZWFyY2gtYnV0dG9uLWRpc2FibGVkXCIgOiBcInNlYXJjaC1idXR0b25cIn1cbiAgICAgICAgICBvbkNsaWNrPXtjb252ZXJ0VG9NcDN9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIENvbnZlcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxicj48L2JyPlxuXG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIHthdWRpb0ZpbGUgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMTAgfX0+XG4gICAgICAgICAgICA8QXVkaW9QbGF5ZXIgYXVkaW9GaWxlPXthdWRpb0ZpbGV9PjwvQXVkaW9QbGF5ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHthdWRpb0ZpbGUgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZG93bmxvYWQtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRG93bmxvYWR9PlxuICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgWW91VHViZURvd25sb2FkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkF1ZGlvUGxheWVyIiwiSW5zdHJ1Y3Rpb24iLCJZb3VUdWJlRG93bmxvYWQiLCJ2aWRlb0xpbmsiLCJzZXRWaWRlb0xpbmsiLCJhdWRpb0ZpbGUiLCJzZXRBdWRpb0ZpbGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb252ZXJ0VG9NcDMiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInJlc3BvbnNlVHlwZSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJNYXRoIiwiZmxvb3IiLCJsb2FkZWQiLCJ0b3RhbCIsImZpbGVOYW1lIiwicmVzcG9uc2UiLCJnZXQiLCJ0aGVuIiwicmVzIiwiaGVhZGVycyIsInNwbGl0IiwiZGF0YSIsInVybCIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsImhhbmRsZURvd25sb2FkIiwiZG93bmxvYWQiLCJyYW5kb20iLCJkaXYiLCJwIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiZmxleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/YouTubeDownload.jsx\n"));

/***/ })

});