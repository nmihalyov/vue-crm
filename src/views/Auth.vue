<template>
  <form action="" class="login">
    <h1 class="login__title">CRM</h1>
    <div class="login__inputs">
      <Input
        :label="$filters.localize('Email:Label')"
        type="email"
        name="email"
        v-model:value="email"
        :error="v$.email.$error"
        :errorText="!email.length ? $filters.localize('Error:EmailEmpty') : $filters.localize('Error:EmailFormat')" />
      <Input
        :label="$filters.localize('Password:Label')"
        type="password"
        name="password"
        v-model:value="password"
        :error="v$.password.$error"
        :errorText="$filters.localize('Error:PasswordLength')" />
    </div>
    <Button type="submit" mode="secondary" :title="$filters.localize('Login:Text')" :loading="queryProcess" @click.prevent="loginHandler" />
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import Button from '@/components/_ui/Button';
import Input from '@/components/_ui/Input';
import messages from '@/utils/messages';
import localize from '@/filters/localize.filter';

export default {
  components: {
    Button,
    Input
  },
  data: () => ({
    email: '',
    password: '',
    queryProcess: false
  }),
  methods: {
    async loginHandler() {
      this.queryProcess = true;

      if (this.v$.$invalid) {
        this.v$.$touch();
      } else {
        const formData = {
          email: this.email,
          password: this.password
        };

        try {
          await this.$store.dispatch('login', formData);
          this.$router.push('/');
        } catch (e) {}
      }

      this.queryProcess = false;
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(localize(messages[this.$route.query.message]));
    }
  },
  setup: () => ({
    v$: useVuelidate()
  }),
  validations: () => ({
    email: {email, required},
    password: {required, minLength: minLength(6)}
  })
}
</script>

<style lang="sass">
.login
  width: 495px
  padding: 40px 60px 80px
  border-radius: 8px
  background-color: #fff
  box-shadow: 0px 4px 16px -4px rgba(0, 0, 0, 0.02)
  &__title
    margin-bottom: 30px
    text-align: center
    letter-spacing: 0.2em
    font:
      size: 28px
      family: 'Raleway', Helvetica, sans-serif
  &__inputs
    margin-bottom: 30px
</style>