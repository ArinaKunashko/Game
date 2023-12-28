<template>
  <div  class="ma-10">
    <v-card
      v-if="selectedCompetition"
      max-width="800" max-height="1000">
      <iframe max-width="800" max-height="400" min-height="300" :src="selectedCompetition.timestampHref"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <v-card-title class="text-h4 bg-green-lighten-5 py-4">{{ selectedCompetition.name }}</v-card-title>
      <v-card-subtitle class="pt-4">
        Competition Number {{ selectedCompetition.number }}
      </v-card-subtitle>

      <v-card-text>
        <div class="text-h5">{{ selectedCompetition.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn :href="selectedCompetition.timestampHref" target="_blank" color="green-darken-3" class="text-h5">Watch video</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const competitionNumber = computed(() => parseInt(route.params.competitionNumber, 10));

const selectedCompetition = computed(() =>
  store.getters.getContestsEn.find((competition) => competition.number === competitionNumber.value)
);
</script>

<style></style>
