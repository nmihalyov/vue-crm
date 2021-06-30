<template>
  <button :type="type" :class="['button', `button--${mode}`, {'button--loading': loading}]">{{!loading ? title : ''}}</button>
</template>

<script>
export default {
  props: {
    type: String,
    mode: String,
    title: String,
    loading: Boolean
  }
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
  &--loading
    position: relative
    pointer-events: none
    &:after
      content: ""
      position: absolute
      display: block
      top: calc(50% - 12px)
      left: calc(50% - 12px)
      width: 24px
      height: 24px
      border-radius: 50%
      border: 3px solid rgba(255, 255, 255, .3)
      border-top: 2px solid #fff
      animation: spin 1s linear infinite
      transform: rotate(0)
  &--secondary
    background-color: #EE3135
    transition: background-color .3s ease
    &:hover
      background-color: lighten(#EE3135, 7)
    &:active
      padding-top: 3px
      background-color: darken(#EE3135, 5)
      transition: none

@keyframes spin
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)
</style>