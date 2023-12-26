// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CompetitionView from '../views/CompetitionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/competition/:competitionNumber', // Define the route with the competitionNumber parameter
      name: 'competition',
      component: CompetitionView,
      props: true, // This allows passing route params as props to the component
    },
  ],
});

export default router;
