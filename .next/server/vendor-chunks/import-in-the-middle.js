/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/import-in-the-middle";
exports.ids = ["vendor-chunks/import-in-the-middle"];
exports.modules = {

/***/ "(ssr)/./node_modules/import-in-the-middle/index.js":
/*!****************************************************!*\
  !*** ./node_modules/import-in-the-middle/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.\n//\n// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.\n\nconst path = __webpack_require__(/*! path */ \"path\")\nconst parse = __webpack_require__(/*! module-details-from-path */ \"(ssr)/./node_modules/module-details-from-path/index.js\")\nconst { fileURLToPath } = __webpack_require__(/*! url */ \"url\")\n\nconst {\n  importHooks,\n  specifiers,\n  toHook\n} = __webpack_require__(/*! ./lib/register */ \"(ssr)/./node_modules/import-in-the-middle/lib/register.js\")\n\nfunction addHook (hook) {\n  importHooks.push(hook)\n  toHook.forEach(([name, namespace]) => hook(name, namespace))\n}\n\nfunction removeHook (hook) {\n  const index = importHooks.indexOf(hook)\n  if (index > -1) {\n    importHooks.splice(index, 1)\n  }\n}\n\nfunction callHookFn (hookFn, namespace, name, baseDir) {\n  const newDefault = hookFn(namespace, name, baseDir)\n  if (newDefault && newDefault !== namespace) {\n    namespace.default = newDefault\n  }\n}\n\nfunction Hook (modules, options, hookFn) {\n  if ((this instanceof Hook) === false) return new Hook(modules, options, hookFn)\n  if (typeof modules === 'function') {\n    hookFn = modules\n    modules = null\n    options = null\n  } else if (typeof options === 'function') {\n    hookFn = options\n    options = null\n  }\n  const internals = options ? options.internals === true : false\n\n  this._iitmHook = (name, namespace) => {\n    const filename = name\n    const isBuiltin = name.startsWith('node:')\n    let baseDir\n\n    if (isBuiltin) {\n      name = name.replace(/^node:/, '')\n    } else {\n      if (name.startsWith('file://')) {\n        try {\n          name = fileURLToPath(name)\n        } catch (e) {}\n      }\n      const details = parse(name)\n      if (details) {\n        name = details.name\n        baseDir = details.basedir\n      }\n    }\n\n    if (modules) {\n      for (const moduleName of modules) {\n        if (moduleName === name) {\n          if (baseDir) {\n            if (internals) {\n              name = name + path.sep + path.relative(baseDir, fileURLToPath(filename))\n            } else {\n              if (!baseDir.endsWith(specifiers.get(filename))) continue\n            }\n          }\n          callHookFn(hookFn, namespace, name, baseDir)\n        }\n      }\n    } else {\n      callHookFn(hookFn, namespace, name, baseDir)\n    }\n  }\n\n  addHook(this._iitmHook)\n}\n\nHook.prototype.unhook = function () {\n  removeHook(this._iitmHook)\n}\n\nmodule.exports = Hook\nmodule.exports.Hook = Hook\nmodule.exports.addHook = addHook\nmodule.exports.removeHook = removeHook\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW1wb3J0LWluLXRoZS1taWRkbGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQixjQUFjLG1CQUFPLENBQUMsd0ZBQTBCO0FBQ2hELFFBQVEsZ0JBQWdCLEVBQUUsbUJBQU8sQ0FBQyxnQkFBSzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEVBQUUsbUJBQU8sQ0FBQyxpRkFBZ0I7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0Qix5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc21fYmFua2luZy8uL25vZGVfbW9kdWxlcy9pbXBvcnQtaW4tdGhlLW1pZGRsZS9pbmRleC5qcz84MmRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVubGVzcyBleHBsaWNpdGx5IHN0YXRlZCBvdGhlcndpc2UgYWxsIGZpbGVzIGluIHRoaXMgcmVwb3NpdG9yeSBhcmUgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgTGljZW5zZS5cbi8vXG4vLyBUaGlzIHByb2R1Y3QgaW5jbHVkZXMgc29mdHdhcmUgZGV2ZWxvcGVkIGF0IERhdGFkb2cgKGh0dHBzOi8vd3d3LmRhdGFkb2docS5jb20vKS4gQ29weXJpZ2h0IDIwMjEgRGF0YWRvZywgSW5jLlxuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJ21vZHVsZS1kZXRhaWxzLWZyb20tcGF0aCcpXG5jb25zdCB7IGZpbGVVUkxUb1BhdGggfSA9IHJlcXVpcmUoJ3VybCcpXG5cbmNvbnN0IHtcbiAgaW1wb3J0SG9va3MsXG4gIHNwZWNpZmllcnMsXG4gIHRvSG9va1xufSA9IHJlcXVpcmUoJy4vbGliL3JlZ2lzdGVyJylcblxuZnVuY3Rpb24gYWRkSG9vayAoaG9vaykge1xuICBpbXBvcnRIb29rcy5wdXNoKGhvb2spXG4gIHRvSG9vay5mb3JFYWNoKChbbmFtZSwgbmFtZXNwYWNlXSkgPT4gaG9vayhuYW1lLCBuYW1lc3BhY2UpKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIb29rIChob29rKSB7XG4gIGNvbnN0IGluZGV4ID0gaW1wb3J0SG9va3MuaW5kZXhPZihob29rKVxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGltcG9ydEhvb2tzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9va0ZuIChob29rRm4sIG5hbWVzcGFjZSwgbmFtZSwgYmFzZURpcikge1xuICBjb25zdCBuZXdEZWZhdWx0ID0gaG9va0ZuKG5hbWVzcGFjZSwgbmFtZSwgYmFzZURpcilcbiAgaWYgKG5ld0RlZmF1bHQgJiYgbmV3RGVmYXVsdCAhPT0gbmFtZXNwYWNlKSB7XG4gICAgbmFtZXNwYWNlLmRlZmF1bHQgPSBuZXdEZWZhdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gSG9vayAobW9kdWxlcywgb3B0aW9ucywgaG9va0ZuKSB7XG4gIGlmICgodGhpcyBpbnN0YW5jZW9mIEhvb2spID09PSBmYWxzZSkgcmV0dXJuIG5ldyBIb29rKG1vZHVsZXMsIG9wdGlvbnMsIGhvb2tGbilcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaG9va0ZuID0gbW9kdWxlc1xuICAgIG1vZHVsZXMgPSBudWxsXG4gICAgb3B0aW9ucyA9IG51bGxcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGhvb2tGbiA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gbnVsbFxuICB9XG4gIGNvbnN0IGludGVybmFscyA9IG9wdGlvbnMgPyBvcHRpb25zLmludGVybmFscyA9PT0gdHJ1ZSA6IGZhbHNlXG5cbiAgdGhpcy5faWl0bUhvb2sgPSAobmFtZSwgbmFtZXNwYWNlKSA9PiB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBuYW1lXG4gICAgY29uc3QgaXNCdWlsdGluID0gbmFtZS5zdGFydHNXaXRoKCdub2RlOicpXG4gICAgbGV0IGJhc2VEaXJcblxuICAgIGlmIChpc0J1aWx0aW4pIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15ub2RlOi8sICcnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmFtZS5zdGFydHNXaXRoKCdmaWxlOi8vJykpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuYW1lID0gZmlsZVVSTFRvUGF0aChuYW1lKVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgY29uc3QgZGV0YWlscyA9IHBhcnNlKG5hbWUpXG4gICAgICBpZiAoZGV0YWlscykge1xuICAgICAgICBuYW1lID0gZGV0YWlscy5uYW1lXG4gICAgICAgIGJhc2VEaXIgPSBkZXRhaWxzLmJhc2VkaXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9kdWxlcykge1xuICAgICAgZm9yIChjb25zdCBtb2R1bGVOYW1lIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgaWYgKG1vZHVsZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBpZiAoYmFzZURpcikge1xuICAgICAgICAgICAgaWYgKGludGVybmFscykge1xuICAgICAgICAgICAgICBuYW1lID0gbmFtZSArIHBhdGguc2VwICsgcGF0aC5yZWxhdGl2ZShiYXNlRGlyLCBmaWxlVVJMVG9QYXRoKGZpbGVuYW1lKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghYmFzZURpci5lbmRzV2l0aChzcGVjaWZpZXJzLmdldChmaWxlbmFtZSkpKSBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYWxsSG9va0ZuKGhvb2tGbiwgbmFtZXNwYWNlLCBuYW1lLCBiYXNlRGlyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxIb29rRm4oaG9va0ZuLCBuYW1lc3BhY2UsIG5hbWUsIGJhc2VEaXIpXG4gICAgfVxuICB9XG5cbiAgYWRkSG9vayh0aGlzLl9paXRtSG9vaylcbn1cblxuSG9vay5wcm90b3R5cGUudW5ob29rID0gZnVuY3Rpb24gKCkge1xuICByZW1vdmVIb29rKHRoaXMuX2lpdG1Ib29rKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvb2tcbm1vZHVsZS5leHBvcnRzLkhvb2sgPSBIb29rXG5tb2R1bGUuZXhwb3J0cy5hZGRIb29rID0gYWRkSG9va1xubW9kdWxlLmV4cG9ydHMucmVtb3ZlSG9vayA9IHJlbW92ZUhvb2tcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/import-in-the-middle/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/import-in-the-middle/lib/register.js":
/*!***********************************************************!*\
  !*** ./node_modules/import-in-the-middle/lib/register.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.\n//\n// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.\n\nconst importHooks = [] // TODO should this be a Set?\nconst setters = new WeakMap()\nconst specifiers = new Map()\nconst toHook = []\n\nconst proxyHandler = {\n  set (target, name, value) {\n    return setters.get(target)[name](value)\n  },\n\n  defineProperty (target, property, descriptor) {\n    if ((!('value' in descriptor))) {\n      throw new Error('Getters/setters are not supported for exports property descriptors.')\n    }\n\n    return setters.get(target)[property](descriptor.value)\n  }\n}\n\nfunction register (name, namespace, set, specifier) {\n  specifiers.set(name, specifier)\n  setters.set(namespace, set)\n  const proxy = new Proxy(namespace, proxyHandler)\n  importHooks.forEach(hook => hook(name, proxy))\n  toHook.push([name, proxy])\n}\n\nexports.register = register\nexports.importHooks = importHooks\nexports.specifiers = specifiers\nexports.toHook = toHook\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW1wb3J0LWluLXRoZS1taWRkbGUvbGliL3JlZ2lzdGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNtX2JhbmtpbmcvLi9ub2RlX21vZHVsZXMvaW1wb3J0LWluLXRoZS1taWRkbGUvbGliL3JlZ2lzdGVyLmpzP2VmMDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5sZXNzIGV4cGxpY2l0bHkgc3RhdGVkIG90aGVyd2lzZSBhbGwgZmlsZXMgaW4gdGhpcyByZXBvc2l0b3J5IGFyZSBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIuMCBMaWNlbnNlLlxuLy9cbi8vIFRoaXMgcHJvZHVjdCBpbmNsdWRlcyBzb2Z0d2FyZSBkZXZlbG9wZWQgYXQgRGF0YWRvZyAoaHR0cHM6Ly93d3cuZGF0YWRvZ2hxLmNvbS8pLiBDb3B5cmlnaHQgMjAyMSBEYXRhZG9nLCBJbmMuXG5cbmNvbnN0IGltcG9ydEhvb2tzID0gW10gLy8gVE9ETyBzaG91bGQgdGhpcyBiZSBhIFNldD9cbmNvbnN0IHNldHRlcnMgPSBuZXcgV2Vha01hcCgpXG5jb25zdCBzcGVjaWZpZXJzID0gbmV3IE1hcCgpXG5jb25zdCB0b0hvb2sgPSBbXVxuXG5jb25zdCBwcm94eUhhbmRsZXIgPSB7XG4gIHNldCAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiBzZXR0ZXJzLmdldCh0YXJnZXQpW25hbWVdKHZhbHVlKVxuICB9LFxuXG4gIGRlZmluZVByb3BlcnR5ICh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG4gICAgaWYgKCghKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dldHRlcnMvc2V0dGVycyBhcmUgbm90IHN1cHBvcnRlZCBmb3IgZXhwb3J0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycy4nKVxuICAgIH1cblxuICAgIHJldHVybiBzZXR0ZXJzLmdldCh0YXJnZXQpW3Byb3BlcnR5XShkZXNjcmlwdG9yLnZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyIChuYW1lLCBuYW1lc3BhY2UsIHNldCwgc3BlY2lmaWVyKSB7XG4gIHNwZWNpZmllcnMuc2V0KG5hbWUsIHNwZWNpZmllcilcbiAgc2V0dGVycy5zZXQobmFtZXNwYWNlLCBzZXQpXG4gIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KG5hbWVzcGFjZSwgcHJveHlIYW5kbGVyKVxuICBpbXBvcnRIb29rcy5mb3JFYWNoKGhvb2sgPT4gaG9vayhuYW1lLCBwcm94eSkpXG4gIHRvSG9vay5wdXNoKFtuYW1lLCBwcm94eV0pXG59XG5cbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlclxuZXhwb3J0cy5pbXBvcnRIb29rcyA9IGltcG9ydEhvb2tzXG5leHBvcnRzLnNwZWNpZmllcnMgPSBzcGVjaWZpZXJzXG5leHBvcnRzLnRvSG9vayA9IHRvSG9va1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/import-in-the-middle/lib/register.js\n");

/***/ }),

