<template>
  <main>
    <user-list :users="activeUsers"></user-list>
    <projects-list :user="selectedUser"></projects-list>
  </main>
</template>

<script>
import UserList from './components/users/UserList.vue';
import ProjectsList from './components/projects/ProjectsList.vue';

export default {
  components: {
    UserList,
    ProjectsList,
  },
  computed:{
    activeUsers(){
      return this.$store.getters.UserList;
    },
    selectedUser(){
      return this.$store.getters.getSelectedUser;
    }

  },
  methods: {
    selectUser(uid) {
      this.selectedUser = this.activeUsers.find((usr) => usr.id === uid);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00446b;
  background-color: transparent;
  color: #02354d;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #eff9ff;
}

button.selected {
  background-color: #13496d;
  color: white;
}
</style>