<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Produtos</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button v-b-modal.modal-insert>
          <b-icon-plus></b-icon-plus>
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-modal title="Incluir produto" id="modal-insert" v-on:ok="adicionarProduto()">
      <b-form>
        <b-form-group
          id="input-codigo"
          label="Código"
          label-for="codigo"
          description="Código do produto"
        ></b-form-group>
        <b-form-input 
          v-model="newProduto.codigo"
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
          v-model="newProduto.descricao"
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
          v-model="newProduto.quantidade"
          type="number"
          required
        ></b-form-input>
      </b-form>
    </b-modal>
    <ul id="listaProdutos">
        <li v-for="produto, index in produtos" v-bind:key="produto.codigo">
            <Produto v-bind:produto="produto" v-on:removed="removerProduto(index)"/>
        </li>
    </ul>
  </div>
</template>

<script>
import Produto from './Produto.vue'
import axios from 'axios'

export default {
    name: 'ListaProdutos',
    data: function() {
        return {
            produtos: [],
            newProduto: {
              codigo: '',
              descricao: '',
              quantidade: ''
            }
        }
    },
    components: {
        Produto
    },
    methods: {
      removerProduto: function(index) {
        this.produtos.splice(index, 1)
      },
      adicionarProduto: async function() {
        try {
          var result = await axios.post("http://localhost:3000/produtos", this.newProduto)
          this.produtos.push(result.data)
          this.newProduto = {
            codigo: '',
            descricao: '',
            quantidade: ''
          }
        } catch (e) {
          console.log(e)
        }
      }
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