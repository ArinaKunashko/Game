<template>
    <div class="text-center">
        <v-btn color="indigo-darken-3" @click="dialog = true" size="large">
            Start
        </v-btn>
        <v-dialog v-model="dialog" max-width="1000">
            <v-card>
                <v-card-text>
                    <div class="text-h1 d-flex flex-row flex-nowrap align-center justify-center mb-5 text-indigo-darken-3">
                        <span>{{ timer.minutes }}</span>:<span>{{ timer.seconds }}</span>
                    </div>
                </v-card-text>
                <v-card-actions
                    style="display: flex !important; flex-direction: row !important; flex-wrap: wrap !important; align-content: center; justify-content: center !important; align-items: center !important;">
                    <v-btn color="indigo-darken-3" size="x-large" @click="startTimer">Start</v-btn>
                    <v-btn color="indigo-darken-3" size="x-large" @click="pauseTimer">Pause</v-btn>
                    <v-btn color="indigo-darken-3" size="x-large" @click="resumeTimer">Resume</v-btn>
                    <v-btn color="indigo-darken-3" size="x-large" @click="restartOne">Restart</v-btn>
                </v-card-actions>
                <v-card-title
                    class="text-h4 d-flex flex-row flex-nowrap align-center justify-center ma-5 text-green-darken-4">Results</v-card-title>
                <v-card-text>
                    <v-tabs fixed-tabs class="mb-5" bg-color="transparent" color="green-darken-4" grow>
                        <v-tab v-model="teamName" @click="selectTeam(1)">Snegovichky</v-tab>
                        <v-tab v-model="teamName" @click="selectTeam(2)">Snowflakes</v-tab>
                    </v-tabs>

                    <v-tabs fixed-tabs bg-color="transparent" color="green-darken-4" grow>
                        <v-tab v-model="resultType" @click="selectResult('victory')">Victory</v-tab>
                        <v-tab v-model="resultType" @click="selectResult('loss')">Loss</v-tab>
                    </v-tabs>
                </v-card-text>
                <v-card-actions class="ma-3 justify-center ">
                    <v-btn color="green-darken-4" size="x-large" @click="saveResult && restartOne">Save</v-btn>
                    <v-btn color="green-darken-4" size="x-large" @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <audio hidden="true" ref="audioEnd" id="audioEnd">
            <source src="../assets/gameOver.mp3" type="audio/mpeg">
        </audio>
        <audio hidden="true" ref="audioTimer" id="audioTimer">
            <source src="../assets/clock-ticking-60.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';


const dialog = ref(false)
const audioEnd = ref(null)
const audioTimer = ref(null)


const selectedTeam = ref(1)
const resultType = ref('victory')

const time = new Date();
time.setSeconds(time.getSeconds() + 60); 
const timer = useTimer(time, false);

const startTimer = () => {
    audioTimer?.value?.play();
    timer.start();
};

const pauseTimer = () => {
    audioTimer?.value?.pause();
    timer.pause();

};

const resumeTimer = () => {
    audioTimer?.value?.play();
    timer.resume();
};

const restartOne = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    timer.restart(time, false);
};

const selectTeam = (team) => {
    selectedTeam.value = team
    console.log("selectedTeam.value", selectedTeam.value)
}
const selectResult = (type) => {
    resultType.value = type;
    console.log("resultType.value", resultType.value)
}

const teamName = ref('');
const resultForm = ref(false);

const openResultForm = () => {
    resultForm.value = true;
};

const closeDialog = () => {
    dialog.value = false;
    pauseTimer();
};


const store = useStore();

const saveResult = async () => {
    const resultData = {
        team: selectedTeam.value,
        result: resultType.value,
    };
    console.log('resultData:', resultData);

    try {
        await store.dispatch('updateScores', resultData);
        console.log('Scores updated successfully!');
    } catch (error) {
        console.error('Error updating scores:', error);
    }

    dialog.value = false;
};

onMounted(() => {
    // Watch the timer value for changes
    watchEffect(async () => {
    if(timer.isExpired.value) {
        const audioElementEnd = document.getElementById('audioEnd');
        console.log(audioElementEnd);
        audioEnd?.value?.play();
        audioTimer?.value?.pause();
    }
  })
});

</script>