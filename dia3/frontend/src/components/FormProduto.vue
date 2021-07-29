<template>
    <b-form>
        <b-form-group
          id="input-codigo"
          label="Código"
          label-for="codigo"
          description="Código do produto"
        ></b-form-group>
        <b-form-input 
          v-model="produto.codigo"
          type="number"
          required
        ></b-form-input>
        <b-form-group
          id="input-descricao"
          label="Descrição"
          label-for="descricao"
          description="Descrição do produto"
        ></b-form-group>
        <b-form-input 
          id="descricao"
          v-model="produto.descricao"
          type="text"
          required
        ></b-form-input>
        <b-form-group
          id="input-quantidade"
          label="Quantidade"
          label-for="quantidade"
          description="Quantidade disponível"
        ></b-form-group>
        <b-form-input 
          id="quantidade"
          v-model="produto.quantidade"
          type="number"
          required
        ></b-form-input>
    </b-form>
</template>

<script>
export default {
    name: "FormProduto",
    props: {
    produto: {
      codigo: Number,
      descricao: String,
      quantidade: Number
    }
  },
}
</script>

<style>

</style>