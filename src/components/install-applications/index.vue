<template>
  <div class="install-applications">
    <h1>Install Applications</h1>
    <h2>Select Applications:</h2>

    <p class="form">
      <span class="auto">Show version:</span>
      <u-switch v-model="config.showVersion" />
    </p>
    <p class="form">
      <span class="auto">Show GeekTR's personal applications:</span>
      <u-switch v-model="config.showMyPersonalItems" />
    </p>
    <p class="form">
      <span class="auto">User Name:</span>
      <input v-model="config.userName"/>
    </p>

    <div class="select-area">
      <u-checkbox v-for="(app, index) in applications"
        :key="index" v-model="app.selected"
        :label="config.showVersion ? `${app.name} - ${app.version}` : app.name" />
    </div>

    <h2>Shell Script:</h2>
    <shell :shell="shell" :sudo="false" />
  </div>
</template>

<script>
import Application from './application'
import GeekTRAvatar from './geektr-avatar.sh'

const req = require.context('./applications', true, /\.js$/)
const applications = req.keys().map(key => req(key))

export default {
  name: 'install-applications',
  data() {
    return {
      applicationStore: [],
      applications: [],
      config: {
        userName: 'geektr',
        showVersion: false,
        showMyPersonalItems: false,
      },
    }
  },
  created() {
    this.applicationStore = applications.map(item => new Application(item))
    this.$watch('config', () => this.load(), { immediate: true, deep: true })
  },
  computed: {
    shell() {
      let shell = ''
      const apps = this.applications.filter(item => item.selected)
      shell += `#!/usr/bin/env bash

STATIC_PREFIX=${location.origin}/static/upa
USER_NAME=${this.config.userName}
`
      apps.forEach(({ beforeUpdate }) => { if (beforeUpdate) shell += beforeUpdate })
      shell += `
sudo apt-get update
`
      const aptInstalls = apps
        .map(({ aptInstall }) => aptInstall)
        .filter(item => item)
        .join(' ')
      if (aptInstalls) shell += `\nsudo apt-get install -y ${aptInstalls} \n`

      apps.forEach(({ afterInstall }) => { if (afterInstall) shell += afterInstall })

      shell += GeekTRAvatar
      return shell
    },
  },
  methods: {
    load() {
      this.applications =
        this.applicationStore.filter(item => this.config.showMyPersonalItems || !item.geektr)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../definition.scss';

.select-area{
  margin-top: 20px;
  width: 600px;
  padding: 20px;
  border: dashed 1px $tianyi;
  line-height: 1.8;
}
</style>
