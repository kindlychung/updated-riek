/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactHighlight = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-highlight\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

	var _index = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);

	  function Demo(props) {
	    _classCallCheck(this, Demo);

	    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

	    _this.virtualServerCallback = function (newState) {
	      if (_this.state.simulateXHR) {
	        window.setTimeout(function () {
	          this.changeState(newState);
	        }.bind(_this), _this.state.XHRDelay);
	      } else {
	        _this.changeState(newState);
	      }
	    };

	    _this.changeState = function (newState) {
	      _this.setState(newState);
	    };

	    _this.isStringAcceptable = function (string) {
	      return string.length >= 1; // Minimum 4 letters long
	    };

	    _this.isStringEvenNumber = function (string) {
	      var number = parseInt(string);
	      if (isNaN(number) || !isFinite(number)) return false;
	      return number % 2 == 0;
	    };

	    _this.isValidXHRDelay = function (text) {
	      var number = parseInt(text);
	      if (isNaN(number)) return false;
	      return 0 < number && number < 50000;
	    };

	    _this.formatInteger = function (number) {
	      return number.toString() + " feet";
	    };

	    _this.formatMillisecondsAppend = function (text) {
	      return text + " ms";
	    };

	    _this.render = function () {
	      var xhrDelaySwitch = _this.state.simulateXHR ? _react2.default.createElement(
	        'li',
	        null,
	        'XHR delay: ',
	        _react2.default.createElement(_index.RIENumber, { value: _this.state.XHRDelay, change: _this.changeState, validate: _this.isValidXHRDelay, propName: 'XHRDelay', className: 'editable-pill', format: _this.formatMillisecondsAppend })
	      ) : null;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'menu' },
	          _react2.default.createElement(
	            'div',
	            { className: 'fifty' },
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Application State'
	            ),
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  'boolean:'
	                ),
	                ' ',
	                _this.state.boolean.toString()
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  'text:'
	                ),
	                ' ',
	                _this.state.text
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  'textarea:'
	                ),
	                ' ',
	                _this.state.textarea.replace(new RegExp("\n", "g"), "\\n")
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  'number:'
	                ),
	                ' ',
	                _this.state.number
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  'tags:'
	                ),
	                ' ',
	                [].concat(_toConsumableArray(_this.state.tags)).join(', ')
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  'select:'
	                ),
	                ' ',
	                JSON.stringify(_this.state.select)
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'fifty' },
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Options'
	            ),
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                'Simulate XHR: ',
	                _react2.default.createElement(_index.RIEToggle, { value: _this.state.simulateXHR, change: _this.changeState, propName: 'simulateXHR', textTrue: 'yes', textFalse: 'don\'t', className: 'editable-pill' })
	              ),
	              xhrDelaySwitch,
	              _react2.default.createElement(
	                'li',
	                null,
	                'Highlight editable: ',
	                _react2.default.createElement(_index.RIEToggle, { value: _this.state.highlight, change: _this.changeState, propName: 'highlight', textTrue: 'highlight', textFalse: 'don\'t', className: 'editable-pill' })
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(_index.RIEToggle, { value: _this.state.showSource, change: _this.changeState, propName: 'showSource', textTrue: 'Source shown', textFalse: 'Source hidden', className: 'editable-pill' })
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(_index.RIEToggle, { value: _this.state.isDisabled, change: _this.changeState, propName: 'isDisabled', textTrue: 'fields disabled', textFalse: 'fields not disabled', className: 'editable-pill' })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'content' },
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Toggle'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              'Default: '
	            ),
	            _react2.default.createElement(_index.RIEToggle, {
	              value: _this.state.boolean,
	              className: _this.state.highlight ? "editable" : "",
	              change: _this.virtualServerCallback,
	              classLoading: 'loading',
	              propName: 'boolean',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIEToggle\nvalue={this.state.boolean}\nclassName={this.state.highlight ? "editable" : ""}\nchange={this.virtualServerCallback}\nclassLoading="loading"\npropName="boolean"\nisDisabled={this.state.isDisabled} />'
	            ) : null,
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Custom labels: '
	            ),
	            _react2.default.createElement(_index.RIEToggle, {
	              value: _this.state.boolean,
	              className: _this.state.highlight ? "editable" : "",
	              change: _this.virtualServerCallback,
	              textTrue: 'activated',
	              textFalse: 'deactivated',
	              classLoading: 'loading',
	              propName: 'boolean',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIEToggle\nvalue={this.state.boolean}\nclassName={this.state.highlight ? "editable" : ""}\nchange={this.virtualServerCallback}\ntextTrue="activated"\ntextFalse="deactivated"\nclassLoading="loading"\npropName="boolean"\nisDisabled={this.state.isDisabled} />'
	            ) : null
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Input'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              'Default: '
	            ),
	            _react2.default.createElement(_index.RIEInput, {
	              value: _this.state.text,
	              change: _this.virtualServerCallback,
	              propName: 'text',
	              className: _this.state.highlight ? "editable" : "",
	              classLoading: 'loading',
	              classInvalid: 'invalid',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIEInput\n  value={this.state.text}\n  change={this.virtualServerCallback}\n  propName="text"\n  className={this.state.highlight ? "editable" : ""}\n  validate={this.isStringAcceptable}\n  classLoading="loading"\n  classInvalid="invalid"\n  isDisabled={this.state.isDisabled} />'
	            ) : null
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Textarea'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'Default: '
	            ),
	            _react2.default.createElement(_index.RIETextArea, {
	              value: _this.state.textarea,
	              change: _this.virtualServerCallback,
	              propName: 'textarea',
	              className: _this.state.highlight ? "editable" : "",
	              validate: _this.isStringAcceptable,
	              classLoading: 'loading',
	              classInvalid: 'invalid',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIETextArea\n  value={this.state.textarea}\n  change={this.virtualServerCallback}\n  propName="textarea"\n  className={this.state.highlight ? "editable" : ""}\n  validate={this.isStringAcceptable}\n  classLoading="loading"\n  classInvalid="invalid"\n  isDisabled={this.state.isDisabled} />'
	            ) : null
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Number'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              'Default: '
	            ),
	            _react2.default.createElement(_index.RIENumber, {
	              value: _this.state.number,
	              change: _this.virtualServerCallback,
	              propName: 'number',
	              className: _this.state.highlight ? "editable" : "",
	              classLoading: 'loading',
	              classInvalid: 'invalid',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIENumber\n  value={this.state.number}\n  change={this.virtualServerCallback}\n  propName="number"\n  className={this.state.highlight ? "editable" : ""}\n  classLoading="loading"\n  classInvalid="invalid"\n  isDisabled={this.state.isDisabled} />'
	            ) : null,
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Only even, custom formatter: '
	            ),
	            _react2.default.createElement(_index.RIENumber, {
	              value: _this.state.number,
	              change: _this.virtualServerCallback,
	              propName: 'number',
	              format: _this.formatInteger,
	              classLoading: 'loading',
	              className: _this.state.highlight ? "editable" : "",
	              validate: _this.isStringEvenNumber,
	              classInvalid: 'invalid',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIENumber\n  value={this.state.number}\n  change={this.virtualServerCallback}\n  propName="number"\n  format={this.formatInteger}\n  classLoading="loading"\n  className={this.state.highlight ? "editable" : ""}\n  validate={this.isStringEvenNumber}\n  classInvalid="invalid"\n  isDisabled={this.state.isDisabled} />'
	            ) : null
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Tags'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              'Default: '
	            ),
	            _react2.default.createElement(_index.RIETags, {
	              value: _this.state.tags,
	              change: _this.virtualServerCallback,
	              maxTags: 10,
	              minTags: 2,
	              propName: 'tags',
	              placeholder: 'New',
	              className: _this.state.highlight ? "tags editable" : "tags",
	              classLoading: 'loading',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIETags\n  value={this.state.tags}\n  change={this.virtualServerCallback}\n  maxTags={10}\n  minTags={2}\n  propName="tags"\n  placeholder="New"\n  className={this.state.highlight ? "tags editable" : "tags"}\n  classLoading="loading"\n  isDisabled={this.state.isDisabled} />'
	            ) : null
	          ),
	          _react2.default.createElement('hr', null),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Select'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              'Default: '
	            ),
	            _react2.default.createElement(_index.RIESelect, {
	              value: _this.state.select,
	              className: _this.state.highlight ? "editable" : "",
	              options: _this.state.selectOptions,
	              change: _this.virtualServerCallback,
	              classLoading: 'loading',
	              propName: 'select',
	              isDisabled: _this.state.isDisabled }),
	            _this.state.showSource ? _react2.default.createElement(
	              _reactHighlight2.default,
	              { className: 'jsx' },
	              '<RIESelect\n  value={this.state.select}\n  className={this.state.highlight ? "editable" : ""}\n  options={this.state.selectOptions}\n  change={this.virtualServerCallback}\n  classLoading="loading"\n  propName="select"\n  isDisabled={this.state.isDisabled} />'
	            ) : null
	          )
	        )
	      );
	    };

	    _this.state = {
	      select: { id: "1", text: "broccoli" },
	      selectOptions: [{ id: "1", text: "broccoli" }, { id: "2", text: "arugula" }, { id: "3", text: "leek" }, { id: "4", text: "radish" }, { id: "5", text: "watercress" }, { id: "6", text: "dandelion" }],
	      boolean: true,
	      number: 9000,
	      text: "Example text value",
	      textarea: 'Multiline example\n  text value',
	      date: Date.now(),
	      tags: new Set(["Bergen", "Asmara", "Göteborg", "Newcastle", "Seattle"]),
	      simulateXHR: false,
	      XHRDelay: 450,
	      highlight: false,
	      showSource: false,
	      isDisabled: false
	    };
	    return _this;
	  }

	  return Demo;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('app'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RIESelect = exports.RIETags = exports.RIENumber = exports.RIETextArea = exports.RIEInput = exports.RIEToggle = undefined;

	var _RIEToggle = __webpack_require__(4);

	var _RIEToggle2 = _interopRequireDefault(_RIEToggle);

	var _RIEStatefulBase2 = __webpack_require__(20);

	var _RIEStatefulBase3 = _interopRequireDefault(_RIEStatefulBase2);

	var _RIETextArea = __webpack_require__(21);

	var _RIETextArea2 = _interopRequireDefault(_RIETextArea);

	var _RIENumber = __webpack_require__(22);

	var _RIENumber2 = _interopRequireDefault(_RIENumber);

	var _RIETags = __webpack_require__(23);

	var _RIETags2 = _interopRequireDefault(_RIETags);

	var _RIESelect = __webpack_require__(24);

	var _RIESelect2 = _interopRequireDefault(_RIESelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RIEInput = function (_RIEStatefulBase) {
	  _inherits(RIEInput, _RIEStatefulBase);

	  function RIEInput() {
	    _classCallCheck(this, RIEInput);

	    return _possibleConstructorReturn(this, (RIEInput.__proto__ || Object.getPrototypeOf(RIEInput)).apply(this, arguments));
	  }

	  return RIEInput;
	}(_RIEStatefulBase3.default);

	exports.RIEToggle = _RIEToggle2.default;
	exports.RIEInput = RIEInput;
	exports.RIETextArea = _RIETextArea2.default;
	exports.RIENumber = _RIENumber2.default;
	exports.RIETags = _RIETags2.default;
	exports.RIESelect = _RIESelect2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _RIEBase2 = __webpack_require__(16);

	var _RIEBase3 = _interopRequireDefault(_RIEBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RIEToggle = function (_RIEBase) {
	    _inherits(RIEToggle, _RIEBase);

	    function RIEToggle() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, RIEToggle);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RIEToggle.__proto__ || Object.getPrototypeOf(RIEToggle)).call.apply(_ref, [this].concat(args))), _this), _this.elementClick = function (e) {
	            if (_this.props.isDisabled) return;
	            _this.setState({ value: !_this.props.value });
	            _this.commit(!_this.props.value);
	        }, _this.render = function () {
	            var valueToRender = _this.state.loading ? _this.state.value : _this.props.value;
	            return _react2.default.createElement(
	                'span',
	                _extends({
	                    tabIndex: '0',
	                    onKeyPress: _this.elementClick,
	                    onClick: _this.elementClick,
	                    className: _this.makeClassString()
	                }, _this.props.defaultProps),
	                valueToRender ? _this.props.textTrue || 'yes' : _this.props.textFalse || 'no'
	            );
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return RIEToggle;
	}(_RIEBase3.default);

	RIEToggle.propTypes = {
	    textTrue: _propTypes2.default.string,
	    textFalse: _propTypes2.default.string
	};
	exports.default = RIEToggle;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(7);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(10)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(15)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(8);
	} else {
	  module.exports = __webpack_require__(9);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(7);
	var assign = __webpack_require__(11);

	var ReactPropTypesSecret = __webpack_require__(12);
	var has = __webpack_require__(13);
	var checkPropTypes = __webpack_require__(14);

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(12);
	  var loggedTypeFailures = {};
	  var has = __webpack_require__(13);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(12);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(17)('RIEBase');

	var RIEBase = function (_React$Component) {
	    _inherits(RIEBase, _React$Component);

	    function RIEBase(props) {
	        _classCallCheck(this, RIEBase);

	        var _this = _possibleConstructorReturn(this, (RIEBase.__proto__ || Object.getPrototypeOf(RIEBase)).call(this, props));

	        _this.doValidations = function (value) {
	            debug('doValidations(' + value + ')');
	            var isValid = void 0;
	            if (_this.props.validate) {
	                isValid = _this.props.validate(value);
	            } else if (_this.validate) {
	                isValid = _this.validate(value);
	            } else return true;
	            _this.setState({ invalid: !isValid });
	            return isValid;
	        };

	        _this.selectInputText = function (element) {
	            debug('selectInputText(' + element.value + ')');
	            if (element.setSelectionRange) element.setSelectionRange(0, element.value.length);
	        };

	        _this.elementClick = function (event) {
	            throw "RIEBase must be subclassed first: use a concrete class like RIEInput, RIEToggle et.c";
	        };

	        _this.componentWillReceiveProps = function (nextProps) {
	            debug('componentWillReceiveProps(' + nextProps + ')');
	            if ('value' in nextProps && !(nextProps.shouldRemainWhileInvalid && _this.state.invalid)) {
	                _this.setState({ loading: false, editing: false, invalid: false, newValue: null });
	            }
	        };

	        _this.commit = function (value) {
	            debug('commit(' + value + ')');
	            if (!_this.state.invalid) {
	                var newProp = {};
	                newProp[_this.props.propName] = value;
	                _this.setState({ loading: true, newValue: value });
	                _this.props.change(newProp);
	            }
	        };

	        _this.makeClassString = function () {
	            debug('makeClassString()');
	            var classNames = [];
	            if (_this.props.className) classNames.push(_this.props.className);
	            if (_this.state.editing && _this.props.classEditing) classNames.push(_this.props.classEditing);
	            if (_this.state.loading && _this.props.classLoading) classNames.push(_this.props.classLoading);
	            if (_this.state.disabled && _this.props.classDisabled) classNames.push(_this.props.classDisabled);
	            if (_this.state.invalid && _this.props.classInvalid) classNames.push(_this.props.classInvalid);
	            return classNames.join(' ');
	        };

	        _this.render = function () {
	            debuf('render()');
	            return _react2.default.createElement(
	                'span',
	                _extends({}, _this.props.defaultProps, { tabindex: '0', className: _this.makeClassString(), onClick: _this.elementClick }),
	                _this.props.value
	            );
	        };

	        if (!_this.props.propName) throw "RTFM: missing 'propName' prop";
	        if (!_this.props.change) throw "RTFM: missing 'change' prop";
	        if (typeof _this.props.value == 'undefined') throw "RTFM: missing 'value' prop";

	        _this.state = {
	            editing: false,
	            loading: false,
	            disabled: false,
	            invalid: false
	        };
	        return _this;
	    }

	    return RIEBase;
	}(_react2.default.Component);

	RIEBase.propTypes = {
	    value: _propTypes2.default.any.isRequired,
	    change: _propTypes2.default.func.isRequired,
	    propName: _propTypes2.default.string.isRequired,
	    editProps: _propTypes2.default.object,
	    defaultProps: _propTypes2.default.object,
	    isDisabled: _propTypes2.default.bool,
	    validate: _propTypes2.default.func,
	    handleValidationFail: _propTypes2.default.func,
	    shouldBlockWhileLoading: _propTypes2.default.bool,
	    shouldRemainWhileInvalid: _propTypes2.default.bool,
	    classLoading: _propTypes2.default.string,
	    classEditing: _propTypes2.default.string,
	    classDisabled: _propTypes2.default.string,
	    classInvalid: _propTypes2.default.string,
	    className: _propTypes2.default.string,
	    beforeStart: _propTypes2.default.func,
	    afterStart: _propTypes2.default.func,
	    beforeFinish: _propTypes2.default.func,
	    afterFinish: _propTypes2.default.func
	};
	exports.default = RIEBase;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(18);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
	    return true;
	  }

	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs(args) {
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return;

	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}

	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (!r && typeof process !== 'undefined' && 'env' in process) {
	    r = process.env.DEBUG;
	  }

	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(19);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */

	exports.formatters = {};

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */

	function selectColor(namespace) {
	  var hash = 0, i;

	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }

	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function createDebug(namespace) {

	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;

	    var self = debug;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);

	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }

	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);

	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }

	  return debug;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  exports.names = [];
	  exports.skips = [];

	  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _RIEBase2 = __webpack_require__(16);

	var _RIEBase3 = _interopRequireDefault(_RIEBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(17)('RIEStatefulBase');

	var RIEStatefulBase = function (_RIEBase) {
	    _inherits(RIEStatefulBase, _RIEBase);

	    function RIEStatefulBase(props) {
	        _classCallCheck(this, RIEStatefulBase);

	        var _this = _possibleConstructorReturn(this, (RIEStatefulBase.__proto__ || Object.getPrototypeOf(RIEStatefulBase)).call(this, props));

	        _this.startEditing = function () {
	            debug('startEditing');
	            _this.props.beforeStart ? _this.props.beforeStart() : null;
	            if (_this.props.isDisabled) return;
	            _this.setState({ editing: true });
	            _this.props.afterStart ? _this.props.afterStart() : null;
	        };

	        _this.finishEditing = function () {
	            debug('finishEditing');
	            _this.props.beforeFinish ? _this.props.beforeFinish() : null;
	            var newValue = _reactDom2.default.findDOMNode(_this.refs.input).value;
	            var result = _this.doValidations(newValue);
	            if (result && _this.props.value !== newValue) {
	                _this.commit(newValue);
	            }
	            if (!result && _this.props.handleValidationFail) {
	                _this.props.handleValidationFail(result, newValue, function () {
	                    return _this.cancelEditing();
	                });
	            } else {
	                _this.cancelEditing();
	            }
	            _this.props.afterFinish ? _this.props.afterFinish() : null;
	        };

	        _this.cancelEditing = function () {
	            debug('cancelEditing');
	            _this.setState({ editing: false, invalid: false });
	        };

	        _this.keyDown = function (event) {
	            debug('keyDown(${event.keyCode})');
	            if (event.keyCode === 13) {
	                _this.finishEditing();
	            } // Enter
	            else if (event.keyCode === 27) {
	                    _this.cancelEditing();
	                } // Escape
	        };

	        _this.textChanged = function (event) {
	            debug('textChanged(${event.target.value})');
	            _this.doValidations(event.target.value.trim());
	        };

	        _this.componentDidUpdate = function (prevProps, prevState) {
	            debug('componentDidUpdate(' + prevProps + ', ' + prevState + ')');
	            var inputElem = _reactDom2.default.findDOMNode(_this.refs.input);
	            debug(inputElem);
	            if (_this.state.editing && !prevState.editing) {
	                debug('entering edit mode');
	                inputElem.focus();
	                _this.selectInputText(inputElem);
	            } else if (_this.state.editing && prevProps.text != _this.props.text) {
	                debug('not editing && text not equal previous props -- finishing editing');
	                _this.finishEditing();
	            }
	        };

	        _this.renderEditingComponent = function () {
	            debug('renderEditingComponent()');
	            return _react2.default.createElement('input', _extends({
	                disabled: _this.state.loading,
	                className: _this.makeClassString(),
	                defaultValue: _this.props.value,
	                onInput: _this.textChanged,
	                onBlur: _this.elementBlur,
	                ref: 'input',
	                onKeyDown: _this.keyDown
	            }, _this.props.editProps));
	        };

	        _this.renderNormalComponent = function () {
	            debug('renderNormalComponent');
	            return _react2.default.createElement(
	                'span',
	                _extends({
	                    tabIndex: '0',
	                    className: _this.makeClassString(),
	                    onFocus: _this.startEditing,
	                    onClick: _this.startEditing
	                }, _this.props.defaultProps),
	                _this.state.newValue || _this.props.value
	            );
	        };

	        _this.elementBlur = function (event) {
	            debug('elementBlur(' + event + ')');
	            _this.finishEditing();
	        };

	        _this.elementClick = function (event) {
	            debug('elementClick(' + event + ')');
	            _this.startEditing();
	            event.target.element.focus();
	        };

	        _this.render = function () {
	            debug('render()');
	            if (_this.state.editing) {
	                return _this.renderEditingComponent();
	            } else {
	                return _this.renderNormalComponent();
	            }
	        };

	        return _this;
	    }

	    return RIEStatefulBase;
	}(_RIEBase3.default);

	exports.default = RIEStatefulBase;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _RIEStatefulBase2 = __webpack_require__(20);

	var _RIEStatefulBase3 = _interopRequireDefault(_RIEStatefulBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RIETextArea = function (_RIEStatefulBase) {
	    _inherits(RIETextArea, _RIEStatefulBase);

	    function RIETextArea() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, RIETextArea);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RIETextArea.__proto__ || Object.getPrototypeOf(RIETextArea)).call.apply(_ref, [this].concat(args))), _this), _this.keyDown = function (event) {
	            if (event.keyCode === 27) {
	                _this.cancelEditing();
	            } // Escape
	        }, _this.renderEditingComponent = function () {
	            return _react2.default.createElement('textarea', _extends({
	                rows: _this.props.rows,
	                cols: _this.props.cols,
	                disabled: _this.state.loading,
	                className: _this.makeClassString(),
	                defaultValue: _this.props.value,
	                onInput: _this.textChanged,
	                onBlur: _this.finishEditing,
	                ref: 'input',
	                onKeyDown: _this.keyDown
	            }, _this.props.editProps));
	        }, _this.renderNormalComponent = function () {
	            var value = _this.state.newValue || _this.props.value;
	            var spans_and_brs = [];
	            var i = 0;
	            value.split("\n").map(function (line) {
	                spans_and_brs.push(_react2.default.createElement(
	                    'span',
	                    { key: i },
	                    line
	                ));
	                spans_and_brs.push(_react2.default.createElement('br', { key: i + 1 }));
	                i += 2;
	            });
	            spans_and_brs.pop(); // remove last br tag

	            return _react2.default.createElement(
	                'span',
	                _extends({
	                    tabIndex: '0',
	                    className: _this.makeClassString(),
	                    onFocus: _this.startEditing,
	                    onClick: _this.startEditing
	                }, _this.props.defaultProps),
	                spans_and_brs
	            );
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return RIETextArea;
	}(_RIEStatefulBase3.default);

	exports.default = RIETextArea;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _RIEStatefulBase2 = __webpack_require__(20);

	var _RIEStatefulBase3 = _interopRequireDefault(_RIEStatefulBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = __webpack_require__(17)('RIENumber');

	var RIENumber = function (_RIEStatefulBase) {
	    _inherits(RIENumber, _RIEStatefulBase);

	    function RIENumber(props) {
	        _classCallCheck(this, RIENumber);

	        var _this = _possibleConstructorReturn(this, (RIENumber.__proto__ || Object.getPrototypeOf(RIENumber)).call(this, props));

	        _this.validate = function (value) {
	            debug('validate(' + value + ')');
	            return !isNaN(value) && isFinite(value) && value.length > 0;
	        };

	        _this.selectInputText = function (element) {
	            debug('selectInputText(' + element + ')');
	            // element.setSelectionRange won't work for an input of type "number"
	            setTimeout(function () {
	                element.select();
	            }, 10);
	        };

	        _this.elementBlur = function (element) {
	            debug('elementBlur(' + element + ')');
	            /*  
	                        Firefox workaround
	                        Found at https://tirdadc.github.io/blog/2015/06/11/react-dot-js-firefox-issue-with-onblur/
	            */
	            if (element.nativeEvent.explicitOriginalTarget && element.nativeEvent.explicitOriginalTarget == element.nativeEvent.originalTarget) {
	                return;
	            }
	            _this.finishEditing();
	        };

	        _this.renderNormalComponent = function () {
	            debug('renderNormalComponent()');
	            return _react2.default.createElement(
	                'span',
	                _extends({
	                    tabIndex: '0',
	                    className: _this.makeClassString(),
	                    onFocus: _this.startEditing,
	                    onClick: _this.elementClick
	                }, _this.props.defaultProps),
	                _this.props.format ? _this.props.format(_this.state.newValue || _this.props.value) : _this.state.newValue || _this.props.value
	            );
	        };

	        _this.renderEditingComponent = function () {
	            debug('renderEditingComponent()');
	            return _react2.default.createElement('input', _extends({ disabled: _this.props.shouldBlockWhileLoading && _this.state.loading,
	                type: 'number',
	                className: _this.makeClassString(),
	                defaultValue: _this.props.value,
	                onInput: _this.textChanged,
	                onBlur: _this.elementBlur,
	                ref: 'input',
	                onKeyDown: _this.keyDown
	            }, _this.props.editProps));
	        };

	        return _this;
	    }

	    return RIENumber;
	}(_RIEStatefulBase3.default);

	RIENumber.propTypes = {
	    format: _propTypes2.default.func
	};
	exports.default = RIENumber;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _RIEStatefulBase2 = __webpack_require__(20);

	var _RIEStatefulBase3 = _interopRequireDefault(_RIEStatefulBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RIETag = function (_React$Component) {
	    _inherits(RIETag, _React$Component);

	    function RIETag(props) {
	        _classCallCheck(this, RIETag);

	        var _this = _possibleConstructorReturn(this, (RIETag.__proto__ || Object.getPrototypeOf(RIETag)).call(this, props));

	        _this.remove = function () {
	            _this.props.removeHandler(_this.props.text);
	        };

	        _this.render = function () {
	            return _react2.default.createElement(
	                'div',
	                { key: _this.props.text },
	                _this.props.text,
	                _react2.default.createElement(
	                    'div',
	                    { onClick: _this.remove, className: _this.props.className || "remove" },
	                    ' \xD7 '
	                )
	            );
	        };

	        return _this;
	    }

	    return RIETag;
	}(_react2.default.Component);

	RIETag.propTypes = {
	    text: _propTypes2.default.string.isRequired,
	    removeHandler: _propTypes2.default.func,
	    className: _propTypes2.default.string
	};

	var RIETags = function (_RIEStatefulBase) {
	    _inherits(RIETags, _RIEStatefulBase);

	    function RIETags(props) {
	        _classCallCheck(this, RIETags);

	        var _this2 = _possibleConstructorReturn(this, (RIETags.__proto__ || Object.getPrototypeOf(RIETags)).call(this, props));

	        _this2.addTag = function (tag) {
	            if ([].concat(_toConsumableArray(_this2.props.value)).length < (_this2.props.maxTags || 65535)) {
	                _this2.commit(_this2.props.value.add(tag));
	            }
	        };

	        _this2.removeTag = function (tag) {

	            clearTimeout(_this2.state.blurTimer);

	            if ([].concat(_toConsumableArray(_this2.props.value)).length >= (_this2.props.minTags || 1)) {
	                var newSet = _this2.props.value;
	                newSet.delete(tag);
	                _this2.commit(newSet);
	            }
	        };

	        _this2.componentWillReceiveProps = function (nextProps) {
	            if ('value' in nextProps) _this2.setState({ loading: false, invalid: false });
	        };

	        _this2.keyDown = function (event) {
	            if (event.keyCode === 8) {
	                // Backspace
	                if (event.target.value.length == 0) {
	                    var tagToRemove = [].concat(_toConsumableArray(_this2.props.value)).pop();
	                    _this2.removeTag(tagToRemove);
	                }
	            } else if (event.keyCode === 13) {
	                // Enter
	                event.preventDefault();
	                if (event.target.value.length === 0) {
	                    _this2.cancelEditing();
	                } else {
	                    _this2.addTag(event.target.value);
	                    event.target.value = "";
	                }
	            } else if (event.keyCode === 27) {
	                // Escape
	                _this2.cancelEditing();
	            }
	        };

	        _this2.cancelEditingDelayed = function () {
	            _this2.setState({ blurTimer: setTimeout(_this2.cancelEditing, _this2.props.blurDelay || 180) });
	        };

	        _this2.cancelEditing = function () {
	            _this2.setState({ editing: false, invalid: false });
	        };

	        _this2.componentDidUpdate = function (prevProps, prevState) {
	            var inputElem = _reactDom2.default.findDOMNode(_this2.refs.input);
	            if (_this2.state.editing) {
	                inputElem.focus();
	            }
	        };

	        _this2.renderNormalComponent = function () {
	            var tags = [].concat(_toConsumableArray(_this2.props.value)).join(_this2.props.separator || ", ");
	            return _react2.default.createElement(
	                'span',
	                _extends({
	                    tabIndex: '0',
	                    className: _this2.makeClassString(),
	                    onFocus: _this2.startEditing
	                }, _this2.props.defaultProps),
	                tags
	            );
	        };

	        _this2.makeTagElement = function (text) {
	            return _react2.default.createElement(RIETag, { key: text, text: text, removeHandler: _this2.removeTag });
	        };

	        _this2.renderEditingComponent = function () {
	            var elements = [].concat(_toConsumableArray(_this2.props.value)).map(_this2.makeTagElement);
	            return _react2.default.createElement(
	                'div',
	                _extends({ tabIndex: '1', onClick: _this2.startEditing, className: _this2.makeClassString() }, _this2.props.editProps),
	                elements,
	                _react2.default.createElement('input', {
	                    onBlur: _this2.cancelEditingDelayed,
	                    onKeyDown: _this2.keyDown,
	                    placeholder: _this2.props.placeholder || "New tag",
	                    ref: 'input' })
	            );
	        };

	        _this2.state.currentText = "";
	        _this2.state.blurTimer = null;
	        return _this2;
	    }

	    return RIETags;
	}(_RIEStatefulBase3.default);

	RIETags.propTyes = {
	    value: _propTypes2.default.object.isRequired,
	    maxTags: _propTypes2.default.number,
	    minTags: _propTypes2.default.number,
	    separator: _propTypes2.default.string,
	    elementClass: _propTypes2.default.string,
	    blurDelay: _propTypes2.default.number,
	    placeholder: _propTypes2.default.string
	};
	exports.default = RIETags;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _RIEStatefulBase2 = __webpack_require__(20);

	var _RIEStatefulBase3 = _interopRequireDefault(_RIEStatefulBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RIESelect = function (_RIEStatefulBase) {
	    _inherits(RIESelect, _RIEStatefulBase);

	    function RIESelect() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, RIESelect);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RIESelect.__proto__ || Object.getPrototypeOf(RIESelect)).call.apply(_ref, [this].concat(args))), _this), _this.finishEditing = function () {
	            // get the object from options that matches user selected value
	            var newValue = _this.props.options.find(function (option) {
	                return option.id === _reactDom2.default.findDOMNode(this.refs.input).value;
	            }, _this);
	            _this.doValidations(newValue);
	            if (!_this.state.invalid && _this.props.value !== newValue) {
	                _this.commit(newValue);
	            }
	            _this.cancelEditing();
	        }, _this.renderEditingComponent = function () {
	            var optionNodes = _this.props.options.map(function (option) {
	                return _react2.default.createElement(
	                    'option',
	                    { value: option.id, key: option.id },
	                    option.text
	                );
	            });

	            return _react2.default.createElement(
	                'select',
	                _extends({ disabled: _this.props.shouldBlockWhileLoading && _this.state.loading,
	                    value: _this.props.value.id,
	                    className: _this.makeClassString(),
	                    onChange: _this.finishEditing,
	                    onBlur: _this.cancelEditing,
	                    ref: 'input',
	                    onKeyDown: _this.keyDown
	                }, _this.props.editProps),
	                optionNodes
	            );
	        }, _this.renderNormalComponent = function () {
	            return _react2.default.createElement(
	                'span',
	                _extends({
	                    tabIndex: '0',
	                    className: _this.makeClassString(),
	                    onFocus: _this.startEditing,
	                    onClick: _this.startEditing
	                }, _this.props.defaultProps),
	                !!_this.state.newValue ? _this.state.newValue.text : _this.props.value.text
	            );
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return RIESelect;
	}(_RIEStatefulBase3.default);

	RIESelect.propTypes = {
	    options: _propTypes2.default.array.isRequired
	};
	exports.default = RIESelect;

/***/ })
/******/ ]);