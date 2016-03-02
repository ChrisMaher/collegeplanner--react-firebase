var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');
var Glyphicon = require('react-bootstrap').Glyphicon;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;


module.exports = React.createClass({

    render: function () {
        return (

            <div className="row panel panel-default">

                <div className="home-image "><img className="text-center center-block" src="http://i.imgur.com/QhTikXf.png?1"></img></div>
                <div className="home-text "><div className="text-center center-block"><h2>CollegePlanner.xyz is designed to help you keep track of work.
                    Join 7 other Students who have already posted 22 projects.</h2></div></div>

                <div className="home-buttons">
                    <div className="text-center center-block">

                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-2">
                                <a href="https://play.google.com/store/apps/details?id=com.chris.collegeplanner" target="_blank"><Button className="footer-button" bsStyle="default" bsSize="large"><Glyphicon glyph="phone" /> Get App</Button></a>
                            </div>
                            <div className="col-md-2">
                                <a href="/#/register"><Button className="footer-button" bsStyle="default" bsSize="large"><Glyphicon glyph="user" /> Sign Up</Button></a>
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
});