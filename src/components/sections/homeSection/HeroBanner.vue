<script setup>

</script>

<template>
  <div class="hero-banner">
    <div class="backdrop"></div>
  </div>
</template>

<style scoped lang="scss">
.hero-banner {
  z-index: -1;
  position: relative;
  height: 400px;
  background-image: url('@/assets/images/me-mullae.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .backdrop{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #7d7dfd;
    opacity: 0.1;
  }
}
</style>