/***/ "(instrument)/./node_modules/import-in-the-middle/index.js":
/*!****************************************************!*\
  !*** ./node_modules/import-in-the-middle/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.\n//\n// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.\n\nconst path = __webpack_require__(/*! path */ \"path\")\nconst parse = __webpack_require__(/*! module-details-from-path */ \"(instrument)/./node_modules/module-details-from-path/index.js\")\nconst { fileURLToPath } = __webpack_require__(/*! url */ \"url\")\n\nconst {\n  importHooks,\n  specifiers,\n  toHook\n} = __webpack_require__(/*! ./lib/register */ \"(instrument)/./node_modules/import-in-the-middle/lib/register.js\")\n\nfunction addHook (hook) {\n  importHooks.push(hook)\n  toHook.forEach(([name, namespace]) => hook(name, namespace))\n}\n\nfunction removeHook (hook) {\n  const index = importHooks.indexOf(hook)\n  if (index > -1) {\n    importHooks.splice(index, 1)\n  }\n}\n\nfunction callHookFn (hookFn, namespace, name, baseDir) {\n  const newDefault = hookFn(namespace, name, baseDir)\n  if (newDefault && newDefault !== namespace) {\n    namespace.default = newDefault\n  }\n}\n\nfunction Hook (modules, options, hookFn) {\n  if ((this instanceof Hook) === false) return new Hook(modules, options, hookFn)\n  if (typeof modules === 'function') {\n    hookFn = modules\n    modules = null\n    options = null\n  } else if (typeof options === 'function') {\n    hookFn = options\n    options = null\n  }\n  const internals = options ? options.internals === true : false\n\n  this._iitmHook = (name, namespace) => {\n    const filename = name\n    const isBuiltin = name.startsWith('node:')\n    let baseDir\n\n    if (isBuiltin) {\n      name = name.replace(/^node:/, '')\n    } else {\n      if (name.startsWith('file://')) {\n        try {\n          name = fileURLToPath(name)\n        } catch (e) {}\n      }\n      const details = parse(name)\n      if (details) {\n        name = details.name\n        baseDir = details.basedir\n      }\n    }\n\n    if (modules) {\n      for (const moduleName of modules) {\n        if (moduleName === name) {\n          if (baseDir) {\n            if (internals) {\n              name = name + path.sep + path.relative(baseDir, fileURLToPath(filename))\n            } else {\n              if (!baseDir.endsWith(specifiers.get(filename))) continue\n            }\n          }\n          callHookFn(hookFn, namespace, name, baseDir)\n        }\n      }\n    } else {\n      callHookFn(hookFn, namespace, name, baseDir)\n    }\n  }\n\n  addHook(this._iitmHook)\n}\n\nHook.prototype.unhook = function () {\n  removeHook(this._iitmHook)\n}\n\nmodule.exports = Hook\nmodule.exports.Hook = Hook\nmodule.exports.addHook = addHook\nmodule.exports.removeHook = removeHook\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL2ltcG9ydC1pbi10aGUtbWlkZGxlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsa0JBQU07QUFDM0IsY0FBYyxtQkFBTyxDQUFDLCtGQUEwQjtBQUNoRCxRQUFRLGdCQUFnQixFQUFFLG1CQUFPLENBQUMsZ0JBQUs7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxFQUFFLG1CQUFPLENBQUMsd0ZBQWdCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNtX2JhbmtpbmcvLi9ub2RlX21vZHVsZXMvaW1wb3J0LWluLXRoZS1taWRkbGUvaW5kZXguanM/MThmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBVbmxlc3MgZXhwbGljaXRseSBzdGF0ZWQgb3RoZXJ3aXNlIGFsbCBmaWxlcyBpbiB0aGlzIHJlcG9zaXRvcnkgYXJlIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgMi4wIExpY2Vuc2UuXG4vL1xuLy8gVGhpcyBwcm9kdWN0IGluY2x1ZGVzIHNvZnR3YXJlIGRldmVsb3BlZCBhdCBEYXRhZG9nIChodHRwczovL3d3dy5kYXRhZG9naHEuY29tLykuIENvcHlyaWdodCAyMDIxIERhdGFkb2csIEluYy5cblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgcGFyc2UgPSByZXF1aXJlKCdtb2R1bGUtZGV0YWlscy1mcm9tLXBhdGgnKVxuY29uc3QgeyBmaWxlVVJMVG9QYXRoIH0gPSByZXF1aXJlKCd1cmwnKVxuXG5jb25zdCB7XG4gIGltcG9ydEhvb2tzLFxuICBzcGVjaWZpZXJzLFxuICB0b0hvb2tcbn0gPSByZXF1aXJlKCcuL2xpYi9yZWdpc3RlcicpXG5cbmZ1bmN0aW9uIGFkZEhvb2sgKGhvb2spIHtcbiAgaW1wb3J0SG9va3MucHVzaChob29rKVxuICB0b0hvb2suZm9yRWFjaCgoW25hbWUsIG5hbWVzcGFjZV0pID0+IGhvb2sobmFtZSwgbmFtZXNwYWNlKSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSG9vayAoaG9vaykge1xuICBjb25zdCBpbmRleCA9IGltcG9ydEhvb2tzLmluZGV4T2YoaG9vaylcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBpbXBvcnRIb29rcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2tGbiAoaG9va0ZuLCBuYW1lc3BhY2UsIG5hbWUsIGJhc2VEaXIpIHtcbiAgY29uc3QgbmV3RGVmYXVsdCA9IGhvb2tGbihuYW1lc3BhY2UsIG5hbWUsIGJhc2VEaXIpXG4gIGlmIChuZXdEZWZhdWx0ICYmIG5ld0RlZmF1bHQgIT09IG5hbWVzcGFjZSkge1xuICAgIG5hbWVzcGFjZS5kZWZhdWx0ID0gbmV3RGVmYXVsdFxuICB9XG59XG5cbmZ1bmN0aW9uIEhvb2sgKG1vZHVsZXMsIG9wdGlvbnMsIGhvb2tGbikge1xuICBpZiAoKHRoaXMgaW5zdGFuY2VvZiBIb29rKSA9PT0gZmFsc2UpIHJldHVybiBuZXcgSG9vayhtb2R1bGVzLCBvcHRpb25zLCBob29rRm4pXG4gIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGhvb2tGbiA9IG1vZHVsZXNcbiAgICBtb2R1bGVzID0gbnVsbFxuICAgIG9wdGlvbnMgPSBudWxsXG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBob29rRm4gPSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IG51bGxcbiAgfVxuICBjb25zdCBpbnRlcm5hbHMgPSBvcHRpb25zID8gb3B0aW9ucy5pbnRlcm5hbHMgPT09IHRydWUgOiBmYWxzZVxuXG4gIHRoaXMuX2lpdG1Ib29rID0gKG5hbWUsIG5hbWVzcGFjZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gbmFtZVxuICAgIGNvbnN0IGlzQnVpbHRpbiA9IG5hbWUuc3RhcnRzV2l0aCgnbm9kZTonKVxuICAgIGxldCBiYXNlRGlyXG5cbiAgICBpZiAoaXNCdWlsdGluKSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9ebm9kZTovLCAnJylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnZmlsZTovLycpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbmFtZSA9IGZpbGVVUkxUb1BhdGgobmFtZSlcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICAgIGNvbnN0IGRldGFpbHMgPSBwYXJzZShuYW1lKVxuICAgICAgaWYgKGRldGFpbHMpIHtcbiAgICAgICAgbmFtZSA9IGRldGFpbHMubmFtZVxuICAgICAgICBiYXNlRGlyID0gZGV0YWlscy5iYXNlZGlyXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1vZHVsZXMpIHtcbiAgICAgIGZvciAoY29uc3QgbW9kdWxlTmFtZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgIGlmIChtb2R1bGVOYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgaWYgKGJhc2VEaXIpIHtcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbHMpIHtcbiAgICAgICAgICAgICAgbmFtZSA9IG5hbWUgKyBwYXRoLnNlcCArIHBhdGgucmVsYXRpdmUoYmFzZURpciwgZmlsZVVSTFRvUGF0aChmaWxlbmFtZSkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWJhc2VEaXIuZW5kc1dpdGgoc3BlY2lmaWVycy5nZXQoZmlsZW5hbWUpKSkgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2FsbEhvb2tGbihob29rRm4sIG5hbWVzcGFjZSwgbmFtZSwgYmFzZURpcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsSG9va0ZuKGhvb2tGbiwgbmFtZXNwYWNlLCBuYW1lLCBiYXNlRGlyKVxuICAgIH1cbiAgfVxuXG4gIGFkZEhvb2sodGhpcy5faWl0bUhvb2spXG59XG5cbkhvb2sucHJvdG90eXBlLnVuaG9vayA9IGZ1bmN0aW9uICgpIHtcbiAgcmVtb3ZlSG9vayh0aGlzLl9paXRtSG9vaylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb29rXG5tb2R1bGUuZXhwb3J0cy5Ib29rID0gSG9va1xubW9kdWxlLmV4cG9ydHMuYWRkSG9vayA9IGFkZEhvb2tcbm1vZHVsZS5leHBvcnRzLnJlbW92ZUhvb2sgPSByZW1vdmVIb29rXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/import-in-the-middle/index.js\n");

