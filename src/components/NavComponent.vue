<script setup>
import logo from "@/assets/logo.png";
import { RouterLink } from 'vue-router';
import Social from "./socialComponent.vue";
import MenuIcon from "@/icons/menuIcon.vue";
import { useRouteStore } from '@/stores/route';

const routeStore = useRouteStore();
</script>
<template>
  <div class="nav-container">
    <div class="nav-wrapper">
      <div class="social-c">
        <Social />
      </div>
      <div class="nav-d">
        <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }" class="nav-link">About</RouterLink>
        <!-- <RouterLink :to="{ name: 'album' }" class="nav-link">SongWriter</RouterLink> -->
        <!-- <RouterLink :to="{ name: 'gallery' }" class="nav-link">gallery</RouterLink>  -->
      </div>
      <img :src="logo" alt="logo" class="logo">
      <div class="nav-d">
        <RouterLink :to="{ name: 'artist' }" class="nav-link">Artists</RouterLink>
        <RouterLink :to="{ name: 'license' }" class="nav-link">License</RouterLink>
        <RouterLink :to="{ name: 'contact' }" class="nav-link">Contact</RouterLink>
      </div>
      <div class="menu">
        <MenuIcon class="icon-menu" @click="routeStore.toggleDrawer" />
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/nav.css";
</style>
