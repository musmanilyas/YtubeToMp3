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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _AudioPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioPlayer */ \"./components/AudioPlayer.jsx\");\n// const handleDownload = async () => {\n//   try {\n//     const options = {\n//       // Defines options for request\n//       responseType: \"blob\",\n//       // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n//       onDownloadProgress: function (progressEvent) {\n//         // Function fires when there is download progress\n//         console.log(\n//           progressEvent,\n//           Math.floor(progressEvent.loaded / progressEvent.total)\n//         );\n//         // Logs percentage complete to the console\n//       },\n//     };\n//     let fileName = \"fileName.mp3\";\n//     const response = await axios\n//       .get(`/api/getMp3?url=${videoUrl}`, options)\n//       .then((res) => {\n//         console.log(\n//           \"All DONE: \",\n//           res.headers[\"content-disposition\"].split(\"=\")[1]\n//         );\n//         fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n//         return res.data;\n//       });\n//     const url = window.URL.createObjectURL(response);\n//     const link = document.createElement(\"a\");\n//     link.href = url;\n//     link.setAttribute(\"download\", fileName);\n//     // Append to html link element page\n//     document.body.appendChild(link);\n//     // Start download\n//     link.click();\n//     // Clean up and remove the link\n//     link.parentNode.removeChild(link);\n//     // onDownload({ url: data });\n//   } catch (error) {\n//     console.error(\"Error downloading video:\", error);\n//   }\n// };\n//   return (\n//     <div>\n//       <input\n//         type=\"text\"\n//         value={videoUrl}\n//         onChange={(e) => setVideoUrl(e.target.value)}\n//         placeholder=\"Enter YouTube video URL\"\n//       />\n//       <button onClick={handleDownload}>Download Audio</button>\n//     </div>\n//   );\n// };\n// export default YouTubeDownload;\n\nvar _s = $RefreshSig$();\n\n\n\nconst YouTubeDownload = ()=>{\n    _s();\n    const [videoLink, setVideoLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [audioFile, setAudioFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const convertToMp3 = async () => {\n    //   try {\n    //     setIsLoading(true);\n    //     setAudioFile(\"\");\n    //     const response = await axios.post(\n    //       \"http://localhost:3001/convert\",\n    //       { videoLink },\n    //       { responseType: \"blob\" }\n    //     );\n    //     // Create a blob URL for the response data\n    //     const blob = new Blob([response.data], { type: \"audio/mp3\" });\n    //     const url = URL.createObjectURL(blob);\n    //     console.log(\"url\", url);\n    //     setAudioFile(url);\n    //   } catch (error) {\n    //     console.error(\"Error converting video to MP3:\", error.message);\n    //   } finally {\n    //     setIsLoading(false);\n    //   }\n    // };\n    const convertToMp3 = async ()=>{\n        try {\n            setIsLoading(true);\n            console.log(\"callled\");\n            const options = {\n                // Defines options for request\n                responseType: \"blob\",\n                // For a file (e.g. image, audio), response should be read to Blob (default to JS object from JSON)\n                onDownloadProgress: function(progressEvent) {\n                    // Function fires when there is download progress\n                    console.log(progressEvent, Math.floor(progressEvent.loaded / progressEvent.total));\n                // Logs percentage complete to the console\n                }\n            };\n            let fileName = \"fileName.mp3\";\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3000/api/getMp3?url=\".concat(videoLink), options).then((res)=>{\n                console.log(\"All DONE: \", res.headers[\"content-disposition\"].split(\"=\")[1]);\n                fileName = res.headers[\"content-disposition\"].split(\"=\")[1];\n                return res.data;\n            });\n            const url = window.URL.createObjectURL(response);\n            setAudioFile(url);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.setAttribute(\"download\", fileName);\n            // Append to html link element page\n            document.body.appendChild(link);\n            // Start download\n            link.click();\n            // Clean up and remove the link\n            link.parentNode.removeChild(link);\n        // onDownload({ url: data });\n        } catch (error) {\n            console.log(error);\n            alert(\"Try again! Error converting video to MP3:\", error.message);\n            setIsLoading(false);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleDownload = ()=>{\n        const link = document.createElement(\"a\");\n        link.href = audioFile;\n        link.download = \"audio\" + Math.floor(Math.random() * 1000) + \".mp3\";\n        link.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter YouTube video link\",\n                value: videoLink,\n                onChange: (e)=>setVideoLink(e.target.value),\n                className: \"search-bar\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: isLoading ? \"search-button-disabled\" : \"search-button\",\n                onClick: convertToMp3,\n                disabled: isLoading,\n                children: \"Convert to MP3\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 179,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    gap: 4\n                },\n                children: [\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudioPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        audioFile: audioFile\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 181,\n                        columnNumber: 23\n                    }, undefined),\n                    audioFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"download-button\",\n                        onClick: handleDownload,\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                        lineNumber: 183,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\YtubeToMp3\\\\components\\\\YouTubeDownload.jsx\",\n        lineNumber: 161,\n        columnNumber: 5\n    }, undefined);\n};\n_s(YouTubeDownload, \"TsphUSlsVmBEBcqYf8tg4VuiEi4=\");\n_c = YouTubeDownload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (YouTubeDownload);\nvar _c;\n$RefreshReg$(_c, \"YouTubeDownload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0M7S0FBQUE7QUE0SE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Zb3VUdWJlRG93bmxvYWQuanN4PzkxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgaGFuZGxlRG93bmxvYWQgPSBhc3luYyAoKSA9PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbi8vICAgICAgIC8vIERlZmluZXMgb3B0aW9ucyBmb3IgcmVxdWVzdFxuXG4vLyAgICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiLFxuLy8gICAgICAgLy8gRm9yIGEgZmlsZSAoZS5nLiBpbWFnZSwgYXVkaW8pLCByZXNwb25zZSBzaG91bGQgYmUgcmVhZCB0byBCbG9iIChkZWZhdWx0IHRvIEpTIG9iamVjdCBmcm9tIEpTT04pXG5cbi8vICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbi8vICAgICAgICAgLy8gRnVuY3Rpb24gZmlyZXMgd2hlbiB0aGVyZSBpcyBkb3dubG9hZCBwcm9ncmVzc1xuXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFxuLy8gICAgICAgICAgIHByb2dyZXNzRXZlbnQsXG4vLyAgICAgICAgICAgTWF0aC5mbG9vcihwcm9ncmVzc0V2ZW50LmxvYWRlZCAvIHByb2dyZXNzRXZlbnQudG90YWwpXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIC8vIExvZ3MgcGVyY2VudGFnZSBjb21wbGV0ZSB0byB0aGUgY29uc29sZVxuLy8gICAgICAgfSxcbi8vICAgICB9O1xuLy8gICAgIGxldCBmaWxlTmFtZSA9IFwiZmlsZU5hbWUubXAzXCI7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xuLy8gICAgICAgLmdldChgL2FwaS9nZXRNcDM/dXJsPSR7dmlkZW9Vcmx9YCwgb3B0aW9ucylcbi8vICAgICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgICAgY29uc29sZS5sb2coXG4vLyAgICAgICAgICAgXCJBbGwgRE9ORTogXCIsXG4vLyAgICAgICAgICAgcmVzLmhlYWRlcnNbXCJjb250ZW50LWRpc3Bvc2l0aW9uXCJdLnNwbGl0KFwiPVwiKVsxXVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBmaWxlTmFtZSA9IHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV07XG4vLyAgICAgICAgIHJldHVybiByZXMuZGF0YTtcbi8vICAgICAgIH0pO1xuXG4vLyAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwocmVzcG9uc2UpO1xuLy8gICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbi8vICAgICBsaW5rLmhyZWYgPSB1cmw7XG4vLyAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmaWxlTmFtZSk7XG5cbi8vICAgICAvLyBBcHBlbmQgdG8gaHRtbCBsaW5rIGVsZW1lbnQgcGFnZVxuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG5cbi8vICAgICAvLyBTdGFydCBkb3dubG9hZFxuLy8gICAgIGxpbmsuY2xpY2soKTtcblxuLy8gICAgIC8vIENsZWFuIHVwIGFuZCByZW1vdmUgdGhlIGxpbmtcbi8vICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4vLyAgICAgLy8gb25Eb3dubG9hZCh7IHVybDogZGF0YSB9KTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZG93bmxvYWRpbmcgdmlkZW86XCIsIGVycm9yKTtcbi8vICAgfVxuLy8gfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aW5wdXRcbi8vICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICB2YWx1ZT17dmlkZW9Vcmx9XG4vLyAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmlkZW9VcmwoZS50YXJnZXQudmFsdWUpfVxuLy8gICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdVR1YmUgdmlkZW8gVVJMXCJcbi8vICAgICAgIC8+XG4vLyAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5Eb3dubG9hZCBBdWRpbzwvYnV0dG9uPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgWW91VHViZURvd25sb2FkO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBBdWRpb1BsYXllciBmcm9tIFwiLi9BdWRpb1BsYXllclwiO1xuY29uc3QgWW91VHViZURvd25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBbdmlkZW9MaW5rLCBzZXRWaWRlb0xpbmtdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthdWRpb0ZpbGUsIHNldEF1ZGlvRmlsZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IGNvbnZlcnRUb01wMyA9IGFzeW5jICgpID0+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuXG4gIC8vICAgICBzZXRBdWRpb0ZpbGUoXCJcIik7XG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gIC8vICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2NvbnZlcnRcIixcbiAgLy8gICAgICAgeyB2aWRlb0xpbmsgfSxcbiAgLy8gICAgICAgeyByZXNwb25zZVR5cGU6IFwiYmxvYlwiIH1cbiAgLy8gICAgICk7XG5cbiAgLy8gICAgIC8vIENyZWF0ZSBhIGJsb2IgVVJMIGZvciB0aGUgcmVzcG9uc2UgZGF0YVxuICAvLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSwgeyB0eXBlOiBcImF1ZGlvL21wM1wiIH0pO1xuICAvLyAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAvLyAgICAgY29uc29sZS5sb2coXCJ1cmxcIiwgdXJsKTtcbiAgLy8gICAgIHNldEF1ZGlvRmlsZSh1cmwpO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29udmVydGluZyB2aWRlbyB0byBNUDM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAvLyAgIH0gZmluYWxseSB7XG4gIC8vICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBjb25zdCBjb252ZXJ0VG9NcDMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FsbGxlZFwiKTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIC8vIERlZmluZXMgb3B0aW9ucyBmb3IgcmVxdWVzdFxuXG4gICAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIsXG4gICAgICAgIC8vIEZvciBhIGZpbGUgKGUuZy4gaW1hZ2UsIGF1ZGlvKSwgcmVzcG9uc2Ugc2hvdWxkIGJlIHJlYWQgdG8gQmxvYiAoZGVmYXVsdCB0byBKUyBvYmplY3QgZnJvbSBKU09OKVxuXG4gICAgICAgIG9uRG93bmxvYWRQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgICAvLyBGdW5jdGlvbiBmaXJlcyB3aGVuIHRoZXJlIGlzIGRvd25sb2FkIHByb2dyZXNzXG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIHByb2dyZXNzRXZlbnQsXG4gICAgICAgICAgICBNYXRoLmZsb29yKHByb2dyZXNzRXZlbnQubG9hZGVkIC8gcHJvZ3Jlc3NFdmVudC50b3RhbClcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIExvZ3MgcGVyY2VudGFnZSBjb21wbGV0ZSB0byB0aGUgY29uc29sZVxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGxldCBmaWxlTmFtZSA9IFwiZmlsZU5hbWUubXAzXCI7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0TXAzP3VybD0ke3ZpZGVvTGlua31gLCBvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIkFsbCBET05FOiBcIixcbiAgICAgICAgICAgIHJlcy5oZWFkZXJzW1wiY29udGVudC1kaXNwb3NpdGlvblwiXS5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICApO1xuICAgICAgICAgIGZpbGVOYW1lID0gcmVzLmhlYWRlcnNbXCJjb250ZW50LWRpc3Bvc2l0aW9uXCJdLnNwbGl0KFwiPVwiKVsxXTtcbiAgICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZSk7XG4gICAgICBzZXRBdWRpb0ZpbGUodXJsKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xuXG4gICAgICAvLyBBcHBlbmQgdG8gaHRtbCBsaW5rIGVsZW1lbnQgcGFnZVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgICAgLy8gU3RhcnQgZG93bmxvYWRcbiAgICAgIGxpbmsuY2xpY2soKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgYW5kIHJlbW92ZSB0aGUgbGlua1xuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgLy8gb25Eb3dubG9hZCh7IHVybDogZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgYWxlcnQoXCJUcnkgYWdhaW4hIEVycm9yIGNvbnZlcnRpbmcgdmlkZW8gdG8gTVAzOlwiLCBlcnJvci5tZXNzYWdlKTtcblxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsuaHJlZiA9IGF1ZGlvRmlsZTtcbiAgICBsaW5rLmRvd25sb2FkID0gXCJhdWRpb1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyBcIi5tcDNcIjtcbiAgICBsaW5rLmNsaWNrKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91VHViZSB2aWRlbyBsaW5rXCJcbiAgICAgICAgdmFsdWU9e3ZpZGVvTGlua31cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWaWRlb0xpbmsoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCJcbiAgICAgIC8+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtpc0xvYWRpbmcgPyBcInNlYXJjaC1idXR0b24tZGlzYWJsZWRcIiA6IFwic2VhcmNoLWJ1dHRvblwifVxuICAgICAgICBvbkNsaWNrPXtjb252ZXJ0VG9NcDN9XG4gICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICA+XG4gICAgICAgIENvbnZlcnQgdG8gTVAzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxicj48L2JyPlxuXG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogNCB9fT5cbiAgICAgICAge2F1ZGlvRmlsZSAmJiA8QXVkaW9QbGF5ZXIgYXVkaW9GaWxlPXthdWRpb0ZpbGV9PjwvQXVkaW9QbGF5ZXI+fVxuICAgICAgICB7YXVkaW9GaWxlICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRvd25sb2FkLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfT5cbiAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFlvdVR1YmVEb3dubG9hZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJBdWRpb1BsYXllciIsIllvdVR1YmVEb3dubG9hZCIsInZpZGVvTGluayIsInNldFZpZGVvTGluayIsImF1ZGlvRmlsZSIsInNldEF1ZGlvRmlsZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnZlcnRUb01wMyIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwicmVzcG9uc2VUeXBlIiwib25Eb3dubG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsIk1hdGgiLCJmbG9vciIsImxvYWRlZCIsInRvdGFsIiwiZmlsZU5hbWUiLCJyZXNwb25zZSIsImdldCIsInRoZW4iLCJyZXMiLCJoZWFkZXJzIiwic3BsaXQiLCJkYXRhIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImVycm9yIiwiYWxlcnQiLCJtZXNzYWdlIiwiaGFuZGxlRG93bmxvYWQiLCJkb3dubG9hZCIsInJhbmRvbSIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJiciIsInN0eWxlIiwiZGlzcGxheSIsImdhcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/YouTubeDownload.jsx\n"));

/***/ })

});