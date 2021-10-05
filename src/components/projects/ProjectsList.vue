<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" id="projects" :search-term="projectEnteredSearch"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  computed: {
    projectActiveSearch(){return this.$store.getters.getProjectActiveSearch;},
    projectEnteredSearch(){return this.$store.getters.getProjectEnteredSearch;},
    hasProjects() {return this.user.projects.length>0;},
    hasAvailableProjects() {return this.availableProjects.length > 0;},
    availableProjects() {
      if (this.projectActiveSearch) {
        return this.user.projects.filter((prj) =>
          prj.title.toLowerCase().includes(this.projectActiveSearch.toLowerCase())
        );
      }
      return this.user.projects;
    },
  },
  watch: {
    projectEnteredSearch(val) {
      setTimeout(() => {
        if (val === this.projectEnteredSearch) {
        this.$store.dispatch("projectActiveSearch",val);
        }
      }, 500);
    },
    user() {
      // when the selected user change the projectsList change too
      this.$store.dispatch("projectEnteredSearch","");
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