/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _emoji = __webpack_require__(2);
	
	var container = document.getElementById("app");
	container.innerText = (0, _emoji.format)(container.innerText);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var format = function format(message) {
	    return message.replace(/:\)/g, "%(");
	};
	
	module.exports = {
	    format: format
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/******/(function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};
		/******/
		/******/ // The require function
		/******/function __webpack_require__(moduleId) {
			/******/
			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;
			/******/
			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };
			/******/
			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/******/
			/******/ // Flag the module as loaded
			/******/module.loaded = true;
			/******/
			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}
		/******/
		/******/
		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;
		/******/
		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;
		/******/
		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";
		/******/
		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	})(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {
	
		__webpack_require__(1);
		module.exports = __webpack_require__(3);
	
		/***/
	},
	/* 1 */
	/***/function (module, exports, __webpack_require__) {
	
		"use strict";
	
		var _emoji = __webpack_require__(2);
	
		var container = document.getElementById("app");
		container.innerText = (0, _emoji.format)(container.innerText);
	
		/***/
	},
	/* 2 */
	/***/function (module, exports) {
	
		"use strict";
	
		var format = function format(message) {
			return message.replace(/:\)/g, "%(");
		};
	
		module.exports = {
			format: format
		};
	
		/***/
	},
	/* 3 */
	/***/function (module, exports) {
	
		"use strict";
	
		/******/
		(function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		})(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {
	
			__webpack_require__(1);
			module.exports = __webpack_require__(3);
	
			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {
	
			"use strict";
	
			var _emoji = __webpack_require__(2);
	
			var container = document.getElementById("app");
			container.innerText = (0, _emoji.format)(container.innerText);
	
			/***/
		},
		/* 2 */
		/***/function (module, exports) {
	
			"use strict";
	
			var format = function format(message) {
				return message.replace(/:\)/g, "%))");
			};
	
			module.exports = {
				format: format
			};
	
			/***/
		},
		/* 3 */
		/***/function (module, exports) {
	
			"use strict";
	
			/******/
	
			(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				__webpack_require__(1);
				module.exports = __webpack_require__(3);
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				var _emoji = __webpack_require__(2);
	
				var container = document.getElementById("app");
				container.innerText = (0, _emoji.format)(container.innerText);
	
				/***/
			},
			/* 2 */
			/***/function (module, exports) {
	
				"use strict";
	
				var format = function format(message) {
					return message.replace(/:\)/g, "%))");
				};
	
				module.exports = {
					format: format
				};
	
				/***/
			},
			/* 3 */
			/***/function (module, exports) {
	
				"use strict";
	
				/******/
	
				(function (modules) {
					// webpackBootstrap
					/******/ // The module cache
					/******/var installedModules = {};
					/******/
					/******/ // The require function
					/******/function __webpack_require__(moduleId) {
						/******/
						/******/ // Check if module is in cache
						/******/if (installedModules[moduleId])
							/******/return installedModules[moduleId].exports;
						/******/
						/******/ // Create a new module (and put it into the cache)
						/******/var module = installedModules[moduleId] = {
							/******/exports: {},
							/******/id: moduleId,
							/******/loaded: false
							/******/ };
						/******/
						/******/ // Execute the module function
						/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
						/******/
						/******/ // Flag the module as loaded
						/******/module.loaded = true;
						/******/
						/******/ // Return the exports of the module
						/******/return module.exports;
						/******/
					}
					/******/
					/******/
					/******/ // expose the modules object (__webpack_modules__)
					/******/__webpack_require__.m = modules;
					/******/
					/******/ // expose the module cache
					/******/__webpack_require__.c = installedModules;
					/******/
					/******/ // __webpack_public_path__
					/******/__webpack_require__.p = "";
					/******/
					/******/ // Load entry module and return exports
					/******/return __webpack_require__(0);
					/******/
				})(
				/************************************************************************/
				/******/[
				/* 0 */
				/***/function (module, exports, __webpack_require__) {
	
					__webpack_require__(1);
					module.exports = __webpack_require__(3);
	
					/***/
				},
				/* 1 */
				/***/function (module, exports, __webpack_require__) {
	
					"use strict";
	
					var _emoji = __webpack_require__(2);
	
					var container = document.getElementById("app");
					container.innerText = (0, _emoji.format)(container.innerText);
	
					/***/
				},
				/* 2 */
				/***/function (module, exports) {
	
					"use strict";
	
					var format = function format(message) {
						return message.replace(/:\)/g, "%))");
					};
	
					module.exports = {
						format: format
					};
	
					/***/
				},
				/* 3 */
				/***/function (module, exports) {
	
					"use strict";
	
					/******/
	
					(function (modules) {
						// webpackBootstrap
						/******/ // The module cache
						/******/var installedModules = {};
						/******/
						/******/ // The require function
						/******/function __webpack_require__(moduleId) {
							/******/
							/******/ // Check if module is in cache
							/******/if (installedModules[moduleId])
								/******/return installedModules[moduleId].exports;
							/******/
							/******/ // Create a new module (and put it into the cache)
							/******/var module = installedModules[moduleId] = {
								/******/exports: {},
								/******/id: moduleId,
								/******/loaded: false
								/******/ };
							/******/
							/******/ // Execute the module function
							/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
							/******/
							/******/ // Flag the module as loaded
							/******/module.loaded = true;
							/******/
							/******/ // Return the exports of the module
							/******/return module.exports;
							/******/
						}
						/******/
						/******/
						/******/ // expose the modules object (__webpack_modules__)
						/******/__webpack_require__.m = modules;
						/******/
						/******/ // expose the module cache
						/******/__webpack_require__.c = installedModules;
						/******/
						/******/ // __webpack_public_path__
						/******/__webpack_require__.p = "";
						/******/
						/******/ // Load entry module and return exports
						/******/return __webpack_require__(0);
						/******/
					})(
					/************************************************************************/
					/******/[
					/* 0 */
					/***/function (module, exports, __webpack_require__) {
	
						__webpack_require__(1);
						module.exports = __webpack_require__(3);
	
						/***/
					},
					/* 1 */
					/***/function (module, exports, __webpack_require__) {
	
						"use strict";
	
						var emoji = __webpack_require__(2);
	
						var container = document.getElementById("app");
						container.innerText = emoji.format(container.innerText);
	
						/***/
					},
					/* 2 */
					/***/function (module, exports) {
	
						"use strict";
	
						var format = function format(message) {
							return message.replace(/:\)/g, "%))");
						};
	
						module.exports = {
							format: format
						};
	
						/***/
					},
					/* 3 */
					/***/function (module, exports) {
	
						"use strict";
	
						/******/
	
						(function (modules) {
							// webpackBootstrap
							/******/ // The module cache
							/******/var installedModules = {};
							/******/
							/******/ // The require function
							/******/function __webpack_require__(moduleId) {
								/******/
								/******/ // Check if module is in cache
								/******/if (installedModules[moduleId])
									/******/return installedModules[moduleId].exports;
								/******/
								/******/ // Create a new module (and put it into the cache)
								/******/var module = installedModules[moduleId] = {
									/******/exports: {},
									/******/id: moduleId,
									/******/loaded: false
									/******/ };
								/******/
								/******/ // Execute the module function
								/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
								/******/
								/******/ // Flag the module as loaded
								/******/module.loaded = true;
								/******/
								/******/ // Return the exports of the module
								/******/return module.exports;
								/******/
							}
							/******/
							/******/
							/******/ // expose the modules object (__webpack_modules__)
							/******/__webpack_require__.m = modules;
							/******/
							/******/ // expose the module cache
							/******/__webpack_require__.c = installedModules;
							/******/
							/******/ // __webpack_public_path__
							/******/__webpack_require__.p = "";
							/******/
							/******/ // Load entry module and return exports
							/******/return __webpack_require__(0);
							/******/
						})(
						/************************************************************************/
						/******/[
						/* 0 */
						/***/function (module, exports, __webpack_require__) {
	
							__webpack_require__(1);
							module.exports = __webpack_require__(3);
	
							/***/
						},
						/* 1 */
						/***/function (module, exports, __webpack_require__) {
	
							"use strict";
	
							var emoji = __webpack_require__(2);
	
							var container = document.getElementById("app");
							container.innerText = emoji.format(container.innerText);
	
							/***/
						},
						/* 2 */
						/***/function (module, exports) {
	
							"use strict";
	
							var format = function format(message) {
								return message.replace(/:\)/g, "%))");
							};
	
							module.exports = {
								format: format
							};
	
							/***/
						},
						/* 3 */
						/***/function (module, exports) {
	
							"use strict";
	
							/******/
	
							(function (modules) {
								// webpackBootstrap
								/******/ // The module cache
								/******/var installedModules = {};
								/******/
								/******/ // The require function
								/******/function __webpack_require__(moduleId) {
									/******/
									/******/ // Check if module is in cache
									/******/if (installedModules[moduleId])
										/******/return installedModules[moduleId].exports;
									/******/
									/******/ // Create a new module (and put it into the cache)
									/******/var module = installedModules[moduleId] = {
										/******/exports: {},
										/******/id: moduleId,
										/******/loaded: false
										/******/ };
									/******/
									/******/ // Execute the module function
									/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
									/******/
									/******/ // Flag the module as loaded
									/******/module.loaded = true;
									/******/
									/******/ // Return the exports of the module
									/******/return module.exports;
									/******/
								}
								/******/
								/******/
								/******/ // expose the modules object (__webpack_modules__)
								/******/__webpack_require__.m = modules;
								/******/
								/******/ // expose the module cache
								/******/__webpack_require__.c = installedModules;
								/******/
								/******/ // __webpack_public_path__
								/******/__webpack_require__.p = "";
								/******/
								/******/ // Load entry module and return exports
								/******/return __webpack_require__(0);
								/******/
							})(
							/************************************************************************/
							/******/[
							/* 0 */
							/***/function (module, exports, __webpack_require__) {
	
								__webpack_require__(1);
								module.exports = __webpack_require__(3);
	
								/***/
							},
							/* 1 */
							/***/function (module, exports, __webpack_require__) {
	
								"use strict";
	
								var emoji = __webpack_require__(2);
	
								var container = document.getElementById("app");
								container.innerText = emoji.format(container.innerText);
	
								/***/
							},
							/* 2 */
							/***/function (module, exports) {
	
								"use strict";
	
								var format = function format(message) {
									return message.replace(/:\)/g, "%))");
								};
	
								module.exports = {
									format: format
								};
	
								/***/
							},
							/* 3 */
							/***/function (module, exports) {
	
								"use strict";
	
								/******/
	
								(function (modules) {
									// webpackBootstrap
									/******/ // The module cache
									/******/var installedModules = {};
									/******/
									/******/ // The require function
									/******/function __webpack_require__(moduleId) {
										/******/
										/******/ // Check if module is in cache
										/******/if (installedModules[moduleId])
											/******/return installedModules[moduleId].exports;
										/******/
										/******/ // Create a new module (and put it into the cache)
										/******/var module = installedModules[moduleId] = {
											/******/exports: {},
											/******/id: moduleId,
											/******/loaded: false
											/******/ };
										/******/
										/******/ // Execute the module function
										/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
										/******/
										/******/ // Flag the module as loaded
										/******/module.loaded = true;
										/******/
										/******/ // Return the exports of the module
										/******/return module.exports;
										/******/
									}
									/******/
									/******/
									/******/ // expose the modules object (__webpack_modules__)
									/******/__webpack_require__.m = modules;
									/******/
									/******/ // expose the module cache
									/******/__webpack_require__.c = installedModules;
									/******/
									/******/ // __webpack_public_path__
									/******/__webpack_require__.p = "";
									/******/
									/******/ // Load entry module and return exports
									/******/return __webpack_require__(0);
									/******/
								})(
								/************************************************************************/
								/******/[
								/* 0 */
								/***/function (module, exports, __webpack_require__) {
	
									__webpack_require__(1);
									module.exports = __webpack_require__(3);
	
									/***/
								},
								/* 1 */
								/***/function (module, exports, __webpack_require__) {
	
									"use strict";
	
									var emoji = __webpack_require__(2);
	
									var container = document.getElementById("app");
									container.innerText = emoji.format(container.innerText);
	
									/***/
								},
								/* 2 */
								/***/function (module, exports) {
	
									"use strict";
	
									var format = function format(message) {
										return message.replace(/:\)/g, "%))");
									};
	
									module.exports = {
										format: format
									};
	
									/***/
								},
								/* 3 */
								/***/function (module, exports) {
	
									"use strict";
	
									/******/
	
									(function (modules) {
										// webpackBootstrap
										/******/ // The module cache
										/******/var installedModules = {};
										/******/
										/******/ // The require function
										/******/function __webpack_require__(moduleId) {
											/******/
											/******/ // Check if module is in cache
											/******/if (installedModules[moduleId])
												/******/return installedModules[moduleId].exports;
											/******/
											/******/ // Create a new module (and put it into the cache)
											/******/var module = installedModules[moduleId] = {
												/******/exports: {},
												/******/id: moduleId,
												/******/loaded: false
												/******/ };
											/******/
											/******/ // Execute the module function
											/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
											/******/
											/******/ // Flag the module as loaded
											/******/module.loaded = true;
											/******/
											/******/ // Return the exports of the module
											/******/return module.exports;
											/******/
										}
										/******/
										/******/
										/******/ // expose the modules object (__webpack_modules__)
										/******/__webpack_require__.m = modules;
										/******/
										/******/ // expose the module cache
										/******/__webpack_require__.c = installedModules;
										/******/
										/******/ // __webpack_public_path__
										/******/__webpack_require__.p = "";
										/******/
										/******/ // Load entry module and return exports
										/******/return __webpack_require__(0);
										/******/
									})(
									/************************************************************************/
									/******/[
									/* 0 */
									/***/function (module, exports, __webpack_require__) {
	
										__webpack_require__(1);
										module.exports = __webpack_require__(3);
	
										/***/
									},
									/* 1 */
									/***/function (module, exports, __webpack_require__) {
	
										"use strict";
	
										var emoji = __webpack_require__(!function webpackMissingModule() {
											var e = new Error("Cannot find module \"./emoji.js\"");e.code = 'MODULE_NOT_FOUND';throw e;
										}());
	
										var container = document.getElementById("app");
										container.innerText = emoji.format(container.innerText);
	
										/***/
									},,
									/* 2 */
									/* 3 */
									/***/function (module, exports) {
	
										"use strict";
	
										/******/
	
										(function (modules) {
											// webpackBootstrap
											/******/ // The module cache
											/******/var installedModules = {};
											/******/
											/******/ // The require function
											/******/function __webpack_require__(moduleId) {
												/******/
												/******/ // Check if module is in cache
												/******/if (installedModules[moduleId])
													/******/return installedModules[moduleId].exports;
												/******/
												/******/ // Create a new module (and put it into the cache)
												/******/var module = installedModules[moduleId] = {
													/******/exports: {},
													/******/id: moduleId,
													/******/loaded: false
													/******/ };
												/******/
												/******/ // Execute the module function
												/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
												/******/
												/******/ // Flag the module as loaded
												/******/module.loaded = true;
												/******/
												/******/ // Return the exports of the module
												/******/return module.exports;
												/******/
											}
											/******/
											/******/
											/******/ // expose the modules object (__webpack_modules__)
											/******/__webpack_require__.m = modules;
											/******/
											/******/ // expose the module cache
											/******/__webpack_require__.c = installedModules;
											/******/
											/******/ // __webpack_public_path__
											/******/__webpack_require__.p = "";
											/******/
											/******/ // Load entry module and return exports
											/******/return __webpack_require__(0);
											/******/
										})(
										/************************************************************************/
										/******/[
										/* 0 */
										/***/function (module, exports, __webpack_require__) {
	
											__webpack_require__(1);
											module.exports = __webpack_require__(3);
	
											/***/
										},
										/* 1 */
										/***/function (module, exports, __webpack_require__) {
	
											"use strict";
	
											var emoji = __webpack_require__(!function webpackMissingModule() {
												var e = new Error("Cannot find module \"./emoji.js\"");e.code = 'MODULE_NOT_FOUND';throw e;
											}());
	
											var container = document.getElementById("app");
											container.innerText = emoji.format(container.innerText);
	
											/***/
										},,
										/* 2 */
										/* 3 */
										/***/function (module, exports) {
	
											"use strict";
	
											/******/
	
											(function (modules) {
												// webpackBootstrap
												/******/ // The module cache
												/******/var installedModules = {};
												/******/
												/******/ // The require function
												/******/function __webpack_require__(moduleId) {
													/******/
													/******/ // Check if module is in cache
													/******/if (installedModules[moduleId])
														/******/return installedModules[moduleId].exports;
													/******/
													/******/ // Create a new module (and put it into the cache)
													/******/var module = installedModules[moduleId] = {
														/******/exports: {},
														/******/id: moduleId,
														/******/loaded: false
														/******/ };
													/******/
													/******/ // Execute the module function
													/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
													/******/
													/******/ // Flag the module as loaded
													/******/module.loaded = true;
													/******/
													/******/ // Return the exports of the module
													/******/return module.exports;
													/******/
												}
												/******/
												/******/
												/******/ // expose the modules object (__webpack_modules__)
												/******/__webpack_require__.m = modules;
												/******/
												/******/ // expose the module cache
												/******/__webpack_require__.c = installedModules;
												/******/
												/******/ // __webpack_public_path__
												/******/__webpack_require__.p = "";
												/******/
												/******/ // Load entry module and return exports
												/******/return __webpack_require__(0);
												/******/
											})(
											/************************************************************************/
											/******/[
											/* 0 */
											/***/function (module, exports, __webpack_require__) {
	
												__webpack_require__(1);
												module.exports = __webpack_require__(3);
	
												/***/
											},
											/* 1 */
											/***/function (module, exports, __webpack_require__) {
	
												"use strict";
	
												var emoji = __webpack_require__(2);
	
												var container = document.getElementById("app");
												container.innerText = emoji.format(container.innerText);
	
												/***/
											},
											/* 2 */
											/***/function (module, exports) {
	
												"use strict";
	
												var format = function format(message) {
													return message.replace(/:\)/g, "%)");
												};
	
												module.exports = {
													format: format
												};
	
												/***/
											},
											/* 3 */
											/***/function (module, exports) {
	
												"use strict";
	
												/******/
	
												(function (modules) {
													// webpackBootstrap
													/******/ // The module cache
													/******/var installedModules = {};
													/******/
													/******/ // The require function
													/******/function __webpack_require__(moduleId) {
														/******/
														/******/ // Check if module is in cache
														/******/if (installedModules[moduleId])
															/******/return installedModules[moduleId].exports;
														/******/
														/******/ // Create a new module (and put it into the cache)
														/******/var module = installedModules[moduleId] = {
															/******/exports: {},
															/******/id: moduleId,
															/******/loaded: false
															/******/ };
														/******/
														/******/ // Execute the module function
														/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
														/******/
														/******/ // Flag the module as loaded
														/******/module.loaded = true;
														/******/
														/******/ // Return the exports of the module
														/******/return module.exports;
														/******/
													}
													/******/
													/******/
													/******/ // expose the modules object (__webpack_modules__)
													/******/__webpack_require__.m = modules;
													/******/
													/******/ // expose the module cache
													/******/__webpack_require__.c = installedModules;
													/******/
													/******/ // __webpack_public_path__
													/******/__webpack_require__.p = "";
													/******/
													/******/ // Load entry module and return exports
													/******/return __webpack_require__(0);
													/******/
												})(
												/************************************************************************/
												/******/[
												/* 0 */
												/***/function (module, exports, __webpack_require__) {
	
													__webpack_require__(1);
													module.exports = __webpack_require__(3);
	
													/***/
												},
												/* 1 */
												/***/function (module, exports, __webpack_require__) {
	
													"use strict";
	
													var emoji = __webpack_require__(2);
	
													var container = document.getElementById("app");
													container.innerText = emoji.format(container.innerText);
	
													/***/
												},
												/* 2 */
												/***/function (module, exports) {
	
													"use strict";
	
													var format = function format(message) {
														return message.replace(/:\)/g, "%)");
													};
	
													module.exports = {
														format: format
													};
	
													/***/
												},
												/* 3 */
												/***/function (module, exports) {
	
													"use strict";
	
													/******/
	
													(function (modules) {
														// webpackBootstrap
														/******/ // The module cache
														/******/var installedModules = {};
														/******/
														/******/ // The require function
														/******/function __webpack_require__(moduleId) {
															/******/
															/******/ // Check if module is in cache
															/******/if (installedModules[moduleId])
																/******/return installedModules[moduleId].exports;
															/******/
															/******/ // Create a new module (and put it into the cache)
															/******/var module = installedModules[moduleId] = {
																/******/exports: {},
																/******/id: moduleId,
																/******/loaded: false
																/******/ };
															/******/
															/******/ // Execute the module function
															/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
															/******/
															/******/ // Flag the module as loaded
															/******/module.loaded = true;
															/******/
															/******/ // Return the exports of the module
															/******/return module.exports;
															/******/
														}
														/******/
														/******/
														/******/ // expose the modules object (__webpack_modules__)
														/******/__webpack_require__.m = modules;
														/******/
														/******/ // expose the module cache
														/******/__webpack_require__.c = installedModules;
														/******/
														/******/ // __webpack_public_path__
														/******/__webpack_require__.p = "";
														/******/
														/******/ // Load entry module and return exports
														/******/return __webpack_require__(0);
														/******/
													})(
													/************************************************************************/
													/******/[
													/* 0 */
													/***/function (module, exports, __webpack_require__) {
	
														__webpack_require__(1);
														module.exports = __webpack_require__(3);
	
														/***/
													},
													/* 1 */
													/***/function (module, exports, __webpack_require__) {
	
														"use strict";
	
														var emoji = __webpack_require__(2);
	
														var container = document.getElementById("app");
														container.innerText = emoji.format(container.innerText);
	
														/***/
													},
													/* 2 */
													/***/function (module, exports) {
	
														"use strict";
	
														var format = function format(message) {
															return message.replace(/:\)/g, "%)");
														};
	
														module.exports = {
															format: format
														};
	
														/***/
													},
													/* 3 */
													/***/function (module, exports) {
	
														"use strict";
	
														/******/
	
														(function (modules) {
															// webpackBootstrap
															/******/ // The module cache
															/******/var installedModules = {};
															/******/
															/******/ // The require function
															/******/function __webpack_require__(moduleId) {
																/******/
																/******/ // Check if module is in cache
																/******/if (installedModules[moduleId])
																	/******/return installedModules[moduleId].exports;
																/******/
																/******/ // Create a new module (and put it into the cache)
																/******/var module = installedModules[moduleId] = {
																	/******/exports: {},
																	/******/id: moduleId,
																	/******/loaded: false
																	/******/ };
																/******/
																/******/ // Execute the module function
																/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
																/******/
																/******/ // Flag the module as loaded
																/******/module.loaded = true;
																/******/
																/******/ // Return the exports of the module
																/******/return module.exports;
																/******/
															}
															/******/
															/******/
															/******/ // expose the modules object (__webpack_modules__)
															/******/__webpack_require__.m = modules;
															/******/
															/******/ // expose the module cache
															/******/__webpack_require__.c = installedModules;
															/******/
															/******/ // __webpack_public_path__
															/******/__webpack_require__.p = "";
															/******/
															/******/ // Load entry module and return exports
															/******/return __webpack_require__(0);
															/******/
														})(
														/************************************************************************/
														/******/[
														/* 0 */
														/***/function (module, exports, __webpack_require__) {
	
															__webpack_require__(1);
															module.exports = __webpack_require__(3);
	
															/***/
														},
														/* 1 */
														/***/function (module, exports, __webpack_require__) {
	
															"use strict";
	
															var emoji = __webpack_require__(2);
	
															var container = document.getElementById("app");
															container.innerText = emoji.format(container.innerText);
	
															/***/
														},
														/* 2 */
														/***/function (module, exports) {
	
															"use strict";
	
															var format = function format(message) {
																return message.replace(/:\)/g, "%)");
															};
	
															module.exports = {
																format: format
															};
	
															/***/
														},
														/* 3 */
														/***/function (module, exports) {
	
															"use strict";
	
															/******/
	
															(function (modules) {
																// webpackBootstrap
																/******/ // The module cache
																/******/var installedModules = {};
																/******/
																/******/ // The require function
																/******/function __webpack_require__(moduleId) {
																	/******/
																	/******/ // Check if module is in cache
																	/******/if (installedModules[moduleId])
																		/******/return installedModules[moduleId].exports;
																	/******/
																	/******/ // Create a new module (and put it into the cache)
																	/******/var module = installedModules[moduleId] = {
																		/******/exports: {},
																		/******/id: moduleId,
																		/******/loaded: false
																		/******/ };
																	/******/
																	/******/ // Execute the module function
																	/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
																	/******/
																	/******/ // Flag the module as loaded
																	/******/module.loaded = true;
																	/******/
																	/******/ // Return the exports of the module
																	/******/return module.exports;
																	/******/
																}
																/******/
																/******/
																/******/ // expose the modules object (__webpack_modules__)
																/******/__webpack_require__.m = modules;
																/******/
																/******/ // expose the module cache
																/******/__webpack_require__.c = installedModules;
																/******/
																/******/ // __webpack_public_path__
																/******/__webpack_require__.p = "";
																/******/
																/******/ // Load entry module and return exports
																/******/return __webpack_require__(0);
																/******/
															})(
															/************************************************************************/
															/******/[
															/* 0 */
															/***/function (module, exports, __webpack_require__) {
	
																(function webpackMissingModule() {
																	throw new Error("Cannot find module \"./src/index.js\"");
																})();
																(function webpackMissingModule() {
																	throw new Error("Cannot find module \"C:\\Users\\Max\\WebstormProjects\\frontend-course\\bundle.js\"");
																})();
	
																/***/
															}
															/******/]);
															//# sourceMappingURL=bundle.js.map
	
															/***/
														}
														/******/]);
														//# sourceMappingURL=bundle.js.map
	
														/***/
													}
													/******/]);
													//# sourceMappingURL=bundle.js.map
	
													/***/
												}
												/******/]);
												//# sourceMappingURL=bundle.js.map
	
												/***/
											}
											/******/]);
											//# sourceMappingURL=bundle.js.map
	
											/***/
										}
										/******/]);
										//# sourceMappingURL=bundle.js.map
	
										/***/
									}
									/******/]);
									//# sourceMappingURL=bundle.js.map
	
									/***/
								}
								/******/]);
								//# sourceMappingURL=bundle.js.map
	
								/***/
							}
							/******/]);
							//# sourceMappingURL=bundle.js.map
	
							/***/
						}
						/******/]);
						//# sourceMappingURL=bundle.js.map
	
						/***/
					}
					/******/]);
					//# sourceMappingURL=bundle.js.map
	
					/***/
				}
				/******/]);
				//# sourceMappingURL=bundle.js.map
	
				/***/
			}
			/******/]);
			//# sourceMappingURL=bundle.js.map
	
			/***/
		}
		/******/]);
		//# sourceMappingURL=bundle.js.map
	
		/***/
	}
	/******/]);
	//# sourceMappingURL=bundle.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map