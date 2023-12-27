<template>
  <div class="container" style="margin-top: 160px;">
    <div class="d-flex flex-row flex-nowrap align-center justify-space-between mb-5" style="width: 100%;">
      <a @click="redirectToSelection" class="text-h6 row-pointer text-green-darken-4" style="border-bottom: 1px solid;">Go Back</a>
      <ModalWindow />
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
.row-pointer:hover {
  cursor: pointer;
  background-color: transparent !important;
}
</style>
  