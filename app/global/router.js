define([
    '$',
    'adaptivejs/router',
    'pages/home/view',
    'pages/category/view',
    'pages/pdp/view',
    'pages/order-confirmation/view'
],
function($, Router, Home, Category, PDP, OrderConfirmation) {
    var router = new Router();

    router
        .add(Router.selectorMatch('body.home'), Home)
        .add(Router.selectorMatch('body.category'), Category)
        .add(Router.selectorMatch('body.pdp'), PDP)
        .add(Router.selectorMatch('body.confirmation'), OrderConfirmation);

    return router;
});
