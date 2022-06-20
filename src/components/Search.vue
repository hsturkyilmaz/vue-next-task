<template>
  <div class="mb-16">
    <input
      class="p-2 w-96 border border-sky-300"
      type="text"
      v-model="query"
      @keypress.enter="handleSearch"
    />
    <button class="p-2 w-48 border hover:bg-sky-100" @click="handleSearch">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("SearchRequested", this.query);
    },
  },
};
</script>

<style scoped>
</style>  