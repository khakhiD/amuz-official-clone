<template>
  <section
    id="idea-section"
    class="relative w-svw h-svh bg-background transition-all">
    <div
      class="w-full h-full flex items-center px-4 md:px-20"
      :class="CSS_ANIMATION">
      <div>
        <h1
          class="font-Poppins font-semibold mb-7 text-[32px] whitespace-pre-line md:text-[80px]">
          {{ CONSTANTS_IDEA.TITLE }}
        </h1>
        <p
          class="font-Poppins font-normal text-base whitespace-pre-line ease md:text-[20px] md:leading-tight">
          {{ CONSTANTS_IDEA.CONTENT }}
        </p>
        <div class="block md:hidden">📼 logo video (mobile)</div>
      </div>
      <div class="hidden md:block">📼 logo video (pc)</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const CONSTANTS_IDEA = {
  TITLE: `Idea can change
  everything`,
  CONTENT: `
    start-up companies can only
    enjoy what they can. we can
    enjoy what we can do well.
  `,
  VIDEO_URL: `https://amuz.co.kr/themes/web/official/videos/amuz_L.webm`,
};

const CSS_ANIMATION = ref('transition-all ease-in-out duration-500');
</script>

<style lang="scss" scoped></style>
