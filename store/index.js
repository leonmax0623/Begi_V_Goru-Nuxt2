export const state = () => ({
  isAuth: false,
  user: null,
  isSidebarOpen: false
})

export const getters = {
  isAuth(state) {
    return state.isAuth
  },
 
  getUser(state) {
    return state.user
  },

  isSidebarOpen(state) {
    return state.isSidebarOpen
  }
}

export const actions = {
  setAuth({ commit }, token) {
    localStorage.setItem('token', token)
    commit('setAuth', !!token)
  }
}

export const mutations = {
  setAuth(state, payload) {
    state.isAuth = payload
  },

  logout(state) {
    localStorage.clear()
    state.isAuth = false
    state.user = null
  },

  setUser(state, payload) {
    state.user = payload
  },
  
  toggleSidebar(state, payload) {
    state.isSidebarOpen = payload
  }
}



// import { createStore } from "vuex"
// import axios from "axios"

// const store = createStore({
//   state: {
//     token: localStorage.getItem('token') || ''
//   },
//   actions: {
//     AUTH_LOGIN: ({ commit }, token) => {
//       localStorage.setItem('token', token)
//       axios.defaults.headers.common['Authorization'] = Bearer ${token}
//       commit('AUTH_TOKEN', token)
//     },
//     AUTH_LOGOUT: ({ commit }) => {
//       localStorage.clear()
//       axios.defaults.headers.common['Authorization'] = ''
//       commit('AUTH_TOKEN', '')
//     }
//   },
//   mutations: {
//     AUTH_TOKEN: (state, token) => { state.token = token }    
//   },
//   getters: {
//     isAuthenticated: state => !!state.token
//   }
// })