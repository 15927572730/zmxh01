<template>
<!--  <div class="hello">-->
<!--    <h1>{{ msg }}</h1>-->
<!--    <p>-->
<!--      For a guide and recipes on how to configure / customize this project,<br>-->
<!--      check out the-->
<!--      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.-->
<!--    </p>-->
<!--    <h3>Installed CLI Plugins</h3>-->
<!--    <ul>-->
<!--      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>-->
<!--      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>-->
<!--    </ul>-->
<!--    <h3>Essential Links</h3>-->
<!--    <ul>-->
<!--      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>-->
<!--      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>-->
<!--      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>-->
<!--      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>-->
<!--      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>-->
<!--    </ul>-->
<!--    <h3>Ecosystem</h3>-->
<!--    <ul>-->
<!--      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>-->
<!--      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>-->
<!--      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>-->
<!--      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>-->
<!--      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>-->
<!--    </ul>-->
<!--  </div>-->
<!--  <div>111</div>-->
  <div class="container">
    <img class="image" src="../images/01.png" alt="Image 1">
    <img class="image" src="../images/01_1.png" alt="Image 2">
    <img class="image" src="../images/02.png" alt="Image 3">
    <img class="image" src="../images/02_2.png" alt="Image 4">
    <img class="image" src="../images/03.png" alt="Image 5">
    <img class="image" src="../images/03_3.png" alt="Image 6">
    <img class="image" src="../images/04.png" alt="Image 7">
    <img class="image" src="../images/04_4.png" alt="Image 8">
    <img class="image" src="../images/05.png" alt="Image 9">
    <img class="image" src="../images/05_5.png" alt="Image 10">
    <img class="image" src="../images/06.png" alt="Image 11">
    <img class="image" src="../images/06_6.png" alt="Image 12">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image {
  width: 30%;
  margin-bottom: 20px;
}
</style>
