import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
    state: {
        count: 0
    }
});

new Vue({
    el: '#app',
    store,
    computed: {
        count() {
            return this.$store.state.count
        }
    }  
});