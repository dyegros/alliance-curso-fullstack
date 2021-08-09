<template>
  <b-input 
    ref="inputRef" 
    :value="formattedValue"
    :required="required"
    :state="state"
    :no-wheel="noWheel"
  >
  </b-input>
</template>

<script>
import useCurrencyInput from 'vue-currency-input'
import { watch } from '@vue/composition-api'

export default {
  name: 'CurrencyInput',
  props: {
    value: Number,
    options: Object,
    required: Boolean,
    noWheel: Boolean,
    state: Boolean
  },
  setup (props) {
    const {
      inputRef,
      formattedValue,
      setValue
    } = useCurrencyInput(props.options)

    watch(() => props.modelValue, (value) => { // Vue 2: props.value
      setValue(value)
    })

    return { inputRef, formattedValue }
  }
}
</script>