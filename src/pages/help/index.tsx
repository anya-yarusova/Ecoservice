/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef, useState } from 'react';
import Link from 'next/link';

import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { NodeRef, Page } from '../../types/types';
import { classNames } from 'primereact/utils';
import Head from "next/head";


const HelpPage: Page = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef<HTMLElement | null>(null);

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

    return (
        <>
            <Head>
            <title>Green Birds</title>
            </Head>

            <div className="surface-0 flex justify-content-center">
                <div id="about" className="landing-wrapper overflow-hidden">
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
                                    <a href="/help" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
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
                        className="flex flex-column pt-4 px-4 lg:px-8 mx-0 lg:mx-8 overflow-hidden"
                    >
                        <div className="col-12 mt-4 mb-8 p-4 md:p-6"
                             style={{
                                 borderRadius: '20px',
                                 background:"linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)"
                             }}
                        >
                                <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                                    Сортируйте правильно
                                </h1>
                            <p className="font-normal text-2xl line-height-4 md:mt-3 text-gray-700">
                                В этой статье поговорим о раздельном сборе мусора. Наверняка вы уже слышали об этом процессе, но многие не знают, как правильно сортировать отходы и почему это важно для нашей планеты.
                                <br/>
                                Для начала, что такое раздельный сбор? Это процесс, при котором мусор разделяется на разные категории для его переработки. Это помогает уменьшить количество мусора, который попадает на свалки, и повысить эффективность переработки отходов.
                                <br/>
                                Но как правильно сортировать мусор? Вот небольшой список, который поможет вам разобраться:
                                <br/>
                                <span className={`help-sort`}>Бумага и картон</span>
                                <br/>
                                Газеты, журналы, картоны, бумажные упаковки и т.д.
                                <br/>
                                Помните, что бумага и картон должны быть чистыми и без жирных пятен.
                                <br/>
                                <span className={`help-sort`}>Пластик</span>
                                <br/>
                                Пластиковые бутылки, пакеты, контейнеры и т.д.
                                <br/>
                                Обратите внимание на знаки на упаковке, чтобы понять, какой тип пластика вы собираетесь выбросить.
                                <br/>
                                <span className={`help-sort`}>Металл</span>
                                <br/>
                                Алюминиевые банки, жестяные банки, стальные банки, металлические крышки и т.д.
                                <br/>
                                <span className={`help-sort`}>Стекло</span>
                                <br/>
                                Стеклянные бутылки, банки и другие стеклянные упаковки.
                                <br/>
                                <span className={`help-sort`}>Органические отходы</span>
                                <br/>
                                Продукты питания, остатки еды, садовые и кухонные отходы.
                                <br/>
                                <span className={`help-sort`}>Опасные отходы</span>
                                <br/>
                                Батарейки, лампочки, медикаменты, электроника и другие вещества, которые могут быть опасными для окружающей среды и здоровья людей.
                                <br/>
                                Теперь, когда вы знаете, как правильно сортировать мусор, почему это так важно? Раздельный сбор помогает уменьшить количество мусора, который попадает на свалки, и повысить эффективность переработки отходов. Это также помогает сохранять природные ресурсы и уменьшать влияние человеческой деятельности на окружающую среду.
                                <br/>
                                В заключение, раздельный сбор - это не только ответственное поведение каждого человека, но и важный шаг на пути к сохранению нашей планеты для будущих поколений.
                                <br/>
                                Но что делать, если вы живете в регионе, где нет раздельного сбора мусора? Не отчаивайтесь! Вы можете начать сортировать мусор дома и относить его в специальные контейнеры для переработки. Кроме того, вы можете присоединиться к сообществу, которое занимается сбором мусора в вашем городе и помогать им в их деятельности.
                                <br/>
                                И помните, что каждый маленький шаг в сторону экологической ответственности имеет большое значение. Не стесняйтесь делиться своими знаниями и вдохновлять других на путь заботы о нашей планете.
                            </p>
                        </div>
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

HelpPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
        </React.Fragment>
    );
};

export default HelpPage;