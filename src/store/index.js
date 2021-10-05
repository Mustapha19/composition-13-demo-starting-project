import { createStore } from "vuex";
import USER_DATA from '../dummy-data.js';
const store = createStore({
 state() {
  return {
   users: USER_DATA,
   selectedUser: null,
   projectEnteredSearch: '',
   projectActiveSearch: '',
   userEnteredSearch: '',
   userActiveSearch: '',
  }
 },
 mutations: {
  setUser(state, payload) { state.selectedUser = state.users.find((usr) => usr.id === payload.id); },
  projectEnteredSearch(state, payload) { state.projectEnteredSearch = payload; },
  projectActiveSearch(state, payload) { state.projectActiveSearch = payload; },
  userEnteredSearch(state, payload) { state.userEnteredSearch = payload; },
  userActiveSearch(state, payload) { state.userActiveSearch = payload; },
 },
 actions: {
  selectUser(context, payload) { context.commit("setUser", payload); },
  projectEnteredSearch(context, payload) { context.commit("projectEnteredSearch", payload); },
  projectActiveSearch(context, payload) { context.commit("projectActiveSearch", payload); },
  userEnteredSearch(context, payload) { context.commit("userEnteredSearch", payload); },
  userActiveSearch(context, payload) { context.commit("userActiveSearch", payload); },

 },
 getters: {
  UserList(state) { return state.users; },
  getSelectedUser(state) { return state.selectedUser; },
  getProjectEnteredSearch(state) { return state.projectEnteredSearch },
  getProjectActiveSearch(state) { return state.projectActiveSearch },
  getUserEnteredSearch(state) { return state.userEnteredSearch },
  getUserActiveSearch(state) { return state.userActiveSearch },
 },
})
export default store;