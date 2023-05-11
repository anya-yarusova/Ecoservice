import 'primereact/resources/themes/vela-green/theme.css';
import 'primeflex/primeflex.css';
import type { Page } from '../types/types';
import { LayoutProvider } from "../layout/context/layoutcontext";
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import './lara-light-teal/theme.css';
import {AppProps} from "next/app";

type Props = AppProps & {
    Component: Page;
};

export default function MyApp({ Component, pageProps }: Props) {
    if (Component.getLayout) {
        return <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>;
    }
}