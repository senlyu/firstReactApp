import React from "react";
import Dropdown from "react-dropdown"

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
          holder[0] = e.value;
          break;
        case 'm':
          holder[1] = e.value;
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
    const optionsMonth = [...Array(12).keys()].map(x=>(x+=1).toString());
    const defaultYear = optionsYear[0];
    const defaultMonth = optionsMonth[0];
    return (
      <div>
    		<label>Year:
    		  <Dropdown options={optionsYear} onChange={this.handle('y')} value={inputYear} placeholder={defaultYear} />
    		</label>
    		<label>Month:
    		  <Dropdown options={optionsMonth} onChange={this.handle('m')} value={inputMonth} placeholder={defaultMonth} />
    		</label>
    		<label>Value:
    		  <input type="text" value={inputVal} onChange={this.handle('v')}/>
    		</label>
    		<button onClick={this.handleSubmit}>Click</button>
      </div>
	  )
  }
}

export default InputBox;