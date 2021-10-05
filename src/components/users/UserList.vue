<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search id="users" :search-term="userEnteredSearch"></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props: ['users'],
  data() {
    return {
      sorting: null,
    };
  },
  computed: {
    userActiveSearch() {
      return this.$store.getters.getUserActiveSearch;
    },
    userEnteredSearch() {
      return this.$store.getters.getUserEnteredSearch;
    },
    availableUsers() {
      let users = [];
      if (this.userActiveSearch) {
        users = this.users.filter((usr) =>
          usr.fullName
            .toLowerCase()
            .includes(this.userActiveSearch.toLowerCase())
        );
      } else if (this.users) {
        users = this.users;
      }
      return users;
    },
    displayedUsers() {
      if (!this.sorting) {
        return this.availableUsers;
      }
      return this.availableUsers.slice().sort((u1, u2) => {
        if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
          return 1;
        } else if (this.sorting === 'asc') {
          return -1;
        } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
          return -1;
        } else {
          return 1;
        }
      });
    },
  },
  methods: {
    sort(mode) {
      this.sorting = mode;
    },
  },
  watch: {
    userEnteredSearch(val) {
      setTimeout(() => {
        if (val === this.userEnteredSearch) {
          this.$store.dispatch('userActiveSearch', val);
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>