/***/ }),

/***/ "(instrument)/./node_modules/import-in-the-middle/lib/register.js":
/*!***********************************************************!*\
  !*** ./node_modules/import-in-the-middle/lib/register.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.\n//\n// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.\n\nconst importHooks = [] // TODO should this be a Set?\nconst setters = new WeakMap()\nconst specifiers = new Map()\nconst toHook = []\n\nconst proxyHandler = {\n  set (target, name, value) {\n    return setters.get(target)[name](value)\n  },\n\n  defineProperty (target, property, descriptor) {\n    if ((!('value' in descriptor))) {\n      throw new Error('Getters/setters are not supported for exports property descriptors.')\n    }\n\n    return setters.get(target)[property](descriptor.value)\n  }\n}\n\nfunction register (name, namespace, set, specifier) {\n  specifiers.set(name, specifier)\n  setters.set(namespace, set)\n  const proxy = new Proxy(namespace, proxyHandler)\n  importHooks.forEach(hook => hook(name, proxy))\n  toHook.push([name, proxy])\n}\n\nexports.register = register\nexports.importHooks = importHooks\nexports.specifiers = specifiers\nexports.toHook = toHook\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL2ltcG9ydC1pbi10aGUtbWlkZGxlL2xpYi9yZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzbV9iYW5raW5nLy4vbm9kZV9tb2R1bGVzL2ltcG9ydC1pbi10aGUtbWlkZGxlL2xpYi9yZWdpc3Rlci5qcz81ODE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVubGVzcyBleHBsaWNpdGx5IHN0YXRlZCBvdGhlcndpc2UgYWxsIGZpbGVzIGluIHRoaXMgcmVwb3NpdG9yeSBhcmUgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgTGljZW5zZS5cbi8vXG4vLyBUaGlzIHByb2R1Y3QgaW5jbHVkZXMgc29mdHdhcmUgZGV2ZWxvcGVkIGF0IERhdGFkb2cgKGh0dHBzOi8vd3d3LmRhdGFkb2docS5jb20vKS4gQ29weXJpZ2h0IDIwMjEgRGF0YWRvZywgSW5jLlxuXG5jb25zdCBpbXBvcnRIb29rcyA9IFtdIC8vIFRPRE8gc2hvdWxkIHRoaXMgYmUgYSBTZXQ/XG5jb25zdCBzZXR0ZXJzID0gbmV3IFdlYWtNYXAoKVxuY29uc3Qgc3BlY2lmaWVycyA9IG5ldyBNYXAoKVxuY29uc3QgdG9Ib29rID0gW11cblxuY29uc3QgcHJveHlIYW5kbGVyID0ge1xuICBzZXQgKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc2V0dGVycy5nZXQodGFyZ2V0KVtuYW1lXSh2YWx1ZSlcbiAgfSxcblxuICBkZWZpbmVQcm9wZXJ0eSAodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcikge1xuICAgIGlmICgoISgndmFsdWUnIGluIGRlc2NyaXB0b3IpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZXR0ZXJzL3NldHRlcnMgYXJlIG5vdCBzdXBwb3J0ZWQgZm9yIGV4cG9ydHMgcHJvcGVydHkgZGVzY3JpcHRvcnMuJylcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0dGVycy5nZXQodGFyZ2V0KVtwcm9wZXJ0eV0oZGVzY3JpcHRvci52YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlciAobmFtZSwgbmFtZXNwYWNlLCBzZXQsIHNwZWNpZmllcikge1xuICBzcGVjaWZpZXJzLnNldChuYW1lLCBzcGVjaWZpZXIpXG4gIHNldHRlcnMuc2V0KG5hbWVzcGFjZSwgc2V0KVxuICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShuYW1lc3BhY2UsIHByb3h5SGFuZGxlcilcbiAgaW1wb3J0SG9va3MuZm9yRWFjaChob29rID0+IGhvb2sobmFtZSwgcHJveHkpKVxuICB0b0hvb2sucHVzaChbbmFtZSwgcHJveHldKVxufVxuXG5leHBvcnRzLnJlZ2lzdGVyID0gcmVnaXN0ZXJcbmV4cG9ydHMuaW1wb3J0SG9va3MgPSBpbXBvcnRIb29rc1xuZXhwb3J0cy5zcGVjaWZpZXJzID0gc3BlY2lmaWVyc1xuZXhwb3J0cy50b0hvb2sgPSB0b0hvb2tcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/import-in-the-middle/lib/register.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/import-in-the-middle/index.js":
/*!****************************************************!*\
  !*** ./node_modules/import-in-the-middle/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.\n//\n// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.\n\nconst path = __webpack_require__(/*! path */ \"path\")\nconst parse = __webpack_require__(/*! module-details-from-path */ \"(rsc)/./node_modules/module-details-from-path/index.js\")\nconst { fileURLToPath } = __webpack_require__(/*! url */ \"url\")\n\nconst {\n  importHooks,\n  specifiers,\n  toHook\n} = __webpack_require__(/*! ./lib/register */ \"(rsc)/./node_modules/import-in-the-middle/lib/register.js\")\n\nfunction addHook (hook) {\n  importHooks.push(hook)\n  toHook.forEach(([name, namespace]) => hook(name, namespace))\n}\n\nfunction removeHook (hook) {\n  const index = importHooks.indexOf(hook)\n  if (index > -1) {\n    importHooks.splice(index, 1)\n  }\n}\n\nfunction callHookFn (hookFn, namespace, name, baseDir) {\n  const newDefault = hookFn(namespace, name, baseDir)\n  if (newDefault && newDefault !== namespace) {\n    namespace.default = newDefault\n  }\n}\n\nfunction Hook (modules, options, hookFn) {\n  if ((this instanceof Hook) === false) return new Hook(modules, options, hookFn)\n  if (typeof modules === 'function') {\n    hookFn = modules\n    modules = null\n    options = null\n  } else if (typeof options === 'function') {\n    hookFn = options\n    options = null\n  }\n  const internals = options ? options.internals === true : false\n\n  this._iitmHook = (name, namespace) => {\n    const filename = name\n    const isBuiltin = name.startsWith('node:')\n    let baseDir\n\n    if (isBuiltin) {\n      name = name.replace(/^node:/, '')\n    } else {\n      if (name.startsWith('file://')) {\n        try {\n          name = fileURLToPath(name)\n        } catch (e) {}\n      }\n      const details = parse(name)\n      if (details) {\n        name = details.name\n        baseDir = details.basedir\n      }\n    }\n\n    if (modules) {\n      for (const moduleName of modules) {\n        if (moduleName === name) {\n          if (baseDir) {\n            if (internals) {\n              name = name + path.sep + path.relative(baseDir, fileURLToPath(filename))\n            } else {\n              if (!baseDir.endsWith(specifiers.get(filename))) continue\n            }\n          }\n          callHookFn(hookFn, namespace, name, baseDir)\n        }\n      }\n    } else {\n      callHookFn(hookFn, namespace, name, baseDir)\n    }\n  }\n\n  addHook(this._iitmHook)\n}\n\nHook.prototype.unhook = function () {\n  removeHook(this._iitmHook)\n}\n\nmodule.exports = Hook\nmodule.exports.Hook = Hook\nmodule.exports.addHook = addHook\nmodule.exports.removeHook = removeHook\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW1wb3J0LWluLXRoZS1taWRkbGUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQixjQUFjLG1CQUFPLENBQUMsd0ZBQTBCO0FBQ2hELFFBQVEsZ0JBQWdCLEVBQUUsbUJBQU8sQ0FBQyxnQkFBSzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEVBQUUsbUJBQU8sQ0FBQyxpRkFBZ0I7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0Qix5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc21fYmFua2luZy8uL25vZGVfbW9kdWxlcy9pbXBvcnQtaW4tdGhlLW1pZGRsZS9pbmRleC5qcz84YjY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVubGVzcyBleHBsaWNpdGx5IHN0YXRlZCBvdGhlcndpc2UgYWxsIGZpbGVzIGluIHRoaXMgcmVwb3NpdG9yeSBhcmUgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyLjAgTGljZW5zZS5cbi8vXG4vLyBUaGlzIHByb2R1Y3QgaW5jbHVkZXMgc29mdHdhcmUgZGV2ZWxvcGVkIGF0IERhdGFkb2cgKGh0dHBzOi8vd3d3LmRhdGFkb2docS5jb20vKS4gQ29weXJpZ2h0IDIwMjEgRGF0YWRvZywgSW5jLlxuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJ21vZHVsZS1kZXRhaWxzLWZyb20tcGF0aCcpXG5jb25zdCB7IGZpbGVVUkxUb1BhdGggfSA9IHJlcXVpcmUoJ3VybCcpXG5cbmNvbnN0IHtcbiAgaW1wb3J0SG9va3MsXG4gIHNwZWNpZmllcnMsXG4gIHRvSG9va1xufSA9IHJlcXVpcmUoJy4vbGliL3JlZ2lzdGVyJylcblxuZnVuY3Rpb24gYWRkSG9vayAoaG9vaykge1xuICBpbXBvcnRIb29rcy5wdXNoKGhvb2spXG4gIHRvSG9vay5mb3JFYWNoKChbbmFtZSwgbmFtZXNwYWNlXSkgPT4gaG9vayhuYW1lLCBuYW1lc3BhY2UpKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIb29rIChob29rKSB7XG4gIGNvbnN0IGluZGV4ID0gaW1wb3J0SG9va3MuaW5kZXhPZihob29rKVxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGltcG9ydEhvb2tzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsSG9va0ZuIChob29rRm4sIG5hbWVzcGFjZSwgbmFtZSwgYmFzZURpcikge1xuICBjb25zdCBuZXdEZWZhdWx0ID0gaG9va0ZuKG5hbWVzcGFjZSwgbmFtZSwgYmFzZURpcilcbiAgaWYgKG5ld0RlZmF1bHQgJiYgbmV3RGVmYXVsdCAhPT0gbmFtZXNwYWNlKSB7XG4gICAgbmFtZXNwYWNlLmRlZmF1bHQgPSBuZXdEZWZhdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gSG9vayAobW9kdWxlcywgb3B0aW9ucywgaG9va0ZuKSB7XG4gIGlmICgodGhpcyBpbnN0YW5jZW9mIEhvb2spID09PSBmYWxzZSkgcmV0dXJuIG5ldyBIb29rKG1vZHVsZXMsIG9wdGlvbnMsIGhvb2tGbilcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaG9va0ZuID0gbW9kdWxlc1xuICAgIG1vZHVsZXMgPSBudWxsXG4gICAgb3B0aW9ucyA9IG51bGxcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGhvb2tGbiA9IG9wdGlvbnNcbiAgICBvcHRpb25zID0gbnVsbFxuICB9XG4gIGNvbnN0IGludGVybmFscyA9IG9wdGlvbnMgPyBvcHRpb25zLmludGVybmFscyA9PT0gdHJ1ZSA6IGZhbHNlXG5cbiAgdGhpcy5faWl0bUhvb2sgPSAobmFtZSwgbmFtZXNwYWNlKSA9PiB7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBuYW1lXG4gICAgY29uc3QgaXNCdWlsdGluID0gbmFtZS5zdGFydHNXaXRoKCdub2RlOicpXG4gICAgbGV0IGJhc2VEaXJcblxuICAgIGlmIChpc0J1aWx0aW4pIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL15ub2RlOi8sICcnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmFtZS5zdGFydHNXaXRoKCdmaWxlOi8vJykpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuYW1lID0gZmlsZVVSTFRvUGF0aChuYW1lKVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgICAgY29uc3QgZGV0YWlscyA9IHBhcnNlKG5hbWUpXG4gICAgICBpZiAoZGV0YWlscykge1xuICAgICAgICBuYW1lID0gZGV0YWlscy5uYW1lXG4gICAgICAgIGJhc2VEaXIgPSBkZXRhaWxzLmJhc2VkaXJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9kdWxlcykge1xuICAgICAgZm9yIChjb25zdCBtb2R1bGVOYW1lIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgaWYgKG1vZHVsZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICBpZiAoYmFzZURpcikge1xuICAgICAgICAgICAgaWYgKGludGVybmFscykge1xuICAgICAgICAgICAgICBuYW1lID0gbmFtZSArIHBhdGguc2VwICsgcGF0aC5yZWxhdGl2ZShiYXNlRGlyLCBmaWxlVVJMVG9QYXRoKGZpbGVuYW1lKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghYmFzZURpci5lbmRzV2l0aChzcGVjaWZpZXJzLmdldChmaWxlbmFtZSkpKSBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYWxsSG9va0ZuKGhvb2tGbiwgbmFtZXNwYWNlLCBuYW1lLCBiYXNlRGlyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxIb29rRm4oaG9va0ZuLCBuYW1lc3BhY2UsIG5hbWUsIGJhc2VEaXIpXG4gICAgfVxuICB9XG5cbiAgYWRkSG9vayh0aGlzLl9paXRtSG9vaylcbn1cblxuSG9vay5wcm90b3R5cGUudW5ob29rID0gZnVuY3Rpb24gKCkge1xuICByZW1vdmVIb29rKHRoaXMuX2lpdG1Ib29rKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvb2tcbm1vZHVsZS5leHBvcnRzLkhvb2sgPSBIb29rXG5tb2R1bGUuZXhwb3J0cy5hZGRIb29rID0gYWRkSG9va1xubW9kdWxlLmV4cG9ydHMucmVtb3ZlSG9vayA9IHJlbW92ZUhvb2tcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/import-in-the-middle/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/import-in-the-middle/lib/register.js":
