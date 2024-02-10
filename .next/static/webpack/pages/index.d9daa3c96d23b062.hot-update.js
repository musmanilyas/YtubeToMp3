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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ \"./components/AudioPlayer.jsx\");\n/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instructions */ \"./components/Instructions.jsx\");\n// const handleDownload = async () => {\n//   try {\n//     const options = {\n//       // Defines options for request\n//       responseType: \"blob\",\n//       // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n//       onDownloadProgress: function (progressEvent) {\n//         // Function fires when there is download progress\n//         console.log(\n//           progressEvent,\n//           Math.floor(progressEvent.loaded / progressEvent.total)\n//         );\n//         // Logs percentage complete to the console\n//       },\n//     };\n//     let fileName = \"fileName.mp3\";\n//     const response = await axios\n//       .get(`/api/getMp3?url=${videoUrl}`, options)\n//       .then((res) => {\n//         console.log(\n//           \"All DONE: \",\n//           res.headers[\"content-disposition\"].split(\"=\")[1]\n//         );\n//         fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n//         return res.data;\n//       });\n//     const url = window.URL.createObjectURL(response);\n//     const link = document.createElement(\"a\");\n//     link.href = url;\n//     link.setAttribute(\"download\", fileName);\n//     // Append to html link element page\n//     document.body.appendChild(link);\n//     // Start download\n//     link.click();\n//     // Clean up and remove the link\n//     link.parentNode.removeChild(link);\n//     // onDownload({ url: data });\n//   } catch (error) {\n//     console.error(\"Error downloading video:\", error);\n//   }\n// };\n//   return (\n//     <div>\n//       <input\n//         type=\"text\"\n//         value={videoUrl}\n//         onChange={(e) => setVideoUrl(e.target.value)}\n//         placeholder=\"Enter YouTube video URL\"\n//       />\n//       <button onClick={handleDownload}>Download Audio</button>\n//     </div>\n//   );\n// };\n// export default YouTubeDownload;\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst YouTubeDownload = ()=>{\n    _s();\n    const [videoLink, setVideoLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [audioFile, setAudioFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const convertToMp3 = async () => {\n    //   try {\n    //     setIsLoading(true);\n    //     setAudioFile(\"\");\n    //     const response = await axios.post(\n    //       \"http://localhost:3001/convert\",\n    //       { videoLink },\n    //       { responseType: \"blob\" }\n    //     );\n    //     // Create a blob URL for the response data\n    //     const blob = new Blob([response.data], { type: \"audio/mp3\" });\n    //     const url = URL.createObjectURL(blob);\n    //     console.log(\"url\", url);\n    //     setAudioFile(url);\n    //   } catch (error) {\n    //     console.error(\"Error converting video to MP3:\", error.message);\n    //   } finally {\n    //     setIsLoading(false);\n    //   }\n    // };\n    const convertToMp3 = async ()=>{\n        try {\n            setIsLoading(true);\n            console.log(\"callled\");\n            const options = {\n                // Defines options for request\n                responseType: \"blob\",\n                // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n                onDownloadProgress: function(progressEvent) {\n                    // Function fires when there is download progress\n                    console.log(progressEvent, Math.floor(progressEvent.loaded / progressEvent.total));\n                // Logs percentage complete to the console\n                }\n            };\n            let fileName = \"fileName.mp3\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3000/api/getMp3?url=\".concat(videoLink), options).then((res)=>{\n                console.log(\"All DONE: \", res.headers[\"content-disposition\"].split(\"=\")[1]);\n                fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n                return res.data;\n            });\n            const url = window.URL.createObjectURL(response);\n            setAudioFile(url);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.setAttribute(\"download\", fileName);\n            // Append to html link element page\n            document.body.appendChild(link);\n            // Start download\n            link.click();\n            // Clean up and remove the link\n            link.parentNode.removeChild(link);\n        // onDownload({ url: data });\n        } catch (error) {\n            console.log(error);\n            alert(\"Try again! Error converting video to MP3:\", error.message);\n            setIsLoading(false);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleDownload = ()=>{\n        const link = document.createElement(\"a\");\n        link.href = audioFile;\n        link.download = \"audio\" + Math.floor(Math.random() * 1000) + \".mp3\";\n        link.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"grey\"\n                },\n                children: \"Please insert a valid YouTube video URL\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 163,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter YouTube video link\",\n                        value: videoLink,\n                        onChange: (e)=>setVideoLink(e.target.value),\n                        className: \"search-bar\",\n                        style: {\n                            flex: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: isLoading ? \"search-button-disabled\" : \"search-button\",\n                        onClick: convertToMp3,\n                        disabled: isLoading,\n                        children: \"Convert\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 182,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 10\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            audioFile: audioFile\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                            lineNumber: 188,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 187,\n                        columnNumber: 11\n                    }, undefined),\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: handleDownload,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 192,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n        lineNumber: 162,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YouTubeDownload, \"TsphUSlsVmBEBcqYf8tg4VuiEi4=\");\n_c = YouTubeDownload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YouTubeDownload);\nvar _c;\n$RefreshReg$(_c, \"YouTubeDownload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztvQkFDM0IvQywyQkFDQyw4REFBQzJDO3dCQUFJRSxPQUFPOzRCQUFFVyxNQUFNO3dCQUFHO2tDQUNyQiw0RUFBQzdELG9EQUFXQTs0QkFBQ0ssV0FBV0E7Ozs7Ozs7Ozs7O29CQUczQkEsMkJBQ0MsOERBQUN5RDt3QkFBT0YsV0FBVTt3QkFBa0JHLFNBQVNsQjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RTtHQWxJTTNDO0tBQUFBO0FBb0lOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvWW91VHViZURvd25sb2FkLmpzeD85MTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4vLyAgICAgICAvLyBEZWZpbmVzIG9wdGlvbnMgZm9yIHJlcXVlc3RcblxuLy8gICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbi8vICAgICAgIC8vIEZvciBhIGZpbGUgKGUuZy4gaW1hZ2UsIGF1ZGlvKSwgcmVzcG9uc2Ugc2hvdWxkIGJlIHJlYWQgdG8gQmxvYiAoZGVmYXVsdCB0byBKUyBvYmplY3QgZnJvbSBKU09OKVxuXG4vLyAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4vLyAgICAgICAgIC8vIEZ1bmN0aW9uIGZpcmVzIHdoZW4gdGhlcmUgaXMgZG93bmxvYWQgcHJvZ3Jlc3NcblxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgICAgICBwcm9ncmVzc0V2ZW50LFxuLy8gICAgICAgICAgIE1hdGguZmxvb3IocHJvZ3Jlc3NFdmVudC5sb2FkZWQgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBMb2dzIHBlcmNlbnRhZ2UgY29tcGxldGUgdG8gdGhlIGNvbnNvbGVcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgICBsZXQgZmlsZU5hbWUgPSBcImZpbGVOYW1lLm1wM1wiO1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Ncbi8vICAgICAgIC5nZXQoYC9hcGkvZ2V0TXAzP3VybD0ke3ZpZGVvVXJsfWAsIG9wdGlvbnMpXG4vLyAgICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFxuLy8gICAgICAgICAgIFwiQWxsIERPTkU6IFwiLFxuLy8gICAgICAgICAgIHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV1cbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgZmlsZU5hbWUgPSByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdO1xuLy8gICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbi8vICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vLyAgICAgbGluay5ocmVmID0gdXJsO1xuLy8gICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXG4vLyAgICAgLy8gQXBwZW5kIHRvIGh0bWwgbGluayBlbGVtZW50IHBhZ2Vcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuXG4vLyAgICAgLy8gU3RhcnQgZG93bmxvYWRcbi8vICAgICBsaW5rLmNsaWNrKCk7XG5cbi8vICAgICAvLyBDbGVhbiB1cCBhbmQgcmVtb3ZlIHRoZSBsaW5rXG4vLyAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuLy8gICAgIC8vIG9uRG93bmxvYWQoeyB1cmw6IGRhdGEgfSk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRvd25sb2FkaW5nIHZpZGVvOlwiLCBlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGlucHV0XG4vLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgdmFsdWU9e3ZpZGVvVXJsfVxuLy8gICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZpZGVvVXJsKGUudGFyZ2V0LnZhbHVlKX1cbi8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VUdWJlIHZpZGVvIFVSTFwiXG4vLyAgICAgICAvPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+RG93bmxvYWQgQXVkaW88L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFlvdVR1YmVEb3dubG9hZDtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbmltcG9ydCBJbnN0cnVjdGlvbiBmcm9tIFwiLi9JbnN0cnVjdGlvbnNcIjtcbmNvbnN0IFlvdVR1YmVEb3dubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZGVvTGluaywgc2V0VmlkZW9MaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXVkaW9GaWxlLCBzZXRBdWRpb0ZpbGVdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBjb252ZXJ0VG9NcDMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgICAgc2V0QXVkaW9GaWxlKFwiXCIpO1xuICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAvLyAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb252ZXJ0XCIsXG4gIC8vICAgICAgIHsgdmlkZW9MaW5rIH0sXG4gIC8vICAgICAgIHsgcmVzcG9uc2VUeXBlOiBcImJsb2JcIiB9XG4gIC8vICAgICApO1xuXG4gIC8vICAgICAvLyBDcmVhdGUgYSBibG9iIFVSTCBmb3IgdGhlIHJlc3BvbnNlIGRhdGFcbiAgLy8gICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0sIHsgdHlwZTogXCJhdWRpby9tcDNcIiB9KTtcbiAgLy8gICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgLy8gICAgIGNvbnNvbGUubG9nKFwidXJsXCIsIHVybCk7XG4gIC8vICAgICBzZXRBdWRpb0ZpbGUodXJsKTtcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbnZlcnRpbmcgdmlkZW8gdG8gTVAzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgLy8gICB9IGZpbmFsbHkge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3QgY29udmVydFRvTXAzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbGxsZWRcIik7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAvLyBEZWZpbmVzIG9wdGlvbnMgZm9yIHJlcXVlc3RcblxuICAgICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiLFxuICAgICAgICAvLyBGb3IgYSBmaWxlIChlLmcuIGltYWdlLCBhdWRpbyksIHJlc3BvbnNlIHNob3VsZCBiZSByZWFkIHRvIEJsb2IgKGRlZmF1bHQgdG8gSlMgb2JqZWN0IGZyb20gSlNPTilcblxuICAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4gICAgICAgICAgLy8gRnVuY3Rpb24gZmlyZXMgd2hlbiB0aGVyZSBpcyBkb3dubG9hZCBwcm9ncmVzc1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBwcm9ncmVzc0V2ZW50LFxuICAgICAgICAgICAgTWF0aC5mbG9vcihwcm9ncmVzc0V2ZW50LmxvYWRlZCAvIHByb2dyZXNzRXZlbnQudG90YWwpXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBMb2dzIHBlcmNlbnRhZ2UgY29tcGxldGUgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBsZXQgZmlsZU5hbWUgPSBcImZpbGVOYW1lLm1wM1wiO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldE1wMz91cmw9JHt2aWRlb0xpbmt9YCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJBbGwgRE9ORTogXCIsXG4gICAgICAgICAgICByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWxlTmFtZSA9IHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV07XG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwocmVzcG9uc2UpO1xuICAgICAgc2V0QXVkaW9GaWxlKHVybCk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcblxuICAgICAgLy8gQXBwZW5kIHRvIGh0bWwgbGluayBlbGVtZW50IHBhZ2VcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICAgIC8vIFN0YXJ0IGRvd25sb2FkXG4gICAgICBsaW5rLmNsaWNrKCk7XG5cbiAgICAgIC8vIENsZWFuIHVwIGFuZCByZW1vdmUgdGhlIGxpbmtcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgIC8vIG9uRG93bmxvYWQoeyB1cmw6IGRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIGFsZXJ0KFwiVHJ5IGFnYWluISBFcnJvciBjb252ZXJ0aW5nIHZpZGVvIHRvIE1QMzpcIiwgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLmhyZWYgPSBhdWRpb0ZpbGU7XG4gICAgbGluay5kb3dubG9hZCA9IFwiYXVkaW9cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgXCIubXAzXCI7XG4gICAgbGluay5jbGljaygpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJncmV5XCIgfX0+UGxlYXNlIGluc2VydCBhIHZhbGlkIFlvdVR1YmUgdmlkZW8gVVJMPC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91VHViZSB2aWRlbyBsaW5rXCJcbiAgICAgICAgICB2YWx1ZT17dmlkZW9MaW5rfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmlkZW9MaW5rKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxMCB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2lzTG9hZGluZyA/IFwic2VhcmNoLWJ1dHRvbi1kaXNhYmxlZFwiIDogXCJzZWFyY2gtYnV0dG9uXCJ9XG4gICAgICAgICAgb25DbGljaz17Y29udmVydFRvTXAzfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICBDb252ZXJ0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnI+PC9icj5cblxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICB7YXVkaW9GaWxlICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEwIH19PlxuICAgICAgICAgICAgPEF1ZGlvUGxheWVyIGF1ZGlvRmlsZT17YXVkaW9GaWxlfT48L0F1ZGlvUGxheWVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7YXVkaW9GaWxlICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRvd25sb2FkLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5cbiAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFlvdVR1YmVEb3dubG9hZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJBdWRpb1BsYXllciIsIkluc3RydWN0aW9uIiwiWW91VHViZURvd25sb2FkIiwidmlkZW9MaW5rIiwic2V0VmlkZW9MaW5rIiwiYXVkaW9GaWxlIiwic2V0QXVkaW9GaWxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udmVydFRvTXAzIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJyZXNwb25zZVR5cGUiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwiTWF0aCIsImZsb29yIiwibG9hZGVkIiwidG90YWwiLCJmaWxlTmFtZSIsInJlc3BvbnNlIiwiZ2V0IiwidGhlbiIsInJlcyIsImhlYWRlcnMiLCJzcGxpdCIsImRhdGEiLCJ1cmwiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJoYW5kbGVEb3dubG9hZCIsImRvd25sb2FkIiwicmFuZG9tIiwiZGl2IiwicCIsInN0eWxlIiwiY29sb3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNsYXNzTmFtZSIsImZsZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/YouTubeDownload.jsx\n"));

/***/ })

});