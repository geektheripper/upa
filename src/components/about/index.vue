<template>
  <div class="about">
    <h1>Upa beta <a href="https://github.com/GeekTheRipper/upa" class="href"><img src="https://img.shields.io/github/stars/GeekTheRipper/upa.svg?style=social&label=Stars" alt=""></a></h1>
    <p>A project that helps you configure ubuntu. </p>
    <br>
    <p>The project name "Upa" is some stuff that appears in the <i>Steins;Gate</i>.</p>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_KjS5zIN_zU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p class="geektr">By: <a href="https://github.com/GeekTheRipper"><img class="avatar" src="~./avatar.svg">GeekTR</a></p>
  </div>
</template>

<style lang="scss" scoped>
@import '../../definition.scss';
.about{
  max-width: 600px;
}
h1{
  color: $rin;
}
.geektr{
  color: $cmyk-c;
  text-align: right;
}
.avatar{
  width: 18px;
  margin: 0 5px;
  vertical-align: text-bottom;
}
img {
  vertical-align: middle;
}
a {
  color: inherit;
  text-decoration: none;
}
iframe {
  margin: 20px 0px 50px;
}
</style>
