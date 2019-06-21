import React, { Component, } from 'react';
import List from './components/List';
import ListForm from './components/ListForm';

class App extends Component {
  state = {
    lists: [
      { id: 1, name: "Apple", price: "1", complete: true, },
      { id: 2, name: "Banana", price: "2", complete: false, },
      { id: 3, name: "Orange", price: "3", complete: false, },
      { id: 4, name: "Grapes", price: "4", complete: false, }
    ]
  };

  renderLists = () => {
    const { lists, } = this.state;
      return (
        <list name="Grocery List" items={lists} />
      );
  };

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

    render () {
      const { lists } = this.state;

      return (
        <div>
          <ListForm />
        <List name="Grocery List" items={lists} />
          <ul>
            { this.renderLists() }
          </ ul>
        </div>
      );
    }
  }

export default App;
