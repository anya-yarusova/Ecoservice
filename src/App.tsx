import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Wireframe } from './components/Wireframe/Wireframe';

import 'primereact/resources/themes/vela-green/theme.css';
import 'primeflex/primeflex.css';
import LandingPage from "./components/Page";
import type { Page } from './types/types';
import { LayoutProvider } from "./layout/context/layoutcontext";
import Layout from './layout/layout';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './styles/layout/layout.scss';
import './styles/demo/Demos.scss';


type Props = {
    Component: Page;
};

export default function MyApp({ Component}: Props) {
    if (Component.getLayout) {
        return <LayoutProvider>{Component.getLayout(<Component />)}</LayoutProvider>;
    } else {
        return (
            <LayoutProvider>
                <Layout>
                    <Component />
                </Layout>
            </LayoutProvider>
        );
    }
}