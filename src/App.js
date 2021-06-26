import React, {Component} from "react";
import './App.scss';
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0"
    }
  }
//methods
  onClick = button => {
    if(button === "=") {
      this.Calculate();
    }
    else if(button === "C") {
      this.Reset();
    }
    else if(button === "CE") {
      if(this.state.result !== "0") {
        if(this.state.result.length === 1) {
          this.Reset();
        }
        else {
          this.Erase();
        }
        
      }
      
    }
    else {
      if(this.state.result === "0") {
        this.setState({
          result: button
        })
      }else {
        this.setState({
          result: this.state.result + button
        })

      }
      
    }
    
  }

  Calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "" ) + ""
      })
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }

  };

  Reset = () => {
    this.setState({
      result: "0"
    })

  }

  Erase = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });

  }
  
  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Yassin's Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>
    </div>
    );

  }
}

export default App;
