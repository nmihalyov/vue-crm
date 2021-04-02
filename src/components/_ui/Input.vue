<template>
  <label class="input">
    <p class="input__label">{{label}}
      <span class="input__error" v-if="error">{{errorText}}</span>
    </p>
    <input
      :type="type"
      :class="['input__field', {'input__field--error': error}]"
      :name="name"
      :value="value"
      @input="$emit('update:value', $event.target.value)">
  </label>
</template>

<script>
export default {
  emits: ['update:value'],
  props: {
    label: String,
    type: String,
    name: String,
    error: Boolean,
    errorText: String,
    value: String
  }
}
</script>

<style lang="sass">
.input
  display: block
  margin-bottom: 15px
  &__label
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: baseline
    margin-bottom: 5px
    color: #969BA3
    font-size: 14px
  &__field
    display: block
    width: 100%
    height: 48px
    padding: 15px
    border: none
    border: 1px solid transparentize(#333333, .9)
    border-radius: 8px
    outline: 0
    box-shadow: none
    line-height: 16px
    -webkit-appearance: none
    font:
      family: 'SF UI Display', Helvetica, sans-serif
      size: 15px
      weight: 400
    &--error
      border-color: #EE3135
  &__error
    color: #EE3135
    font-size: 12px
</style>