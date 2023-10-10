<script setup>
import {RouterView} from 'vue-router';
import Navbar from "@/components/navigators/Navbar.vue";
import {useGlobalStore} from '@/stores/global'

import {computed} from 'vue';

const globalStore = useGlobalStore();

const themeClass = computed(() => {
  return globalStore.getCurrentTheme === 'dark' ? 'dark-theme' : 'light-theme';
});
</script>

<template>
  <div id="root" :class="themeClass">
    <div id="container">
      <Navbar/>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
#app {
  position: relative;
}

@media screen and (min-width: 900px) {
  /* #root {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  #container {
    position: absolute;
    top: 40px;
    bottom: 40px;
    left: 40px;
    right: 40px;
    background-color: rgba(34, 34, 34, 0.5);
    padding: 20px;
    border-radius: 35px;
    z-index: 1;
  }*/

  #container{
    padding-inline: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
    height: 100vh;
  }
}

</style>
