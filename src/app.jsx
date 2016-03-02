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
var Routes = require('./routes');

var App = React.createClass({


    render: function () {
        return (
          <div>
        Header
          </div>
            
        )

    }
});

ReactDOM.render(Routes, document.querySelector('.container'));
