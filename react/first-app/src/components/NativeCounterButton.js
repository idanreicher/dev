import React, { Component } from 'react';


class NativeCounterButton extends Component{

  constructor(props){
    super(props);

    this.clickHandle = this.clickHandle.bind(this);
    this.state = {
      counter: 0,
    };
  }
  
  clickHandle(){

    this.setState({
      
        counter : this.state.counter + 1 
    });
      
  }

  render() {

    const { counter } = this.state;

    return (
      <div>
            <p>counter</p>
            <button onClick={this.clickHandle}>{counter}</button>
      </div>      
    );
  }
}

export default NativeCounterButton;
