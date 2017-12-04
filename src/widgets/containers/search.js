import React, { Component } from 'react';
import SearchLayout from '../components/search-layout';
import Input from '../components/input';
import { connect } from 'react-redux';

class Search extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const value = this.inputSearch.value;
    // console.log(value);
    this.props.dispatch({
      type: 'SEARCH_ENTITIES',
      payload: {
        query: value
      }
    })
  }
  // handleInputChange = (event) => {
  //   this.setState({
  //     inputValue: event.target.value
  //   }, () => {
  //     console.log(this.state.inputValue)
  //   });
  // }
  setInputRef = (element) => {
    this.inputSearch = element;
  }
  render() {
    return (
      <SearchLayout handleSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleInputChange}
          placeholder="Busca tu video favorito"
          setRef={this.setInputRef}
        />
      </SearchLayout>
    )
  }
}

export default connect(null)(Search);
