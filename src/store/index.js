import Vue from 'vue';
import Vuex from 'vuex';
import toods from './modules/todos'

//load vuex
Vue.use(Vuex);

//create store

export default new Vuex.store({
    modules: {
        todos,
    }
});