import Vue from 'vue';
import VueRouter from 'vue-router';
import User from '@/components/User.vue';
import News from '@/components/News.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/user',
      component: User,
      beforeEnter(to, from, next) {
        // !#2
        console.log('#2 beforeEnter');
        next();
      }
    },
    {
      path: '/news',
      component: News
    }
  ]
});

// 从 News 进到 User
router.beforeEach((to, from, next) => {
  // !#1
  console.log('#1 beforeEach');
  next();
});

router.beforeResolve((to, from, next) => {
  // !#4
  console.log('#4 beforeResolve');
  next();
});

router.afterEach(() => {
  // !#5
  console.log('#5 afterEach');
});

export default router;
