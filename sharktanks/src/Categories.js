import React, { Component } from 'react'
import axios from 'axios'
import ProductImage from './ProductImage'
import './assets/style.min.css'
import OnlyLoggedInComponent from './OnlyLoggedInComponent'
import SearchBar from './SearchBar'

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      categories: {}
    }
  }

  getProjects = () => {
    return axios.get('http://localhost:8080' + '/' + 'allProjects')
  }

  componentWillMount() {
    this.getProjects().then((response) => {
      console.log(response.data)

      const projects = response.data;
      projects.map((project) => {
        if (this.state.categories[project.name]) {
          this.state.categories[project.name].push(project)
        } else {
          this.state.categories[project.name] = [project]
        }
      })

      this.setState({ projects: response.data })
    })
  }

  category = (product) => {
    return <div className="price">Category: {product.name}</div>
  }

  onUpdate = (projects) => {
        this.setState({ projects: projects })
  }

  render() {
    var category_array = Object.entries(this.state.categories);

    if (this.state.projects.length > 0) {
      var products = this.state.projects;

      console.log('category_array');
      console.log(category_array);
      var categories = category_array.map(function(category_projects) {
        var category = category_projects[0];
        var projects = category_projects[1];

        return (
        <div>
        <h5>{category}</h5>
        <div className="product-list">
        {projects.map(function(product) {
                      let background;
                      if (product.background_colour) {
                        background = product.background_colour;
                      } else {
                        background = '#d9d9d9';
                      }

                      return <a className="product-item" href={'/project/' + product.projectid} key={product.projectid}>
                          <div className="product-image" style={{ background: background }}>
                            <ProductImage product={product} products={products} />
                          </div>
                          <div className="overlay">
                            <div className="overlay-background" style={{ background: '#aaaaaa' }} />
                            <div className="overlay-content">
                              <div className="title">{product.title}</div>
                              {product.name}
                            </div>
                          </div>
                        </a>;
            })}</div></div>
        );
      });

      return <div>
          <OnlyLoggedInComponent>
            <SearchBar onUpdate={this.onUpdate} page="categories" label="Search by Category" />
            <main role="main" id="container" className="main-container push">
              <section className="products">
                <div className="content">
                    {categories}
                </div>
              </section>
            </main>
          </OnlyLoggedInComponent>
        </div>;
    }

    return (
      <main role="main" id="container" className="main-container push">
        <section className="products">
          <div className="content">
            <p>You do not have any products</p>
          </div>
        </section>
      </main>
    )
  }
}

export default Categories 
