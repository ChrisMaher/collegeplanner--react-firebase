var React = require('react');

module.exports = React.createClass({

    getInitialState: function () {

        return {
            text: '',
            subject: '',
            type: '',
            worth: 0,
            notes: '',
            due: ''
        }
    },
    componentWillMount: function () {

        var ref = new Firebase("https://collegeplanner.firebaseio.com");
        var authData = ref.getAuth();
        // console.log(authData);
        if (authData) {

            console.log("User " + authData.uid + " is logged in with " + authData.provider);

        } else {

            console.log("User is logged out");

        }
        
    },
    render: function () {
        return (

            <div>
                

                <div className="add-project-form ">

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


        )
    },
    handleClick: function () {

        var ref = new Firebase("https://collegeplanner.firebaseio.com");
        var authData = ref.getAuth();
        // console.log(authData);
        if (authData) {

            if (this.state.text.length > 0) {

                this.props.itemsStore.push({

                    text: this.state.text,
                    subject: this.state.subject,
                    type: this.state.type,
                    worth: this.state.worth,
                    notes: this.state.notes,
                    done: false,
                    due: this.state.due,
                    user: authData.uid

                });

                this.setState({text: ''});
                this.setState({subject: ''});
                this.setState({type: ''});
                this.setState({worth: ''});
                this.setState({due: ''});
                this.setState({notes: ''});

                alert("Project Added.");

            }else{

                alert("Not enough Data.");

            }

            // console.log("User " + authData.uid + " is logged in with " + authData.provider);

        } else {

            console.log("User is logged out");

        }




    },
    handleHideClick: function () {


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