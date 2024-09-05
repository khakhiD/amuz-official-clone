<template>
  <DefaultLayout>
    <IdeaSection />
    <PointSection />
    <WorkSection />
    <SolutionSection />
    <!-- <ContactSection /> -->
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import IdeaSection from '../components/sections/IdeaSection.vue';
import PointSection from '../components/sections/PointSection.vue';
import WorkSection from '../components/sections/WorkSection.vue';
import SolutionSection from '../components/sections/SolutionSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
</script>

<style lang="scss" scoped></style>
