<script setup>
import { RouterView } from 'vue-router';
import { useRouteStore } from '@/stores/route';
import SideBar from "@/components/SidebarComponent.vue";
import Nav from '@/components/NavComponent.vue';
import Footer from '@/components/FooterComponent.vue';

const routeStore = useRouteStore();
</script>
<template>
  <div class="app-container">
    <div v-show="routeStore.openDrawer == true">
      <SideBar/>
    </div>
    <Nav class="app-nav" v-show="routeStore.routeName != 'home'"/>
    <RouterView />
    <Footer/>
  </div>
</template>
<style>
@import "@/style/app.css";
</style>
