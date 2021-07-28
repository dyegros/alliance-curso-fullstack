<template>
  <b-card id="card-produto" class="text-center"
    :title="produto.descricao"
    :sub-title="produto.codigo"
    >
    <b-card-text class="bg-secondary text-light">Quantidade {{produto.quantidade}}</b-card-text>
    <b-icon-trash class="float-right"></b-icon-trash>
  </b-card>
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

<style scoped>
.card {
    margin-bottom: 10px;
    max-width: 320px;
}

.card-title {
  text-align: left;
}

.card-subtitle {
  text-align: left;
}
</style>