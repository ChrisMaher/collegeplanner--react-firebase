var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://collegeplanner.firebaseio.com/';
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');
var Glyphicon = require('react-bootstrap').Glyphicon;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;



module.exports = React.createClass({

    mixins: [ReactFire],
    getInitialState: function () {

        return {
            loaded: false,
            items: {}
        }
    },

    componentWillMount: function () {


        this.fb = new Firebase(rootUrl + 'items/');
        this.bindAsObject(this.fb, 'items');

    },


    render: function () {
        return (

            <div className="footer">
                
                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="primary" bsSize="large"><Glyphicon glyph="euro" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>13</h1></div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">Projects Today</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="primary" bsSize="large"><Glyphicon glyph="euro" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>7</h1></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">Total Projects</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="primary" bsSize="large"><Glyphicon glyph="user" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>3</h1></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">Users Joined Today</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="primary" bsSize="large"><Glyphicon glyph="user" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>23</h1></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">Total Users</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="warning" bsSize="large"><Glyphicon glyph="home" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>2</h1></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">Group Notes Today</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="warning" bsSize="large"><Glyphicon glyph="home" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>4</h1></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">Total Group Notes</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="warning" bsSize="large"><Glyphicon glyph="star" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>23</h1></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">User this Week</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 stats-box">
                    <div className="row">

                        <div className="col-xs-8 text-center">
                            <div className="col-xs-6 text-center">

                                <Button className="footer-button" bsStyle="warning" bsSize="large"><Glyphicon glyph="star" /></Button>

                            </div>
                            <div className="col-xs-6 text-center"><h1>7</h1></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-8 text-center">
                            <span className="text-muted">Users this year</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});