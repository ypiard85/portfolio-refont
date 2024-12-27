<script setup lang="ts">

import {ref} from "vue";

const skills = ref<string[]>([
  'Vue.JS', 'React.JS', 'Angular.JS', 'Symfony', 'Laravel', 'API Rest', 'Git'
])

</script>

<template>

  <section id="skills">
    <h2 class="text-secondary text-center"> {{ $t('skills') }} </h2>
    <div class="mt-4 bg-white shadow p-5">
      <b-row cols="1" cols-sm="2" cols-md="3" gutter-y="3">
        <b-col v-for="skill in skills" :key="skill">
          <span class="d-block text-secondary mb-0 border p-2">{{skill}}</span>
        </b-col>
      </b-row>
    </div>
  </section>

</template>

<style scoped lang="scss">

</style>