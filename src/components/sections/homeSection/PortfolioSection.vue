<script setup>

import CardProject from "@/components/cards/CardProject.vue";
import coreegoIMG from "@/assets/images/projects/coreego.jpg"
import easystemIMG from "@/assets/images/projects/easysystem.jpg"
import vitrineIMG from "@/assets/images/projects/vitrinenumerique.jpg"
import lesmathesIMG from "@/assets/images/projects/lesmathes.jpg"
import labonneplaceIMG from "@/assets/images/projects/labonneplace.jpg"


</script>

<template>
  <section id="portfolio" class="portfolio">
    <h2 class="text-secondary text-center"> {{ $t('navigation.portfolio') }} </h2>
    <div class="mt-4">
      <b-row cols="1" cols-md="2" gutter-y="4">
        <b-col>
          <card-project
              :technologies="['vue', 'laravel']"
              :thumbnail="coreegoIMG"
              :title="$t('projects.coreego.title')"
              link="https://coreego.fr"
              :description="$t('projects.coreego.description')"
          />
        </b-col>
        <b-col>
          <card-project
              :technologies="['vue']"
              :thumbnail="easystemIMG"
              :title="$t('projects.easysystem.title')"
              link="https://www.calameo.com/read/00357616399da01359411"
              :description="$t('projects.easysystem.description')"
          />
        </b-col>
        <b-col>
          <card-project
              :technologies="['vue']"
              :thumbnail="vitrineIMG"
              :title="$t('projects.vitrinenumerique.title')"
              link="https://www.youtube.com/watch?app=desktop&v=TI2AufnckOE"
              :description="$t('projects.vitrinenumerique.description')"
          />
        </b-col>
        <b-col>
          <card-project
              :technologies="['wordpress']"
              :thumbnail="lesmathesIMG"
              :title="$t('projects.lesmathes.title')"
              link="https://mairie-lesmatheslapalmyre.com/"
              :description="$t('projects.lesmathes.description')"
          />
        </b-col>
        <b-col>
          <card-project
              :technologies="['react', 'laravel']"
              :thumbnail="labonneplaceIMG"
              :title="$t('projects.labonneplace.title')"
              :description="$t('projects.labonneplace.description')"
          />
        </b-col>
      </b-row>

    </div>
  </section>
</template>

<style scoped lang="scss">

</style>