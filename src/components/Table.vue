<template>
  <div v-if="rows.length > 0">
    <table id="example" class="capitalize" style="width: 100%">
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="border w-48 h-12"
          >
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in displayedRows" :key="index">
          <td
            v-for="(column, index) in columns"
            :key="index"
            class="border w-48 h-12"
          >
            {{ row[column.field] }}
          </td>

          <td>
            <button
              class="p-2 w-32 border-r-2 hover:bg-sky-100"
              @click="handleClick(row.id)"
            >
              Show Detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div>
      <p>Page {{ page }}</p>
      <button class="p-2 w-12" v-if="page != 1" @click="page--">⏪</button>
      <button
        class="p-2 w-12 border hover:bg-sky-100"
        @click="page = pageNumber"
        v-for="pageNumber in pages"
        :key="pageNumber"
      >
        {{ pageNumber }}
      </button>
      <button class="p-2 w-12" v-if="page < pages.length" @click="page++">
        ⏩
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Table",
  props: ["rows", "columns"],
  data() {
    return {
      page: 1,
      perPage: 8,
      pages: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.rows.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    paginate(rows) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return rows.slice(from, to);
    },

    handleClick(id) {
      this.$emit("ClickRequested", id);
    },
  },
  watch: {
    rows() {
      this.pages = [];
      this.setPages();
    },
  },

  computed: {
    displayedRows() {
      return this.paginate(this.rows);
    },
  },
};
</script>
<style scoped>
</style>