<template>
  <header class="header">
    <p class="header__title">{{$filters.localize(title)}}</p>
    <div class="header__user">
      <div class="header__user-box" @click="this.userMenuOpen = !this.userMenuOpen">
        <p class="header__user-name">{{name}}</p>
        <div class="header__user-pic"></div>
      </div>
      <div :class="['header__user-menu', {'header__user-menu--active': userMenuOpen}]">
        <p class="header__user-email">{{email}}</p>
        <span class="header__user-locale">
          <a href="javascript:void(0)" :class="{'active': locale === 'ru-Ru'}" @click="() => toggleLocale('ru-Ru')">ru</a> | 
          <a href="javascript:void(0)" :class="{'active': locale === 'en-US'}" @click="() => toggleLocale('en-US')">en</a>
        </span>
        <a href="javascript:void(0)" class="header__user-item" @click="logout">{{$filters.localize('Menu:Logout')}}</a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    userMenuOpen: false
  }),
  mounted () {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeUnmount () {
    document.removeEventListener('click',this.closeDropdown);
  },
  props: {
    title: String
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    email() {
      return this.$store.getters.info.email;
    },
    ...mapGetters({
      locale: 'locale'
    })
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout');
        this.$router.push('/auth?message=logout');
      } catch (e) {}
    },
    closeDropdown(e) {
      if (this.userMenuOpen && !e.target.closest('.header__user-menu') && !e.target.closest('.header__user-box')) {
        this.userMenuOpen = false;
      }
    },
    toggleLocale(locale) {
      this.$store.dispatch('changeLocale', locale)
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
      z-index: 2
      overflow: hidden
      opacity: 0
      visibility: hidden
      position: absolute
      top: 100%
      right: 0
      min-width: 180px
      padding: 5px 0
      border-radius: 8px
      border: 1px solid #EBEBEB
      background-color: #fff
      box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 0.02)
      transform: translateY(0)
      transition: opacity .3s ease, visibility .3s ease, bottom .3s ease, transform .3s ease
      &--active
        opacity: 1
        visibility: visible
        transform: translateY(10px)
    &-email
      padding: 5px 15px
      margin-bottom: 10px
      white-space: nowrap
      font-size: 14px
    &-locale
      position: relative
      display: block
      padding: 5px 15px 5px 40px
      font-size: 14px
      &:before
        position: absolute
        content: ''
        top: 10px
        left: 15px
        width: 12px
        height: 12px
        background:
          image: url('../assets/img/icons/world.svg')
          position: center
          size: contain
          repeat: no-repeat
      a
        color: #333
        text-decoration: none
        transition: opacity .3s ease
        &:hover
          opacity: 0.8
        &.active
          opacity: 0.5
          pointer-events: none
    &-item
      position: relative
      display: block
      padding: 5px 15px 5px 40px
      text-decoration: none
      color: #333
      white-space: nowrap
      transition: background-color .15s ease
      font-size: 14px
      &:hover
        background-color: transparentize(#161B25, .9)
      &:before
        position: absolute
        content: ''
        top: 9px
        left: 15px
        width: 12px
        height: 12px
        background:
          image: url('../assets/img/icons/logout.svg')
          position: center
          size: contain
          repeat: no-repeat        
</style>