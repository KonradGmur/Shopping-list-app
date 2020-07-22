import React, { Component } from 'react';
import './App.css';
// import ListItems from './ListItems'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  state = {
    value: '',
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-list">
            <label>
              <h2>Lista zakupów: </h2>
              <input type="text" placeholder="Wpisz produkt " />
              <input type="number" placeholder="Podaj ilość " />
              <select value={this.state.value} onChange={this.handleChange}>
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