<template>
  <div>EVENT DETAIL</div>

  <div v-if="isLoading">Loading...</div>

  <div>
    <p>{{ eventDetail.name ?? "" }}</p>
    <p>
      {{ eventDetail.dates.start.localDate ?? "" }}
    </p>
    <p>{{ eventDetail._embedded.venues[0].name ?? "" }}</p>
    <p>{{ eventDetail._embedded.venues[0].country.name ?? "" }}</p>
    <p v-if="eventDetail.priceRanges">
      {{
        `${eventDetail.priceRanges[0].min} - ${eventDetail.priceRanges[0].max} ${eventDetail.priceRanges[0].currency}`
      }}
    </p>
    <p>{{ eventDetail.dates.status.code }}</p>
    <button>
      <router-link to="/">Back</router-link>
    </button>
    <img :src="eventDetail.images[0].url" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "EventDetail",
  data() {
    return {
      isLoading: false,
      eventDetail: [],
    };
  },
  methods: {
    async getEventDetail(id) {
      this.isLoading = true;
      try {
        const response = await axios.get(
          `https://app.ticketmaster.com/discovery/v2/events/${id}.json`,
          {
            params: {
              apikey: "3tzBg3PBl12PnGMbbNAnRMKOdQDlAAJi",
            },
          }
        );
        this.eventDetail = response.data;
        console.log("detail: ", response);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    switchEventDetail(id) {
      this.$router.push(`/event-detail/${id}`);
    },
  },
  created: function () {
    this.getEventDetail(this.$route.params.id);
  },
};
</script>
<style scoped>
</style>