import React, { Component } from "react";
import InputForm from "./InputForm";
import calculateLightbulbs from "../utils/calculateLightbulbs";

export default class InputContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(query) {
    const { onResultsUpdate } = this.props,
      { lightbulbs, people } = query;

    const switchedOn = calculateLightbulbs(
      parseInt(lightbulbs),
      parseInt(people)
    );

    onResultsUpdate(switchedOn);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <InputForm onFormSubmit={this.handleFormSubmit} />
        </div>
      </div>
    );
  }
}
