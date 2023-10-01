"use strict";
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 2067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BasicCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/icons-material/BookmarkAddOutlined"
var BookmarkAddOutlined_ = __webpack_require__(9843);
var BookmarkAddOutlined_default = /*#__PURE__*/__webpack_require__.n(BookmarkAddOutlined_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: ./app/hooks.ts
var hooks = __webpack_require__(1047);
// EXTERNAL MODULE: ./app/wishlistSlice.ts
var wishlistSlice = __webpack_require__(2035);
// EXTERNAL MODULE: ./components/layout/Theme.tsx
var Theme = __webpack_require__(1205);
;// CONCATENATED MODULE: ./components/shared/WishlistToggleButton.tsx






const WishlistToggleButton = ({ product })=>{
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const theme = (0,Theme/* getTheme */.g)();
    const wishlist = (0,hooks/* useAppSelector */.C)(wishlistSlice/* selectWishlist */.jq);
    const likedItem = wishlist.products.find((o)=>o.id === product.id) !== undefined;
    const handleLike = ()=>{
        likedItem ? dispatch((0,wishlistSlice/* removeFromWishlist */.$f)(product)) : dispatch((0,wishlistSlice/* addToWishlist */.Mp)(product));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((IconButton_default()), {
        size: "small",
        onClick: handleLike,
        children: [
            likedItem && /*#__PURE__*/ jsx_runtime.jsx((BookmarkAddOutlined_default()), {
                sx: {
                    color: theme.palette.secondary.main
                }
            }),
            !likedItem && /*#__PURE__*/ jsx_runtime.jsx((BookmarkAddOutlined_default()), {
                sx: {
                    color: theme.palette.grey[500]
                }
            })
        ]
    });
};

// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./components/BasicCard.tsx








function BasicCard({ product }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
        variant: "outlined",
        sx: {
            padding: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                direction: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                variant: "h6",
                                fontWeight: 600,
                                children: product.attributes?.title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                variant: "body2",
                                fontWeight: 400,
                                children: "April 24 to May 02, 2021"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(WishlistToggleButton, {
                        product: product
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                minHeight: "120px",
                maxHeight: "200px",
                py: 1,
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
                    srcSet: "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x",
                    loading: "lazy",
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                direction: "row",
                pt: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                        spacing: .25,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                variant: "caption",
                                children: "Price:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                                variant: "h6",
                                children: [
                                    "$",
                                    product.attributes?.price.toFixed(2)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        style: {
                            marginLeft: "auto",
                            alignSelf: "center",
                            fontWeight: 600
                        },
                        passHref: true,
                        href: `/products/${product.attributes?.slug}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                            size: "large",
                            color: "primary",
                            variant: "contained",
                            "aria-label": `View ${product.attributes?.title} product`,
                            children: "View"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;