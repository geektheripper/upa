<template>
  <pre>{{shellText}}</pre>
</template>

<script>
export default {
  name: 'shell',
  props: {
    shell: {
      type: String,
      default: null,
    },
    params: {
      type: Object,
      default: null,
    },
    sudo: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    shellText() {
      if (!this.shell) return '## Loading ...'
      let shell = this.shell

      shell = shell.replace(/__SUDO__/g, this.sudo ? 'sudo ' : '')

      if (this.params) {
        Object.keys(this.params).forEach((key) => {
          shell = shell.replace(new RegExp(`__${key.toUpperCase()}__`, 'g'), this.params[key])
        })
      }
      return shell
    },
  },
}
</script>
