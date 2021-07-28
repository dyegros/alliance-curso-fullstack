<template>
  <ul id="listaProdutos">
      <li v-for="produto in produtos" v-bind:key="produto.codigo">
          <Produto v-bind:produto="produto" />
      </li>
  </ul>
</template>

<script>
import Produto from './Produto.vue'
import axios from 'axios'

export default {
    name: 'ListaProdutos',
    data: function() {
        return {
            produtos: []
        }
    },
    components: {
        Produto
    },
    async created() {
      var response = await axios.get('http://localhost:3000/produtos')
      this.produtos = response.data
    }
}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

</style>