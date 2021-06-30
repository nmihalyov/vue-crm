import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/Loader'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyDKew6IlX7Ugl9vYJHzw1eyueJPunhwKOM",
  authDomain: "vue-crm-2660f.firebaseapp.com",
  projectId: "vue-crm-2660f",
  storageBucket: "vue-crm-2660f.appspot.com",
  messagingSenderId: "371669144610",
  appId: "1:371669144610:web:e18522a88c6d62f496a67b",
  measurementId: "G-T0HQZ4J8NH"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).use(messagePlugin).component('Loader', Loader).mount('#app')
  }
})