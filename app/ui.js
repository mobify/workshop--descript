/**
 * Scripts required here will be combined into ui.js
 */

require([
    'global/ui',
    'pages/home/ui',
    'pages/category/ui',
    'pages/pdp/ui',
    'pages/order-confirmation/ui'
    // Add additional UI scripts here
],
function(
    globalUI,
    home
) {

    // This file gets pre-loaded so we dont' want to explicitly execute
    //  anything here. Instead we will wait for a require statement run
    //  in our template

}, null, true); // relPath, forceSync
