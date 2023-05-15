/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/hero-image/edit.js":
/*!***************************************!*\
  !*** ./blocks/src/hero-image/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/image-1.png */ "./blocks/src/hero-image/assets/image-1.png");
/* harmony import */ var _assets_image_1_mobile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/image-1-mobile.png */ "./blocks/src/hero-image/assets/image-1-mobile.png");
/* harmony import */ var _assets_image_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/image-2.png */ "./blocks/src/hero-image/assets/image-2.png");
/* harmony import */ var _assets_image_2_mobile_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/image-2-mobile.png */ "./blocks/src/hero-image/assets/image-2-mobile.png");
/* harmony import */ var _assets_background_1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/background-1.jpg */ "./blocks/src/hero-image/assets/background-1.jpg");
/* harmony import */ var _assets_background_1_mobile_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/background-1-mobile.jpg */ "./blocks/src/hero-image/assets/background-1-mobile.jpg");
/* harmony import */ var _assets_background_2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/background-2.jpg */ "./blocks/src/hero-image/assets/background-2.jpg");
/* harmony import */ var _assets_background_2_mobile_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/background-2-mobile.jpg */ "./blocks/src/hero-image/assets/background-2-mobile.jpg");












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
    colors,
    widths,
    title,
    description,
    button,
    image,
    background,
    bigText
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    label: 'Hero image'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: title.desktop,
    className: "input",
    onChange: value => {
      const newValue = {
        ...title
      };
      newValue.desktop = value;
      setAttributes({
        title: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: title.mobile,
    className: "input",
    onChange: value => {
      const newValue = {
        ...title
      };
      newValue.mobile = value;
      setAttributes({
        title: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Color (optional)",
    value: colors.title,
    className: "input",
    onChange: value => {
      const newValue = {
        ...colors
      };
      newValue.title = value;
      setAttributes({
        colors: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Max Width",
    value: widths.desktop.title,
    className: "input",
    onChange: value => {
      const newValue = {
        ...widths
      };
      newValue.desktop.title = value;
      setAttributes({
        widths: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: widths.mobile.title,
    className: "input",
    onChange: value => {
      const newValue = {
        ...widths
      };
      newValue.mobile.title = value;
      setAttributes({
        widths: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Margin Top",
    value: margins.desktop.title,
    className: "input",
    onChange: value => {
      const newValue = {
        ...margins
      };
      newValue.desktop.title = value;
      setAttributes({
        margins: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: margins.mobile.title,
    className: "input",
    onChange: value => {
      const newValue = {
        ...margins
      };
      newValue.mobile.title = value;
      setAttributes({
        margins: newValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: "Description",
    help: "You could use all HTML tags in the description field.",
    value: description.desktop,
    className: "input",
    onChange: value => {
      const newValue = {
        ...description
      };
      newValue.desktop = value;
      setAttributes({
        description: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: "Mobile (optional)",
    value: description.mobile,
    className: "input",
    onChange: value => {
      const newValue = {
        ...description
      };
      newValue.mobile = value;
      setAttributes({
        description: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Color (optional)",
    value: colors.description,
    className: "input",
    onChange: value => {
      const newValue = {
        ...colors
      };
      newValue.description = value;
      setAttributes({
        colors: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Max Width",
    value: widths.desktop.description,
    className: "input",
    onChange: value => {
      const newValue = {
        ...widths
      };
      newValue.desktop.description = value;
      setAttributes({
        widths: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: widths.mobile.description,
    className: "input",
    onChange: value => {
      const newValue = {
        ...widths
      };
      newValue.mobile.description = value;
      setAttributes({
        widths: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Margin Top",
    value: margins.desktop.description,
    className: "input",
    onChange: value => {
      const newValue = {
        ...margins
      };
      newValue.desktop.description = value;
      setAttributes({
        margins: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: margins.mobile.description,
    className: "input",
    onChange: value => {
      const newValue = {
        ...margins
      };
      newValue.mobile.description = value;
      setAttributes({
        margins: newValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Button",
    value: button.desktop,
    className: "input",
    onChange: value => {
      const newValue = {
        ...button
      };
      newValue.desktop = value;
      setAttributes({
        button: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: button.mobile,
    className: "input",
    onChange: value => {
      const newValue = {
        ...button
      };
      newValue.mobile = value;
      setAttributes({
        button: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Button Link",
    value: button.target,
    className: "input",
    onChange: value => {
      const newValue = {
        ...button
      };
      newValue.target = value;
      setAttributes({
        button: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Margin Top",
    value: margins.desktop.button,
    className: "input",
    onChange: value => {
      const newValue = {
        ...margins
      };
      newValue.desktop.button = value;
      setAttributes({
        margins: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: margins.mobile.button,
    className: "input",
    onChange: value => {
      const newValue = {
        ...margins
      };
      newValue.mobile.button = value;
      setAttributes({
        margins: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Button Type",
    value: button.type,
    className: "input",
    onChange: value => {
      const newValue = {
        ...button
      };
      newValue.type = value;
      setAttributes({
        button: newValue
      });
    },
    options: [{
      label: 'Primary Button',
      value: 'primary-button'
    }, {
      label: 'Outlined Button',
      value: 'outlined-button'
    }, {
      label: 'White Button',
      value: 'white-button'
    }, {
      label: 'Outlined White Button',
      value: 'outlined-white-button'
    }, {
      label: 'Link Button',
      value: 'link-button'
    }, {
      label: 'Line Button',
      value: 'line-button'
    }]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => {
      const newValue = {
        ...image
      };
      newValue.desktop = value;
      setAttributes({
        image: newValue
      });
    },
    type: "image",
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, image.desktop.url == 'image-1.png' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : image.desktop.url == 'image-2.png' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_png__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : image.desktop.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: image.desktop.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => {
      const newValue = {
        ...image
      };
      newValue.desktop = {
        url: '',
        alt: ''
      };
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => {
      const newValue = {
        ...image
      };
      newValue.desktop = {
        url: 'image-1.png',
        alt: ''
      };
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => {
      const newValue = {
        ...image
      };
      newValue.desktop = {
        url: 'image-2.png',
        alt: ''
      };
      setAttributes({
        image: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Mobile (optional)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => {
      const newValue = {
        ...image
      };
      newValue.mobile = value;
      setAttributes({
        image: newValue
      });
    },
    type: "image",
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, image.mobile.url == 'image-1-mobile.png' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_mobile_png__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : image.mobile.url == 'image-2-mobile.png' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_mobile_png__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : image.mobile.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: image.mobile.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => {
      const newValue = {
        ...image
      };
      newValue.mobile = {
        url: '',
        alt: ''
      };
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => {
      const newValue = {
        ...image
      };
      newValue.mobile = {
        url: 'image-1-mobile.png',
        alt: ''
      };
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => {
      const newValue = {
        ...image
      };
      newValue.mobile = {
        url: 'image-2-mobile.png',
        alt: ''
      };
      setAttributes({
        image: newValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Width",
    value: image.width.desktop,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.width.desktop = value;
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: image.width.mobile,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.width.mobile = value;
      setAttributes({
        image: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Height",
    value: image.height.desktop,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.height.desktop = value;
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: image.height.mobile,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.height.mobile = value;
      setAttributes({
        image: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Position Top",
    value: image.position.desktop.top,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.desktop.top = value;
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile",
    value: image.position.mobile.top,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.mobile.top = value;
      setAttributes({
        image: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Position Bottom",
    value: image.position.desktop.bottom,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.desktop.bottom = value;
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile",
    value: image.position.mobile.bottom,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.mobile.bottom = value;
      setAttributes({
        image: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Position Left",
    value: image.position.desktop.left,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.desktop.left = value;
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile",
    value: image.position.mobile.left,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.mobile.left = value;
      setAttributes({
        image: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Position Right",
    value: image.position.desktop.right,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.desktop.right = value;
      setAttributes({
        image: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile",
    value: image.position.mobile.right,
    className: "input",
    onChange: value => {
      const newValue = {
        ...image
      };
      newValue.position.mobile.right = value;
      setAttributes({
        image: newValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Background"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => {
      const newValue = {
        ...background
      };
      newValue.desktop = value;
      setAttributes({
        background: newValue
      });
    },
    type: "image",
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, background.desktop.url == 'background-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_background_1_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "background"
      }) : background.desktop.url == 'background-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_background_2_jpg__WEBPACK_IMPORTED_MODULE_9__,
        alt: "background"
      }) : background.desktop.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: background.desktop.url,
        alt: "background"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => {
      const newValue = {
        ...background
      };
      newValue.desktop = {
        url: '',
        alt: ''
      };
      setAttributes({
        background: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => {
      const newValue = {
        ...background
      };
      newValue.desktop = {
        url: 'background-1.jpg',
        alt: ''
      };
      setAttributes({
        background: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => {
      const newValue = {
        ...background
      };
      newValue.desktop = {
        url: 'background-2.jpg',
        alt: ''
      };
      setAttributes({
        background: newValue
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Mobile (optional)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => {
      const newValue = {
        ...background
      };
      newValue.mobile = value;
      setAttributes({
        background: newValue
      });
    },
    type: "image",
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, background.mobile.url == 'background-1-mobile.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_background_1_mobile_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "background"
      }) : background.mobile.url == 'background-2-mobile.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_background_2_mobile_jpg__WEBPACK_IMPORTED_MODULE_10__,
        alt: "background"
      }) : background.mobile.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: background.mobile.url,
        alt: "background"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => {
      const newValue = {
        ...background
      };
      newValue.mobile = {
        url: '',
        alt: ''
      };
      setAttributes({
        background: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => {
      const newValue = {
        ...background
      };
      newValue.mobile = {
        url: 'background-1-mobile.jpg',
        alt: ''
      };
      setAttributes({
        background: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => {
      const newValue = {
        ...background
      };
      newValue.mobile = {
        url: 'background-2-mobile.jpg',
        alt: ''
      };
      setAttributes({
        background: newValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: "Increase description size",
    checked: bigText,
    onChange: value => setAttributes({
      bigText: value
    }),
    className: "checkbox"
  })))));
}

/***/ }),

/***/ "./blocks/src/hero-image/index.js":
/*!****************************************!*\
  !*** ./blocks/src/hero-image/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/hero-image/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./blocks/src/hero-image/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/src/hero-image/edit.js");




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./blocks/src/hero-image/style.scss":
/*!******************************************!*\
  !*** ./blocks/src/hero-image/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/src/hero-image/assets/background-1-mobile.jpg":
/*!**************************************************************!*\
  !*** ./blocks/src/hero-image/assets/background-1-mobile.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-1-mobile.c0481277.jpg";

/***/ }),

/***/ "./blocks/src/hero-image/assets/background-1.jpg":
/*!*******************************************************!*\
  !*** ./blocks/src/hero-image/assets/background-1.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-1.606eb8cf.jpg";

/***/ }),

/***/ "./blocks/src/hero-image/assets/background-2-mobile.jpg":
/*!**************************************************************!*\
  !*** ./blocks/src/hero-image/assets/background-2-mobile.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-2-mobile.11b9f215.jpg";

/***/ }),

/***/ "./blocks/src/hero-image/assets/background-2.jpg":
/*!*******************************************************!*\
  !*** ./blocks/src/hero-image/assets/background-2.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background-2.02938479.jpg";

/***/ }),

/***/ "./blocks/src/hero-image/assets/image-1-mobile.png":
/*!*********************************************************!*\
  !*** ./blocks/src/hero-image/assets/image-1-mobile.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-1-mobile.4fdcc0aa.png";

/***/ }),

/***/ "./blocks/src/hero-image/assets/image-1.png":
/*!**************************************************!*\
  !*** ./blocks/src/hero-image/assets/image-1.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-1.1cd747ab.png";

/***/ }),

/***/ "./blocks/src/hero-image/assets/image-2-mobile.png":
/*!*********************************************************!*\
  !*** ./blocks/src/hero-image/assets/image-2-mobile.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-2-mobile.6de78059.png";

/***/ }),

/***/ "./blocks/src/hero-image/assets/image-2.png":
/*!**************************************************!*\
  !*** ./blocks/src/hero-image/assets/image-2.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-2.bd69fad6.png";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./blocks/src/hero-image/block.json":
/*!******************************************!*\
  !*** ./blocks/src/hero-image/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"banescocontigo/hero-image","version":"1.0.0","title":"Hero image","category":"widgets","icon":"admin-home","supports":{"html":false},"textdomain":"blocks","editorScript":"file:../../../blocks/build/hero-image.js","editorStyle":"file:../../../blocks/build/hero-image.css","style":"file:../../../blocks/build/style-hero-image.css","attributes":{"paddings":{"type":"object","default":{"desktop":{"top":"100px","bottom":"300px"},"mobile":{"top":"50px","bottom":"400px"}}},"margins":{"type":"object","default":{"desktop":{"top":"0px","bottom":"0px","title":"0px","description":"20px","button":"30px"},"mobile":{"top":"0px","bottom":"0px","title":"0px","description":"15px","button":"20px"}}},"gradient":{"type":"string","default":"#FFFFFF"},"title":{"type":"object","default":{"desktop":"Title","mobile":""}},"description":{"type":"object","default":{"desktop":"Very very very very very very very very very very very very very very very very very long description.","mobile":""}},"button":{"type":"object","default":{"desktop":"Button","mobile":"","target":"/","type":"outlined-button"}},"colors":{"type":"object","default":{"title":"#007953","description":"#007953"}},"widths":{"type":"object","default":{"desktop":{"title":"400px","description":"400px"},"mobile":{"title":"100%","description":"100%"}}},"image":{"type":"object","default":{"desktop":{"url":"image-1.png","alt":""},"mobile":{"url":"image-1-mobile.png","alt":""},"width":{"desktop":"700px","mobile":"auto"},"height":{"desktop":"500px","mobile":"auto"},"position":{"desktop":{"top":"0px","right":"0px","bottom":"auto","left":"auto"},"mobile":{"top":"90%","right":"-16px","bottom":"auto","left":"-16px"}}}},"background":{"type":"object","default":{"desktop":{"url":"background-1.jpg","alt":""},"mobile":{"url":"background-1-mobile.jpg","alt":""}}},"bigText":{"type":"boolean","default":false}}}');

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"hero-image": 0,
/******/ 			"./style-hero-image": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkbanescocontigo"] = globalThis["webpackChunkbanescocontigo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-hero-image"], () => (__webpack_require__("./blocks/src/hero-image/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=hero-image.js.map