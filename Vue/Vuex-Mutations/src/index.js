import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vues.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        incrementBy (state, payload) {
            state.count += payload.amount
        }
    }
});

import { mapState, mapMutations } from 'vuex'

new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: mapState([
        'count'
    ]),
    methods: mapMutations([
        'increment',
        'incrementBy'
    ])
});