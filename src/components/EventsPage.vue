<template>
  <div>EVENTS PAGE</div>
  <Search @SearchRequested="handleSearch"></Search>
  <p v-if="isLoading">Loading...</p>
  <Table :columns="columns" :rows="events"></Table>
</template>
<script>
import Search from "./Search.vue";
import Table from "./Table.vue";
import axios from "axios";

export default {
  name: "EventsPage",
  components: {
    Search,
    Table,
  },
  data() {
    return {
      isLoading: false,
      events: [],
      columns: [
        { field: "name", title: "Name" },
        { field: "type", title: "Type" },
        { field: "id", title: "Event ID" },
        { field: "date", title: "Date" },
        // { field: "address", title: "Address" },
      ],
    };
  },
  methods: {
    async handleSearch(query) {
      this.events = [];
      this.isLoading = true;
      try {
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events.json`,
          {
            params: {
              keyword: query,
              apikey: "3tzBg3PBl12PnGMbbNAnRMKOdQDlAAJi",
            },
          }
        );
        this.events = response.data._embedded.events;
        console.log("events: ", this.events);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
</style>