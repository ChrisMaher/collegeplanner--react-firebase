var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');


module.exports = React.createClass({

    render: function () {
        return (
            
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        CollegePlanner.xyz
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="projects">Projects</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                        <li><Link to="videos">Videos</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
});