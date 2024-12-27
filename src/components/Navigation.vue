<script setup lang="ts">
import TranslateInput from "@/components/inputs/TranslateInput.vue";
import {ref} from "vue";

const show = ref<boolean>(false)

</script>

<template>
  <nav class="py-3 bg-white navigation shadow-sm w-100 position-sticky top-0 ">
    <b-container>
      <div class="hstack gap-5">

        <!--navigation left-->
    <div class="navigation-left flex-fill">
      <span class="logo-brand text-danger">Y<span class="text-primary">P</span></span>
    </div>

        <!--navigation right-->
        <div class="navigation-right hstack gap-4  justify-content-end">
          <div class=" gap-3 flex-fill d-none d-lg-flex">
            <a class="text-uppercase fw-semibold" href="#about"> {{ $t('navigation.about') }}</a>
            <a class="text-uppercase fw-semibold" href="#skills"> {{ $t('navigation.skills') }}</a>
            <a class="text-uppercase fw-semibold" href="#portfolio">{{ $t('navigation.portfolio') }}</a>
            <a class="text-uppercase fw-semibold" href="#experience">{{ $t('navigation.experience') }} </a>
            <a class="text-uppercase fw-semibold" href="#education">{{ $t('navigation.education') }} </a>
            <a class="text-uppercase fw-semibold" href="#pricing"> {{ $t('navigation.pricing') }} </a>
          </div>
          <translate-input/>
            <IBiList class="fs-2 d-block d-lg-none" style="cursor: pointer" @click="show = true" />
            <BOffcanvas  v-model="show" class="d-block d-lg-none">
              <div @click="show = false" class="gap-3 vstack w-fit">
                <a class="text-uppercase fw-semibold" href="#about"> {{ $t('navigation.about') }}</a>
                <a class="text-uppercase fw-semibold" href="#skills"> {{ $t('navigation.skills') }}</a>
                <a class="text-uppercase fw-semibold" href="#portfolio">{{ $t('navigation.portfolio') }}</a>
                <a class="text-uppercase fw-semibold" href="#experience">{{ $t('navigation.experience') }} </a>
                <a class="text-uppercase fw-semibold" href="#education">{{ $t('navigation.education') }} </a>
                <a class="text-uppercase fw-semibold" href="#pricing"> {{ $t('navigation.pricing') }} </a>
              </div>
            </BOffcanvas>
        </div>
      </div>

    </b-container>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  z-index: 1000;

  a {
    font-size: 14px;
  }
}
</style>