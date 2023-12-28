<template>
    <div class="width: 100%; height: 100%">
        <v-row justify="center" align="center" class="qq text-h6">
            <h1 class="ma-5">These are not games - everything is serious here</h1>
        </v-row>
        <v-item-group v-model="model"
            class="px-6 pt-2 pb-6 d-flex flex-row flex-wrap align-content-center justify-center align-items-center">
            <v-item v-for="n in contestsEnLength" :key="n">
                <template v-slot:default="{ toggle }">
                    <v-btn size="x-large" :icon="false" border height="70" variant="text" width="70"
                        @click="handleButtonClick(n, toggle)" class="ma-5 text-h4"
                        :class="{ buttonColor: isButtonClicked(n) }">
                        {{ n }}
                    </v-btn>
                </template>
            </v-item>
        </v-item-group>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const model = ref(null);

const contestsEnLength = computed(() => store.getters.getContestsEn.length);

const handleButtonClick = (competitionNumber, toggle) => {
    const clickedButtons = store.state.clickedButtons || [];
    if (!clickedButtons.includes(competitionNumber)) {
        clickedButtons.push(competitionNumber);
        store.commit('setClickedButtons', clickedButtons);
        router.push({ name: 'competition', params: { competitionNumber } });
        toggle();
    }
};

const isButtonClicked = (competitionNumber) => {
    const clickedButtons = store.state.clickedButtons || [];
    return clickedButtons.includes(competitionNumber);
};


</script>
  
<style scoped>
.buttonColor {
    background-color: green;
    color: white;
}

.qq {
    margin-top: 24px;
}

@media (max-width: 1000px) {
    .qq {
        margin-top: 130px;
        margin-bottom: 5px;
        padding-right: 5px;
        padding-left: 5px;

    }
    h1 {
        text-align: center;
    }
}
</style>
  