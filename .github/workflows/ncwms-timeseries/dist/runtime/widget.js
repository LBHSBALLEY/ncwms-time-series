System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/Graphic","esri/geometry/Point","esri/symbols/SimpleMarkerSymbol","esri/layers/GraphicsLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/ncwms-timeseries/src/runtime/components/TimeSeriesChart.tsx":
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/ncwms-timeseries/src/runtime/components/TimeSeriesChart.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeSeriesChart)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/** @jsx jsx */

const PADDING = { top: 20, right: 20, bottom: 50, left: 55 };
const CHART_HEIGHT = 180;
function TimeSeriesChart({ series }) {
    if (series.length === 0)
        return null;
    const mergedData = mergeSeriesData(series);
    // Compute domains
    const allDates = mergedData.map(d => d.date);
    const allValues = mergedData.flatMap(d => series.map((_, i) => d[`value_${i}`]).filter(v => v !== undefined));
    const minDate = Math.min(...allDates);
    const maxDate = Math.max(...allDates);
    const minVal = Math.min(...allValues);
    const maxVal = Math.max(...allValues);
    const valRange = maxVal - minVal || 1;
    const dateRange = maxDate - minDate || 1;
    const svgWidth = 560;
    const svgHeight = CHART_HEIGHT;
    const innerW = svgWidth - PADDING.left - PADDING.right;
    const innerH = svgHeight - PADDING.top - PADDING.bottom;
    const toX = (ts) => PADDING.left + ((ts - minDate) / dateRange) * innerW;
    const toY = (val) => PADDING.top + (1 - (val - minVal) / valRange) * innerH;
    // Y-axis ticks (6 steps)
    const yTickVals = Array.from({ length: 6 }, (_, i) => minVal + (i / 5) * valRange);
    // X-axis ticks (7 steps)
    const xTickVals = Array.from({ length: 7 }, (_, i) => minDate + (i / 6) * dateRange);
    const buildPath = (seriesIndex) => mergedData
        .filter(d => d[`value_${seriesIndex}`] !== undefined)
        .map(d => `${toX(d.date).toFixed(1)},${toY(d[`value_${seriesIndex}`]).toFixed(1)}`)
        .join(' ');
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: containerStyle },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { viewBox: `0 0 ${svgWidth} ${svgHeight}`, width: "100%", height: svgHeight, css: svgStyle },
            yTickVals.map((v, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { key: `ygrid-${i}`, x1: PADDING.left, x2: PADDING.left + innerW, y1: toY(v), y2: toY(v), stroke: "#e0e0e0", strokeWidth: 1 }))),
            yTickVals.map((v, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { key: `ylabel-${i}`, x: PADDING.left - 6, y: toY(v) + 4, textAnchor: "end", fontSize: 10, fill: "#666" }, v.toFixed(2)))),
            xTickVals.map((ts, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", { key: `xlabel-${i}`, x: toX(ts), y: PADDING.top + innerH + 18, textAnchor: "middle", fontSize: 10, fill: "#666" }, new Date(ts).toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' })))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: PADDING.left, y1: PADDING.top, x2: PADDING.left, y2: PADDING.top + innerH, stroke: "#999", strokeWidth: 1 }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", { x1: PADDING.left, y1: PADDING.top + innerH, x2: PADDING.left + innerW, y2: PADDING.top + innerH, stroke: "#999", strokeWidth: 1 }),
            series.map((s, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", { key: s.id, points: buildPath(i), fill: "none", stroke: s.color, strokeWidth: 2, strokeLinejoin: "round", strokeLinecap: "round" }))))));
}
function mergeSeriesData(series) {
    const dateMap = new Map();
    series.forEach((s, seriesIndex) => {
        s.data.forEach((point) => {
            const timestamp = point.date.getTime();
            if (!dateMap.has(timestamp)) {
                dateMap.set(timestamp, { date: timestamp });
            }
            dateMap.get(timestamp)[`value_${seriesIndex}`] = point.value;
        });
    });
    return Array.from(dateMap.values()).sort((a, b) => a.date - b.date);
}
const containerStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  width: 100%;
  overflow: hidden;
`;
const svgStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  font-family: inherit;
  display: block;
`;


/***/ }),

/***/ "./your-extensions/widgets/ncwms-timeseries/src/runtime/utils/ncwmsService.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/ncwms-timeseries/src/runtime/utils/ncwmsService.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchTimeSeries: () => (/* binding */ fetchTimeSeries)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchTimeSeries(wmsUrl, layerName, lat, lon, startDate, endDate) {
    return __awaiter(this, void 0, void 0, function* () {
        // Construction de la requête GetTimeSeries ncWMS
        const params = new URLSearchParams({
            SERVICE: 'WMS',
            VERSION: '1.1.1',
            REQUEST: 'GetTimeSeries',
            LAYERS: layerName,
            QUERY_LAYERS: layerName,
            CRS: 'EPSG:4326',
            X: '50',
            Y: '50',
            BBOX: `${lon - 0.001},${lat - 0.001},${lon + 0.001},${lat + 0.001}`,
            WIDTH: '101',
            HEIGHT: '101',
            INFO_FORMAT: 'text/csv', // ou 'application/json' si supporté
            TIME: `${startDate}/${endDate}`
        });
        const response = yield fetch(`${wmsUrl}?${params.toString()}`);
        if (!response.ok) {
            throw new Error(`Erreur ncWMS: ${response.statusText}`);
        }
        const text = yield response.text();
        return parseCSVResponse(text);
    });
}
function parseCSVResponse(csv) {
    const lines = csv.trim().split('\n');
    const data = [];
    // Ignorer l'en-tête, parser chaque ligne
    for (let i = 1; i < lines.length; i++) {
        const [dateStr, valueStr] = lines[i].split(',');
        if (dateStr && valueStr) {
            const value = parseFloat(valueStr);
            if (!isNaN(value)) {
                data.push({
                    date: new Date(dateStr.trim()),
                    value
                });
            }
        }
    }
    return data;
}


