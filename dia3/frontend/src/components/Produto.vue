<template>
  <div>
    <h2>{{ produto.descricao }}</h2>
    <div>
        <span> Código: {{ produto.codigo }} </span>
        <span> Quantidade: {{ produto.quantidade }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produto",
  props: {
    produto: {
      codigo: Number,
      descricao: String,
      quantidade: Number
    }
  }
}
</script>

<style>

</style>