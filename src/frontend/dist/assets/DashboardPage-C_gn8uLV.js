import { j as jsxRuntimeExports, c as cn, o, a as clsx, r as reactExports, B as Button, L as Link, C as CirclePlus, b as CreditCard, W as Wallet, T as TrendingUp, S as Skeleton, m as motion, u as useNavigate } from "./index-DeryHgS0.js";
import { G as GainLossBadge, C as ConditionBadge } from "./GainLossBadge-j68JUyYw.js";
import { f as filterProps, L as Layer, m as max, i as isNumber, C as Curve, A as Animate, a as interpolateNumber, b as isNil, c as isNan, d as isEqual, h as hasClipDot, e as LabelList, u as uniqueId, g as isFunction, G as Global, j as getValueByDataKey, k as getCateCoordinateOfLine, D as Dot, l as generateCategoricalChart, X as XAxis, Y as YAxis, n as formatAxisMap, o as DollarSign, B as Badge, R as ResponsiveContainer, p as CartesianGrid, T as Tooltip } from "./generateCategoricalChart-Dr54BYy8.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-BODN1vU_.js";
import { u as useActor, a as useQuery, c as createActor, g as getPortfolioStats, b as getPortfolioHistory, d as useCards } from "./useCards-sQAGuqe2.js";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function usePortfolioStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["portfolio", "stats"],
    queryFn: async () => {
      if (!actor)
        return { totalCards: 0, totalCost: 0, totalValue: 0, gainLoss: 0 };
      return getPortfolioStats(actor);
    },
    enabled: !!actor && !isFetching
  });
}
function usePortfolioHistory() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["portfolio", "history"],
    queryFn: async () => {
      if (!actor) return [];
      return getPortfolioHistory(actor);
    },
    enabled: !!actor && !isFetching
  });
}
var _excluded = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], _excluded2 = ["key"];
var _Area;
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
var Area = /* @__PURE__ */ function(_PureComponent) {
  function Area2() {
    var _this;
    _classCallCheck(this, Area2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Area2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: true
    });
    _defineProperty(_this, "id", uniqueId("recharts-area-"));
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    return _this;
  }
  _inherits(Area2, _PureComponent);
  return _createClass(Area2, [{
    key: "renderDots",
    value: function renderDots(needClip, clipDot, clipPathId) {
      var isAnimationActive = this.props.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (isAnimationActive && !isAnimationFinished) {
        return null;
      }
      var _this$props = this.props, dot = _this$props.dot, points = _this$props.points, dataKey = _this$props.dataKey;
      var areaProps = filterProps(this.props, false);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, areaProps), customDotProps), {}, {
          index: i,
          cx: entry.x,
          cy: entry.y,
          dataKey,
          value: entry.value,
          payload: entry.payload,
          points
        });
        return Area2.renderDotItem(dot, dotProps);
      });
      var dotsProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ o.createElement(Layer, _extends({
        className: "recharts-area-dots"
      }, dotsProps), dots);
    }
  }, {
    key: "renderHorizontalRect",
    value: function renderHorizontalRect(alpha) {
      var _this$props2 = this.props, baseLine = _this$props2.baseLine, points = _this$props2.points, strokeWidth = _this$props2.strokeWidth;
      var startX = points[0].x;
      var endX = points[points.length - 1].x;
      var width = alpha * Math.abs(startX - endX);
      var maxY = max(points.map(function(entry) {
        return entry.y || 0;
      }));
      if (isNumber(baseLine) && typeof baseLine === "number") {
        maxY = Math.max(baseLine, maxY);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxY = Math.max(max(baseLine.map(function(entry) {
          return entry.y || 0;
        })), maxY);
      }
      if (isNumber(maxY)) {
        return /* @__PURE__ */ o.createElement("rect", {
          x: startX < endX ? startX : startX - width,
          y: 0,
          width,
          height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
        });
      }
      return null;
    }
  }, {
    key: "renderVerticalRect",
    value: function renderVerticalRect(alpha) {
      var _this$props3 = this.props, baseLine = _this$props3.baseLine, points = _this$props3.points, strokeWidth = _this$props3.strokeWidth;
      var startY = points[0].y;
      var endY = points[points.length - 1].y;
      var height = alpha * Math.abs(startY - endY);
      var maxX = max(points.map(function(entry) {
        return entry.x || 0;
      }));
      if (isNumber(baseLine) && typeof baseLine === "number") {
        maxX = Math.max(baseLine, maxX);
      } else if (baseLine && Array.isArray(baseLine) && baseLine.length) {
        maxX = Math.max(max(baseLine.map(function(entry) {
          return entry.x || 0;
        })), maxX);
      }
      if (isNumber(maxX)) {
        return /* @__PURE__ */ o.createElement("rect", {
          x: 0,
          y: startY < endY ? startY : startY - height,
          width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
          height: Math.floor(height)
        });
      }
      return null;
    }
  }, {
    key: "renderClipRect",
    value: function renderClipRect(alpha) {
      var layout = this.props.layout;
      if (layout === "vertical") {
        return this.renderVerticalRect(alpha);
      }
      return this.renderHorizontalRect(alpha);
    }
  }, {
    key: "renderAreaStatically",
    value: function renderAreaStatically(points, baseLine, needClip, clipPathId) {
      var _this$props4 = this.props, layout = _this$props4.layout, type = _this$props4.type, stroke = _this$props4.stroke, connectNulls = _this$props4.connectNulls, isRange = _this$props4.isRange;
      _this$props4.ref;
      var others = _objectWithoutProperties(_this$props4, _excluded);
      return /* @__PURE__ */ o.createElement(Layer, {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, /* @__PURE__ */ o.createElement(Curve, _extends({}, filterProps(others, true), {
        points,
        connectNulls,
        type,
        baseLine,
        layout,
        stroke: "none",
        className: "recharts-area-area"
      })), stroke !== "none" && /* @__PURE__ */ o.createElement(Curve, _extends({}, filterProps(this.props, false), {
        className: "recharts-area-curve",
        layout,
        type,
        connectNulls,
        fill: "none",
        points
      })), stroke !== "none" && isRange && /* @__PURE__ */ o.createElement(Curve, _extends({}, filterProps(this.props, false), {
        className: "recharts-area-curve",
        layout,
        type,
        connectNulls,
        fill: "none",
        points: baseLine
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function renderAreaWithAnimation(needClip, clipPathId) {
      var _this2 = this;
      var _this$props5 = this.props, points = _this$props5.points, baseLine = _this$props5.baseLine, isAnimationActive = _this$props5.isAnimationActive, animationBegin = _this$props5.animationBegin, animationDuration = _this$props5.animationDuration, animationEasing = _this$props5.animationEasing, animationId = _this$props5.animationId;
      var _this$state = this.state, prevPoints = _this$state.prevPoints, prevBaseLine = _this$state.prevBaseLine;
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
        key: "area-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        if (prevPoints) {
          var prevPointsDiffFactor = prevPoints.length / points.length;
          var stepPoints = points.map(function(entry, index) {
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
            return entry;
          });
          var stepBaseLine;
          if (isNumber(baseLine) && typeof baseLine === "number") {
            var interpolator = interpolateNumber(prevBaseLine, baseLine);
            stepBaseLine = interpolator(t);
          } else if (isNil(baseLine) || isNan(baseLine)) {
            var _interpolator = interpolateNumber(prevBaseLine, 0);
            stepBaseLine = _interpolator(t);
          } else {
            stepBaseLine = baseLine.map(function(entry, index) {
              var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
              if (prevBaseLine[prevPointIndex]) {
                var prev = prevBaseLine[prevPointIndex];
                var interpolatorX = interpolateNumber(prev.x, entry.x);
                var interpolatorY = interpolateNumber(prev.y, entry.y);
                return _objectSpread(_objectSpread({}, entry), {}, {
                  x: interpolatorX(t),
                  y: interpolatorY(t)
                });
              }
              return entry;
            });
          }
          return _this2.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
        }
        return /* @__PURE__ */ o.createElement(Layer, null, /* @__PURE__ */ o.createElement("defs", null, /* @__PURE__ */ o.createElement("clipPath", {
          id: "animationClipPath-".concat(clipPathId)
        }, _this2.renderClipRect(t))), /* @__PURE__ */ o.createElement(Layer, {
          clipPath: "url(#animationClipPath-".concat(clipPathId, ")")
        }, _this2.renderAreaStatically(points, baseLine, needClip, clipPathId)));
      });
    }
  }, {
    key: "renderArea",
    value: function renderArea(needClip, clipPathId) {
      var _this$props6 = this.props, points = _this$props6.points, baseLine = _this$props6.baseLine, isAnimationActive = _this$props6.isAnimationActive;
      var _this$state2 = this.state, prevPoints = _this$state2.prevPoints, prevBaseLine = _this$state2.prevBaseLine, totalLength = _this$state2.totalLength;
      if (isAnimationActive && points && points.length && (!prevPoints && totalLength > 0 || !isEqual(prevPoints, points) || !isEqual(prevBaseLine, baseLine))) {
        return this.renderAreaWithAnimation(needClip, clipPathId);
      }
      return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
    }
  }, {
    key: "render",
    value: function render() {
      var _filterProps;
      var _this$props7 = this.props, hide = _this$props7.hide, dot = _this$props7.dot, points = _this$props7.points, className = _this$props7.className, top = _this$props7.top, left = _this$props7.left, xAxis = _this$props7.xAxis, yAxis = _this$props7.yAxis, width = _this$props7.width, height = _this$props7.height, isAnimationActive = _this$props7.isAnimationActive, id = _this$props7.id;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var hasSinglePoint = points.length === 1;
      var layerClass = clsx("recharts-area", className);
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
      }))) : null, !hasSinglePoint ? this.renderArea(needClip, clipPathId) : null, (dot || hasSinglePoint) && this.renderDots(needClip, clipDot, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine,
          prevPoints: prevState.curPoints,
          prevBaseLine: prevState.curBaseLine
        };
      }
      if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
        return {
          curPoints: nextProps.points,
          curBaseLine: nextProps.baseLine
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_Area = Area;
_defineProperty(Area, "displayName", "Area");
_defineProperty(Area, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: false,
  // points of area
  points: [],
  dot: false,
  activeDot: true,
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
_defineProperty(Area, "getBaseValue", function(props, item, xAxis, yAxis) {
  var layout = props.layout, chartBaseValue = props.baseValue;
  var itemBaseValue = item.props.baseValue;
  var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
  if (isNumber(baseValue) && typeof baseValue === "number") {
    return baseValue;
  }
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === "number") {
    var domainMax = Math.max(domain[0], domain[1]);
    var domainMin = Math.min(domain[0], domain[1]);
    if (baseValue === "dataMin") {
      return domainMin;
    }
    if (baseValue === "dataMax") {
      return domainMax;
    }
    return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
  }
  if (baseValue === "dataMin") {
    return domain[0];
  }
  if (baseValue === "dataMax") {
    return domain[1];
  }
  return domain[0];
});
_defineProperty(Area, "getComposedData", function(_ref4) {
  var props = _ref4.props, item = _ref4.item, xAxis = _ref4.xAxis, yAxis = _ref4.yAxis, xAxisTicks = _ref4.xAxisTicks, yAxisTicks = _ref4.yAxisTicks, bandSize = _ref4.bandSize, dataKey = _ref4.dataKey, stackedData = _ref4.stackedData, dataStartIndex = _ref4.dataStartIndex, displayedData = _ref4.displayedData, offset = _ref4.offset;
  var layout = props.layout;
  var hasStack = stackedData && stackedData.length;
  var baseValue = _Area.getBaseValue(props, item, xAxis, yAxis);
  var isHorizontalLayout = layout === "horizontal";
  var isRange = false;
  var points = displayedData.map(function(entry, index) {
    var value;
    if (hasStack) {
      value = stackedData[dataStartIndex + index];
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      } else {
        isRange = true;
      }
    }
    var isBreakPoint = value[1] == null || hasStack && getValueByDataKey(entry, dataKey) == null;
    if (isHorizontalLayout) {
      return {
        x: getCateCoordinateOfLine({
          axis: xAxis,
          ticks: xAxisTicks,
          bandSize,
          entry,
          index
        }),
        y: isBreakPoint ? null : yAxis.scale(value[1]),
        value,
        payload: entry
      };
    }
    return {
      x: isBreakPoint ? null : xAxis.scale(value[1]),
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
  var baseLine;
  if (hasStack || isRange) {
    baseLine = points.map(function(entry) {
      var x = Array.isArray(entry.value) ? entry.value[0] : null;
      if (isHorizontalLayout) {
        return {
          x: entry.x,
          y: x != null && entry.y != null ? yAxis.scale(x) : null
        };
      }
      return {
        x: x != null ? xAxis.scale(x) : null,
        y: entry.y
      };
    });
  } else {
    baseLine = isHorizontalLayout ? yAxis.scale(baseValue) : xAxis.scale(baseValue);
  }
  return _objectSpread({
    points,
    baseLine,
    layout,
    isRange
  }, offset);
});
_defineProperty(Area, "renderDotItem", function(option, props) {
  var dotItem;
  if (/* @__PURE__ */ o.isValidElement(option)) {
    dotItem = /* @__PURE__ */ o.cloneElement(option, props);
  } else if (isFunction(option)) {
    dotItem = option(props);
  } else {
    var className = clsx("recharts-area-dot", typeof option !== "boolean" ? option.className : "");
    var key = props.key, rest = _objectWithoutProperties(props, _excluded2);
    dotItem = /* @__PURE__ */ o.createElement(Dot, _extends({}, rest, {
      key,
      className
    }));
  }
  return dotItem;
});
var AreaChart = generateCategoricalChart({
  chartName: "AreaChart",
  GraphicalChild: Area,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
function formatCurrency(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(n);
}
function formatDateFromTs(ts) {
  const ms = ts > 1e12 ? ts / 1e6 : ts;
  return new Date(ms).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}
function StatCard({ label, value, sub, icon, delay = 0, ocid }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, delay, ease: [0.4, 0, 0.2, 1] },
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-subtle hover:shadow-md transition-smooth h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-5 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-foreground leading-tight truncate", children: value }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: sub })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg p-2.5 bg-primary/10 text-primary shrink-0 mt-0.5", children: icon })
      ] }) }) })
    }
  );
}
function StatsSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
      "data-ocid": "dashboard.stats.loading_state",
      children: ["sk-a", "sk-b", "sk-c", "sk-d"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5 px-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-24 mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-32" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20 mt-2.5" })
      ] }) }, k))
    }
  );
}
function ChartSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-subtle", "data-ocid": "dashboard.chart.loading_state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-52" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-60 w-full rounded-lg" }) })
  ] });
}
function TableSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Card,
    {
      className: "shadow-subtle",
      "data-ocid": "dashboard.top-cards.loading_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-44" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: ["sk-r1", "sk-r2", "sk-r3", "sk-r4", "sk-r5"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-4 px-5 py-3 border-b border-border last:border-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16" })
            ]
          },
          k
        )) })
      ]
    }
  );
}
function ChartTooltip({ active, payload, label }) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg shadow-md px-3.5 py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-0.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base text-foreground", children: formatCurrency(payload[0].value) })
  ] });
}
const SAMPLE_HISTORY = [
  { date: 17040672e5, totalValue: 11200 },
  { date: 17067456e5, totalValue: 14800 },
  { date: 17092512e5, totalValue: 13500 },
  { date: 17119296e5, totalValue: 19200 },
  { date: 17145216e5, totalValue: 23700 },
  { date: 17172e8, totalValue: 31400 }
];
function PortfolioChart({ history, isEmpty }) {
  var _a, _b;
  const source = isEmpty || history.length === 0 ? SAMPLE_HISTORY : history;
  const chartData = source.map((snap) => ({
    date: formatDateFromTs(snap.date),
    value: snap.totalValue
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 22 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.3 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-subtle", "data-ocid": "dashboard.chart.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-lg font-semibold", children: "Portfolio Value Trend" }),
            isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-[10px] text-muted-foreground",
                children: "Sample data"
              }
            )
          ] }),
          chartData.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
            (_a = chartData[0]) == null ? void 0 : _a.date,
            " → ",
            (_b = chartData[chartData.length - 1]) == null ? void 0 : _b.date
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 228, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          AreaChart,
          {
            data: chartData,
            margin: { top: 4, right: 6, left: 0, bottom: 0 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "cvGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: "oklch(0.52 0.16 142)",
                    stopOpacity: 0.28
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "92%",
                    stopColor: "oklch(0.52 0.16 142)",
                    stopOpacity: 0
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "oklch(0.88 0.01 0 / 0.8)",
                  vertical: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                XAxis,
                {
                  dataKey: "date",
                  tick: { fontSize: 11, fill: "oklch(0.52 0.02 0)" },
                  axisLine: false,
                  tickLine: false,
                  tickMargin: 8
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tickFormatter: (v) => v >= 1e3 ? `$${(v / 1e3).toFixed(0)}k` : `$${v}`,
                  tick: { fontSize: 11, fill: "oklch(0.52 0.02 0)" },
                  axisLine: false,
                  tickLine: false,
                  width: 50
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartTooltip, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "value",
                  stroke: "oklch(0.52 0.16 142)",
                  strokeWidth: 2.5,
                  fill: "url(#cvGradient)",
                  dot: false,
                  activeDot: {
                    r: 4,
                    strokeWidth: 0,
                    fill: "oklch(0.52 0.16 142)"
                  }
                }
              )
            ]
          }
        ) }) })
      ] })
    }
  );
}
function TopCardsTable({ cards }) {
  const top5 = [...cards].sort((a, b) => b.currentValue - a.currentValue).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 22 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.45 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-subtle", "data-ocid": "top-cards.card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-lg font-semibold", children: "Top 5 Most Valuable Cards" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              asChild: true,
              "data-ocid": "top-cards.view-all-button",
              className: "text-primary text-sm font-semibold hover:text-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cards", children: "View all →" })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-transparent border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "pl-5 w-10 text-[10px] uppercase tracking-wider", children: "#" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[10px] uppercase tracking-wider", children: "Player / Card" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[10px] uppercase tracking-wider hidden sm:table-cell", children: "Condition" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[10px] uppercase tracking-wider text-right", children: "Cost" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[10px] uppercase tracking-wider text-right", children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-[10px] uppercase tracking-wider text-right pr-5", children: "G / L" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: top5.map((card, idx) => {
            const rank = idx + 1;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                className: "cursor-pointer hover:bg-muted/40 transition-colors",
                "data-ocid": `top-cards.item.${rank}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "pl-5 text-xs text-muted-foreground font-mono w-10 py-4", children: rank }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/cards/$cardId",
                      params: { cardId: String(card.id) },
                      className: "block",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-foreground truncate max-w-[180px] block hover:text-primary transition-colors", children: card.playerName }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                          card.year,
                          " · ",
                          card.sport,
                          " · ",
                          card.team
                        ] })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "py-4 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionBadge, { condition: card.condition }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right text-sm font-mono text-muted-foreground py-4", children: formatCurrency(card.purchasePrice) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right font-display font-bold text-sm text-foreground py-4", children: formatCurrency(card.currentValue) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right pr-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    GainLossBadge,
                    {
                      purchasePrice: card.purchasePrice,
                      currentValue: card.currentValue
                    }
                  ) })
                ]
              },
              card.id
            );
          }) })
        ] }) })
      ] })
    }
  );
}
function EmptyState() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.97 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4 },
      className: "flex flex-col items-center justify-center py-24 px-6 text-center",
      "data-ocid": "dashboard.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-10 h-10 text-primary", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Your collection is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm text-sm leading-relaxed mb-8", children: "Start tracking the value of your sports card portfolio. Add your first card to see live price insights, portfolio analytics, and performance trends." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "lg",
            onClick: () => navigate({ to: "/cards/new" }),
            "data-ocid": "dashboard.add-first-card-button",
            className: "gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-4 h-4" }),
              "Add Your First Card"
            ]
          }
        )
      ]
    }
  );
}
function DashboardPage() {
  const { data: stats, isLoading: statsLoading } = usePortfolioStats();
  const { data: history, isLoading: historyLoading } = usePortfolioHistory();
  const { data: cards, isLoading: cardsLoading } = useCards();
  const isEmpty = !statsLoading && !cardsLoading && (!cards || cards.length === 0);
  const gainPositive = ((stats == null ? void 0 : stats.gainLoss) ?? 0) >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col gap-7 py-7 px-4 sm:px-6 max-w-7xl mx-auto w-full",
      "data-ocid": "dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground tracking-tight", children: "Portfolio Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Track the value and performance of your sports card collection" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "gap-2 hidden sm:flex",
              "data-ocid": "dashboard.add-card-button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cards/new", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-4 h-4" }),
                "Add Card"
              ] })
            }
          )
        ] }),
        statsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSkeleton, {}) : !isEmpty ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
            "data-ocid": "dashboard.stats.section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  ocid: "dashboard.stat.total-cards",
                  label: "Total Cards",
                  delay: 0,
                  value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tabular-nums", children: (stats == null ? void 0 : stats.totalCards) ?? 0 }),
                  sub: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "in your collection" }),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-5 h-5", strokeWidth: 1.8 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  ocid: "dashboard.stat.total-cost",
                  label: "Total Cost",
                  delay: 0.08,
                  value: formatCurrency((stats == null ? void 0 : stats.totalCost) ?? 0),
                  sub: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "purchase price" }),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-5 h-5", strokeWidth: 1.8 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  ocid: "dashboard.stat.current-value",
                  label: "Current Value",
                  delay: 0.16,
                  value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatCurrency((stats == null ? void 0 : stats.totalValue) ?? 0) }),
                  sub: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "market estimate" }),
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-5 h-5", strokeWidth: 1.8 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StatCard,
                {
                  ocid: "dashboard.stat.gain-loss",
                  label: "Total Gain / Loss",
                  delay: 0.24,
                  value: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: gainPositive ? "text-[oklch(0.52_0.16_142)]" : "text-destructive",
                      children: [
                        gainPositive ? "+" : "",
                        formatCurrency((stats == null ? void 0 : stats.gainLoss) ?? 0)
                      ]
                    }
                  ),
                  sub: stats ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    GainLossBadge,
                    {
                      purchasePrice: stats.totalCost,
                      currentValue: stats.totalValue,
                      showAmount: false
                    }
                  ) : null,
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5", strokeWidth: 1.8 })
                }
              )
            ]
          }
        ) : null,
        isEmpty && /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}),
        historyLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChartSkeleton, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioChart, { history: history ?? [], isEmpty }),
        cardsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableSkeleton, {}) : cards && cards.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TopCardsTable, { cards }) : null
      ]
    }
  );
}
export {
  DashboardPage as default
};
