import Vue from 'vue'
import Router from 'vue-router'
import IndexLayout from '../components/IndexLayout'
import HomeView from '../pages/Home'
import ErrorView from '../pages/Error'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Error',
      path: '/error/:errCode',
      component: ErrorView
    },
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
