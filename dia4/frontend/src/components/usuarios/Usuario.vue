<template>
  <div>
    <b-card id="card-usuario" class="text-center"
      :title="usuario.login"
      :sub-title="usuario.nome"
      >
      <b-card-text>{{usuario.email}}</b-card-text>

      <b-button class="float-right" v-b-modal="'modal-confirm-delete-'+usuario.codigo">
        <b-icon-trash></b-icon-trash>
      </b-button>

      <b-button class="float-right" v-b-modal="'modal-confirm-edit-'+usuario.codigo">
        <b-icon-pen></b-icon-pen>
      </b-button>
    </b-card>
    <b-modal :id="'modal-confirm-delete-'+usuario.codigo" title="Confirmação" 
      ok-variant='danger' cancel-variant="success"
      ok-title='Sim' cancel-title='Não'
      v-on:ok="excluir()"
      >
      <p>Tem certeza que deseja excluir o usuário ?</p>
    </b-modal>
    <Formusuario :usuario="usuario" title="Editar usuário" v-on:confirmed="edit"/>
  </div>
</template>

<script>
import Formusuario from "./FormUsuario.vue"

export default {
  name: "usuario",
  props: {
    usuario: {
      codigo: Number,
      descricao: String,
      quantidade: Number
    },
    index: Number
  },
  emits: {
    removed: null,
    edited: ( { usuario, index }) => {
      if (usuario && index)
        return true;
      else {
        console.warn('Invalid edited event payload')
        return false
      }
    }
  },
  methods: {
    excluir: function () {
      // avisar que eu fui excluido
      this.$emit('removed');
    },
    edit: function(usuario) {
      this.$emit('edited', usuario, this.index)
    }
  },
  components: {
    Formusuario
  }
}
</script>

<style scoped>
.card {
    margin-bottom: 10px;
    width: 380px;
    height: 180px;
}

.card-title {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-subtitle {
  text-align: left;
}

.btn {
  margin: 3px;
}
</style>