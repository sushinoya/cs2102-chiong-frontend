import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
// import Project from "./Project";
import axios from 'axios'
import SideDrawer from './Drawer';
import ProductImage from "./ProductImage";
import "./assets/style.min.css";


class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  getProjects = () => {
    return axios.get('http://localhost:8080/allProjects');
  }

  componentWillMount() {
    this.getProjects().then((response) => {
      console.log(response.data)
      this.setState({ projects: response.data });
    });
  }

  category = (product) => {
    return <div className="price">Category: {product.name}</div>;
  };

  render() {
    if (this.state.projects.length > 0) {
      var products = this.state.projects;

      return (
        <main role="main" id="container" className="main-container push">
          <section className="products">
            <div className="content">
              <div className="product-list">
                {this.state.projects.map(function (product) {
                  let background;
                  if (product.background_colour) {
                    background = product.background_colour;
                  } else {
                    background = '#d9d9d9';
                  }

                  return (
                    <a
                      className="product-item"
                      href={'/project/' + product.projectid}
                      key={product.projectid}>
                      <div
                        className="product-image"
                        style={{ background: background }}>
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
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      );
    }

    return (
      <main role="main" id="container" className="main-container push">
        <section className="products">
          <div className="content">
            <p>You do not have any products</p>
          </div>
        </section>
      </main>
    );
  };

}


export default Projects;