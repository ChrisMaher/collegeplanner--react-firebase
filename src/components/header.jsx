var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');
var firebaseUtils = require('../utils/firebaseUtils');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            loggedIn: firebaseUtils.isLoggedIn()
        }
    },
    handleLogout: function(loggedIn){
        this.setState({
            loggedIn: loggedIn
        });
    },
    componentWillMount: function(){
        firebaseUtils.onChange = this.handleLogout;
    },
    render: function () {
        var videosPage;
        var projectsPage;
        var profilePage;
        var loginOrOut;
        var register;
        if(this.state.loggedIn){

            projectsPage = <li><Link to="/projects" >Projects</Link></li>;
            profilePage = <li><Link to="/profile" >Profile</Link></li>;
            loginOrOut = <li><Link to="/logout" >Logout</Link></li>;
            register = null
        } else {
            loginOrOut = <li><Link to="/login" >Login</Link></li>;
            register = <li><Link to="/register" > Register </Link></li>;
        }
        return (
            
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        CollegePlanner.xyz
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/" > Home </Link></li>
                        {projectsPage}
                        {profilePage}
                        {register}
                        {loginOrOut}
                    </ul>
                </div>
            </nav>
        )
    }
});