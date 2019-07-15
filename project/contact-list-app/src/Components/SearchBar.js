import React from 'react';

class SearchBar extends React.Component {

  state = {
    searchInput: ""
  }

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    })
    this.props.renderSearchCards(this.state.searchInput)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder=" Search Your Contacts" value={this.state.searchInput} onChange={this.handleSearch}></input>
      </div>
    )
  }
}

export default SearchBar;
