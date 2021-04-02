<template>
  <div class="page-wrapper">
    <Drawer />
    <main class="content">
      <Header :title="this.$route.meta.title" />
      <router-view/>
    </main>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer';
import Header from '@/components/Header';

export default {
  components: {
    Drawer,
    Header
  }
}
</script>

<style lang="sass">
.page-wrapper
  overflow: hidden
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: stretch
  height: 100vh

.content
  flex: 1
  background-color: #F6F7F8
</style>