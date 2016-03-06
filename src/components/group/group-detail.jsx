var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://collegeplanner.firebaseio.com/';
var ListMain = require('./../listmain.jsx');
var Header = require('./../header.jsx');
var List = require('../../list.jsx');
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
            item: {}
        }
    },


    componentWillMount: function () {

        var self = this;

        var projectId = this.props.params.key;
        this.fb = new Firebase(rootUrl + 'items/');
        var projectRef = this.fb.child(projectId);

        projectRef.child("subject").on("value", function(snapshot) {
            self.setState({
                subject: snapshot.val()
            });
        });
        projectRef.child("text").on("value", function(snapshot) {
            self.setState({
                text: snapshot.val()
            });
        });
        projectRef.child("type").on("value", function(snapshot) {
            self.setState({
                type: snapshot.val()
            });
        });
        projectRef.child("worth").on("value", function(snapshot) {
            self.setState({
                worth: snapshot.val()
            });
        });
        projectRef.child("due").on("value", function(snapshot) {
            self.setState({
                due: snapshot.val()
            });
        });
        projectRef.child("notes").on("value", function(snapshot) {
            self.setState({
                notes: snapshot.val()
            });
        });


    },


    render: function () {




        return (

            <div className="row panel panel-default">

                <div className="col-md-12">
                    <div className="add-project-form">

                        <div className="row input-form">
                            <div className="col-lg-6">
                                <div class="input-group">
                                    <label class="control-label required" for="project_project_title">Title</label>
                                    <input value={this.state.text} placeholder="Title" onChange={this.handleInputChangeText}
                                           type="text" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div class="input-group">
                                    <label class="control-label required" for="project_project_title">Subject</label>
                                    <input value={this.state.subject} placeholder="Subject"
                                           onChange={this.handleInputChangeSubject} type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>

                        <div className="row input-form">
                            <div className="col-lg-4">
                                <div class="input-group">
                                    <label class="control-label required" for="project_project_title">Type</label>
                                    <input value={this.state.type} placeholder="Type" onChange={this.handleInputChangeType}
                                           type="text" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div class="input-group">
                                    <label class="control-label required" for="project_project_title">Worth</label>
                                    <input value={this.state.worth} placeholder="0"
                                           onChange={this.handleInputChangeWorth} type="number" className="form-control"/>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div class="input-group">
                                    <label class="control-label required" for="project_project_title">Due</label>
                                    <input value={this.state.due} placeholder="Date" onChange={this.handleInputChangeDue}
                                           type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>


                        <div className="input-group form-textarea">


                            <div className="textwrapper">

                    <textarea rows="10"
                              value={this.state.notes}
                              placeholder="Notes"
                              onChange={this.handleInputChangeNotes}
                              className="form-control">
                    </textarea>

                            </div>
                        </div>

                        <div className="row input-form text-center">

                            <button onClick={this.handleClick} className="btn btn-danger save-button" type="button">
                                Save Entry
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        )

    },
    handleInputChangeText: function (event) {
        this.setState({text: event.target.value});
    },
    handleInputChangeSubject: function (event) {
        this.setState({subject: event.target.value});
    },
    handleInputChangeType: function (event) {
        this.setState({type: event.target.value});
    },
    handleInputChangeWorth: function (event) {
        this.setState({worth: event.target.value});
    },
    handleInputChangeNotes: function (event) {
        this.setState({notes: event.target.value});
    },
    handleInputChangeDue: function (event) {
        this.setState({due: event.target.value});
    }
});