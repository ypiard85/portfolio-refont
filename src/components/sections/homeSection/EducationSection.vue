<script setup>

import CardEducation from "@/components/cards/CardEducation.vue";
</script>

<template>
  <section id="education" class="education">
    <h2 class="text-secondary text-center"> {{ $t('education') }} </h2>
    <div class="mt-4 vstack gap-3">
      <card-education
          :date="$t('educations.one.date')"
          :name="$t('educations.one.name')"
          :company="$t('educations.one.company')"
      />
      <card-education
          :date="$t('educations.two.date')"
          :name="$t('educations.two.name')"
          :company="$t('educations.two.company')"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>