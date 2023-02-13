<script setup>
import ArrowIcon from "@/icons/ArrowIcon.vue"
import { ref } from "vue";

const data = ref([
  {
    image: 'https://img.freepik.com/free-photo/old-wrinkled-hands-piano_181624-2113.jpg',
    title: 'COMPANY OVERVIEW',
    titleDescription: "At APG we understand the challenges faced by musicians in today's rapidly evolving music industry",
    descripion: "That's why we provide a comprehensive suite of services designed to help our clients succeed. Whether you're a seasoned pro or just starting out, we have the resources and expertise to help you achieve your goals.",
  },
  {
    image: 'https://img.freepik.com/free-photo/wedding-ring-bracelet_1303-11576.jpg?',
    title: 'APG TEAM',
    descripion: 'Our team of music industry veterans has years of experience in the business, and we use this expertise to help our clients navigate the complex landscape of music publishing. We offer a wide range of services, including copyright protection, licensing and royalty collection, marketing and promotion, and much more',
  },
  {
    image: 'https://img.freepik.com/free-photo/man-dancing-smoke-with-illuminating-light_23-2148791668.jpg',
    title: 'APG ROSTER AND SONG CATALOGUE',
    descripion: 'We are proud to work with a diverse range of musicians, from emerging artists to established names. Our mission is to help our clients reach their full potential, and we believe that the best way to do that is by providing the support, resources, and guidance they need to succeed. ',
  },
  {
    image: 'https://img.freepik.com/free-vector/glowing-shiny-musical-notes-background-design_1017-32856.jpg',
    title: 'APG Ethos',
    descripion: 'At APG we are committed to upholding the highest standards of integrity and professionalism. Our clients can always count on us to provide the best possible service, and we take pride in our reputation as one of the leading music publishing companies in the industry.',
    extraDescription: "If you're a musician looking to take your career to the next level, we would love to hear from you. Contact us today to learn more about our services and how we can help you achieve your musical dreams."
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
      mainImageSrc: 'https://img.freepik.com/free-vector/glowing-shiny-musical-notes-background-design_1017-32856.jpg'
    }
  },
  methods: {
  },
  created() {
    let self = this
    this.images = [
      {
        image: 'https://img.freepik.com/free-vector/glowing-shiny-musical-notes-background-design_1017-32856.jpg'
      },
      {
        image: 'https://img.freepik.com/free-photo/old-wrinkled-hands-piano_181624-2113.jpg'
      },
      {
        image: 'https://img.freepik.com/free-photo/wedding-ring-bracelet_1303-11576.jpg?'
      },
      {
        image: 'https://img.freepik.com/free-photo/man-dancing-smoke-with-illuminating-light_23-2148791668.jpg'
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
      <h2>AYIN PUBLISHING GROUP.....Where Music Meets Business   </h2>
      <p>Ayin Publishing Group (APG) is a music publishing company dedicated to supporting and empowering
the creative talents of songwriters and composers. With a passion for music and a commitment to
excellence, we have built a reputation as a trusted partner for some of the most talented musicians in
the industry</p>
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