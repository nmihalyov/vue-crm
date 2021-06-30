import { createStore } from 'vuex';
import firebase from 'firebase/app';
import auth from './auth'
import info from './info'

export default createStore({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async fetchClients() {
      try {
        return (await firebase.database().ref(`/clients`).once('value')).val();
      } catch (e) {
      }
    },
    async fetchObjects() {
      try {
        return (await firebase.database().ref(`/objects`).once('value')).val();
      } catch (e) {
      }
    }
  },
  getters: {
    error: state => state.error
  },
  modules: {
    auth,
    info
  }
})
