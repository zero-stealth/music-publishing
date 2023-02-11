<script setup>
import facebookIcon from "../icons/fbIcon.vue";
import twitterIcon from "../icons/twitterIcon.vue";
import instagramIcon from "../icons/instagramIcon.vue";
import youtubeIcon from "../icons/youtubeIcon.vue";


const openFacebook = () => {
    window.location.href = "";

}


const openYoutube = () => {
    window.location.href = "";

}


const openTwitter = () => {
    window.location.href = "";

}

const openInstagram = () => {
    window.location.href = "";

}
</script>
<template>
<div class="social-container">
    <button class="btn-s" @click="openFacebook">
        <facebookIcon class="icon icon-facebook"/>
    </button>
    <button class="btn-s" @click="openTwitter">
        <twitterIcon class="icon icon-twitter"/>
    </button>
    <button class="btn-s" @click="openInstagram">
        <instagramIcon class="icon icon-instagram"/>
    </button>
    <button class="btn-s" @click="openYoutube">
        <youtubeIcon  class="icon icon-youtube"/>
    </button>
</div>
</template>
<style>
@import "@/style/social.css"
</style>
