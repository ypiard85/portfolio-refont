<script setup>
import hello from "@/components/sections/homeSection/_Hello.vue";
import AvailibleStatus from "@/components/texts/AvailibleStatus.vue";
import frenchResume from "@/assets/resumes/cv_fr_Yoann_PIARD.pdf"
import englishResume from "@/assets/resumes/resume_english_Yoann_PIARD.pdf"
import {computed} from "vue";

const getResumeByLanguage = computed(() => {
  const lang = localStorage.getItem("lang");

  if (lang == 'fr') {
    return frenchResume
  }
  if (lang == 'en') {
    return englishResume
  }
  return frenchResume

})

</script>

<template>
  <section id="about" class="about">

    <div class="about-card bg-white shadow">
      <div class="about-card-body p-5 border">

        <b-row gutter-x="5" gutter-y="5">

          <b-col cols="12" md="6">
            <img width="100%" height="auto" src="../../../assets/images/moi.jpg" alt="yoann PIARD">
          </b-col>

          <b-col cols="12" md="6">
            <hello class="m-auto m-md-0"/>
            <div class="mt-3">
              <div class="text-center text-md-start">
                <h1 class="h2 text-secondary fw-normal">{{ $t('about.welcomename') }}</h1>
                <h2 class="fw-normal h5 text-secondary">{{ $t('about.occupation') }}</h2>
              </div>

              <div class="border-bottom my-4"></div>
              <b-list-group flush class="about-list">

                <b-list-group-item class="px-0 border-0">
                  <b-row class="align-items-center">
                    <b-col cols="12" md="6" class="about-list-title">{{ $t('about.age') }}</b-col>
                    <b-col class="about-list-label text-light">28</b-col>
                  </b-row>
                </b-list-group-item>

                <b-list-group-item class="px-0 border-0">
                  <b-row class="align-items-center">
                    <b-col cols="12" md="6" class="about-list-title">{{ $t('about.nationality.label') }}</b-col>
                    <b-col class="about-list-label text-light"> {{ $t('about.nationality.value') }}</b-col>
                  </b-row>
                </b-list-group-item>

                <b-list-group-item class="px-0 border-0">
                  <b-row class="align-items-center">
                    <b-col cols="12" md="6" class="about-list-title">{{ $t('about.email') }}</b-col>
                    <b-col class="about-list-label text-light">yoann.piard@gmail.com</b-col>
                  </b-row>
                </b-list-group-item>

                <b-list-group-item class="px-0 border-0">
                  <b-row class="align-items-center">
                    <b-col cols="12" md="6" class="about-list-title">{{ $t('about.phone') }}</b-col>
                    <b-col class="about-list-label text-light">+33 6 43 67 04 56</b-col>
                  </b-row>
                </b-list-group-item>

                <b-list-group-item class="px-0 border-0">
                  <b-row class="align-items-center">
                    <b-col cols="12" md="6" class="about-list-title">{{ $t('about.availiblestatus') }}</b-col>
                    <b-col class="about-list-label text-light">
                      <availible-status :availible-status="1"/>
                    </b-col>
                  </b-row>
                </b-list-group-item>

              </b-list-group>
            </div>
          </b-col>

        </b-row>
      </div>
      <div class="about-card-footer bg-danger p-4">
        <div class="hstack gap-4 justify-content-center">
          <b-button
              target="_blank"
              href="https://www.linkedin.com/in/yoann-piard-fr/"
              variant=""
              class="p-0 d-flex"
          >
            <IBiLinkedin class="text-white"/>
          </b-button>
          <b-button
              target="_blank"
              href="https://github.com/ypiard85"
              variant=""
              class="p-0 d-flex"
          >
            <IBiGithub class="text-white"/>
          </b-button>
          <b-button
              target="_blank"
              href="https://www.instagram.com/yoann_piard/"
              variant=""
              class="p-0 d-flex"
          >
            <IBiInstagram class="text-white"/>
          </b-button>
        </div>
      </div>
    </div>

    <a :href="getResumeByLanguage" target="_blank"
       class="mx-auto download-button fw-semibold text-secondary text-uppercase d-block w-fit my-5 border px-5 py-3 rounded">
      {{ $t('about.downloadResume') }}
    </a>

    <p style="line-height: 2.4rem" class="h5 fw-light text-black text-center">
      {{ $t('about.introduction') }}
    </p>
  </section>
</template>

<style scoped lang="scss">
.about-list {
  &-title {
    font-size: 12px;
    font-weight: 700;
    color: black;
    text-transform: uppercase;
  }
}

.download-button {
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
  }
}
</style>