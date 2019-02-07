import React from "react";

class Bars extends React.Component {


  render() {
    return (
      <g
        transform={`translate(${this.props.margin}, ${this.props.margin})`}
        onMouseOut={() => this.props.highlightBar(null)}
      >
	      {this.props.data.map(({date,value}, i) => (
	          <rect
	            x={this.props.xScale(date)}
	            y={this.props.yScale(value)}
	            width={this.props.xScale.bandwidth()}
	            height={this.props.height - this.props.yScale(value)}
	            className={i === this.props.highlightedBar ? "noHighlight" : "Highlight"}
	            onMouseOver={() => this.props.highlightBar(i)}
	            key={i}
	          />
	      ))}
      </g>
    )
  }
}

export default Bars;