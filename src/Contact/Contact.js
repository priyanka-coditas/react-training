import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  onSubmit = () => {
    this.props.history.push('/')
  }
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <form>
      <input placeholder="name" type="name" />
      <input placeholder="email" type="email" />
      <button onClick={this.onSubmit}>Submit</button>
    </form>
    );
  }
}

export default Contact;