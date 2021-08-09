<template>
  <div>
    <b-card>
        <b-row no-gutters>
            <b-col md="1">
                <span> {{ movimento.data_mov }} </span>
            </b-col>
            <b-col md="5">
                <h5> {{ movimento.descricao }} </h5>
            </b-col>
            <b-col md="3">
                <span> {{ movimento.categoria | lookupCategoria }} </span>
            </b-col>
            <b-col md="1">
                <span class="numberInfo"> {{ movimento.valor | monetary }} </span>
            </b-col>
            <b-col md="1">
                <span class="numberInfo"> {{ totalAcumulado | monetary}} </span>
            </b-col>
            <b-col md="1" class="buttonsCell">
                <b-button pill size="sm" v-b-modal="'modal-confirm-edit-'+movimento.id">
                    <b-icon-pen />    
                </b-button>
                <b-button pill size="sm" v-b-modal="'modal-confirm-delete-'+movimento.id">
                    <b-icon-trash />
                </b-button>
            </b-col>
        </b-row>
    </b-card>
    <b-modal :id="'modal-confirm-delete-'+movimento.id" title="Confirmação" 
        ok-variant='danger' cancel-variant="success"
        ok-title='Sim' cancel-title='Não'
        v-on:ok="excluir()"
        >
        <p>Tem certeza que deseja excluir o movimento ?</p>
    </b-modal>
    <FormMovimento :movimento="movimento" title="Editar o movimento" v-on:confirmed="edit"/>
  </div>
</template>

<script>
import filters from '@/components/filters'
import Lookups from '@/components/utils/lookups.js'
import FormMovimento from '@/components/movimentos/FormMovimento'

export default {
    name: 'Movimento',
    props: {
        movimento: {
            id: Number,
            data_mov: Date,
            descricao: String,
            categoria: String,
            valor: Number
        },
        index: Number,
        totalAcumulado: Number
    },
    emits: ['edited', 'removed'],
    filters: {
        monetary: filters.monetary,
        lookupCategoria: function(categoria)
        {
            var categorias = Lookups.categorias();
            var categoriaSelecionada = categorias.filter(c => c.value == categoria)
            if (categoriaSelecionada.length > 0)
                return categoriaSelecionada[0].text
            else
                return "[Categoria desconhecida]"
        }
    },
    methods: {
        excluir: function () {
            // avisar que eu fui excluido
            this.$emit('removed', this.movimento, this.index);
        },
        edit: function(movimento) {
            this.$emit('edited', movimento, this.index)
        }
    },
    components: {
        FormMovimento
    }
}
</script>

<style lang="scss" scoped>
.numberInfo {
    float: right !important;
    margin-right: 1em !important;
}

.buttonsCell {
    text-align: center;
}
</style>