<template>
  <div class="page-wrapper">
    <Drawer />
    <main class="content">
      <Header :title="this.$route.meta.title" />
      <div class="inner">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
import Drawer from '@/components/Drawer';
import Header from '@/components/Header';
import messages from '@/utils/messages';

export default {
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo');
    }
  },
  components: {
    Drawer,
    Header
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(firebaseError) {
      this.$message(messages[firebaseError.code] || $filters.localize('Error:Unknown'));
    }
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
  max-width: 100%

.content
  overflow: hidden
  display: flex
  flex-direction: column
  flex: 1
  background-color: #F6F7F8

.inner
  overflow: auto
  flex-grow: 1
</style>