import React, { Component } from "react";

export default class ResultsContainer extends Component {
  constructor(props) {
    super(props);

    this.buildLightbulbsList = this.buildLightbulbsList.bind(this);
  }

  buildLightbulbsList() {
    const { switchedOn } = this.props;

    return switchedOn.length ? (
      switchedOn.map(lightbulb => {
        if (switchedOn.indexOf(lightbulb) < switchedOn.length - 1) {
          return <span key={lightbulb}>{lightbulb}, </span>;
        } else {
          return <span key={lightbulb}>{lightbulb}</span>;
        }
      })
    ) : (
      <span>No results</span>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header lead">
              {this.props.switchedOn.length} lightbulbs will be turned on.
            </div>
            <div className="card-body">
              <h4 className="card-title">Lightbulbs</h4>
              <p className="text-justify">{this.buildLightbulbsList()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
