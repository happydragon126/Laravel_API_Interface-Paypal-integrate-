const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/jquery-2.2.4.js', 'public/js')
    .js('resources/js/login.js', 'public/js')
    .js('resources/js/main.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/login.scss', 'public/css');

