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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ \"./components/AudioPlayer.jsx\");\n// const handleDownload = async () => {\n//   try {\n//     const options = {\n//       // Defines options for request\n//       responseType: \"blob\",\n//       // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n//       onDownloadProgress: function (progressEvent) {\n//         // Function fires when there is download progress\n//         console.log(\n//           progressEvent,\n//           Math.floor(progressEvent.loaded / progressEvent.total)\n//         );\n//         // Logs percentage complete to the console\n//       },\n//     };\n//     let fileName = \"fileName.mp3\";\n//     const response = await axios\n//       .get(`/api/getMp3?url=${videoUrl}`, options)\n//       .then((res) => {\n//         console.log(\n//           \"All DONE: \",\n//           res.headers[\"content-disposition\"].split(\"=\")[1]\n//         );\n//         fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n//         return res.data;\n//       });\n//     const url = window.URL.createObjectURL(response);\n//     const link = document.createElement(\"a\");\n//     link.href = url;\n//     link.setAttribute(\"download\", fileName);\n//     // Append to html link element page\n//     document.body.appendChild(link);\n//     // Start download\n//     link.click();\n//     // Clean up and remove the link\n//     link.parentNode.removeChild(link);\n//     // onDownload({ url: data });\n//   } catch (error) {\n//     console.error(\"Error downloading video:\", error);\n//   }\n// };\n//   return (\n//     <div>\n//       <input\n//         type=\"text\"\n//         value={videoUrl}\n//         onChange={(e) => setVideoUrl(e.target.value)}\n//         placeholder=\"Enter YouTube video URL\"\n//       />\n//       <button onClick={handleDownload}>Download Audio</button>\n//     </div>\n//   );\n// };\n// export default YouTubeDownload;\n\nvar _s = $RefreshSig$();\n\n\n\nconst YouTubeDownload = ()=>{\n    _s();\n    const [videoLink, setVideoLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [audioFile, setAudioFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loadingMessage, setLoadingMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const convertToMp3 = async () => {\n    //   try {\n    //     setIsLoading(true);\n    //     setAudioFile(\"\");\n    //     const response = await axios.post(\n    //       \"http://localhost:3001/convert\",\n    //       { videoLink },\n    //       { responseType: \"blob\" }\n    //     );\n    //     // Create a blob URL for the response data\n    //     const blob = new Blob([response.data], { type: \"audio/mp3\" });\n    //     const url = URL.createObjectURL(blob);\n    //     console.log(\"url\", url);\n    //     setAudioFile(url);\n    //   } catch (error) {\n    //     console.error(\"Error converting video to MP3:\", error.message);\n    //   } finally {\n    //     setIsLoading(false);\n    //   }\n    // };\n    function updateProgressBar(percentage) {\n        // Implement the logic to update a progress bar based on the percentage\n        setLoadingMessage(percentage ? \"Converting...\" : \"Download progress: \".concat(percentage, \"%\"));\n    }\n    const convertToMp3 = async ()=>{\n        try {\n            setIsLoading(true);\n            setAudioFile(\"\");\n            console.log(\"callled\");\n            const options = {\n                // Defines options for request\n                responseType: \"blob\",\n                // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n                onDownloadProgress: function(progressEvent) {\n                    // Check if lengthComputable is false or total is not available\n                    if (!progressEvent.lengthComputable || progressEvent.total === undefined) {\n                        updateProgressBar();\n                    } else {\n                        // Handle the case when total size is available (percentage calculation)\n                        const percentage = progressEvent.loaded / progressEvent.total * 100;\n                        updateProgressBar(percentage);\n                    }\n                }\n            };\n            let fileName = \"fileName.mp3\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/getMp3?url=\".concat(videoLink), options).then((res)=>{\n                console.log(\"All DONE: \", res.headers[\"content-disposition\"].split(\"=\")[1]);\n                fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n                return res.data;\n            });\n            const url = window.URL.createObjectURL(response);\n            setAudioFile(url);\n            setFileName(fileName);\n        // const link = document.createElement(\"a\");\n        // link.href = url;\n        // link.setAttribute(\"download\", fileName);\n        // // Append to html link element page\n        // document.body.appendChild(link);\n        // // Start download\n        // link.click();\n        // Clean up and remove the link\n        // onDownload({ url: data });\n        } catch (error) {\n            console.log(error);\n            alert(\"Try again! Error converting video to MP3:\", error.message);\n            setIsLoading(false);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleDownload = ()=>{\n        var _link_parentNode;\n        const link = document.createElement(\"a\");\n        link.href = audioFile;\n        link.download = fileName !== null && fileName !== void 0 ? fileName : \"audio\" + Math.floor(Math.random() * 1000) + \".mp3\";\n        link.click();\n        link === null || link === void 0 ? void 0 : (_link_parentNode = link.parentNode) === null || _link_parentNode === void 0 ? void 0 : _link_parentNode.removeChild(link);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"grey\"\n                },\n                children: \"Please insert a valid YouTube video URL\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter YouTube video link\",\n                        value: videoLink,\n                        onChange: (e)=>setVideoLink(e.target.value),\n                        className: \"search-bar\",\n                        style: {\n                            flex: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: isLoading ? \"search-button-disabled\" : \"search-button\",\n                        onClick: convertToMp3,\n                        disabled: isLoading,\n                        children: !isLoading ? \"Convert\" : loadingMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 196,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 10\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            audioFile: audioFile\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                            lineNumber: 202,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 201,\n                        columnNumber: 11\n                    }, undefined),\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: handleDownload,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 206,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 199,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n        lineNumber: 176,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YouTubeDownload, \"AKV/kyEFFpRXM85Yx+OYkaImQsc=\");\n_c = YouTubeDownload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YouTubeDownload);\nvar _c;\n$RefreshReg$(_c, \"YouTubeDownload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUNQMEQsVUFBVSxDQUFDQyxJQUFNMUQsYUFBYTBELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDNUNJLFdBQVU7d0JBQ1ZWLE9BQU87NEJBQUVXLE1BQU07d0JBQUc7Ozs7OztrQ0FHcEIsOERBQUNDO3dCQUNDRixXQUFXckQsWUFBWSwyQkFBMkI7d0JBQ2xEd0QsU0FBU3BEO3dCQUNUcUQsVUFBVXpEO2tDQUVULENBQUNBLFlBQVksWUFBWUY7Ozs7Ozs7Ozs7OzswQkFHOUIsOERBQUM0RDs7Ozs7MEJBRUQsOERBQUNBOzs7OzswQkFDRCw4REFBQ2pCO2dCQUFJRSxPQUFPO29CQUFFRSxTQUFTO2dCQUFPOztvQkFDM0JuRCwyQkFDQyw4REFBQytDO3dCQUFJRSxPQUFPOzRCQUFFVyxNQUFNO3dCQUFHO2tDQUNyQiw0RUFBQ2hFLG9EQUFXQTs0QkFBQ0ksV0FBV0E7Ozs7Ozs7Ozs7O29CQUczQkEsMkJBQ0MsOERBQUM2RDt3QkFBT0YsV0FBVTt3QkFBa0JHLFNBQVMzQjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RTtHQWpKTXRDO0tBQUFBO0FBbUpOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvWW91VHViZURvd25sb2FkLmpzeD85MTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4vLyAgICAgICAvLyBEZWZpbmVzIG9wdGlvbnMgZm9yIHJlcXVlc3RcblxuLy8gICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbi8vICAgICAgIC8vIEZvciBhIGZpbGUgKGUuZy4gaW1hZ2UsIGF1ZGlvKSwgcmVzcG9uc2Ugc2hvdWxkIGJlIHJlYWQgdG8gQmxvYiAoZGVmYXVsdCB0byBKUyBvYmplY3QgZnJvbSBKU09OKVxuXG4vLyAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4vLyAgICAgICAgIC8vIEZ1bmN0aW9uIGZpcmVzIHdoZW4gdGhlcmUgaXMgZG93bmxvYWQgcHJvZ3Jlc3NcblxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgICAgICBwcm9ncmVzc0V2ZW50LFxuLy8gICAgICAgICAgIE1hdGguZmxvb3IocHJvZ3Jlc3NFdmVudC5sb2FkZWQgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBMb2dzIHBlcmNlbnRhZ2UgY29tcGxldGUgdG8gdGhlIGNvbnNvbGVcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgICBsZXQgZmlsZU5hbWUgPSBcImZpbGVOYW1lLm1wM1wiO1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Ncbi8vICAgICAgIC5nZXQoYC9hcGkvZ2V0TXAzP3VybD0ke3ZpZGVvVXJsfWAsIG9wdGlvbnMpXG4vLyAgICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFxuLy8gICAgICAgICAgIFwiQWxsIERPTkU6IFwiLFxuLy8gICAgICAgICAgIHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV1cbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgZmlsZU5hbWUgPSByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdO1xuLy8gICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbi8vICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vLyAgICAgbGluay5ocmVmID0gdXJsO1xuLy8gICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXG4vLyAgICAgLy8gQXBwZW5kIHRvIGh0bWwgbGluayBlbGVtZW50IHBhZ2Vcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuXG4vLyAgICAgLy8gU3RhcnQgZG93bmxvYWRcbi8vICAgICBsaW5rLmNsaWNrKCk7XG5cbi8vICAgICAvLyBDbGVhbiB1cCBhbmQgcmVtb3ZlIHRoZSBsaW5rXG4vLyAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuLy8gICAgIC8vIG9uRG93bmxvYWQoeyB1cmw6IGRhdGEgfSk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRvd25sb2FkaW5nIHZpZGVvOlwiLCBlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGlucHV0XG4vLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgdmFsdWU9e3ZpZGVvVXJsfVxuLy8gICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZpZGVvVXJsKGUudGFyZ2V0LnZhbHVlKX1cbi8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VUdWJlIHZpZGVvIFVSTFwiXG4vLyAgICAgICAvPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+RG93bmxvYWQgQXVkaW88L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFlvdVR1YmVEb3dubG9hZDtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbmNvbnN0IFlvdVR1YmVEb3dubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZGVvTGluaywgc2V0VmlkZW9MaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXVkaW9GaWxlLCBzZXRBdWRpb0ZpbGVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmdNZXNzYWdlLCBzZXRMb2FkaW5nTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgY29udmVydFRvTXAzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgLy8gICAgIHNldEF1ZGlvRmlsZShcIlwiKTtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgLy8gICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvY29udmVydFwiLFxuICAvLyAgICAgICB7IHZpZGVvTGluayB9LFxuICAvLyAgICAgICB7IHJlc3BvbnNlVHlwZTogXCJibG9iXCIgfVxuICAvLyAgICAgKTtcblxuICAvLyAgICAgLy8gQ3JlYXRlIGEgYmxvYiBVUkwgZm9yIHRoZSByZXNwb25zZSBkYXRhXG4gIC8vICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdLCB7IHR5cGU6IFwiYXVkaW8vbXAzXCIgfSk7XG4gIC8vICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gIC8vICAgICBjb25zb2xlLmxvZyhcInVybFwiLCB1cmwpO1xuICAvLyAgICAgc2V0QXVkaW9GaWxlKHVybCk7XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb252ZXJ0aW5nIHZpZGVvIHRvIE1QMzpcIiwgZXJyb3IubWVzc2FnZSk7XG4gIC8vICAgfSBmaW5hbGx5IHtcbiAgLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzQmFyKHBlcmNlbnRhZ2UpIHtcbiAgICAvLyBJbXBsZW1lbnQgdGhlIGxvZ2ljIHRvIHVwZGF0ZSBhIHByb2dyZXNzIGJhciBiYXNlZCBvbiB0aGUgcGVyY2VudGFnZVxuICAgIHNldExvYWRpbmdNZXNzYWdlKFxuICAgICAgcGVyY2VudGFnZSA/IFwiQ29udmVydGluZy4uLlwiIDogYERvd25sb2FkIHByb2dyZXNzOiAke3BlcmNlbnRhZ2V9JWBcbiAgICApO1xuICB9XG4gIGNvbnN0IGNvbnZlcnRUb01wMyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgc2V0QXVkaW9GaWxlKFwiXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJjYWxsbGVkXCIpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgLy8gRGVmaW5lcyBvcHRpb25zIGZvciByZXF1ZXN0XG5cbiAgICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbiAgICAgICAgLy8gRm9yIGEgZmlsZSAoZS5nLiBpbWFnZSwgYXVkaW8pLCByZXNwb25zZSBzaG91bGQgYmUgcmVhZCB0byBCbG9iIChkZWZhdWx0IHRvIEpTIG9iamVjdCBmcm9tIEpTT04pXG5cbiAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIGxlbmd0aENvbXB1dGFibGUgaXMgZmFsc2Ugb3IgdG90YWwgaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFwcm9ncmVzc0V2ZW50Lmxlbmd0aENvbXB1dGFibGUgfHxcbiAgICAgICAgICAgIHByb2dyZXNzRXZlbnQudG90YWwgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gdG90YWwgc2l6ZSBpcyBhdmFpbGFibGUgKHBlcmNlbnRhZ2UgY2FsY3VsYXRpb24pXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID1cbiAgICAgICAgICAgICAgKHByb2dyZXNzRXZlbnQubG9hZGVkIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCkgKiAxMDA7XG4gICAgICAgICAgICB1cGRhdGVQcm9ncmVzc0JhcihwZXJjZW50YWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgbGV0IGZpbGVOYW1lID0gXCJmaWxlTmFtZS5tcDNcIjtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChgL2FwaS9nZXRNcDM/dXJsPSR7dmlkZW9MaW5rfWAsIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwiQWxsIERPTkU6IFwiLFxuICAgICAgICAgICAgcmVzLmhlYWRlcnNbXCJjb250ZW50LWRpc3Bvc2l0aW9uXCJdLnNwbGl0KFwiPVwiKVsxXVxuICAgICAgICAgICk7XG4gICAgICAgICAgZmlsZU5hbWUgPSByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdO1xuICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbiAgICAgIHNldEF1ZGlvRmlsZSh1cmwpO1xuICAgICAgc2V0RmlsZU5hbWUoZmlsZU5hbWUpO1xuICAgICAgLy8gY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgLy8gbGluay5ocmVmID0gdXJsO1xuICAgICAgLy8gbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XG5cbiAgICAgIC8vIC8vIEFwcGVuZCB0byBodG1sIGxpbmsgZWxlbWVudCBwYWdlXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgICAvLyAvLyBTdGFydCBkb3dubG9hZFxuICAgICAgLy8gbGluay5jbGljaygpO1xuXG4gICAgICAvLyBDbGVhbiB1cCBhbmQgcmVtb3ZlIHRoZSBsaW5rXG4gICAgICAvLyBvbkRvd25sb2FkKHsgdXJsOiBkYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBhbGVydChcIlRyeSBhZ2FpbiEgRXJyb3IgY29udmVydGluZyB2aWRlbyB0byBNUDM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGluay5ocmVmID0gYXVkaW9GaWxlO1xuICAgIGxpbmsuZG93bmxvYWQgPVxuICAgICAgZmlsZU5hbWUgPz8gXCJhdWRpb1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyBcIi5tcDNcIjtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgbGluaz8ucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQobGluayk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcImdyZXlcIiB9fT5QbGVhc2UgaW5zZXJ0IGEgdmFsaWQgWW91VHViZSB2aWRlbyBVUkw8L3A+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VUdWJlIHZpZGVvIGxpbmtcIlxuICAgICAgICAgIHZhbHVlPXt2aWRlb0xpbmt9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWaWRlb0xpbmsoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1iYXJcIlxuICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDEwIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17aXNMb2FkaW5nID8gXCJzZWFyY2gtYnV0dG9uLWRpc2FibGVkXCIgOiBcInNlYXJjaC1idXR0b25cIn1cbiAgICAgICAgICBvbkNsaWNrPXtjb252ZXJ0VG9NcDN9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIHshaXNMb2FkaW5nID8gXCJDb252ZXJ0XCIgOiBsb2FkaW5nTWVzc2FnZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxicj48L2JyPlxuXG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIHthdWRpb0ZpbGUgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMTAgfX0+XG4gICAgICAgICAgICA8QXVkaW9QbGF5ZXIgYXVkaW9GaWxlPXthdWRpb0ZpbGV9PjwvQXVkaW9QbGF5ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHthdWRpb0ZpbGUgJiYgKFxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZG93bmxvYWQtYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRG93bmxvYWR9PlxuICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgWW91VHViZURvd25sb2FkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkF1ZGlvUGxheWVyIiwiWW91VHViZURvd25sb2FkIiwidmlkZW9MaW5rIiwic2V0VmlkZW9MaW5rIiwiYXVkaW9GaWxlIiwic2V0QXVkaW9GaWxlIiwiZmlsZU5hbWUiLCJzZXRGaWxlTmFtZSIsImxvYWRpbmdNZXNzYWdlIiwic2V0TG9hZGluZ01lc3NhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1cGRhdGVQcm9ncmVzc0JhciIsInBlcmNlbnRhZ2UiLCJjb252ZXJ0VG9NcDMiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsInJlc3BvbnNlVHlwZSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwidG90YWwiLCJ1bmRlZmluZWQiLCJsb2FkZWQiLCJyZXNwb25zZSIsImdldCIsInRoZW4iLCJyZXMiLCJoZWFkZXJzIiwic3BsaXQiLCJkYXRhIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJoYW5kbGVEb3dubG9hZCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjbGljayIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImRpdiIsInAiLCJzdHlsZSIsImNvbG9yIiwiZGlzcGxheSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJmbGV4IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/YouTubeDownload.jsx\n"));

/***/ })

});