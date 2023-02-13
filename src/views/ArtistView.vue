<script setup>
import QuoteIcon from '../icons/QuoteIcon.vue';
import { ref } from 'vue';

const show = ref(false);

const data = ref([
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/beautiful-music-sound-golden-notes-background_1017-32310.jpg"
  }
])



const showMore = () => {
  show.value = !show.value;
}

</script>
<template>
  <div class="artist-container">
    <div class="artist-title">
      <span>Artists</span>
      <p>Ayin publishing group works with artist
        from East Africa on securing copyright protection, licensing the use of the managed
        artist's music in various media, and collecting royales on behalf of the copyright
        owners. We constantly try to evolve and update our roster so as to reach as many artist.
        A full update of the current roster is under review and will be updated as soon as
        possible.</p>
    </div>
    <div class="gallery-layout" :class="show == true ? 'show-all-gallery' : 'show-less-gallery'">
      <div v-for="({ title, image }, index) in data" :key="index">
        <img :src="image" class="img-responsive" :alt="title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="show-more" @click="showMore" :class="show == true ? 'hide' : ''">
      <span>See more gallery</span>
    </div>
    <div class="show-more" @click="showMore" :class="show == false ? 'hide' : ''">
      <span>Hide gallery</span>
    </div>
    <div class="inspiration-q">
      <QuoteIcon class="icon-quote" />
      <h3>Music is the universal language of mankind</h3>
      <span> ― Henry Wadsworth Longfellow</span>
    </div>
  </div>
</template>
<style>
@import "@/style/artist.css";
</style>

