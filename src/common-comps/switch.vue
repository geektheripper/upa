<template>
  <label>
    <div class="switch">
      <input type="checkbox" :checked="value" @change="input">
      <span class="slider"></span>
    </div>
  </label>
</template>

<script>

export default {
  name: 'u-switch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.checked)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../definition.scss';

label {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 18px;
}

.switch {
  position: absolute;
  width: 44px;
  height: 22px;
  input {display:none}
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: solid 1px $in-active;
  -webkit-transition: .4s;
  transition: .4s;
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    border-color: $in-active;
    background-color: $in-active;
    -webkit-transition: .1s;
    transition: .1s;
  }
}

input:checked + .slider {
  border-color: $tianyi;
}

input:checked + .slider:before {
  background-color: $tianyi;
  transform: translateX(22px);
}
</style>
