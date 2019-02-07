import React from "react";
import { Col, Button, Form} from 'react-bootstrap';
import "./InputBox.css";

class InputBox extends React.Component {
  

  /**
   * For input box use
   * @constructor
   * @param {props} object
   */
  constructor(props){
    super(props);
    // need to have a state here to save the data user type into the input box
    this.state = {
      inputValue: this.props.inputValue
    };
    this.handle = this.handle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Input validation
   * Here test 
   * 1. whether value is a string only contains integer
   * 2. this the date already be setted in data
   * After test will call the hook to update the data
   */
  handleSubmit() {
    const testValue = this.state.inputValue[2];
    const value = this.state.inputValue;
    const nextDate = `${value[0]}-${value[1]}`;

    if (!(/^\d+$/.test(testValue))) {
      alert('Input value is wrong, please try again.');
      return;
    }
    if (this.props.data.map(({date,value})=>date).indexOf(nextDate) > -1) {
      alert('This date has a value, please choose another day.');
      return;
    }
    this.props.updateValue(this.state.inputValue);
  }

  /**
   * For handle inputbox use
   * There are three input box
   * Use switch to handle the right value update in state
   * @param {typeInput} string - 'y' for year, 'm' for month, 'v' for value
   */
  handle(typeInput) {
    return (e) => {
      let holder = this.state.inputValue;
      switch(typeInput) {
        case 'y':
          holder[0] = e.target.value;
          break;
        case 'm':
          holder[1] = e.target.value;
          break;
        case 'v':
          holder[2] = e.target.value;
          break;
        default:
          return;
      }
      this.setState({inputValue: holder});
    }
  }

  render() {
  	const [inputYear, inputMonth, inputVal] = this.state.inputValue;
    // to create 16 years form 2010
    const optionsYear = [...Array(16).keys()].map(x=>(x+=2010).toString());
    // create array from '01' to '12' for month 
    const optionsMonth = [...Array(9).keys()].map(x=>`0${(x+=1).toString()}`)
                        .concat([...Array(3).keys()].map(x=>(x+=10).toString()));

    return (
      <Form className="form">
            <Form.Group as={Col}>
              <Form.Label>Year</Form.Label>
              <Form.Control as="select" value={inputYear} onChange={this.handle('y')}>
                {optionsYear.map((i)=>(
                  <option value={i} key={i}>{i}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Month</Form.Label>
              <Form.Control as="select" value={inputMonth} onChange={this.handle('m')}>
                {optionsMonth.map((i)=>(
                  <option value={i} key={i}>{i}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Value</Form.Label>
              <Form.Control type="text" value={inputVal} onChange={this.handle('v')} />
            </Form.Group>
            <Button className="button" variant="primary" type="button" onClick={this.handleSubmit}>
              Submit
            </Button>
      </Form>
	  )
  }
}

export default InputBox;
