var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://collegeplanner.firebaseio.com/';
var ListMain = require('./listmain.jsx');
var Header = require('./header.jsx');
var List = require('../list.jsx');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');

module.exports = React.createClass({


    mixins: [ReactFire],
    getInitialState: function () {

        return {
            loaded: false,
            items: {}
        }
    },


    componentWillMount: function () {

        var self = this;

        var ref = new Firebase("https://collegeplanner.firebaseio.com");
        var authData = ref.getAuth();

        console.log(authData);

        if (authData) {
            self.setState({
                email: authData.password.email
            });
            self.setState({
                profileImageURL: authData.password.profileImageURL
            });
        }

        this.fb = new Firebase(rootUrl + 'items/');
        this.bindAsObject(this.fb, 'items');
        this.fb.on('value', this.handleDataLoaded);

        var user = new Firebase(rootUrl + 'user/'+authData.uid);
        user.child("college").on("value", function(snapshot) {
            self.setState({
                college: snapshot.val()
            });
        });
        user.child("username").on("value", function(snapshot) {
            self.setState({
                username: snapshot.val()
            });
        });
        user.child("location").on("value", function(snapshot) {
            self.setState({
                location: snapshot.val()
            });
        });

    },


    render: function () {


        return (

            <div className="row panel panel-default">

                <div className="col-md-12">

                    <div className="add-project-form" >

                        <div className="row">
                            <div className="col-lg-3 text-center">

                                  <img className="profile-image" src={this.state.profileImageURL}></img>

                            </div>
                            <div className="col-lg-8">

                                <div className="row input-form">
                                    <div className="col-lg-6">
                                        <div class="input-group">
                                            <label class="control-label required" for="project_project_title">Email</label>
                                            <input value={this.state.email} placeholder="Email" onChange={this.handleInputChangeEmail}
                                                   type="text" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div class="input-group">
                                            <label class="control-label required" for="project_project_title">Username</label>
                                            <input value={this.state.username} placeholder="Username"
                                                   onChange={this.handleInputChangeUsername} type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row input-form">
                                    <div className="col-lg-6">
                                        <div class="input-group">
                                            <label class="control-label required" for="project_project_title">Location</label>
                                            <input value={this.state.location} placeholder="Location" onChange={this.handleInputChangeLocation}
                                                   type="text" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div class="input-group">
                                            <label class="control-label required" for="project_project_title">College</label>
                                            <input value={this.state.college} placeholder="College"
                                                   onChange={this.handleInputChangeCollege} type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>

                    </div>

                    <hr />

                    <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
                        <List items={this.state.items}/>
                        {this.deleteButton()}
                    </div>
                </div>


            </div>

        )

    },
    handleDataLoaded: function () {
        this.setState({loaded: true});
    },
    deleteButton: function () {
        if (!this.state.loaded) {
            return
        } else {
            return <div className="text-center clear-complete">
                <hr />
                <button
                    type="button"
                    onClick={this.onDeleteDoneClick}
                    className="btn btn-default">
                    Clear Finished
                </button>
            </div>
        }
    },
    onDeleteDoneClick: function () {
        for (var key in this.state.items) {
            if (this.state.items[key].done === true) {
                this.fb.child(key).remove();
            }
        }

    },
    handleInputChangeEmail: function (event) {
        this.setState({email: event.target.value});
    },
    handleInputChangeUsername: function (event) {
        this.setState({username: event.target.value});
    },
    handleInputChangeLocation: function (event) {
        this.setState({location: event.target.value});
    },
    handleInputChangeCollege: function (event) {
        this.setState({college: event.target.value});
    }
});