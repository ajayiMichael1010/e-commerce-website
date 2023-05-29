//import './bootstrap';
//import '../css/app.css';
import '../css/custom.css';
import {MyContextProvider} from "@/Components/StateManagement.jsx";

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <MyContextProvider>
                <App {...props} />
        </MyContextProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
