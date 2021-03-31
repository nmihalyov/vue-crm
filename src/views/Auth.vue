<template>
  <form action="" class="login">
    <h1 class="login__title">CRM</h1>
    <div class="login__inputs">
      <Input label="почта" type="email" name="email" :required="true" />
      <Input label="пароль" type="password" name="password" :required="true" />
    </div>
    <Button type="secondary" title="Вход" />
  </form>
</template>

<script>
import Button from '@/components/_ui/Button';
import Input from '@/components/_ui/Input';

export default {
  components: {
    Button,
    Input
  }
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