/***/ }),

/***/ "esri/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ }),

/***/ "esri/geometry/Point":
/*!**************************************!*\
  !*** external "esri/geometry/Point" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Point__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/symbols/SimpleMarkerSymbol":
/*!**************************************************!*\
  !*** external "esri/symbols/SimpleMarkerSymbol" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols_SimpleMarkerSymbol__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/ncwms-timeseries/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/symbols/SimpleMarkerSymbol */ "esri/symbols/SimpleMarkerSymbol");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var _utils_ncwmsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ncwmsService */ "./your-extensions/widgets/ncwms-timeseries/src/runtime/utils/ncwmsService.ts");
/* harmony import */ var _components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TimeSeriesChart */ "./your-extensions/widgets/ncwms-timeseries/src/runtime/components/TimeSeriesChart.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */









class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.jimuMapView = null;
        this.graphicsLayer = null;
        this.state = {
            series: [],
            loading: false,
            error: null
        };
        this.onActiveViewChange = (jmv) => {
            this.jimuMapView = jmv;
            if (jmv) {
                // Créer une couche graphique pour les marqueurs
                this.graphicsLayer = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_6__["default"]({ id: 'ncwms-click-points' });
                jmv.view.map.add(this.graphicsLayer);
                // Écouter les clics sur la carte
                jmv.view.on('click', this.handleMapClick);
            }
        };
        this.removeMapClickHandler = () => {
            if (this.graphicsLayer && this.jimuMapView) {
                this.jimuMapView.view.map.remove(this.graphicsLayer);
            }
        };
        this.handleMapClick = (event) => __awaiter(this, void 0, void 0, function* () {
            const { config } = this.props;
            const { series } = this.state;
            // Limite de 10 clics
            if (series.length >= (config.maxClicks || 10)) {
                this.setState({ error: 'Maximum de 10 points atteint. Effacez pour recommencer.' });
                return;
            }
            const { latitude, longitude } = event.mapPoint;
            const colorIndex = series.length % config.chartColors.length;
            const color = config.chartColors[colorIndex];
            this.setState({ loading: true, error: null });
            //identifie la couche à interroger : celle tout en haut de la carte
            const layers = this.jimuMapView.view.map.layers.toArray()
                .filter(layer => layer.visible)
                .filter(layer => layer.type === "wms");
            const topLayer = layers[layers.length - 1];
            const sublayers = topLayer.sublayers
                .toArray()
                .filter(sl => sl.visible);
            const sublayer = sublayers[sublayers.length - 1];
            console.log(sublayer);
            const layerName = sublayer === null || sublayer === void 0 ? void 0 : sublayer.name;
            try {
                const data = yield (0,_utils_ncwmsService__WEBPACK_IMPORTED_MODULE_7__.fetchTimeSeries)(config.wmsUrl, layerName, latitude, longitude, config.startDate, config.endDate);
                const newSeries = {
                    id: `point-${Date.now()}`,
                    lat: latitude,
                    lon: longitude,
                    data,
                    layer: layerName,
                    color
                };
                // Ajouter le marqueur sur la carte
                this.addMarker(latitude, longitude, color, series.length + 1);
                this.setState(prev => ({
                    series: [...prev.series, newSeries],
                    loading: false
                }));
            }
            catch (err) {
                this.setState({
                    loading: false,
                    error: `Erreur lors de la récupération des données: ${err.message}`
                });
            }
        });
        this.addMarker = (lat, lon, color, index) => {
            if (!this.graphicsLayer)
                return;
            const point = new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_4__["default"]({ latitude: lat, longitude: lon });
            const symbol = new esri_symbols_SimpleMarkerSymbol__WEBPACK_IMPORTED_MODULE_5__["default"]({
                style: 'circle',
                size: 12,
                color: color,
                outline: { color: 'white', width: 2 }
            });
            const graphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_3__["default"]({
                geometry: point,
                symbol,
                attributes: { index },
                popupTemplate: {
                    title: `Point ${index}`,
                    content: `Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}`
                }
            });
            this.graphicsLayer.add(graphic);
        };
        this.clearAll = () => {
            if (this.graphicsLayer) {
                this.graphicsLayer.removeAll();
            }
            this.setState({ series: [], error: null });
        };
    }
    componentWillUnmount() {
        this.removeMapClickHandler();
    }
    render() {
        const { useMapWidgetIds } = this.props;
        const { series, loading, error } = this.state;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ncwms-timeseries-widget", css: styles },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: useMapWidgetIds === null || useMapWidgetIds === void 0 ? void 0 : useMapWidgetIds[0], onActiveViewChange: this.onActiveViewChange }),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Card, { className: "chart-container" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "chart-header" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", null,
                        "S\u00E9ries temporelles (",
                        series.length,
                        "/10)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn-clear", onClick: this.clearAll, disabled: series.length === 0 }, "Effacer tout")),
                loading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Loading, { type: "SECONDARY" }),
                error && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "error-message" }, error),
                series.length === 0 && !loading ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "placeholder" }, "Cliquez sur la carte pour afficher une s\u00E9rie temporelle")) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_8__["default"], { series: series })),
                series.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "legend" }, series.map((s, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: s.id, className: "legend-item" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "legend-color", style: { backgroundColor: s.color } }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", null,
                        "Point ",
                        i + 1,
                        " : ",
                        s.layer,
                        " (",
                        s.lat.toFixed(3),
                        ", ",
                        s.lon.toFixed(3),
                        ")")))))))));
    }
}
const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .chart-container {
    flex: 1;
    padding: 16px;
    margin-top: 8px;
    overflow: auto;
  }
  
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    
    h4 { margin: 0; }
    
    .btn-clear {
      padding: 4px 12px;
      border-radius: 4px;
      border: 1px solid #ccc;
      background: #f5f5f5;
      cursor: pointer;
      
      &:hover:not(:disabled) { background: #e0e0e0; }
      &:disabled { opacity: 0.5; cursor: not-allowed; }
    }
  }
  
  .placeholder {
    text-align: center;
    color: #666;
    padding: 40px;
    font-style: italic;
  }
  
  .error-message {
    color: #d32f2f;
    padding: 8px;
    background: #ffebee;
    border-radius: 4px;
    margin-bottom: 16px;
  }
  
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid #eee;
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
    }
    
    .legend-color {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid white;
      box-shadow: 0 0 2px rgba(0,0,0,0.3);
    }
  }
