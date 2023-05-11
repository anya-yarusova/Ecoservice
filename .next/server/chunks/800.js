"use strict";
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 5800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ media)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "primereact/carousel"
var carousel_ = __webpack_require__(5689);
// EXTERNAL MODULE: external "primereact/button"
var button_ = __webpack_require__(1088);
;// CONCATENATED MODULE: ./src/demo/service/ProductService.tsx
const ProductService = {
    getProductsSmall () {
        return fetch("/demo/data/products-small.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    }
};

;// CONCATENATED MODULE: ./src/demo/service/PhotoService.tsx
const PhotoService = {
    getImages () {
        return fetch("/demo/data/photos.json", {
            headers: {
                "Cache-Control": "no-cache"
            }
        }).then((res)=>res.json()).then((d)=>d.data);
    }
};

;// CONCATENATED MODULE: ./src/pages/media/index.tsx
/* eslint-disable @next/next/no-img-element */ 





const CarouselDemo = ()=>{
    const [products, setProducts] = (0,external_react_.useState)([]);
    const [images, setImages] = (0,external_react_.useState)([]);
    const carouselResponsiveOptions = [
        {
            breakpoint: "1024px",
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: "768px",
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: "560px",
            numVisible: 1,
            numScroll: 1
        }
    ];
    (0,external_react_.useEffect)(()=>{
        ProductService.getProductsSmall().then((products)=>setProducts(products));
        PhotoService.getImages().then((images)=>setImages(images));
    }, []);
    const carouselItemTemplate = (product)=>{
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "border-1 surface-border border-round m-2 text-center hover:border-primary py-5",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "p-3 flex flex-column border-200 pricing-card transition-duration-300 transition-all",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: `/demo/images/product/${product.image}`,
                            alt: product.name,
                            className: "w-6 shadow-2"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: `product-badge status-${product.EGEStatus?.toLowerCase() != "" ? "instock" : ""}`,
                                children: product.EGEStatus
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "p-mb-1",
                                children: product.name
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                className: "p-mr-3",
                                children: product.date
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                className: "mt-0 mb-3",
                                children: product.place
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "my-5 text-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx(button_.Button, {
                                    type: "button",
                                    label: "Зарегистрироваться",
                                    rounded: true,
                                    className: "block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-green-500 text-white"
                                })
                            })
                        ]
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "grid p-fluid",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "card",
                children: /*#__PURE__*/ jsx_runtime.jsx(carousel_.Carousel, {
                    value: products,
                    numVisible: 3,
                    numScroll: 3,
                    responsiveOptions: carouselResponsiveOptions,
                    itemTemplate: carouselItemTemplate
                })
            })
        })
    });
};
/* harmony default export */ const media = (CarouselDemo);


/***/ })

};
;