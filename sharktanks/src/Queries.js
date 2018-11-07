import axios from 'axios'
const SERVER_URL = 'http://localhost:8080'

export function getProjects() {
  return axios.get(SERVER_URL + '/' + 'allProjects')
}

export function getProjectWithId(id) {
  // Implement
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
