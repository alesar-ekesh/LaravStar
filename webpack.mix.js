const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.js('resources/js/app.js', 'public/js')
 .vue() // Add this line to enable Vue support
 .sass('resources/sass/app.scss', 'public/css')
 .postCss('resources/css/app.css', 'public/css', [
     //
 ])
 .copy('node_modules/admin-lte/dist/img', 'public/dist/img') // Optional, to copy AdminLTE images
 .copy('node_modules/admin-lte/plugins', 'public/plugins'); // Optional, to copy plugins
//
// Add this line to copy Bootstrap JavaScript files
mix.copy('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/js');

// Add FontAwesome CSS
mix.copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'public/css');

// Add FontAwesome Webfonts
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts');