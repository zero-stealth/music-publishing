<script setup>
import ArrowIcon from "@/icons/ArrowIcon.vue"
import piano from "@/assets/piano.jpg";
import band from "@/assets/band.jpg";
import dry from "@/assets/dry.jpg";
import { ref } from "vue";

const data = ref([
  {
    image: piano,
    title: 'COMPANY OVERVIEW',
    titleDescription: 'Penguin Music Publishing is the world’s No. 1 music publishing company headquartered in Tanzania with a network all the country',
    descripion: 'With its songwriter-first mission, we provides best-in-class services on a global scale to its songwriters and catalogs while also leading the industry with its high-level synchronization operation and production music businesses.',
    extraDescription: 'Penguin Music Publishing is a part of Penguin’s suite of powerful entertainment brands, reflecting its identity as "A Creative Entertainment Company with a Solid Foundation of Technology"',
  },
  {
    image: band,
    title: 'COMPANY HISTORY',
    descripion: 'Sony/ATV was established in 1995 through a joint venture with Michael Jackson that brought together the original Sony Music Publishing with Jackson’s ATV Music. Jackson had acquired ATV Music, which owned the Northern Songs catalogue, in 1985. Northern Songs owned the rights to all the songs that John Lennon and Paul McCartney wrote during their time with the Beatles. In 2016, Sony acquired the Michael Jackson Estate’s 50% share of Sony/ATV making it a wholly owned Sony company.',
  },
  {
    image: piano,
    title: 'COMPANY ROSTER AND SONG CATALOGUE',
    descripion: 'We are home to the best songwriters like Jay Melody, Diamond Platnumz, Ali Kiba , Nahreel, Ray C ,Stoller, Leonard Cohen, Stevie Wonder, Michael Jackson and Rolling Stones, with musician and singers such as, Harmonize , Freddie_Mercury, Lady Jaydee, Calvin Harris, Daddy Yankee, Luke Bryan and classics like Barnaba Classic among many others',
  },
  {
    image: piano,
    title: 'Founder && ceo',
    descripion: 'Kelvin is Chairman & CEO of Penguin Music Publishing, the number one global music publisher. Since his appointment in April 2019, Platt’s inclusive leadership style has reshaped the corporate culture and created a powerful example for the music industry.',
  },

]);

const Animation = ref(false);

const addAnimation = () => {
  Animation.value = true;
}

</script>
<script>
export default {
  data() {
    return {
      images: [],
      mainImageSrc: band
    }
  },
  methods: {
  },
  created() {
    let self = this
    this.images = [
      {
        image: band
      },
      {
        image: piano
      },
      {
        image: dry
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Harmonize.jpg/220px-Harmonize.jpg'
      },
    ]

    setInterval(function () {
      self.mainImageSrc = self.images[Math.floor(Math.random() * self.images.length)].image;
    }, 5000);

  }
}
</script>
<template>

  <div class="abt-container" :style="{ 'backgroundImage': `url(${mainImageSrc})` }">
    <div class="info-section">
      <h2>AT Penguin PUBLISHING... the future is always being made </h2>
      <p>Sony Music Publishing celebrates the power of songwriting to connect cultures and bring people together. Our
        company ethos is to put songwriters at the forefront, honoring their vision, artistry and goals. We lift up our
        songwriters by supporting their careers, amplifying opportunities, fostering collaboration and defending their
        rights.</p>
    </div>
    <a class="arrow-down" href="#abt-us" @click="addAnimation" >
      <ArrowIcon class="arrow-icon-down" />
    </a>
  </div>
  <section class="section-abt"  v-for="({ image, title , descripion, titleDescription, extraDescription }, index) in data" :key="index">
    <div class="abt-us" id="abt-us" :class="Animation != false ? 'fadeInDown' : ''">
    <div class="abt-pic-container">
      <img :src="image" :alt="title" class="abt-image">
    </div>
    <div class="abt-us-info">
      <h2>{{ title }}</h2>
      <h3>{{ titleDescription  }}</h3>
      <p> {{ descripion }}</p>
      <p> {{ extraDescription }}</p>
    </div>
  </div>
  </section>
</template>
<style>
@import "@/style/abt.css";
</style>