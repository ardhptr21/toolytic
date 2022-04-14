require("./bootstrap");

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import Layout from "../Pages/Layout";

createInertiaApp({
    resolve: (name) => {
        const originalPage = require(`../Pages/${name}`).default;
        originalPage.layout ||= (page) => <Layout children={page} />;
        return originalPage;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        );
    },
});
