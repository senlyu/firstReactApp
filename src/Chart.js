import React from "react";
import * as d3 from "d3";

import Axis from "./Axis";
import Bars from "./Bars";

class Chart extends React.Component {
  

  render() {
    // set margin for chart display
    const margin = 50;
    const width = this.props.widthTotal - 2 * margin;
    const height = this.props.heightTotal - 2 * margin; 

    // calculate scale
    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(this.props.data.map((d)=>d.date))
      .padding(0.2);
    
    // set maxHigh to be the nearest hundred of max value 
    let maxHigh = d3.max(this.props.data.map((d)=>d.value));
    maxHigh = Math.ceil(maxHigh / 100) * 100;
    const yScale = d3
      .scaleLinear()
      .domain([maxHigh,0])
      .range([0, height]);

    // for the margin, just reminder (0,0) is in the top left
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

    /* use viewBox and scroll bar 
     * because if we did it in responsive
     * the chart will be too small to see
     */
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