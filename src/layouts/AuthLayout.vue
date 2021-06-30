<template>
  <div class="auth">
    <router-view/>
  </div>
</template>

<script>
import messages from '@/utils/messages';

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(firebaseError) {
      this.$message(messages[firebaseError.code] || 'Неизвестная ошибка');
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