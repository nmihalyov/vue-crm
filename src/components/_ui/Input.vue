<template>
  <label class="input">
    <p class="input__label">{{label}}</p>
    <input :type="type" class="input__field" :name="name" :required="required">
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    name: String,
    required: Boolean
  }
}
</script>

<style lang="sass">
.input
  display: block
  margin-bottom: 15px
  &__label
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
</style>