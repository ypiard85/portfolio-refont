<script setup lang="ts">

import CardExperience from "@/components/cards/CardExperience.vue";
</script>

<template>
  <section id="experience" class="experience">
    <h2 class="text-secondary text-center"> {{ $t('experience') }} </h2>
    <div class="mt-4 vstack gap-3">
      <card-experience
          :company="$t('experiences.three.company')"
          :occupation="$t('experiences.three.occupation')"
          :description="$t('experiences.three.description')"
          :date="$t('experiences.three.date')"
      />
      <card-experience
        :company="$t('experiences.one.company')"
        :occupation="$t('experiences.one.occupation')"
        :description="$t('experiences.one.description')"
        :date="$t('experiences.one.date')"
      />
      <card-experience
          :company="$t('experiences.two.company')"
          :occupation="$t('experiences.two.occupation')"
          :description="$t('experiences.two.description')"
          :date="$t('experiences.two.date')"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>