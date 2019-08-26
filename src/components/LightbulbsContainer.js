import React, { Component } from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import ResultsContainer from "./ResultsContainer";

export default class LightbulbsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchedOn: []
    };

    this.handleResultsUpdate = this.handleResultsUpdate.bind(this);
  }

  handleResultsUpdate(switchedOn) {
    this.setState({ switchedOn });
  }

  render() {
    return (
      <div>
        <div id="jumbotron" className="jumbotron">
          <Header />
          <hr className="my-4" />
          <InputContainer onResultsUpdate={this.handleResultsUpdate} />
        </div>
        <div className="container-fluid">
          {this.state.switchedOn.length ? (
            <ResultsContainer switchedOn={this.state.switchedOn} />
          ) : (
            <h2 className="text-center">
              Enter the number of lightbulbs and people.
            </h2>
          )}
        </div>
      </div>
    );
  }
}
