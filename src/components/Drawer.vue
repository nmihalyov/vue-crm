<template>
  <aside :class="['drawer', {'drawer--shown': isShown}]">
    <div class="drawer__head">
      <h1 v-if="isShown" class="drawer__title">CRM</h1>
      <a href="javascript:void(0)" class="drawer__burger" @click="toggleDrawer"></a>
    </div>
    <nav class="drawer__nav">
      <router-link
        v-for="link in links"
        :key="link.url"
        class="drawer__link"
        active-class="drawer__link--active"
        :to="link.url"
        :exact="link.exact">
        {{link.title}}
      </router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  data: () => ({
    isShown: true,
    links: [
      {title: 'Главная', url: '/', exact: true},
      {title: 'Вход', url: '/auth'}
    ]
  }),
  methods: {
    toggleDrawer() {
      this.isShown = !this.isShown;
    }
  }
}
</script>

<style lang="sass">
.drawer
  height: 100vh
  width: 50px
  background-color: #161B25
  &--shown
    width: 240px
    .drawer
      &__head
        padding: 20px
      &__burger:before
        left: -11px
        transform: rotate(0)
      &__nav
        display: block
  &__head
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center
    height: 82px
  &__title
    color: #fff
    letter-spacing: 0.2em
    font:
      size: 28px
      family: 'Raleway', Helvetica, sans-serif
  &__burger
    position: relative
    display: block
    width: 30px
    height: 30px
    margin-left: 5px
    background:
      image: url('../assets/img/icons/burger.svg')
      position: center
      repeat: no-repeat
    &:before
      content: ''
      display: block
      position: absolute
      top: calc(50% - 5px)
      right: -11px
      width: 10px
      height: 10px
      transform: rotate(180deg)
      background:
        image: url('../assets/img/icons/arrow.svg')
        position: center
        repeat: no-repeat
  &__nav
    display: none
  &__link
    display: block
    padding: 5px 5px 5px 20px
    color: #fff
    text-decoration: none
    transition: color .3s ease
    font-size: 14px
    &:hover
      color: #dedede
    &--active
      background-color: transparentize(#F6F7F8, .9)
</style>