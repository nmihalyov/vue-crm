import { createStore } from 'vuex';
import firebase from 'firebase/app';
import auth from './auth'
import info from './info'

export default createStore({
  state: {
    error: null,
    locale: localStorage.getItem('vue-crm:locale') || 'ru-Ru'
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
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
    async fetchProperties() {
      try {
        return (await firebase.database().ref(`/properties`).once('value')).val();
      } catch (e) {}
    },
    changeLocale({ commit }, locale) {
      localStorage.setItem('vue-crm:locale', locale);
      commit('setLocale', locale);
    }
  },
  getters: {
    error: state => state.error,
    locale: state => state.locale
  },
  modules: {
    auth,
    info
  }
})
