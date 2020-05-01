import Cookies from 'js-cookie'

const TokenKey = 'token.cwaf'
const AuthKey = 'auth.cwaf'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUserName(userName){
  return Cookies.set('UserName', userName)
}

export function getUserName(){
  return Cookies.get('UserName')
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeAuthCookie() {
  return Cookies.remove(AuthKey)
}

export function setAuthCookie() {
  return Cookies.set(AuthKey, 'isAuthorized')
}

export function getAuthCookie() {
  return Cookies.get(AuthKey)
}
