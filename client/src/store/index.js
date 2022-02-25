import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coordinates: [],
    histories: [],
  },
  getters: {},
  mutations: {
    SET_COORDINATES(state, payload) {
      state.coordinates = payload;
    },
    SET_HISTORIES(state, payload) {
      state.histories = payload;
    },
  },
  actions: {
    getSearch(context, { name }) {
      console.log(name);
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/search/place?location=${name}`, {
            headers: { access_token: localStorage.getItem("access_token") },
          })
          .then((resp) => {
            console.log(resp.data);
            context.commit("SET_COORDINATES", resp.data);
            resolve();
          })
          .catch((err) => {
            reject();
            console.log(err);
          });
      });
    },
    postLogin(context, payload) {
      console.log(payload);
      return axios.post("http://localhost:3000/user/login", payload);
    },
    postRegister(context, payload) {
      return axios.post("http://localhost:3000/user/register", payload);
    },
    getHistories(context) {
      axios
        .get("http://localhost:3000/history", {
          headers: { access_token: localStorage.getItem("access_token") },
        })
        .then((resp) => {
          console.log(resp.data);
          context.commit("SET_HISTORIES", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
