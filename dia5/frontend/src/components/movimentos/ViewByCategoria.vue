<template>
  <b-modal size="l" :id="idModal" ok-only>
      <b-table striped hover :items="items" :fields="fields"></b-table>
  </b-modal>
</template>

<script>
import filters from '@/components/filters'
import Lookups from '@/components/utils/lookups.js'
export default {
    data: function() {
        return {
            fields: [
                {
                    key: 'categoria', 
                    label:'Categoria',
                    formatter: (value) => {
                        var categorias = Lookups.categorias();
                        var categoriaSelecionada = categorias.filter(c => c.value == value)
                        if (categoriaSelecionada.length > 0)
                            return categoriaSelecionada[0].text
                        else
                            return "[Categoria desconhecida]"
                    }
                },
                {
                    key: 'valor',
                    label: 'Valor',
                    formatter: filters.monetary,
                    thClass: 'text-right numberInfo',
                    tdClass: 'text-right numberInfo',
                }
            ]
        }
    },
    props: {
        idModal: String,
        items: Array
    }
}
</script>

<style lang="scss" scoped>
.numberInfo {
    margin-right: 1em !important;
}
</style>