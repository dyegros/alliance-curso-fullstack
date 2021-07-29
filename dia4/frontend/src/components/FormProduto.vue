<template>
    <b-modal :id="idModal ? idModal : ('modal-confirm-edit-'+produto.codigo)" :title="title" v-on:ok="ok()" v-on:cancel="reset()">
        <b-form>
            <b-form-group
            id="input-codigo"
            label="Código"
            label-for="codigo"
            description="Código do produto"
            ></b-form-group>
            <b-form-input 
            v-model="produtoInterno.codigo"
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
            v-model="produtoInterno.descricao"
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
            v-model="produtoInterno.quantidade"
            type="number"
            required
            ></b-form-input>
        </b-form>
    </b-modal>
</template>

<script>
export default {
    name: "FormProduto",
    data: function() {
        return {
            produtoInterno: {
                codigo: '',
                descricao: '',
                quantidade: ''
            }
        }
    },
    props: {
        title: String,
        idModal: String,
        produto: {
            codigo: Number,
            descricao: String,
            quantidade: Number
        }
    },
    methods: {
        ok: function() {
            this.$emit('confirmed', this.produtoInterno)
        },
        reset: function() {
            this.produtoInterno.codigo = this.produto.codigo
            this.produtoInterno.descricao = this.produto.descricao
            this.produtoInterno.quantidade = this.produto.quantidade            
        }
    },
    mounted() {
        this.reset();
    }
}
</script>

<style>

</style>