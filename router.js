import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import NuxtTutorial from '@/components/Tutorial.vue'


Vue.use(Router)
export function createRouter() {
return new Router({
  mode: 'history',
  // base:companyUrl,
  routes: [
    /*-----routing for search Product------*/
    {
	      path: '/b2c',      
	      component: Welcome
    },
    {
	      path: '/index',      
	      component: Welcome
    },
    {
    	path:'/tutorial',
    	component:NuxtTutorial}
    
    ],
})
}