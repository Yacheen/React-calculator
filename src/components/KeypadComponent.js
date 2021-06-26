import React, {Component} from 'react';

class KeyboardComponent extends Component {
    render() {
        const myButtons = ['(', 'CE', ')', 'C', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/']
        const daCalculatorButtons = myButtons.map(x => {
            //for each index, create a button
            return <button name={x} onClick={e => this.props.onClick(e.target.name)}>{x}</button>
        })
        return(
            
            <div className="button">
                {daCalculatorButtons}
            </div>
        );
    }
}
export default KeyboardComponent;