var React = require('react');
var firebaseUtils = require('../../utils/firebaseUtils');

var Register = React.createClass({
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
        var username = this.refs.username.value;
        var location = this.refs.location.value;
        var college = this.refs.college.value;
        var avatar = this.refs.avatar.value;

        firebaseUtils.createUser({
            email: email,
            password: pw,
            username: username,
            location: location,
            college: college,
            avatar: avatar
        }, function (err) {
            if (!err) {
                window.location = '/';
            } else {
                this.setState({error: err});
            }
        }.bind(this));
    },
    render: function () {
        var errors = this.state.error ? <p> {this.state.error} </p> : '';
        return (

            <div className="row panel panel-default">
                <div className="row login-form">
                    <div className="col-sm-12 ">
                        <h1> Register </h1>

                        <div className="row">

                            <form onSubmit={this.handleSubmit}>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Email </label>
                                        <input className="form-control" ref="email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input ref="pw" type="password" className="form-control"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label> Username </label>
                                        <input className="form-control" ref="username" placeholder="Username"/>
                                    </div>

                                </div>
                                <div className="col-lg-6">

                                    <div className="form-group">
                                        <label> Location </label>
                                        <input className="form-control" ref="location" placeholder="Location"/>
                                    </div>
                                    <div className="form-group">
                                        <label> College </label>
                                        <input className="form-control" ref="college" placeholder="College"/>
                                    </div>
                                    <div className="form-group">
                                        <label> Avatar </label>
                                        <input className="form-control" ref="avatar" placeholder="Avatar"/>
                                    </div>
                                    {errors}
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>
        )
    }
});

module.exports = Register;
