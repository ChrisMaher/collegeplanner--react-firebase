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
var Profile = require('./components/profile.jsx');
var Projects = require('./components/projects/projects.jsx');
var ProjectsDetails = require('./components/projects/projects-detail.jsx');
var Main = require('./components/main.jsx');

var Register = require('./components/login-register/Register.js');
var Login = require("./components/login-register/Login");
var Logout = require('./components/login-register/Logout');
var requireAuth = require('./utils/authenticated');



module.exports = (

    <Router history={new HashHistory}>
        <Route path="/" component={Main}>
            <Route path="projects" component={Projects}   onEnter={requireAuth}  />
            <Route path="project/:key" component={ProjectsDetails}    onEnter={requireAuth}  />
            <Route path="profile" component={Profile}   onEnter={requireAuth}  />
            <Route path="login" component={Login} />
            <Route path="logout" component={Logout} />
            <Route path="register" component={Register} />
        </Route>
    </Router>

);