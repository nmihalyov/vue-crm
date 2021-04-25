<template>
  <header class="header">
    <p class="header__title">{{title}}</p>
    <div class="header__user" @click.self="this.userMenuOpen = !this.userMenuOpen">
      <div class="header__user-menu" v-if="userMenuOpen">
        <a href="javascript:void(0)" class="header__user-item" @click="logout">Выйти</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    userMenuOpen: false
  }),
  props: {
    title: String
  },
  methods: {
    logout() {
      this.$router.push('/auth');
    }
  }
}
</script>

<style lang="sass">
.header
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  padding: 15px 20px
  background-color: #fff
  border-bottom: 1px solid transparentize(#333333, .9)
  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.1)
  &__title
    line-height: 1.3
    font-size: 18px
  &__user
    position: relative
    width: 40px
    height: 40px
    cursor: pointer
    border-radius: 50%
    background:
      color: #ebebeb
      image: url('../assets/img/icons/profile.svg')
      size: 35px
      position: center bottom
      repeat: no-repeat
    &-menu
      overflow: hidden
      position: absolute
      top: calc(100% + 5px)
      right: 0
      border-radius: 6px
      background-color: #fff
      box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.1)
    &-item
      display: block
      padding: 5px 20px
      text-decoration: none
      color: #333
      white-space: nowrap
      text-align: right
      transition: color .3s ease
      font-size: 14px
      &:hover
        color: #959595
</style>