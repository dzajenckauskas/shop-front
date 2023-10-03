exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 2035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $f: () => (/* binding */ removeFromWishlist),
/* harmony export */   A8: () => (/* binding */ wishlistReducer),
/* harmony export */   Mp: () => (/* binding */ addToWishlist),
/* harmony export */   jq: () => (/* binding */ selectWishlist)
/* harmony export */ });
/* unused harmony exports wishlistSlice, removeAllProductsFromWishlist */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    products: []
};
const wishlistSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action)=>{
            const item = state.products.find((o)=>o.id === action.payload.id);
            if (!item) {
                state.products.push(action.payload);
            }
        },
        removeFromWishlist: (state, action)=>{
            const item = state.products.find((o)=>o.id === action.payload.id);
            if (item) {
                const index = state.products.indexOf(item, 0);
                if (index > -1) {
                    state.products.splice(index, 1);
                }
            }
        },
        removeAllProductsFromWishlist: (state)=>{
            state.products = [];
        }
    }
});
const { addToWishlist, removeFromWishlist, removeAllProductsFromWishlist } = wishlistSlice.actions;
const selectWishlist = (state)=>state.wishlist;
const wishlistReducer = wishlistSlice.reducer;


/***/ }),

/***/ 1205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getTheme)
/* harmony export */ });
/* unused harmony export Theme */
/* harmony import */ var next_font_google_target_css_path_components_layout_Theme_tsx_import_Inter_arguments_subsets_cyrillic_cyrillic_ext_latin_latin_ext_display_swap_fallback_Roboto_variableName_inter___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2899);
/* harmony import */ var next_font_google_target_css_path_components_layout_Theme_tsx_import_Inter_arguments_subsets_cyrillic_cyrillic_ext_latin_latin_ext_display_swap_fallback_Roboto_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_components_layout_Theme_tsx_import_Inter_arguments_subsets_cyrillic_cyrillic_ext_latin_latin_ext_display_swap_fallback_Roboto_variableName_inter___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);


const Theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    components: {
        MuiInputBase: {
            // defaultProps: {
            //     size: 'small'
            // },
            styleOverrides: {
                root: ({ theme })=>theme.unstable_sx({
                        "& > fieldset": {
                            borderColor: theme.palette.primary.main
                        },
                        ":hover": {
                            "& > fieldset": {
                                borderColor: `${theme.palette.primary.main} !important`,
                                boxShadow: "0px 0px 8px #1E2F9739"
                            }
                        }
                    }),
                input: ({ theme })=>theme.unstable_sx({
                        color: `${theme.palette.primary.dark} !important`
                    })
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme })=>theme.unstable_sx({
                        color: `${theme.palette.primary.dark} !important`
                    })
            }
        },
        MuiCircularProgress: {
            styleOverrides: {
                svg: ({ theme })=>theme.unstable_sx({
                        transform: "scale(1.4)"
                    })
            }
        },
        // MuiSelect: {
        //     styleOverrides: {
        //         select: ({ theme }) => theme.unstable_sx({
        //             paddingBottom: '0px'
        //         }),
        //     }
        // },
        MuiFormLabel: {
            styleOverrides: {
                root: ({ theme })=>theme.unstable_sx({
                        color: `${theme.palette.primary.dark}`,
                        fontSize: "16px !important"
                    })
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: ({ theme })=>theme.unstable_sx({
                        marginTop: "4px",
                        border: `1px solid ${theme.palette.primary.main}`
                    }),
                listbox: ({ theme })=>theme.unstable_sx({
                        color: `${theme.palette.primary.dark} !important`
                    })
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: ({ theme })=>theme.unstable_sx({
                        marginTop: "4px",
                        border: `1px solid ${theme.palette.primary.main}`
                    })
            }
        },
        MuiButton: {
            defaultProps: {
                size: "medium"
            },
            styleOverrides: {
                root: ({ theme })=>theme.unstable_sx({
                        fontWeight: 500
                    })
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: ({ theme })=>theme.unstable_sx({
                        color: theme.palette.primary.main
                    })
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: ({ theme })=>theme.unstable_sx({
                        backgroundColor: "#fff !important",
                        margin: 0,
                        px: .5,
                        pt: .25
                    })
            }
        }
    },
    typography: {
        fontFamily: (next_font_google_target_css_path_components_layout_Theme_tsx_import_Inter_arguments_subsets_cyrillic_cyrillic_ext_latin_latin_ext_display_swap_fallback_Roboto_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default().style).fontFamily,
        body1: {
            lineHeight: "20px",
            fontWeight: 300
        },
        caption: {
            lineHeight: "14px"
        },
        h6: {
            lineHeight: "24px"
        },
        h1: {
            fontSize: "50px"
        },
        subtitle1: {
            fontWeight: 300
        }
    },
    palette: {
        background: {
            default: "#f5f5f5"
        },
        primary: {
            light: "#3B75AF",
            main: "#205992",
            dark: "#05386B",
            contrastText: "#fff"
        },
        secondary: {
            main: "#5CDB95",
            dark: "#379683"
        },
        info: {
            main: "#fff"
        },
        grey: {
            100: "#F5F5F5",
            200: "#E6E6E6",
            400: "#464853",
            500: "#090909"
        },
        error: {
            main: "#d32f2f"
        }
    }
});
const getTheme = ()=>{
    return Theme;
};


/***/ }),

