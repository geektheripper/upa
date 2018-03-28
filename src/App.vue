<template>
  <div id="app">
    <u-menu />
    <div class="panel">
      <router-view/>
    </div>
  </div>
</template>

<script>
import uMenu from '@/components/menu'

export default {
  name: 'App',
  components: { uMenu },
}
</script>

<style>
@import url('https://fonts.proxy.ustclug.org/css?family=Ubuntu:400,500|Ubuntu+Mono');
*{
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}

</style>

<style lang="scss">
@import 'definition.scss';

html {
  background: black;
}
#app {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  padding-left: 260px;

  overflow: hidden;
  font-family: Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $miku;
}
.panel{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 20px;
  font-family: Ubuntu;
  h1 {
    font-size: 2rem;
    font-weight: normal;
    line-height: 1.5;
    border-bottom: solid 1px;
  }
  h2 {
    font-size: 1.2rem;
    -webkit-margin-before: 1rem;
    -webkit-margin-after: 1rem;
    font-weight: 500;
  }
  pre {
    margin: 20px 0;
    width: 600px;
    padding: 20px;
    font-family: "Ubuntu Mono";
    border: 1px dashed $len;
    color: $len;
    white-space: pre-wrap;
    word-break: break-all;
  }
  p.form {
    color: $tianyi;
    -webkit-margin-before: 0.5rem;
    -webkit-margin-after: 0.5rem;
    >span {
      display: inline-block;
      width: 150px;
      &.l2 { width: 200px }
      &.l3 { width: 250px }
      &.l4 { width: 300px }
      &.auto { width: auto; padding-right: 30px }
    }
    input {
      background: none;
      border: solid 1px $tianyi;
      color: $tianyi;
      outline: none;
    }
  }
}
</style>
