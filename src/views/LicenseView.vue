<script setup>
import { ref } from "vue";
import ExitIcon from "@/icons/ExitIcon.vue"
import Form from "@/components/FormComponent.vue";

const openForm = ref(false);
const displayImage = ref("https://img.freepik.com/free-vector/golden-music-speaker-with-sound-notes-background_1017-36829.jpg")

const showForm = () => {
  openForm.value = !openForm.value;
};

const Images = ref([
  {
    title: "",
    image: "https://img.freepik.com/free-vector/golden-music-speaker-with-sound-notes-background_1017-36829.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/golden-music-speaker-with-sound-notes-background_1017-36829.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/golden-music-speaker-with-sound-notes-background_1017-36829.jpg"
  },
  {
    title: "",
    image: "https://img.freepik.com/free-vector/golden-music-speaker-with-sound-notes-background_1017-36829.jpg"
  }

])

const updateImage = (image) => {
  displayImage.value = image;
};

</script>
<template>
  <div class="license-container">
    <div class="license-wrapper">
      <div class="license-video">
        <div class="banner-img" :style="{ 'backgroundImage': `url(${displayImage})` }">
        </div>
      </div>
      <div class="license-pic">
        <div class="inner-license" v-for="({ title, image }, index) in Images" :key="index">
          <img :src="image" :alt="title" class="img-license" @click="updateImage(image)">
        </div>
      </div>
    </div>
    <div class="license-info">
      <div class="info-p">
        <h3>With an experienced, award winning sync team and a catalogue of legendary songs, we’re sure to have the
          right
          music for your commercial, film, trailer, video game, TV show, or any other project that requires that perfect
          song.</h3>
        <p>Working with some of the most iconic songs of all time, as well as the best new talent writing and recording
          today, we have unparalleled access to the very best music from any era and in any genre. Just browse through
          our
          website, or contact us and let our team of experienced music supervisors help you discover the right song for
          your next project. If you already know what you’re after, then just email us on the link below. Creative, FAST
          and innovative, we make music licensing as easy as it should be.</p>
      </div>
      <div class="contact-info">
        <div class="info-c">
          <h2>Contact us</h2>
          <h3> +255 685 977 148</h3>
          <h3>info@ayin.africa </h3>
        </div>

      </div>
    </div>
    <div class="license-how">
      <h2>How to license your music</h2>
      <ul>
        <li>
          <p>
            If you would like to license one of our songs, please fill out the INQUIRY FORM below letting us know the
            basic facts – including your production type (film placement, online advertising, etc.), the name of the
            requested composition and songwriter(s), and the length of the term you need. Someone from our creative sync
            team will then be in touch with you to go into greater detail and negotiate a fee for the usage you require.
          </p>
        </li>
        <li>
          <p>
            If you have a production that needs music but you are unsure as to what song you would like to use, please
            get in touch with our team to arrange for a custom music search that is tailored to fit your specific
            creative needs and budget.
          </p>
        </li>
        <li>
          <p>
            Also, please note that Sony Music Publishing represents the Publishing Rights for our compositions, however
            there may be multiple publishers on a song, and Master Rights to license particular recordings of our songs
            may also be required. For a fast and easy option, we have a large selection of songs where we control 100%
            of the Publishing as well as the Master Rights, so let us know if that is of interest and we can deliver
            those options to you for One-Stop clearance.
          </p>
        </li>
      </ul>
      <div class="btn-license">
        <button class="up-btn btn-watch " @click="showForm">
          Licensing
        </button>
      </div>
    </div>
  </div>
  <div class="out-world" v-show="openForm != false">
    <div class="exit-door" @click="showForm">
      <ExitIcon class="icon-exit-door"/>
    </div>
    <Form />
  </div>
</template>
<style>
@import "@/style/License.css";
</style>
