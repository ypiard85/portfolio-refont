<script setup lang="ts">
import HomePage from "@/pages/HomePage.vue";

interface Props {
  date: string;
  name: string;
  company: string;
}

defineProps<Props>()
</script>

<template>
  <b-card class="shadow rounded-0 card-education border-5 border-danger">
    <b-card-text style="font-size: 14px" class="text-danger fw-bold text-uppercase" :text="date" />
    <b-card-title :text="name" class="fw-normal" />
    <b-card-subtitle class="text-uppercase fw-normal hstack mt-2 gap-2">
      <IBiBackpack />
      {{company}}
    </b-card-subtitle>
  </b-card>
</template>

<style scoped lang="scss">
.card-education{
  border: 0;
  border-top: 5px solid var(--red)!important;
}
</style>