import React from "react";
import * as d3 from "d3";

import Axis from "./Axis";
import Bars from "./Bars";

class Chart extends React.Component {
  

  render() {

    const margin = 50;
    const width = this.props.widthTotal - 2 * margin;
    const height = this.props.heightTotal - 2 * margin; 

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(this.props.data.map((d)=>d.date))
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      //.domain([(d3.max(this.props.data.map((d)=>d.value))).,0])
      .domain([1000,0])
      .range([0, height]);

    const xProps = {
      orient: 'Bottom',
      scale: xScale,
      translate: `translate(${margin},${height+margin})`,
      tickSize: height
    }

    const yProps = {
      orient: 'Left',
      scale: yScale,
      translate: `translate(${margin}, ${margin})`,
      tickSize: width
    }

    const barProps = {
      margin: margin,
      highlightedBar: this.props.highlightedBar,
      highlightBar: this.props.highlightBar,
      height: height,
      data: this.props.data,
      xScale: xScale,
      yScale: yScale
    }

    return (
      <svg width={this.props.widthTotal} height={`${this.props.heightTotal}`} viewBox="0 0 1000 500">
        <g>
          <Axis {...xProps}/>
          <Axis {...yProps}/>
          <Bars {...barProps}/>
        </g>
      </svg>
    );
  }
}

export default Chart;