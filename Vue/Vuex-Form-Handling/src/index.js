import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        message: 'Hello Vuex'
    },
    mutations: {
        updateMessage (state, message) {
            state.message = message
        }
    }
})

import { mapState } from 'vaux'

new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: {
        message: {
            get () {
                return this.$store.state.message
            },
            set (value) {
                this.$store.commit('updatedMessage', value)
            }
        }
    },
    methods: {
        updateMessage (e) {
            this.$store.commit('updatedMessage', e.target.value)
        }
    }
});