/***/ 4387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ou: () => (/* binding */ performLogin),
/* harmony export */   kS: () => (/* binding */ logout),
/* harmony export */   vC: () => (/* binding */ accountReducer)
/* harmony export */ });
/* unused harmony exports accountSlice, selectAccount */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    isLoggedIn: false,
    user: {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        username: undefined
    },
    token: undefined
};
const accountSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "account",
    initialState,
    reducers: {
        performLogin: (state, action)=>{
            state.isLoggedIn = true;
            state.user = action.payload.user;
            if (action.payload.jwt) {
                sessionStorage.setItem("jwt", action.payload.jwt);
                state.jwt = action.payload.jwt;
            }
        },
        logout: (state)=>{
            state.isLoggedIn = false;
            state.user = {};
            state.jwt = undefined;
            sessionStorage.removeItem("jwt");
        }
    }
});
const { performLogin, logout } = accountSlice.actions;
const selectAccount = (state)=>state.account;
const accountReducer = accountSlice.reducer;


/***/ }),

/***/ 8929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dm: () => (/* binding */ addItemToCart),
  C$: () => (/* binding */ cartReducer),
  KY: () => (/* binding */ selectCart)
});

// UNUSED EXPORTS: addItemToCartWithoutReplace, cartSlice, clearCart, removeItemFromCart

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./components/shared/cart/calculateCartTotals.ts
const calculateCartTotals = (cart)=>{
    const totals = cart.items.reduce((p, c)=>{
        p.quantity += c.qty;
        p.subtotal += c.qty * c.product.attributes?.price;
        return p;
    }, {
        quantity: 0,
        subtotal: 0
    });
    cart.quantity = totals.quantity;
    cart.subtotal = totals.subtotal;
    cart.total = cart.subtotal;
    if (cart.total < 0) {
        cart.total = 0;
    }
};

;// CONCATENATED MODULE: ./components/shared/cart/cartSlice.ts


const initialState = {
    quantity: 0,
    items: [],
    subtotal: 0,
    total: 0
};
const cartSlice = (0,toolkit_.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action)=>{
            const item = state.items.find((o)=>o.id === action.payload.id && o.product.id === action.payload.product.id);
            if (item) {
                if (action.payload.qty > 0) {
                    item.qty = action.payload.qty;
                } else {
                    // Remove from cart
                    item.qty = 0;
                }
            } else {
                if (action.payload.qty > 0) {
                    state.items.push(action.payload);
                }
            }
            calculateCartTotals(state);
        },
        addItemToCartWithoutReplace: (state, action)=>{
            const availableQty = Math.min(action.payload.product.attributes.quantity, action.payload.qty);
            action.payload.qty = availableQty;
            const item = state.items.find((o)=>o.product.id === action.payload.product.id);
            if (item) {
                if (action.payload.qty > 0) {
                    item.qty += action.payload.qty;
                }
                if (item.qty > action.payload.product.attributes.quantity) {
                    item.qty = action.payload.product.attributes.quantity;
                }
            } else {
                if (action.payload.qty > 0) {
                    state.items.push(action.payload);
                }
            }
            calculateCartTotals(state);
        },
        clearCart: ()=>initialState,
        removeItemFromCart: (state, action)=>{
            const item = state.items.find((o)=>o.product.id === action.payload.product.id);
            if (item) {
                const index = state.items.indexOf(item, 0);
                if (index > -1) {
                    state.items.splice(index, 1);
                }
            }
            calculateCartTotals(state);
        }
    }
});
const { addItemToCart, addItemToCartWithoutReplace, clearCart, removeItemFromCart } = cartSlice.actions;
const selectCart = (state)=>state.cart;
const cartReducer = cartSlice.reducer;


/***/ }),

/***/ 2433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: ./components/layout/Theme.tsx
var Theme = __webpack_require__(1205);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(4161);
// EXTERNAL MODULE: external "redux-persist/lib/storage/createWebStorage"
var createWebStorage_ = __webpack_require__(7388);
;// CONCATENATED MODULE: ./app/store/createWebStore.ts

const createNoopStorage = ()=>{
    return {
        getItem (_key) {
            return Promise.resolve(null);
        },
        setItem (_key, value) {
            return Promise.resolve(value);
        },
        removeItem (_key) {
            return Promise.resolve();
        }
    };
};
const webStorage =  false ? 0 : createNoopStorage();

// EXTERNAL MODULE: ./app/wishlistSlice.ts
var wishlistSlice = __webpack_require__(2035);
// EXTERNAL MODULE: ./components/shared/cart/cartSlice.ts + 1 modules
var cartSlice = __webpack_require__(8929);
// EXTERNAL MODULE: ./components/shared/auth/accountSlice.ts
var accountSlice = __webpack_require__(4387);
;// CONCATENATED MODULE: ./app/store/store.ts






const persistConfig = {
    key: "root",
    version: 1,
    storage: webStorage
};
const rootReducer = (0,toolkit_.combineReducers)({
    account: accountSlice/* accountReducer */.vC,
    cart: cartSlice/* cartReducer */.C$,
    wishlist: wishlistSlice/* wishlistReducer */.A8
});
const persistedReducer = (0,external_redux_persist_.persistReducer)(persistConfig, rootReducer);
const store = (0,toolkit_.configureStore)({
    reducer: persistedReducer,
    // Note: you can include options in the argument of the getDefaultMiddleware function call.
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    external_redux_persist_.FLUSH,
                    external_redux_persist_.REHYDRATE,
                    external_redux_persist_.PAUSE,
                    external_redux_persist_.PERSIST,
                    external_redux_persist_.PURGE,
                    external_redux_persist_.REGISTER
                ]
            }
        })
});
const persistor = (0,external_redux_persist_.persistStore)(store);

;// CONCATENATED MODULE: ./src/pages/_app.tsx







function App({ Component, pageProps }) {
    const theme = (0,Theme/* getTheme */.g)();
    const [showChild, setShowChild] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setShowChild(true);
    }, []);
    if (!showChild) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime.jsx(styles_.ThemeProvider, {
            theme: theme,
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 1522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;