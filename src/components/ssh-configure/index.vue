<template>
  <div class="ssh-configure">
    <h1>SSH Configure</h1>

    <h2>SSH Local Config:</h2>
    <p class="form">
      <span>User:</span>
      <input v-model="local.user" />
    </p>
    <p class="form">
      <span>Key Store:</span>
      <input v-model="local.keyStoreDir" />
    </p>
    <p class="form">
      <span>SSH Config:</span>
      <input v-model="local.sshConfig"/>
    </p>

    <h2>Remote Config:</h2>
    <p class="form">
      <span>User:</span>
      <input v-model="remote.user"/>
    </p>
    <p class="form">
      <span>Add Root:</span>
      <u-switch v-model="remote.root" />
    </p>
    <p class="form">
      <span>Host:</span>
      <input v-model="remote.host"/>
    </p>
    <p class="form">
      <span>IP:</span>
      <input v-model="remote.ip"/>
    </p>

    <h2>0. Generate SSH Key:</h2>
    <shell :shell="generateSSHKey" :sudo="false" />

    <h2>1. Rsync Keys To Server</h2>
    <shell :shell="deployKeysOnServer" :sudo="false" />

    <h2>2. Configure server SSH:</h2>
    <p class="form">
      <span class="auto">Forbid Password Login:</span>
      <u-switch v-model="forbidPasswordLogin" />
    </p>
    <shell :shell="configureServerSSH" :sudo="false" />

    <h2>3. Configure Local SSH Config</h2>
    <p class="form">
      <span class="auto">Show Plaintext:</span>
      <u-switch v-model="localSSHConfigPlainText" />
    </p>
    <shell :shell="configureLocalSSHConfig" :sudo="false" />

    <h2>3. Setup Remote Desktop</h2>
    <shell :shell="null" :sudo="false" />

  </div>
</template>

<script>
/* eslint-disable func-names */
import generateSSHKey from './generate-ssh-key.sh'
import deployKeysOnServer from './deploy-keys-on-server.sh'
import configureServerSSH from './configure-server-ssh.sh'
import configureLocalSSHConfig from './configure-local-ssh-config.sh'

export default {
  name: 'ssh-configure',
  data() {
    return {
      local: {
        user: 'geektr',
        keyStoreDir: '/home/geektr/.ssh/keys',
        sshConfig: '/home/geektr/.ssh/config',
      },
      remote: {
        host: 'geektr.me',
        ip: 'geektr.me',
        user: 'geektr',
        root: true,
      },
      localSSHConfigPlainText: false,
      forbidPasswordLogin: true,
    }
  },
  watch: {
    'local.user': function (value) {
      this.local.keyStoreDir = `/home/${value}/.ssh/keys`
      this.local.sshConfig = `/home/${value}/.ssh/config`
    },
    'remote.host': function (value) {
      this.remote.ip = value
    },
  },
  computed: {
    generateSSHKey,
    deployKeysOnServer,
    configureServerSSH,
    configureLocalSSHConfig,
  },
}
</script>
