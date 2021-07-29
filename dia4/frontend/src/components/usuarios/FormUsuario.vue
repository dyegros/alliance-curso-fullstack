<template>
    <b-modal :id="idModal ? idModal : ('modal-confirm-edit-'+usuario.codigo)" :title="title" v-on:ok="ok" v-on:cancel="reset">
        <p v-if="errors.length">
            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
            <ul>
            <li v-for="error, index in errors" v-bind:key="index">{{ error }}</li>
            </ul>
        </p>
        <b-form>
            <b-form-input 
            v-model="usuarioInterno.codigo"
            type="number"
            hidden
            ></b-form-input>
            <b-form-group
            id="input-nome"
            label="Nome"
            label-for="nome"
            description="Nome do usuário"
            ></b-form-group>
            <b-form-input 
            id="nome"
            v-model="usuarioInterno.nome"
            type="text"
            required
            ></b-form-input>
            <b-form-group
            id="input-login"
            label="Login"
            label-for="login"
            description="Login do usuário"
            ></b-form-group>
            <b-form-input 
            id="login"
            v-model="usuarioInterno.login"
            type="text"
            required
            ></b-form-input>
            <b-form-group
            id="input-email"
            label="E-mail"
            label-for="email"
            description="E-mail do usuário"
            ></b-form-group>
            <b-form-input 
            id="email"
            v-model="usuarioInterno.email"
            type="email"
            required
            ></b-form-input>
        </b-form>
    </b-modal>
</template>

<script>
export default {
    name: "FormUsuario",
    data: function() {
        return {
            errors: [],
            usuarioInterno: {
                codigo: '',
                nome: '',
                login: '',
                email: ''
            }
        }
    },
    props: {
        title: String,
        idModal: String,
        usuario: {
            codigo: Number,
            nome: String,
            login: String,
            email: String
        }
    },
    methods: {
        checkForm: function () {
            this.errors = [];

            if (!this.usuarioInterno.nome)
                this.errors.push("Informe o nome do usuário");
        
            if (!this.usuarioInterno.login)
                this.errors.push("Informe o login do usuário");

            if (!this.usuarioInterno.email)
                this.errors.push("Informe o e-mail do usuário");
            else {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!   re.test(this.usuarioInterno.email)) 
                    this.errors.push("Informe um e-mail válido");
            }

            console.log(this.errors)
            return this.errors.length == 0;
        },
        ok: function(event) {
            if (!this.checkForm())
                event.preventDefault();
            else
                this.$emit('confirmed', this.usuarioInterno);
        },
        reset: function() {
            this.usuarioInterno.codigo = this.usuario.codigo
            this.usuarioInterno.nome = this.usuario.nome
            this.usuarioInterno.login = this.usuario.login
            this.usuarioInterno.email = this.usuario.email
        }
    },
    mounted() {
        this.reset();
    }
}
</script>

<style>

</style>