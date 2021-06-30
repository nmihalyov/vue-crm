<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass">
.loader
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  padding-bottom: 71px
  &__spinner
    width: 36px
    height: 36px
    border-radius: 50%
    border: 3px solid transparentize(#161B25, .7)
    border-top: 2px solid #161B25
    animation: spin 1s linear infinite
    transform: rotate(0)

@keyframes spin
  0%
    transform: rotate(0)
  100%
    transform: rotate(360deg)
</style>