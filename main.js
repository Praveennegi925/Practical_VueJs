
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router.js'
import Locales from '@/localization.json'
import VeeValidate from 'vee-validate'
import { Constants } from '@/config/constants.js'
import VueMask from 'v-mask'
import VueLazyload from 'vue-lazyload'


// window.moment = require('moment');
window._ = require('lodash');

EventTarget.prototype.addEventListenerBase = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function(type, listener)
    {
      if(type=="beforeunload")
          return; //ignore attempts to add a beforeunload event
      this.addEventListenerBase(type, listener); //treat all other events normally
};

// Vue.use(VueAxios, axios)
Vue.use(Vuex);
// Interceptors
// import interceptorSetup from './interceptors/interceptor';
// interceptorSetup();
Vue.use(VeeValidate, { locale: Constants.defaultLanguage, dictionary: Constants.VeeValidateDictionary})
Vue.use(VueMask);
Vue.use(VueLazyload)


export const serverBus = new Vue();
