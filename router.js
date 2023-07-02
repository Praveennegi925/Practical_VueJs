import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import Login from '@/components/Login.vue'
import userProfile from '@/components/user-profile.vue'

Vue.use(Router)
export function createRouter() {
return new Router({
  mode: 'history',
  // base:companyUrl,
  routes: [
    /*-----routing for search Product------*/
    {
	      path: '/',      
	      component: Welcome
    },

    {
    	path:'/Login',
    	component:Login
    },
    {
    	path:'/user-profile',
    	component:userProfile
    }

    ],
})
}