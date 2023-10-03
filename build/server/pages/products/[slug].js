"use strict";
(() => {
var exports = {};
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 5425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/products/[slug].tsx
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (ProductView),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./src/pages/_document.tsx
var _document = __webpack_require__(1522);
// EXTERNAL MODULE: ./src/pages/_app.tsx + 2 modules
var _app = __webpack_require__(2433);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./app/hooks.ts
var hooks = __webpack_require__(1047);
// EXTERNAL MODULE: ./components/layout/Layout.tsx + 2 modules
var Layout = __webpack_require__(648);
// EXTERNAL MODULE: ./components/shared/WishlistToggleButton.tsx
var WishlistToggleButton = __webpack_require__(7074);
// EXTERNAL MODULE: ./components/shared/cart/cartSlice.ts + 1 modules
var cartSlice = __webpack_require__(8929);
;// CONCATENATED MODULE: ./src/pages/products/[slug].tsx










function ProductView({ product }) {
    console.log(product, "product");
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const cart = (0,hooks/* useAppSelector */.C)(cartSlice/* selectCart */.KY);
    console.log(cart, "cart");
    const handleAddToCart = ()=>{
        const cartItem = {
            product: product,
            qty: 1
        };
        dispatch((0,cartSlice/* addItemToCart */.dm)(cartItem));
    };
    return /*#__PURE__*/ jsx_runtime.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
            direction: "column",
            width: "100%",
            sx: {
                maxWidth: "lg",
                mx: "auto",
                p: {
                    sm: 4,
                    xs: 2
                }
            },
            spacing: 4,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
                    direction: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((Box_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "h6",
                                    fontWeight: 600,
                                    children: product.attributes.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "body2",
                                    fontWeight: 400,
                                    children: product.attributes.createdAt
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(WishlistToggleButton/* WishlistToggleButton */.H, {
                            product: product
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Stack, {
                    py: 1,
                    maxHeight: "50vh",
                    overflow: "hidden",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286",
                        srcSet: "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x",
                        loading: "lazy",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
                    direction: "row",
                    pt: 1,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Stack, {
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
                                        product.attributes.price.toFixed(2)
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                            onClick: handleAddToCart,
                            sx: {
                                marginLeft: "auto",
                                alignSelf: "center",
                                fontWeight: 600
                            },
                            size: "medium",
                            color: "primary",
                            variant: "contained",
                            "aria-label": `View ${product.attributes.title} product`,
                            children: "Add to cart"
                        })
                    ]
                })
            ]
        })
    });
}
async function getStaticPaths() {
    const products = await external_axios_default().get(`${"http://154.49.136.99:1339"}/api/products`);
    const paths = products.data.data.map((p)=>({
            params: {
                slug: p.attributes?.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
}
const getStaticProps = async (context)=>{
    const product = await external_axios_default().get(`${"http://154.49.136.99:1339"}/api/products/${context.params.slug}`);
    return {
        props: {
            product: product.data.data
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fproducts%2F%5Bslug%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fproducts%2F%5Bslug%5D.tsx&absoluteAppPath=private-next-pages%2F_app.tsx&absoluteDocumentPath=private-next-pages%2F_document.tsx&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2Fproducts_2F_5Bslug_5D_preferredRegion_absolutePagePath_private_next_pages_2Fproducts_2F_5Bslug_5D_tsx_absoluteAppPath_private_next_pages_2F_app_tsx_absoluteDocumentPath_private_next_pages_2F_document_tsx_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/products/[slug]","pathname":"/products/[slug]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: _slug_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 3329:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountBox");

/***/ }),

/***/ 2682:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Bookmark");

/***/ }),

/***/ 9843:
/***/ ((module) => {

module.exports = require("@mui/icons-material/BookmarkAddOutlined");

/***/ }),

/***/ 4625:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Pix");

/***/ }),

/***/ 7248:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCart");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 7388:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage/createWebStorage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [312,664,798,648,74], () => (__webpack_exec__(5425)));
module.exports = __webpack_exports__;

})();