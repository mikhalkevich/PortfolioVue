<template>
  <div id="header">$</div>
  <div id="nav">
    <router-link to="/" data-about="Home page">Home</router-link> |
    <router-link to="/about" data-about="About page">About</router-link> |
    <router-link to="/users" data-about="User page with clients">Users</router-link> |
    <router-link to="/account" data-about="Page with modal">Account</router-link> |
    <router-link to="/time" data-about="Something more...">Time</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  margin: 30px auto;
}

.view {
  margin-bottom: 20px;
  button + button {
    margin-left: 6px;
  }
}
#header {
  text-align: center;
}
#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;

    color: #42b983;

    &.router-link-exact-active {
      color: #2c3e50;
      text-decoration: none;
    }
  }
}
.home {
  text-align: center;
}
</style>
<script>
import $ from 'jquery';
export default {
  name: "App",
  /*
  setup(){
     console.log($('a:last').text());
  },
  */
  mounted() {
    //console.log($('a:last').text());
    $('#nav a').mouseover(function(){
      var about = $(this).attr('data-about');
      $('#header').text(about);
    });
  }
}
</script>
