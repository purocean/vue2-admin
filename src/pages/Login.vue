<template>
  <div>
    <navbar placement="top" type="inverse">
      <a slot="brand" href="/" title="Home" class="navbar-brand">Vue Bootstrap</a>
      <li slot="right"><router-link to="login">Login</router-link></li>
    </navbar>
  </div>
</template>

<script>
import { Navbar } from 'vue2-bootstrap'
console.log(Navbar)
export default {
  components: {
    Navbar
  },
  computed: {
  },
  created () {
    // this.fetchData()
  },
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  }
}

</script>

<style>
</style>
