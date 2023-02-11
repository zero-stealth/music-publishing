<script setup>
import youtubeIcon from "@/icons/youtubeIcon.vue";
import PlayIcon from "@/icons/PlayIcon.vue";
import PauseIcon from "@/icons/PauseIcon.vue";
import NextIcon from "@/icons/NextIcon.vue";
import PreviousIcon from "@/icons/PreviousIcon.vue";
import cover from "@/assets/cover.jpg";
import { ref } from "vue";

const coverImg = ref();
const isPlaying = ref(false);

coverImg.value = 'https://netstorage-tuko.akamaized.net/images/e267c703bfcf07a9.jpg?imwidth=720';


const play = () => {
    isPlaying.value = !isPlaying.value;
}


</script>
<template>
    <div class="player-container" :style="{ 'backgroundImage': `url(${coverImg})` }">
        <div class="cover" :style="{ 'backgroundImage': `url(${coverImg})` }">
            <div class="cover-info">
                <h3>Title</h3>
                <h2>The songs</h2>
            </div>
        </div>
        <div class="audio">
            <div class="player-section">
                <div class="audio-wrapper">
                    <div class="audio-info">
                        <span>Status</span>
                        <h4>song title</h4>
                    </div>
                    <div class="audio-controller">
                        <div class="previous-audio">
                            <PreviousIcon class="icon icon-previous" />
                        </div>
                        <div class="play-audio" @click="play">
                            <PauseIcon class="icon icon-pause" v-if="isPlaying == true" />
                            <PlayIcon class="icon icon-play-c" v-else />
                        </div>
                        <div class="next-audio">
                            <NextIcon class="icon icon-next" />
                        </div>
                    </div>
                    <div class="song-status">
                        <p> 02:23 <span>/05:30</span> </p>
                    </div>
                </div>
                <div class="audio-bar">
                    <span style="width: 70%;"></span>
                </div>
            </div>
            <div class="audio-player-info">
                <div class="inner-pa">
                    <div class="audio-title">
                        <h3>Featured song</h3>
                        <h4>Song name</h4>
                    </div>
                    <div class="audio-detail">
                        <p>ssss</p>
                    </div>
                    <div class="more-info">
                        <div class="info-m">
                            <span>Published in</span>
                            <h4>Feb</h4>
                        </div>
                        <div class="info-m">
                            <span>Published in</span>
                            <h4>Feb</h4>
                        </div>
                        <div class="info-m">
                            <span>Published in</span>
                            <h4>Feb</h4>
                        </div>
                    </div>
                    <button class="play-btn play-youtube">
                        <youtubeIcon class="icon icon-youtube" />
                       <span> Play on youtube</span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
@import "@/style/player.css";
</style>