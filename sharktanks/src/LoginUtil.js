export function localLogIn(userJSON) {
  localStorage.setItem('logged-in-user', JSON.stringify(userJSON))
  alert('Login successful! Welcome ' + userJSON.name + ' :)');
  window.location.reload()
}

export function localLogOut() {
  localStorage.removeItem('logged-in-user')
  alert('Logged out successfully!');
  window.location.reload()
}

export function loggedInUser() {
  return JSON.parse(localStorage.getItem('logged-in-user'))
}
