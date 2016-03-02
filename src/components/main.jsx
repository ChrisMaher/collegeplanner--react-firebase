var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://collegeplanner.firebaseio.com/';
var ListMain = require('./listmain.jsx');
var Header = require('./header.jsx');
var Footer = require('./footer1.jsx');
var List = require('../list.jsx');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');
var Projects = require('./projects/projects.jsx');
var HomeScreen = require('./homescreen.jsx');
var firebaseUtils = require('../utils/firebaseUtils');


module.exports = React.createClass({
    
    render: function () {
        
        return (

            <div>
                <Header />
                {this.content()}
                <Footer />
            </div>
            
        )

    },
    content: function() {
        if(this.props.children) {
            return this.props.children
        } else {
            return (

            <HomeScreen />

            )
        }
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
        for(var key in this.state.items){
            if(this.state.items[key].done === true){
                this.fb.child(key).remove();
            }
        }

    }
});