import React, { Component } from 'react';
import ClassCounter from './ClassCounter';

class ClassCounters extends Component {



    render() {


        return (
            <div className='m-4'>

                <button onClick={this.props.onReset} className='m-3'>reset</button>

                {this.props.counters.map((counter) =>
                    <ClassCounter
                        key={counter.id}
                        id={counter.id}
                        value={counter.value}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        counter={counter}
                    />)}
            </div>
        );
    }
}

export default ClassCounters;