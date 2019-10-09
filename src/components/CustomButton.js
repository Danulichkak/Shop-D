import React, { Component } from 'react';



export default class CustomButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                clickCounter: 0
            }
        };
    }

    handleClick = () => {
        let clickCounter = this.state.data.clickCounter;
        alert(`Clicked: ${++clickCounter}`);
        this.setState({
            data: {
                clickCounter: clickCounter
            }
        });
    };
    list = ["item1", "item2", "item3"];

    result = <ul>
        {this.list.map(item => <li key={item}>{item}</li>)}
    </ul>;

    render() {
        return (
            <div>
                {this.result}
                <button id={this.id} onClick={this.handleClick} className="btn btn-danger">
                    {this.props.route.label} {this.state.data.clickCounter}
                </button>
            </div>
        );
    }
}