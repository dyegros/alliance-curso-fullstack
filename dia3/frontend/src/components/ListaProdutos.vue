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
    <b-alert v-model="mostrarErro" variant="danger" dismissible>
      Falha ao {{errorMessage.action}} - {{errorMessage.message}}
    </b-alert>
    <b-modal title="Incluir produto" id="modal-insert" v-on:ok="adicionarProduto()">
       <FormProduto :produto="newProduto" />
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
import FormProduto from './FormProduto.vue'
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
            },
            mostrarErro: false,
            errorMessage: {
              action: '',
              message: ''
            }
        }
    },
    components: {
        Produto,
        FormProduto
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
        } catch (error) {
          this.mostrarErro = true;
          this.errorMessage.action = "inserir"
          this.errorMessage.message = error.response.statusText
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