/*!***********************************************************!*\
  !*** ./node_modules/import-in-the-middle/lib/register.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// Unless explicitly stated otherwise all files in this repository are licensed under the Apache 2.0 License.\n//\n// This product includes software developed at Datadog (https://www.datadoghq.com/). Copyright 2021 Datadog, Inc.\n\nconst importHooks = [] // TODO should this be a Set?\nconst setters = new WeakMap()\nconst specifiers = new Map()\nconst toHook = []\n\nconst proxyHandler = {\n  set (target, name, value) {\n    return setters.get(target)[name](value)\n  },\n\n  defineProperty (target, property, descriptor) {\n    if ((!('value' in descriptor))) {\n      throw new Error('Getters/setters are not supported for exports property descriptors.')\n    }\n\n    return setters.get(target)[property](descriptor.value)\n  }\n}\n\nfunction register (name, namespace, set, specifier) {\n  specifiers.set(name, specifier)\n  setters.set(namespace, set)\n  const proxy = new Proxy(namespace, proxyHandler)\n  importHooks.forEach(hook => hook(name, proxy))\n  toHook.push([name, proxy])\n}\n\nexports.register = register\nexports.importHooks = importHooks\nexports.specifiers = specifiers\nexports.toHook = toHook\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaW1wb3J0LWluLXRoZS1taWRkbGUvbGliL3JlZ2lzdGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNtX2JhbmtpbmcvLi9ub2RlX21vZHVsZXMvaW1wb3J0LWluLXRoZS1taWRkbGUvbGliL3JlZ2lzdGVyLmpzPzJmMWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5sZXNzIGV4cGxpY2l0bHkgc3RhdGVkIG90aGVyd2lzZSBhbGwgZmlsZXMgaW4gdGhpcyByZXBvc2l0b3J5IGFyZSBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIDIuMCBMaWNlbnNlLlxuLy9cbi8vIFRoaXMgcHJvZHVjdCBpbmNsdWRlcyBzb2Z0d2FyZSBkZXZlbG9wZWQgYXQgRGF0YWRvZyAoaHR0cHM6Ly93d3cuZGF0YWRvZ2hxLmNvbS8pLiBDb3B5cmlnaHQgMjAyMSBEYXRhZG9nLCBJbmMuXG5cbmNvbnN0IGltcG9ydEhvb2tzID0gW10gLy8gVE9ETyBzaG91bGQgdGhpcyBiZSBhIFNldD9cbmNvbnN0IHNldHRlcnMgPSBuZXcgV2Vha01hcCgpXG5jb25zdCBzcGVjaWZpZXJzID0gbmV3IE1hcCgpXG5jb25zdCB0b0hvb2sgPSBbXVxuXG5jb25zdCBwcm94eUhhbmRsZXIgPSB7XG4gIHNldCAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiBzZXR0ZXJzLmdldCh0YXJnZXQpW25hbWVdKHZhbHVlKVxuICB9LFxuXG4gIGRlZmluZVByb3BlcnR5ICh0YXJnZXQsIHByb3BlcnR5LCBkZXNjcmlwdG9yKSB7XG4gICAgaWYgKCghKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dldHRlcnMvc2V0dGVycyBhcmUgbm90IHN1cHBvcnRlZCBmb3IgZXhwb3J0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycy4nKVxuICAgIH1cblxuICAgIHJldHVybiBzZXR0ZXJzLmdldCh0YXJnZXQpW3Byb3BlcnR5XShkZXNjcmlwdG9yLnZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyIChuYW1lLCBuYW1lc3BhY2UsIHNldCwgc3BlY2lmaWVyKSB7XG4gIHNwZWNpZmllcnMuc2V0KG5hbWUsIHNwZWNpZmllcilcbiAgc2V0dGVycy5zZXQobmFtZXNwYWNlLCBzZXQpXG4gIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KG5hbWVzcGFjZSwgcHJveHlIYW5kbGVyKVxuICBpbXBvcnRIb29rcy5mb3JFYWNoKGhvb2sgPT4gaG9vayhuYW1lLCBwcm94eSkpXG4gIHRvSG9vay5wdXNoKFtuYW1lLCBwcm94eV0pXG59XG5cbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlclxuZXhwb3J0cy5pbXBvcnRIb29rcyA9IGltcG9ydEhvb2tzXG5leHBvcnRzLnNwZWNpZmllcnMgPSBzcGVjaWZpZXJzXG5leHBvcnRzLnRvSG9vayA9IHRvSG9va1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/import-in-the-middle/lib/register.js\n");

/***/ })

};
;