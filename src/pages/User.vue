<template>
  <div>
    <navbar placement="top" type="inverse">
      <a slot="brand" href="/" title="Home" class="navbar-brand">Vue Bootstrap</a>
      <li><a>link1</a></li>
      <li><a>link2</a></li>
      <li><a>link3</a></li>
      <li slot="right"><a>link-right1</a></li>
      <li slot="right"><a>link-right2</a></li>
      <li slot="right"><a>link-right3</a></li>
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

