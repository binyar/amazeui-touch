/** Amaze UI Touch v1.0.0-beta.3 | by Amaze UI Team
  * (c) 2016 AllMobilize, Inc., Licensed under MIT
  * 2016-06-01T15:39:45+0800
  */
  (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["AMUITouch"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["AMUITouch"] = factory(root["React"], root["React"]["addons"]["CSSTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_26__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.View = exports.Touchable = exports.Tabs = exports.TabBar = exports.Switch = exports.Slider = exports.PopoverTrigger = exports.Popover = exports.OffCanvasTrigger = exports.OffCanvas = exports.Notification = exports.NavBar = exports.Modal = exports.Loader = exports.List = exports.Field = exports.Icon = exports.Card = exports.ButtonToolbar = exports.ButtonGroup = exports.Button = exports.Badge = exports.Accordion = exports.Group = exports.Col = exports.Grid = exports.Container = exports.VERSION = undefined;

	var _Container = __webpack_require__(1);

	Object.defineProperty(exports, 'Container', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Container).default;
	  }
	});

	var _Grid = __webpack_require__(7);

	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Grid).default;
	  }
	});

	var _Col = __webpack_require__(8);

	Object.defineProperty(exports, 'Col', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Col).default;
	  }
	});

	var _Group = __webpack_require__(9);

	Object.defineProperty(exports, 'Group', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Group).default;
	  }
	});

	var _Accordion = __webpack_require__(10);

	Object.defineProperty(exports, 'Accordion', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Accordion).default;
	  }
	});

	var _Badge = __webpack_require__(16);

	Object.defineProperty(exports, 'Badge', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Badge).default;
	  }
	});

	var _Button = __webpack_require__(17);

	Object.defineProperty(exports, 'Button', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Button).default;
	  }
	});

	var _ButtonGroup = __webpack_require__(18);

	Object.defineProperty(exports, 'ButtonGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ButtonGroup).default;
	  }
	});

	var _ButtonToolbar = __webpack_require__(19);

	Object.defineProperty(exports, 'ButtonToolbar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ButtonToolbar).default;
	  }
	});

	var _Card = __webpack_require__(20);

	Object.defineProperty(exports, 'Card', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Card).default;
	  }
	});

	var _Icon = __webpack_require__(15);

	Object.defineProperty(exports, 'Icon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Icon).default;
	  }
	});

	var _Field = __webpack_require__(21);

	Object.defineProperty(exports, 'Field', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Field).default;
	  }
	});

	var _List = __webpack_require__(22);

	Object.defineProperty(exports, 'List', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_List).default;
	  }
	});

	var _Loader = __webpack_require__(23);

	Object.defineProperty(exports, 'Loader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Loader).default;
	  }
	});

	var _modal = __webpack_require__(24);

	Object.defineProperty(exports, 'Modal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_modal).default;
	  }
	});

	var _NavBar = __webpack_require__(28);

	Object.defineProperty(exports, 'NavBar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_NavBar).default;
	  }
	});

	var _Notification = __webpack_require__(29);

	Object.defineProperty(exports, 'Notification', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Notification).default;
	  }
	});

	var _OffCanvas = __webpack_require__(30);

	Object.defineProperty(exports, 'OffCanvas', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_OffCanvas).default;
	  }
	});

	var _OffCanvasTrigger = __webpack_require__(32);

	Object.defineProperty(exports, 'OffCanvasTrigger', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_OffCanvasTrigger).default;
	  }
	});

	var _Popover = __webpack_require__(35);

	Object.defineProperty(exports, 'Popover', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Popover).default;
	  }
	});

	var _PopoverTrigger = __webpack_require__(36);

	Object.defineProperty(exports, 'PopoverTrigger', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PopoverTrigger).default;
	  }
	});

	var _Slider = __webpack_require__(38);

	Object.defineProperty(exports, 'Slider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Slider).default;
	  }
	});

	var _Switch = __webpack_require__(43);

	Object.defineProperty(exports, 'Switch', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Switch).default;
	  }
	});

	var _TabBar = __webpack_require__(44);

	Object.defineProperty(exports, 'TabBar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TabBar).default;
	  }
	});

	var _Tabs = __webpack_require__(45);

	Object.defineProperty(exports, 'Tabs', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Tabs).default;
	  }
	});

	var _Touchable = __webpack_require__(39);

	Object.defineProperty(exports, 'Touchable', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Touchable).default;
	  }
	});

	var _View = __webpack_require__(46);

	Object.defineProperty(exports, 'View', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_View).default;
	  }
	});

	var _mixins = __webpack_require__(47);

	Object.keys(_mixins).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _mixins[key];
	    }
	  });
	});

	__webpack_require__(48);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// @see http://jamesknelson.com/re-exporting-es6-modules/
	// @see http://exploringjs.com/es6/ch_modules.html#sec_all-exporting-styles

	var VERSION = exports.VERSION = '1.0.0-beta.3';

	// Layout


	// Mixins


	// Compatibility fallback

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // @see https://github.com/JedWatson/react-container
	// @license MIT Copyright (c) 2015 Jed Watson

	function hasChildrenWithVerticalFill(children) {
	  var result = false;

	  _react2.default.Children.forEach(children, function (child) {
	    if (result) {
	      return; // early-exit
	    }

	    if (!child) {
	      return;
	    }

	    if (!child.type) {
	      return;
	    }

	    result = !!child.type.shouldFillVerticalSpace;
	  });

	  return result;
	}

	function initScrollable(defaultPos) {
	  if (!defaultPos) {
	    defaultPos = {};
	  }

	  var pos = void 0;
	  var scrollable = {
	    reset: function reset() {
	      pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
	    },
	    getPos: function getPos() {
	      return { left: pos.left, top: pos.top };
	    },
	    mount: function mount(element) {
	      var node = _react2.default.findDOMNode(element);
	      node.scrollLeft = pos.left;
	      node.scrollTop = pos.top;
	    },
	    unmount: function unmount(element) {
	      var node = _react2.default.findDOMNode(element);
	      pos.left = node.scrollLeft;
	      pos.top = node.scrollTop;
	    }
	  };

	  scrollable.reset();

	  return scrollable;
	}

	var TRANSITION_TIMEOUT = 500;

	var Container = _react2.default.createClass({
	  displayName: 'Container',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.node,
	    align: _react2.default.PropTypes.oneOf(['end', 'center', 'start']),
	    direction: _react2.default.PropTypes.oneOf(['column', 'row']),
	    fill: _react2.default.PropTypes.bool,
	    grow: _react2.default.PropTypes.bool,
	    justify: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.oneOf(['end', 'center', 'start'])]),
	    scrollable: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.object]),
	    transition: _react2.default.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'container',
	      component: 'div'
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.scrollable && this.props.scrollable.mount) {
	      this.props.scrollable.mount(this);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.scrollable && this.props.scrollable.unmount) {
	      this.props.scrollable.unmount(this);
	    }
	  },
	  render: function render() {
	    var _classNames;

	    var _props = this.props;
	    var className = _props.className;
	    var Component = _props.component;
	    var children = _props.children;
	    var direction = _props.direction;
	    var fill = _props.fill;
	    var align = _props.align;
	    var justify = _props.justify;
	    var scrollable = _props.scrollable;
	    var transition = _props.transition;

	    var props = _objectWithoutProperties(_props, ['className', 'component', 'children', 'direction', 'fill', 'align', 'justify', 'scrollable', 'transition']);

	    var classSet = this.getClassSet();

	    // As view transition container
	    if (transition) {
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        _extends({
	          component: 'div',
	          className: (0, _classnames2.default)(this.setClassNS('views'), className),
	          transitionName: this.setClassNS('view-transition-' + transition),
	          transitionEnterTimeout: TRANSITION_TIMEOUT,
	          transitionLeaveTimeout: TRANSITION_TIMEOUT
	        }, props),
	        children
	      );
	    }

	    if (!direction) {
	      if (hasChildrenWithVerticalFill(children)) {
	        direction = 'column';
	      }
	    }

	    if (direction === 'column' || scrollable) {
	      fill = true;
	    }

	    if (direction === 'column' && align === 'top') {
	      align = 'start';
	    }

	    if (direction === 'column' && align === 'bottom') {
	      align = 'end';
	    }

	    if (direction === 'row' && align === 'left') {
	      align = 'start';
	    }

	    if (direction === 'row' && align === 'right') {
	      align = 'end';
	    }

	    var classes = (0, _classnames2.default)(classSet, className, (_classNames = {}, _defineProperty(_classNames, this.prefixClass('fill'), fill), _defineProperty(_classNames, this.prefixClass('column'), direction === 'column'), _defineProperty(_classNames, this.prefixClass('row'), direction === 'row'), _defineProperty(_classNames, this.prefixClass('align-center'), align === 'center'), _defineProperty(_classNames, this.prefixClass('align-start'), align === 'start'), _defineProperty(_classNames, this.prefixClass('align-end'), align === 'end'), _defineProperty(_classNames, this.prefixClass('justify-center'), justify === 'center'), _defineProperty(_classNames, this.prefixClass('justify-start'), justify === 'start'), _defineProperty(_classNames, this.prefixClass('justify-end'), justify === 'end'), _defineProperty(_classNames, this.prefixClass('justified'), justify === true), _defineProperty(_classNames, this.prefixClass('scrollable'), scrollable), _classNames));

	    return _react2.default.createElement(
	      Component,
	      _extends({
	        className: classes
	      }, props),
	      children
	    );
	  }
	});

	Container.initScrollable = initScrollable;

	exports.default = Container;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var namespace = _config.NAMESPACE ? _config.NAMESPACE + '-' : '';

	var ClassNameMixin = {
	  setClassNS: function setClassNS(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';

	    return namespace + prefix;
	  },
	  getClassSet: function getClassSet(ignorePrefix) {
	    var classNames = {};
	    var _props = this.props;
	    var amSize = _props.amSize;
	    var amStyle = _props.amStyle;
	    var hollow = _props.hollow;
	    var radius = _props.radius;
	    var rounded = _props.rounded;
	    var active = _props.active;
	    var selected = _props.selected;
	    var disabled = _props.disabled;
	    var inset = _props.inset;

	    // uses `.am-` as prefix if `classPrefix` is not defined

	    var prefix = namespace;

	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNS();

	      prefix = classPrefix + '-';

	      // don't return prefix if ignore flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }

	    if (amSize) {
	      classNames[prefix + amSize] = true;
	    }

	    if (amStyle) {
	      classNames[prefix + amStyle] = true;
	    }

	    if (hollow) {
	      classNames[prefix + 'hollow'] = true;
	    }

	    classNames[this.prefixClass('radius')] = radius;
	    classNames[this.prefixClass('rounded')] = rounded;

	    classNames[this.prefixClass('inset')] = inset;

	    // state className
	    // `selected` is an alias of active
	    classNames[_config.CLASSNAMES['active']] = active || selected;
	    classNames[_config.CLASSNAMES['disabled']] = disabled;

	    // shape
	    // classNames[constants.CLASSES.radius] = this.props.radius;
	    // classNames[constants.CLASSES.round] = this.props.round;

	    return classNames;
	  },
	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNS() + '-' + subClass;
	  }
	};

	exports.default = ClassNameMixin;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAMESPACE = exports.NAMESPACE = null; // 'am'
	var CLASSNAMES = exports.CLASSNAMES = {
	  disabled: 'disabled',
	  active: 'active'
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Grid = _react2.default.createClass({
	  displayName: 'Grid',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    collapse: _react.PropTypes.bool,
	    avg: _react.PropTypes.number,
	    align: _react.PropTypes.oneOf(['right', 'center', 'between', 'around']),
	    wrap: _react.PropTypes.oneOf(['wrap', 'wrap-reverse'])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'g',
	      component: 'div'
	    };
	  },


	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var collapse = _props.collapse;
	    var className = _props.className;
	    var avg = _props.avg;
	    var align = _props.align;
	    var wrap = _props.wrap;

	    var props = _objectWithoutProperties(_props, ['component', 'collapse', 'className', 'avg', 'align', 'wrap']);

	    // .g-collapse


	    classSet[this.prefixClass('collapse')] = collapse;

	    // .g-wrap
	    classSet[this.prefixClass(wrap)] = wrap;

	    if (avg) {
	      classSet[this.prefixClass('avg-' + avg)] = true;
	    }

	    if (align) {
	      classSet[this.prefixClass(align)] = true;
	    }

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Grid;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Col = _react2.default.createClass({
	  displayName: 'Col',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    component: _react2.default.PropTypes.node.isRequired,
	    cols: _react2.default.PropTypes.number,
	    offset: _react2.default.PropTypes.number,
	    shrink: _react2.default.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'col',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var cols = _props.cols;
	    var offset = _props.offset;
	    var shrink = _props.shrink;
	    var Component = _props.component;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['cols', 'offset', 'shrink', 'component', 'className']);

	    var classSet = this.getClassSet();

	    if (cols) {
	      classSet[this.prefixClass(cols)] = true;
	    }

	    if (offset) {
	      classSet[this.prefixClass('offset-' + offset)] = true;
	    }

	    classSet[this.prefixClass('shrink')] = shrink;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Col;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Group = _react2.default.createClass({
	  displayName: 'Group',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    component: _react2.default.PropTypes.node.isRequired,
	    header: _react2.default.PropTypes.node,
	    footer: _react2.default.PropTypes.node,
	    noPadded: _react2.default.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'group',
	      component: 'div'
	    };
	  },
	  renderAddon: function renderAddon(role) {
	    role = role || 'header';
	    return this.props[role] ? _react2.default.createElement(role, {
	      className: this.prefixClass(role)
	    }, this.props[role]) : null;
	  },
	  render: function render() {
	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var header = _props.header;
	    var footer = _props.footer;
	    var noPadded = _props.noPadded;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'header', 'footer', 'noPadded']);

	    var classSet = this.getClassSet();
	    classSet[this.prefixClass('no-padded')] = noPadded;

	    var bodyClasses = _defineProperty({}, this.prefixClass('body'), true);

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.renderAddon('header'),
	      _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(bodyClasses) },
	        this.props.children
	      ),
	      this.renderAddon('footer')
	    );
	  }
	});

	exports.default = Group;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _CollapseMixin = __webpack_require__(11);

	var _CollapseMixin2 = _interopRequireDefault(_CollapseMixin);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Accordion = _react2.default.createClass({
	  displayName: 'Accordion',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    activeKey: _react2.default.PropTypes.any,
	    defaultActiveKey: _react2.default.PropTypes.any,
	    inset: _react2.default.PropTypes.bool,
	    onAction: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'accordion'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.props.defaultActiveKey || null
	    };
	  },


	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onAction` handler.
	    return !this._isChanging;
	  },

	  handleSelect: function handleSelect(e, key) {
	    e.preventDefault();

	    if (this.props.onAction) {
	      this._isChanging = true;
	      this.props.onAction(key);
	      this._isChanging = false;
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({
	      activeKey: key
	    });
	  },
	  renderItems: function renderItems() {
	    var _this = this;

	    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

	    return _react2.default.Children.map(this.props.children, function (child, index) {
	      var eventKey = child.props.eventKey;

	      var props = {
	        key: index,
	        onAction: _this.handleSelect
	      };

	      if (eventKey === undefined) {
	        props.eventKey = eventKey = index;
	      }

	      props.expanded = eventKey === activeKey;

	      return _react2.default.cloneElement(child, props);
	    });
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass('inset')] = this.props.inset;

	    return _react2.default.createElement(
	      'section',
	      _extends({}, this.props, {
	        className: (0, _classnames2.default)(classSet, this.props.className)
	      }),
	      this.renderItems()
	    );
	  }
	});

	Accordion.Item = _react2.default.createClass({
	  displayName: 'Item',

	  mixins: [_ClassNameMixin2.default, _CollapseMixin2.default],

	  propTypes: {
	    title: _react2.default.PropTypes.node,
	    eventKey: _react2.default.PropTypes.any
	  },

	  handleClick: function handleClick(e) {
	    // @see https://facebook.github.io/react/docs/events.html#event-pooling
	    e.persist();
	    e.selected = true;

	    if (this.props.onAction) {
	      this.props.onAction(e, this.props.eventKey);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.handleToggle();
	    }
	  },

	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },
	  getCollapsibleDimensionValue: function getCollapsibleDimensionValue() {
	    return this.refs.panel.scrollHeight;
	  },
	  getCollapsibleDOMNode: function getCollapsibleDOMNode() {
	    if (!this.isMounted() || !this.refs || !this.refs.panel) {
	      return null;
	    }

	    return this.refs.panel;
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'dl',
	      {
	        className: (0, _classnames2.default)(this.setClassNS('accordion-item'), this.isExpanded() ? this.setClassNS('active') : null)
	      },
	      _react2.default.createElement(
	        'dt',
	        {
	          onClick: this.handleClick,
	          className: this.setClassNS('accordion-title')
	        },
	        this.props.title,
	        _react2.default.createElement(_Icon2.default, {
	          className: this.setClassNS('accordion-icon'),
	          name: 'right-nav'
	        })
	      ),
	      _react2.default.createElement(
	        'dd',
	        {
	          className: (0, _classnames2.default)(this.setClassNS('accordion-body'), this.getCollapsibleClassSet()),
	          ref: 'panel'
	        },
	        _react2.default.createElement(
	          'div',
	          {
	            className: this.setClassNS('accordion-content')
	          },
	          this.props.children
	        )
	      )
	    );
	  }
	});

	exports.default = Accordion;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TransitionEvents = __webpack_require__(12);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
	 */

	var CollapseMixin = {
	  propTypes: {
	    defaultExpanded: _react2.default.PropTypes.bool,
	    expanded: _react2.default.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

	    if (willExpanded === this.isExpanded()) {
	      return;
	    }

	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';

	    if (!willExpanded) {
	      // get height
	      value = this.getCollapsibleDimensionValue();
	    }

	    node.style[dimension] = value + 'px';

	    this._afterWillUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);

	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },


	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},
	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();

	    // setting the dimension here starts the transition animation
	    var result;

	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },
	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();

	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },
	  _handleExpand: function _handleExpand() {
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();

	    var complete = function () {
	      this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      this.setState({
	        collapsing: false
	      });
	    }.bind(this);

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },
	  _handleCollapse: function _handleCollapse() {
	    var node = this.getCollapsibleDOMNode();
	    var _this = this;
	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      _this.setState({
	        collapsing: false
	      });
	    };

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },


	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    _TransitionEvents2.default.on(node, complete);
	  },


	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    _TransitionEvents2.default.off(node, complete);
	  },
	  dimension: function dimension() {
	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },
	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },
	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classSet = {};

	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClass) {
	        if (subClass) {
	          classSet[subClass] = true;
	        }
	      });
	    }

	    classSet[this.setClassNS('collapsing')] = this.state.collapsing;
	    classSet[this.setClassNS('collapse')] = !this.state.collapsing;
	    classSet[this.setClassNS('in')] = this.isExpanded() && !this.state.collapsing;

	    return classSet;
	  }
	};

	exports.default = CollapseMixin;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CSSCore = __webpack_require__(13);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _canUseDOM = __webpack_require__(14);

	var _canUseDOM2 = _interopRequireDefault(_canUseDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/addons/transitions/ReactTransitionEvents.js
	 */

	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];
	var support = {};

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    support[baseEventName] = false;

	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        support[baseEventName] = baseEvents[styleName];
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (_canUseDOM2.default) {
	  detectEvents();
	}

	if (support.animationend) {
	  _CSSCore2.default.addClass(document.documentElement, 'cssanimations');
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  on: function on(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	  off: function off(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  },


	  support: support
	};

	exports.default = TransitionEvents;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @via https://github.com/facebook/react/blob/master/src/vendor/core/CSSCore.js
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   * @see http://caniuse.com/#feat=classlist
	   */

	  addClass: function addClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },


	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },


	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },


	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },
	  toggleClass: function toggleClass(element, className) {
	    return CSSCore.hasClass(element, className) ? CSSCore.removeClass(element, className) : CSSCore.addClass(element, className);
	  }
	};

	exports.default = CSSCore;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Icon = _react2.default.createClass({
	  displayName: 'Icon',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    component: _react2.default.PropTypes.node.isRequired,
	    name: _react2.default.PropTypes.string.isRequired,
	    href: _react2.default.PropTypes.string
	  },

	  // amStyle: React.PropTypes.string,
	  // button: React.PropTypes.bool,
	  // size: React.PropTypes.string,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'icon',
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var href = _props.href;
	    var name = _props.name;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'href', 'name']);

	    Component = href ? 'a' : Component;

	    // icon-[iconName]
	    classSet[this.prefixClass(name)] = true;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Icon;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Badge = _react2.default.createClass({
	  displayName: 'Badge',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    component: _react2.default.PropTypes.node.isRequired,
	    href: _react2.default.PropTypes.string,
	    amStyle: _react2.default.PropTypes.string,
	    // radius: React.PropTypes.bool,
	    rounded: _react2.default.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'badge',
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var href = _props.href;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'href']);

	    Component = href ? 'a' : Component;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Badge;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Button = _react2.default.createClass({
	  displayName: 'Button',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    component: _react2.default.PropTypes.node,
	    href: _react2.default.PropTypes.string,
	    target: _react2.default.PropTypes.string,
	    amStyle: _react2.default.PropTypes.string,
	    amSize: _react2.default.PropTypes.string,
	    hollow: _react2.default.PropTypes.bool,
	    block: _react2.default.PropTypes.bool,
	    active: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool
	  },

	  // radius: React.PropTypes.bool,
	  // rounded: React.PropTypes.bool,
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn'
	    };
	  },
	  renderAnchor: function renderAnchor(classes) {
	    var _props = this.props;
	    var href = _props.href;
	    var Component = _props.component;
	    var children = _props.children;

	    var props = _objectWithoutProperties(_props, ['href', 'component', 'children']);

	    Component = Component || 'a';

	    href = href || '#';

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        href: href,
	        className: classes,
	        role: 'button'
	      }),
	      children
	    );
	  },
	  renderButton: function renderButton(classes) {
	    var _props2 = this.props;
	    var Component = _props2.component;
	    var children = _props2.children;

	    var props = _objectWithoutProperties(_props2, ['component', 'children']);

	    Component = Component || 'button';

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: classes
	      }),
	      children
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props3 = this.props;
	    var href = _props3.href;
	    var target = _props3.target;
	    var block = _props3.block;
	    var className = _props3.className;

	    var renderType = href || target ? 'renderAnchor' : 'renderButton';

	    // block button
	    classSet[this.prefixClass('block')] = block;

	    return this[renderType]((0, _classnames2.default)(classSet, className));
	  }
	});

	exports.default = Button;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ButtonGroup = _react2.default.createClass({
	  displayName: 'ButtonGroup',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    amStyle: _react2.default.PropTypes.string,
	    amSize: _react2.default.PropTypes.string,
	    hollow: _react2.default.PropTypes.bool,
	    justify: _react2.default.PropTypes.bool,
	    stacked: _react2.default.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-group'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var amStyle = _props.amStyle;
	    var amSize = _props.amSize;
	    var hollow = _props.hollow;
	    var stacked = _props.stacked;
	    var justify = _props.justify;

	    var props = _objectWithoutProperties(_props, ['className', 'amStyle', 'amSize', 'hollow', 'stacked', 'justify']);

	    classSet[this.prefixClass('stacked')] = stacked;
	    classSet[this.prefixClass('justify')] = justify;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      _react2.default.Children.map(this.props.children, function (child, i) {
	        return (0, _react.cloneElement)(child, _extends({
	          amStyle: amStyle,
	          amSize: amSize,
	          hollow: hollow
	        }, child.props));
	      })
	    );
	  }
	});

	exports.default = ButtonGroup;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ButtonToolbar = _react2.default.createClass({
	  displayName: 'ButtonToolbar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-toolbar'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, {
	        className: (0, _classnames2.default)(this.props.className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = ButtonToolbar;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Card = _react2.default.createClass({
	  displayName: 'Card',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    title: _react2.default.PropTypes.string,
	    header: _react2.default.PropTypes.node,
	    footer: _react2.default.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card'
	    };
	  },
	  renderItem: function renderItem(element, role) {
	    if (!element) {
	      return null;
	    }

	    return element.type && element.type === Card.Child ? element : _react2.default.createElement(
	      Card.Child,
	      { role: role },
	      element
	    );
	  },
	  renderTitle: function renderTitle(title) {
	    return _react2.default.createElement(
	      'h2',
	      { className: this.prefixClass('title') },
	      title
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;
	    var title = _props.title;
	    var header = _props.header;
	    var footer = _props.footer;

	    var props = _objectWithoutProperties(_props, ['children', 'className', 'title', 'header', 'footer']);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      title ? this.renderItem(this.renderTitle(title)) : this.renderItem(header),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('body') },
	        children
	      ),
	      this.renderItem(footer, 'footer')
	    );
	  }
	});

	Card.Child = _react2.default.createClass({
	  displayName: 'Child',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    role: _react2.default.PropTypes.oneOf(['header', 'footer']),
	    cover: _react2.default.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card',
	      role: 'header'
	    };
	  },
	  render: function render() {
	    var _classSet;

	    var _props2 = this.props;
	    var role = _props2.role;
	    var className = _props2.className;
	    var cover = _props2.cover;

	    var props = _objectWithoutProperties(_props2, ['role', 'className', 'cover']);

	    var classSet = (_classSet = {
	      className: className
	    }, _defineProperty(_classSet, this.prefixClass(role), true), _defineProperty(_classSet, this.prefixClass('cover'), cover), _classSet);
	    var style = null;

	    if (cover) {
	      style = {
	        backgroundImage: 'url(' + cover + ')'
	      };
	    }

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet),
	        style: style
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Card;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Button = __webpack_require__(17);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Field = _react2.default.createClass({
	  displayName: 'Field',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    type: _react2.default.PropTypes.string,
	    label: _react2.default.PropTypes.node,
	    btnBefore: _react2.default.PropTypes.node,
	    btnAfter: _react2.default.PropTypes.node,
	    labelBefore: _react2.default.PropTypes.node,
	    labelAfter: _react2.default.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'field',
	      type: 'text'
	    };
	  },
	  getFieldDOMNode: function getFieldDOMNode() {
	    return this.refs.field;
	  },
	  getValue: function getValue() {
	    if (this.props.type === 'select' && this.props.multiple) {
	      return this.getSelectedOptions();
	    } else {
	      return this.getFieldDOMNode().value;
	    }
	  },
	  getChecked: function getChecked() {
	    return this.getFieldDOMNode().checked;
	  },
	  getSelectedOptions: function getSelectedOptions() {
	    var values = [];
	    var options = this.getFieldDOMNode().getElementsByTagName('option');

	    options.forEach(function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;

	        values.push(value);
	      }
	    });

	    return values;
	  },
	  isCheckboxOrRadio: function isCheckboxOrRadio() {
	    return this.props.type === 'radio' || this.props.type === 'checkbox';
	  },
	  isFile: function isFile() {
	    return this.props.type === 'file';
	  },
	  renderField: function renderField() {
	    var field = null;
	    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : this.getClassSet();
	    var classes = (0, _classnames2.default)(this.props.className, fieldClassName);
	    var props = {
	      ref: 'field',
	      key: 'formField',
	      className: classes
	    };

	    switch (this.props.type) {
	      case 'select':
	        field = _react2.default.createElement(
	          'select',
	          _extends({}, this.props, props),
	          this.props.children
	        );
	        break;
	      case 'textarea':
	        field = _react2.default.createElement('textarea', _extends({}, this.props, props));
	        break;
	      case 'submit':
	      case 'reset':
	        var _props = this.props;
	        var classPrefix = _props.classPrefix;

	        var others = _objectWithoutProperties(_props, ['classPrefix']);

	        field = _react2.default.createElement(_Button2.default, _extends({}, props, {
	          className: null
	        }, others, {
	          component: 'input'
	        }));
	        break;
	      default:
	        field = _react2.default.createElement('input', _extends({}, this.props, props));
	    }

	    return field;
	  },
	  renderContainer: function renderContainer(children) {
	    return this.props.label ? _react2.default.createElement(
	      'label',
	      {
	        htmlFor: this.props.id,
	        className: this.prefixClass('container'),
	        key: 'label'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: this.prefixClass('label') },
	        this.props.label
	      ),
	      children,
	      this.isCheckboxOrRadio() ? _react2.default.createElement(_Icon2.default, {
	        className: this.prefixClass('icon'),
	        name: 'check'
	      }) : null
	    ) : children;
	  },
	  renderFieldGroup: function renderFieldGroup(children) {
	    var _this = this;

	    var groupPrefix = this.setClassNS('field-group');
	    var labelClassName = groupPrefix + '-label';
	    var _props2 = this.props;
	    var labelBefore = _props2.labelBefore;
	    var labelAfter = _props2.labelAfter;
	    var btnBefore = _props2.btnBefore;
	    var btnAfter = _props2.btnAfter;

	    var props = _objectWithoutProperties(_props2, ['labelBefore', 'labelAfter', 'btnBefore', 'btnAfter']);

	    var renderFiledLabel = function renderFiledLabel(type) {
	      return _this.props[type] ? _react2.default.createElement(
	        'span',
	        {
	          className: labelClassName,
	          key: type
	        },
	        _this.props[type]
	      ) : null;
	    };

	    return labelBefore || labelAfter || btnBefore || btnAfter ? _react2.default.createElement(
	      'div',
	      {
	        className: groupPrefix,
	        key: 'fieldGroup'
	      },
	      renderFiledLabel('labelBefore'),
	      btnBefore,
	      children,
	      renderFiledLabel('labelAfter'),
	      btnAfter
	    ) : children;
	  },
	  render: function render() {
	    var field = this.renderField();

	    if (this.props.label) {
	      return this.renderContainer(field);
	    }

	    return this.renderFieldGroup(field);
	  }
	});

	exports.default = Field;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var List = _react2.default.createClass({
	  displayName: 'List',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    inset: _react2.default.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'list'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var inset = _props.inset;

	    var props = _objectWithoutProperties(_props, ['className', 'inset']);

	    classSet[this.prefixClass('inset')] = inset;

	    // TODO: 使用 ul 可能不是太好的选择，再一些需要定义 component 的场合缺乏灵活性
	    return _react2.default.createElement('ul', _extends({}, props, {
	      className: (0, _classnames2.default)(classSet, className)
	    }));
	  }
	});

	List.Item = _react2.default.createClass({
	  displayName: 'Item',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    role: _react2.default.PropTypes.oneOf(['header', 'item']),
	    title: _react2.default.PropTypes.string,
	    subTitle: _react2.default.PropTypes.string,
	    href: _react2.default.PropTypes.string,
	    linked: _react2.default.PropTypes.bool, // linked flag for custom href like route Link
	    linkComponent: _react2.default.PropTypes.any,
	    linkProps: _react2.default.PropTypes.object,
	    media: _react2.default.PropTypes.node,
	    after: _react2.default.PropTypes.node,
	    desc: _react2.default.PropTypes.node,
	    nested: _react2.default.PropTypes.oneOf(['input', 'radio', 'checkbox']) },

	  // nested field
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'item',
	      role: 'item'
	    };
	  },
	  renderTitleRow: function renderTitleRow() {
	    var _props2 = this.props;
	    var title = _props2.title;
	    var subTitle = _props2.subTitle;
	    var href = _props2.href;
	    var linkComponent = _props2.linkComponent;


	    var itemTitle = title ? _react2.default.createElement(
	      'h3',
	      {
	        key: 'itemTitle',
	        className: this.prefixClass('title')
	      },
	      title
	    ) : null;

	    var titleChildren = [itemTitle, this.renderAddon('after'), href || linkComponent ? _react2.default.createElement(_Icon2.default, {
	      className: this.prefixClass('icon'),
	      name: 'right-nav',
	      key: 'itemChevron'
	    }) : null];

	    return subTitle ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('title-row'),
	        key: 'itemTitleRow'
	      },
	      titleChildren
	    ) : titleChildren;
	  },
	  renderMain: function renderMain() {
	    var _props3 = this.props;
	    var media = _props3.media;
	    var subTitle = _props3.subTitle;
	    var desc = _props3.desc;
	    var children = _props3.children;

	    var titleRow = this.renderTitleRow();
	    var notJustTitle = media || subTitle || desc || children;

	    // remove wrapper if without media/subTitle/children
	    return notJustTitle ? _react2.default.createElement(
	      'div',
	      {
	        key: 'itemMain',
	        className: this.prefixClass('main')
	      },
	      titleRow,
	      this.renderAddon('subTitle'),
	      this.renderAddon('desc'),
	      children
	    ) : titleRow;
	  },
	  wrapLink: function wrapLink(children) {
	    var _props4 = this.props;
	    var linkComponent = _props4.linkComponent;
	    var linkProps = _props4.linkProps;
	    var href = _props4.href;
	    var target = _props4.target;


	    return linkComponent ? _react2.default.createElement(linkComponent, linkProps, children) : _react2.default.createElement(
	      'a',
	      {
	        href: href,
	        target: target
	      },
	      children
	    );
	  },
	  renderAddon: function renderAddon(type) {
	    return this.props[type] ? _react2.default.createElement(
	      'div',
	      {
	        key: 'item-' + type,
	        className: this.prefixClass(type.toLowerCase())
	      },
	      this.props[type]
	    ) : null;
	  },
	  render: function render() {
	    var _props5 = this.props;
	    var className = _props5.className;
	    var role = _props5.role;
	    var title = _props5.title;
	    var subTitle = _props5.subTitle;
	    var href = _props5.href;
	    var after = _props5.after;
	    var media = _props5.media;
	    var children = _props5.children;
	    var linkComponent = _props5.linkComponent;
	    var linked = _props5.linked;
	    var nested = _props5.nested;

	    var props = _objectWithoutProperties(_props5, ['className', 'role', 'title', 'subTitle', 'href', 'after', 'media', 'children', 'linkComponent', 'linked', 'nested']);

	    var itemChildren = [this.renderAddon('media'), this.renderMain()];
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass(nested)] = nested;
	    classSet[this.prefixClass('header')] = role === 'header';
	    classSet[this.prefixClass('linked')] = href || linkComponent || linked;
	    subTitle && (classSet[this.prefixClass('content')] = true);

	    return _react2.default.createElement(
	      'li',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      role === 'header' ? children : href || linkComponent ? this.wrapLink(itemChildren) : itemChildren
	    );
	  }
	});

	exports.default = List;

	/**
	 * TODO:
	 * - 可选择列表（嵌套 radio/checkbox）图文混排的列表，
	 *   考虑的创建可选择列表时根据 nested 属性自动生产 input，而不用再去嵌套 Field，
	 *   以便图文混排选择实现。
	 * - UE：用户如何知道这个列表是可以选择的（增加相应的提示文字？）
	 * - 易用性：链接如何以更好的方式传入类似 react-router Link 这样的组件？
	 */

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Loader = _react2.default.createClass({
	  displayName: 'Loader',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.node,
	    amStyle: _react2.default.PropTypes.string,
	    rounded: _react2.default.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'loader',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var Component = _props.component;

	    var props = _objectWithoutProperties(_props, ['className', 'component']);

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce1') }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce2') }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce3') })
	    );
	  }
	});

	exports.default = Loader;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _ModalPortal = __webpack_require__(25);

	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ModalPortal2.default;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _CSSCore = __webpack_require__(13);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _Modal = __webpack_require__(27);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// const bodyElement = canUseDOM ? document.body : {appendChild: () => {}};
	var body = document.body;
	var bodyClassName = 'has-modal-open';

	var ModalPortal = (0, _react.createClass)({
	  propTypes: {
	    isOpen: _react2.default.PropTypes.bool.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      isOpen: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.node = document.createElement('div');
	    this.node.className = '__modal-portal';
	    body.appendChild(this.node);
	    this.renderModal(this.props);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.renderModal(nextProps);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    (0, _reactDom.unmountComponentAtNode)(this.node);
	    body.removeChild(this.node);
	    _CSSCore2.default.removeClass(body, bodyClassName);
	  },
	  renderModal: function renderModal(props) {
	    _CSSCore2.default[(props.isOpen ? 'add' : 'remove') + 'Class'](body, bodyClassName);
	    this.portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react2.default.createElement(_Modal2.default, props), this.node);
	  },
	  render: function render() {
	    return null;
	  }
	});

	exports.default = ModalPortal;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsCssTransitionGroup = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _TransitionEvents = __webpack_require__(12);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _Button = __webpack_require__(17);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Loader = __webpack_require__(23);

	var _Loader2 = _interopRequireDefault(_Loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * @see https://github.com/yuanyan/boron
	                                                                                                                                                                                                                              */

	// MUST be equal to $modal-duration in _modal.scss
	var TRANSITION_TIMEOUT = 300;

	function noop() {}

	var Modal = (0, _react.createClass)({
	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    role: _react.PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading', 'actions', 'popup']),
	    title: _react.PropTypes.node,
	    confirmText: _react.PropTypes.string,
	    cancelText: _react.PropTypes.string,
	    closeBtn: _react.PropTypes.bool,
	    closeViaBackdrop: _react.PropTypes.bool,
	    onAction: _react.PropTypes.func,
	    onOpen: _react.PropTypes.func,
	    onClosed: _react.PropTypes.func,
	    onDismiss: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'modal',
	      confirmText: '确定',
	      cancelText: '取消',
	      closeBtn: true,
	      onAction: noop,
	      onOpen: noop,
	      onClosed: noop,
	      onDismiss: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      closed: true,
	      isClosing: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.isOpen) {
	      this.open();
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var isOpen = this.props.isOpen;

	    if (!isOpen && nextProps.isOpen) {
	      this.open();
	    } else if (isOpen && !nextProps.isOpen) {
	      this.close();
	    }
	  },
	  isClosed: function isClosed() {
	    return this.state.closed;
	  },
	  isPopup: function isPopup() {
	    return this.props.role === 'popup';
	  },
	  isActions: function isActions() {
	    return this.props.role === 'actions';
	  },


	  // Get input data for prompt modal
	  getFieldData: function getFieldData() {
	    var data = [];
	    var inputs = _reactDom2.default.findDOMNode(this).querySelectorAll('input[type=text]');

	    if (inputs) {
	      for (var i = 0; i < inputs.length; i++) {
	        data.push(inputs[i].value);
	      }
	    }

	    return data.length === 0 ? null : data.length === 1 ? data[0] : data;
	  },


	  // data === null: prompt -> canceled
	  // data === true: confirm -> confirmed
	  // data === false: confirm -> canceled
	  handleAction: function handleAction(data, e) {
	    var _props = this.props;
	    var role = _props.role;
	    var onAction = _props.onAction;

	    var willClose = true;

	    if (role === 'prompt' && data) {
	      data = this.getFieldData();

	      willClose = onAction.call(this, data, e);
	    } else {
	      onAction.call(this, data, e);
	    }

	    willClose && this.requestClose(e);
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget || !this.props.closeViaBackdrop) {
	      return;
	    }

	    this.requestClose(e);
	  },
	  open: function open() {
	    if (this.isClosed()) {
	      this.setState({
	        isClosing: false,
	        closed: false
	      });

	      this.props.onOpen();
	    }
	  },


	  // Only for instance self calling
	  close: function close() {
	    if (this.isClosed() || this.state.isClosing) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });
	  },


	  // for user actions
	  requestClose: function requestClose(e) {
	    this.props.onDismiss(e);
	  },
	  handleClosed: function handleClosed() {
	    this.setState({
	      closed: true,
	      isClosing: false
	    });
	    this.props.onClosed();
	  },
	  renderActions: function renderActions(classSet) {
	    classSet[this.props.classPrefix] = false;

	    return _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(this.props.className, classSet),
	        key: 'modalActions',
	        ref: 'modal'
	      },
	      this.props.children,
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('actions-group') },
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            onClick: this.requestClose,
	            block: true,
	            amStyle: this.props.btnStyle || 'secondary'
	          },
	          this.props.cancelText
	        )
	      )
	    );
	  },
	  renderPopup: function renderPopup(classSet) {
	    classSet[this.props.classPrefix] = false;

	    var _props2 = this.props;
	    var className = _props2.className;
	    var title = _props2.title;
	    var children = _props2.children;

	    var props = _objectWithoutProperties(_props2, ['className', 'title', 'children']);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet, this.setClassNS('popup')),
	        key: 'modalPopup',
	        ref: 'modal'
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.setClassNS('popup-inner') },
	        _react2.default.createElement(
	          'div',
	          { className: this.setClassNS('popup-header') },
	          title ? _react2.default.createElement(
	            'h4',
	            { className: this.setClassNS('popup-title') },
	            title
	          ) : null,
	          _react2.default.createElement(_Icon2.default, {
	            name: 'close',
	            className: this.setClassNS('popup-icon'),
	            onClick: this.requestClose
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.setClassNS('popup-body') },
	          children
	        )
	      )
	    );
	  },
	  renderHeader: function renderHeader() {
	    var _props3 = this.props;
	    var title = _props3.title;
	    var closeBtn = _props3.closeBtn;
	    var role = _props3.role;

	    var closeIcon = closeBtn && !role ? _react2.default.createElement(_Icon2.default, {
	      name: 'close',
	      className: this.prefixClass('icon'),
	      onClick: this.requestClose
	    }) : null;

	    return title || closeIcon ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('header'),
	        key: 'modalHeader'
	      },
	      title ? _react2.default.createElement(
	        'h4',
	        {
	          className: this.prefixClass('title')
	        },
	        title
	      ) : null,
	      closeIcon
	    ) : null;
	  },


	  // Render alert/confirm/prompt buttons
	  renderFooter: function renderFooter() {
	    var _this = this;

	    var buttons = void 0;
	    var btnClass = this.prefixClass('btn');
	    var _props4 = this.props;
	    var role = _props4.role;
	    var confirmText = _props4.confirmText;
	    var cancelText = _props4.cancelText;


	    switch (role) {
	      case 'alert':
	        buttons = _react2.default.createElement(
	          'span',
	          {
	            key: 'modalBtn',
	            onClick: this.handleAction.bind(this, null),
	            className: btnClass
	          },
	          confirmText
	        );
	        break;
	      case 'confirm':
	      case 'prompt':
	        var cancel = role === 'prompt' ? null : false;
	        buttons = [cancelText, confirmText].map(function (text, i) {
	          return _react2.default.createElement(
	            'span',
	            {
	              key: 'modalBtn' + i,
	              onClick: _this.handleAction.bind(_this, i === 0 ? cancel : true),
	              className: btnClass
	            },
	            text
	          );
	        });
	        break;
	      default:
	        buttons = null;
	    }

	    return buttons ? _react2.default.createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      buttons
	    ) : null;
	  },


	  // Using transition appear to fix animation issue on iOS Safari
	  // @see https://github.com/amazeui/amazeui-touch/issues/11
	  renderTransition: function renderTransition(children) {
	    return _react2.default.createElement(
	      _reactAddonsCssTransitionGroup2.default,
	      {
	        transitionName: this.prefixClass('transition'),
	        transitionAppear: true,
	        transitionAppearTimeout: TRANSITION_TIMEOUT,
	        transitionEnterTimeout: TRANSITION_TIMEOUT,
	        transitionLeaveTimeout: TRANSITION_TIMEOUT
	      },
	      children
	    );
	  },
	  renderBackdrop: function renderBackdrop(children) {
	    var onClick = this.handleBackdropClick || null;
	    var preventDefault = function preventDefault(e) {
	      // prevent window scroll when touch backdrop
	      e.preventDefault();
	    };

	    var classSet = {};

	    classSet[this.prefixClass('backdrop')] = true;
	    classSet[this.setClassNS('active')] = true;
	    classSet[this.prefixClass('backdrop-out')] = this.state.isClosing;

	    return _react2.default.createElement(
	      'span',
	      null,
	      children,
	      _react2.default.createElement('div', {
	        className: (0, _classnames2.default)(classSet),
	        style: { height: window.innerHeight },
	        ref: 'backdrop',
	        onClick: onClick,
	        onTouchMove: preventDefault
	      })
	    );
	  },
	  render: function render() {
	    var _this2 = this;

	    var _state = this.state;
	    var closed = _state.closed;
	    var isClosing = _state.isClosing;


	    if (closed) {
	      return null;
	    }

	    // listen out animation end envent
	    if (isClosing) {
	      (function () {
	        var node = _this2.refs.modal;

	        if (node) {
	          (function () {
	            var closedHandler = function closedHandler(e) {
	              if (e && e.target !== node) {
	                return;
	              }

	              _TransitionEvents2.default.off(node, closedHandler);
	              _this2.handleClosed();
	            };

	            _TransitionEvents2.default.on(node, closedHandler);
	          })();
	        }
	      })();
	    }

	    var classSet = this.getClassSet();
	    var _props5 = this.props;
	    var role = _props5.role;
	    var className = _props5.className;
	    var title = _props5.title;
	    var children = _props5.children;
	    var modalWidth = _props5.modalWidth;
	    var modalHeight = _props5.modalHeight;

	    var props = _objectWithoutProperties(_props5, ['role', 'className', 'title', 'children', 'modalWidth', 'modalHeight']);

	    var modal = void 0;

	    classSet[this.prefixClass('out')] = isClosing;
	    role && (classSet[this.prefixClass(role)] = true);

	    if (this.isActions()) {
	      modal = this.renderTransition(this.renderActions(classSet));
	    } else if (this.isPopup()) {
	      modal = this.renderTransition(this.renderPopup(classSet));
	    } else {
	      var style = {
	        width: modalWidth,
	        height: modalHeight
	      };

	      modal = _react2.default.createElement(
	        'div',
	        _extends({}, props, {
	          style: style,
	          ref: 'modalContainer',
	          className: (0, _classnames2.default)(classSet, className)
	        }),
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'modal-inner',
	            ref: 'modal'
	          },
	          _react2.default.createElement(
	            'div',
	            {
	              className: this.prefixClass('dialog')
	            },
	            this.renderHeader(),
	            _react2.default.createElement(
	              'div',
	              {
	                className: this.prefixClass('body'),
	                ref: 'modalBody'
	              },
	              role === 'loading' ? children ? children : _react2.default.createElement(_Loader2.default, null) : children
	            ),
	            this.renderFooter()
	          )
	        )
	      );
	    }

	    return this.renderBackdrop(modal);
	  }
	});

	exports.default = Modal;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var NavBar = _react2.default.createClass({
	  displayName: 'NavBar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    title: _react2.default.PropTypes.node,
	    leftNav: _react2.default.PropTypes.array,
	    rightNav: _react2.default.PropTypes.array,
	    titleOnLeft: _react2.default.PropTypes.bool,
	    onAction: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'navbar',
	      onAction: function onAction() {}
	    };
	  },
	  renderTitle: function renderTitle() {
	    var _props = this.props;
	    var titleOnLeft = _props.titleOnLeft;
	    var title = _props.title;

	    var titlePosition = this.prefixClass(titleOnLeft ? 'left' : 'center');

	    return title ? _react2.default.createElement(
	      'h2',
	      {
	        className: (0, _classnames2.default)(this.prefixClass('title'), titlePosition)
	      },
	      title
	    ) : this.props.children;
	  },
	  renderNav: function renderNav(position) {
	    var nav = this.props[position + 'Nav'];
	    this._navPosition = position;

	    return nav && Array.isArray(nav) ? _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(this.prefixClass('nav'), this.prefixClass(position))
	      },
	      nav.map(this.renderNavItem)
	    ) : null;
	  },
	  renderNavItem: function renderNavItem(item, index) {
	    var _iconClassName;

	    var Component = item.component;
	    var title = item.title;
	    var customIcon = item.customIcon;
	    var icon = item.icon;
	    var isClone = item.isClone;
	    var
	    // href,
	    className = item.className;

	    var otherProps = _objectWithoutProperties(item, ['component', 'title', 'customIcon', 'icon', 'isClone', 'className']);

	    var children = [];
	    var itemClassName = (0, _classnames2.default)(this.prefixClass('nav-item'), className);
	    var itemProps = _extends({
	      key: 'navbarNavItem' + index,
	      onClick: this.props.onAction.bind(this, item)
	    }, otherProps, {
	      className: itemClassName
	    });

	    Component = Component || 'a';

	    title && children.push(_react2.default.createElement(
	      'span',
	      {
	        className: this.prefixClass('nav-title'),
	        key: 'title'
	      },
	      title
	    ));

	    var navIconKey = 'icon';
	    var iconClassName = (_iconClassName = {}, _defineProperty(_iconClassName, this.prefixClass('icon'), true), _defineProperty(_iconClassName, this.prefixClass('icon-sibling-of-title'), !!title), _iconClassName);
	    var navIcon = customIcon ? _react2.default.createElement('img', {
	      src: customIcon,
	      className: (0, _classnames2.default)(iconClassName),
	      alt: title || null,
	      key: navIconKey
	    }) : icon ? _react2.default.createElement(_Icon2.default, {
	      className: (0, _classnames2.default)(iconClassName),
	      name: icon,
	      key: navIconKey
	    }) : null;

	    // adjust title and icon order for Android UC
	    // @see ../scss/helper/_mixins.scss `navbar-item-android-uc-fallback` mixin
	    if (navIcon) {
	      var action = this._navPosition === 'left' ? 'unshift' : 'push';
	      Array.prototype[action].call(children, navIcon);
	    }
	    // navIcon && children.push(navIcon);

	    var renderChildren = function renderChildren() {
	      // #40
	      // if `Component` is a clone type like OffCanvasTrigger,
	      // this should return a element with the className.
	      // TBC: should other props be transferred to the span element?
	      return isClone ? _react2.default.createElement(
	        'span',
	        {
	          className: itemClassName
	        },
	        children
	      ) : children;
	    };

	    return _react2.default.createElement(
	      Component,
	      itemProps,
	      renderChildren()
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props2 = this.props;
	    var title = _props2.title;
	    var className = _props2.className;

	    var props = _objectWithoutProperties(_props2, ['title', 'className']);

	    return _react2.default.createElement(
	      'header',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.renderTitle(),
	      this.renderNav('left'),
	      this.renderNav('right')
	    );
	  }
	});

	exports.default = NavBar;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsCssTransitionGroup = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html
	// To improve reliability, CSSTransitionGroup will no longer listen to
	// transition events. Instead, you should specify transition durations
	// manually using props such as `transitionEnterTimeout={500}`.
	// NOTE: It should less than CSS animation duration, if not, the animation
	// be not smooth. It maybe a bug of React.
	var TRANSITION_TIMEOUT = 250;

	var Notification = _react2.default.createClass({
	  displayName: 'Notification',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    title: _react2.default.PropTypes.string,
	    amStyle: _react2.default.PropTypes.string,
	    closeBtn: _react2.default.PropTypes.bool,
	    animated: _react2.default.PropTypes.bool,
	    visible: _react2.default.PropTypes.bool,
	    onDismiss: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'notification',
	      closeBtn: true,
	      onDismiss: function onDismiss() {}
	    };
	  },
	  renderCloseBtn: function renderCloseBtn() {
	    return this.props.closeBtn ? _react2.default.createElement(_Icon2.default, {
	      className: this.prefixClass('icon'),
	      name: 'close',
	      onClick: this.props.onDismiss
	    }) : null;
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var title = _props.title;
	    var className = _props.className;
	    var animated = _props.animated;
	    var visible = _props.visible;

	    var props = _objectWithoutProperties(_props, ['title', 'className', 'animated', 'visible']);

	    classSet[this.prefixClass('animated')] = animated;

	    var notificationBar = visible ? _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className),
	        key: 'notification'
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('content') },
	        title ? _react2.default.createElement(
	          'h3',
	          { className: this.prefixClass('title') },
	          title
	        ) : null,
	        this.props.children
	      ),
	      this.renderCloseBtn()
	    ) : null;

	    return animated ? _react2.default.createElement(
	      _reactAddonsCssTransitionGroup2.default,
	      {
	        component: 'div',
	        transitionName: 'notification',
	        transitionEnterTimeout: TRANSITION_TIMEOUT,
	        transitionLeaveTimeout: TRANSITION_TIMEOUT
	      },
	      notificationBar
	    ) : notificationBar;
	  }
	});

	// const bodyElement = canUseDOM ? document.body : {appendChild: () => {}};
	var body = document.body;

	var NotificationPortal = _react2.default.createClass({
	  displayName: 'NotificationPortal',

	  propTypes: {
	    visible: _react2.default.PropTypes.bool.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      visible: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (!this.isStatic()) {
	      this.node = document.createElement('div');
	      this.node.className = '__notification-portal';
	      body.appendChild(this.node);
	      this.renderModal(this.props);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!this.isStatic()) {
	      this.renderModal(nextProps);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (!this.isStatic()) {
	      (0, _reactDom.unmountComponentAtNode)(this.node);
	      body.removeChild(this.node);
	    }
	  },
	  isStatic: function isStatic() {
	    return this.props.static;
	  },
	  renderModal: function renderModal(props) {
	    this.portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react2.default.createElement(Notification, props), this.node);
	  },
	  render: function render() {
	    return this.isStatic() ? _react2.default.createElement(Notification, this.props) : null;
	  }
	});

	exports.default = NotificationPortal;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _BackdropMixin = __webpack_require__(31);

	var _BackdropMixin2 = _interopRequireDefault(_BackdropMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * @see https://github.com/negomi/react-burger-menu
	                                                                                                                                                                                                                              */

	var OffCanvas = _react2.default.createClass({
	  displayName: 'OffCanvas',

	  mixins: [_ClassNameMixin2.default, _BackdropMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    placement: _react.PropTypes.oneOf(['left', 'right']),
	    onDismiss: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'offcanvas',
	      placement: 'left'
	    };
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e && e.target === this.refs.backdrop) {
	      var onDismiss = this.props.onDismiss;


	      onDismiss && onDismiss();
	    }
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var placement = _props.placement;
	    var animation = _props.animation;
	    var className = _props.className;
	    var children = _props.children;
	    var isClosing = _props.isClosing;

	    var props = _objectWithoutProperties(_props, ['placement', 'animation', 'className', 'children', 'isClosing']);

	    classSet[this.prefixClass('out')] = isClosing;
	    classSet[this.prefixClass(placement)] = !!placement;
	    classSet[this.prefixClass(animation)] = !!animation;

	    var offCanvas = _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className),
	        ref: 'overlay'
	      }),
	      children
	    );

	    return this.renderBackdrop(offCanvas);
	  }
	});

	exports.default = OffCanvas;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  renderBackdrop: function renderBackdrop(children) {
	    var _classSet;

	    var onClick = this.handleBackdropClick || null;
	    var classSet = (_classSet = {}, _defineProperty(_classSet, this.setClassNS('modal-backdrop'), true), _defineProperty(_classSet, this.setClassNS('modal-backdrop-out'), this.props.isClosing), _classSet);

	    return _react2.default.createElement(
	      'span',
	      null,
	      children,
	      _react2.default.createElement('div', {
	        onClick: onClick,
	        ref: 'backdrop',
	        className: (0, _classnames2.default)(classSet)
	      })
	    );
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _OverlayMixin = __webpack_require__(33);

	var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

	var _CSSCore = __webpack_require__(13);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _TransitionEvents = __webpack_require__(12);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _createChainedFunction = __webpack_require__(34);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var OffCanvasTrigger = _react2.default.createClass({
	  displayName: 'OffCanvasTrigger',

	  mixins: [_OverlayMixin2.default, _ClassNameMixin2.default],

	  propTypes: {
	    defaultOffCanvasActive: _react.PropTypes.bool,
	    placement: _react.PropTypes.oneOf(['left', 'right']),
	    animation: _react.PropTypes.oneOf(['slide', 'push']),
	    offCanvas: _react.PropTypes.node.isRequired,
	    pageContainer: _react.PropTypes.node,
	    onOpen: _react.PropTypes.func,
	    onClosed: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      placement: 'left',
	      animation: 'slide',
	      onOpen: function onOpen() {},
	      onClosed: function onClosed() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      offCanvasActive: this.props.defaultOffCanvasActive == null ? false : this.props.defaultOffCanvasActive,
	      isClosing: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.setPageContainer();
	  },
	  open: function open() {
	    if (this.state.offCanvasActive) {
	      return;
	    }

	    this.setState({
	      offCanvasActive: true,
	      isClosing: false
	    }, function () {
	      this.props.onOpen();
	    });

	    if (this.isPush()) {
	      _CSSCore2.default.addClass(this.getContainerDOMNode(), this.getWithClassName());
	    }
	  },
	  close: function close() {
	    if (!this.state.offCanvasActive || this.state.isClosing) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });

	    if (this.isPush()) {
	      var container = this.getContainerDOMNode();
	      _CSSCore2.default.removeClass(container, this.getWithClassName());
	      _CSSCore2.default.addClass(container, this.getClosingClassName());
	    }
	  },
	  handleClosed: function handleClosed() {
	    this.setState({
	      offCanvasActive: false,
	      isClosing: false
	    });

	    this.props.onClosed();

	    if (this.isPush()) {
	      _CSSCore2.default.removeClass(this.getContainerDOMNode(), this.getClosingClassName());
	    }
	  },
	  toggle: function toggle() {
	    this.state.offCanvasActive ? this.close() : this.open();
	  },
	  isPush: function isPush() {
	    return this.props.animation === 'push';
	  },
	  getPageContainer: function getPageContainer() {
	    var pageContainer = this.props.pageContainer;


	    return typeof pageContainer === 'string' ? document.querySelector(pageContainer) : (0, _reactDom.findDOMNode)(pageContainer);
	  },
	  setPageContainer: function setPageContainer() {
	    var pageContainer = this.getPageContainer();

	    if (pageContainer && this.isPush()) {
	      _CSSCore2.default.addClass(pageContainer, this.setClassNS('offcanvas-push-target'));
	    }
	  },
	  getWithClassName: function getWithClassName() {
	    return 'with-offcanvas-' + this.props.placement;
	  },
	  getClosingClassName: function getClosingClassName() {
	    return 'with-offcanvas-closing';
	  },


	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    var _this = this;

	    if (!this.state.offCanvasActive) {
	      return _react2.default.createElement('span', null);
	    }

	    var offCanvas = this.props.offCanvas;
	    var isClosing = this.state.isClosing;


	    if (isClosing) {
	      (function () {
	        var node = _this.getOverlayDOMNode();
	        if (node) {
	          (function () {
	            var closedHandler = function closedHandler(e) {
	              if (e && e.target !== node) {
	                return;
	              }

	              _TransitionEvents2.default.off(node, closedHandler);
	              _this.handleClosed();
	            };

	            _TransitionEvents2.default.on(node, closedHandler);
	          })();
	        } else {
	          _this.handleClosed();
	        }
	      })();
	    }

	    return (0, _react.cloneElement)(offCanvas, {
	      placement: this.props.placement,
	      animation: this.props.animation,
	      isClosing: isClosing,
	      onDismiss: this.close
	    });
	  },
	  render: function render() {
	    var child = _react2.default.Children.only(this.props.children);
	    var props = {
	      onClick: (0, _createChainedFunction2.default)(child.props.onClick, this.props.onClick)
	    };

	    props.onClick = (0, _createChainedFunction2.default)(this.toggle, props.onClick);

	    return (0, _react.cloneElement)(child, props);
	  }
	});

	exports.default = OffCanvasTrigger;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Overlay Mixin
	 *
	 * @desc `overlay` is something like Popover, OffCavans, etc.
	 */

	exports.default = {
	  propTypes: {
	    container: _react2.default.PropTypes.node
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },


	  // Remove Overlay related DOM node
	  componentWillUnmount: function componentWillUnmount() {
	    this._unmountOverlay();

	    if (this._node) {
	      this.getContainerDOMNode().removeChild(this._node);
	      this._node = null;
	    }
	  },


	  // Create Overlay wrapper
	  _createPortal: function _createPortal() {
	    this._node = document.createElement('div');
	    this._node.className = '__overlay-portal';
	    this.getContainerDOMNode().appendChild(this._node);
	  },


	  // Render Overlay to wrapper
	  _renderOverlay: function _renderOverlay() {
	    if (!this._node) {
	      this._createPortal();
	    }

	    var overlay = this.renderOverlay();

	    if (overlay !== null) {
	      this._overlayInstance = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, overlay, this._node);
	    } else {
	      // Unmount if the component is null for transitions to null
	      this._unmountOverlay();
	    }
	  },


	  // Remove a mounted Overlay from wrapper
	  _unmountOverlay: function _unmountOverlay() {
	    (0, _reactDom.unmountComponentAtNode)(this._node);
	    this._overlayInstance = null;
	  },
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to\n        have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      // 包含 backdrop 时通过 refer 返回 overlay DOM 节点
	      return (0, _reactDom.findDOMNode)(this._overlayInstance.refs && this._overlayInstance.refs.overlay || this._overlayInstance);
	    }

	    return null;
	  },
	  getContainerDOMNode: function getContainerDOMNode() {
	    return (0, _reactDom.findDOMNode)(this.props.container) || document.body;
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
	 */

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */

	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';

	  if (!hasOne && !hasTwo) {
	    return null;
	  }

	  if (!hasOne) {
	    return two;
	  }

	  if (!hasTwo) {
	    return one;
	  }

	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	exports.default = createChainedFunction;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _BackdropMixin = __webpack_require__(31);

	var _BackdropMixin2 = _interopRequireDefault(_BackdropMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Popover = _react2.default.createClass({
	  displayName: 'Popover',

	  mixins: [_ClassNameMixin2.default, _BackdropMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    placement: _react2.default.PropTypes.oneOf(['top', 'bottom', 'horizontal']),
	    positionLeft: _react2.default.PropTypes.number,
	    positionTop: _react2.default.PropTypes.number,
	    angleLeft: _react2.default.PropTypes.number,
	    angleTop: _react2.default.PropTypes.number,
	    anglePosition: _react2.default.PropTypes.string,
	    onDismiss: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'popover'
	    };
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e && e.target === this.refs.backdrop) {
	      var onDismiss = this.props.onDismiss;


	      onDismiss && onDismiss();
	    }
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	    var positionLeft = _props.positionLeft;
	    var positionTop = _props.positionTop;
	    var angleLeft = _props.angleLeft;
	    var angleTop = _props.angleTop;
	    var anglePosition = _props.anglePosition;
	    var isClosing = _props.isClosing;
	    var placement = _props.placement;

	    var props = _objectWithoutProperties(_props, ['className', 'children', 'positionLeft', 'positionTop', 'angleLeft', 'angleTop', 'anglePosition', 'isClosing', 'placement']);

	    var style = {
	      left: positionLeft,
	      top: positionTop
	    };
	    var angleStyle = {
	      left: angleLeft,
	      top: angleTop
	    };

	    classSet[this.prefixClass('out')] = isClosing;
	    classSet[this.prefixClass(placement)] = placement;

	    var popover = _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        style: style,
	        ref: 'overlay',
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('inner') },
	        children
	      ),
	      _react2.default.createElement('div', {
	        style: angleStyle,
	        className: (0, _classnames2.default)(this.prefixClass('angle'), anglePosition ? this.prefixClass('angle-' + anglePosition) : null)
	      })
	    );

	    return this.renderBackdrop(popover);
	  }
	});

	exports.default = Popover;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _TransitionEvents = __webpack_require__(12);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _OverlayMixin = __webpack_require__(33);

	var _OverlayMixin2 = _interopRequireDefault(_OverlayMixin);

	var _domUtils = __webpack_require__(37);

	var _domUtils2 = _interopRequireDefault(_domUtils);

	var _createChainedFunction = __webpack_require__(34);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopoverTrigger = _react2.default.createClass({
	  displayName: 'PopoverTrigger',

	  mixins: [_OverlayMixin2.default],

	  propTypes: {
	    defaultPopoverActive: _react2.default.PropTypes.bool,
	    popover: _react2.default.PropTypes.node.isRequired,
	    onOpen: _react2.default.PropTypes.func,
	    onClosed: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onOpen: function onOpen() {},
	      onClosed: function onClosed() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      popoverActive: this.props.defaultPopoverActive == null ? false : this.props.defaultPopoverActive,
	      isClosing: false,
	      popoverLeft: null,
	      popoverTop: null,
	      placement: null
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.defaultPopoverActive) {
	      this.updatePopoverPosition();
	    }
	  },
	  open: function open() {
	    if (this.state.popoverActive) {
	      return;
	    }

	    this.setState({
	      popoverActive: true,
	      isClosing: false
	    }, function () {
	      this.updatePopoverPosition();
	      this.props.onOpen();
	    });
	  },
	  close: function close() {
	    if (!this.state.popoverActive) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });
	  },
	  handleClosed: function handleClosed() {
	    this.setState({
	      popoverActive: false,
	      isClosing: false
	    });

	    this.props.onClosed();
	  },
	  toggle: function toggle() {
	    this.state.popoverActive ? this.close() : this.open();
	  },
	  updatePopoverPosition: function updatePopoverPosition() {
	    if (!this.isMounted()) {
	      return;
	    }

	    var position = this.calcPopoverPosition() || {};

	    this.setState({
	      popoverLeft: position.left,
	      popoverTop: position.top,
	      angleLeft: position.angleLeft,
	      angleTop: position.angleTop,
	      anglePosition: position.anglePosition,
	      placement: position.placement
	    });
	  },
	  calcPopoverPosition: function calcPopoverPosition() {
	    var targetOffset = this.getTriggerOffset();
	    var popoverNode = this.getOverlayDOMNode();

	    if (!popoverNode) {
	      return;
	    }

	    var popoverHeight = popoverNode.offsetHeight;
	    var popoverWidth = popoverNode.offsetWidth;
	    var targetHeight = targetOffset.height;
	    var targetWidth = targetOffset.width;

	    var windowHeight = window.innerHeight;
	    var windowWidth = window.innerWidth;
	    var anglePosition = void 0,
	        angleLeft = void 0,
	        angleTop = void 0;
	    var popoverAngleSize = 8;
	    var popoverTop = 0;
	    var popoverLeft = 0;
	    var diff = 0;
	    var popoverPosition = 'top';
	    var popoverTotalHeight = popoverHeight + popoverAngleSize;

	    // Popover Horizontal position
	    // Popover 高度小于 trigger 顶部偏移
	    if (popoverTotalHeight < targetOffset.top) {
	      // On top: trigger 顶部偏移 - Popover 高度
	      popoverTop = targetOffset.top - popoverHeight - popoverAngleSize;
	    } else if (popoverTotalHeight < windowHeight - targetOffset.top - targetHeight) {
	      // On bottom: Popover 高度小于 trigger 下方空白位置
	      popoverPosition = 'bottom';
	      popoverTop = targetOffset.top + targetHeight + popoverAngleSize;
	    } else {
	      // On middle: Popover 位于 trigger 的水平位置
	      popoverPosition = 'horizontal';
	      popoverTop = targetHeight / 2 + targetOffset.top - popoverHeight / 2;
	      diff = popoverTop;

	      if (popoverTop <= 0) {
	        popoverTop = 5;
	      } else if (popoverTop + popoverHeight >= windowHeight) {
	        popoverTop = windowHeight - popoverHeight - 5;
	      }

	      diff = diff - popoverTop;
	    }

	    // Popover Horizontal Position
	    if (popoverPosition === 'top' || popoverPosition === 'bottom') {
	      popoverLeft = targetWidth / 2 + targetOffset.left - popoverWidth / 2;
	      diff = popoverLeft;

	      if (popoverLeft < 5) {
	        popoverLeft = 5;
	      }

	      if (popoverLeft + popoverWidth > windowWidth) {
	        popoverLeft = windowWidth - popoverWidth - 5;
	      }

	      diff = diff - popoverLeft;
	      angleLeft = popoverWidth / 2 - popoverAngleSize + diff;
	      angleLeft = Math.max(Math.min(angleLeft, popoverWidth - popoverAngleSize * 2 - 6), 6);
	      anglePosition = popoverPosition === 'top' ? 'bottom' : 'top';
	    } else if (popoverPosition === 'horizontal') {
	      popoverLeft = targetOffset.left - popoverWidth - popoverAngleSize;
	      anglePosition = 'right';

	      if (popoverLeft < 5 || popoverLeft + popoverWidth > windowWidth) {
	        if (popoverLeft < 5) {
	          popoverLeft = targetOffset.left + targetWidth + popoverAngleSize;
	        }

	        if (popoverLeft + popoverWidth > windowWidth) {
	          popoverLeft = windowWidth - popoverWidth - 5;
	        }

	        anglePosition = 'left';
	      }
	      angleTop = popoverHeight / 2 - popoverAngleSize + diff;
	      angleTop = Math.max(Math.min(angleTop, popoverHeight - popoverAngleSize * 2 - 6), 6);
	    }

	    return {
	      top: popoverTop,
	      left: popoverLeft,
	      placement: popoverPosition,
	      angleLeft: angleLeft,
	      angleTop: angleTop,
	      anglePosition: anglePosition
	    };
	  },
	  getTriggerOffset: function getTriggerOffset() {
	    var node = _reactDom2.default.findDOMNode(this);
	    var container = this.getContainerDOMNode();
	    var offset = container.tagName === 'BODY' ? _domUtils2.default.offset(node) : _domUtils2.default.position(node, container);

	    return _extends({}, offset, {
	      height: node.offsetHeight,
	      width: node.offsetWidth
	    });
	  },


	  // used by Mixin
	  renderOverlay: function renderOverlay() {
	    var _this = this;

	    if (!this.state.popoverActive) {
	      return _react2.default.createElement('span', null);
	    }

	    var popover = this.props.popover;
	    var _state = this.state;
	    var isClosing = _state.isClosing;
	    var positionLeft = _state.popoverLeft;
	    var positionTop = _state.popoverTop;
	    var anglePosition = _state.anglePosition;
	    var angleLeft = _state.angleLeft;
	    var angleTop = _state.angleTop;
	    var placement = _state.placement;


	    if (isClosing) {
	      (function () {
	        var node = _this.getOverlayDOMNode();
	        if (node) {
	          (function () {
	            var closedHandler = function closedHandler(e) {
	              if (e && e.target !== node) {
	                return;
	              }

	              _TransitionEvents2.default.off(node, closedHandler);
	              _this.handleClosed();
	            };

	            _TransitionEvents2.default.on(node, closedHandler);
	          })();
	        }
	      })();
	    }

	    return (0, _react.cloneElement)(popover, {
	      positionLeft: positionLeft,
	      positionTop: positionTop,
	      angleLeft: angleLeft,
	      angleTop: angleTop,
	      anglePosition: anglePosition,
	      placement: placement,
	      isClosing: isClosing,
	      onDismiss: this.close
	    });
	  },
	  render: function render() {
	    var child = _react2.default.Children.only(this.props.children);
	    var props = {
	      onClick: (0, _createChainedFunction2.default)(child.props.onClick, this.props.onClick)
	    };

	    props.onClick = (0, _createChainedFunction2.default)(this.toggle, props.onClick);

	    return (0, _react.cloneElement)(child, props);
	  }
	});

	exports.default = PopoverTrigger;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get ownerDocument
	 * @param {ReactComponent|HTMLElement} componentOrElement
	 * @returns {HTMLDocument}
	 */
	function ownerDocument(componentOrElement) {
	  var element = _reactDom2.default.findDOMNode(componentOrElement);

	  return element && element.ownerDocument || document;
	}

	/**
	 * Get ownerWindow
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 * @see https://github.com/jquery/jquery/blob/6df669f0fb87cd9975a18bf6bbe3c3548afa4fee/src/event.js#L294-L297
	 */
	function ownerWindow(element) {
	  var doc = ownerDocument(element);

	  return doc.defaultView || doc.parentWindow || window;
	}

	exports.default = {
	  ownerDocument: ownerDocument,

	  ownerWindow: ownerWindow,

	  scrollTop: function scrollTop(element, value) {
	    if (!element) {
	      return;
	    }

	    var hasScrollTop = 'scrollTop' in element;

	    if (value === undefined) {
	      return hasScrollTop ? element.scrollTop : element.pageYOffset;
	    }

	    hasScrollTop ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
	  },
	  offset: function offset(element) {
	    if (element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	      var scrollTop = window.pageYOffset || element.scrollTop;
	      var scrollLeft = window.pageXOffset || element.scrollLeft;

	      return {
	        top: rect.top + scrollTop - clientTop,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    }

	    return null;
	  },
	  position: function position(element) {
	    return {
	      left: element.offsetLeft,
	      top: element.offsetTop
	    };
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @see https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Carousel.js
	                                                                                                                                                                                                                                                   */

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(26);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _TransitionEvents = __webpack_require__(12);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Touchable = __webpack_require__(39);

	var _Touchable2 = _interopRequireDefault(_Touchable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Slider = _react2.default.createClass({
	  displayName: 'Slider',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,

	    controls: _react2.default.PropTypes.bool, // prev/next icon
	    pager: _react2.default.PropTypes.bool, // indicators or thumbs

	    slide: _react2.default.PropTypes.bool, // what is this?
	    interval: _react2.default.PropTypes.number, // interval
	    autoPlay: _react2.default.PropTypes.bool,
	    loop: _react2.default.PropTypes.bool, // loop slide

	    pauseOnHover: _react2.default.PropTypes.bool,
	    // touch: React.PropTypes.bool,

	    onAction: _react2.default.PropTypes.func,
	    onSlideEnd: _react2.default.PropTypes.func,
	    activeIndex: _react2.default.PropTypes.number,
	    defaultActiveIndex: _react2.default.PropTypes.number,
	    direction: _react2.default.PropTypes.oneOf(['prev', 'next']),
	    prevIcon: _react2.default.PropTypes.node,
	    nextIcon: _react2.default.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'slider',
	      controls: true,
	      pager: true,
	      slide: true,
	      interval: 5000,
	      autoPlay: true,
	      loop: true,
	      pauseOnHover: true,
	      prevIcon: _react2.default.createElement(_Icon2.default, { name: 'left-nav' }),
	      nextIcon: _react2.default.createElement(_Icon2.default, { name: 'right-nav' })
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
	      previousActiveIndex: null,
	      direction: null
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var activeIndex = this.getActiveIndex();

	    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
	      clearTimeout(this.timeout);
	      this.setState({
	        previousActiveIndex: activeIndex,
	        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    this.props.autoPlay && this.waitForNext();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timeout);
	  },
	  getDirection: function getDirection(prevIndex, index) {
	    if (prevIndex === index) {
	      return null;
	    }

	    return prevIndex > index ? 'prev' : 'next';
	  },
	  next: function next(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() + 1;
	    var count = _react2.default.Children.count(this.props.children);

	    if (index > count - 1) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = 0;
	    }

	    this.handleSelect(index, 'next');
	  },
	  prev: function prev(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() - 1;

	    if (index < 0) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = _react2.default.Children.count(this.props.children) - 1;
	    }

	    this.handleSelect(index, 'prev');
	  },
	  pause: function pause() {
	    this.isPaused = true;
	    clearTimeout(this.timeout);
	  },
	  play: function play() {
	    this.isPaused = false;
	    this.waitForNext();
	  },
	  waitForNext: function waitForNext() {
	    if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
	      this.timeout = setTimeout(this.next, this.props.interval);
	    }
	  },
	  handleMouseOver: function handleMouseOver() {
	    if (this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  handleMouseOut: function handleMouseOut() {
	    if (this.isPaused) {
	      this.play();
	    }
	  },
	  handleSwipeLeft: function handleSwipeLeft(e) {
	    // console.log('swipe left');
	    this.next();
	  },
	  handleSwipeRight: function handleSwipeRight(e) {
	    // console.log('swipe right....');
	    this.prev();
	  },
	  getActiveIndex: function getActiveIndex() {
	    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
	  },
	  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
	    this.setState({
	      previousActiveIndex: null,
	      direction: null
	    }, function () {
	      this.waitForNext();

	      if (this.props.onSlideEnd) {
	        this.props.onSlideEnd();
	      }
	    });
	  },
	  handleSelect: function handleSelect(index, direction, e) {
	    e && e.preventDefault();
	    clearTimeout(this.timeout);

	    var previousActiveIndex = this.getActiveIndex();

	    direction = direction || this.getDirection(previousActiveIndex, index);

	    if (this.props.onAction) {
	      this.props.onAction(index, direction);
	    }

	    if (this.props.activeIndex == null && index !== previousActiveIndex) {
	      if (this.state.previousActiveIndex != null) {
	        // If currently animating don't activate the new index.
	        // TODO: look into queuing this canceled call and
	        // animating after the current animation has ended.
	        return;
	      }

	      this.setState({
	        activeIndex: index,
	        previousActiveIndex: previousActiveIndex,
	        direction: direction
	      });
	    }
	  },
	  renderControls: function renderControls() {
	    return this.props.controls ? _react2.default.createElement(
	      'div',
	      { className: this.prefixClass('control') },
	      _react2.default.createElement(
	        _Touchable2.default,
	        {
	          className: this.prefixClass('control-prev'),
	          onTap: this.prev,
	          stopPropagation: true
	        },
	        this.props.prevIcon
	      ),
	      _react2.default.createElement(
	        _Touchable2.default,
	        {
	          className: this.prefixClass('control-next'),
	          onTap: this.next,
	          stopPropagation: true
	        },
	        this.props.nextIcon
	      )
	    ) : null;
	  },
	  renderPager: function renderPager() {
	    var _this = this;

	    if (this.props.pager) {
	      var _ret = function () {
	        var isThumbnailNav = false;

	        var children = _react2.default.Children.map(_this.props.children, function (child, i) {
	          var className = i === _this.getActiveIndex() ? _this.setClassNS('active') : null;
	          var thumb = child.props.thumbnail;

	          if (!isThumbnailNav) {
	            isThumbnailNav = !!thumb;
	          }

	          return _react2.default.createElement(
	            _Touchable2.default,
	            {
	              component: 'li',
	              className: className,
	              key: i,
	              onTap: _this.handleSelect.bind(_this, i, null)
	            },
	            thumb ? _react2.default.createElement('img', { src: thumb }) : null
	          );
	        });
	        var pagerClassName = _this.prefixClass(isThumbnailNav ? 'thumbs' : 'indicators');

	        return {
	          v: _react2.default.createElement(
	            'ol',
	            {
	              className: (0, _classnames2.default)(_this.prefixClass('pager'), pagerClassName)
	            },
	            children
	          )
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    return null;
	  },
	  renderItem: function renderItem(child, index) {
	    var activeIndex = this.getActiveIndex();
	    var isActive = index === activeIndex;
	    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;
	    var props = {
	      active: isActive,
	      ref: child.ref,
	      key: child.key ? child.key : index,
	      index: index,
	      animateOut: isPreviousActive,
	      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
	      direction: this.state.direction,
	      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
	    };

	    return _react2.default.cloneElement(child, props);
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;

	    var props = _objectWithoutProperties(_props, ['className', 'children']);

	    // TODO: 优化 swipe，左右方向阻止默认事件，垂直方向不阻止


	    return _react2.default.createElement(
	      _Touchable2.default,
	      _extends({}, props, {
	        component: 'div',
	        className: (0, _classnames2.default)(classSet, className),
	        onMouseOver: this.handleMouseOver,
	        onMouseOut: this.handleMouseOut,
	        onSwipeLeft: this.handleSwipeLeft,
	        onSwipeRight: this.handleSwipeRight,
	        preventDefault: false,
	        stopPropagation: true
	      }),
	      _react2.default.createElement(
	        'ul',
	        { className: this.prefixClass('slides') },
	        _react2.default.Children.map(children, this.renderItem)
	      ),
	      this.renderControls(),
	      this.renderPager()
	    );
	  }
	});

	Slider.Item = _react2.default.createClass({
	  displayName: 'Item',

	  propTypes: {
	    direction: _react2.default.PropTypes.oneOf(['prev', 'next']),
	    onAnimateOutEnd: _react2.default.PropTypes.func,
	    active: _react2.default.PropTypes.bool,
	    animateIn: _react2.default.PropTypes.bool,
	    animateOut: _react2.default.PropTypes.bool,
	    caption: _react2.default.PropTypes.node,
	    index: _react2.default.PropTypes.number,
	    thumbnail: _react2.default.PropTypes.string
	  },

	  getInitialState: function getInitialState() {
	    return {
	      direction: null
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: true
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.active !== nextProps.active) {
	      this.setState({
	        direction: null
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (!this.props.active && prevProps.active) {
	      _TransitionEvents2.default.on(_reactDom2.default.findDOMNode(this), this.handleAnimateOutEnd);
	    }

	    if (this.props.active !== prevProps.active) {
	      setTimeout(this.startAnimation, 20);
	    }
	  },
	  handleAnimateOutEnd: function handleAnimateOutEnd() {
	    if (this.props.onAnimateOutEnd && this.isMounted()) {
	      this.props.onAnimateOutEnd(this.props.index);
	    }
	  },
	  startAnimation: function startAnimation() {
	    if (!this.isMounted()) {
	      return;
	    }

	    this.setState({
	      direction: this.props.direction === 'prev' ? 'right' : 'left'
	    });
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var className = _props2.className;
	    var active = _props2.active;
	    var animateIn = _props2.animateIn;
	    var animateOut = _props2.animateOut;
	    var direction = _props2.direction;

	    var classSet = {
	      active: active && !animateIn || animateOut,
	      next: active && animateIn && direction === 'next',
	      prev: active && animateIn && direction === 'prev'
	    };

	    if (this.state.direction && (animateIn || animateOut)) {
	      classSet[this.state.direction] = true;
	    }

	    return _react2.default.createElement(
	      'li',
	      {
	        className: (0, _classnames2.default)(className, classSet)
	      },
	      this.props.children
	    );
	  }
	});

	exports.default = Slider;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Mixin = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _TouchableMixin = __webpack_require__(40);

	var _TouchableMixin2 = _interopRequireDefault(_TouchableMixin);

	var _createChainedFunction = __webpack_require__(34);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _isTouchSupported = __webpack_require__(41);

	var _isTouchSupported2 = _interopRequireDefault(_isTouchSupported);

	__webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * React port of Zepto touch.
	                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                              * @see https://github.com/joakimbeng/react-swiper
	                                                                                                                                                                                                                              * @see https://github.com/dogfessional/react-swipeable
	                                                                                                                                                                                                                              * @see https://github.com/damusnet/react-swipe-views
	                                                                                                                                                                                                                              * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
	                                                                                                                                                                                                                              * @see https://github.com/JedWatson/react-tappable
	                                                                                                                                                                                                                              * @see https://github.com/madrobby/zepto/blob/master/src/touch.js
	                                                                                                                                                                                                                              */

	var Touchable = _react2.default.createClass({
	  displayName: 'Touchable',

	  mixins: [_TouchableMixin2.default],

	  propTypes: {
	    component: _react2.default.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var Component = _props.component;
	    var onTap = _props.onTap;

	    var props = _objectWithoutProperties(_props, ['component', 'onTap']);

	    if (_isTouchSupported2.default) {
	      _extends(props, this.getTouchHandlers());
	    } else {
	      // handle `tap` as `click` on non-touch devices
	      props.onClick = (0, _createChainedFunction2.default)(props.onClick, onTap);
	    }

	    return _react2.default.createElement(
	      Component,
	      props,
	      this.props.children
	    );
	  }
	});

	exports.default = Touchable;
	exports.Mixin = _TouchableMixin2.default;

	// TODO: Mixin 里似乎没必要使用 state 记录事件相关信息
	// TODO: 添加 touch active className

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TouchableMixin = {
	  propTypes: {
	    moveThreshold: _react.PropTypes.number,
	    tapDelay: _react.PropTypes.number,
	    pressDelay: _react.PropTypes.number,
	    preventDefault: _react.PropTypes.bool,
	    stopPropagation: _react.PropTypes.bool,

	    onSwipe: _react.PropTypes.func,
	    onSwipeLeft: _react.PropTypes.func,
	    onSwipeUp: _react.PropTypes.func,
	    onSwipeRight: _react.PropTypes.func,
	    onSwipeDown: _react.PropTypes.func,
	    onTap: _react.PropTypes.func,
	    onSingleTap: _react.PropTypes.func,
	    onDoubleTap: _react.PropTypes.func,
	    onPress: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      moveThreshold: 30,
	      tapDelay: 250,
	      pressDelay: 750,
	      preventDefault: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      startTouch: null,
	      endTouch: null,
	      touch: {},
	      deltaX: 0,
	      deltaY: 0
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._cancelAll();
	  },
	  handleTouchStart: function handleTouchStart(e) {
	    // console.log('handle touchstart');
	    this.processEvent(e);

	    if (!e.touches) {
	      return;
	    }

	    var touch = this.state.touch;
	    var startTouch = e.touches[0];

	    if (e.touches.length === 1 && touch.x2) {
	      // Clear out touch movement data if we have it sticking around
	      // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	      touch.x2 = undefined;
	      touch.y2 = undefined;
	    }

	    var now = Date.now();
	    var delta = now - (touch.last || now);

	    this._touchTimeout && clearTimeout(this._touchTimeout);

	    touch.x1 = startTouch.pageX;
	    touch.y1 = startTouch.pageY;

	    // if touchstart interval less than 250, handle as doubleTap
	    if (delta > 0 && delta <= this.props.tapDelay) {
	      touch.isDoubleTap = true;
	    }

	    // record last touch start time
	    touch.last = now;

	    // handle as `press` after 750ms
	    this._pressTimeout = setTimeout(this._handlePress, this.props.pressDelay);

	    this.setState({
	      startTouch: startTouch,
	      touch: touch
	    });
	  },
	  handleTouchMove: function handleTouchMove(e) {
	    // console.log('touch move');
	    this.processEvent(e);

	    var endTouch = e.touches[0];
	    var _state = this.state;
	    var touch = _state.touch;
	    var deltaX = _state.deltaX;
	    var deltaY = _state.deltaY;


	    this._cancelPress();

	    touch.x2 = endTouch.pageX;
	    touch.y2 = endTouch.pageY;

	    // finger moving distance
	    deltaX += Math.abs(touch.x1 - touch.x2);
	    deltaY += Math.abs(touch.y1 - touch.y2);

	    this.setState({
	      deltaX: deltaX,
	      deltaY: deltaY,
	      touch: touch,
	      endTouch: endTouch
	    });
	  },
	  handleTouchEnd: function handleTouchEnd(e) {
	    var _this = this;

	    // console.log('touch end..');
	    this.processEvent(e);

	    this._cancelPress();

	    var _props = this.props;
	    var tapDelay = _props.tapDelay;
	    var moveThreshold = _props.moveThreshold;
	    var _state2 = this.state;
	    var touch = _state2.touch;
	    var startTouch = _state2.startTouch;
	    var endTouch = _state2.endTouch;
	    var deltaX = _state2.deltaX;
	    var deltaY = _state2.deltaY;

	    var event = {
	      touch: touch,
	      startTouch: startTouch,
	      endTouch: endTouch,
	      preventDefault: function preventDefault() {}
	    };

	    // handle as swipe event
	    if (touch.x2 && Math.abs(touch.x1 - touch.x2) > moveThreshold || touch.y2 && Math.abs(touch.y1 - touch.y2) > moveThreshold) {

	      event.type = 'swipe';

	      this._swipeTimeout = setTimeout(function () {
	        _this._handleEvent(event);

	        event.type += _this._getSwipeDirection();
	        _this._handleEvent(event);
	        _this._resetTouch();
	      }, 0);
	    }
	    // normal tap
	    else if ('last' in touch) {
	        // don't fire tap when delta position changed by more than 30 pixels,
	        // for instance when moving to a point and back to origin
	        if (deltaX < moveThreshold && deltaY < moveThreshold) {
	          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	          // ('tap' fires before 'scroll')
	          this._tapTimeout = setTimeout(function () {
	            // trigger universal 'tap' with the option to cancelTouch()
	            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	            event.type = 'tap';
	            // event.cancelTouch = cancelAll;
	            _this._handleEvent(event);

	            // trigger double tap immediately
	            if (touch.isDoubleTap) {
	              event.type = 'doubleTap';
	              _this._handleEvent(event);
	              _this._resetTouch();
	            }
	            // trigger single tap after 250ms of inactivity
	            else {
	                _this._touchTimeout = setTimeout(function () {
	                  _this._touchTimeout = null;
	                  event.type = 'singleTap';
	                  _this._handleEvent(event);
	                  _this._resetTouch();
	                }, tapDelay);
	              }
	          }, 0);
	        } else {
	          this._resetTouch();
	        }
	      }
	  },
	  handleTouchCancel: function handleTouchCancel() {
	    this._cancelAll();
	  },
	  processEvent: function processEvent(e) {
	    this.props.preventDefault && e.preventDefault();
	    this.props.stopPropagation && e.stopPropagation();
	  },
	  _handlePress: function _handlePress() {
	    this._pressTimeout = null;
	    if (this.state.touch.last) {
	      this.props.onPress && this.props.onPress();
	      this._resetTouch();
	    }
	  },
	  _cancelPress: function _cancelPress() {
	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._pressTimeout = null;
	  },
	  _cancelAll: function _cancelAll() {
	    if (this._touchTimeout) {
	      clearTimeout(this._touchTimeout);
	    }

	    if (this._tapTimeout) {
	      clearTimeout(this._tapTimeout);
	    }

	    if (this._swipeTimeout) {
	      clearTimeout(this._swipeTimeout);
	    }

	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._touchTimeout = this._tapTimeout = this._swipeTimeout = this._pressTimeout = null;
	    this._resetTouch();
	  },
	  _getSwipeDirection: function _getSwipeDirection() {
	    var _state$touch = this.state.touch;
	    var x1 = _state$touch.x1;
	    var x2 = _state$touch.x2;
	    var y1 = _state$touch.y1;
	    var y2 = _state$touch.y2;

	    // 水平方向：水平距离大于等于垂直距离
	    // 垂直方向：

	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
	  },
	  _resetTouch: function _resetTouch() {
	    this.setState(this.getInitialState());
	  },
	  _getEventMethodName: function _getEventMethodName(type) {
	    return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
	  },
	  _handleEvent: function _handleEvent(event) {
	    var method = this._getEventMethodName(event.type);
	    this.props[method] && this.props[method](event);
	  },
	  getTouchHandlers: function getTouchHandlers() {
	    return {
	      onTouchStart: this.handleTouchStart,
	      onTouchEnd: this.handleTouchEnd,
	      onTouchCancel: this.handleTouchCancel,
	      onTouchMove: this.handleTouchMove
	    };
	  }
	};

	exports.default = TouchableMixin;

/***/ },
/* 41 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var supportTouch = !!('ontouchstart' in global || global.DocumentTouch && document instanceof DocumentTouch);

	exports.default = supportTouch;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// UC browser UI controller

	var controller = navigator && navigator.control || {};

	/**
	 * ucUIControl
	 * @param {string} feature - 'gesture' or 'longpressMenu'
	 * @param {boolean} state
	 * @returns {boolean}
	 */
	function ucUIControl(feature, state) {
	  return controller[feature] && controller[feature](state);
	}

	// disable gesture
	ucUIControl('gesture', false);

	exports.default = ucUIControl;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Switch = _react2.default.createClass({
	  displayName: 'Switch',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    name: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    value: _react.PropTypes.bool,
	    onValueChange: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'switch',
	      onValueChange: function onValueChange() {}
	    };
	  },
	  getValue: function getValue() {
	    return this.refs.field.checked;
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var name = _props.name;
	    var className = _props.className;
	    var onValueChange = _props.onValueChange;
	    var value = _props.value;
	    var disabled = _props.disabled;

	    var props = _objectWithoutProperties(_props, ['name', 'className', 'onValueChange', 'value', 'disabled']);

	    return _react2.default.createElement(
	      'label',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement('input', {
	        onChange: onValueChange.bind(this),
	        name: name,
	        type: 'checkbox',
	        ref: 'field',
	        defaultChecked: value,
	        disabled: disabled
	      }),
	      _react2.default.createElement('span', { className: this.prefixClass('label') })
	    );
	  }
	});

	exports.default = Switch;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(15);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Badge = __webpack_require__(16);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// TODO: 默认的选中处理
	var TabBar = _react2.default.createClass({
	  displayName: 'TabBar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.node,
	    amStyle: _react2.default.PropTypes.string,
	    onAction: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'nav',
	      onAction: function onAction() {}
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var Component = _props.component;
	    var className = _props.className;
	    var children = _props.children;
	    var onAction = _props.onAction;

	    var props = _objectWithoutProperties(_props, ['component', 'className', 'children', 'onAction']);

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.Children.map(children, function (child, index) {
	        var _child$props = child.props;
	        var eventKey = _child$props.eventKey;
	        var onClick = _child$props.onClick;

	        var props = _objectWithoutProperties(_child$props, ['eventKey', 'onClick']);

	        var clickHandler = onClick || onAction;
	        var key = eventKey || index;
	        eventKey = eventKey || key;

	        return _react2.default.createElement(TabBar.Item, _extends({}, props, {
	          onClick: clickHandler.bind(null, eventKey),
	          key: key,
	          eventKey: eventKey
	        }));
	      })
	    );
	  }
	});

	// TODO:
	//   Icon 应该支持用户自定义：
	//   React-native 采用 require('path/to/icon') 的形式，
	//   这里可能需要再添加一个属性
	TabBar.Item = _react2.default.createClass({
	  displayName: 'Item',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    component: _react2.default.PropTypes.any,
	    icon: _react2.default.PropTypes.string, // icon name
	    title: _react2.default.PropTypes.string,
	    href: _react2.default.PropTypes.string,
	    eventKey: _react2.default.PropTypes.any,
	    badge: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	    badgeStyle: _react2.default.PropTypes.string,
	    selected: _react2.default.PropTypes.bool, // alias of `active`
	    selectedIcon: _react2.default.PropTypes.node },

	  // not supported now
	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'span',
	      onAction: function onAction() {}
	    };
	  },
	  renderBadge: function renderBadge() {
	    var _props2 = this.props;
	    var badge = _props2.badge;
	    var badgeStyle = _props2.badgeStyle;


	    return badge ? _react2.default.createElement(
	      _Badge2.default,
	      {
	        amStyle: badgeStyle || 'alert',
	        rounded: true },
	      badge
	    ) : null;
	  },
	  renderIcon: function renderIcon() {
	    var icon = this.props.icon;


	    return icon ? _react2.default.createElement(
	      _Icon2.default,
	      { name: icon, key: 'tabbarIcon' },
	      this.renderBadge()
	    ) : null;
	  },
	  renderTitle: function renderTitle() {
	    var labelClassName = this.prefixClass('label');
	    var title = this.props.title;


	    return title ? _react2.default.createElement(
	      'span',
	      {
	        className: labelClassName,
	        key: 'tabbarTitle'
	      },
	      title
	    ) : null;
	  },
	  render: function render() {
	    var classSet = this.getClassSet(true);
	    var _props3 = this.props;
	    var Component = _props3.component;
	    var className = _props3.className;

	    var props = _objectWithoutProperties(_props3, ['component', 'className']);

	    Component = this.props.href ? 'a' : Component;
	    // TODO: how to display badge when icon not set?

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className, this.prefixClass('item'))
	      }),
	      [this.renderIcon(), this.renderTitle()]
	    );
	  }
	});

	exports.default = TabBar;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Button = __webpack_require__(17);

	var _Button2 = _interopRequireDefault(_Button);

	var _ButtonGroup = __webpack_require__(18);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Tabs = _react2.default.createClass({
	  displayName: 'Tabs',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    defaultActiveKey: _react2.default.PropTypes.any,
	    onAction: _react2.default.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabs'
	    };
	  },
	  getInitialState: function getInitialState() {
	    var defaultActiveKey = this.props.defaultActiveKey != null ? this.props.defaultActiveKey : this.getDefaultActiveKey(this.props.children);

	    return {
	      activeKey: defaultActiveKey,
	      previousActiveKey: null
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
	      this.setState({
	        previousActiveKey: this.props.activeKey
	      });
	    }
	  },
	  getDefaultActiveKey: function getDefaultActiveKey(children) {
	    var defaultActiveKey = null;

	    _react2.default.Children.forEach(children, function (child) {
	      if (defaultActiveKey == null) {
	        defaultActiveKey = child.props.eventKey;
	      }
	    });

	    return defaultActiveKey !== undefined ? defaultActiveKey : 0;
	  },
	  handleClick: function handleClick(key, disabled, e) {
	    e.preventDefault();
	    var activeKey = this.state.activeKey;

	    if (disabled) {
	      return null;
	    }

	    if (this.props.onAction) {
	      this.props.onAction(key);
	    }

	    if (activeKey !== key) {
	      this.setState({
	        activeKey: key,
	        previousActiveKey: activeKey
	      });
	    }
	  },
	  renderNav: function renderNav() {
	    var _this = this;

	    var activeKey = this.state.activeKey;

	    var navs = _react2.default.Children.map(this.props.children, function (child, index) {
	      var _child$props = child.props;
	      var eventKey = _child$props.eventKey;
	      var disabled = _child$props.disabled;
	      var navSize = _child$props.navSize;
	      var navStyle = _child$props.navStyle;

	      var key = index;

	      eventKey = eventKey !== undefined ? eventKey : index;
	      var active = eventKey === activeKey;

	      return _react2.default.createElement(
	        _Button2.default,
	        {
	          ref: 'tabNav' + key,
	          key: key,
	          onClick: _this.handleClick.bind(_this, key, disabled),
	          active: active,
	          disabled: disabled,
	          className: active ? 'active' : null,
	          amSize: navSize || 'sm',
	          amStyle: navStyle || 'primary',
	          hollow: true
	        },
	        child.props.title
	      );
	    });

	    return _react2.default.createElement(
	      _ButtonGroup2.default,
	      {
	        className: this.prefixClass('nav'),
	        justify: true
	      },
	      navs
	    );
	  },
	  renderTabPanels: function renderTabPanels() {
	    var activeKey = this.state.activeKey;
	    var panels = _react2.default.Children.map(this.props.children, function (child, index) {
	      var _child$props2 = child.props;
	      var eventKey = _child$props2.eventKey;
	      var children = _child$props2.children;

	      var props = _objectWithoutProperties(_child$props2, ['eventKey', 'children']);

	      if (eventKey === undefined) {
	        eventKey = index;
	      }

	      return _react2.default.createElement(
	        Tabs.Item,
	        _extends({
	          active: eventKey === activeKey,
	          enventKey: eventKey,
	          key: 'tabPanel' + index
	        }, props),
	        children
	      );
	    });

	    return _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('body')
	      },
	      panels
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props = this.props;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['className']);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.renderNav(),
	      this.renderTabPanels()
	    );
	  }
	});

	Tabs.Item = _react2.default.createClass({
	  displayName: 'Item',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string,
	    title: _react2.default.PropTypes.node,
	    eventKey: _react2.default.PropTypes.any,
	    disabled: _react2.default.PropTypes.bool,
	    active: _react2.default.PropTypes.bool,
	    noPadded: _react2.default.PropTypes.bool,
	    navSize: _react2.default.PropTypes.string,
	    navStyle: _react2.default.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tab'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet(true);
	    var _props2 = this.props;
	    var className = _props2.className;
	    var children = _props2.children;
	    var noPadded = _props2.noPadded;

	    var props = _objectWithoutProperties(_props2, ['className', 'children', 'noPadded']);

	    var elementName = 'panel';

	    classSet[this.prefixClass(elementName)] = true;
	    classSet[this.prefixClass(elementName + '-no-padded')] = noPadded;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      children
	    );
	  }
	});

	exports.default = Tabs;

	// TODO: Nav 的可定制性，如允许传入 Router 的 Link 组件

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var View = _react2.default.createClass({
	  displayName: 'View',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react2.default.PropTypes.string.isRequired,
	    component: _react2.default.PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'view',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var component = _props.component;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['component', 'className']);

	    return _react2.default.createElement(component, _extends({}, props, {
	      className: (0, _classnames2.default)(className, this.getClassSet())
	    }));
	  }
	});

	exports.default = View;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TouchableMixin = exports.OverlayMixin = exports.CollapseMixin = exports.ClassNameMixin = exports.BackdropMixin = undefined;

	var _BackdropMixin2 = __webpack_require__(31);

	var _BackdropMixin3 = _interopRequireDefault(_BackdropMixin2);

	var _ClassNameMixin2 = __webpack_require__(5);

	var _ClassNameMixin3 = _interopRequireDefault(_ClassNameMixin2);

	var _CollapseMixin2 = __webpack_require__(11);

	var _CollapseMixin3 = _interopRequireDefault(_CollapseMixin2);

	var _OverlayMixin2 = __webpack_require__(33);

	var _OverlayMixin3 = _interopRequireDefault(_OverlayMixin2);

	var _TouchableMixin2 = __webpack_require__(40);

	var _TouchableMixin3 = _interopRequireDefault(_TouchableMixin2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BackdropMixin = _BackdropMixin3.default;
	exports.ClassNameMixin = _ClassNameMixin3.default;
	exports.CollapseMixin = _CollapseMixin3.default;
	exports.OverlayMixin = _OverlayMixin3.default;
	exports.TouchableMixin = _TouchableMixin3.default;

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	// Android browsers legacy flexbox fallback
	try {
	  var ua = navigator.userAgent;

	  // TODO:
	  // - add version detecting when UC supports flexbox
	  if (/android/i.test(ua) && /ucbrowser/i.test(ua)) {
	    document.documentElement.className += ' ua-stupid-uc';
	  }
	} catch (e) {}

/***/ }
/******/ ])
});
;