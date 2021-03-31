<template>
  <button type="submit" :class="`button button--${type}`">{{title}}</button>
</template>

<script>
export default {
  props: ['type', 'title']
}
</script>

<style lang="sass">
.button
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center
  width: 100%
  height: 48px
  padding: 0
  border-radius: 8px
  border: none
  text-align: center
  text-decoration: none
  cursor: pointer
  color: #fff
  outline: 0
  font-size: 14px
  -webkit-appearance: none
  &--secondary
    background-color: #EE3135
    transition: background-color .3s ease
    &:hover
      background-color: lighten(#EE3135, 7)
    &:active
      padding-top: 3px
      background-color: darken(#EE3135, 5)
      transition: none
</style>