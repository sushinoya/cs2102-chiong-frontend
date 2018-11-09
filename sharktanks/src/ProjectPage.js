import React, { Component } from 'react'
import styles from './Project.module.scss'
import ProductImage from './ProductImage'
import { redirect } from 'react-router-dom'
import './assets/style.min.css'
import { getProjectKeywords, getProjectWithId, getProjectFunding, getProjectInformation } from './Queries.js';
import OnlyLoggedInComponent from './OnlyLoggedInComponent'
import { pink100 } from 'material-ui/styles/colors';
import { loggedInUser } from './LoginUtil';
import {Link} from 'react-router-dom';


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
      console.log("funding data")
      console.log(data)
      if (data.data.length != 0) {
        this.setState({ productValue: data.data[0].sum });
      }
    })

    // this.getProjects().then((data) => {
    //   data.data.map((project) => {
    //     if (project.projectid === this.projectID) {
    //       this.setState({ project: project })
    //     }
    //   })
    // })

    getProjectWithId(this.projectID).then((data) => {
      console.log("data");
      console.log(data);
      this.setState({ project: data.data[0] });
    });

    getProjectInformation(this.projectID).then((data) => {
      console.log(data);
      this.setState({ data: data.data[0] });
    })

    getProjectKeywords(this.projectID).then(data => {
      console.log(data);
      // var newProduct = this.state.project;
      // newProduct.words = data.data;
      console.log("set words")
      this.setState({ words: data.data })
    })
  }

  getProjects = () => {
    return axios.get('http://localhost:8080/allProjects')
  }

  render() {
    var product = this.state.project
    var words = this.state.words
    var info = this.state.data;

    console.log('stop')
    console.log(product)
    if (product == null || words == null || info == null) {
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
          getProjectFunding(this.projectID).then((data) => {
            if (data.data.length != 0) {
              this.setState({ productValue: data.data[0].sum });
            }
            this.setState({ investValue: 0 })
          })
        })
    }

    const changeAmount = (sum) => {
      // var newValue = parseInt(this.state.investValue) + parseInt(sum, 10)
      this.setState({ investValue: parseInt(sum) });
    }

    var background = '#fff'

    const category = (product) => {
      return <div className="manufacturer">Category: {product.name}</div>
    }

    const tagStyle = {
      display: 'inline',
      backgroundColor: '#f0f0f0',
      marginRight: '10px',
      padding: '5px',
      color: '#50505b',
      textAlign: 'center'
    }

    const tags = (k) => {
      return <div>
        {words.map(function (elem) {
          return <div style={tagStyle} className="tag">
            {elem}{' '}
          </div>;
        })}
      </div>;
    };

    var investForm = () => {

      if (loggedInUser() && loggedInUser().role != 'Investor') {
        return <p>
          Log in as an <Link to='/register'><b>Investor</b></Link> to invest in this project
          </p>;
      }


      return (
        <form className="product" noValidate>
          <div className="quantity-input">
            <p className="hide-content">Project quantity.</p>
            <p className="hide-content">
              Change the invest amount by using the input box.
                      </p>

            <input className="quantity" name="number" type="number" min="0" max="200000" value={this.state.investValue} size="2" onChange={(event) => {
              if (event.target.value <= 200000 && event.target.value >= 0) {
                changeAmount(event.target.value);
              }
            }} />
          </div>
          <button type="submit" className="submit" onClick={(e) => {
            persistAmount();
            e.preventDefault();
          }}>
            Invest
                    </button>
        </form>
      )
    }

    return <OnlyLoggedInComponent>
      <main role="main" id="container" className="main-container push contain-everything">
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
                  By <span className="word-mark">{this.state.data.name}</span>
                </p>
                {category(product)}
                {tags(this.state.words)}
                <div className="description">
                  <p className="hide-content">Project details:</p>
                  <p>{product.description}</p>
                </div>
                {investForm()}
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
    </OnlyLoggedInComponent>;
  }
}

export default ProjectPage
