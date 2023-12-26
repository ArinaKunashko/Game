<template>
    <div class="text-center">
        <v-btn color="indigo-darken-3" @click="dialog = true">
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
                        <v-tab v-model="teamName" @click="selectTeam(1)">1 team</v-tab>
                        <v-tab v-model="teamName" @click="selectTeam(2)">2 team</v-tab>
                    </v-tabs>

                    <v-tabs fixed-tabs bg-color="transparent" color="green-darken-4" grow>
                        <v-tab v-model="resultType" @click="selectResult('victory')">Victory</v-tab>
                        <v-tab v-model="resultType" @click="selectResult('loss')">Loss</v-tab>
                    </v-tabs>
                </v-card-text>
                <v-card-actions class="ma-3 justify-center ">
                    <v-btn color="green-darken-4" size="x-large" @click="saveResult">Save</v-btn>
                    <v-btn color="green-darken-4" size="x-large" @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <audio id="audio" src="@/assets/gameOver.mp3" v-if="timer.seconds === 0 && timer.minutes === 0"></audio>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';


const dialog = ref(false)

const timer = ref(useTimer(autoStart));

const audioElement = document.getElementById('audio');

const selectedTeam = ref(1)
const resultType = ref('victory')

const autoStart = false;
const time = new Date();
time.setSeconds(time.getSeconds() + 60);

const startTimer = () => {
    const audioElement = document.getElementById('audio');
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    timer.value.restart(time);
    audioElement.play();

};

const pauseTimer = () => {
    timer.value.pause();
};

const resumeTimer = () => {
    timer.value.resume();
};

const restartOne = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);
    timer.value.restart(time);
};

const selectTeam = (team) => {
    selectedTeam.value = team
    console.log("selectedTeam.value", selectedTeam.value)
}
const selectResult = (type) => {
    resultType.value = type;
    console.log("resultType.value", resultType.value)
}
const onAudioEnded = () => {
    console.warn('Timer ended, play sound');
    audioElement.play();
};

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
    watchEffect(async () => {
        if (timer.isExpired.value) {
            console.warn('IsExpired');
            audioElement.play();
            openResultForm();
        }
    });
});
</script>