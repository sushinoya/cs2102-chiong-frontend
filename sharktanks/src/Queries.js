import axios from 'axios'
const SERVER_URL = 'http://localhost:8080/'

//GET requests

export function getProjects() {
  return axios.get(SERVER_URL + 'allProjects')
}

//search by project id
export function getProjectWithId(id) { //searchByProjects
	const payload = {
		id: id
	}
  	return axios.get(SERVER_URL + 'searchByProjects', payload)
}

// Gets the  total funding for a project with an id of projectId
export function getFunding(id) {
	const payload = {
		id: id
	}
  	return axios.get(SERVER_URL + 'getFunding', payload)
}
// Searches for all the projects with a particular statusId. 
export function getProjectWithStatus(id) {
	const payload = {
		id: id
	}
  	return axios.get(SERVER_URL + 'SearchByStatus', payload)
}

// Searches for all the projects with a particular categoryId.
export function getProjectWithCategory(id) {
	const payload = {
		id: id
	}
  	return axios.get(SERVER_URL + 'SearchByCategories', payload)
}

export function getProjectWithCategory(category) {
  return axios.get(SERVER_URL + '/' + 'searchByCategories', {
    params : {
      categoryName : category 
    }
  });
}

export function getProjectWithStatus(status) {
  return axios.get(SERVER_URL + '/' + 'searchByStatus', {
    params : {
      statusName : status 
    }
  });
}

  export function getProjectFunding(project) {
    return axios.get(SERVER_URL + '/' + 'getFunding/', {
      params : {
        projectId : project
      }
    });
  }
// Gives all the projects associated with a particular user with a particular role.

//POST requests

//create user

//create project

//give donation

//login
