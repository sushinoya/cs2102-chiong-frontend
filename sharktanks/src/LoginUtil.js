export function localLogIn(userJSON) {
  localStorage.setItem('logged-in-user', JSON.stringify(userJSON))
  window.location.reload()
}

export function localLogOut() {
  localStorage.removeItem('logged-in-user')
  window.location.reload()
}

export function loggedInUser() {
  return JSON.parse(localStorage.getItem('logged-in-user'))
}
