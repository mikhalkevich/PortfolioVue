<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/account">Account</router-link> |
    <router-link to="/time">Time</router-link>
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    color: #42b983;

    &.router-link-exact-active {
      color: #2c3e50;
      text-decoration: none;
    }
  }
}
</style>
