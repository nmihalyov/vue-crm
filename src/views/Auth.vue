<template>
  <form action="" class="login">
    <h1 class="login__title">CRM</h1>
    <div class="login__inputs">
      <label class="input">
        <p class="input__label">почта</p>
        <input type="email" class="input__field" name="email" required>
      </label>
      <label class="input">
        <p class="input__label">пароль</p>
        <input type="password" class="input__field" name="password" required>
      </label>
    </div>
    <button type="submit" class="button button--secondary">Войти</button>
  </form>
</template>

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

.input
  display: block
  margin-bottom: 15px
  &__label
    margin-bottom: 5px
    color: #969BA3
    font-size: 14px
  &__field
    display: block
    width: 100%
    height: 48px
    padding: 15px
    border: none
    border: 1px solid transparentize(#333333, .9)
    border-radius: 8px
    outline: 0
    box-shadow: none
    line-height: 16px
    -webkit-appearance: none
    font:
      family: 'SF UI Display', Helvetica, sans-serif
      size: 15px
      weight: 400

.button
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center
  width: 100%
  height: 48px
  padding: 0
  border-radius: 8px
  border: none
  text-align: center
  text-decoration: none
  cursor: pointer
  color: #fff
  outline: 0
  font-size: 14px
  -webkit-appearance: none
  &--secondary
    background-color: #EE3135
    transition: background-color .3s ease
    &:hover
      background-color: lighten(#EE3135, 7)
    &:active
      padding-top: 3px
      background-color: darken(#EE3135, 5)
      transition: none
</style>