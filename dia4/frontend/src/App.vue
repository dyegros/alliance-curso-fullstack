<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <Menu />
      </b-col>
      <b-col cols="10">
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Menu from '@/components/menu/Menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
