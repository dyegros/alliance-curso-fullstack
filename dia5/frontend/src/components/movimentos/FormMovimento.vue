<template>
    <b-modal :id="idModal ? idModal : ('modal-confirm-edit-'+movimento.id)" :title="title" v-on:ok="ok" v-on:cancel="reset">
        <b-form>
            <b-form-input 
            v-model="movimentoInterno.id"
            type="number"
            hidden
            ></b-form-input>

            <b-form-group
            id="input-data"
            label="Data"
            label-for="data"
            :state="stateDataMov"
            :invalid-feedback="stateDataMovInvalidFeedback"
            ></b-form-group>
            <b-form-datepicker 
            id="data"
            v-model="movimentoInterno.data_mov"
            required
            :state="stateDataMov"
            ></b-form-datepicker>

            <b-form-group
            id="input-descricao"
            label="Descrição"
            label-for="descricao"
            ></b-form-group>
            <b-form-input 
            id="descricao"
            v-model="movimentoInterno.descricao"
            type="text"
            required
            :state="stateDescricao"
            ></b-form-input>

            <b-form-group
            id="input-categoria"
            label="Categoria"
            label-for="categoria"
            ></b-form-group>
            <b-form-select 
            id="categoria"
            v-model="movimentoInterno.categoria"
            :options="categorias"
            :state="stateCategoria"
            required
            ></b-form-select>

            <b-form-group
            id="input-valor"
            label="Valor"
            label-for="valor"
            ></b-form-group>
            <CurrencyInput 
            id="valor"
            v-model="movimentoInterno.valor"
            required    
            :state="stateValor"
            no-wheel
            :options="{ currency: 'BRL' }"
            ></CurrencyInput>
        </b-form>   
    </b-modal>
</template>

<script>
import CurrencyInput from '@/components/utils/CurrencyInput'
import Lookups from '@/components/utils/lookups.js'

export default {
    name: "FormMovimento",
    computed: {
        stateDataMov() {
            if (this.movimentoInterno.data_mov == "")
                return false;          
            var d = new Date(this.movimento.data_mov)
            return !isNaN(d)
        },
        stateDataMovInvalidFeedback() {
            
            if (!this.movimentoInterno.data_mov || this.movimentoInterno.data_mov == "") {
                return "Informe uma data para o movimento"
            } else {
                return "Informe uma data válida para o movimento"
            }
        },
        stateDescricao() {
            return this.movimentoInterno.descricao && this.movimentoInterno.descricao.trim() != ""
        },
        stateCategoria() {
            return (this.movimentoInterno.categoria != null)
        },
        stateValor() {
            if (typeof this.movimentoInterno.valor === 'string')
                return this.movimentoInterno.valor && this.movimentoInterno.valor.trim() != "" && !isNaN(this.movimentoInterno.valor);
            else
                return !isNaN(this.movimentoInterno.valor)
        },
    },
    data: function() {
        return {
            movimentoInterno: {
                id: -1,
                data_mov: '',
                descricao: '',
                categoria: null,
                valor: 0
            },
            categorias: Lookups.categorias()
        }
    },
    props: {
        title: String,
        idModal: String,
        movimento: {
            id: Number,
            data_mov: Date,
            descricao: String,
            categoria: String,
            valor: Number
        }
    },
    methods: {
        checkForm: function () {
            return this.stateDataMov && this.stateDescricao && this.stateCategoria && this.stateValor;
        },
        ok: function(event) {
            if (!this.checkForm())
                event.preventDefault();
            else
                this.$emit('confirmed', this.movimentoInterno);
        },
        reset: function() {
            this.movimentoInterno.id = this.movimento.id
            this.movimentoInterno.data_mov = this.movimento.data_mov
            this.movimentoInterno.descricao = this.movimento.descricao
            this.movimentoInterno.categoria = this.movimento.categoria
            this.movimentoInterno.valor = this.movimento.valor

        }
    },
    components: {CurrencyInput},
    mounted() {
        this.reset();
    }
}
</script>

<style scoped>
.form-group {
    margin-top: 1rem !important;
}
</style>