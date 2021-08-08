<template>
  <div class="auth">
    <router-view/>
  </div>
</template>

<script>
import messages from '@/utils/messages';
import localize from '@/filters/localize.filter';

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(firebaseError) {
      this.$message(localize(messages[firebaseError.code]) || localize('Error:Unknown'));
    }
  }
}
</script>

<style lang="sass">
.auth
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center
  height: 100vh
  background-color: #F6F7F8
</style>