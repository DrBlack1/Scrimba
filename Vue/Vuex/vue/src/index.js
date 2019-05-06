import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
    state: {
        count: 0
    }
});

import { mapState } from 'vaux'

new Vue({
    el: '#app',
    store,
    data() {
        return {
            localCount: 4
        }
    },
    computed: mapState([
        'count'
    ])
});


// {
//     count: state => state.count,
//     countAlias: 'count',
//     countPlausLocalState (state) {
//         return state.count + this.localCount
//     }
// }