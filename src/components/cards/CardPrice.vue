<script setup lang="ts">
interface Props {
  price: string;
  per: 'year' | 'day' | 'month',
  as: string;
  headerColor: string;
}

const props = defineProps<Props>()
</script>

<template>
  <div class="card-price shadow">
    <div class="position-relative card-price-header text-center py-3 text-white"
         :style="[{'background-color': headerColor}]">
      <span class="fs-1">{{ price }}</span> /{{ per }}
      <div
          class="triangle"
          :style="{ borderTopColor: headerColor }"
      ></div>
    </div>
    <div class="card-price-content bg-white py-4 text-center">
      <span class="h5 text-uppercase fw-bold text-secondary">{{ as }}</span>
    </div>

  </div>
</template>

<style scoped lang="scss">

.card-price {

  &-header {
    .triangle {
      content: '';
      width: 0;
      height: 0;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      border-top: 7px solid; /* La couleur est définie dynamiquement */
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -7px;
    }
  }

}
</style>