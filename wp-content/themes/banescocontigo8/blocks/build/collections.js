/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/collections/edit.js":
/*!****************************************!*\
  !*** ./blocks/src/collections/edit.js ***!
  \****************************************/
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
/* harmony import */ var _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/image-1.jpg */ "./blocks/src/collections/assets/image-1.jpg");
/* harmony import */ var _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/image-2.jpg */ "./blocks/src/collections/assets/image-2.jpg");
/* harmony import */ var _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/image-3.jpg */ "./blocks/src/collections/assets/image-3.jpg");
/* harmony import */ var _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/image-4.jpg */ "./blocks/src/collections/assets/image-4.jpg");
/* harmony import */ var _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/image-5.jpg */ "./blocks/src/collections/assets/image-5.jpg");
/* harmony import */ var _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/image-6.jpg */ "./blocks/src/collections/assets/image-6.jpg");










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
    title,
    content,
    items1,
    items2,
    items3,
    items4,
    items5,
    items6,
    items7,
    items8,
    items9
  } = attributes;
  const setItem1Attribute = (tab, attribute, value) => {
    setAttributes({
      items1: items1.map(item => {
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
  const removeItem1 = tab => {
    setAttributes({
      items1: items1.filter(item => item.name !== tab.name)
    });
  };
  const addItem1 = name => {
    setAttributes({
      items1: [...items1, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem2Attribute = (tab, attribute, value) => {
    setAttributes({
      items2: items2.map(item => {
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
  const removeItem2 = tab => {
    setAttributes({
      items2: items2.filter(item => item.name !== tab.name)
    });
  };
  const addItem2 = name => {
    setAttributes({
      items2: [...items2, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem3Attribute = (tab, attribute, value) => {
    setAttributes({
      items3: items3.map(item => {
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
  const removeItem3 = tab => {
    setAttributes({
      items3: items3.filter(item => item.name !== tab.name)
    });
  };
  const addItem3 = name => {
    setAttributes({
      items3: [...items3, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem4Attribute = (tab, attribute, value) => {
    setAttributes({
      items4: items4.map(item => {
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
  const removeItem4 = tab => {
    setAttributes({
      items4: items4.filter(item => item.name !== tab.name)
    });
  };
  const addItem4 = name => {
    setAttributes({
      items4: [...items4, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem5Attribute = (tab, attribute, value) => {
    setAttributes({
      items5: items5.map(item => {
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
  const removeItem5 = tab => {
    setAttributes({
      items5: items5.filter(item => item.name !== tab.name)
    });
  };
  const addItem5 = name => {
    setAttributes({
      items5: [...items5, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem6Attribute = (tab, attribute, value) => {
    setAttributes({
      items6: items6.map(item => {
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
  const removeItem6 = tab => {
    setAttributes({
      items6: items6.filter(item => item.name !== tab.name)
    });
  };
  const addItem6 = name => {
    setAttributes({
      items6: [...items6, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem7Attribute = (tab, attribute, value) => {
    setAttributes({
      items7: items7.map(item => {
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
  const removeItem7 = tab => {
    setAttributes({
      items7: items7.filter(item => item.name !== tab.name)
    });
  };
  const addItem7 = name => {
    setAttributes({
      items7: [...items7, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem8Attribute = (tab, attribute, value) => {
    setAttributes({
      items8: items8.map(item => {
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
  const removeItem8 = tab => {
    setAttributes({
      items8: items8.filter(item => item.name !== tab.name)
    });
  };
  const addItem8 = name => {
    setAttributes({
      items8: [...items8, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  const setItem9Attribute = (tab, attribute, value) => {
    setAttributes({
      items9: items9.map(item => {
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
  const removeItem9 = tab => {
    setAttributes({
      items9: items9.filter(item => item.name !== tab.name)
    });
  };
  const addItem9 = name => {
    setAttributes({
      items9: [...items9, {
        name: name,
        link: '',
        title: 'New',
        text: '',
        image: {
          url: '',
          alt: ''
        }
      }]
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    label: 'Collections'
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
      const newTitle = {
        ...title
      };
      newTitle.desktop = value;
      setAttributes({
        title: newTitle
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: title.mobile,
    className: "input",
    onChange: value => {
      const newTitle = {
        ...title
      };
      newTitle.mobile = value;
      setAttributes({
        title: newTitle
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Content",
    help: "You could use all HTML tags in the content field.",
    value: content.desktop,
    className: "input",
    onChange: value => {
      const newValue = {
        ...content
      };
      newValue.desktop = value;
      setAttributes({
        content: newValue
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Mobile (optional)",
    value: content.mobile,
    className: "input",
    onChange: value => {
      const newValue = {
        ...content
      };
      newValue.mobile = value;
      setAttributes({
        content: newValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items1
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem1Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem1Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem1Attribute(tab, 'image', value),
    type: "image",
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem1Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem1Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem1Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem1Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem1Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem1Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem1Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items1.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem1(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem1(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items2
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem2Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem2Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem2Attribute(tab, 'image', value),
    type: "image",
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem2Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem2Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem2Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem2Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem2Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem2Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem2Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items2.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem2(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items3
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem3Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem3Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem3Attribute(tab, 'image', value),
    type: "image",
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem3Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem3Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem3Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem3Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem3Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem3Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem3Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items3.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem3(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem3(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items4
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem4Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem4Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem4Attribute(tab, 'image', value),
    type: "image",
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem4Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem4Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem4Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem4Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem4Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem4Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem4Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items4.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem4(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem4(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items5
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem5Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem5Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem5Attribute(tab, 'image', value),
    type: "image",
    render: _ref6 => {
      let {
        open
      } = _ref6;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem5Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem5Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem5Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem5Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem5Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem5Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem5Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items5.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem5(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem5(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items6
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem6Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem6Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem6Attribute(tab, 'image', value),
    type: "image",
    render: _ref7 => {
      let {
        open
      } = _ref7;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem6Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem6Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem6Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem6Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem6Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem6Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem6Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items6.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem6(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem6(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items7
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem7Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem7Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem7Attribute(tab, 'image', value),
    type: "image",
    render: _ref8 => {
      let {
        open
      } = _ref8;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem7Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem7Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem7Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem7Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem7Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem7Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem7Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items7.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem7(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem7(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items8
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem8Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem8Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem8Attribute(tab, 'image', value),
    type: "image",
    render: _ref9 => {
      let {
        open
      } = _ref9;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem8Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem8Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem8Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem8Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem8Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem8Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem8Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items8.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem8(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem8(Math.random())
  }, "Add new"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    tabs: items9
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    className: 'placeholder'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Title",
    value: tab.title,
    className: "input",
    onChange: value => setItem9Attribute(tab, 'title', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Link",
    value: tab.link,
    className: "input",
    onChange: value => setItem9Attribute(tab, 'link', value)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    label: "Image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: value => setItem9Attribute(tab, 'image', value),
    type: "image",
    render: _ref10 => {
      let {
        open
      } = _ref10;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: "button",
        onClick: open
      }, tab.image.url == 'image-1.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_1_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: "image"
      }) : tab.image.url === 'image-2.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_2_jpg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "image"
      }) : tab.image.url === 'image-3.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_3_jpg__WEBPACK_IMPORTED_MODULE_5__,
        alt: "image"
      }) : tab.image.url === 'image-4.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_4_jpg__WEBPACK_IMPORTED_MODULE_6__,
        alt: "image"
      }) : tab.image.url === 'image-5.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_5_jpg__WEBPACK_IMPORTED_MODULE_7__,
        alt: "image"
      }) : tab.image.url === 'image-6.jpg' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _assets_image_6_jpg__WEBPACK_IMPORTED_MODULE_8__,
        alt: "image"
      }) : tab.image.url ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: tab.image.url,
        alt: "image"
      }) : 'Insert');
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "dismiss",
    showTooltip: "true",
    label: "Delete image",
    className: "delete-button",
    onClick: () => setItem9Attribute(tab, 'image', {
      url: '',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n1",
    onClick: () => setItem9Attribute(tab, 'image', {
      url: 'image-1.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n2",
    onClick: () => setItem9Attribute(tab, 'image', {
      url: 'image-2.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n3",
    onClick: () => setItem9Attribute(tab, 'image', {
      url: 'image-3.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n4",
    onClick: () => setItem9Attribute(tab, 'image', {
      url: 'image-4.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n5",
    onClick: () => setItem9Attribute(tab, 'image', {
      url: 'image-5.jpg',
      alt: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "cover-image",
    showTooltip: "true",
    label: "Set default image",
    className: "default-image-button n6",
    onClick: () => setItem9Attribute(tab, 'image', {
      url: 'image-6.jpg',
      alt: ''
    })
  }))), items9.length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => removeItem9(tab)
  }, "Delete"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    className: "primary-button",
    onClick: () => addItem9(Math.random())
  }, "Add new"))));
}

/***/ }),

/***/ "./blocks/src/collections/index.js":
/*!*****************************************!*\
  !*** ./blocks/src/collections/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/collections/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./blocks/src/collections/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/src/collections/edit.js");




const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./blocks/src/collections/style.scss":
/*!*******************************************!*\
  !*** ./blocks/src/collections/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/src/collections/assets/image-1.jpg":
/*!***************************************************!*\
  !*** ./blocks/src/collections/assets/image-1.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-1.3ede720d.jpg";

/***/ }),

/***/ "./blocks/src/collections/assets/image-2.jpg":
/*!***************************************************!*\
  !*** ./blocks/src/collections/assets/image-2.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-2.58f1997d.jpg";

/***/ }),

/***/ "./blocks/src/collections/assets/image-3.jpg":
/*!***************************************************!*\
  !*** ./blocks/src/collections/assets/image-3.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-3.539e5a19.jpg";

/***/ }),

/***/ "./blocks/src/collections/assets/image-4.jpg":
/*!***************************************************!*\
  !*** ./blocks/src/collections/assets/image-4.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-4.389a1a88.jpg";

/***/ }),

/***/ "./blocks/src/collections/assets/image-5.jpg":
/*!***************************************************!*\
  !*** ./blocks/src/collections/assets/image-5.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-5.b35e7b46.jpg";

/***/ }),

/***/ "./blocks/src/collections/assets/image-6.jpg":
/*!***************************************************!*\
  !*** ./blocks/src/collections/assets/image-6.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-6.72178040.jpg";

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

/***/ "./blocks/src/collections/block.json":
/*!*******************************************!*\
  !*** ./blocks/src/collections/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"banescocontigo/collections","version":"1.0.0","title":"Collections","category":"widgets","icon":"database","supports":{"html":false},"textdomain":"blocks","editorScript":"file:../../../blocks/build/collections.js","editorStyle":"file:../../../blocks/build/collections.css","style":"file:../../../blocks/build/style-collections.css","attributes":{"paddings":{"type":"object","default":{"desktop":{"top":"100px","bottom":"100px"},"mobile":{"top":"50px","bottom":"50px"}}},"margins":{"type":"object","default":{"desktop":{"top":"0px","bottom":"0px"},"mobile":{"top":"0px","bottom":"0px"}}},"gradient":{"type":"string","default":"#FFFFFF"},"title":{"type":"object","default":{"desktop":"Title","mobile":""}},"content":{"type":"object","default":{"desktop":"<p>Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long paragraph.</p>\\n<br/>\\n<p>Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long paragraph.</p>","mobile":""}},"items1":{"type":"array","default":[{"name":"tab1","link":"/","title":"Title #1","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #2","image":{"url":"image-2.jpg","alt":""}},{"name":"tab3","link":"/","title":"Title #3","image":{"url":"image-3.jpg","alt":""}},{"name":"tab4","link":"/","title":"Title #4","image":{"url":"image-4.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #5","image":{"url":"image-5.jpg","alt":""}},{"name":"tab6","link":"/","title":"Title #6","image":{"url":"image-6.jpg","alt":""}}]},"items2":{"type":"array","default":[{"name":"tab6","link":"/","title":"Title #7","image":{"url":"image-6.jpg","alt":""}},{"name":"tab3","link":"/","title":"Title #8","image":{"url":"image-3.jpg","alt":""}},{"name":"tab1","link":"/","title":"Title #9","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #10","image":{"url":"image-2.jpg","alt":""}},{"name":"tab4","link":"/","title":"Title #11","image":{"url":"image-4.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #12","image":{"url":"image-5.jpg","alt":""}}]},"items3":{"type":"array","default":[{"name":"tab3","link":"/","title":"Title #13","image":{"url":"image-3.jpg","alt":""}},{"name":"tab4","link":"/","title":"Title #14","image":{"url":"image-4.jpg","alt":""}},{"name":"tab1","link":"/","title":"Title #15","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #16","image":{"url":"image-2.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #17","image":{"url":"image-5.jpg","alt":""}},{"name":"tab6","link":"/","title":"Title #18","image":{"url":"image-6.jpg","alt":""}}]},"items4":{"type":"array","default":[{"name":"tab1","link":"/","title":"Title #19","image":{"url":"image-1.jpg","alt":""}},{"name":"tab4","link":"/","title":"Title #20","image":{"url":"image-4.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #21","image":{"url":"image-5.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #22","image":{"url":"image-2.jpg","alt":""}},{"name":"tab3","link":"/","title":"Title #23","image":{"url":"image-3.jpg","alt":""}},{"name":"tab6","link":"/","title":"Title #24","image":{"url":"image-6.jpg","alt":""}}]},"items5":{"type":"array","default":[{"name":"tab4","link":"/","title":"Title #25","image":{"url":"image-4.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #26","image":{"url":"image-5.jpg","alt":""}},{"name":"tab1","link":"/","title":"Title #27","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #28","image":{"url":"image-2.jpg","alt":""}},{"name":"tab3","link":"/","title":"Title #29","image":{"url":"image-3.jpg","alt":""}},{"name":"tab6","link":"/","title":"Title #30","image":{"url":"image-6.jpg","alt":""}}]},"items6":{"type":"array","default":[{"name":"tab6","link":"/","title":"Title #31","image":{"url":"image-6.jpg","alt":""}},{"name":"tab1","link":"/","title":"Title #32","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #33","image":{"url":"image-2.jpg","alt":""}},{"name":"tab3","link":"/","title":"Title #34","image":{"url":"image-3.jpg","alt":""}},{"name":"tab4","link":"/","title":"Title #35","image":{"url":"image-4.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #36","image":{"url":"image-5.jpg","alt":""}}]},"items7":{"type":"array","default":[{"name":"tab3","link":"/","title":"Title #37","image":{"url":"image-3.jpg","alt":""}},{"name":"tab1","link":"/","title":"Title #38","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #39","image":{"url":"image-2.jpg","alt":""}},{"name":"tab4","link":"/","title":"Title #40","image":{"url":"image-4.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #41","image":{"url":"image-5.jpg","alt":""}},{"name":"tab6","link":"/","title":"Title #42","image":{"url":"image-6.jpg","alt":""}}]},"items8":{"type":"array","default":[{"name":"tab3","link":"/","title":"Title #43","image":{"url":"image-3.jpg","alt":""}},{"name":"tab4","link":"/","title":"Title #44","image":{"url":"image-4.jpg","alt":""}},{"name":"tab1","link":"/","title":"Title #45","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #46","image":{"url":"image-2.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #47","image":{"url":"image-5.jpg","alt":""}},{"name":"tab6","link":"/","title":"Title #48","image":{"url":"image-6.jpg","alt":""}}]},"items9":{"type":"array","default":[{"name":"tab4","link":"/","title":"Title #49","image":{"url":"image-4.jpg","alt":""}},{"name":"tab5","link":"/","title":"Title #5","image":{"url":"image-5.jpg","alt":""}},{"name":"tab6","link":"/","title":"Title #50","image":{"url":"image-6.jpg","alt":""}},{"name":"tab1","link":"/","title":"Title #51","image":{"url":"image-1.jpg","alt":""}},{"name":"tab2","link":"/","title":"Title #52","image":{"url":"image-2.jpg","alt":""}},{"name":"tab3","link":"/","title":"Title #53","image":{"url":"image-3.jpg","alt":""}}]}}}');

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
/******/ 			"collections": 0,
/******/ 			"./style-collections": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-collections"], () => (__webpack_require__("./blocks/src/collections/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=collections.js.map