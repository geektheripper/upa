<template>
  <div class="user-configure">
    <h1>User Configure</h1>
    <p class="form">
      <span>Username:</span>
      <input v-model="form.login" />
    </p>
    <p class="form">
      <span>Home:</span>
      <input v-model="form.homeDir"/>
    </p>
    <p class="form">
      <span>Groups:</span>
      <input v-model="form.groups"/>
    </p>
    <shell :shell="shell" :sudo="false" />
  </div>
</template>

<script>
/* eslint-disable func-names */
import userConfigureShell from './user-configure.sh'

export default {
  name: 'user-configure',
  data() {
    return {
      form: {
        login: 'geektr',
        homeDir: '/home/geektr',
        groups: 'sudo',
      },
    }
  },
  watch: {
    'form.login': function (value) {
      this.form.homeDir = `/home/${value}`
    },
  },
  computed: {
    shell() {
      return userConfigureShell(this.form)
    },
  },
}
</script>
