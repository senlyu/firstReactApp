import React from "react";


class HighLight extends React.Component {


  render() {
    return (
      <p>{this.props.data.length} datapoints
        <br />
        <small>{this.props.currentIndex !== null ? this.props.data[this.props.currentIndex].date : " "}</small>
        <br />
        <small>{this.props.currentIndex !== null ? this.props.data[this.props.currentIndex].value : " "}</small>
      </p>
    )
  }
}

export default HighLight;