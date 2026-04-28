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
    // const xTickVals = Array.from({ length: 7 }, (_, i) =>
    //   minDate + (i / 6) * dateRange
    // );
    const xTickVals = generateMonthlyTicks(minDate, maxDate);
    // const xTickVals = generateMonthlyTicks(minDate, maxDate);
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
function generateMonthlyTicks(min, max) {
    const res = [];
    const d = new Date(min);
    d.setDate(1); // align month start
    while (d.getTime() <= max) {
        res.push(d.getTime());
        d.setMonth(d.getMonth() + 1);
    }
    return res;
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
// function generateMonthlyTicks(min, max) {
//   const res = [];
//   const d = new Date(min);
//   d.setDate(1); // align month start
//   while (d.getTime() <= max) {
//     res.push(d.getTime());
//     d.setMonth(d.getMonth() + 1);
//   }
//   return res;
// }
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
            const layerName = sublayer === null || sublayer === void 0 ? void 0 : sublayer.name;
            try {
                const data = yield (0,_utils_ncwmsService__WEBPACK_IMPORTED_MODULE_7__.fetchTimeSeries)(topLayer.url, layerName, latitude, longitude, config.startDate, config.endDate);
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
                let message;
                if (err instanceof Error) {
                    message = err.message;
                }
                else if (typeof err === 'string') {
                    message = err;
                }
                else {
                    message = JSON.stringify(err);
                }
                this.setState({
                    loading: false,
                    error: `Erreur lors de la récupération des données: ${message}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9uY3dtcy10aW1lc2VyaWVzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDNkI7QUFPNUMsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDN0QsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBRVYsU0FBUyxlQUFlLENBQUMsRUFBRSxNQUFNLEVBQVM7SUFDdkQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQztJQUVyQyxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFM0Msa0JBQWtCO0lBQ2xCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQzdFLENBQUM7SUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDdEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sTUFB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QUFDLGVBQWUsSUFBRSxLQUFLLENBQU87Z0JBRXJELE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNqQyx3REFBSyxTQUFTLEVBQUMsYUFBYSxtRUFFdEIsQ0FDUCxDQUFDLENBQUMsQ0FBQyxDQUNGLCtDQUFDLG1FQUFlLElBQUMsTUFBTSxFQUFFLE1BQU0sR0FBSSxDQUNwQztnQkFHQSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUNwQix3REFBSyxTQUFTLEVBQUMsUUFBUSxJQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDcEIsd0RBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFDLGFBQWE7b0JBQ3JDLHlEQUNFLFNBQVMsRUFBQyxjQUFjLEVBQ3hCLEtBQUssRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQ25DO29CQUNGOzt3QkFBYSxDQUFDLEdBQUcsQ0FBQzs7d0JBQUssQ0FBQyxDQUFDLEtBQUs7O3dCQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7d0JBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUFTLENBQzNFLENBQ1AsQ0FBQyxDQUNFLENBQ1AsQ0FDSSxDQUNILENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELE1BQU0sTUFBTSxHQUFHLDhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0VqQixDQUFDO0FBRU0sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbmN3bXMtdGltZXNlcmllcy9zcmMvcnVudGltZS9jb21wb25lbnRzL1RpbWVTZXJpZXNDaGFydC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL25jd21zLXRpbWVzZXJpZXMvc3JjL3J1bnRpbWUvdXRpbHMvbmN3bXNTZXJ2aWNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTWFya2VyU3ltYm9sXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9uY3dtcy10aW1lc2VyaWVzL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwganN4LCBjc3MgfSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgVGltZVNlcmllc1Jlc3VsdCwgVGltZVNlcmllc1BvaW50IH0gZnJvbSAnLi4vdXRpbHMvbmN3bXNTZXJ2aWNlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VyaWVzOiBUaW1lU2VyaWVzUmVzdWx0W107XG59XG5cbmNvbnN0IFBBRERJTkcgPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiA1MCwgbGVmdDogNTUgfTtcbmNvbnN0IENIQVJUX0hFSUdIVCA9IDE4MDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZVNlcmllc0NoYXJ0KHsgc2VyaWVzIH06IFByb3BzKSB7XG4gIGlmIChzZXJpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBtZXJnZWREYXRhID0gbWVyZ2VTZXJpZXNEYXRhKHNlcmllcyk7XG5cbiAgLy8gQ29tcHV0ZSBkb21haW5zXG4gIGNvbnN0IGFsbERhdGVzID0gbWVyZ2VkRGF0YS5tYXAoZCA9PiBkLmRhdGUpO1xuICBjb25zdCBhbGxWYWx1ZXMgPSBtZXJnZWREYXRhLmZsYXRNYXAoZCA9PlxuICAgIHNlcmllcy5tYXAoKF8sIGkpID0+IGRbYHZhbHVlXyR7aX1gXSBhcyBudW1iZXIgfCB1bmRlZmluZWQpLmZpbHRlcih2ID0+IHYgIT09IHVuZGVmaW5lZClcbiAgKSBhcyBudW1iZXJbXTtcblxuICBjb25zdCBtaW5EYXRlID0gTWF0aC5taW4oLi4uYWxsRGF0ZXMpO1xuICBjb25zdCBtYXhEYXRlID0gTWF0aC5tYXgoLi4uYWxsRGF0ZXMpO1xuICBjb25zdCBtaW5WYWwgPSBNYXRoLm1pbiguLi5hbGxWYWx1ZXMpO1xuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi5hbGxWYWx1ZXMpO1xuICBjb25zdCB2YWxSYW5nZSA9IG1heFZhbCAtIG1pblZhbCB8fCAxO1xuICBjb25zdCBkYXRlUmFuZ2UgPSBtYXhEYXRlIC0gbWluRGF0ZSB8fCAxO1xuXG4gIGNvbnN0IHN2Z1dpZHRoID0gNTYwO1xuICBjb25zdCBzdmdIZWlnaHQgPSBDSEFSVF9IRUlHSFQ7XG4gIGNvbnN0IGlubmVyVyA9IHN2Z1dpZHRoIC0gUEFERElORy5sZWZ0IC0gUEFERElORy5yaWdodDtcbiAgY29uc3QgaW5uZXJIID0gc3ZnSGVpZ2h0IC0gUEFERElORy50b3AgLSBQQURESU5HLmJvdHRvbTtcblxuICBjb25zdCB0b1ggPSAodHM6IG51bWJlcikgPT4gUEFERElORy5sZWZ0ICsgKCh0cyAtIG1pbkRhdGUpIC8gZGF0ZVJhbmdlKSAqIGlubmVyVztcbiAgY29uc3QgdG9ZID0gKHZhbDogbnVtYmVyKSA9PiBQQURESU5HLnRvcCArICgxIC0gKHZhbCAtIG1pblZhbCkgLyB2YWxSYW5nZSkgKiBpbm5lckg7XG5cbiAgLy8gWS1heGlzIHRpY2tzICg2IHN0ZXBzKVxuICBjb25zdCB5VGlja1ZhbHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA2IH0sIChfLCBpKSA9PlxuICAgIG1pblZhbCArIChpIC8gNSkgKiB2YWxSYW5nZVxuICApO1xuXG4gIC8vIFgtYXhpcyB0aWNrcyAoNyBzdGVwcylcbiAgLy8gY29uc3QgeFRpY2tWYWxzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNyB9LCAoXywgaSkgPT5cbiAgLy8gICBtaW5EYXRlICsgKGkgLyA2KSAqIGRhdGVSYW5nZVxuICAvLyApO1xuXG4gIGNvbnN0IHhUaWNrVmFscyA9IGdlbmVyYXRlTW9udGhseVRpY2tzKG1pbkRhdGUsIG1heERhdGUpO1xuICAvLyBjb25zdCB4VGlja1ZhbHMgPSBnZW5lcmF0ZU1vbnRobHlUaWNrcyhtaW5EYXRlLCBtYXhEYXRlKTtcblxuICBjb25zdCBidWlsZFBhdGggPSAoc2VyaWVzSW5kZXg6IG51bWJlcikgPT5cbiAgICBtZXJnZWREYXRhXG4gICAgICAuZmlsdGVyKGQgPT4gZFtgdmFsdWVfJHtzZXJpZXNJbmRleH1gXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgLm1hcChkID0+IGAke3RvWChkLmRhdGUpLnRvRml4ZWQoMSl9LCR7dG9ZKGRbYHZhbHVlXyR7c2VyaWVzSW5kZXh9YF0gYXMgbnVtYmVyKS50b0ZpeGVkKDEpfWApXG4gICAgICAuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgIDxzdmdcbiAgICAgICAgdmlld0JveD17YDAgMCAke3N2Z1dpZHRofSAke3N2Z0hlaWdodH1gfVxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9e3N2Z0hlaWdodH1cbiAgICAgICAgY3NzPXtzdmdTdHlsZX1cbiAgICAgID5cbiAgICAgICAgey8qIEhvcml6b250YWwgZ3JpZCBsaW5lcyAqL31cbiAgICAgICAge3lUaWNrVmFscy5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICA8bGluZVxuICAgICAgICAgICAga2V5PXtgeWdyaWQtJHtpfWB9XG4gICAgICAgICAgICB4MT17UEFERElORy5sZWZ0fSB4Mj17UEFERElORy5sZWZ0ICsgaW5uZXJXfVxuICAgICAgICAgICAgeTE9e3RvWSh2KX0geTI9e3RvWSh2KX1cbiAgICAgICAgICAgIHN0cm9rZT1cIiNlMGUwZTBcIiBzdHJva2VXaWR0aD17MX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cblxuICAgICAgICB7LyogWS1heGlzIGxhYmVscyAqL31cbiAgICAgICAge3lUaWNrVmFscy5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAga2V5PXtgeWxhYmVsLSR7aX1gfVxuICAgICAgICAgICAgeD17UEFERElORy5sZWZ0IC0gNn0geT17dG9ZKHYpICsgNH1cbiAgICAgICAgICAgIHRleHRBbmNob3I9XCJlbmRcIiBmb250U2l6ZT17MTB9IGZpbGw9XCIjNjY2XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7di50b0ZpeGVkKDIpfVxuICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgKSl9XG5cbiAgICAgICAgey8qIFgtYXhpcyBsYWJlbHMgKi99XG4gICAgICAgIHt4VGlja1ZhbHMubWFwKCh0cywgaSkgPT4gKFxuICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICBrZXk9e2B4bGFiZWwtJHtpfWB9XG4gICAgICAgICAgICB4PXt0b1godHMpfSB5PXtQQURESU5HLnRvcCArIGlubmVySCArIDE4fVxuICAgICAgICAgICAgdGV4dEFuY2hvcj1cIm1pZGRsZVwiIGZvbnRTaXplPXsxMH0gZmlsbD1cIiM2NjZcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuZXcgRGF0ZSh0cykudG9Mb2NhbGVEYXRlU3RyaW5nKCdmci1GUicsIHsgbW9udGg6ICdzaG9ydCcsIHllYXI6ICcyLWRpZ2l0JyB9KX1cbiAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICkpfVxuXG4gICAgICAgIHsvKiBBeGVzICovfVxuICAgICAgICA8bGluZVxuICAgICAgICAgIHgxPXtQQURESU5HLmxlZnR9IHkxPXtQQURESU5HLnRvcH1cbiAgICAgICAgICB4Mj17UEFERElORy5sZWZ0fSB5Mj17UEFERElORy50b3AgKyBpbm5lckh9XG4gICAgICAgICAgc3Ryb2tlPVwiIzk5OVwiIHN0cm9rZVdpZHRoPXsxfVxuICAgICAgICAvPlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHgxPXtQQURESU5HLmxlZnR9IHkxPXtQQURESU5HLnRvcCArIGlubmVySH1cbiAgICAgICAgICB4Mj17UEFERElORy5sZWZ0ICsgaW5uZXJXfSB5Mj17UEFERElORy50b3AgKyBpbm5lckh9XG4gICAgICAgICAgc3Ryb2tlPVwiIzk5OVwiIHN0cm9rZVdpZHRoPXsxfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBTZXJpZXMgbGluZXMgKi99XG4gICAgICAgIHtzZXJpZXMubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgPHBvbHlsaW5lXG4gICAgICAgICAgICBrZXk9e3MuaWR9XG4gICAgICAgICAgICBwb2ludHM9e2J1aWxkUGF0aChpKX1cbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT17cy5jb2xvcn1cbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTW9udGhseVRpY2tzKG1pbjogYW55LCBtYXg6IGFueSkge1xuICBjb25zdCByZXMgPSBbXTtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKG1pbik7XG5cbiAgZC5zZXREYXRlKDEpOyAvLyBhbGlnbiBtb250aCBzdGFydFxuXG4gIHdoaWxlIChkLmdldFRpbWUoKSA8PSBtYXgpIHtcbiAgICByZXMucHVzaChkLmdldFRpbWUoKSk7XG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyAxKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1lcmdlU2VyaWVzRGF0YShzZXJpZXM6IFRpbWVTZXJpZXNSZXN1bHRbXSk6IGFueVtdIHtcbiAgY29uc3QgZGF0ZU1hcCA9IG5ldyBNYXA8bnVtYmVyLCBhbnk+KCk7XG4gIHNlcmllcy5mb3JFYWNoKChzLCBzZXJpZXNJbmRleCkgPT4ge1xuICAgIHMuZGF0YS5mb3JFYWNoKChwb2ludDogVGltZVNlcmllc1BvaW50KSA9PiB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBwb2ludC5kYXRlLmdldFRpbWUoKTtcbiAgICAgIGlmICghZGF0ZU1hcC5oYXModGltZXN0YW1wKSkge1xuICAgICAgICBkYXRlTWFwLnNldCh0aW1lc3RhbXAsIHsgZGF0ZTogdGltZXN0YW1wIH0pO1xuICAgICAgfVxuICAgICAgZGF0ZU1hcC5nZXQodGltZXN0YW1wKVtgdmFsdWVfJHtzZXJpZXNJbmRleH1gXSA9IHBvaW50LnZhbHVlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIEFycmF5LmZyb20oZGF0ZU1hcC52YWx1ZXMoKSkuc29ydCgoYSwgYikgPT4gYS5kYXRlIC0gYi5kYXRlKTtcbn1cblxuLy8gZnVuY3Rpb24gZ2VuZXJhdGVNb250aGx5VGlja3MobWluLCBtYXgpIHtcbi8vICAgY29uc3QgcmVzID0gW107XG4vLyAgIGNvbnN0IGQgPSBuZXcgRGF0ZShtaW4pO1xuXG4vLyAgIGQuc2V0RGF0ZSgxKTsgLy8gYWxpZ24gbW9udGggc3RhcnRcblxuLy8gICB3aGlsZSAoZC5nZXRUaW1lKCkgPD0gbWF4KSB7XG4vLyAgICAgcmVzLnB1c2goZC5nZXRUaW1lKCkpO1xuLy8gICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpICsgMSk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gcmVzO1xuLy8gfVxuXG5jb25zdCBjb250YWluZXJTdHlsZSA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBzdmdTdHlsZSA9IGNzc2BcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcbiIsImV4cG9ydCBpbnRlcmZhY2UgVGltZVNlcmllc1BvaW50IHtcclxuICBkYXRlOiBEYXRlO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZVNlcmllc1Jlc3VsdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBsYXQ6IG51bWJlcjtcclxuICBsb246IG51bWJlcjtcclxuICBkYXRhOiBUaW1lU2VyaWVzUG9pbnRbXTtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGxheWVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFRpbWVTZXJpZXMoXHJcbiAgd21zVXJsOiBzdHJpbmcsXHJcbiAgbGF5ZXJOYW1lOiBzdHJpbmcsXHJcbiAgbGF0OiBudW1iZXIsXHJcbiAgbG9uOiBudW1iZXIsXHJcbiAgc3RhcnREYXRlOiBzdHJpbmcsXHJcbiAgZW5kRGF0ZTogc3RyaW5nXHJcbik6IFByb21pc2U8VGltZVNlcmllc1BvaW50W10+IHtcclxuICAvLyBDb25zdHJ1Y3Rpb24gZGUgbGEgcmVxdcOqdGUgR2V0VGltZVNlcmllcyBuY1dNU1xyXG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgU0VSVklDRTogJ1dNUycsXHJcbiAgICBWRVJTSU9OOiAnMS4xLjEnLFxyXG4gICAgUkVRVUVTVDogJ0dldFRpbWVTZXJpZXMnLFxyXG4gICAgTEFZRVJTOiBsYXllck5hbWUsXHJcbiAgICBRVUVSWV9MQVlFUlM6IGxheWVyTmFtZSxcclxuICAgIENSUzogJ0VQU0c6NDMyNicsXHJcbiAgICBYOiAnNTAnLFxyXG4gICAgWTogJzUwJyxcclxuICAgIEJCT1g6IGAke2xvbiAtIDAuMDAxfSwke2xhdCAtIDAuMDAxfSwke2xvbiArIDAuMDAxfSwke2xhdCArIDAuMDAxfWAsXHJcbiAgICBXSURUSDogJzEwMScsXHJcbiAgICBIRUlHSFQ6ICcxMDEnLFxyXG4gICAgSU5GT19GT1JNQVQ6ICd0ZXh0L2NzdicsIC8vIG91ICdhcHBsaWNhdGlvbi9qc29uJyBzaSBzdXBwb3J0w6lcclxuICAgIFRJTUU6IGAke3N0YXJ0RGF0ZX0vJHtlbmREYXRlfWBcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt3bXNVcmx9PyR7cGFyYW1zLnRvU3RyaW5nKCl9YCk7XHJcbiAgXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBFcnJldXIgbmNXTVM6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgcmV0dXJuIHBhcnNlQ1NWUmVzcG9uc2UodGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQ1NWUmVzcG9uc2UoY3N2OiBzdHJpbmcpOiBUaW1lU2VyaWVzUG9pbnRbXSB7XHJcbiAgY29uc3QgbGluZXMgPSBjc3YudHJpbSgpLnNwbGl0KCdcXG4nKTtcclxuICBjb25zdCBkYXRhOiBUaW1lU2VyaWVzUG9pbnRbXSA9IFtdO1xyXG4gIFxyXG4gIC8vIElnbm9yZXIgbCdlbi10w6p0ZSwgcGFyc2VyIGNoYXF1ZSBsaWduZVxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IFtkYXRlU3RyLCB2YWx1ZVN0cl0gPSBsaW5lc1tpXS5zcGxpdCgnLCcpO1xyXG4gICAgaWYgKGRhdGVTdHIgJiYgdmFsdWVTdHIpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlU3RyKTtcclxuICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ci50cmltKCkpLFxyXG4gICAgICAgICAgdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9pbnRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3N5bWJvbHNfU2ltcGxlTWFya2VyU3ltYm9sX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgQWxsV2lkZ2V0UHJvcHMgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tICdqaW11LWFyY2dpcyc7XHJcbmltcG9ydCB7IENhcmQsIExvYWRpbmcgfSBmcm9tICdqaW11LXVpJztcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcclxuaW1wb3J0IFBvaW50IGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9pbnQnO1xyXG5pbXBvcnQgU2ltcGxlTWFya2VyU3ltYm9sIGZyb20gJ2Vzcmkvc3ltYm9scy9TaW1wbGVNYXJrZXJTeW1ib2wnO1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJztcclxuaW1wb3J0IFdNU0xheWVyIGZyb20gXCJAYXJjZ2lzL2NvcmUvbGF5ZXJzL1dNU0xheWVyXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaFRpbWVTZXJpZXMsIFRpbWVTZXJpZXNSZXN1bHQgfSBmcm9tICcuL3V0aWxzL25jd21zU2VydmljZSc7XHJcbmltcG9ydCBUaW1lU2VyaWVzQ2hhcnQgZnJvbSAnLi9jb21wb25lbnRzL1RpbWVTZXJpZXNDaGFydCc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHNlcmllczogVGltZVNlcmllc1Jlc3VsdFtdO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8YW55PiwgU3RhdGU+IHtcclxuICBwcml2YXRlIGppbXVNYXBWaWV3OiBKaW11TWFwVmlldyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZ3JhcGhpY3NMYXllcjogR3JhcGhpY3NMYXllciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBzdGF0ZTogU3RhdGUgPSB7XHJcbiAgICBzZXJpZXM6IFtdLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBlcnJvcjogbnVsbFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5yZW1vdmVNYXBDbGlja0hhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aXZlVmlld0NoYW5nZSA9IChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICB0aGlzLmppbXVNYXBWaWV3ID0gam12O1xyXG4gICAgXHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIC8vIENyw6llciB1bmUgY291Y2hlIGdyYXBoaXF1ZSBwb3VyIGxlcyBtYXJxdWV1cnNcclxuICAgICAgdGhpcy5ncmFwaGljc0xheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBpZDogJ25jd21zLWNsaWNrLXBvaW50cycgfSk7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljc0xheWVyKTtcclxuICAgICAgXHJcbiAgICAgIC8vIMOJY291dGVyIGxlcyBjbGljcyBzdXIgbGEgY2FydGVcclxuICAgICAgam12LnZpZXcub24oJ2NsaWNrJywgdGhpcy5oYW5kbGVNYXBDbGljayk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVtb3ZlTWFwQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuZ3JhcGhpY3NMYXllciAmJiB0aGlzLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIHRoaXMuamltdU1hcFZpZXcudmlldy5tYXAucmVtb3ZlKHRoaXMuZ3JhcGhpY3NMYXllcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlTWFwQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IF9fZXNyaS5WaWV3Q2xpY2tFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHNlcmllcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAvLyBMaW1pdGUgZGUgMTAgY2xpY3NcclxuICAgIGlmIChzZXJpZXMubGVuZ3RoID49IChjb25maWcubWF4Q2xpY2tzIHx8IDEwKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6ICdNYXhpbXVtIGRlIDEwIHBvaW50cyBhdHRlaW50LiBFZmZhY2V6IHBvdXIgcmVjb21tZW5jZXIuJyB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gZXZlbnQubWFwUG9pbnQ7XHJcbiAgICBjb25zdCBjb2xvckluZGV4ID0gc2VyaWVzLmxlbmd0aCAlIGNvbmZpZy5jaGFydENvbG9ycy5sZW5ndGg7XHJcbiAgICBjb25zdCBjb2xvciA9IGNvbmZpZy5jaGFydENvbG9yc1tjb2xvckluZGV4XTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICBcclxuICAgIC8vaWRlbnRpZmllIGxhIGNvdWNoZSDDoCBpbnRlcnJvZ2VyIDogY2VsbGUgdG91dCBlbiBoYXV0IGRlIGxhIGNhcnRlXHJcbiAgICBjb25zdCBsYXllcnMgPSB0aGlzLmppbXVNYXBWaWV3LnZpZXcubWFwLmxheWVycy50b0FycmF5KClcclxuICAgICAgLmZpbHRlcihsYXllciA9PiBsYXllci52aXNpYmxlKVxyXG4gICAgICAuZmlsdGVyKGxheWVyID0+IGxheWVyLnR5cGUgPT09IFwid21zXCIpO1xyXG4gICAgY29uc3QgdG9wTGF5ZXIgPSBsYXllcnNbbGF5ZXJzLmxlbmd0aCAtIDFdIGFzIFdNU0xheWVyO1xyXG4gICAgY29uc3Qgc3VibGF5ZXJzID0gdG9wTGF5ZXIuc3VibGF5ZXJzXHJcbiAgICAgIC50b0FycmF5KClcclxuICAgICAgLmZpbHRlcihzbCA9PiBzbC52aXNpYmxlKTtcclxuICAgIGNvbnN0IHN1YmxheWVyID0gc3VibGF5ZXJzW3N1YmxheWVycy5sZW5ndGggLSAxXVxyXG4gICAgY29uc3QgbGF5ZXJOYW1lID0gc3VibGF5ZXI/Lm5hbWU7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFRpbWVTZXJpZXMoXHJcbiAgICAgICAgdG9wTGF5ZXIudXJsLFxyXG4gICAgICAgIGxheWVyTmFtZSxcclxuICAgICAgICBsYXRpdHVkZSxcclxuICAgICAgICBsb25naXR1ZGUsXHJcbiAgICAgICAgY29uZmlnLnN0YXJ0RGF0ZSxcclxuICAgICAgICBjb25maWcuZW5kRGF0ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc3QgbmV3U2VyaWVzOiBUaW1lU2VyaWVzUmVzdWx0ID0ge1xyXG4gICAgICAgIGlkOiBgcG9pbnQtJHtEYXRlLm5vdygpfWAsXHJcbiAgICAgICAgbGF0OiBsYXRpdHVkZSxcclxuICAgICAgICBsb246IGxvbmdpdHVkZSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGxheWVyOiBsYXllck5hbWUsXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEFqb3V0ZXIgbGUgbWFycXVldXIgc3VyIGxhIGNhcnRlXHJcbiAgICAgIHRoaXMuYWRkTWFya2VyKGxhdGl0dWRlLCBsb25naXR1ZGUsIGNvbG9yLCBzZXJpZXMubGVuZ3RoICsgMSk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXYgPT4gKHtcclxuICAgICAgICBzZXJpZXM6IFsuLi5wcmV2LnNlcmllcywgbmV3U2VyaWVzXSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZztcclxuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IGVyci5tZXNzYWdlO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgbWVzc2FnZSA9IGVycjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZXJyKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogYEVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBkb25uw6llczogJHttZXNzYWdlfWBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYWRkTWFya2VyID0gKGxhdDogbnVtYmVyLCBsb246IG51bWJlciwgY29sb3I6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmdyYXBoaWNzTGF5ZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwb2ludCA9IG5ldyBQb2ludCh7IGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG9uIH0pO1xyXG4gICAgY29uc3Qgc3ltYm9sID0gbmV3IFNpbXBsZU1hcmtlclN5bWJvbCh7XHJcbiAgICAgIHN0eWxlOiAnY2lyY2xlJyxcclxuICAgICAgc2l6ZTogMTIsXHJcbiAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgb3V0bGluZTogeyBjb2xvcjogJ3doaXRlJywgd2lkdGg6IDIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgZ2VvbWV0cnk6IHBvaW50LFxyXG4gICAgICBzeW1ib2wsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHsgaW5kZXggfSxcclxuICAgICAgcG9wdXBUZW1wbGF0ZToge1xyXG4gICAgICAgIHRpdGxlOiBgUG9pbnQgJHtpbmRleH1gLFxyXG4gICAgICAgIGNvbnRlbnQ6IGBMYXQ6ICR7bGF0LnRvRml4ZWQoNSl9LCBMb246ICR7bG9uLnRvRml4ZWQoNSl9YFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmdyYXBoaWNzTGF5ZXIuYWRkKGdyYXBoaWMpO1xyXG4gIH07XHJcblxyXG4gIGNsZWFyQWxsID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuZ3JhcGhpY3NMYXllcikge1xyXG4gICAgICB0aGlzLmdyYXBoaWNzTGF5ZXIucmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VyaWVzOiBbXSwgZXJyb3I6IG51bGwgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB1c2VNYXBXaWRnZXRJZHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IHNlcmllcywgbG9hZGluZywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuY3dtcy10aW1lc2VyaWVzLXdpZGdldFwiIGNzcz17c3R5bGVzfT5cclxuICAgICAgICB7LyogQ29ubmV4aW9uIMOgIGxhIGNhcnRlICovfVxyXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3VzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7LyogWm9uZSBkZSBncmFwaGlxdWUgKi99XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2hhcnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aDQ+U8OpcmllcyB0ZW1wb3JlbGxlcyAoe3Nlcmllcy5sZW5ndGh9LzEwKTwvaDQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWNsZWFyXCIgXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGVhckFsbH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17c2VyaWVzLmxlbmd0aCA9PT0gMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEVmZmFjZXIgdG91dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nIHR5cGU9XCJTRUNPTkRBUllcIiAvPn1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L2Rpdj59XHJcblxyXG4gICAgICAgICAge3Nlcmllcy5sZW5ndGggPT09IDAgJiYgIWxvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICBDbGlxdWV6IHN1ciBsYSBjYXJ0ZSBwb3VyIGFmZmljaGVyIHVuZSBzw6lyaWUgdGVtcG9yZWxsZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxUaW1lU2VyaWVzQ2hhcnQgc2VyaWVzPXtzZXJpZXN9IC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiBMw6lnZW5kZSAqL31cclxuICAgICAgICAgIHtzZXJpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVnZW5kXCI+XHJcbiAgICAgICAgICAgICAge3Nlcmllcy5tYXAoKHMsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzLmlkfSBjbGFzc05hbWU9XCJsZWdlbmQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZWdlbmQtY29sb3JcIiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHMuY29sb3IgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+UG9pbnQge2kgKyAxfSA6IHtzLmxheWVyfSAoe3MubGF0LnRvRml4ZWQoMyl9LCB7cy5sb24udG9GaXhlZCgzKX0pPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gIC5jaGFydC1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNoYXJ0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBcclxuICAgIGg0IHsgbWFyZ2luOiAwOyB9XHJcbiAgICBcclxuICAgIC5idG4tY2xlYXIge1xyXG4gICAgICBwYWRkaW5nOiA0cHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHsgYmFja2dyb3VuZDogI2UwZTBlMDsgfVxyXG4gICAgICAmOmRpc2FibGVkIHsgb3BhY2l0eTogMC41OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGFjZWhvbGRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGNvbG9yOiAjZDMyZjJmO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZWJlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWdlbmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgXHJcbiAgICAubGVnZW5kLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGVnZW5kLWNvbG9yIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9