<template>
  <div>User: {{ $route.query.id }}</div>
</template>

<script>
export default {
  name: 'User',
  beforeRouteLeave(to, from, next) {
    // !离开时
    console.log('beforeRouteLeave');
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // !参数发生变化时
    console.log('beforeRouteUpdate');
    next();
  },
  beforeCreate() {
    // !#6
    console.log('#6 beforeCreate');
  },
  created() {
    // !#7
    console.log('#7 created');
  },
  beforeMount() {
    // !#8
    console.log('#8 beforeMount');
  },
  mounted() {
    // !#10
    console.log('#10 mounted');
  },
  beforeRouteEnter(to, from, next) {
    // !#3
    console.log('#3 beforeRouteEnter');
    // 这里不能访问 this
    next((cmp) => {
      // 可以通过这里访问~
      // !#9
      console.log('#9 beforeRouteEnter next', cmp);
    });
  }
};
</script>
