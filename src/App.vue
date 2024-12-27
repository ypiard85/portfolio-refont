<template>
  <Navigation />
  <router-view></router-view>
  <footer-page />
</template>

<script setup>
import Navigation from "@/components/Navigation.vue";
import FooterPage from "@/components/FooterPage.vue";
</script>

<style scoped lang="scss">
</style>
