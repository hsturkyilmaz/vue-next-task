<template>
  <button class="p-2 w-48 border hover:bg-sky-100">
    <router-link to="/">Back</router-link>
  </button>
  <div class="my-16 text-5xl">EVENT DETAIL</div>

  <div v-if="isLoading">Loading...</div>

  <div class="text-xl mb-16">
    <p>{{ eventDetail.name ?? "" }}</p>
    <p>
      {{ eventDetail.dates.start.localDate ?? "" }}
    </p>
    <p>{{ eventDetail._embedded?.venues[0].name ?? "" }}</p>
    <p>{{ eventDetail._embedded?.venues[0].country.name ?? "" }}</p>
    <p v-if="eventDetail.priceRanges">
      {{
        `${eventDetail.priceRanges[0].min} - ${eventDetail.priceRanges[0].max} ${eventDetail.priceRanges[0].currency}`
      }}
    </p>
    <p class="capitalize">{{ eventDetail.dates.status.code ?? "" }}</p>
  </div>
  <img :src="eventDetail.images[0].url" />
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