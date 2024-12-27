<script setup lang="ts">
import vueIcon from "@/assets/images/technologies/vuejs.png"
import reactIcon from "@/assets/images/technologies/react.png"
import laravelIcon from "@/assets/images/technologies/laravel.png"
import symfonyIcon from "@/assets/images/technologies/symfony.png"

import wordpressIcon from "@/assets/images/technologies/wordpress.png"
import {computed, ref} from "vue";

interface Props {
  title: string;
  description: string;
  technologies: ('vue' | 'react' | 'laravel' | 'symfony' | 'wordpress')[];
  thumbnail: string;
  link?: string;
}

const props = defineProps<Props>();

function isInclude(techologie: string) : boolean {
  return props.technologies.includes(techologie)
}

const show = ref<boolean>(false)

const sanitizedDescription = computed(() => DOMPurify.sanitize(props.description));

</script>

<template>
  <div class="shadow card-project" :style="{'background-image': 'url('+thumbnail+')' }">
    <div class="backdrop"></div>
    <div class="card-project-detail">
      <div class="hstack gap-3">
        <img height="40" width="40" v-if="isInclude('vue')" :src="vueIcon" alt="">
        <img height="40" width="40" v-if="isInclude('react')" :src="reactIcon" alt="">
        <img height="40" width="40" v-if="isInclude('laravel')" :src="laravelIcon" alt="">
        <img height="40" width="40" v-if="isInclude('symfony')" :src="symfonyIcon" alt="">
        <img height="40" width="40" v-if="isInclude('wordpress')" :src="wordpressIcon" alt="">
      </div>
      <h3 class="h4 text-white fw-normal mt-3 text-uppercase">{{ title }}</h3>
      <div class="mt-3 hstack gap-2 card-project-actions">
        <b-button @click="show = true" variant="danger" class="d-flex">
          <IBiZoomIn/>
        </b-button>
        <b-button v-if="link" :href="link" target="_blank" variant="danger" class="d-flex">
          <IBiLink/>
        </b-button>
      </div>
    </div>
  </div>

  <b-modal v-model="show" centered no-header no-footer body-class="p-0" body-scrolling size="lg">
    <b-button @click="show = false" class="position-absolute end-0" size="lg" variant="light"><IBiX /></b-button>
    <div class="modal-header">
      <img :src="thumbnail" width="100%" height="100%" alt="">
    </div>
    <div class="p-4">
      <h4 class="fs-3 text-secondary">{{ title }}</h4>
      <p class="text-black mt-3" style="white-space: pre-line; font-size: 18px">
        {{description}}
      </p>
      <div class="border-bottom"></div>
      <div class="hstack gap-3 mt-3">
        <img height="30" width="30" v-if="isInclude('vue')" :src="vueIcon" alt="">
        <img height="30" width="30" v-if="isInclude('react')" :src="reactIcon" alt="">
        <img height="30" width="30" v-if="isInclude('laravel')" :src="laravelIcon" alt="">
        <img height="30" width="30" v-if="isInclude('symfony')" :src="symfonyIcon" alt="">
        <img height="30" width="30" v-if="isInclude('wordpress')" :src="wordpressIcon" alt="">
      </div>
    </div>
  </b-modal>

</template>

<style scoped lang="scss">
.card-project {
  overflow-y: hidden;
  width: 100%;
  height: 300px;
  position: relative;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: end;
  padding: 10px;

  &-detail {
    position: relative;
    z-index: 200;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
  }
}

.modal-header {
  height: 400px;

  img {
    object-fit: cover;
  }

  @media screen and (max-width: 750px) {
    height: 300px;
  }
}

</style>