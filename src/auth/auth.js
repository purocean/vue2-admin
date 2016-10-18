import Storage from '../utils/storage'

let getAccessToken = function () {
  return Storage.get('auth_access_token')
}

let setAccessToken = function (token) {
  return Storage.set('auth_access_token', token)
}

let getPermissions = function () {
  return Storage.get('auth_permissions', [])
}

let setPermissions = function (permissions) {
  return Storage.set('auth_permissions', permissions)
}

let getRoles = function () {
  return Storage.get('auth_roles', [])
}

let setRoles = function (roles) {
  return Storage.set('auth_roles', roles)
}

let checkRole = function (role) {
  let roles = getRoles()
  return roles.indexOf(role) > -1
}

let isLogin = function () {
  return !!getAccessToken()
}

let checkRoute = function (route) {
  let permissions = getPermissions()
  if (permissions.indexOf(route) > -1) {
    return true
  }

  let pos = 1
  while (pos > 0) {
    pos = route.lastIndexOf('/')
    route = route.substring(0, pos)
    if (permissions.indexOf(route + '/*') > -1) {
      return true
    }
  }

  return false
}

let check = function (item) {
  return checkRoute(item) || checkRole(item)
}

export default {
  getAccessToken,
  setAccessToken,
  getPermissions,
  setPermissions,
  getRoles,
  setRoles,
  checkRoute,
  checkRole,
  isLogin,
  check
}
