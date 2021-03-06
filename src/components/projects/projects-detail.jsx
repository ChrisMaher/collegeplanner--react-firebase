var React = require('react');
var ReactDOM = require('react-dom');
var ReactQuill = require('react-quill');
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

            text: '',
            subject: '',
            type: '',
            worth: 0,
            notes: '',
            due: '',
            content: 'initial content',
            college: '',
            loaded: false,
            item: {}
        }
    },


    componentWillMount: function () {

        var self = this;

        var ref = new Firebase("https://collegeplanner.firebaseio.com");
        var authData = ref.getAuth();

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
        projectRef.child("college").on("value", function(snapshot) {
            self.setState({
                college: snapshot.val()
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

                                <ReactQuill value={this.state.notes}
                                            onChange={this.onEditorChange}
                                            onChangeSelection={this.onEditorChangeSelection} />


                            </div>

                        </div>

                        <div className="row input-form text-center">

                            <button onClick={this.handleSaveClick} className="btn btn-danger save-button" type="button">
                                Update Entry
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
    },
    handleSaveClick: function (event) {

        this.fb1 = new Firebase(rootUrl + 'items/' + this.props.params.key);

        var ref = new Firebase("https://collegeplanner.firebaseio.com");
        var authData = ref.getAuth();

        this.fb1.update(


            {
                text: this.state.text,
                subject: this.state.subject,
                type: this.state.type,
                worth: this.state.worth,
                notes: this.state.notes,
                done: false,
                due: this.state.due,
                college: this.state.college,
                user: authData.uid
            }




        );

        window.location = '/#/projects';

    },
    onEditorChange: function(value, delta, source) {
        this.setState({
            notes: value,
            events: [
                'text-change('+this.state.notes+' -> '+value+')'
            ].concat(this.state.events)
        });
    },
    onEditorChangeSelection: function(range, source) {
        this.setState({
            selection: range,
            events: [
                'selection-change('+
                this.formatRange(this.state.selection)
                +' -> '+
                this.formatRange(range)
                +')'
            ].concat(this.state.events)
        });
    },

    formatRange: function(range) {
        return range
            ? [range.start, range.end].join(',')
            : 'none';
    }
    
});