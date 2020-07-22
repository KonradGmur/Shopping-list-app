import React, { Component } from 'react';
import './App.css';
// import ListItems from './ListItems'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: '',
      key: '',
      number: '',
      select: '',
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      }
    })
  }
  handleNumber = (e) => {
    this.setState({
      currentItem: {
        number: e.target.value,
        key: Date.now(),
      }
    })
  }
  handleChange = (e) => {
    this.setState({
      currentItem: {
        select: e.target.value,
      }
    });
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);

  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-list" onSubmit={this.addItem}>
            <label htmlFor="text">
              <h2>Lista zakupów: </h2>
              <input type="text" placeholder="Wpisz produkt " value={this.state.currentItem.text} onChange={this.handleInput} />
              <input type="number" placeholder="Podaj ilość " value={this.state.currentItem.number} onChange={this.handleNumber} />
              <select value={this.state.currentItem.select} onChange={this.handleChange}>
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
        </header>
      </div>

    );
  }
}

export default App;