<template>
  <div class="search">
    <input type="text" v-model="query" @keypress.enter="handleSearch" />
    <button @click="handleSearch">Search</button>
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
.search input {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
}

.search button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #ccc;
  color: #fff;
  border-radius: 5px;
}
</style>  