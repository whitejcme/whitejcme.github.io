import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './components/bookPage/Welcome.vue';
import AboutMe from './components/bookPage/AboutMe.vue';
import Skills from './components/bookPage/Skills.vue';
import Projects from './components/bookPage/Projects.vue';
import Contact from './components/bookPage/Contact.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'Welcome',
          component: Welcome
        },
        {
          path: 'aboutme',
          name: 'AboutMe',
          component: AboutMe
        },
        {
          path: 'skills',
          name: 'Skills',
          component: Skills
        },
        {
          path: 'projects',
          name: 'Projects',
          component: Projects
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
