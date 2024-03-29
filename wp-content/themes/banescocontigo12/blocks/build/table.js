/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/table/edit.js":
/*!**********************************!*\
  !*** ./blocks/src/table/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




/**
 * @param {Object}   param0
 * @param {Object}   param0.attributes
 * @param {Function} param0.setAttributes
 * @return {WPElement}
 */

function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    paddings,
    margins,
    gradient,
    items,
    info
  } = attributes;
  const setItemAttribute = (tab, attribute, value) => {
    setAttributes({
      items: items.map(item => {
        if (item.name === tab.name) {
          return {
            ...item,
            [attribute]: value
          };
        }
        return item;
      })
    });
  };
  const removeItem = tab => {
    setAttributes({
      items: items.filter(item => item.name !== tab.name)
    });
  };
  const addItem = name => {
    setAttributes({
      items: [...items, {
        name: name,
        title: 'New',
        html: '',
        id: ''
      }]
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    label: 'Table'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "paddings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "padding top",
    value: paddings.desktop.top,
    className: "input",
    onChange: value => {
      const newPaddings = {
        ...paddings
      };
      newPaddings.desktop.top = value;
      setAttributes({
        paddings: newPaddings
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "for mobile",
    value: paddings.mobile.top,
    className: "input",
    onChange: value => {
      const newPaddings = {
        ...paddings
      };
      newPaddings.mobile.top = value;
      setAttributes({
        paddings: newPaddings
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "padding bottom",
    value: paddings.desktop.bottom,
    className: "input",
    onChange: value => {
      const newPaddings = {
        ...paddings
      };
      newPaddings.desktop.bottom = value;
      setAttributes({
        paddings: newPaddings
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "for mobile",
    value: paddings.mobile.bottom,
    className: "input",
    onChange: value => {
      const newPaddings = {
        ...paddings
      };
      newPaddings.mobile.bottom = value;
      setAttributes({
        paddings: newPaddings
      });
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "margins"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "margin top",
    value: margins.desktop.top,
    className: "input",
    onChange: value => {
      const newMargins = {
        ...margins
      };
      newMargins.desktop.top = value;
      setAttributes({
        margins: newMargins
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "for mobile",
    value: margins.mobile.top,
    className: "input",
    onChange: value => {
      const newMargins = {
        ...margins
      };
      newMargins.mobile.top = value;
      setAttributes({
        margins: newMargins
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "margin bottom",
    value: margins.desktop.bottom,
    className: "input",
    onChange: value => {
      const newMargins = {
        ...margins
      };
      newMargins.desktop.bottom = value;
      setAttributes({
        margins: newMargins
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "for mobile",
    value: margins.mobile.bottom,
    className: "input",
    onChange: value => {
      const newMargins = {
        ...margins
      };
      newMargins.mobile.bottom = value;
      setAttributes({
        margins: newMargins
      });
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "background"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Default background",
    value: gradient,
    className: "input",
    onChange: value => setAttributes({
      gradient: value
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Button",
    value: tab.title,
    className: "input",
    onChange: value => setFilterAttribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "ID",
    value: tab.id,
    className: "input",
    onChange: value => setFilterAttribute(tab, 'id', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: "HTML",
    value: tab.html,
    className: "input long",
    onChange: value => setItemAttribute(tab, 'html', value)
  })), items.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem(tab)
  }, "Remove"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: "Information",
    value: info,
    className: "input",
    onChange: value => setAttributes({
      info: value
    })
  })))));
}

/***/ }),

/***/ "./blocks/src/table/index.js":
/*!***********************************!*\
  !*** ./blocks/src/table/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/table/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./blocks/src/table/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/src/table/edit.js");




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./blocks/src/table/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/table/style.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./blocks/src/table/block.json":
/*!*************************************!*\
  !*** ./blocks/src/table/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"banescocontigo/table","version":"1.0.0","title":"Table","category":"widgets","icon":"editor-table","supports":{"html":false},"textdomain":"blocks","editorScript":"file:../../../blocks/build/table.js","editorStyle":"file:../../../blocks/build/table.css","style":"file:../../../blocks/build/style-table.css","attributes":{"paddings":{"type":"object","default":{"desktop":{"top":"0px","bottom":"117px"},"mobile":{"top":"0px","bottom":"51px"}}},"margins":{"type":"object","default":{"desktop":{"top":"0px","bottom":"0px"},"mobile":{"top":"0px","bottom":"0px"}}},"gradient":{"type":"string","default":"#fff"},"items":{"type":"array","default":[{"name":"tab1","title":"Cuenta de ahorros","id":"savings-account","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr style=\\"background: #F7F9FB; color: #708090;\\">\\n<td>Plazos</td><td colspan=\\"2\\">Tasas de interés</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab2","title":"Cuenta corriente","id":"current-account","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr style=\\"background: #F7F9FB; color: #708090;\\">\\n<td>Plazos</td><td colspan=\\"2\\">Tasas de interés</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>6 meses</td><td>1.50%</td><td>1.50%</td>\\n</tr>\\n<tr>\\n<td>9 meses</td><td>2.00%</td><td>2.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab3","title":"Plazo fijo","id":"fixed-term","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr style=\\"background: #F7F9FB; color: #708090;\\">\\n<td>Plazos</td><td colspan=\\"2\\">Tasas de interés</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>6 meses</td><td>1.50%</td><td>1.50%</td>\\n</tr>\\n<tr>\\n<td>9 meses</td><td>2.00%</td><td>2.00%</td>\\n</tr>\\n<tr>\\n<td>12 meses</td><td>2.90%</td><td>2.90%</td>\\n</tr>\\n<tr>\\n<td>18 meses</td><td>2.98%</td><td>2.98%</td>\\n</tr>\\n<tr>\\n<td>24 meses</td><td>3.05%</td><td>3.05%</td>\\n</tr>\\n<tr>\\n<td>32 meses</td><td>3.15%</td><td>3.15%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab4","title":"Cargo por servicio Cuentas","id":"service-charge-accounts","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td colspan=\\"2\\">Tasas de interés</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab5","title":"Transferencias internacionales","id":"international-transfers","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab6","title":"Hipotecas","id":"mortgages","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab7","title":"Préstamos personales","id":"personal-loans","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>100.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab8","title":"Préstamos comerciales","id":"business-loans","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab9","title":"Tarjetas de crédito","id":"credit-cards","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>Monto para apertura de depósito</td><td>10,000.00</td><td>10,000.00</td>\\n</tr>\\n<tr>\\n<td>Plazos</td><td>Tasas de interés</td><td>Tasas de interés 2</td>\\n</tr>\\n<tr>\\n<td>30 días</td><td>0.25%</td><td>0.25%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>2 meses</td><td>0.50%</td><td>0.50%</td>\\n</tr>\\n<tr>\\n<td>3 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n<tr>\\n<td>20 meses</td><td>0.50%</td><td>20.50%</td>\\n</tr>\\n<tr>\\n<td>33 meses</td><td>1.00%</td><td>1.00%</td>\\n</tr>\\n</tbody>\\n</table>\\n"},{"name":"tab10","title":"Otros servicios","id":"other-services","html":"<table>\\n<thead>\\n<tr>\\n<td>Condiciones</td><td>Persona neutral</td><td>Persona jurídica</td>\\n</tr>\\n</thead>\\n<tbody>\\n</tbody>\\n</table>\\n"}]},"info":{"type":"string","default":"Estas comisiones no incluyen el 7% de ITBMS. Comisiones sujetas al impuesto de ITBMS (7%) sobre comisiones generadas por servicios bancarios prestados, establecidos según la Ley 49 de septiembre de 2009 y la Ley 8 de marzo de 2010."}}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"table": 0,
/******/ 			"./style-table": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbanescocontigo"] = self["webpackChunkbanescocontigo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-table"], function() { return __webpack_require__("./blocks/src/table/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=table.js.map