import axios from 'axios'
const SERVER_URL = 'http://localhost:8080/'

export function getProjects() {
  return axios.get(SERVER_URL + 'allProjects')
}

export function getProjectWithId(id) {
	const payload = {
		id: id
	}
  	return axios.get(SERVER_URL + 'searchByProjects', payload)
}

// Lots of get and post functions to implement