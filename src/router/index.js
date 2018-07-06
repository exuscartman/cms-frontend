import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from '../components/IndexLayout'
import HomeView from '../pages/Home'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: IndexLayout,
      children: [
        {
          name: 'Home',
          path: '',
          component: HomeView
        }
      ]
    }
  ]
})
