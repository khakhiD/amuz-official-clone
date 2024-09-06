<template>
  <DefaultLayout>
    <IdeaSection />
    <PointSection />
    <WorkSection />
    <SolutionSection />
    <ContactSection />
    <div class="sticky bottom-4 md:bottom-10 w-fit pl-4 md:pl-10 z-100">
      <ChatButton />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import IdeaSection from '../components/sections/IdeaSection.vue';
import PointSection from '../components/sections/PointSection.vue';
import WorkSection from '../components/sections/WorkSection.vue';
import SolutionSection from '../components/sections/SolutionSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
import ChatButton from '../components/ChatButton.vue';
</script>

<style lang="scss" scoped></style>
