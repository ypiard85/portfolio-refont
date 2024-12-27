<script setup lang="ts">
interface Props{
  availibleStatus: 1 | 0
}

defineProps<Props>();
</script>

<template>
  <IBiCheckCircleFill class="text-success" v-if="availibleStatus"/>
  <IBiXCircleFill class="text-danger" v-else />
</template>

<style scoped lang="scss">

</style>