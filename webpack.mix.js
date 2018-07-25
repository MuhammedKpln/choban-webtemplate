let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath("src")
mix.disableSuccessNotifications();
// mix.js('packages/static/js/uncompiled/app.js', 'packages/static/js/app.js')
// mix.js('packages/static/js/uncompiled/vue-directives.js', 'packages/static/js/vue-directives.js')
mix.sass('src/uncompiled/css/main.scss', 'src/css/main.css')
mix.js('src/uncompiled/js/index.js', 'src/js/main.js')
