import React, { Component } from 'react'
import axios from 'axios'
import ProductImage from './ProductImage'
import './assets/style.min.css'
import OnlyLoggedInComponent from './OnlyLoggedInComponent'
import SearchBar from './SearchBar'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
      searchBar: {}
    }
  }

  getProjects = () => {
    return axios.get('http://localhost:8080' + '/' + 'allProjects')
  }
  componentWillMount() {
    this.getProjects().then((response) => {
      console.log(response.data)
      this.setState({ projects: response.data })
    })
  }

  category = (product) => {
    return <div className="price">Category: {product.name}</div>
  }

  onUpdate = (projects) => {
    this.setState({ projects: projects  })
  }

  render() {
    if (this.state.projects.length > 0) {
      var products = this.state.projects

      return (
        <div className="contain-everything">
        <OnlyLoggedInComponent>
        <SearchBar onUpdate={this.onUpdate} page="projects" label="Search by name"/>
          <main role="main" id="container" className="main-container push">
            <section className="products">
              <div className="content">
                <div className="product-list">
                  {this.state.projects.map(function(product) {
                    let background
                    if (product.background_colour) {
                      background = product.background_colour
                    } else {
                      background = '#d9d9d9'
                    }

                    return (
                      <a
                        className="product-item"
                        href={'/project/' + product.projectid}
                        key={product.projectid}
                      >
                        <div
                          className="product-image"
                          style={{ background: background }}
                        >
                          <ProductImage product={product} products={products} />
                        </div>
                        <div className="overlay">
                          <div
                            className="overlay-background"
                            style={{ background: '#aaaaaa' }}
                          />
                          <div className="overlay-content">
                            <div className="title">{product.title}</div>
                            {product.name}
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </section>
          </main>
        </OnlyLoggedInComponent>
        </div>
      )
    }

    return (
      <main role="main" id="container" className="main-container contain-everything">
        <section className="products">
          <div className="content">
            <p>There are no products</p>
          </div>
        </section>
      </main>
    )
  }
}

export default Projects
