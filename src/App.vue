<template>
  <!-- <a href="#/">Events Page</a> | <a href="#/event-detail">Event Detail</a> | -->
  <component :is="currentView" />
</template>

<script>
import EventsPage from "./components/EventsPage.vue";
import EventDetail from "./components/EventDetail.vue";

const routes = {
  "/": EventsPage,
  "/event-detail": EventDetail,
};

export default {
  name: "App",

  data() {
    return {
      currentPath: window.location.hash,
    };
  },

  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },

  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>
<style >
img {
  width: 300px;
}
</style>