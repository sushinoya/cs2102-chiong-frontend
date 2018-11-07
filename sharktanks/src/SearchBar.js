import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchString: "",
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      componentDidMount() {
        this.refs.search.focus();
      }
    
      handleChange() {
        this.setState({
          searchString: this.refs.search.value
        });
      }
        render() {
        let _users = this.state.users;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
        }

        return (
            <div>
            <div>
                <input
                type="text"
                value={this.state.searchString}
                ref="search"
                onChange={this.handleChange}
                placeholder="Type here"
                />
            </div>
            </div>
        );
    }
}

export default SearchBar;