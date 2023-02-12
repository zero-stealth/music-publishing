<script setup>
import youtubeIcon from "@/icons/youtubeIcon.vue";
import PlayIcon from "@/icons/PlayIcon.vue";
import PauseIcon from "@/icons/PauseIcon.vue";
import NextIcon from "@/icons/NextIcon.vue";
import PreviousIcon from "@/icons/PreviousIcon.vue";
import cover from "@/assets/cover.jpg";
import { ref, watchEffect, computed } from "vue";

const status = ref();
const coverImg = ref();
const isPlaying = ref(false);

// coverImg.value = 'https://netstorage-tuko.akamaized.net/images/e267c703bfcf07a9.jpg?imwidth=720';


const songs = ref([
    {
        path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/3.mp3',
        title: 'Powerless',
        Status: 'playing',
        artist: 'Linkin Park',
        publish: 'JAN',
        Year: '2020',
        company: 'Penguin',
        about: 'Powerless by linkin park is awesome',
        cover: "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
    },
    {
        path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/4.mp3',
        title: 'Seni Dert Etmeler',
        artist: 'Madrigal',
        Status: 'playing',
        publish: 'DEC',
        Year: '2019',
        company: 'Penguin',
        about: 'A classical master piece',
        cover: "https://wallpapercave.com/wp/wp11716760.png",
    },
    {
        path: 'https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/5.mp3',
        title: 'Ederlezi',
        artist: 'Solomun',
        Status: 'playing',
        publish: 'MARCH',
        Year: '2018',
        company: 'Penguin',
        about: 'A heritage of beauty',
        cover: "https://m.media-amazon.com/images/I/616t0841uvL._SS500_.jpg",
    },

]);

const length = ref(0);
const songIndex = ref(0);
const currentSong = ref('https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/3.mp3');

//get info of the song playing
const playingSong = computed(() => {
    return songs.value.filter((song) => song.path.includes(currentSong.value));
});

coverImg.value = playingSong.value[0].cover;
console.log(playingSong.value[0])
let audio = new Audio(currentSong.value);


// toggle play and pause
const play = () => {
    isPlaying.value = !isPlaying.value;
    switch (isPlaying.value) {
        case false:
            audio.pause();
            break;
        case true:
            audio.play();
            break;
        default:
            break;
    }
}



const next = () => {
    audio.pause();
    currentSong.value = songs.value[songIndex.value + 1].path;
    audio = new Audio(currentSong.value);
    isPlaying.value = true;
    audio.play();
    songIndex.value++;
    console.log(songIndex.value)

    coverImg.value = playingSong.value[0].cover

}

const prev = () => {
    audio.pause();
    currentSong.value = songs.value[songIndex.value - 1].path;
    audio = new Audio(currentSong.value);
    isPlaying.value = true;
    audio.play();
    songIndex.value -= 1;
    coverImg.value = playingSong.value[0].cover


}



watchEffect(() => {
    switch (isPlaying.value) {
        case true:
            status.value = playingSong.value[0].Status;
            length.value = 100; 
            break;
        case false:
            status.value = 'paused';
            length.value = length.value; 
            break;

        default:
            break;
    }

})



</script>
<template>
    <div class="player-container" :style="{ 'backgroundImage': `url(${coverImg})` }">
        <div class="cover" :style="{ 'backgroundImage': `url(${coverImg})` }">
            <div class="cover-info" v-for="({ artist, title }, index) in playingSong " :key="index">
                <h3>{{ artist }}</h3>
                <h2>{{ title }}</h2>
            </div>
        </div>
        <div class="audio" v-for="({ title, about, publish, Year, company }, index) in playingSong " :key="index">
            <div class="player-section">
                <div class="audio-wrapper">
                    <div class="audio-info">
                        <span> Status </span>
                        <h4>{{ status }}</h4>
                    </div>
                    <div class="audio-controller">
                        <div class="previous-audio"  @click="prev">
                            <PreviousIcon class="icon icon-previous" />
                        </div>
                        <div class="play-audio" @click="play">
                            <PauseIcon class="icon icon-pause" v-if="isPlaying == true" />
                            <PlayIcon class="icon icon-play-c" v-else />
                        </div>
                        <div class="next-audio" @click="next">
                            <NextIcon class="icon icon-next" />
                        </div>
                    </div>
                    <div class="song-status">
                        <p> 00:00 <span>/05:30</span> </p>
                    </div>
                </div>
                <div class="audio-bar">
                    <span :style="{ width: `${length}%` }"></span>
                </div>
            </div>
            <div class="audio-player-info">
                <div class="inner-pa">
                    <div class="audio-title">
                        <h3>Featured song</h3>
                        <h4>{{ title }}</h4>
                    </div>
                    <div class="audio-detail">
                        <p>{{ about }}</p>
                    </div>
                    <div class="more-info">
                        <div class="info-m">
                            <span>Published in</span>
                            <h4>{{ publish }}</h4>
                        </div>
                        <div class="info-m">
                            <span>Year</span>
                            <h4>{{ Year }}</h4>
                        </div>
                        <div class="info-m">
                            <span>By </span>
                            <h4>{{ company }}</h4>
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