/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import React,{Component} from "react";

class Count extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }


increment = ()=>{
    this.setState(prevState =>({
        count: prevState.count+1
    }));
};
decrement = ()=>{
    this.setState(prevState =>({
        count: prevState.count-1
    }));
};


render() {
    return (
        <div className="counter">
         <p style={{ color: 'black', fontSize: '20px' }}>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </div>
    );
}
}

export default Count;