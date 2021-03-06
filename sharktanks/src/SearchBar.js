import React, { Component } from 'react'
import axios from 'axios';
import { getProjectWithTitle, getprojectwithcategory } from './Queries'
import './assets/style.min.css';
import styles from './SearchBar.module.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchString: "",
          page: this.props.page
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      componentDidMount() {
        this.refs.search.focus();
      }
     
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.page.valueOf() == "projects") {
          getProjectWithTitle(this.state.searchString).then(data => {
           console.log(data); 
           this.props.onUpdate(data.data)
          });
        } else if (this.state.page.valueOf() == "categories") {
          console.log("categories query is being made");
          getprojectwithcategory(this.state.searchString).then(data => {
            console.log(data);
            this.props.onUpdate(data.data);
          })
        }
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
        console.log("asshole");
        console.log(this.state.searchString);
        return (
            <div className={styles.flexContainer}>
              <form className={styles.flexContainer} onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.searchString}
                ref="search"
                onChange={this.handleChange}
                placeholder={this.props.label}
                />
                <button className="submit" type="submit">Submit</button>
              </form>
            </div>
        );
    }
}

export default SearchBar;