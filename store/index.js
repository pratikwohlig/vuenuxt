import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie';
import axios from 'axios'

const cookieparser = process.server ? require('cookieparser') : undefined

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      auth: null
    }),
    mutations: {
      setAuth(state, auth) {
        state.auth = auth;
        Cookies.set('auth', auth, {
          expires: 1,
          httpOnly: true
        });
        // this.$cookies.set("auth", auth);
      },
      getAuth(state, auth) {
        // console.log(state,auth);
        return auth
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            auth = JSON.parse(parsed.auth);
            // console.log(localStorage.getItem("auth"));
            // if(process.server) {
            //   console.log(localStorage.getItem("auth"));
            //   if(window.localStorage.getItem("auth")!=auth)
            //     auth=null;
            // }
          } catch (err) {
            // No valid cookie found
          }
        }
        commit('setAuth', auth)
      },
      async logout({ commit, redirect }) {
        //await axios.post('/api/logout')
        Cookies.remove('auth');
        commit('setAuth', null);
        // return redirect('/login');
      }
    }
  })
}
export default createStore