`;
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9uY3dtcy10aW1lc2VyaWVzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDNkI7QUFPNUMsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDN0QsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBRVYsU0FBUyxlQUFlLENBQUMsRUFBRSxNQUFNLEVBQVM7SUFDdkQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUVyQyxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0Msa0JBQWtCO0lBQ2xCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQzdFLENBQUM7SUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDdEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sTUFB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O0FBRUQsTUFBTSxNQUFNLEdBQUcsOENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzRWpCLENBQUM7QUFFTSxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9uY3dtcy10aW1lc2VyaWVzL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvVGltZVNlcmllc0NoYXJ0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbmN3bXMtdGltZXNlcmllcy9zcmMvcnVudGltZS91dGlscy9uY3dtc1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2xcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL25jd21zLXRpbWVzZXJpZXMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcyB9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBUaW1lU2VyaWVzUmVzdWx0LCBUaW1lU2VyaWVzUG9pbnQgfSBmcm9tICcuLi91dGlscy9uY3dtc1NlcnZpY2UnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZXJpZXM6IFRpbWVTZXJpZXNSZXN1bHRbXTtcbn1cblxuY29uc3QgUEFERElORyA9IHsgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDUwLCBsZWZ0OiA1NSB9O1xuY29uc3QgQ0hBUlRfSEVJR0hUID0gMTgwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lU2VyaWVzQ2hhcnQoeyBzZXJpZXMgfTogUHJvcHMpIHtcbiAgaWYgKHNlcmllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IG1lcmdlZERhdGEgPSBtZXJnZVNlcmllc0RhdGEoc2VyaWVzKTtcblxuICAvLyBDb21wdXRlIGRvbWFpbnNcbiAgY29uc3QgYWxsRGF0ZXMgPSBtZXJnZWREYXRhLm1hcChkID0+IGQuZGF0ZSk7XG4gIGNvbnN0IGFsbFZhbHVlcyA9IG1lcmdlZERhdGEuZmxhdE1hcChkID0+XG4gICAgc2VyaWVzLm1hcCgoXywgaSkgPT4gZFtgdmFsdWVfJHtpfWBdIGFzIG51bWJlciB8IHVuZGVmaW5lZCkuZmlsdGVyKHYgPT4gdiAhPT0gdW5kZWZpbmVkKVxuICApIGFzIG51bWJlcltdO1xuXG4gIGNvbnN0IG1pbkRhdGUgPSBNYXRoLm1pbiguLi5hbGxEYXRlcyk7XG4gIGNvbnN0IG1heERhdGUgPSBNYXRoLm1heCguLi5hbGxEYXRlcyk7XG4gIGNvbnN0IG1pblZhbCA9IE1hdGgubWluKC4uLmFsbFZhbHVlcyk7XG4gIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4KC4uLmFsbFZhbHVlcyk7XG4gIGNvbnN0IHZhbFJhbmdlID0gbWF4VmFsIC0gbWluVmFsIHx8IDE7XG4gIGNvbnN0IGRhdGVSYW5nZSA9IG1heERhdGUgLSBtaW5EYXRlIHx8IDE7XG5cbiAgY29uc3Qgc3ZnV2lkdGggPSA1NjA7XG4gIGNvbnN0IHN2Z0hlaWdodCA9IENIQVJUX0hFSUdIVDtcbiAgY29uc3QgaW5uZXJXID0gc3ZnV2lkdGggLSBQQURESU5HLmxlZnQgLSBQQURESU5HLnJpZ2h0O1xuICBjb25zdCBpbm5lckggPSBzdmdIZWlnaHQgLSBQQURESU5HLnRvcCAtIFBBRERJTkcuYm90dG9tO1xuXG4gIGNvbnN0IHRvWCA9ICh0czogbnVtYmVyKSA9PiBQQURESU5HLmxlZnQgKyAoKHRzIC0gbWluRGF0ZSkgLyBkYXRlUmFuZ2UpICogaW5uZXJXO1xuICBjb25zdCB0b1kgPSAodmFsOiBudW1iZXIpID0+IFBBRERJTkcudG9wICsgKDEgLSAodmFsIC0gbWluVmFsKSAvIHZhbFJhbmdlKSAqIGlubmVySDtcblxuICAvLyBZLWF4aXMgdGlja3MgKDYgc3RlcHMpXG4gIGNvbnN0IHlUaWNrVmFscyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDYgfSwgKF8sIGkpID0+XG4gICAgbWluVmFsICsgKGkgLyA1KSAqIHZhbFJhbmdlXG4gICk7XG5cbiAgLy8gWC1heGlzIHRpY2tzICg3IHN0ZXBzKVxuICBjb25zdCB4VGlja1ZhbHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA3IH0sIChfLCBpKSA9PlxuICAgIG1pbkRhdGUgKyAoaSAvIDYpICogZGF0ZVJhbmdlXG4gICk7XG5cbiAgY29uc3QgYnVpbGRQYXRoID0gKHNlcmllc0luZGV4OiBudW1iZXIpID0+XG4gICAgbWVyZ2VkRGF0YVxuICAgICAgLmZpbHRlcihkID0+IGRbYHZhbHVlXyR7c2VyaWVzSW5kZXh9YF0gIT09IHVuZGVmaW5lZClcbiAgICAgIC5tYXAoZCA9PiBgJHt0b1goZC5kYXRlKS50b0ZpeGVkKDEpfSwke3RvWShkW2B2YWx1ZV8ke3Nlcmllc0luZGV4fWBdIGFzIG51bWJlcikudG9GaXhlZCgxKX1gKVxuICAgICAgLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8c3ZnXG4gICAgICAgIHZpZXdCb3g9e2AwIDAgJHtzdmdXaWR0aH0gJHtzdmdIZWlnaHR9YH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PXtzdmdIZWlnaHR9XG4gICAgICAgIGNzcz17c3ZnU3R5bGV9XG4gICAgICA+XG4gICAgICAgIHsvKiBIb3Jpem9udGFsIGdyaWQgbGluZXMgKi99XG4gICAgICAgIHt5VGlja1ZhbHMubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgIGtleT17YHlncmlkLSR7aX1gfVxuICAgICAgICAgICAgeDE9e1BBRERJTkcubGVmdH0geDI9e1BBRERJTkcubGVmdCArIGlubmVyV31cbiAgICAgICAgICAgIHkxPXt0b1kodil9IHkyPXt0b1kodil9XG4gICAgICAgICAgICBzdHJva2U9XCIjZTBlMGUwXCIgc3Ryb2tlV2lkdGg9ezF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgey8qIFktYXhpcyBsYWJlbHMgKi99XG4gICAgICAgIHt5VGlja1ZhbHMubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgPHRleHRcbiAgICAgICAgICAgIGtleT17YHlsYWJlbC0ke2l9YH1cbiAgICAgICAgICAgIHg9e1BBRERJTkcubGVmdCAtIDZ9IHk9e3RvWSh2KSArIDR9XG4gICAgICAgICAgICB0ZXh0QW5jaG9yPVwiZW5kXCIgZm9udFNpemU9ezEwfSBmaWxsPVwiIzY2NlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3YudG9GaXhlZCgyKX1cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICkpfVxuXG4gICAgICAgIHsvKiBYLWF4aXMgbGFiZWxzICovfVxuICAgICAgICB7eFRpY2tWYWxzLm1hcCgodHMsIGkpID0+IChcbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAga2V5PXtgeGxhYmVsLSR7aX1gfVxuICAgICAgICAgICAgeD17dG9YKHRzKX0geT17UEFERElORy50b3AgKyBpbm5lckggKyAxOH1cbiAgICAgICAgICAgIHRleHRBbmNob3I9XCJtaWRkbGVcIiBmb250U2l6ZT17MTB9IGZpbGw9XCIjNjY2XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmV3IERhdGUodHMpLnRvTG9jYWxlRGF0ZVN0cmluZygnZnItRlInLCB7IG1vbnRoOiAnc2hvcnQnLCB5ZWFyOiAnMi1kaWdpdCcgfSl9XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICApKX1cblxuICAgICAgICB7LyogQXhlcyAqL31cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB4MT17UEFERElORy5sZWZ0fSB5MT17UEFERElORy50b3B9XG4gICAgICAgICAgeDI9e1BBRERJTkcubGVmdH0geTI9e1BBRERJTkcudG9wICsgaW5uZXJIfVxuICAgICAgICAgIHN0cm9rZT1cIiM5OTlcIiBzdHJva2VXaWR0aD17MX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB4MT17UEFERElORy5sZWZ0fSB5MT17UEFERElORy50b3AgKyBpbm5lckh9XG4gICAgICAgICAgeDI9e1BBRERJTkcubGVmdCArIGlubmVyV30geTI9e1BBRERJTkcudG9wICsgaW5uZXJIfVxuICAgICAgICAgIHN0cm9rZT1cIiM5OTlcIiBzdHJva2VXaWR0aD17MX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogU2VyaWVzIGxpbmVzICovfVxuICAgICAgICB7c2VyaWVzLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgIDxwb2x5bGluZVxuICAgICAgICAgICAga2V5PXtzLmlkfVxuICAgICAgICAgICAgcG9pbnRzPXtidWlsZFBhdGgoaSl9XG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9e3MuY29sb3J9XG4gICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBtZXJnZVNlcmllc0RhdGEoc2VyaWVzOiBUaW1lU2VyaWVzUmVzdWx0W10pOiBhbnlbXSB7XG4gIGNvbnN0IGRhdGVNYXAgPSBuZXcgTWFwPG51bWJlciwgYW55PigpO1xuICBzZXJpZXMuZm9yRWFjaCgocywgc2VyaWVzSW5kZXgpID0+IHtcbiAgICBzLmRhdGEuZm9yRWFjaCgocG9pbnQ6IFRpbWVTZXJpZXNQb2ludCkgPT4ge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gcG9pbnQuZGF0ZS5nZXRUaW1lKCk7XG4gICAgICBpZiAoIWRhdGVNYXAuaGFzKHRpbWVzdGFtcCkpIHtcbiAgICAgICAgZGF0ZU1hcC5zZXQodGltZXN0YW1wLCB7IGRhdGU6IHRpbWVzdGFtcCB9KTtcbiAgICAgIH1cbiAgICAgIGRhdGVNYXAuZ2V0KHRpbWVzdGFtcClbYHZhbHVlXyR7c2VyaWVzSW5kZXh9YF0gPSBwb2ludC52YWx1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBBcnJheS5mcm9tKGRhdGVNYXAudmFsdWVzKCkpLnNvcnQoKGEsIGIpID0+IGEuZGF0ZSAtIGIuZGF0ZSk7XG59XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IHN2Z1N0eWxlID0gY3NzYFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuIiwiZXhwb3J0IGludGVyZmFjZSBUaW1lU2VyaWVzUG9pbnQge1xyXG4gIGRhdGU6IERhdGU7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lU2VyaWVzUmVzdWx0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGxhdDogbnVtYmVyO1xyXG4gIGxvbjogbnVtYmVyO1xyXG4gIGRhdGE6IFRpbWVTZXJpZXNQb2ludFtdO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgbGF5ZXI6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVGltZVNlcmllcyhcclxuICB3bXNVcmw6IHN0cmluZyxcclxuICBsYXllck5hbWU6IHN0cmluZyxcclxuICBsYXQ6IG51bWJlcixcclxuICBsb246IG51bWJlcixcclxuICBzdGFydERhdGU6IHN0cmluZyxcclxuICBlbmREYXRlOiBzdHJpbmdcclxuKTogUHJvbWlzZTxUaW1lU2VyaWVzUG9pbnRbXT4ge1xyXG4gIC8vIENvbnN0cnVjdGlvbiBkZSBsYSByZXF1w6p0ZSBHZXRUaW1lU2VyaWVzIG5jV01TXHJcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICBTRVJWSUNFOiAnV01TJyxcclxuICAgIFZFUlNJT046ICcxLjEuMScsXHJcbiAgICBSRVFVRVNUOiAnR2V0VGltZVNlcmllcycsXHJcbiAgICBMQVlFUlM6IGxheWVyTmFtZSxcclxuICAgIFFVRVJZX0xBWUVSUzogbGF5ZXJOYW1lLFxyXG4gICAgQ1JTOiAnRVBTRzo0MzI2JyxcclxuICAgIFg6ICc1MCcsXHJcbiAgICBZOiAnNTAnLFxyXG4gICAgQkJPWDogYCR7bG9uIC0gMC4wMDF9LCR7bGF0IC0gMC4wMDF9LCR7bG9uICsgMC4wMDF9LCR7bGF0ICsgMC4wMDF9YCxcclxuICAgIFdJRFRIOiAnMTAxJyxcclxuICAgIEhFSUdIVDogJzEwMScsXHJcbiAgICBJTkZPX0ZPUk1BVDogJ3RleHQvY3N2JywgLy8gb3UgJ2FwcGxpY2F0aW9uL2pzb24nIHNpIHN1cHBvcnTDqVxyXG4gICAgVElNRTogYCR7c3RhcnREYXRlfS8ke2VuZERhdGV9YFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3dtc1VybH0/JHtwYXJhbXMudG9TdHJpbmcoKX1gKTtcclxuICBcclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVycmV1ciBuY1dNUzogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICByZXR1cm4gcGFyc2VDU1ZSZXNwb25zZSh0ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDU1ZSZXNwb25zZShjc3Y6IHN0cmluZyk6IFRpbWVTZXJpZXNQb2ludFtdIHtcclxuICBjb25zdCBsaW5lcyA9IGNzdi50cmltKCkuc3BsaXQoJ1xcbicpO1xyXG4gIGNvbnN0IGRhdGE6IFRpbWVTZXJpZXNQb2ludFtdID0gW107XHJcbiAgXHJcbiAgLy8gSWdub3JlciBsJ2VuLXTDqnRlLCBwYXJzZXIgY2hhcXVlIGxpZ25lXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgW2RhdGVTdHIsIHZhbHVlU3RyXSA9IGxpbmVzW2ldLnNwbGl0KCcsJyk7XHJcbiAgICBpZiAoZGF0ZVN0ciAmJiB2YWx1ZVN0cikge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWVTdHIpO1xyXG4gICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyLnRyaW0oKSksXHJcbiAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2ludF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfc3ltYm9sc19TaW1wbGVNYXJrZXJTeW1ib2xfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgY3NzLCBBbGxXaWRnZXRQcm9wcyB9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IHsgQ2FyZCwgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSAnZXNyaS9nZW9tZXRyeS9Qb2ludCc7XHJcbmltcG9ydCBTaW1wbGVNYXJrZXJTeW1ib2wgZnJvbSAnZXNyaS9zeW1ib2xzL1NpbXBsZU1hcmtlclN5bWJvbCc7XHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xyXG5pbXBvcnQgV01TTGF5ZXIgZnJvbSBcIkBhcmNnaXMvY29yZS9sYXllcnMvV01TTGF5ZXJcIjtcclxuXHJcbmltcG9ydCB7IGZldGNoVGltZVNlcmllcywgVGltZVNlcmllc1Jlc3VsdCB9IGZyb20gJy4vdXRpbHMvbmN3bXNTZXJ2aWNlJztcclxuaW1wb3J0IFRpbWVTZXJpZXNDaGFydCBmcm9tICcuL2NvbXBvbmVudHMvVGltZVNlcmllc0NoYXJ0JztcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgc2VyaWVzOiBUaW1lU2VyaWVzUmVzdWx0W107XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxhbnk+LCBTdGF0ZT4ge1xyXG4gIHByaXZhdGUgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBncmFwaGljc0xheWVyOiBHcmFwaGljc0xheWVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIHNlcmllczogW10sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLnJlbW92ZU1hcENsaWNrSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgb25BY3RpdmVWaWV3Q2hhbmdlID0gKGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgIHRoaXMuamltdU1hcFZpZXcgPSBqbXY7XHJcbiAgICBcclxuICAgIGlmIChqbXYpIHtcclxuICAgICAgLy8gQ3LDqWVyIHVuZSBjb3VjaGUgZ3JhcGhpcXVlIHBvdXIgbGVzIG1hcnF1ZXVyc1xyXG4gICAgICB0aGlzLmdyYXBoaWNzTGF5ZXIgPSBuZXcgR3JhcGhpY3NMYXllcih7IGlkOiAnbmN3bXMtY2xpY2stcG9pbnRzJyB9KTtcclxuICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNzTGF5ZXIpO1xyXG4gICAgICBcclxuICAgICAgLy8gw4ljb3V0ZXIgbGVzIGNsaWNzIHN1ciBsYSBjYXJ0ZVxyXG4gICAgICBqbXYudmlldy5vbignY2xpY2snLCB0aGlzLmhhbmRsZU1hcENsaWNrKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW1vdmVNYXBDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5ncmFwaGljc0xheWVyICYmIHRoaXMuamltdU1hcFZpZXcpIHtcclxuICAgICAgdGhpcy5qaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUodGhpcy5ncmFwaGljc0xheWVyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVNYXBDbGljayA9IGFzeW5jIChldmVudDogX19lc3JpLlZpZXdDbGlja0V2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgc2VyaWVzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vIExpbWl0ZSBkZSAxMCBjbGljc1xyXG4gICAgaWYgKHNlcmllcy5sZW5ndGggPj0gKGNvbmZpZy5tYXhDbGlja3MgfHwgMTApKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogJ01heGltdW0gZGUgMTAgcG9pbnRzIGF0dGVpbnQuIEVmZmFjZXogcG91ciByZWNvbW1lbmNlci4nIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBldmVudC5tYXBQb2ludDtcclxuICAgIGNvbnN0IGNvbG9ySW5kZXggPSBzZXJpZXMubGVuZ3RoICUgY29uZmlnLmNoYXJ0Q29sb3JzLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvbG9yID0gY29uZmlnLmNoYXJ0Q29sb3JzW2NvbG9ySW5kZXhdO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcclxuICAgIFxyXG4gICAgLy9pZGVudGlmaWUgbGEgY291Y2hlIMOgIGludGVycm9nZXIgOiBjZWxsZSB0b3V0IGVuIGhhdXQgZGUgbGEgY2FydGVcclxuICAgIGNvbnN0IGxheWVycyA9IHRoaXMuamltdU1hcFZpZXcudmlldy5tYXAubGF5ZXJzLnRvQXJyYXkoKVxyXG4gICAgICAuZmlsdGVyKGxheWVyID0+IGxheWVyLnZpc2libGUpXHJcbiAgICAgIC5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIudHlwZSA9PT0gXCJ3bXNcIik7XHJcbiAgICBjb25zdCB0b3BMYXllciA9IGxheWVyc1tsYXllcnMubGVuZ3RoIC0gMV0gYXMgV01TTGF5ZXI7XHJcbiAgICBjb25zdCBzdWJsYXllcnMgPSB0b3BMYXllci5zdWJsYXllcnNcclxuICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAuZmlsdGVyKHNsID0+IHNsLnZpc2libGUpO1xyXG4gICAgY29uc3Qgc3VibGF5ZXIgPSBzdWJsYXllcnNbc3VibGF5ZXJzLmxlbmd0aCAtIDFdXHJcbiAgICBjb25zb2xlLmxvZyhzdWJsYXllcik7XHJcbiAgICBjb25zdCBsYXllck5hbWUgPSBzdWJsYXllcj8ubmFtZTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoVGltZVNlcmllcyhcclxuICAgICAgICBjb25maWcud21zVXJsLFxyXG4gICAgICAgIGxheWVyTmFtZSxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgY29uZmlnLnN0YXJ0RGF0ZSxcclxuICAgICAgICBjb25maWcuZW5kRGF0ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgbmV3U2VyaWVzOiBUaW1lU2VyaWVzUmVzdWx0ID0ge1xyXG4gICAgICAgIGlkOiBgcG9pbnQtJHtEYXRlLm5vdygpfWAsXHJcbiAgICAgICAgbGF0OiBsYXRpdHVkZSxcclxuICAgICAgICBsb246IGxvbmdpdHVkZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGxheWVyOiBsYXllck5hbWUsXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEFqb3V0ZXIgbGUgbWFycXVldXIgc3VyIGxhIGNhcnRlXHJcbiAgICAgIHRoaXMuYWRkTWFya2VyKGxhdGl0dWRlLCBsb25naXR1ZGUsIGNvbG9yLCBzZXJpZXMubGVuZ3RoICsgMSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4gKHtcclxuICAgICAgICBzZXJpZXM6IFsuLi5wcmV2LnNlcmllcywgbmV3U2VyaWVzXSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGBFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXM6ICR7ZXJyLm1lc3NhZ2V9YFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhZGRNYXJrZXIgPSAobGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuZ3JhcGhpY3NMYXllcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KHsgbGF0aXR1ZGU6IGxhdCwgbG9uZ2l0dWRlOiBsb24gfSk7XHJcbiAgICBjb25zdCBzeW1ib2wgPSBuZXcgU2ltcGxlTWFya2VyU3ltYm9sKHtcclxuICAgICAgc3R5bGU6ICdjaXJjbGUnLFxyXG4gICAgICBzaXplOiAxMixcclxuICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICBvdXRsaW5lOiB7IGNvbG9yOiAnd2hpdGUnLCB3aWR0aDogMiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBncmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICBnZW9tZXRyeTogcG9pbnQsXHJcbiAgICAgIHN5bWJvbCxcclxuICAgICAgYXR0cmlidXRlczogeyBpbmRleCB9LFxyXG4gICAgICBwb3B1cFRlbXBsYXRlOiB7XHJcbiAgICAgICAgdGl0bGU6IGBQb2ludCAke2luZGV4fWAsXHJcbiAgICAgICAgY29udGVudDogYExhdDogJHtsYXQudG9GaXhlZCg1KX0sIExvbjogJHtsb24udG9GaXhlZCg1KX1gXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ3JhcGhpY3NMYXllci5hZGQoZ3JhcGhpYyk7XHJcbiAgfTtcclxuXHJcbiAgY2xlYXJBbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5ncmFwaGljc0xheWVyKSB7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3NMYXllci5yZW1vdmVBbGwoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZXJpZXM6IFtdLCBlcnJvcjogbnVsbCB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVzZU1hcFdpZGdldElkcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgc2VyaWVzLCBsb2FkaW5nLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5jd21zLXRpbWVzZXJpZXMtd2lkZ2V0XCIgY3NzPXtzdHlsZXN9PlxyXG4gICAgICAgIHsvKiBDb25uZXhpb24gw6AgbGEgY2FydGUgKi99XHJcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMub25BY3RpdmVWaWV3Q2hhbmdlfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiBab25lIGRlIGdyYXBoaXF1ZSAqL31cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJjaGFydC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoND5Tw6lyaWVzIHRlbXBvcmVsbGVzICh7c2VyaWVzLmxlbmd0aH0vMTApPC9oND5cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2xlYXJcIiBcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsZWFyQWxsfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzZXJpZXMubGVuZ3RoID09PSAwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRWZmYWNlciB0b3V0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgPExvYWRpbmcgdHlwZT1cIlNFQ09OREFSWVwiIC8+fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+e2Vycm9yfTwvZGl2Pn1cclxuXHJcbiAgICAgICAgICB7c2VyaWVzLmxlbmd0aCA9PT0gMCAmJiAhbG9hZGluZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgIENsaXF1ZXogc3VyIGxhIGNhcnRlIHBvdXIgYWZmaWNoZXIgdW5lIHPDqXJpZSB0ZW1wb3JlbGxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFRpbWVTZXJpZXNDaGFydCBzZXJpZXM9e3Nlcmllc30gLz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgey8qIEzDqWdlbmRlICovfVxyXG4gICAgICAgICAge3Nlcmllcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWdlbmRcIj5cclxuICAgICAgICAgICAgICB7c2VyaWVzLm1hcCgocywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3MuaWR9IGNsYXNzTmFtZT1cImxlZ2VuZC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxlZ2VuZC1jb2xvclwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogcy5jb2xvciB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Qb2ludCB7aSArIDF9IDoge3MubGF5ZXJ9ICh7cy5sYXQudG9GaXhlZCgzKX0sIHtzLmxvbi50b0ZpeGVkKDMpfSk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY2hhcnQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIFxyXG4gICAgaDQgeyBtYXJnaW46IDA7IH1cclxuICAgIFxyXG4gICAgLmJ0bi1jbGVhciB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiAjZTBlMGUwOyB9XHJcbiAgICAgICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnBsYWNlaG9sZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICNkMzJmMmY7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZlYmVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmxlZ2VuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICBcclxuICAgIC5sZWdlbmQtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sZWdlbmQtY29sb3Ige1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=