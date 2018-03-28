<template>
  <div class="menu">
    <div class="logo" @click="$router.push('/')">
      <img :src="UbuntuLogo" />
      <p>Ubuntu</p>
    </div>
    <ul>
      <li class="menu-item" v-for="(menu, index) in list" :key="index">
        <router-link class="router-link" :to="menu.routeName">{{menu.label}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import menus from '@/assets/api/menus.json'
import Menu from './menu'
import UbuntuLogo from './ubuntu.svg'

export default {
  name: 'u-menu',
  data() {
    return {
      list: null,
      UbuntuLogo,
    }
  },
  created() {
    this.list = menus.map(item => new Menu(item))
  },
}
</script>

<style lang="scss" scoped>
@import '../../definition.scss';

.logo{
  margin: 20px 0 30px 20px;
  width: 130px;
  height: 25px;
  padding: 17px 0 17px 60px;
  border: solid 1px $rin;
  color: $rin;
  position: relative;
  background: black;
  box-shadow: 10px 10px $rin;
  cursor: pointer;
  img{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
  }
  p{
    font-size: 24px;
    font-family: Ubuntu;
  }
}

.menu {
  position: absolute;
  left: 0;
  width: 200px;
  height: 100%;
  border-right: solid 1px $miku;
  >ul {
    padding: unset;
    list-style-type: none;
    border-bottom: solid 1px;
  }
}

.menu-item {
  width: 100%;
  position: relative;
  .router-link {
    color: $miku;
    display: block;
    text-decoration: none;
    padding: 15px;
    border-top: solid 1px $miku;
    position: relative;
  }
}

.router-link:hover::before,
.router-link.router-link-active::before{
  content: "";
  display: block;
  position: absolute;
  width: 10px;
  right: 0;
  background: black;
  border: solid 1px;
  border-left: 0;
  top: -1px;
  bottom: -1px;
  transform: translateX(10px);
}
</style>
