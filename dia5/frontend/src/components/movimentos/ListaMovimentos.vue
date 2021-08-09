<template>
  <ul>
    <li v-for="movimento, index in movimentos" v-bind:key="movimento.id">
        <Movimento :movimento="movimento" :index="index" :totalAcumulado="totalAcumulado[index]" @edited="edited" @removed="removed"/>    
    </li>
  </ul>
</template>

<script>
import Movimento from '@/components/movimentos/Movimento'
export default {
    name: "ListaMovimentos",
    computed: {
        totalAcumulado: function() {
          var tempBalance = 0;
          return this.movimentos.map((movimento) => {
            return tempBalance += parseFloat(movimento.valor);
          })
        }
    },
    props: {
        movimentos: {
            type: Array,
            default: () => []            
        }
    },
    emits: ['edited', 'removed'],
    methods: {
        edited(movimento, index) {
            this.$emit('edited', movimento, index)
        },
        removed(movimento, index) {
            this.$emit('removed', movimento, index)
        }
    },
    components: {
        Movimento
    }
}
</script>

<style>
ul {
    list-style-type: none;
    margin: 0;
    padding-left: 0 !important;
}
</style>