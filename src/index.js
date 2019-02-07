import React from "react";
import { render } from "react-dom";

import Chart from "./Chart";
import InputBox from "./InputBox";
import HighLight from "./HighLight";

import "./index.css"
import { Container, Jumbotron } from 'react-bootstrap';


class App extends React.Component {
  

  /**
   * Create the app
   * @constructor
   */
  constructor(){
    super();
    this.state = {
      data: [{"date": "2013-01", "value": 53}, 
             {"date": "2013-02", "value": 165}, 
             {"date": "2013-03", "value": 269}, 
             {"date": "2013-04", "value": 344}, 
             {"date": "2013-05", "value": 376}, 
             {"date": "2013-06", "value": 410}, 
             {"date": "2013-07", "value": 421}, 
             {"date": "2013-08", "value": 405}, 
             {"date": "2013-09", "value": 376}, 
             {"date": "2013-10", "value": 359}, 
             {"date": "2013-11", "value": 392}, 
             {"date": "2013-12", "value": 433}, 
             {"date": "2014-01", "value": 455}, 
             {"date": "2014-02", "value": 478}],
      currentIndex: null
    };
    // if use arrow function for method, no need for these bind
    this.setCurrentIndex = this.setCurrentIndex.bind(this);
    this.addData = this.addData.bind(this);
  }
  
  /**
  * Change the value of data
  * Now we only add value to data
  * This function is also a hook will be used in components
  * Also we want our data to be ordered
  * So here we will sort the data before update in state
  * @param {value} string - [Year, Month, value]
  */
  addData(value) {
    const nextDate = `${value[0]}-${value[1]}`;
    const join = this.state.data.concat({"date": nextDate, "value": value[2]});
    join.sort((a,b)=>{
      return new Date(a.date) - new Date(b.date)});
    this.setState({data:join});     
  }

  /**
  * Control the current selected value
  * This function use as a hook to get value from components
  * @param {currentIndex} interger - represent index of the selected bar in the data
  */
  setCurrentIndex(currentIndex){
    this.setState({
      currentIndex
    });
  }


  render() {
    // set default values.
    const defaultInput = ['2014', '03', 0];
    const chartWidth = 1000;
    const chartHeight = 500;

    // set all the props for the components
    const inputBoxProps = {
      inputValue : defaultInput,
      updateValue : this.addData,
      data: this.state.data
    }
    const chartProps = {
      data : this.state.data,
      widthTotal : chartWidth,
      heightTotal : chartHeight,
      highlightBar : this.setCurrentIndex,
      highlightedBar : this.state.currentIndex
    }
    const highLightProps = {
      data: this.state.data,
      currentIndex: this.state.currentIndex
    }

    return (
      <Container>
        <Jumbotron className="title-container">
          <h1 className="title">My First React APP</h1>
          <a href="https://github.com/senlyu/firstReactApp">Check the Code Here</a>
        </Jumbotron>
        <Container>
          <HighLight {...highLightProps}/>
        </Container>
        <Container className="chart">         
          <Chart {...chartProps}/>
        </Container>
        <p className="lead">Also you can add value to the chart.</p>
        <Container className="round-c">
          <InputBox {...inputBoxProps}/>
        </Container>
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
