import React from "react";
import { Col, Button, Form} from 'react-bootstrap';
import "./InputBox.css";

class InputBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: this.props.inputValue
    };
    this.handle = this.handle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const testValue = this.state.inputValue[2];
    const value = this.state.inputValue;
    const nextDate = `${value[0]}-${value[1]}`;

    if (!(/^\d+$/.test(testValue))) {
      alert('Input is wrong, please input again.');
      return;
    }
    if (this.props.data.map(({date,value})=>date).indexOf(nextDate) > -1) {
      alert('This date has a value, please choose another day.');
      return;
    }
    this.props.updateValue(this.state.inputValue);
  }

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
    const optionsYear = [...Array(16).keys()].map(x=>(x+=2010).toString());;
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
