/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef, useState } from 'react';
import Link from 'next/link';

import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { LayoutContext } from '../layout/context/layoutcontext';
import { NodeRef, Page } from '../types/types';
import { classNames } from 'primereact/utils';
import CarouselDemo from "./media";
import Head from "next/head";


const LandingPage: Page = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef<HTMLElement | null>(null);

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

    // TODO: Change color of header
    // TODO: Change footer
    // TODO: Почистить репу
    return (
        <>
            <Head>
            <title>Green Birds</title>
            </Head>

            <div className="surface-0 flex justify-content-center">
                <div id="home" className="landing-wrapper overflow-hidden">
                    <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
                        <Link href="/" className="flex align-items-center">
                            <img src={`/layout/images/logo.png`} alt="Green Birds Logo" height="100" className="mr-0 lg:mr-2" />
                            <span className="text-900 font-medium text-2xl line-height-3 mr-8">GREEN BIRDS</span>
                        </Link>
                        <StyleClass nodeRef={menuRef as NodeRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                            <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                        </StyleClass>
                        <div className={classNames('align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2', { hidden: isHidden })} style={{ top: '100%' }}>
                            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                                <li>
                                    <a href="/about" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>О нас</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a href="#news" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Новости</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a href="#events" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Мероприятия</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a href="/help/" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Помощь в сортировке</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a href="#resources" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Ресурсы</span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        id="hero"
                        className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                        style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)', clipPath: 'ellipse(150% 87% at 93% 13%)' }}
                    >
                        <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 line-height-2">
                                Присоединяйтесь к нашей миссии по спасению планеты
                            </h1>
                            <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Вместе мы можем сделать больше для сохранения нашей планеты</p>
                            <a href="#platform">
                                <Button type="button" label="Присоединиться" rounded className="text-xl border-none mt-3 bg-primary-500 font-normal line-height-3 px-3 text-white"></Button>
                            </a>
                        </div>
                        <div className="flex justify-content-center md:justify-content-end">
                            <img src="/demo/images/landing/img.png" alt="Bird" className="w-9 md:w-auto" />
                        </div>
                    </div>

                    <div id="platform" className="py-4 px-4 lg:px-8 my-2 md:my-4">
                        <div className="text-center">
                            <h2 className="text-900 font-normal mb-2">Платформа для тех, кто хочет заботиться о природе и будущем</h2>
                            <span className="text-600 text-2xl">Мы предлагаем множество ресурсов, инструментов и событий, которые помогут вам жить более экологически чисто</span>
                        </div>

                        <div className="grid justify-content-between mt-8 md:mt-0">
                            <div className="col-12 lg:col-4 p-0 md:p-3">
                                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                    <h3 className="text-900 text-center my-5">Новости</h3>
                                    <img src="/demo/images/landing/news.jpg" className="w-5 h-5 mx-auto" alt="free" />
                                    <div className="my-5 text-center">
                                        <span className="text-600">Посмотрите последние эко-новости</span>
                                        <Button label="Узнать больше" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-primary-500 text-white"></Button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                    <h3 className="text-900 text-center my-5">Мероприятия</h3>
                                    <img src="/demo/images/landing/events.jpg" className="w-5 h-5 mx-auto" alt="startup" />
                                    <div className="my-5 text-center">
                                        <span className="text-600">Зарегистрируйтесь на предстоящие мероприятия</span>
                                        <Button label="Узнать больше" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-primary-500 text-white"></Button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                    <h3 className="text-900 text-center my-5">Помощь в сортировке</h3>
                                    <img src="/demo/images/landing/help.jpg" className="w-5 h-5 mx-auto" alt="enterprise" />
                                    <div className="my-5 text-center">
                                        <span className="text-600">Узнайте о том, как правильно сортировать отходы</span>
                                        <Button label="Узнать больше" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-primary-500 text-white"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="calendar" className="py-4 px-4 lg:px-8 my-2 md:my-4">
                        <div className="text-center">
                            <h2 className="text-900 font-normal mb-2">Календарь предстоящих событий</h2>
                            <span className="text-600 text-2xl">Эко-мероприятие - отличная возможность пообщаться с единомышленниками, которые разделяют вашу страсть к охране окружающей среды</span>
                        </div>
                        <CarouselDemo />
                    </div>

                    <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
                        <div className="grid justify-content-between">
                            <div className="col-12 md:col-2" style={{ marginTop: '-1.5rem' }}>
                                <Link href="/" className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                                    <img src={`/layout/images/logo.png`} alt="footer sections" width="50" height="50" className="mr-2" />
                                    <span className="font-medium text-3xl text-900">GREEN BIRDS</span>
                                </Link>
                            </div>

                            <div className="col-12 md:col-10 lg:col-7">
                                <div className="grid text-center md:text-left">
                                    <div className="col-12 md:col-3 mt-4 md:mt-0">
                                        <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Контакты</h4>
                                        <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">VK</a>
                                        <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Telegram</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

LandingPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
        </React.Fragment>
    );
};

export default LandingPage;