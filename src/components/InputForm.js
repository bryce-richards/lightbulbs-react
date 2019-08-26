import React, { Component } from "react";

export default class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightbulbs: "",
      people: ""
    };

    this.handleLightbulbsChange = this.handleLightbulbsChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleLightbulbsChange(event) {
    const { value } = event.target;

    this.setState({
      lightbulbs: value
    });
  }

  handlePeopleChange(event) {
    const { value } = event.target;

    this.setState({
      people: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { onFormSubmit } = this.props;

    onFormSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="lightbulbsInput">Lightbulbs</label>
            <input
              id="lightbulbsInput"
              className="form-control"
              type="number"
              value={this.state.lightbulbs}
              onChange={this.handleLightbulbsChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="peopleInput">People</label>
            <input
              id="peopleInput"
              className="form-control"
              type="number"
              value={this.state.people}
              onChange={this.handlePeopleChange}
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={
            !this.state.lightbulbs ||
            this.state.lightbulbs <= 0 ||
            !this.state.people ||
            this.state.people <= 0
          }
        >
          Calculate
        </button>
      </form>
    );
  }
}
