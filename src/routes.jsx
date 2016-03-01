var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://collegeplanner.firebaseio.com/';
var Header = require('./components/listmain');
var List = require('./list');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');
var Child1 = require('./components/profile.jsx');
var Child2 = require('./components/videos.jsx');
var Main = require('./components/main.jsx');

module.exports = (

    <Router history={new HashHistory}>
        <Route path="/" component={Main}>
            <Route path="profile" component={Child1} />
            <Route path="videos" component={Child2} />
        </Route>
    </Router>
)