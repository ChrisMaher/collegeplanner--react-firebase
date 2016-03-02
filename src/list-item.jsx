var React = require('react');
var rootUrl = 'https://collegeplanner.firebaseio.com/';
var Firebase = require('firebase');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var HashHistory = require('react-router/lib/hashhistory');

module.exports = React.createClass({

    getInitialState: function () {

        return {
            key: this.props.item.key,
            text: this.props.item.text,
            subject: this.props.item.subject,
            worth: this.props.item.worth,
            type: this.props.item.type,
            done: this.props.item.done,
            textChanged: false
        }

    }, componentWillMount: function () {

        this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);

    },


    render: function () {

        return (

            <div>

            <div className="row add-project-form-list">


                <div className="col-lg-1">
                    <img src="https://secure.gravatar.com/avatar/a3804878cac93172fa986c966f31a977" />
                </div>

                <div className="col-lg-4">
                    <div className="col-lg-12">

                        <Link to={`/project/${this.props.item.key}`}>
                             <h3 className="project-list-h3">{this.state.text} ({this.state.worth}%)</h3>
                         </Link>

                    </div><div className="col-lg-12">
                    <h4 className="project-list-h4">{this.state.subject} ({this.state.type})</h4>
                </div>
                </div>

                <div className="col-lg-6">
                    {this.state.notes}
                </div>

                <div className="col-lg-1 list-checkbox">

                <input type="checkbox" onChange={this.handleChangeDone} checked={this.state.done} />
            
                </div>


            </div>

             </div>

        )

    },
    changesButtons: function () {
        if (!this.state.textChanged) {
            return null
        } else {
            return <span>
                <button
                    className="btn btn-default"
                    onClick={this.handleUndoClick}>
                    Undo
                </button>

                <button
                    className="btn btn-default"
                    onClick={this.handleSaveClick}>
                    Save
                </button>

                   </span>
        }

    },
    handleUndoClick: function (event) {
        this.setState({
            text: this.props.item.text,
            textChanged: false
        });


    },
    handleSaveClick: function (event) {
        this.fb.update({text: this.state.text});
        this.setState({textChanged : false});
    },
    handleChangeDone: function (event) {
        var update = {done: event.target.checked};
        this.setState(update)
        this.fb.update(update);
    },
    handleDeleteClick: function (event) {
        this.fb.remove();
    },
    handleTextChange: function (event) {
        this.setState({
            text: event.target.value,
            textChanged: true
        });
    }

});