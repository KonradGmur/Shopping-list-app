import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: '',
      number: '',
      select: 'vegetables',
      key: '',
    }
  }
  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      currentItem: {
        [e.target.name]: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          number: '',
          select: '',
          key: '',
        }
      })
    }
  }
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }
  setUpdate = (text, key, number, select) => {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
        item.number = number;
        item.select = select;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-list" onSubmit={this.addItem}>
            <label htmlFor="text">
              <h2>Lista zakupów: </h2>
              <input name="text" type="text" placeholder="Wpisz produkt... " value={this.state.currentItem.text} onChange={this.handleChange} />
              <input name="number" type="number" placeholder="Podaj ilość... " value={this.state.currentItem.number} onChange={this.handleChange} />
              <select name="select" value={this.state.currentItem.select} onChange={this.handleChange}>
                <option value="vegetables">warzywa</option>
                <option value="fruits">owoce</option>
                <option value="bread">pieczywo</option>
                <option value="meat">wędlina</option>
                <option value="chemistry">chemia</option>
                <option value="dairy">nabiał</option>
              </select>
            </label>
            <button type="submit">Dodaj</button>
          </form>
          <p>{this.state.items.text} {this.state.items.number} {this.state.items.select}</p>

          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
        </header>
      </div>

    );
  }
}

export default App;