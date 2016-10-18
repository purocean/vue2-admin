<template>
  <div>
    <navbar type="inverse">
      <a slot="brand" href="/" title="Home" class="navbar-brand">Vue Bootstrap</a>
      <li slot="right"><router-link to="login">Login</router-link></li>
    </navbar>

    <form role="form" class="login" @submit="login">
      <div class="form-group">
        <label for="user">User</label>
        <input v-model="username" type="text" class="form-control" id="user" placeholder="User">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="form-group">
        <input v-model="rememberMe" type="checkbox" id="rememberMe">
        <label for="rememberMe">Rremember me</label>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <alert ref="alert" placement="top" type="danger" width="30em">{{ msg }}</alert>
  </div>
</template>

<script>
import { Navbar, Alert } from 'vue2-bootstrap'
import Urls from '../const/urls'
import Auth from '../auth/auth'

export default {
  components: {
    Navbar,
    Alert
  },
  computed: {
  },
  created () {
    Auth.setAccessToken('')
  },
  data () {
    return {
      username: '',
      password: '',
      rememberMe: 'off',
      msg: '',
      showAlert: false
    }
  },
  methods: {
    login (e) {
      e.preventDefault()

      this.$http.post(
        Urls.login,
        {
          username: this.username,
          password: this.password,
          rememberMe: this.rememberMe ? 'on' : 'off'
        },
        {
          emulateJSON: true
        }
      ).then((response) => {
        if (response.body.status === 'ok') {
          Auth.setAccessToken(response.body.access_token)
          this.$router.push({name: 'home'})
        } else {
          this.msg = Object.values(response.body.errors).join()
          this.$refs.alert.open()
        }
        console.log(response)
      }, (response) => {
        this.msg = 'network error!'
        this.$refs.alert.open()
      })
    }
  },
  watch: {
  }
}

</script>

<style scoped>
  .login {
    width: 30%;
    margin: 0 auto;
  }
</style>

valu
