const mix = require("laravel-mix");
const path = require("path");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js/"),
        },
    },
    output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
    devServer: {
        allowedHosts: "all",
    },
})
    .js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .babelConfig({
        presets: ["@babel/preset-env", "@babel/preset-react"],
    })
    .disableSuccessNotifications();
