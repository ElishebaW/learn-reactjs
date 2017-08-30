import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

//challenge 1
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, World</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

//challenge 2

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    return('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

      <br></br>
        <h1> {this.state.value}</h1>
      </form>
    );
  }
}

//challenge 3

class FizzBuzz extends Component{
  constructor(props) {
    super(props);
    this.prevState = {value: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState((prevState) => {
  return {counter: prevState.quantity + 1};
});
  }

  handleSubmit(event) {
    this.setState((prevState) => {
  return {counter: prevState.quantity - 1};
});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="button" value="Increment" onClick={this.handleChange} />
        </label>
        <label>
          <input type="button" value="Decrement" onClick={this.handleSubmit} />
        </label>

      <h1>{this.counter}</h1>
      </form>
    );
  }

}
ReactDOM.render(
  <FizzBuzz/>,
  document.getElementById('root')
);

export default App;
