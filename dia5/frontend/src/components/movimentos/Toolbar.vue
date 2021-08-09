<template>
  <b-navbar type="dark" variant="primary">
      <b-navbar-brand>
        <b-icon-shop id="icon-shop"/>Minhas despesas
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-text>
          <h3 id="total-gastos"> {{ totalGastos | monetary}} </h3>
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item id="view-options">
          <b-button id="view-by-category" class="view-button" @click="$emit('view-by-category')">
            <b-icon-view-stacked />
          </b-button>
          <b-tooltip target="view-by-category" triggers="hover">
            Visualiza os gastos por categoria!
          </b-tooltip>
          <b-button id="view-by-month" class="view-button" @click="$emit('view-by-month')">
            <b-icon-calendar-month />
          </b-button>
          <b-tooltip target="view-by-month" triggers="hover">
            Visualiza os gastos por mês!
          </b-tooltip>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <b-button id="add" @click="$emit('addNew')">
            <b-icon-plus-square-fill />
          </b-button>
          <b-tooltip target="add" triggers="hover">
            Adiciona um nova despesa!
          </b-tooltip>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
import filters from '@/components/filters'

export default {
    props: {
        totalGastos: Number
    },
    emits: ['add-new', 'view-by-category', 'view-by-month'],
    filters: {
        monetary: filters.monetary
    }
}
</script>

<style lang="scss" scoped>
#icon-shop {
  margin-right: 12px;
}

#view-options {
  margin-right: 40px;
}

#total-gastos {
  margin-right: 10px;
  margin-left: 10px;
}

.view-button {
  margin-right: 10px;
  margin-left: 10px;
}
</style>