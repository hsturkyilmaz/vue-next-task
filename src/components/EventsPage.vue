<template>
  <div>EVENTS PAGE</div>
  <Search @SearchRequested="handleSearch"></Search>
  Loading: {{ isLoading }} <br />
  Events: {{ events }}
</template>
<script>
import Search from "./Search.vue";
import axios from "axios";

export default {
  name: "EventsPage",
  components: {
    Search,
  },
  data() {
    return {
      isLoading: true,
      events: [],
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
        console.log(response.data);
        this.events = response.data._embedded.events[0].name;
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