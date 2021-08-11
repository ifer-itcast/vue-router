<template>
  <div>
    <div>
      <router-link to="/user?id=zs">User zs</router-link>
      &nbsp;&nbsp;
      <router-link to="/user?id=ls">User ls</router-link>
      &nbsp;&nbsp;
      <router-link to="/news">News</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
