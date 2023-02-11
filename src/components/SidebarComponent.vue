<script setup>
import { RouterLink } from 'vue-router';
import Social from "./socialComponent.vue";
import ExitIcon from "@/icons/ExitIcon.vue";
import { useRouteStore } from '@/stores/route';

const routeStore = useRouteStore();
</script>
<template>
  <div class="side-drawer">
    <div class="side-container">
      <ExitIcon class="icon icon-exit" @click="routeStore.toggleDrawer" />
    </div>
    <div class="inner-mobile">
      <div>
        <div class="nav-mobile">
          <div class="nav-wrapper-mobile">
            <RouterLink :to="{ name: 'home' }" class="nav-link nav-mobile-link">Home</RouterLink>
            <RouterLink :to="{ name: 'album' }" class="nav-link  nav-mobile-link">SongWriter</RouterLink>
            <RouterLink :to="{ name: 'gallery' }" class="nav-link  nav-mobile-link">Gallery</RouterLink>
            <RouterLink :to="{ name: 'artist' }" class="nav-link  nav-mobile-link">Artists</RouterLink>
            <RouterLink :to="{ name: 'license' }" class="nav-link  nav-mobile-link">License</RouterLink>
            <RouterLink :to="{ name: 'about' }" class="nav-link  nav-mobile-link">About</RouterLink>
            <RouterLink :to="{ name: 'contact' }" class="nav-link  nav-mobile-link">Contact</RouterLink>
          </div>
          <div class="social-mobile">
            <Social />
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/sidebar.css";
</style>
