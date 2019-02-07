import React from "react";
import * as d3 from "d3";
import * as d3Axis from 'd3-axis'

class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    const axisType = `axis${this.props.orient}`
    const axiss = d3Axis[axisType]()
      .scale(this.props.scale)
      .tickSize(-this.props.tickSize)
      .tickPadding([12])
      .ticks([4])

    d3.select(this.axisElement).call(axiss)
  }


  render() {
    return (
      <g
        className={`Axis Axis-${this.props.orient}`}
        ref={(el) => { this.axisElement = el; }}
        transform={this.props.translate}
      />
	  )
  }
}

export default Axis;