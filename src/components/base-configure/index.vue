<template>
  <div class="base-configure">
    <h1>Base Configure</h1>
    <h2>Ubuntu Desktop:</h2>
    <shell :shell="UbuntuDesktopShell" :sudo="false" />
    <h2>Ubuntu Server:</h2>
    <shell :shell="UbuntuServerShell" :sudo="false" />
  </div>
</template>

<script>
import UbuntuDesktopShell from './desktop.sh'
import UbuntuServerShell from './server.sh'

export default {
  name: 'base-configure',
  data() {
    return {
      UbuntuDesktopShell,
      UbuntuServerShell,
    }
  },
}
</script>
