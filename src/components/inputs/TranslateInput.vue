<script setup>

import IconFrenchFlag from "@/components/icons/IconFrenchFlag.vue";
import IconEnglishFlag from "@/components/icons/IconEnglishFlag.vue";

const onChangeLang = ($event) => {
  localStorage.setItem("lang", $event.target.value);
}

</script>

<template>
  <b-input-group style="width: fit-content">

    <b-input-group-text class="bg-white border-0 p-0">
      <icon-french-flag v-if="$i18n.locale == 'fr' "/>
      <icon-english-flag v-if="$i18n.locale == 'en' "/>
    </b-input-group-text>

    <b-form-select @change="onChangeLang" class="border-0" v-model="$i18n.locale">
      <b-form-select-option value="fr">
        Francais
      </b-form-select-option>
      <b-form-select-option value="en">English</b-form-select-option>
    </b-form-select>

  </b-input-group>
</template>

<style scoped lang="scss">

</style>