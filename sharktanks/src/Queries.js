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

export function getProjectWithTitle(title) {
  const params = {
    title: title
  }
  return axios.get(SERVER_URL + 'searchByProjects', {params})
}

// Searches for all the projects with a particular statusId. 

export function getprojectwithcategory(category) {
		const params = {
		name: category
	}
  	return axios.get(SERVER_URL + 'searchByCategories', { params })
}

export function getProjectInformation(id) {
  const params = {
    id: id
  }
  return axios.get(SERVER_URL + 'projectInformation', { params })
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

//search by user

export function getProjectWithUser(id, role) {
		const params = {
		id: id,
		role: role
	}
  	return axios.get(SERVER_URL + 'searchByUser', { params })
}

//getkeywords

export function getKeywords() {
	return axios.get(SERVER_URL + 'getKeywords');
}

//search by keyword

// export function searchByKeyword(words) {
// 		const params = {
// 		words: words
// 	}
//   	return axios.get(SERVER_URL + 'searchByKeyword', { params })
// }

//DELETE requests

//delete project

export function deleteProject(id) {
	const params = {
		id: id
	}
	return axios.delete(SERVER_URL + 'deleteProject', { params })
}

//delete

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


export function getAllKeywords() {
	return axios.get(SERVER_URL + 'getKeywords');
}

//updateuserid

export function updateUserId(userId) {
	const params = {
		userId: userId
	}
	return axios.post(SERVER_URL + 'updateUserId', params)
}

//update projectid

export function updateProjectId(projectId) {
	const params = {
		projectId: projectId
	}
	return axios.post(SERVER_URL + 'updateProjectId', params)
}

//update donation id

export function updateDonationId(donationId) {
	const params = {
		donationId: donationId
	}
	return axios.post(SERVER_URL + 'updateDonationId', params)
}





