<template>
  <b-modal size="l" :id="idModal" ok-only>
      <b-table striped hover :items="items" :fields="fields"></b-table>
  </b-modal>
</template>

<script>
import filters from '@/components/filters'

// Função que retorna a string passada com a primeira letra MAÍSCULA
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}


export default {
    data: function() {
        return {
            fields: [
                {
                    key: 'mes', 
                    label:'Mês',
                    formatter: (value) => {
                        // Split quebra a string em uma lista utilizando o caracter passado como campo de quebra.
                        // A atribuição abaixo coloca o primeiro valor da lista na variavel 'year' e o segundo valor na variável 'month'
                        var [year, month] = value.split('-')
                        
                        // Cria uma variável auxiliar com a data sendo o mês e o ano que vem de 'value' e o dia primeiro (que sempre existe)
                        const date = new Date(year, month, 1);

                        // Abaixo chama uma função do Javascript que retorna o mês por extenso. Note que ela vai respeitar a lingua do browser do usuário
                        const monthName = date.toLocaleString('default', { month: 'long' });

                        // Para ficar melhor apresentado, colocamos o nome do mês com a primeira maíscula
                        return capitalizeFirstLetter(monthName) + "/" + year;
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