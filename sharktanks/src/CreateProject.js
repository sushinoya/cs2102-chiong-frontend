import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import formStyles from './FormStyles.module.scss'
import { loggedInUser } from './LoginUtil';
import { getAllKeywords, getAllStatuses, getAllCategories } from './Queries';
import Checkbox from 'material-ui/Checkbox';
import styles from './CreateProject.module.scss'
import OnlyLoggedInComponent from './OnlyLoggedInComponent';
class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
      status: null,
      userID: null,
      category: [],
      keywords: [],
      categoryID: null,
      statusID: null,
      possibleStatuses: [],
      possibleCategories: [],
      allKeywords: [],
      selectedKeywords: {},
      selectedTrueKeywords: []
    };
  }

  componentWillMount() {
    if (loggedInUser()) {
      this.setState({ userID: loggedInUser().userid })
    }

    getAllCategories().then((data) => {
      this.setState({ allCategoriesHash: data.data });
      console.log(this.state.allCategoriesHash);
      const categories = data.data.map((x) => {
        return x.name;
      });
      this.setState({ possibleCategories: categories });
    });

    getAllStatuses().then((data) => {
      this.setState({ allStatusHash: data.data });
      const statuses = data.data.map((x) => {
        return x.statusword;
      });
      console.log(data.data);
      this.setState({ possibleStatuses: statuses });
    });

    getAllStatuses().then((data) => {
      this.setState({ allStatusHash: data.data });
      const statuses = data.data.map((x) => {
        return x.statusword;
      });
      console.log(data.data);
      this.setState({ possibleStatuses: statuses });
    });

    getAllKeywords().then((data) => {
      console.log("keywords")
      console.log(data.data)
      // const statuses = data.data.map((x) => {
      //   return x.statusword;
      // });
      // console.log(data.data);

      // key
      this.setState({ allKeywords: data.data });
    });
  }

  getIDForStatus = (statusString) => {
    var result = this.state.allStatusHash.filter((obj) => {
      return obj.statusword === statusString;
    });

    return result[0].statusid;
  };

  getIDForCategory = (categoryString) => {
    var result = this.state.allCategoriesHash.filter((obj) => {
      return obj.name === categoryString;
    });

    return result[0].categoryid;
  };

  handleClick = (event) => {
    event.preventDefault()
    var apiBaseUrl = 'http://localhost:8080/';
    console.log(loggedInUser());
    
    console.log(this.state.selectedKeywords)
    var payload = {
      title: this.state.title,
      description: this.state.description,
      statusID: this.getIDForStatus(this.state.status),
      userID: this.state.userID,
      categoryID: this.getIDForCategory(this.state.category),
      keywords: this.state.selectedTrueKeywords,
    };

    console.log(payload);
    axios.post(apiBaseUrl +  'createProject', { payload }).then((data) => {
      if (data.data.code == 200) {
        alert("Successfully created project");
      }
    })
    // axios
    //   .post(apiBaseUrl + 'createProject', payload)
    //   .then(function (response) {
    //     console.log(response)
    //     if (response.data.code == 200) {
    //       console.log("project created");
    //       alert("Project " + this.state.title + " created successfully!");
    //     } else {
    //       alert("Information entered is invalid. Please check before proceeding");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //     alert("Information entered is invalid. Please check before proceeding");
    //   })
  };

  handleChangeCategory = (event, index, value) => {
    this.setState({ categoryID: this.getIDForCategory(value) });
    this.setState({ category: value });
  };
  handleChangeStatus = (event, index, value) => {
    this.setState({ statusID: this.getIDForStatus(value) });
    this.setState({ status: value });
  };

  updateCheck = (label) => {
    if (this.state.selectedKeywords[label]) {
      this.state.selectedKeywords[label] = false;
    } else {
      this.state.selectedKeywords[label] = true;
    }
    var newObj = Object.keys(this.state.selectedKeywords).filter(x  => this.state.selectedKeywords[x]);
    console.log(newObj);
    this.setState({ selectedTrueKeywords: newObj })
    console.log(label)
  }

  render() {
    const categoryMenuItems = this.state.possibleCategories.map((x) => {
      return <MenuItem value={x} primaryText={x} />;
    });

    const statusMenuItems = this.state.possibleStatuses.map((x) => {
      return <MenuItem value={x} primaryText={x} />;
    });

    const keywordCheckboxes = this.state.allKeywords.map(
      (x) => {
        console.log(x);
        return (
          <Checkbox
            className={styles.flexyItem}
            label={x.words}
            onCheck={() => this.updateCheck(x.words)}
          />
        );
      },
    );

    return <OnlyLoggedInComponent>
        <div className={formStyles.flexCenter}>
          <TextField hintText="Enter Project Title" floatingLabelText="Title" onChange={(event, newValue) => this.setState(
                { title: newValue },
              )} />
          <br />
          <TextField hintText="Enter Project Description" floatingLabelText="Project Description" onChange={(event, newValue) => this.setState(
                { description: newValue },
              )} />
          <br />

          <SelectField hintText="Select Project Category" floatingLabelText="Project Category" value={this.state.category} onChange={this.handleChangeCategory}>
            {categoryMenuItems}
          </SelectField>

          <br />

          <SelectField hintText="Select Project Status" floatingLabelText="Project Status" value={this.state.status} onChange={this.handleChangeStatus}>
            {statusMenuItems}
          </SelectField>

          <br />
          <div className={styles.flexy}>
            {keywordCheckboxes}
          </div>

          <br />
          <RaisedButton className={styles.submitButton} label="Create Project" primary={true} onClick={(event) => this.handleClick(event)} />
        </div>
      </OnlyLoggedInComponent>;
  }
}


export default CreateProject
