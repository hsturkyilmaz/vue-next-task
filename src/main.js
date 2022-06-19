import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import EventsPage from "./pages/EventsPage.vue";
import EventDetail from "./pages/EventDetail.vue";
import './index.css'

const routes = [
    { path: "/", component: EventsPage },
    { path: "/event-detail/:id", component: EventDetail },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)

app.use(router)
app.mount('#app')
