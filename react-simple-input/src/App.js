import React, { Component } from 'react';
import './App.css';
import Output from './output/Output';
import Input from './input/Input';
import Validation from './validation/Validation';
import Char from './char/Char';

class App extends Component {

  state = {

    name: ""

  }

  onChangeHandler = event => {
    this.setState({name: event.target.value});
  }

  deleteHandler = charIndex => {
    const text = this.state.name.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    this.setState({
      name: updatedText
    });
  }

  render() {

    const charList = this.state.name.split('').map((char, index) => {

     return <Char characrter={char} key={index} click={() =>this.deleteHandler(index)} />

    });

    return (
      <div className="App">
        
        <Input Uname={this.state.name} NamneChange={this.onChangeHandler} />
        <Output Uname={this.state.name}/>
        <Validation inputLenght={this.state.name.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
