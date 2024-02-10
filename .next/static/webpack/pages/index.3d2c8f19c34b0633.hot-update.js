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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ \"./components/AudioPlayer.jsx\");\n// const handleDownload = async () => {\n//   try {\n//     const options = {\n//       // Defines options for request\n//       responseType: \"blob\",\n//       // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n//       onDownloadProgress: function (progressEvent) {\n//         // Function fires when there is download progress\n//         console.log(\n//           progressEvent,\n//           Math.floor(progressEvent.loaded / progressEvent.total)\n//         );\n//         // Logs percentage complete to the console\n//       },\n//     };\n//     let fileName = \"fileName.mp3\";\n//     const response = await axios\n//       .get(`/api/getMp3?url=${videoUrl}`, options)\n//       .then((res) => {\n//         console.log(\n//           \"All DONE: \",\n//           res.headers[\"content-disposition\"].split(\"=\")[1]\n//         );\n//         fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n//         return res.data;\n//       });\n//     const url = window.URL.createObjectURL(response);\n//     const link = document.createElement(\"a\");\n//     link.href = url;\n//     link.setAttribute(\"download\", fileName);\n//     // Append to html link element page\n//     document.body.appendChild(link);\n//     // Start download\n//     link.click();\n//     // Clean up and remove the link\n//     link.parentNode.removeChild(link);\n//     // onDownload({ url: data });\n//   } catch (error) {\n//     console.error(\"Error downloading video:\", error);\n//   }\n// };\n//   return (\n//     <div>\n//       <input\n//         type=\"text\"\n//         value={videoUrl}\n//         onChange={(e) => setVideoUrl(e.target.value)}\n//         placeholder=\"Enter YouTube video URL\"\n//       />\n//       <button onClick={handleDownload}>Download Audio</button>\n//     </div>\n//   );\n// };\n// export default YouTubeDownload;\n\nvar _s = $RefreshSig$();\n\n\n\nconst YouTubeDownload = ()=>{\n    _s();\n    const [videoLink, setVideoLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [audioFile, setAudioFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loadingMessage, setLoadingMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Loading...\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const convertToMp3 = async () => {\n    //   try {\n    //     setIsLoading(true);\n    //     setAudioFile(\"\");\n    //     const response = await axios.post(\n    //       \"http://localhost:3001/convert\",\n    //       { videoLink },\n    //       { responseType: \"blob\" }\n    //     );\n    //     // Create a blob URL for the response data\n    //     const blob = new Blob([response.data], { type: \"audio/mp3\" });\n    //     const url = URL.createObjectURL(blob);\n    //     console.log(\"url\", url);\n    //     setAudioFile(url);\n    //   } catch (error) {\n    //     console.error(\"Error converting video to MP3:\", error.message);\n    //   } finally {\n    //     setIsLoading(false);\n    //   }\n    // };\n    function updateProgressBar(percentage) {\n        // Implement the logic to update a progress bar based on the percentage\n        setLoadingMessage(percentage ? \"Converting...\" : \"Progress: \".concat(percentage, \"%\"));\n    }\n    const convertToMp3 = async ()=>{\n        try {\n            setIsLoading(true);\n            setAudioFile(\"\");\n            console.log(\"callled\");\n            const options = {\n                // Defines options for request\n                responseType: \"blob\",\n                // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n                onDownloadProgress: function(progressEvent) {\n                    // Check if lengthComputable is false or total is not available\n                    if (!progressEvent.lengthComputable || progressEvent.total === undefined) {\n                        console.log(\"progressEvent----<\", progressEvent);\n                        updateProgressBar();\n                    } else {\n                        console.log(\"progressEvent----<\", progressEvent);\n                        // Handle the case when total size is available (percentage calculation)\n                        const percentage = progressEvent.loaded / progressEvent.total * 100;\n                        updateProgressBar(percentage);\n                    }\n                }\n            };\n            let fileName = \"fileName.mp3\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/getMp3?url=\".concat(videoLink), options).then((res)=>{\n                console.log(\"All DONE: \", res.headers[\"content-disposition\"].split(\"=\")[1]);\n                fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n                return res.data;\n            });\n            const url = window.URL.createObjectURL(response);\n            setAudioFile(url);\n            setFileName(fileName);\n        // const link = document.createElement(\"a\");\n        // link.href = url;\n        // link.setAttribute(\"download\", fileName);\n        // // Append to html link element page\n        // document.body.appendChild(link);\n        // // Start download\n        // link.click();\n        // Clean up and remove the link\n        // onDownload({ url: data });\n        } catch (error) {\n            console.log(error);\n            alert(\"Try again! Error converting video to MP3:\", error.message);\n            setIsLoading(false);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleDownload = ()=>{\n        var _link_parentNode;\n        const link = document.createElement(\"a\");\n        link.href = audioFile;\n        link.download = fileName !== null && fileName !== void 0 ? fileName : \"audio\" + Math.floor(Math.random() * 1000) + \".mp3\";\n        link.click();\n        link === null || link === void 0 ? void 0 : (_link_parentNode = link.parentNode) === null || _link_parentNode === void 0 ? void 0 : _link_parentNode.removeChild(link);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"grey\"\n                },\n                children: \"Please insert a valid YouTube video URL\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 179,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter YouTube video link\",\n                        value: videoLink,\n                        onChange: (e)=>setVideoLink(e.target.value),\n                        className: \"search-bar\",\n                        style: {\n                            flex: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 181,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: isLoading ? \"search-button-disabled\" : \"search-button\",\n                        onClick: convertToMp3,\n                        disabled: isLoading,\n                        children: !isLoading ? \"Convert\" : loadingMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 190,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 200,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 10\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            audioFile: audioFile\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                            lineNumber: 204,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 203,\n                        columnNumber: 11\n                    }, undefined),\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: handleDownload,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 208,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n        lineNumber: 178,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YouTubeDownload, \"/gjm3CSraAtPQz/duROStBkET+c=\");\n_c = YouTubeDownload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YouTubeDownload);\nvar _c;\n$RefreshReg$(_c, \"YouTubeDownload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztnQkFBTzs7a0NBQzVCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3pEO3dCQUNQMEQsVUFBVSxDQUFDQyxJQUFNMUQsYUFBYTBELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDNUNJLFdBQVU7d0JBQ1ZWLE9BQU87NEJBQUVXLE1BQU07d0JBQUc7Ozs7OztrQ0FHcEIsOERBQUNDO3dCQUNDRixXQUFXckQsWUFBWSwyQkFBMkI7d0JBQ2xEd0QsU0FBU3BEO3dCQUNUcUQsVUFBVXpEO2tDQUVULENBQUNBLFlBQVksWUFBWUY7Ozs7Ozs7Ozs7OzswQkFHOUIsOERBQUM0RDs7Ozs7MEJBRUQsOERBQUNBOzs7OzswQkFDRCw4REFBQ2pCO2dCQUFJRSxPQUFPO29CQUFFRSxTQUFTO2dCQUFPOztvQkFDM0JuRCwyQkFDQyw4REFBQytDO3dCQUFJRSxPQUFPOzRCQUFFVyxNQUFNO3dCQUFHO2tDQUNyQiw0RUFBQ2hFLG9EQUFXQTs0QkFBQ0ksV0FBV0E7Ozs7Ozs7Ozs7O29CQUczQkEsMkJBQ0MsOERBQUM2RDt3QkFBT0YsV0FBVTt3QkFBa0JHLFNBQVMzQjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RTtHQW5KTXRDO0tBQUFBO0FBcUpOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvWW91VHViZURvd25sb2FkLmpzeD85MTIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKCkgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4vLyAgICAgICAvLyBEZWZpbmVzIG9wdGlvbnMgZm9yIHJlcXVlc3RcblxuLy8gICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbi8vICAgICAgIC8vIEZvciBhIGZpbGUgKGUuZy4gaW1hZ2UsIGF1ZGlvKSwgcmVzcG9uc2Ugc2hvdWxkIGJlIHJlYWQgdG8gQmxvYiAoZGVmYXVsdCB0byBKUyBvYmplY3QgZnJvbSBKU09OKVxuXG4vLyAgICAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4vLyAgICAgICAgIC8vIEZ1bmN0aW9uIGZpcmVzIHdoZW4gdGhlcmUgaXMgZG93bmxvYWQgcHJvZ3Jlc3NcblxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgICAgICBwcm9ncmVzc0V2ZW50LFxuLy8gICAgICAgICAgIE1hdGguZmxvb3IocHJvZ3Jlc3NFdmVudC5sb2FkZWQgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBMb2dzIHBlcmNlbnRhZ2UgY29tcGxldGUgdG8gdGhlIGNvbnNvbGVcbi8vICAgICAgIH0sXG4vLyAgICAgfTtcbi8vICAgICBsZXQgZmlsZU5hbWUgPSBcImZpbGVOYW1lLm1wM1wiO1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Ncbi8vICAgICAgIC5nZXQoYC9hcGkvZ2V0TXAzP3VybD0ke3ZpZGVvVXJsfWAsIG9wdGlvbnMpXG4vLyAgICAgICAudGhlbigocmVzKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFxuLy8gICAgICAgICAgIFwiQWxsIERPTkU6IFwiLFxuLy8gICAgICAgICAgIHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV1cbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgZmlsZU5hbWUgPSByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdO1xuLy8gICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHJlc3BvbnNlKTtcbi8vICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vLyAgICAgbGluay5ocmVmID0gdXJsO1xuLy8gICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXG4vLyAgICAgLy8gQXBwZW5kIHRvIGh0bWwgbGluayBlbGVtZW50IHBhZ2Vcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuXG4vLyAgICAgLy8gU3RhcnQgZG93bmxvYWRcbi8vICAgICBsaW5rLmNsaWNrKCk7XG5cbi8vICAgICAvLyBDbGVhbiB1cCBhbmQgcmVtb3ZlIHRoZSBsaW5rXG4vLyAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuLy8gICAgIC8vIG9uRG93bmxvYWQoeyB1cmw6IGRhdGEgfSk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRvd25sb2FkaW5nIHZpZGVvOlwiLCBlcnJvcik7XG4vLyAgIH1cbi8vIH07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGlucHV0XG4vLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbi8vICAgICAgICAgdmFsdWU9e3ZpZGVvVXJsfVxuLy8gICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZpZGVvVXJsKGUudGFyZ2V0LnZhbHVlKX1cbi8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VUdWJlIHZpZGVvIFVSTFwiXG4vLyAgICAgICAvPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+RG93bmxvYWQgQXVkaW88L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFlvdVR1YmVEb3dubG9hZDtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQXVkaW9QbGF5ZXIgZnJvbSBcIi4vQXVkaW9QbGF5ZXJcIjtcbmNvbnN0IFlvdVR1YmVEb3dubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZGVvTGluaywgc2V0VmlkZW9MaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYXVkaW9GaWxlLCBzZXRBdWRpb0ZpbGVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmdNZXNzYWdlLCBzZXRMb2FkaW5nTWVzc2FnZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcuLi5cIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IGNvbnZlcnRUb01wMyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gIC8vICAgICBzZXRBdWRpb0ZpbGUoXCJcIik7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gIC8vICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvbnZlcnRcIixcbiAgLy8gICAgICAgeyB2aWRlb0xpbmsgfSxcbiAgLy8gICAgICAgeyByZXNwb25zZVR5cGU6IFwiYmxvYlwiIH1cbiAgLy8gICAgICk7XG5cbiAgLy8gICAgIC8vIENyZWF0ZSBhIGJsb2IgVVJMIGZvciB0aGUgcmVzcG9uc2UgZGF0YVxuICAvLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSwgeyB0eXBlOiBcImF1ZGlvL21wM1wiIH0pO1xuICAvLyAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAvLyAgICAgY29uc29sZS5sb2coXCJ1cmxcIiwgdXJsKTtcbiAgLy8gICAgIHNldEF1ZGlvRmlsZSh1cmwpO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29udmVydGluZyB2aWRlbyB0byBNUDM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAvLyAgIH0gZmluYWxseSB7XG4gIC8vICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzc0JhcihwZXJjZW50YWdlKSB7XG4gICAgLy8gSW1wbGVtZW50IHRoZSBsb2dpYyB0byB1cGRhdGUgYSBwcm9ncmVzcyBiYXIgYmFzZWQgb24gdGhlIHBlcmNlbnRhZ2VcbiAgICBzZXRMb2FkaW5nTWVzc2FnZShcbiAgICAgIHBlcmNlbnRhZ2UgPyBcIkNvbnZlcnRpbmcuLi5cIiA6IGBQcm9ncmVzczogJHtwZXJjZW50YWdlfSVgXG4gICAgKTtcbiAgfVxuICBjb25zdCBjb252ZXJ0VG9NcDMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEF1ZGlvRmlsZShcIlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGxlZFwiKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIC8vIERlZmluZXMgb3B0aW9ucyBmb3IgcmVxdWVzdFxuXG4gICAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIsXG4gICAgICAgIC8vIEZvciBhIGZpbGUgKGUuZy4gaW1hZ2UsIGF1ZGlvKSwgcmVzcG9uc2Ugc2hvdWxkIGJlIHJlYWQgdG8gQmxvYiAoZGVmYXVsdCB0byBKUyBvYmplY3QgZnJvbSBKU09OKVxuXG4gICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBsZW5ndGhDb21wdXRhYmxlIGlzIGZhbHNlIG9yIHRvdGFsIGlzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcHJvZ3Jlc3NFdmVudC5sZW5ndGhDb21wdXRhYmxlIHx8XG4gICAgICAgICAgICBwcm9ncmVzc0V2ZW50LnRvdGFsID09PSB1bmRlZmluZWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZ3Jlc3NFdmVudC0tLS08XCIsIHByb2dyZXNzRXZlbnQpO1xuICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9ncmVzc0V2ZW50LS0tLTxcIiwgcHJvZ3Jlc3NFdmVudCk7XG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiB0b3RhbCBzaXplIGlzIGF2YWlsYWJsZSAocGVyY2VudGFnZSBjYWxjdWxhdGlvbilcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgICAocHJvZ3Jlc3NFdmVudC5sb2FkZWQgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKSAqIDEwMDtcbiAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzQmFyKHBlcmNlbnRhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBsZXQgZmlsZU5hbWUgPSBcImZpbGVOYW1lLm1wM1wiO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xuICAgICAgICAuZ2V0KGAvYXBpL2dldE1wMz91cmw9JHt2aWRlb0xpbmt9YCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCJBbGwgRE9ORTogXCIsXG4gICAgICAgICAgICByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWxlTmFtZSA9IHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV07XG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwocmVzcG9uc2UpO1xuICAgICAgc2V0QXVkaW9GaWxlKHVybCk7XG4gICAgICBzZXRGaWxlTmFtZShmaWxlTmFtZSk7XG4gICAgICAvLyBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAvLyBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcblxuICAgICAgLy8gLy8gQXBwZW5kIHRvIGh0bWwgbGluayBlbGVtZW50IHBhZ2VcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICAgIC8vIC8vIFN0YXJ0IGRvd25sb2FkXG4gICAgICAvLyBsaW5rLmNsaWNrKCk7XG5cbiAgICAgIC8vIENsZWFuIHVwIGFuZCByZW1vdmUgdGhlIGxpbmtcbiAgICAgIC8vIG9uRG93bmxvYWQoeyB1cmw6IGRhdGEgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIGFsZXJ0KFwiVHJ5IGFnYWluISBFcnJvciBjb252ZXJ0aW5nIHZpZGVvIHRvIE1QMzpcIiwgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLmhyZWYgPSBhdWRpb0ZpbGU7XG4gICAgbGluay5kb3dubG9hZCA9XG4gICAgICBmaWxlTmFtZSA/PyBcImF1ZGlvXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIFwiLm1wM1wiO1xuICAgIGxpbmsuY2xpY2soKTtcbiAgICBsaW5rPy5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiZ3JleVwiIH19PlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBZb3VUdWJlIHZpZGVvIFVSTDwvcD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdVR1YmUgdmlkZW8gbGlua1wiXG4gICAgICAgICAgdmFsdWU9e3ZpZGVvTGlua31cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZpZGVvTGluayhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJhclwiXG4gICAgICAgICAgc3R5bGU9e3sgZmxleDogMTAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0xvYWRpbmcgPyBcInNlYXJjaC1idXR0b24tZGlzYWJsZWRcIiA6IFwic2VhcmNoLWJ1dHRvblwifVxuICAgICAgICAgIG9uQ2xpY2s9e2NvbnZlcnRUb01wM31cbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICA+XG4gICAgICAgICAgeyFpc0xvYWRpbmcgPyBcIkNvbnZlcnRcIiA6IGxvYWRpbmdNZXNzYWdlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyPjwvYnI+XG5cbiAgICAgIDxicj48L2JyPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAge2F1ZGlvRmlsZSAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxMCB9fT5cbiAgICAgICAgICAgIDxBdWRpb1BsYXllciBhdWRpb0ZpbGU9e2F1ZGlvRmlsZX0+PC9BdWRpb1BsYXllcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2F1ZGlvRmlsZSAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkb3dubG9hZC1idXR0b25cIiBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH0+XG4gICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBZb3VUdWJlRG93bmxvYWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQXVkaW9QbGF5ZXIiLCJZb3VUdWJlRG93bmxvYWQiLCJ2aWRlb0xpbmsiLCJzZXRWaWRlb0xpbmsiLCJhdWRpb0ZpbGUiLCJzZXRBdWRpb0ZpbGUiLCJmaWxlTmFtZSIsInNldEZpbGVOYW1lIiwibG9hZGluZ01lc3NhZ2UiLCJzZXRMb2FkaW5nTWVzc2FnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVwZGF0ZVByb2dyZXNzQmFyIiwicGVyY2VudGFnZSIsImNvbnZlcnRUb01wMyIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwicmVzcG9uc2VUeXBlIiwib25Eb3dubG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsImxlbmd0aENvbXB1dGFibGUiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImxvYWRlZCIsInJlc3BvbnNlIiwiZ2V0IiwidGhlbiIsInJlcyIsImhlYWRlcnMiLCJzcGxpdCIsImRhdGEiLCJ1cmwiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsImhhbmRsZURvd25sb2FkIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNsaWNrIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZGl2IiwicCIsInN0eWxlIiwiY29sb3IiLCJkaXNwbGF5IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNsYXNzTmFtZSIsImZsZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/YouTubeDownload.jsx\n"));

/***/ })

});