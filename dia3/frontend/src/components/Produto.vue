<template>
  <div id="card-produto">
    <h2>{{ produto.descricao }}</h2>
    <div>
        <span> Código: {{ produto.codigo }} </span>
        <span id="lbl-quantidade"> Quantidade: {{ produto.quantidade }} </span>
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

<style scoped>

div#card-produto {
    border: 1px solid green;
    margin: 10px;
}

span {
    margin-right: 10px;
}

span#lbl-quantidade {
    color: indigo;
}
</style>