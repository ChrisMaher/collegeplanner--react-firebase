var React = require('react');
var firebaseUtils = require('../../utils/firebaseUtils');
var ReactRouter = require('react-router');


var Login = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            error: false
        }
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var email = this.refs.email.value;
        var pw = this.refs.pw.value;
        firebaseUtils.loginWithPW({email: email, password: pw}, function (err) {
            if (!err) {
                var location = this.props.location
                if (location.state && location.state.nextPathname) {
                    window.location = '/';
                } else {
                    window.location = '/';
                }
            } else {
                console.log("Login failed! ", err);
                this.setState({error: err});
            }
        }.bind(this));
    },
    render: function () {
        var errors = this.state.error ? <p> {this.state.error} </p> : '';
        return (
            <div className="row panel panel-default">


                <div className="row login-form">

                    <div className="col-sm-6">
                        <h1> Login </h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label> Email </label>
                                <input className="form-control" ref="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input ref="pw" type="password" className="form-control" placeholder="Password"/>
                            </div>
                            {errors}
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
        );
    }
});

module.exports = Login;
