"use strict";
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 7074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ WishlistToggleButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_icons_material_BookmarkAddOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9843);
/* harmony import */ var _mui_icons_material_BookmarkAddOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_BookmarkAddOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1047);
/* harmony import */ var _app_wishlistSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2035);
/* harmony import */ var _layout_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1205);






const WishlistToggleButton = ({ product })=>{
    const dispatch = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const theme = (0,_layout_Theme__WEBPACK_IMPORTED_MODULE_5__/* .getTheme */ .g)();
    const wishlist = (0,_app_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(_app_wishlistSlice__WEBPACK_IMPORTED_MODULE_4__/* .selectWishlist */ .jq);
    const likedItem = wishlist.products.find((o)=>o.id === product.id) !== undefined;
    const handleLike = ()=>{
        likedItem ? dispatch((0,_app_wishlistSlice__WEBPACK_IMPORTED_MODULE_4__/* .removeFromWishlist */ .$f)(product)) : dispatch((0,_app_wishlistSlice__WEBPACK_IMPORTED_MODULE_4__/* .addToWishlist */ .Mp)(product));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2___default()), {
        size: "small",
        onClick: handleLike,
        children: [
            likedItem && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_BookmarkAddOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    color: theme.palette.secondary.main
                }
            }),
            !likedItem && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_BookmarkAddOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {
                sx: {
                    color: theme.palette.grey[500]
                }
            })
        ]
    });
};


/***/ })

};
;