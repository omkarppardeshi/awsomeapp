import React from 'react';

class Class extends React.Component{
    constructor(){
        super()
        this.state = {
            Counter: 0
        };
    }

    counterIncrease =() =>{
        this.setState({
            Counter: this.state.Counter + 1
        }); 
    }

    counterDecrease =() =>{
        this.setState({
            Counter: this.state.Counter - 1
        }); 
    }
    render(){


        return(
            <div>
                <h1>Counter {this.state.Counter}</h1>
                <button onClick={this.counterIncrease}>Click +</button>
                <button onClick={this.counterDecrease}>Click -</button>

            </div>
        )
    }
}

export default Class