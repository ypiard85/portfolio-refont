<script setup>

</script>

<template>
  <div class="hello bg-danger w-fit p-2 fw-bold text-uppercase text-white"> {{$t('about.hello')}} </div>
</template>

<style scoped lang="scss">
.hello{
  font-size: 14px;
  position: relative;
  &:before{
    content: '';
    width: 0;
    height: 0;
    top: 100%;
    left: 5px;
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 0 0 8px 8px;
    border-color: transparent;
    border-left-color: var(--red);
  }
}
</style>