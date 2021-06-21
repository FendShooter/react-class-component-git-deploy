import React, { Component } from 'react';
import Title from './ui/Title';
import './syles.css';
import SearchField from './components/SearchField';
import Cards from './components/Cards';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      searchState: '',
      resultCount: 0,
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => this.setState({ companies: response }));
  }

  changeHandler = (event) => {
    this.setState({ searchState: event.target.value });
    console.log('hwll');
  };

  render() {
    const searchResult = this.state.companies.filter((item) =>
      item.company.name
        .toLowerCase()
        .includes(this.state.searchState.toLowerCase())
    );
    return (
      <div className='container'>
        <Title>Top {this.state.companies.length} companies</Title>
        <SearchField changeHandler={this.changeHandler} />
        <h3>{this.state.searchState && 'Found : ' + searchResult.length}</h3>
        <Cards companies={searchResult} />
      </div>
    );
  }
}
