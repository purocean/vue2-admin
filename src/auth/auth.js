import Storage from '../utils/storage'
import Urls from '../const/urls'

let getAccessToken = function () {
  return Storage.get('auth_access_token')
}

let setAccessToken = function (token) {
  return Storage.set('auth_access_token', token)
}

let isLogin = function () {
  return !!getAccessToken()
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

let checkPermission = function (permission) {
  let permissions = getPermissions()
  if (permissions.indexOf(permission) > -1) {
    return true
  }

  let pos = permission.lastIndexOf('/')
  while (pos > -1) {
    pos = permission.lastIndexOf('/')
    permission = permission.substring(0, pos)
    if (permissions.indexOf(permission + '/*') > -1) {
      return true
    }
  }

  return false
}

/**
 * Check from server if callback provided.
 */
let can = function (item, callback) {
  if (callback) {
    window.fetch(Urls.userItems, {headers: {Authorization: 'Bearer ' + getAccessToken()}})
    .then(response => {
      if (response.ok) {
        response.json().then(data => {
          setRoles(Object.keys(data.roles))
          setPermissions(Object.keys(data.permissions))
          callback(checkRole(item) || checkPermission(item))
        })
      } else {
        console.log('Network response was not ok.')
      }
    })
    .catch(error => {
      console.log('There has been a problem with your fetch operation: ' + error.message)
    })
  } else {
    return checkRole(item) || checkPermission(item)
  }
}

export default {
  getAccessToken,
  setAccessToken,
  getPermissions,
  setPermissions,
  getRoles,
  setRoles,
  checkPermission,
  checkRole,
  isLogin,
  can
}
