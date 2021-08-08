<template>
  <aside :class="['drawer', {'drawer--open': isOpen}]">
    <div class="drawer__head">
      <h1 v-if="isOpen" class="drawer__title">CRM</h1>
      <a href="javascript:void(0)" class="drawer__burger" @click="toggleDrawer"></a>
    </div>
    <nav class="drawer__nav" v-if="isOpen">
      <router-link
        v-for="link in links"
        :key="link.url"
        class="drawer__link"
        active-class="drawer__link--active"
        :to="link.url"
        :exact="link.exact">
        {{$filters.localize(link.title)}}
      </router-link>
    </nav>
    <p v-if="isOpen" class="drawer__date">{{dateFormat}}</p>
  </aside>
</template>

<script>
export default {
  data: () => ({
    isOpen: true,
    date: new Date(),
    links: [
      {title: 'Page:Main', url: '/', exact: true},
      {title: 'Page:Clients', url: '/clients'},
      {title: 'Page:Properties', url: '/properties'},
      {title: 'Page:Sales', url: '/sales'}
    ]
  }),
  beforeMount() {
    const isOpen = JSON.parse(localStorage.getItem('vue-crm:drawerIsOpen'));

    if (isOpen !== null) {
      this.isOpen = isOpen;
    }
  },
  methods: {
    toggleDrawer() {
      const { isOpen } = this;

      this.isOpen = !isOpen;
      localStorage.setItem('vue-crm:drawerIsOpen', JSON.stringify(!isOpen));
    }
  },
  computed: {
    dateFormat() {
      return new Intl.DateTimeFormat(this.$store.getters.locale, {day: 'numeric', month: 'long', year: 'numeric'}).format(this.date);
    }
  }
}
</script>

<style lang="sass">
.drawer
  flex-shrink: 0
  display: flex
  flex-flow: column nowrap
  justify-content: flex-start
  align-items: stretch
  height: 100vh
  width: 50px
  background-color: #161B25
  &--open
    width: 240px
    .drawer
      &__head
        padding: 15px 20px
      &__burger:before
        left: -11px
        transform: rotate(0)
  &__head
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center
    height: 72px
    margin-bottom: 20px
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
      pointer-events: none
      background-color: transparentize(#F6F7F8, .9)
  &__date
    margin-top: auto
    padding: 15px 20px
    color: #aaa
    font-size: 13px
</style>