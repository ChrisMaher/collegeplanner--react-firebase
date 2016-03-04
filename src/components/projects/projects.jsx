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
            items: {}
        }
    },
    
    
    componentWillMount: function () {

        this.fb = new Firebase(rootUrl + 'items/');
        this.bindAsObject(this.fb, 'items');
        this.fb.on('value', this.handleDataLoaded);


        var ref = new Firebase("https://collegeplanner.firebaseio.com");
        var authData = ref.getAuth();
        if (authData) {

            // console.log("User " + authData.uid + " is logged in with " + authData.provider);

        } else {

            console.log("User is logged out");

        }



    },


    render: function () {



        return (

            <div className="row panel panel-default">

                <div className="col-md-12">
                    <ListMain itemsStore={this.firebaseRefs.items}/>
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
        for(var key in this.state.items){
            if(this.state.items[key].done === true){
                this.fb.child(key).remove();
            }
        }

    }
});