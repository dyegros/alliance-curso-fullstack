<template>
  <b-overlay :show="busy" rounded="sm" opacity="0.85" variant="light">
    <b-container fluid="lg">
      <b-alert v-model="mostrarErro" variant="danger" dismissible>
        Falha ao {{errorMessage.action}} - {{errorMessage.message}}
      </b-alert>
      <Toolbar id="toolbar" :totalGastos="totalGastos" @addNew="addNew" @view-by-category="viewByCategoria" @view-by-month="viewByMes" />
      <ListaMovimentos id="listaMovimentos" :movimentos="movimentos" @edited="editarMovimento" @removed="excluirMovimento"/>
      <FormMovimento idModal="add-new-movimento-modal" :movimento="newMovimento" @confirmed="adicionarMovimento" />
      <ViewByCategoria idModal="view-by-category-modal" :items="despesasByCategoria"/>
      <ViewByMes idModal="view-by-month-modal" :items="despesasByMes"/>
    </b-container>
  </b-overlay>
</template>

<script>
import axios from 'axios'
import Toolbar from '@/components/movimentos/Toolbar'
import ListaMovimentos from '@/components/movimentos/ListaMovimentos'
import FormMovimento from '@/components/movimentos/FormMovimento'
import ViewByCategoria from '@/components/movimentos/ViewByCategoria'
import ViewByMes from '@/components/movimentos/ViewByMes'

export default {
  name: 'App',
  data: function() {
    return {
      movimentos: [],
      despesasByCategoria: [],
      despesasByMes: [],
      mostrarErro: false,
      busy: false,
      newMovimento: {
        id: -1,
        data_mov: new Date(),
        descricao: '',
        categoria: null,
        valor: 0
      },
      errorMessage: {
        action: '',
        message: ''
      }
    }
  },
  computed: {
    totalGastos: function() {
      return this.movimentos.reduce((total, movimento) => total + parseFloat(movimento.valor), 0);
    }
  },
  methods: {
      addNew: function() {
        console.log("clicou")
        this.$bvModal.show('add-new-movimento-modal')
      },
      excluirMovimento: async function(movimento, index) {
        // envie o comando de excluir para o backend
        try {
          await axios.delete(`http://localhost:3000/movimentos/${movimento.id}`)
          this.movimentos.splice(index, 1)
        } catch (error) {
          console.log(error)
          this.mostrarErro = true;
          this.errorMessage.action = "atualizar"
          this.errorMessage.message = error.response.statusText
        }
      },
      adicionarMovimento: async function(movimento) {
        try {
          var result = await axios.post("http://localhost:3000/movimentos", movimento)
          this.movimentos.push(result.data)

        } catch (error) {
          this.mostrarErro = true;
          this.errorMessage.action = "inserir"
          this.errorMessage.message = error.response.statusText
        }
        this.$refs.formAdicionar.reset();
      },
      editarMovimento: async function(movimento, index) {
        try {
          var result = await axios.put(`http://localhost:3000/movimentos/${this.movimentos[index].id}`, movimento)
          this.movimentos[index].id = result.data.id
          this.movimentos[index].data_mov = result.data.data_mov
          this.movimentos[index].descricao = result.data.descricao
          this.movimentos[index].categoria = result.data.categoria
          this.movimentos[index].valor = result.data.valor
        } catch (error) {
          console.log(error)
          this.mostrarErro = true;
          this.errorMessage.action = "atualizar"
          this.errorMessage.message = error.response.statusText
        }
      },
      viewByCategoria: async function() {
        this.busy = true;
        try {
          var result = await axios.get('http://localhost:3000/movimentos/by-categoria')
          this.despesasByCategoria = result.data
          this.busy = false;
          this.$bvModal.show('view-by-category-modal')
        } catch (error)
        {
          console.log(error)
          this.busy = false
        }
      },
      viewByMes: async function() {
        this.busy = true;
        try {
          var result = await axios.get('http://localhost:3000/movimentos/by-month')
          this.despesasByMes = result.data
          this.busy = false;
          this.$bvModal.show('view-by-month-modal')
        } catch (error)
        {
          console.log(error)
          this.busy = false
        }
      }
  },
  async created() {
    let result = await axios.get('http://localhost:3000/movimentos')
    this.movimentos = result.data
  },
  components: {
    Toolbar,
    ListaMovimentos,
    FormMovimento,
    ViewByCategoria,
    ViewByMes
  }
}
</script>


<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
