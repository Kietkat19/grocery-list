import React from 'react';

class ListFrom extends React.Component {
  state = { name: '', price: '' }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  render() {
      const { name, price } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        value={name}
        name="name"
        onChange={this.handleChange}
        required 
        placeholder="Add An Name to item" />
        <input 
        value={price}
        name="price"
        onChange={this.handleChange}
        required 
        placeholder="Add An price" />
      </form>
    )
  }
}

export default ListFrom;