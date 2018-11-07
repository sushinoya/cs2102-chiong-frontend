import axios from 'axios'
const SERVER_URL = 'http://localhost:8080/'

//GET requests

export function getProjects() {
  return axios.get(SERVER_URL + 'allProjects')
}

//search by project id
export function getProjectWithId(id) { //searchByProjects
	const params = {
		id: id
	}
  	return axios.get(SERVER_URL + 'searchByProject', { params })
}

// Searches for all the projects with a particular statusId. 

export function getProjectWithCategory(id) {
		const params = {
		id: id
	}
  	return axios.get(SERVER_URL + 'searchByCategory', { params })
}

export function getProjectWithStatus(id) {
		const params = {
		id: id
	}
  	return axios.get(SERVER_URL + 'searchByStatus', { params })
}

// Gets the  total funding for a project with an id of projectId
export function getProjectFunding(id) {
	const params = {
		id: id
	}
  	return axios.get(SERVER_URL + 'getFunding', { params })
}


// Gives all the projects associated with a particular user with a particular role.

//POST requests

//create user

//create project

//give donation

//login

export function getAllStatuses() {
	return axios.get(SERVER_URL + 'getAllStatus');
}

export function getAllCategories() {
	return axios.get(SERVER_URL + 'getAllCategories');
}

export function getAllKeywords() {
	return axios.get(SERVER_URL + 'getKeywords');
}
