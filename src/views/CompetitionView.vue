<template>
  <div class="container" style="margin-top: 150px;">
    <div class="d-flex flex-row flex-nowrap align-center justify-space-between mb-5" style="width: 100%;">
      <v-btn @click="redirectToSelection" target="_blank" color="green-darken-3">Go Back</v-btn>
      <ModalWindow @save-result="handleSaveResult" />
    </div>
    <CompetitionCard />
  </div>
</template>
  
  
<script setup>
import CompetitionCard from '@/components/CompetitionCard.vue';
import ModalWindow from '@/components/ModalWindow.vue';
import { ref, onMounted, watchEffect, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const competitionNumber = ref(null);

onMounted(() => {
  competitionNumber.value = parseInt(route.params.competitionNumber, 10);
});

const redirectToSelection = () => {
  router.go(-1);
};
</script>
  
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
  