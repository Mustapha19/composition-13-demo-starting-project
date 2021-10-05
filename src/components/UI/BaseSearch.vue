<template>
  <form>
    <input
      type="search"
      @input="search"
      :value="searchTerm"
      placeholder="Filter items"
    />
  </form>
</template>

<script>
export default {
  props: ['searchTerm', 'id'],
  methods: {
    search(event) {
      if (this.id === 'projects')
        this.$store.dispatch('projectEnteredSearch', event.target.value);
      else this.$store.dispatch('userEnteredSearch', event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00446b;
  background-color: #eef6ff;
}
</style>