const perfix = 'vue2-admin'

let get = function (key, defaultValue) {
  return typeof window.localStorage[key] === 'undefined' ? defaultValue : window.localStorage[perfix + key]
}

let set = function (key, value) {
  window.localStorage[perfix + key] = value
}

export default {
  set,
  get
}
