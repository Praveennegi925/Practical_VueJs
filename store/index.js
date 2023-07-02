import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import {Validator} from 'vee-validate'

Vue.use(Vuex);

export const state = () => ({
   userData:[],
   userProfileData:[]

});

   export const mutations = {
        setUserData(state,payload){
          state.userData=payload;
        },
        setUserProfileData(state,payload){
            state.userProfileData=payload;
          }
    }


    export const getters = {
        getUserData: state => state.userData,
        getUserProfileData: state => state.userProfileData
    }

    export const plugins = [createPersistedState()]

    const initialStateCopy = {
        userData:[],
        userProfileData:[]
    }

  

