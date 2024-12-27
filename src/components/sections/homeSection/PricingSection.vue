<script setup>

import CardPrice from "@/components/cards/CardPrice.vue";
</script>

<template>
  <section id="pricing" class="pricing">
    <h2 class="text-secondary text-center"> {{ $t('navigation.pricing') }} </h2>
    <b-row cols="1" cols-md="2" class="mt-3" gutter-x="0" gutter-y="3">
      <b-col>
        <card-price
            price="> 32k €"
            :per="$t('year')"
            :as="$t('employee')"
            header-color="#3d4451"
        />
      </b-col>
      <b-col>
        <card-price
            price="350 €"
            :per="$t('day')"
            :as="$t('freelancer')"
            header-color="#e8676b"
        />
      </b-col>
    </b-row>
  </section>
</template>

<style scoped lang="scss">

</style>