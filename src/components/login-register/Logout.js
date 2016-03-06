var React = require('react');
var firebaseUtils = require('../../utils/firebaseUtils');

var Logout = React.createClass({
  componentDidMount: function () {
    firebaseUtils.logout();
    window.location = '/';
  },

  render: function () {
    return (

        <div className="row panel panel-default text-center ">

          <p className="text-center logging-out"><h1>Logging Out....</h1></p>

        </div>



    )
  }
});

module.exports = Logout;