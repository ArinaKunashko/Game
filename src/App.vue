
<template>
  <div>
    <header class="sticky-header">
      <div>
        <div class="text-h6 d-flex flex-row flex-nowrap align-center justify-space-around mb-5">
          <div class="mr-10">1 team</div>
          <div>2 team</div>
        </div>

        <div class="text-h6 d-flex flex-row flex-nowrap align-center justify-space-around mb-5">
          <div>{{ scores.team1 }}</div>
          <div >{{ scores.team2 }}</div>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

const scores = computed(() => store.getters.getScores);
</script>


<style scoped>
.sticky-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* Adjust the z-index as needed */
  background-color: #fff;
  /* Add a background color if necessary */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add a box shadow if desired */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

/* Add padding to the content to prevent it from being overlapped by the fixed header */
/* You may need to adjust the padding value based on your design */
body {
  padding-top: 64px;
  /* Adjust this value based on the height of your header */
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}</style>
