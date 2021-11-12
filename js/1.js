(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/views/dashboard/render.js":
/*!***************************************!*\
  !*** ./src/views/dashboard/render.js ***!
  \***************************************/
/*! exports provided: renderIncomeChart, renderCustomerChart, renderRateChart, renderSoldOutChart, renderSharesChart, renderFlowChart, initMainChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIncomeChart\", function() { return renderIncomeChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCustomerChart\", function() { return renderCustomerChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderRateChart\", function() { return renderRateChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSoldOutChart\", function() { return renderSoldOutChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSharesChart\", function() { return renderSharesChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFlowChart\", function() { return renderFlowChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMainChart\", function() { return initMainChart; });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ \"./node_modules/core-js/modules/es.number.to-fixed.js\");\n/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/*\r\n * @Author: 徐建辰\r\n * @Date: 2021-10-23 11:35:35\r\n * @LastEditTime: 2021-11-11 15:01:59\r\n * @LastEditors: Please set LastEditors\r\n * @Description: 首页图表渲染文件\r\n */\n// eslint-disable-next-line no-undef\nvar _G2Plot = G2Plot,\n    Area = _G2Plot.Area,\n    Bullet = _G2Plot.Bullet,\n    Pie = _G2Plot.Pie,\n    Sankey = _G2Plot.Sankey,\n    Mix = _G2Plot.Mix,\n    Stock = _G2Plot.Stock; // eslint-disable-next-line no-undef\n\nvar _G = G2,\n    Chart = _G.Chart; // 渲染收入图表\n\nvar renderIncomeChart = function renderIncomeChart(container) {\n  fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json').then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    var area = new Area(container, {\n      data: data,\n      xField: 'Date',\n      yField: 'scales',\n      xAxis: {\n        range: [0, 1],\n        tickCount: 5\n      },\n      areaStyle: function areaStyle() {\n        return {\n          fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'\n        };\n      }\n    });\n    area.render();\n  });\n}; // 渲染客户数\n\nvar renderCustomerChart = function renderCustomerChart(container) {\n  var customerData = [{\n    type: '3月',\n    value: 2654,\n    percent: 0.4\n  }, {\n    type: '4月',\n    value: 3654,\n    percent: 0.02\n  }, {\n    type: '5月',\n    value: 4400,\n    percent: 0.2\n  }, {\n    type: '6月',\n    value: 5300,\n    percent: 0.24\n  }, {\n    type: '7月',\n    value: 6200,\n    percent: 0.28\n  }, {\n    type: '8月',\n    value: 3300,\n    percent: 0.14\n  }, {\n    type: '9月',\n    value: 1500,\n    percent: 0.06\n  }];\n  var chart = new Chart({\n    container: container,\n    autoFit: true,\n    height: 500,\n    padding: [50, 20, 50, 20]\n  });\n  chart.data(customerData);\n  chart.scale('value', {\n    alias: '总数'\n  });\n  chart.axis('type', {\n    tickLine: {\n      alignTick: false\n    }\n  });\n  chart.axis('value', false);\n  chart.tooltip({\n    showMarkers: false\n  });\n  chart.interval().position('type*value');\n  chart.interaction('element-active'); // 添加文本标注\n\n  customerData.forEach(function (item) {\n    chart.annotation().text({\n      position: [item.type, item.value],\n      content: item.value,\n      style: {\n        textAlign: 'center'\n      },\n      offsetY: -30\n    }).text({\n      position: [item.type, item.value],\n      content: (item.percent * 100).toFixed(0) + '%',\n      style: {\n        textAlign: 'center'\n      },\n      offsetY: -12\n    });\n  });\n  chart.render();\n}; // 渲染好评数\n\nvar renderRateChart = function renderRateChart(container) {\n  var data = [{\n    title: '满意度',\n    ranges: [40, 70, 100],\n    measures: [30, 50],\n    target: 85\n  }];\n  var bulletPlot = new Bullet(container, {\n    data: data,\n    measureField: 'measures',\n    rangeField: 'ranges',\n    targetField: 'target',\n    xField: 'title',\n    color: {\n      range: ['#FFbcb8', '#FFe0b0', '#bfeec8'],\n      measure: ['#5B8FF9', '#61DDAA'],\n      target: '#39a3f4'\n    },\n    label: {\n      measure: {\n        position: 'middle',\n        style: {\n          fill: '#fff'\n        }\n      }\n    },\n    xAxis: {\n      line: null\n    },\n    yAxis: false,\n    tooltip: {\n      showMarkers: false,\n      shared: true\n    },\n    // 自定义 legend\n    legend: {\n      custom: true,\n      position: 'bottom',\n      items: [{\n        value: '差',\n        name: '差',\n        marker: {\n          symbol: 'square',\n          style: {\n            fill: '#FFbcb8',\n            r: 5\n          }\n        }\n      }, {\n        value: '良',\n        name: '良',\n        marker: {\n          symbol: 'square',\n          style: {\n            fill: '#FFe0b0',\n            r: 5\n          }\n        }\n      }, {\n        value: '优',\n        name: '优',\n        marker: {\n          symbol: 'square',\n          style: {\n            fill: '#bfeec8',\n            r: 5\n          }\n        }\n      }, {\n        value: '第一季度',\n        name: '第一季度',\n        marker: {\n          symbol: 'square',\n          style: {\n            fill: '#5B8FF9',\n            r: 5\n          }\n        }\n      }, {\n        value: '第二季度',\n        name: '第二季度',\n        marker: {\n          symbol: 'square',\n          style: {\n            fill: ' #61DDAA',\n            r: 5\n          }\n        }\n      }, {\n        value: '目标值',\n        name: '目标值',\n        marker: {\n          symbol: 'line',\n          style: {\n            stroke: '#39a3f4',\n            r: 5\n          }\n        }\n      }]\n    }\n  });\n  bulletPlot.render();\n}; // 渲染已售出\n\nvar renderSoldOutChart = function renderSoldOutChart(container) {\n  var data = [{\n    type: '男生上衣',\n    value: 27\n  }, {\n    type: '七分裤',\n    value: 25\n  }, {\n    type: '包包',\n    value: 18\n  }, {\n    type: '休闲鞋',\n    value: 15\n  }, {\n    type: '连衣裙',\n    value: 10\n  }, {\n    type: '其他',\n    value: 5\n  }];\n  var piePlot = new Pie(container, {\n    appendPadding: 10,\n    data: data,\n    angleField: 'value',\n    colorField: 'type',\n    radius: 0.8,\n    label: {\n      type: 'outer',\n      content: '{name} {percentage}'\n    },\n    interactions: [{\n      type: 'pie-legend-active'\n    }, {\n      type: 'element-active'\n    }]\n  });\n  piePlot.render();\n}; // 渲染股票\n\nvar renderSharesChart = function renderSharesChart(container) {\n  fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json').then(function (data) {\n    return data.json();\n  }).then(function (data) {\n    var stockPlot = new Stock(container, {\n      data: data,\n      xField: 'trade_date',\n      yField: ['open', 'close', 'high', 'low'],\n      meta: {\n        vol: {\n          alias: '成交量'\n        },\n        open: {\n          alias: '开盘价'\n        },\n        close: {\n          alias: '收盘价'\n        },\n        high: {\n          alias: '最高价'\n        },\n        low: {\n          alias: '最低价'\n        }\n      },\n      tooltip: {\n        crosshairs: {\n          // 自定义 crosshairs line 样式\n          line: {\n            style: {\n              lineWidth: 0.5,\n              stroke: 'rgba(0,0,0,0.25)'\n            }\n          },\n          text: function text(type, defaultContent, items) {\n            var textContent;\n\n            if (type === 'x') {\n              var item = items[0];\n              textContent = item ? item.title : defaultContent;\n            } else {\n              textContent = \"\".concat(defaultContent.toFixed(2));\n            }\n\n            return {\n              position: type === 'y' ? 'start' : 'end',\n              content: textContent,\n              // 自定义 crosshairs text 样式\n              style: {\n                fill: '#dfdfdf'\n              }\n            };\n          },\n          // 自定义 crosshairs textBackground 样式\n          textBackground: {\n            padding: [4, 8],\n            style: {\n              fill: '#363636'\n            }\n          }\n        }\n      }\n    });\n    stockPlot.render();\n  });\n}; // 渲染流量分析\n\nvar renderFlowChart = function renderFlowChart(container) {\n  var DATA = [{\n    source1: '首次打开',\n    target: '首页 UV',\n    value: 160\n  }, {\n    source1: '结果页',\n    target: '首页 UV',\n    value: 40\n  }, {\n    source1: '验证页',\n    target: '首页 UV',\n    value: 10\n  }, {\n    source1: '我的',\n    target: '首页 UV',\n    value: 10\n  }, {\n    source1: '朋友',\n    target: '首页 UV',\n    value: 8\n  }, {\n    source1: '其他来源',\n    target: '首页 UV',\n    value: 27\n  }, {\n    source1: '首页 UV',\n    target: '理财',\n    value: 30\n  }, {\n    source1: '首页 UV',\n    target: '扫一扫',\n    value: 40\n  }, {\n    source1: '首页 UV',\n    target: '服务',\n    value: 35\n  }, {\n    source1: '首页 UV',\n    target: '活动推广',\n    value: 25\n  }, {\n    source1: '首页 UV',\n    target: '跳失',\n    value: 10\n  }, {\n    source1: '首页 UV',\n    target: '线下宣传',\n    value: 30\n  }, {\n    source1: '首页 UV',\n    target: '朋友圈',\n    value: 40\n  }, {\n    source1: '首页 UV',\n    target: '其他流向',\n    value: 45\n  }];\n  var sankey = new Sankey(container, {\n    data: DATA,\n    sourceField: 'source1',\n    targetField: 'target',\n    weightField: 'value',\n    nodeWidthRatio: 0.018,\n    nodePaddingRatio: 0.03,\n    nodeState: {\n      active: {\n        style: {\n          linewidth: 1.5\n        }\n      }\n    },\n    tooltip: {\n      showTitle: true\n    }\n  });\n  sankey.render();\n  sankey.setState('active', function (datum) {\n    return datum.isNode && datum.name === '首次打开';\n  });\n}; // 渲染统计图\n\nvar initMainChart = function initMainChart(container) {\n  var averageData = [{\n    date: '2015-02',\n    value: 9168\n  }, {\n    date: '2015-08',\n    value: 11781\n  }, {\n    date: '2016-01',\n    value: 23818\n  }, {\n    date: '2017-02',\n    value: 25316\n  }, {\n    date: '2018-01',\n    value: 26698\n  }, {\n    date: '2018-08',\n    value: 27890\n  }];\n  var plot = new Mix(container, {\n    appendPadding: 8,\n    tooltip: {\n      shared: true\n    },\n    syncViewPadding: true,\n    plots: [{\n      type: 'column',\n      options: {\n        data: [{\n          date: '2015-02',\n          value: 160\n        }, {\n          date: '2015-08',\n          value: 245\n        }, {\n          date: '2016-01',\n          value: 487\n        }, {\n          date: '2017-02',\n          value: 590\n        }, {\n          date: '2018-01',\n          value: 503\n        }, {\n          date: '2018-08',\n          value: 514\n        }],\n        xField: 'date',\n        yField: 'value',\n        yAxis: {\n          type: 'log',\n          max: 100000\n        },\n        meta: {\n          date: {\n            sync: true\n          },\n          value: {\n            alias: '店数(间)'\n          }\n        },\n        label: {\n          position: 'middle'\n        }\n      }\n    }, {\n      type: 'line',\n      options: {\n        data: averageData,\n        xField: 'date',\n        yField: 'value',\n        xAxis: false,\n        yAxis: {\n          type: 'log',\n          max: 100000\n        },\n        label: {\n          offsetY: -8\n        },\n        meta: {\n          value: {\n            alias: '平均租金(元)'\n          }\n        },\n        color: '#FF6B3B',\n        annotations: averageData.map(function (d) {\n          return {\n            type: 'dataMarker',\n            position: d,\n            point: {\n              style: {\n                stroke: '#FF6B3B',\n                lineWidth: 1.5\n              }\n            }\n          };\n        })\n      }\n    }, {\n      type: 'line',\n      options: {\n        data: [{\n          date: '2015-02',\n          value: null\n        }, {\n          date: '2015-08',\n          value: 0.029\n        }, {\n          date: '2016-01',\n          value: 0.094\n        }, {\n          date: '2017-02',\n          value: 0.148\n        }, {\n          date: '2018-01',\n          value: 0.055\n        }, {\n          date: '2018-08',\n          value: 0.045\n        }],\n        xField: 'date',\n        yField: 'value',\n        xAxis: false,\n        yAxis: {\n          line: null,\n          grid: null,\n          position: 'right',\n          max: 0.16,\n          tickCount: 8\n        },\n        meta: {\n          date: {\n            sync: 'date'\n          },\n          value: {\n            alias: '递增',\n            formatter: function formatter(v) {\n              return \"\".concat((v * 100).toFixed(1), \"%\");\n            }\n          }\n        },\n        smooth: true,\n        label: {\n          callback: function callback(value) {\n            return {\n              offsetY: value === 0.148 ? 36 : value === 0.055 ? 0 : 20,\n              style: {\n                fill: '#1AAF8B',\n                fontWeight: 700,\n                stroke: '#fff',\n                lineWidth: 1\n              }\n            };\n          }\n        },\n        color: '#1AAF8B'\n      }\n    }]\n  });\n  plot.render();\n};\n\n//# sourceURL=webpack:///./src/views/dashboard/render.js?");

/***/ })

}]);