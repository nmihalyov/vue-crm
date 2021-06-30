<template>
  <header class="header">
    <p class="header__title">{{title}}</p>
    <div class="header__user">
      <div class="header__user-box" @click="this.userMenuOpen = !this.userMenuOpen">
        <p class="header__user-name">{{name}}</p>
        <div class="header__user-pic"></div>
      </div>
      <div class="header__user-menu" v-if="userMenuOpen">
        <p class="header__user-email">{{email}}</p>
        <a href="javascript:void(0)" class="header__user-item">Настройки</a>
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
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    email() {
      return this.$store.getters.info.email;
    }
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/auth?message=logout');
      } catch (e) {}
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
    &-box
      display: flex
      align-items: center
      cursor: pointer
    &-name
      margin-right: 20px
    &-pic
      width: 40px
      height: 40px
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
      padding: 5px 0
      border-radius: 8px
      border: 1px solid #EBEBEB
      background-color: #fff
      box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 0.02)
    &-email
      padding: 5px 20px
      margin-bottom: 10px
      white-space: nowrap
      text-align: right
      font-size: 14px
    &-item
      display: block
      padding: 5px 20px
      text-decoration: none
      color: #333
      white-space: nowrap
      text-align: right
      transition: background-color .15s ease
      font-size: 14px
      &:hover
        background-color: transparentize(#161B25, .9)
</style>