import React, { Component } from "react";

class ClassCounter extends Component {

    formatCount() {

        return this.props.value === 0 ? "Zero" : this.props.value;

    }


    render() {

        return (
            <div>

                <span style={{ color: 'red' }} className="m-2" >{this.formatCount()}</span>

                <button onClick={() => this.props.onIncrement(this.props.counter)}>increment</button>

                <button onClick={() => this.props.onDecrement(this.props.counter)}>decrement</button>

                <button
                    onClick={() => this.props.onDelete(this.props.id)}
                    disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                >delete
                </button>

            </div>
        );
    }
}

export default ClassCounter;
