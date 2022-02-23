import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coordinates: [],
  },
  getters: {},
  mutations: {
    SET_COORDINATES(state, payload) {
      state.coordinates = payload;
    },
  },
  actions: {
    getSearch(context, { name }) {
      // return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/search/place?location=${name}`)
        .then((resp) => {
          console.log(resp.data);
          context.commit("SET_COORDINATES", resp.data);
          // resolve();
        })
        .catch((err) => {
          // reject();
          console.log(err);
        });
      // });
    },
  },
  modules: {},
});
