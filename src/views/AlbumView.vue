<script setup>
import ArrowIcon from "@/icons/ArrowIcon.vue";
import { ref } from "vue";

const show = ref(false);


const showMore = () => {
  show.value = !show.value;
}

const data = ref([
  {
    title: "Ali kiba",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ali_Kiba_2017.jpg/530px-Ali_Kiba_2017.jpg"
  },
  {
    title: "Diamond",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Diamond_Platnumz_2.png/402px-Diamond_Platnumz_2.png"
  },
  {
    title: "Ray C",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Ray_C_performing_2008.jpg"
  },
  {
    title: "Harmonize",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Harmonize.jpg/220px-Harmonize.jpg"
  },
  {
    title: "Barnaba Classic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Barnaba_Classic_Live_Perfomance.jpg/220px-Barnaba_Classic_Live_Perfomance.jpg"
  },
  {
    title: "Abby Chams",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Abby_Chams.jpg/220px-Abby_Chams.jpg"
  },
  {
    title: "Darassa",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Darassa_-_Too_Muching_at_EATV_Awards.jpg"
  },
  {
    title: "Lava Lava",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lava_Lava_%28singer%29.jpg/220px-Lava_Lava_%28singer%29.jpg"
  },
  {
    title: "Lucas Mkenda",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lucas_Mkenda.jpg/220px-Lucas_Mkenda.jpg"
  },
  {
    title: "Gigy Money",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Gigy_Money.jpg/220px-Gigy_Money.jpg"
  },
  {
    title: "Professor Jay",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Professor-jay-songs465315764..jpg/220px-Professor-jay-songs465315764..jpg"
  },
  {
    title: "Freddie Mercury",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/220px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg"
  },
  {
    title: "Rayvanny",
    image: "https://netstorage-tuko.akamaized.net/images/faf124db74b60fe8.jpg?imwidth=720 "
  },
  {
    title: "Zuchu",
    image: "https://netstorage-tuko.akamaized.net/images/4f8b73f31f3ee287.png?imwidth=720 "
  },
  {
    title: "Nandy",
    image: "https://netstorage-tuko.akamaized.net/images/ef96c6701ebb4eae.jpg?imwidth=720 "
  },
  {
    title: "Rich Mavocko",
    image: "https://netstorage-tuko.akamaized.net/images/28fdf7d3b9262709.jpg?imwidth=720"
  },
  {
    title: "Jux",
    image: "https://netstorage-tuko.akamaized.net/images/4381318f489fcc82.jpg?imwidth=720"
  },
  {
    title: "Ben pol",
    image: "https://netstorage-tuko.akamaized.net/images/13e8d50222f8b974.jpg?imwidth=720"
  },
  {
    title: "A.Y",
    image: "https://netstorage-tuko.akamaized.net/images/0bab69988b7fe28f.png?imwidth=720"
  },
  {
    title: "juma Nature",
    image: "https://netstorage-tuko.akamaized.net/images/1397538c2a779a1d.jpg?imwidth=720"
  }
])

</script>
<template>
  <div class="album-container">
    <div class="alb-inner" :class="show == true ? 'show-all-albums' : 'show-less-albums'">
      <div class="alb-title">
        <span>Songwriter and artist</span>
        <h2>Popular artist & songwriter we have worked with</h2>
      </div>
      <div class="album-wrapper">
        <div class="album-info" v-for="({ title, image }, index) in data" :key="index">
          <img :src="image" :alt="title" class="album-cover">
          <div class="name-banner">
            <h3>{{ title }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="show-more" @click="showMore" :class="show == true ? 'hide' : ''">
      <span>see more</span>
      <ArrowIcon class="icon-more" />
    </div>
    <div class="show-more" @click="showMore" :class="show == false ? 'hide' : ''">
      <ArrowIcon class="icon-more less" />
      <span>see less</span>
    </div>
  </div>
</template>
<style>
@import "@/style/album.css";
</style>

