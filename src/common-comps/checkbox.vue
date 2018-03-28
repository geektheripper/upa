<template>
  <label :class="{ checked: value }">
    <div class="checkbox">
      <input type="checkbox" :checked="value" @change="input">
      <span class="check"></span>
      <span class="label"><slot>{{label}}</slot></span>
    </div>
  </label>
</template>

<script>

export default {
  name: 'u-checkbox',
  props: {
    label: {
      type: String,
      default: '',
    },
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
  height: 18px;
  line-height: 18px;
}

.checkbox {
  left: 0;
  display: inline-block;
  // width: max-content;
  height: 20px;
  padding-left: 30px;
  padding-right: 10px;
  input { display: none }
}

.check {
  position: absolute;
  cursor: pointer;
  left: 0;
  top: -1px;
  width: 18px;
  height: 18px;
  border: solid 1px $in-active;
  &::before {
    display: none;
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 3px;
    bottom: 3px;
    background: $tianyi;
    -webkit-transition: .1s;
    transition: .1s;
  }
}
.checked .check {
  border-color: $tianyi;
  &::before {
    display: block;
  }
}

.label{
  color: $in-active;
  user-select: none;
}
.checked .label{
  color: $tianyi;
}

</style>
