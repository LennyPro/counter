import React, { Component } from 'react';
import ClassNavBar from './components/NavBar';
import ClassCounters from './components/ClassCounters';

class App extends Component {

    state = {

        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 3 },
            { id: 2, value: 3 },
        ]

    }


    handleIncrement = (counter) => {

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleDecrement = (counter) => {
        console.log('counter: ', counter);

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    }

    handleDelete = (id) => {
        console.log('event handler called...', id);
        const counters = this.state.counters.filter((c) => {
            return c.id !== id
        });
        this.setState({ counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }


    render() {

        return (
            <div className='m-4'>

                <ClassNavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />

                <main className='container'>

                    <ClassCounters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />

                </main>

            </div>
        );
    }
}

export default App;