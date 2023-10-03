"use strict";
exports.id = 648;
exports.ids = [648];
exports.modules = {

/***/ 1047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/Theme.tsx
var Theme = __webpack_require__(1205);
// EXTERNAL MODULE: external "@mui/icons-material/Pix"
var Pix_ = __webpack_require__(4625);
var Pix_default = /*#__PURE__*/__webpack_require__.n(Pix_);
;// CONCATENATED MODULE: ./components/layout/footer/Footer.tsx







function Footer() {
    const theme = (0,Theme/* getTheme */.g)();
    return /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
        sx: {
            display: "flex",
            flexDirection: "column",
            paddingTop: 10
        },
        children: /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
            component: "footer",
            sx: {
                height: 100,
                py: 4.5,
                px: 2,
                mt: "auto",
                backgroundColor: (theme)=>theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]
            },
            children: /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    passHref: true,
                    href: "/",
                    style: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((Pix_default()), {
                            fontSize: "large",
                            sx: {
                                color: theme.palette.grey[400],
                                mr: .5
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                fontWeight: 500,
                                color: theme.palette.grey[400]
                            },
                            children: "localShop"
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: external "@mui/icons-material/AccountBox"
var AccountBox_ = __webpack_require__(3329);
var AccountBox_default = /*#__PURE__*/__webpack_require__.n(AccountBox_);
// EXTERNAL MODULE: external "@mui/icons-material/Bookmark"
var Bookmark_ = __webpack_require__(2682);
var Bookmark_default = /*#__PURE__*/__webpack_require__.n(Bookmark_);
// EXTERNAL MODULE: external "@mui/icons-material/ShoppingCart"
var ShoppingCart_ = __webpack_require__(7248);
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: ./app/hooks.ts
var hooks = __webpack_require__(1047);
// EXTERNAL MODULE: ./components/shared/auth/accountSlice.ts
var accountSlice = __webpack_require__(4387);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./components/shared/cart/cartSlice.ts + 1 modules
var cartSlice = __webpack_require__(8929);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: ./app/wishlistSlice.ts
var wishlistSlice = __webpack_require__(2035);
;// CONCATENATED MODULE: ./components/layout/header/Header.tsx




















function Header({ isLoggedIn }) {
    const theme = (0,Theme/* getTheme */.g)();
    const router = (0,router_.useRouter)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleLogOut = ()=>{
        dispatch(accountSlice/* logout */.kS);
        sessionStorage.removeItem("jwt");
        router.push("/login");
    };
    const [openCartDropdown, setOpenCartDropdown] = (0,external_react_.useState)(false);
    const toggleCartDropdown = ()=>{
        setOpenCartDropdown(!openCartDropdown);
    };
    const [openWishlistDropdown, setOpenWishlistDropdown] = (0,external_react_.useState)(false);
    const toggleWishlistDropdown = ()=>{
        setOpenWishlistDropdown(!openWishlistDropdown);
    };
    const cart = (0,hooks/* useAppSelector */.C)(cartSlice/* selectCart */.KY);
    const wishlist = (0,hooks/* useAppSelector */.C)(wishlistSlice/* selectWishlist */.jq);
    const renderWishlistItems = wishlist.products.map((ci)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
            direction: "row",
            pt: 1,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                    spacing: .25,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                        variant: "h6",
                        children: [
                            ci.attributes?.price?.toFixed(2),
                            " Eur"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    style: {
                        marginLeft: "auto",
                        alignSelf: "center",
                        fontWeight: 600
                    },
                    passHref: true,
                    href: `/products/${ci.attributes?.slug}`,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                        variant: "caption",
                        children: [
                            " ",
                            ci.attributes?.title
                        ]
                    })
                })
            ]
        }, ci.id);
    });
    const renderCartItems = cart.items.map((ci)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
            width: "100%",
            direction: "row",
            justifyContent: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        style: {
                            marginLeft: "auto",
                            alignSelf: "center",
                            fontWeight: 600
                        },
                        passHref: true,
                        href: `/products/${ci.product.attributes?.slug}`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                            variant: "subtitle1",
                            children: [
                                " ",
                                ci.product.attributes?.title
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Typography_default()), {
                        variant: "caption",
                        children: [
                            " ",
                            ci.qty
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                        variant: "subtitle1",
                        children: ci.product.attributes?.price
                    })
                })
            ]
        }, ci.id);
    });
    const sumWithInitial = cart.items.reduce((a, c)=>a + c.product.attributes.price * c.qty, 0);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((Container_default()), {
                maxWidth: false,
                sx: {
                    zIndex: 99,
                    position: "fixed",
                    top: 0,
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: theme.palette.background.default
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                    direction: "row",
                    p: 2,
                    sx: {
                        px: {
                            lg: 4,
                            md: 0,
                            sm: 1,
                            xs: 0
                        },
                        maxWidth: "lg",
                        mx: "auto",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            passHref: true,
                            href: "/",
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                    sx: {
                                        bgcolor: "#fff",
                                        mr: 1
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Pix_default()), {
                                        fontSize: "large",
                                        sx: {
                                            color: theme.palette.secondary.main
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        fontWeight: 500,
                                        color: theme.palette.grey[400]
                                    },
                                    children: "localShop"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                            direction: "row",
                            spacing: 4,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    passHref: true,
                                    href: "/products",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        color: theme.palette.grey[400],
                                        children: "Products"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    passHref: true,
                                    href: "/contacts",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                        color: theme.palette.grey[400],
                                        children: "Contacts"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                    direction: "row",
                                    spacing: 1,
                                    children: [
                                        renderWishlistItems?.length > 0 && /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                            sx: {
                                                bgcolor: "#fff"
                                            },
                                            onClick: toggleWishlistDropdown,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((Bookmark_default()), {
                                                sx: {
                                                    color: theme.palette.secondary.main
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                            sx: {
                                                bgcolor: "#fff",
                                                cursor: "pointer"
                                            },
                                            onClick: toggleCartDropdown,
                                            children: /*#__PURE__*/ jsx_runtime.jsx((ShoppingCart_default()), {
                                                sx: {
                                                    color: theme.palette.secondary.main
                                                }
                                            })
                                        }),
                                        isLoggedIn && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            passHref: true,
                                            href: "/account",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((Avatar_default()), {
                                                sx: {
                                                    bgcolor: "#fff"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime.jsx((AccountBox_default()), {
                                                    sx: {
                                                        color: theme.palette.secondary.main
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }),
                                !isLoggedIn && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    passHref: true,
                                    href: "/login",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                        variant: "contained",
                                        children: "Login"
                                    })
                                }),
                                isLoggedIn && /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                    variant: "contained",
                                    onClick: handleLogOut,
                                    children: "Log out"
                                })
                            ]
                        }),
                        openCartDropdown && /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
                            sx: {
                                backgroundColor: "#fff",
                                width: 300,
                                position: "fixed",
                                zIndex: 9,
                                right: 0,
                                top: 70,
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "h6",
                                    fontWeight: 700,
                                    children: "Cart"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                                    spacing: 1,
                                    py: 3,
                                    children: renderCartItems
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                                    spacing: 1,
                                    pb: 2,
                                    sx: {
                                        borderTop: "1px solid black"
                                    },
                                    pt: 1,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                                        direction: "row",
                                        sx: {
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                                variant: "subtitle1",
                                                fontWeight: 500,
                                                children: "Cart total:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                                variant: "subtitle1",
                                                fontWeight: 500,
                                                children: sumWithInitial
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    passHref: true,
                                    href: "/checkout",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                        variant: "contained",
                                        children: "Go to checkout"
                                    })
                                })
                            ]
                        }),
                        openWishlistDropdown && /*#__PURE__*/ (0,jsx_runtime.jsxs)((Card_default()), {
                            sx: {
                                backgroundColor: "#fff",
                                width: 300,
                                position: "fixed",
                                zIndex: 9,
                                right: 0,
                                top: 70,
                                p: 3
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((Typography_default()), {
                                    variant: "h6",
                                    fontWeight: 700,
                                    children: "Wishlist"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                                    spacing: 1,
                                    py: 3,
                                    children: renderWishlistItems
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    passHref: true,
                                    href: "/wishlist",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((Button_default()), {
                                        variant: "contained",
                                        children: "See wishlist"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((Box_default()), {
                sx: {
                    height: 70
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.tsx







const Layout = ({ children })=>{
    const router = (0,router_.useRouter)();
    const [isLoggedIn, setIsLoggedIn] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const jwt = sessionStorage.getItem("jwt");
        if (jwt) {
            setIsLoggedIn(true);
        }
        if (!jwt) {
            setIsLoggedIn(false);
            if (router.pathname === "/account") {
                router.push("/login");
            }
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Create Next App"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((Stack_default()), {
                sx: {
                    height: "100%",
                    // backgroundColor: theme.palette.background.default,
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Header, {
                        isLoggedIn: isLoggedIn
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((Stack_default()), {
                        minHeight: "calc(100vh - 265px)",
                        sx: {
                            pt: "60px",
                            maxWidth: "100vw",
                            overflow: "hidden"
                        },
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;