<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Usuarios</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button v-on:click="$bvModal.show('modal-insert')">
          <b-icon-plus></b-icon-plus>
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-alert v-model="mostrarErro" variant="danger" dismissible>
      Falha ao {{errorMessage.action}} - {{errorMessage.message}}
    </b-alert>
    <FormUsuario ref="formAdicionar" :usuario="newUsuario" title="Adicionar Usuario" v-on:confirmed="adicionarUsuario" idModal="modal-insert"/>
    <ul id="listaUsuarios">
        <li v-for="usuario, index in usuarios" v-bind:key="usuario.codigo">
            <Usuario v-bind:usuario="usuario" :index="index" v-on:removed="removerUsuario(index, usuario)" v-on:edited="editarUsuario"/>
        </li>
    </ul>
  </div>
</template>

<script>
import Usuario from './Usuario.vue'
import FormUsuario from './FormUsuario.vue'
import axios from 'axios'

export default {
    name: 'ListaUsuarios',
    data: function() {
        return {
            usuarios: [],
            newUsuario: {
              codigo: '',
              nome: '',
              login: '',
              email: ''
            },
            mostrarErro: false,
            errorMessage: {
              action: '',
              message: ''
            }
        }
    },
    components: {
        Usuario,
        FormUsuario
    },
    methods: {
      removerUsuario: async function(index, usuario) {
        // envie o comando de excluir para o backend
        await axios.delete(`http://localhost:3000/usuarios/${usuario.codigo}`)
        this.usuarios.splice(index, 1)
      },
      adicionarUsuario: async function(usuario) {
        try {
          console.log("Adcionair prdouto")
          console.log(usuario)
          var result = await axios.post("http://localhost:3000/usuarios", usuario)
          this.usuarios.push(result.data)
        } catch (error) {
          this.mostrarErro = true;
          this.errorMessage.action = "inserir"
          this.errorMessage.message = error.response.statusText
        }
        this.$refs.formAdicionar.reset();
      },
      editarUsuario: async function(usuario, index) {
        try {
          var result = await axios.put(`http://localhost:3000/usuarios/${this.usuarios[index].codigo}`, usuario)
          this.usuarios[index].codigo = result.data.codigo
          this.usuarios[index].nome = result.data.nome
          this.usuarios[index].login = result.data.login
          this.usuarios[index].email = result.data.email
        } catch (error) {
          this.mostrarErro = true;
          this.errorMessage.action = "atualizar"
          this.errorMessage.message = error.response.statusText
        }
      }
    },
    async created() {
      var response = await axios.get('http://localhost:3000/usuarios')
      this.usuarios = response.data
    }
}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
  display: inline-block;
}

.navbar {
  margin-bottom: 10px;
}
</style>