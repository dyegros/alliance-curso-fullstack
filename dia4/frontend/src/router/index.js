import Vue from 'vue'
import VueRouter from 'vue-router'

import Produtos from '@/components/produtos/ListaProdutos'
import Usuarios from '@/components/usuarios/ListaUsuarios'

Vue.use(VueRouter)

const routes = [{
        path: '/produtos',
        name: 'Produtos',
        component: Produtos
    },
    {
        path: '/usuarios',
        name: 'Usuarios',
        component: Usuarios
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router