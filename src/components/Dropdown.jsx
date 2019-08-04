import React, { Component } from 'react'
// Bootstrap stuff
import Form from 'react-bootstrap/Form';

class Dropdown extends Component {
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
      <Form.Control as="select" onChange={this.handleChange}>
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
        <option value="opt3">Option 3</option>
        <option value="opt4">Option 4</option>
        <option value="opt5">Option 5</option>
      </Form.Control>
    )
  }
}

export default Dropdown
