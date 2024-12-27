<script setup lang="ts">
interface Props {
  date: string;
  occupation: string;
  company: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <b-card class="shadow rounded-0 card-experience border-5 border-danger ">
    <b-card-text style="font-size: 14px" class="text-danger fw-bold text-uppercase" :text="date" />
    <b-card-title :text="occupation" class="fw-normal" />
    <b-card-subtitle v-if="company" class="text-uppercase fw-normal hstack mt-2 gap-2">
      <IBiBuilding />
      {{company}}
    </b-card-subtitle>
    <b-card-text class="mt-4">
      <p v-html="description" style="white-space: pre-line"></p>
    </b-card-text>
  </b-card>
</template>

<style scoped lang="scss">
.card-experience{
  border: 0;
  border-top: 5px solid var(--red)!important;
}
</style>