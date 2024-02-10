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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ \"./components/AudioPlayer.jsx\");\n// const handleDownload = async () => {\n//   try {\n//     const options = {\n//       // Defines options for request\n//       responseType: \"blob\",\n//       // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n//       onDownloadProgress: function (progressEvent) {\n//         // Function fires when there is download progress\n//         console.log(\n//           progressEvent,\n//           Math.floor(progressEvent.loaded / progressEvent.total)\n//         );\n//         // Logs percentage complete to the console\n//       },\n//     };\n//     let fileName = \"fileName.mp3\";\n//     const response = await axios\n//       .get(`/api/getMp3?url=${videoUrl}`, options)\n//       .then((res) => {\n//         console.log(\n//           \"All DONE: \",\n//           res.headers[\"content-disposition\"].split(\"=\")[1]\n//         );\n//         fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n//         return res.data;\n//       });\n//     const url = window.URL.createObjectURL(response);\n//     const link = document.createElement(\"a\");\n//     link.href = url;\n//     link.setAttribute(\"download\", fileName);\n//     // Append to html link element page\n//     document.body.appendChild(link);\n//     // Start download\n//     link.click();\n//     // Clean up and remove the link\n//     link.parentNode.removeChild(link);\n//     // onDownload({ url: data });\n//   } catch (error) {\n//     console.error(\"Error downloading video:\", error);\n//   }\n// };\n//   return (\n//     <div>\n//       <input\n//         type=\"text\"\n//         value={videoUrl}\n//         onChange={(e) => setVideoUrl(e.target.value)}\n//         placeholder=\"Enter YouTube video URL\"\n//       />\n//       <button onClick={handleDownload}>Download Audio</button>\n//     </div>\n//   );\n// };\n// export default YouTubeDownload;\n\nvar _s = $RefreshSig$();\n\n\n\nconst YouTubeDownload = ()=>{\n    _s();\n    const [videoLink, setVideoLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [audioFile, setAudioFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fileName, setFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loadingMessage, setLoadingMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const convertToMp3 = async () => {\n    //   try {\n    //     setIsLoading(true);\n    //     setAudioFile(\"\");\n    //     const response = await axios.post(\n    //       \"http://localhost:3001/convert\",\n    //       { videoLink },\n    //       { responseType: \"blob\" }\n    //     );\n    //     // Create a blob URL for the response data\n    //     const blob = new Blob([response.data], { type: \"audio/mp3\" });\n    //     const url = URL.createObjectURL(blob);\n    //     console.log(\"url\", url);\n    //     setAudioFile(url);\n    //   } catch (error) {\n    //     console.error(\"Error converting video to MP3:\", error.message);\n    //   } finally {\n    //     setIsLoading(false);\n    //   }\n    // };\n    function updateProgressBar(percentage) {\n        // Implement the logic to update a progress bar based on the percentage\n        setLoadingMessage(percentage ? \"Loading...\" : \"Download progress: \".concat(percentage, \"%\"));\n    }\n    const convertToMp3 = async ()=>{\n        try {\n            setIsLoading(true);\n            setAudioFile(\"\");\n            console.log(\"callled\");\n            const options = {\n                // Defines options for request\n                responseType: \"blob\",\n                // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n                onDownloadProgress: function(progressEvent) {\n                    // Check if lengthComputable is false or total is not available\n                    if (!progressEvent.lengthComputable || progressEvent.total === undefined) {\n                        updateProgressBar();\n                    } else {\n                        // Handle the case when total size is available (percentage calculation)\n                        const percentage = progressEvent.loaded / progressEvent.total * 100;\n                        updateProgressBar(percentage);\n                    }\n                }\n            };\n            let fileName = \"fileName.mp3\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/getMp3?url=\".concat(videoLink), options).then((res)=>{\n                console.log(\"All DONE: \", res.headers[\"content-disposition\"].split(\"=\")[1]);\n                fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n                return res.data;\n            });\n            const url = window.URL.createObjectURL(response);\n            setAudioFile(url);\n            setFileName(fileName);\n        // const link = document.createElement(\"a\");\n        // link.href = url;\n        // link.setAttribute(\"download\", fileName);\n        // // Append to html link element page\n        // document.body.appendChild(link);\n        // // Start download\n        // link.click();\n        // Clean up and remove the link\n        // onDownload({ url: data });\n        } catch (error) {\n            console.log(error);\n            alert(\"Try again! Error converting video to MP3:\", error.message);\n            setIsLoading(false);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleDownload = ()=>{\n        var _link_parentNode;\n        const link = document.createElement(\"a\");\n        link.href = audioFile;\n        link.download = fileName !== null && fileName !== void 0 ? fileName : \"audio\" + Math.floor(Math.random() * 1000) + \".mp3\";\n        link.click();\n        link === null || link === void 0 ? void 0 : (_link_parentNode = link.parentNode) === null || _link_parentNode === void 0 ? void 0 : _link_parentNode.removeChild(link);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"grey\"\n                },\n                children: \"Please insert a valid YouTube video URL\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Enter YouTube video link\",\n                        value: videoLink,\n                        onChange: (e)=>setVideoLink(e.target.value),\n                        className: \"search-bar\",\n                        style: {\n                            flex: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: isLoading ? \"search-button-disabled\" : \"search-button\",\n                        onClick: convertToMp3,\n                        disabled: isLoading,\n                        children: !isLoading ? \"Convert\" : loadingMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 196,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            flex: 10\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            audioFile: audioFile\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                            lineNumber: 202,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 201,\n                        columnNumber: 11\n                    }, undefined),\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: handleDownload,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 206,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 199,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n        lineNumber: 176,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YouTubeDownload, \"AKV/kyEFFpRXM85Yx+OYkaImQsc=\");\n_c = YouTubeDownload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YouTubeDownload);\nvar _c;\n$RefreshReg$(_c, \"YouTubeDownload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDUDBELFVBQVUsQ0FBQ0MsSUFBTTFELGFBQWEwRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzVDSSxXQUFVO3dCQUNWVixPQUFPOzRCQUFFVyxNQUFNO3dCQUFHOzs7Ozs7a0NBR3BCLDhEQUFDQzt3QkFDQ0YsV0FBV3JELFlBQVksMkJBQTJCO3dCQUNsRHdELFNBQVNwRDt3QkFDVHFELFVBQVV6RDtrQ0FFVCxDQUFDQSxZQUFZLFlBQVlGOzs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDNEQ7Ozs7OzBCQUVELDhEQUFDQTs7Ozs7MEJBQ0QsOERBQUNqQjtnQkFBSUUsT0FBTztvQkFBRUUsU0FBUztnQkFBTzs7b0JBQzNCbkQsMkJBQ0MsOERBQUMrQzt3QkFBSUUsT0FBTzs0QkFBRVcsTUFBTTt3QkFBRztrQ0FDckIsNEVBQUNoRSxvREFBV0E7NEJBQUNJLFdBQVdBOzs7Ozs7Ozs7OztvQkFHM0JBLDJCQUNDLDhEQUFDNkQ7d0JBQU9GLFdBQVU7d0JBQWtCRyxTQUFTM0I7a0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkU7R0FqSk10QztLQUFBQTtBQW1KTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1lvdVR1YmVEb3dubG9hZC5qc3g/OTEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBoYW5kbGVEb3dubG9hZCA9IGFzeW5jICgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCBvcHRpb25zID0ge1xuLy8gICAgICAgLy8gRGVmaW5lcyBvcHRpb25zIGZvciByZXF1ZXN0XG5cbi8vICAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIsXG4vLyAgICAgICAvLyBGb3IgYSBmaWxlIChlLmcuIGltYWdlLCBhdWRpbyksIHJlc3BvbnNlIHNob3VsZCBiZSByZWFkIHRvIEJsb2IgKGRlZmF1bHQgdG8gSlMgb2JqZWN0IGZyb20gSlNPTilcblxuLy8gICAgICAgb25Eb3dubG9hZFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuLy8gICAgICAgICAvLyBGdW5jdGlvbiBmaXJlcyB3aGVuIHRoZXJlIGlzIGRvd25sb2FkIHByb2dyZXNzXG5cbi8vICAgICAgICAgY29uc29sZS5sb2coXG4vLyAgICAgICAgICAgcHJvZ3Jlc3NFdmVudCxcbi8vICAgICAgICAgICBNYXRoLmZsb29yKHByb2dyZXNzRXZlbnQubG9hZGVkIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgLy8gTG9ncyBwZXJjZW50YWdlIGNvbXBsZXRlIHRvIHRoZSBjb25zb2xlXG4vLyAgICAgICB9LFxuLy8gICAgIH07XG4vLyAgICAgbGV0IGZpbGVOYW1lID0gXCJmaWxlTmFtZS5tcDNcIjtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXG4vLyAgICAgICAuZ2V0KGAvYXBpL2dldE1wMz91cmw9JHt2aWRlb1VybH1gLCBvcHRpb25zKVxuLy8gICAgICAgLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgICAgICBcIkFsbCBET05FOiBcIixcbi8vICAgICAgICAgICByZXMuaGVhZGVyc1tcImNvbnRlbnQtZGlzcG9zaXRpb25cIl0uc3BsaXQoXCI9XCIpWzFdXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIGZpbGVOYW1lID0gcmVzLmhlYWRlcnNbXCJjb250ZW50LWRpc3Bvc2l0aW9uXCJdLnNwbGl0KFwiPVwiKVsxXTtcbi8vICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZSk7XG4vLyAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuLy8gICAgIGxpbmsuaHJlZiA9IHVybDtcbi8vICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcblxuLy8gICAgIC8vIEFwcGVuZCB0byBodG1sIGxpbmsgZWxlbWVudCBwYWdlXG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcblxuLy8gICAgIC8vIFN0YXJ0IGRvd25sb2FkXG4vLyAgICAgbGluay5jbGljaygpO1xuXG4vLyAgICAgLy8gQ2xlYW4gdXAgYW5kIHJlbW92ZSB0aGUgbGlua1xuLy8gICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbi8vICAgICAvLyBvbkRvd25sb2FkKHsgdXJsOiBkYXRhIH0pO1xuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkb3dubG9hZGluZyB2aWRlbzpcIiwgZXJyb3IpO1xuLy8gICB9XG4vLyB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgIDxpbnB1dFxuLy8gICAgICAgICB0eXBlPVwidGV4dFwiXG4vLyAgICAgICAgIHZhbHVlPXt2aWRlb1VybH1cbi8vICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWaWRlb1VybChlLnRhcmdldC52YWx1ZSl9XG4vLyAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91VHViZSB2aWRlbyBVUkxcIlxuLy8gICAgICAgLz5cbi8vICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRG93bmxvYWR9PkRvd25sb2FkIEF1ZGlvPC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBZb3VUdWJlRG93bmxvYWQ7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEF1ZGlvUGxheWVyIGZyb20gXCIuL0F1ZGlvUGxheWVyXCI7XG5jb25zdCBZb3VUdWJlRG93bmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IFt2aWRlb0xpbmssIHNldFZpZGVvTGlua10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1ZGlvRmlsZSwgc2V0QXVkaW9GaWxlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0RmlsZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nTWVzc2FnZSwgc2V0TG9hZGluZ01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IGNvbnZlcnRUb01wMyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gIC8vICAgICBzZXRBdWRpb0ZpbGUoXCJcIik7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gIC8vICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvbnZlcnRcIixcbiAgLy8gICAgICAgeyB2aWRlb0xpbmsgfSxcbiAgLy8gICAgICAgeyByZXNwb25zZVR5cGU6IFwiYmxvYlwiIH1cbiAgLy8gICAgICk7XG5cbiAgLy8gICAgIC8vIENyZWF0ZSBhIGJsb2IgVVJMIGZvciB0aGUgcmVzcG9uc2UgZGF0YVxuICAvLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSwgeyB0eXBlOiBcImF1ZGlvL21wM1wiIH0pO1xuICAvLyAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAvLyAgICAgY29uc29sZS5sb2coXCJ1cmxcIiwgdXJsKTtcbiAgLy8gICAgIHNldEF1ZGlvRmlsZSh1cmwpO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29udmVydGluZyB2aWRlbyB0byBNUDM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAvLyAgIH0gZmluYWxseSB7XG4gIC8vICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzc0JhcihwZXJjZW50YWdlKSB7XG4gICAgLy8gSW1wbGVtZW50IHRoZSBsb2dpYyB0byB1cGRhdGUgYSBwcm9ncmVzcyBiYXIgYmFzZWQgb24gdGhlIHBlcmNlbnRhZ2VcbiAgICBzZXRMb2FkaW5nTWVzc2FnZShcbiAgICAgIHBlcmNlbnRhZ2UgPyBcIkxvYWRpbmcuLi5cIiA6IGBEb3dubG9hZCBwcm9ncmVzczogJHtwZXJjZW50YWdlfSVgXG4gICAgKTtcbiAgfVxuICBjb25zdCBjb252ZXJ0VG9NcDMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIHNldEF1ZGlvRmlsZShcIlwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGxlZFwiKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIC8vIERlZmluZXMgb3B0aW9ucyBmb3IgcmVxdWVzdFxuXG4gICAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIsXG4gICAgICAgIC8vIEZvciBhIGZpbGUgKGUuZy4gaW1hZ2UsIGF1ZGlvKSwgcmVzcG9uc2Ugc2hvdWxkIGJlIHJlYWQgdG8gQmxvYiAoZGVmYXVsdCB0byBKUyBvYmplY3QgZnJvbSBKU09OKVxuXG4gICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBsZW5ndGhDb21wdXRhYmxlIGlzIGZhbHNlIG9yIHRvdGFsIGlzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhcHJvZ3Jlc3NFdmVudC5sZW5ndGhDb21wdXRhYmxlIHx8XG4gICAgICAgICAgICBwcm9ncmVzc0V2ZW50LnRvdGFsID09PSB1bmRlZmluZWRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHVwZGF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIHRvdGFsIHNpemUgaXMgYXZhaWxhYmxlIChwZXJjZW50YWdlIGNhbGN1bGF0aW9uKVxuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9XG4gICAgICAgICAgICAgIChwcm9ncmVzc0V2ZW50LmxvYWRlZCAvIHByb2dyZXNzRXZlbnQudG90YWwpICogMTAwO1xuICAgICAgICAgICAgdXBkYXRlUHJvZ3Jlc3NCYXIocGVyY2VudGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGxldCBmaWxlTmFtZSA9IFwiZmlsZU5hbWUubXAzXCI7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoYC9hcGkvZ2V0TXAzP3VybD0ke3ZpZGVvTGlua31gLCBvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIkFsbCBET05FOiBcIixcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICApO1xuICAgICAgICAgIGZpbGVOYW1lID0gcmVzLmhlYWRlcnNbXCJjb250ZW50LWRpc3Bvc2l0aW9uXCJdLnNwbGl0KFwiPVwiKVsxXTtcbiAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZSk7XG4gICAgICBzZXRBdWRpb0ZpbGUodXJsKTtcbiAgICAgIHNldEZpbGVOYW1lKGZpbGVOYW1lKTtcbiAgICAgIC8vIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIC8vIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIC8vIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXG4gICAgICAvLyAvLyBBcHBlbmQgdG8gaHRtbCBsaW5rIGVsZW1lbnQgcGFnZVxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgICAgLy8gLy8gU3RhcnQgZG93bmxvYWRcbiAgICAgIC8vIGxpbmsuY2xpY2soKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgYW5kIHJlbW92ZSB0aGUgbGlua1xuICAgICAgLy8gb25Eb3dubG9hZCh7IHVybDogZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgYWxlcnQoXCJUcnkgYWdhaW4hIEVycm9yIGNvbnZlcnRpbmcgdmlkZW8gdG8gTVAzOlwiLCBlcnJvci5tZXNzYWdlKTtcblxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IGF1ZGlvRmlsZTtcbiAgICBsaW5rLmRvd25sb2FkID1cbiAgICAgIGZpbGVOYW1lID8/IFwiYXVkaW9cIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgXCIubXAzXCI7XG4gICAgbGluay5jbGljaygpO1xuICAgIGxpbms/LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKGxpbmspO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJncmV5XCIgfX0+UGxlYXNlIGluc2VydCBhIHZhbGlkIFlvdVR1YmUgdmlkZW8gVVJMPC9wPlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91VHViZSB2aWRlbyBsaW5rXCJcbiAgICAgICAgICB2YWx1ZT17dmlkZW9MaW5rfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmlkZW9MaW5rKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcbiAgICAgICAgICBzdHlsZT17eyBmbGV4OiAxMCB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2lzTG9hZGluZyA/IFwic2VhcmNoLWJ1dHRvbi1kaXNhYmxlZFwiIDogXCJzZWFyY2gtYnV0dG9uXCJ9XG4gICAgICAgICAgb25DbGljaz17Y29udmVydFRvTXAzfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICB7IWlzTG9hZGluZyA/IFwiQ29udmVydFwiIDogbG9hZGluZ01lc3NhZ2V9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnI+PC9icj5cblxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICB7YXVkaW9GaWxlICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEwIH19PlxuICAgICAgICAgICAgPEF1ZGlvUGxheWVyIGF1ZGlvRmlsZT17YXVkaW9GaWxlfT48L0F1ZGlvUGxheWVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7YXVkaW9GaWxlICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRvd25sb2FkLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5cbiAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFlvdVR1YmVEb3dubG9hZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJBdWRpb1BsYXllciIsIllvdVR1YmVEb3dubG9hZCIsInZpZGVvTGluayIsInNldFZpZGVvTGluayIsImF1ZGlvRmlsZSIsInNldEF1ZGlvRmlsZSIsImZpbGVOYW1lIiwic2V0RmlsZU5hbWUiLCJsb2FkaW5nTWVzc2FnZSIsInNldExvYWRpbmdNZXNzYWdlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXBkYXRlUHJvZ3Jlc3NCYXIiLCJwZXJjZW50YWdlIiwiY29udmVydFRvTXAzIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJyZXNwb25zZVR5cGUiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwibGVuZ3RoQ29tcHV0YWJsZSIsInRvdGFsIiwidW5kZWZpbmVkIiwibG9hZGVkIiwicmVzcG9uc2UiLCJnZXQiLCJ0aGVuIiwicmVzIiwiaGVhZGVycyIsInNwbGl0IiwiZGF0YSIsInVybCIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwiaGFuZGxlRG93bmxvYWQiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2xpY2siLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJkaXYiLCJwIiwic3R5bGUiLCJjb2xvciIsImRpc3BsYXkiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiZmxleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/YouTubeDownload.jsx\n"));

/***/ })

});