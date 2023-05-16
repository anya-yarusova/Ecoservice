/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';


import { Demo } from '../../types/types';
import {ProductService} from "../../demo/service/ProductService";
import {PhotoService} from "../../demo/service/PhotoService";

const CarouselDemo = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const [images, setImages] = useState<Demo.Photo[]>([]);

    const carouselResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        ProductService.getProductsSmall().then((products) => setProducts(products));

        PhotoService.getImages().then((images) => setImages(images));
    }, []);

    const carouselItemTemplate = (product: Demo.Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center hover:border-primary py-5">
                <div className="p-3 flex flex-column border-200 pricing-card transition-duration-300 transition-all">
                    <div className="mb-3">
                        <img src={`/demo/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                    </div>
                    <div>
                        <span className={`product-badge status-${product.EGEStatus?.toLowerCase() != '' ? "instock" : ""}`}>{product.EGEStatus}</span>
                        <h4 className="p-mb-1">{product.name}</h4>
                        <h5 className="p-mr-3">{product.date}</h5>
                        <h6 className="mt-0 mb-3">{product.place}</h6>
                        <div className="my-5 text-center">
                        <Button type="button" label="Зарегистрироваться" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-green-500 text-white"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="grid p-fluid">
            <div className="col-12 mt-4">
                <div className="card pt-2 md:p-4">
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={carouselResponsiveOptions} itemTemplate={carouselItemTemplate}></Carousel>
                </div>
            </div>
        </div>
    );
};

export default CarouselDemo;
