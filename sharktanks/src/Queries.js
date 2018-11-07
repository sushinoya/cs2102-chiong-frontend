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

export function getAllStatuses() {
	return axios.get(SERVER_URL + 'getAllStatus');
}

export function getAllCategories() {
	return axios.get(SERVER_URL + 'getAllCategories');
}

//POST requests

//create user

// router.post('/createUser', function(req, res, next) {
// 	indexController.createUser(req.body.name, 
// 								req.body.emailAddress, 
// 								req.body.role, 
// 								req.body.password).then(res.send('OK')).catch((err)  => {
// 									console.log(err);
// 									res.send('NOT OK');
// 								});
// });

export function createUser(name,emailAddress,role,password) {
	const params = {
		name: name,
		emailAddress: emailAddress,
		role: role,
		password: password
	}
	return axios.post(SERVER_URL + 'createUser', params)
}

//create project

/*
router.post('/createProject', function(req, res, next) {
	// TODO Need to generate project id.
	indexController.createProject(req.body.title,
									req.body.duration,
									req.body.description,
									req.body.startDate,
									req.body.statusID,
									req.body.userID,
									req.body.userRole,
									req.body.keyWords,
									req.body.categoryID)
									.then("OK")
									.catch((err) => {
										console.log(err); // For debugging purposes only.
										res.send('NOT OK');
									});
});
*/

export function createProject(title,duration,description,startDate,statusID,userID,userRole,keyWords,categoryID) {
	const params = {
		title: title,
		duration: duration,
		description: description,
		startDate: startDate,
		statusID: statusID,
		userID:userID,
		userRole:userRole,
		keyWords:keyWords,
		categoryID:categoryID
	}
	return axios.post(SERVER_URL + 'createProject', params)
}

//give donation

export function giveDonation(projectID, userID,amount) {
	const params = {
		projectID: projectID,
		userID: userID,
		amount: amount,
	}
	return axios.post(SERVER_URL + 'giveDonation', params)
}




