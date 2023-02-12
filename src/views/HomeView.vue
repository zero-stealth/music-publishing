<script setup>
import NavComponent from "@/components/NavComponent.vue";
import Player from "@/components/playerComponent.vue";
import Upcoming from "@/components/upcomingComponent.vue";
import background from "@/assets/background.jpg";
import Contact from "@/views/ContactView.vue";
import PlayIcon from "@/icons/PlayIcon.vue";
import audience from "@/assets/piano.jpg";
import Gallery from "./GalleryView.vue";
import piano from "@/assets/piano.jpg";
import Artist from "./ArtistView.vue";
import band from "@/assets/band.jpg";
import dry from "@/assets/dry.jpg";
import Album from "./AlbumView.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const license = () => {
  router.push({ name: "license" });
}


const sample = () => {
  // window.location = "https://www.youtube.com/watch?v=nZcf3oXfz5k";
  window.open(
  'https://www.youtube.com/watch?v=nZcf3oXfz5k',
  '_blank'
);

}
</script>
<script>
export default {
  data() {
    return {
      images: [],
      mainImageSrc: background
    }
  },
  methods: {
  },
  created() {
    let self = this
    this.images = [
      {
        image: background
      },
      {
        image: audience

      },
      {
        image: band
      },
      {
        image: piano
      },
      {
        image: dry
      },
    ]

    setInterval(function () {
      self.mainImageSrc = self.images[Math.floor(Math.random() * self.images.length)].image;
    }, 5000);

  }
}
</script>
<template>
  <div class="home-container" :style="{ 'backgroundImage': `url(${mainImageSrc})` }">
    <div class="header">
      <NavComponent />
    </div>
    <div class="home-wrapper">
      <h1>Penguin Chorus</h1>
      <h3><span> Publish or License </span> your music with us </h3>
      <p>We are home to the best songwriters like
        Jay Melody, Diamond Platnumz, Ali Kiba , Nahreel, Ray C ,Stoller, Leonard Cohen, Stevie Wonder, Michael Jackson and Rolling Stones, with musician and singers such as
         , Harmonize , Freddie_Mercury, Lady Jaydee, Calvin Harris, Daddy Yankee, Luke
        Bryan and classics like Barnaba Classic among many others</p>
      <div class="home-btn">
        <button class="play-btn btn-intro" @click="sample" >
          <PlayIcon class="icon icon-play"/>
          watch sample
        </button>
        <button class="play-btn btn-tickets" @click="license">
          Licensing
        </button>
      </div>
    </div>
  </div>
  <div class="p-ca">
    <Player />
  </div>
  <div>
    <Album />
  </div>
  <div>
    <Upcoming />
  </div>
  <div>
    <Gallery />
  </div>
  <div>
    <Artist />
  </div>
    <Contact />
</template>
<style>
@import "@/style/home.css";
</style>