import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import {Validator} from 'vee-validate'

Vue.use(Vuex);

export const state = () => ({
    shopifyDetail:[]

});

export const mutations = {
    setShopifyDetail(state,shopifyDetail){
        state.shopifyDetail =shopifyDetail;
    },
     
    }

    export const actions = {
        
       
    }

    export const getters = {
        getShopifyDetail: state => state.shopifyDetail,
        
    }

    export const plugins = [createPersistedState()]

    const initialStateCopy = {
        shopifyDetail:[]
    }

  

