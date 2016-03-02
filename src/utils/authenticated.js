var Login = require("../components/login-register/Login.js");
var firebaseUtils = require('./firebaseUtils');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');

function requireAuth(nextState, replace) {
    if (!firebaseUtils.isLoggedIn()) {
        window.location = '/#/login';
    }
}

module.exports = requireAuth;