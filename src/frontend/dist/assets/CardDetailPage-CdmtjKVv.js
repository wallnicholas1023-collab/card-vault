import { d as createLucideIcon, o, a as clsx, r as reactExports, j as jsxRuntimeExports, e as useComposedRefs, c as cn, f as buttonVariants, g as useParams, u as useNavigate, B as Button, S as Skeleton, h as useQueryClient, C as CirclePlus } from "./index-DeryHgS0.js";
import { u as useActor, a as useQuery, c as createActor, h as getPriceHistory, i as useCard, e as useDeleteCard, j as addPriceEntry } from "./useCards-sQAGuqe2.js";
import { C as ConditionBadge, G as GainLossBadge } from "./GainLossBadge-j68JUyYw.js";
import { c as composeEventHandlers, a as createSlottable, b as createContextScope, L as Label, I as Input } from "./label-DJy4BL2X.js";
import { R as Root, c as Trigger, W as WarningProvider, C as Content, T as Title, D as Description, a as Close, d as createDialogScope, P as Portal, O as Overlay, b as Trash2 } from "./index-D7q2iiE-.js";
import { g as isFunction, D as Dot, q as findAllByType, E as ErrorBar, L as Layer, f as filterProps, C as Curve, A as Animate, a as interpolateNumber, d as isEqual, b as isNil, h as hasClipDot, e as LabelList, j as getValueByDataKey, u as uniqueId, G as Global, k as getCateCoordinateOfLine, l as generateCategoricalChart, X as XAxis, Y as YAxis, n as formatAxisMap, B as Badge, o as DollarSign, R as ResponsiveContainer, p as CartesianGrid, T as Tooltip } from "./generateCategoricalChart-Dr54BYy8.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-BODN1vU_.js";
import { u as ue } from "./index-Bf4B3rpB.js";
import { A as ArrowLeft } from "./arrow-left-H5x3VGfF.js";
import { S as SquarePen } from "./square-pen-Gr15Tttu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
var _excluded = ["type", "layout", "connectNulls", "ref"], _excluded2 = ["key"];
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
  var n = Object.prototype.toString.call(o2).slice(8, -1);
  if (n === "Object" && o2.constructor) n = o2.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o2);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o2, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o2, e) {
  return o2 = _getPrototypeOf(o2), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o2, e || [], _getPrototypeOf(t).constructor) : o2.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p2) {
    o3.__proto__ = p2;
    return o3;
  };
  return _setPrototypeOf(o2, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Line = /* @__PURE__ */ function(_PureComponent) {
  function Line2() {
    var _this;
    _classCallCheck(this, Line2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Line2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: true,
      totalLength: 0
    });
    _defineProperty(_this, "generateSimpleStrokeDasharray", function(totalLength, length) {
      return "".concat(length, "px ").concat(totalLength - length, "px");
    });
    _defineProperty(_this, "getStrokeDasharray", function(length, totalLength, lines) {
      var lineLength = lines.reduce(function(pre, next) {
        return pre + next;
      });
      if (!lineLength) {
        return _this.generateSimpleStrokeDasharray(totalLength, length);
      }
      var count = Math.floor(length / lineLength);
      var remainLength = length % lineLength;
      var restLength = totalLength - length;
      var remainLines = [];
      for (var i = 0, sum = 0; i < lines.length; sum += lines[i], ++i) {
        if (sum + lines[i] > remainLength) {
          remainLines = [].concat(_toConsumableArray(lines.slice(0, i)), [remainLength - sum]);
          break;
        }
      }
      var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
      return [].concat(_toConsumableArray(Line2.repeat(lines, count)), _toConsumableArray(remainLines), emptyLines).map(function(line) {
        return "".concat(line, "px");
      }).join(", ");
    });
    _defineProperty(_this, "id", uniqueId("recharts-line-"));
    _defineProperty(_this, "pathRef", function(node) {
      _this.mainCurve = node;
    });
    _defineProperty(_this, "handleAnimationEnd", function() {
      _this.setState({
        isAnimationFinished: true
      });
      if (_this.props.onAnimationEnd) {
        _this.props.onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      _this.setState({
        isAnimationFinished: false
      });
      if (_this.props.onAnimationStart) {
        _this.props.onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(Line2, _PureComponent);
  return _createClass(Line2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.isAnimationActive) {
        return;
      }
      var totalLength = this.getTotalLength();
      this.setState({
        totalLength
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.isAnimationActive) {
        return;
      }
      var totalLength = this.getTotalLength();
      if (totalLength !== this.state.totalLength) {
        this.setState({
          totalLength
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      var curveDom = this.mainCurve;
      try {
        return curveDom && curveDom.getTotalLength && curveDom.getTotalLength() || 0;
      } catch (err) {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar(needClip, clipPathId) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, points = _this$props.points, xAxis = _this$props.xAxis, yAxis = _this$props.yAxis, layout = _this$props.layout, children = _this$props.children;
      var errorBarItems = findAllByType(children, ErrorBar);
      if (!errorBarItems) {
        return null;
      }
      var dataPointFormatter = function dataPointFormatter2(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint.payload, dataKey)
        };
      };
      var errorBarProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ o.createElement(Layer, errorBarProps, errorBarItems.map(function(item) {
        return /* @__PURE__ */ o.cloneElement(item, {
          key: "bar-".concat(item.props.dataKey),
          data: points,
          xAxis,
          yAxis,
          layout,
          dataPointFormatter
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function renderDots(needClip, clipDot, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props2 = this.props, dot = _this$props2.dot, points = _this$props2.points, dataKey = _this$props2.dataKey;
      var lineProps = filterProps(this.props, false);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, lineProps), customDotProps), {}, {
          index: i,
          cx: entry.x,
          cy: entry.y,
          value: entry.value,
          dataKey,
          payload: entry.payload,
          points
        });
        return Line2.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ o.createElement(Layer, _extends({
        className: "recharts-line-dots",
        key: "dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderCurveStatically",
    value: function renderCurveStatically(points, needClip, clipPathId, props) {
      var _this$props3 = this.props, type = _this$props3.type, layout = _this$props3.layout, connectNulls = _this$props3.connectNulls;
      _this$props3.ref;
      var others = _objectWithoutProperties(_this$props3, _excluded);
      var curveProps = _objectSpread(_objectSpread(_objectSpread({}, filterProps(others, true)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null,
        points
      }, props), {}, {
        type,
        layout,
        connectNulls
      });
      return /* @__PURE__ */ o.createElement(Curve, _extends({}, curveProps, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function renderCurveWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props4 = this.props, points = _this$props4.points, strokeDasharray = _this$props4.strokeDasharray, isAnimationActive = _this$props4.isAnimationActive, animationBegin = _this$props4.animationBegin, animationDuration = _this$props4.animationDuration, animationEasing = _this$props4.animationEasing, animationId = _this$props4.animationId, animateNewValues = _this$props4.animateNewValues, width = _this$props4.width, height = _this$props4.height;
      var _this$state = this.state, prevPoints = _this$state.prevPoints, totalLength = _this$state.totalLength;
      return /* @__PURE__ */ o.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepData = points.map(function(entry, index) {
            var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
            if (prevPoints[prevPointIndex]) {
              var prev = prevPoints[prevPointIndex];
              var interpolatorX = interpolateNumber(prev.x, entry.x);
              var interpolatorY = interpolateNumber(prev.y, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: interpolatorX(t),
                y: interpolatorY(t)
              });
            }
            if (animateNewValues) {
              var _interpolatorX = interpolateNumber(width * 2, entry.x);
              var _interpolatorY = interpolateNumber(height / 2, entry.y);
              return _objectSpread(_objectSpread({}, entry), {}, {
                x: _interpolatorX(t),
                y: _interpolatorY(t)
              });
            }
            return _objectSpread(_objectSpread({}, entry), {}, {
              x: entry.x,
              y: entry.y
            });
          });
          return _this2.renderCurveStatically(stepData, needClip, clipPathId);
        }
        var interpolator = interpolateNumber(0, totalLength);
        var curLength = interpolator(t);
        var currentStrokeDasharray;
        if (strokeDasharray) {
          var lines = "".concat(strokeDasharray).split(/[,\s]+/gim).map(function(num) {
            return parseFloat(num);
          });
          currentStrokeDasharray = _this2.getStrokeDasharray(curLength, totalLength, lines);
        } else {
          currentStrokeDasharray = _this2.generateSimpleStrokeDasharray(totalLength, curLength);
        }
        return _this2.renderCurveStatically(points, needClip, clipPathId, {
          strokeDasharray: currentStrokeDasharray
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function renderCurve(needClip, clipPathId) {
      var _this$props5 = this.props, points = _this$props5.points, isAnimationActive = _this$props5.isAnimationActive;
      var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !isEqual(prevPoints, points))) {
        return this.renderCurveWithAnimation(needClip, clipPathId);
      }
      return this.renderCurveStatically(points, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;
      var _this$props6 = this.props, hide = _this$props6.hide, dot = _this$props6.dot, points = _this$props6.points, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, top = _this$props6.top, left = _this$props6.left, width = _this$props6.width, height = _this$props6.height, isAnimationActive = _this$props6.isAnimationActive, id = _this$props6.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = clsx("recharts-line", className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = isNil(id) ? this.id : id;
      var _ref2 = (_filterProps = filterProps(dot, false)) !== null && _filterProps !== void 0 ? _filterProps : {
        r: 3,
        strokeWidth: 2
      }, _ref2$r = _ref2.r, r = _ref2$r === void 0 ? 3 : _ref2$r, _ref2$strokeWidth = _ref2.strokeWidth, strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
      var _ref3 = hasClipDot(dot) ? dot : {}, _ref3$clipDot = _ref3.clipDot, clipDot = _ref3$clipDot === void 0 ? true : _ref3$clipDot;
      var dotSize = r * 2 + strokeWidth;
      return /* @__PURE__ */ o.createElement(Layer, {
        className: layerClass
      }, needClipX || needClipY ? /* @__PURE__ */ o.createElement("defs", null, /* @__PURE__ */ o.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ o.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      })), !clipDot && /* @__PURE__ */ o.createElement("clipPath", {
        id: "clipPath-dots-".concat(clipPathId)
      }, /* @__PURE__ */ o.createElement("rect", {
        x: left - dotSize / 2,
        y: top - dotSize / 2,
        width: width + dotSize,
        height: height + dotSize
      }))) : null, !hasSinglePoint && this.renderCurve(needClip, clipPathId), this.renderErrorBar(needClip, clipPathId), (hasSinglePoint || dot) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }, {
    key: "repeat",
    value: function repeat(lines, count) {
      var linesUnit = lines.length % 2 !== 0 ? [].concat(_toConsumableArray(lines), [0]) : lines;
      var result = [];
      for (var i = 0; i < count; ++i) {
        result = [].concat(_toConsumableArray(result), _toConsumableArray(linesUnit));
      }
      return result;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;
      if (/* @__PURE__ */ o.isValidElement(option)) {
        dotItem = /* @__PURE__ */ o.cloneElement(option, props);
      } else if (isFunction(option)) {
        dotItem = option(props);
      } else {
        var key = props.key, dotProps = _objectWithoutProperties(props, _excluded2);
        var className = clsx("recharts-line-dot", typeof option !== "boolean" ? option.className : "");
        dotItem = /* @__PURE__ */ o.createElement(Dot, _extends({
          key
        }, dotProps, {
          className
        }));
      }
      return dotItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty(Line, "displayName", "Line");
_defineProperty(Line, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: false,
  activeDot: true,
  dot: true,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Global.isSsr,
  animateNewValues: true,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: false,
  label: false
});
_defineProperty(Line, "getComposedData", function(_ref4) {
  var props = _ref4.props, xAxis = _ref4.xAxis, yAxis = _ref4.yAxis, xAxisTicks = _ref4.xAxisTicks, yAxisTicks = _ref4.yAxisTicks, dataKey = _ref4.dataKey, bandSize = _ref4.bandSize, displayedData = _ref4.displayedData, offset = _ref4.offset;
  var layout = props.layout;
  var points = displayedData.map(function(entry, index) {
    var value = getValueByDataKey(entry, dataKey);
    if (layout === "horizontal") {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          entry,
          index
        }),
        y: isNil(value) ? null : yAxis.scale(value),
        value,
        payload: entry
      };
    }
    return {
      x: isNil(value) ? null : xAxis.scale(value),
      y: getCateCoordinateOfLine({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        entry,
        index
      }),
      value,
      payload: entry
    };
  });
  return _objectSpread({
    points,
    layout
  }, offset);
});
var LineChart = generateCategoricalChart({
  chartName: "LineChart",
  GraphicalChild: Line,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger2, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
function usePriceHistory(cardId) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["price-history", cardId],
    queryFn: async () => {
      if (!actor) return [];
      return getPriceHistory(actor, cardId);
    },
    enabled: !!actor && !isFetching && !!cardId
  });
}
function formatCurrency(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(n);
}
function formatDate(ts) {
  return new Date(ts).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
function formatShortDate(ts) {
  return new Date(ts).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}
function ChartTooltip({
  active,
  payload,
  label
}) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-lg shadow-md px-3 py-2 text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-mono font-semibold mt-0.5", children: formatCurrency(payload[0].value) })
  ] });
}
function PriceEntryForm({ cardId }) {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  const [value, setValue] = reactExports.useState("");
  const [note, setNote] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const num = Number(value);
    if (!value || Number.isNaN(num) || num < 0) {
      setError("Enter a valid positive value");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await addPriceEntry(actor, cardId, num, note.trim() || void 0);
      qc.invalidateQueries({ queryKey: ["price-history", cardId] });
      qc.invalidateQueries({ queryKey: ["cards", cardId] });
      qc.invalidateQueries({ queryKey: ["cards"] });
      setValue("");
      setNote("");
      ue.success("Price entry added");
    } catch {
      setError("Failed to add price entry. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "space-y-3",
      "data-ocid": "price_entry.form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "pe-value", className: "text-sm font-medium", children: [
              "Estimated Value ($) ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "pe-value",
                type: "number",
                step: "0.01",
                min: 0,
                placeholder: "0.00",
                value,
                onChange: (e) => setValue(e.target.value),
                className: error ? "border-destructive" : "",
                "data-ocid": "price_entry.value.input"
              }
            ),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs text-destructive",
                "data-ocid": "price_entry.value.field_error",
                children: error
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "pe-note", className: "text-sm font-medium", children: [
              "Note",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs font-normal", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "pe-note",
                placeholder: "e.g. PSA graded, auction sale",
                value: note,
                onChange: (e) => setNote(e.target.value),
                "data-ocid": "price_entry.note.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            size: "sm",
            disabled: loading,
            className: "gap-1.5",
            "data-ocid": "price_entry.submit_button",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "flex items-center gap-2",
                "data-ocid": "price_entry.loading_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
                  "Adding…"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5" }),
              "Add Entry"
            ] })
          }
        ) })
      ]
    }
  );
}
function DetailSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6",
      "data-ocid": "card_detail.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-32" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: ["a", "b", "c", "d"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-xl" })
      ]
    }
  );
}
function CardDetailPage() {
  const { cardId } = useParams({ from: "/layout/cards/$cardId" });
  const navigate = useNavigate();
  const cardIdNum = Number(cardId);
  const {
    data: card,
    isLoading: cardLoading,
    isError: cardError
  } = useCard(cardIdNum);
  const { data: history = [], isLoading: histLoading } = usePriceHistory(cardIdNum);
  const deleteCard = useDeleteCard();
  const sortedAsc = [...history].sort((a, b) => a.date - b.date);
  const chartData = sortedAsc.map((entry) => ({
    date: formatShortDate(entry.date),
    value: entry.estimatedValue
  }));
  const sortedHistory = [...history].sort((a, b) => b.date - a.date);
  async function handleDelete() {
    await deleteCard.mutateAsync(cardIdNum);
    ue.success("Card deleted");
    navigate({ to: "/cards" });
  }
  if (cardLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx(DetailSkeleton, {});
  if (cardError || !card) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center space-y-4",
        "data-ocid": "card_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-semibold text-foreground", children: "Card not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This card may have been removed or the link is invalid." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => navigate({ to: "/cards" }), children: "Back to Portfolio" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6",
      "data-ocid": "card_detail.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "gap-1.5 text-muted-foreground -ml-2",
              onClick: () => navigate({ to: "/cards" }),
              "data-ocid": "card_detail.back_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Portfolio"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "gap-1.5",
                onClick: () => navigate({ to: "/cards/$cardId/edit", params: { cardId } }),
                "data-ocid": "card_detail.edit_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "w-3.5 h-3.5" }),
                  "Edit"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/5",
                  "data-ocid": "card_detail.delete_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }),
                    "Delete"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { "data-ocid": "card_detail.dialog", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete this card?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                    "This will permanently remove",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                      card.playerName,
                      " (",
                      card.year,
                      ")"
                    ] }),
                    " ",
                    "and all its price history. This action cannot be undone."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "card_detail.cancel_button", children: "Cancel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDialogAction,
                    {
                      className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                      onClick: handleDelete,
                      "data-ocid": "card_detail.confirm_button",
                      children: deleteCard.isPending ? "Deleting…" : "Delete Card"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-card border border-border/60 shadow-subtle p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: card.sport }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionBadge, { condition: card.condition })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground tracking-tight", children: card.playerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              card.year,
              " · ",
              card.team
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start sm:items-end gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide font-medium", children: "Current Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display font-bold text-foreground", children: formatCurrency(card.currentValue) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              GainLossBadge,
              {
                purchasePrice: card.purchasePrice,
                currentValue: card.currentValue,
                showAmount: true
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          {
            icon: DollarSign,
            label: "Purchase Price",
            value: formatCurrency(card.purchasePrice),
            key: "purchase"
          },
          {
            icon: Tag,
            label: "Est. Value",
            value: formatCurrency(card.currentValue),
            key: "value"
          },
          {
            icon: Trophy,
            label: "Condition",
            value: card.condition === "NearMint" ? "Near Mint" : card.condition,
            key: "condition"
          },
          {
            icon: Calendar,
            label: "Date Added",
            value: formatDate(card.dateAdded),
            key: "date"
          }
        ].map(({ icon: Icon, label, value, key }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl bg-card border border-border/60 shadow-subtle p-4 space-y-1.5",
            "data-ocid": `card_detail.${key}.card`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wide", children: label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold text-foreground truncate", children: value })
            ]
          },
          key
        )) }),
        card.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 shadow-subtle", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Notes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: card.notes }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "border-border/60 shadow-subtle",
            "data-ocid": "card_detail.chart.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-semibold text-foreground", children: "Price History" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5", children: histLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Skeleton,
                {
                  className: "h-48 w-full",
                  "data-ocid": "card_detail.chart.loading_state"
                }
              ) : chartData.length < 2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-48 flex flex-col items-center justify-center text-center gap-2",
                  "data-ocid": "card_detail.chart.empty_state",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add at least two price entries to see the chart." })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                LineChart,
                {
                  data: chartData,
                  margin: { top: 4, right: 12, left: 8, bottom: 4 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        stroke: "oklch(0.92 0.004 264)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "date",
                        tick: {
                          fontSize: 11,
                          fill: "oklch(0.55 0.02 264)"
                        },
                        tickLine: false,
                        axisLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tickFormatter: (v) => v >= 1e3 ? `$${(v / 1e3).toFixed(0)}k` : `$${v}`,
                        tick: {
                          fontSize: 11,
                          fill: "oklch(0.55 0.02 264)"
                        },
                        tickLine: false,
                        axisLine: false,
                        width: 52
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Line,
                      {
                        type: "monotone",
                        dataKey: "value",
                        stroke: "oklch(var(--primary))",
                        strokeWidth: 2,
                        dot: { fill: "oklch(var(--primary))", r: 3 },
                        activeDot: { r: 5 }
                      }
                    )
                  ]
                }
              ) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "border-border/60 shadow-subtle",
            "data-ocid": "card_detail.price_log.card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold text-foreground", children: [
                "Price Log",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs text-muted-foreground font-normal", children: [
                  "(",
                  history.length,
                  " ",
                  history.length === 1 ? "entry" : "entries",
                  ")"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 border border-border/40 p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Add Price Entry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(PriceEntryForm, { cardId: cardIdNum })
                ] }),
                histLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "space-y-2",
                    "data-ocid": "card_detail.price_log.loading_state",
                    children: ["a", "b", "c"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full rounded-lg" }, k))
                  }
                ) : sortedHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "py-8 text-center text-sm text-muted-foreground",
                    "data-ocid": "card_detail.price_log.empty_state",
                    children: "No price entries yet. Add your first entry above."
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", "data-ocid": "card_detail.price_log.list", children: sortedHistory.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between rounded-lg border border-border/40 bg-card px-4 py-3 gap-3",
                    "data-ocid": `card_detail.price_log.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono whitespace-nowrap", children: formatDate(entry.date) }),
                        entry.note && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground truncate", children: entry.note })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-foreground whitespace-nowrap", children: formatCurrency(entry.estimatedValue) })
                    ]
                  },
                  entry.id
                )) })
              ] })
            ]
          }
        )
      ]
    }
  );
}
export {
  CardDetailPage as default
};
