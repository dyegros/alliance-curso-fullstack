<template>
  <ul id="listaProdutos">
      <li v-for="produto in produtos" v-bind:key="produto.codigo">
          {{ produto.codigo + " - " + produto.descricao }}
      </li>
  </ul>
</template>

<script>
export default {
    name: 'ListaProdutos',
    data: function() {
        return {
            produtos: [
                {"codigo":1,"descricao":"teste 1","quantidade":3},
                {"codigo":2,"descricao":"teste 2","quantidade":7},
                {"codigo":5,"descricao":"teste 5","quantidade":19},
                {"codigo":3,"descricao":"nova descricao","quantidade":9}
            ]
        }
    }
}
</script>

<style>

</style>