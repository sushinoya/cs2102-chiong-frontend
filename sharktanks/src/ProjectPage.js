import React, { Component } from 'react'
import styles from './Project.module.scss'
import ProductImage from './ProductImage'
import { redirect } from 'react-router-dom'
import './assets/style.min.css'
import { getProjectFunding, getProjectInformation, getProjectKeywords } from './Queries.js'
import OnlyLoggedInComponent from './OnlyLoggedInComponent'

const axios = require('axios')

// TODO: Get the name of the user who owns this project from the backend
// Set the investValue to be project.sum
//

class ProjectPage extends Component {
  constructor(props) {
    super(props)
    this.projectID = props.match.params.projectID
    this.state = {
      project: null,
      investValue: 0,
      productValue: 0,
      data: []
    }
  }

  componentWillMount() {
    getProjectFunding(this.projectID).then((data) => {
      this.setState({productValue: data.data[0].sum});
    })
    this.getProjects().then((data) => {
      data.data.map((project) => {
        if (project.projectid === this.projectID) {
          this.setState({ project: project })
        }
      })
    })

    getProjectInformation(this.projectID).then((data) => {
      console.log(data);
      this.setState({data: data.data[0]});
    }) 

    getProjectKeywords(this.projectID).then(data => {
      console.log(data);
      var newProduct = this.state.project;
      newProduct.words = data.data;
      this.setState({ project: newProduct})
    })

  }

  getProjects = () => {
    return axios.get('http://localhost:8080/allProjects')
  }

  render() {
    var product = this.state.project
    console.log('stop')
    console.log(product)
    if (product == null) {
      return <div />
    }

    // Figure out how to update productValue after investment occurs.
    var persistAmount = () => {
      axios
        .post('http://localhost:8080/giveDonation', {
          projectID: this.projectID,
          userID: '1',
          amount: this.state.investValue,
        })
        .then((res) => {
          console.log(res.data)
        })
    }

    const changeAmount = (sum) => {
      var newValue = parseInt(this.state.investValue) + parseInt(sum, 10)
      this.setState({ investValue: newValue })
    }

    var background = '#fff'

    const category = (product) => {
      return <div className="manufacturer">Category: {product.categoryID}</div>
    }

    const tags = (product) => {
      return (
        <div>
          {product.words.map(function(elem, test) {
            return (
              <div style={{ display: 'inline' }} className="tag">
                {elem}{' '}
              </div>
            )
          })}
        </div>
      )
    }
    return (
      <OnlyLoggedInComponent>
        <main role="main" id="container" className="main-container push">
          <section className="product">
            <div className="content">
              <div className="product-listing">
                <div className="product-image">
                  <ProductImage product={product} background={background} />
                </div>
                <div className="product-description">
                  <h2>{product.title}</h2>
                  <p className="manufacturer">
                    <span className="hide-content">Created </span>
                    By <span className="word-mark">{product.userID}</span>
                  </p>
                  {category(product)}
                  {tags(product)}
                  <div className="description">
                    <p className="hide-content">Project details:</p>
                    <p>{product.description}</p>
                  </div>
                  <form className="product" noValidate>
                    <div className="quantity-input">
                      <p className="hide-content">Project quantity.</p>
                      <p className="hide-content">
                        Change the invest amount by using the input box.
                      </p>
                      <input
                        className="quantity"
                        name="number"
                        type="number"
                        min="1`"
                        max="20000000"
                        value={this.state.investValue}
                        size="2"
                        onChange={(event) => {
                          changeAmount(event.target.value)
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="submit"
                      onClick={(e) => {
                        persistAmount()
                        e.preventDefault()
                      }}
                    >
                      Invest
                    </button>
                  </form>
                </div>
              </div>
              <div className="product-info">
                <div className="product-details">
                  <div className="header">
                    <h3>Other Project details</h3>
                  </div>

                  <div className="details-body">
                    <div className="row">
                      <div className="label"> Status: </div>
                      <div className="value">{this.state.data.statusword}</div>
                    </div>

                    <div className="row">
                      <div className="label"> {this.state.data.role}: </div>
                      <div className="value">{this.state.data.name}</div>
                    </div>

                    <div className="row">
                      <div className="label"> Money Raised </div>
                      <div className="value">{this.state.productValue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </OnlyLoggedInComponent>
    )
  }
}

export default ProjectPage
