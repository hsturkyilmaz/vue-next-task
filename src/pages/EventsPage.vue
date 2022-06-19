<template>
  <div>EVENTS PAGE</div>
  <Search @SearchRequested="handleSearch"></Search>
  <p v-if="isLoading">Loading...</p>
  <Table
    :columns="columns"
    :rows="events"
    @ClickRequested="switchEventDetail"
  />
</template>
<script>
import Search from "../components/Search.vue";
import Table from "../components/Table.vue";
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
        { field: "locale", title: "Locale" },
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
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    switchEventDetail(id) {
      this.$router.push(`/event-detail/${id}`);
    },
  },
};
</script>
<style scoped>
</style>