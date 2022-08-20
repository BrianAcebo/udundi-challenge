<template>
  <ReadMoreSection 
    headerText="Explore"
    ctaText="More Details"
    v-if="!isLoading"
  />
  <LoadingScreen v-if="isLoading" :class="{'fade-out': addAnimation}"></LoadingScreen>
</template>

<script>
  import ReadMoreSection from './components/ReadMoreSection.vue'
  import LoadingScreen from "./components/screens/LoadingScreen"

  export default {
    name: 'App',
    components: {
      ReadMoreSection,
      LoadingScreen
    },
    data() {
      return {
        isLoading: true,
        addAnimation: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.addAnimation = true;
      }, 2000);

      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
  }
</script>

<style lang="scss">
  @import "./assets/styles/variables.scss";

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primary-color;
    margin: 0;
    overflow: hidden;
  }
</style>
