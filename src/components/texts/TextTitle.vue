<script setup lang="ts">
interface Props{
  title: string
}

defineProps<Props>();

</script>

<template>
  <h2 class="w-fit pb-2 border-bottom border-3">{{title}}</h2>
</template>

<style scoped lang="scss">

</style>