import React, { Component } from 'react';
// Bootstrap stuff
import Form from 'react-bootstrap/Form';

class Search extends Component {
  constructor() {
    super();
    // Initial state
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  // Change state on every change in input
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <Form.Control type="text" placeholder="Search" onChange={this.handleChange} />
    )
  }
}

export default Search;
