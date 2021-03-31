<template>
  <div class="page-wrapper">
    <Drawer />
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer';

export default {
  components: {
    Drawer
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
</style>