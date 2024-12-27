<script setup>
import AboutSection from "@/components/sections/homeSection/AboutSection.vue";
import HeroBanner from "@/components/sections/homeSection/HeroBanner.vue";
import SkillsSection from "@/components/sections/homeSection/SkillsSection.vue";
import PortfolioSection from "@/components/sections/homeSection/PortfolioSection.vue";
import ExperienceSection from "@/components/sections/homeSection/ExperienceSection.vue";
import EducationSection from "@/components/sections/homeSection/EducationSection.vue";
</script>

<template>
  <hero-banner/>
  <div class="wrapper">
    <div style="margin-top: -300px">
      <about-section/>
    </div>
    <skills-section style="margin-top: 80px"/>
    <portfolio-section style="margin-top: 80px" />
    <experience-section style="margin-top: 80px" />
    <education-section style="margin-top: 80px"/>
    <pricing-section style="margin-top: 80px" />
  </div>
</template>

<style scoped lang="scss">

</style>