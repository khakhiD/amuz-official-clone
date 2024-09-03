<template>
  <section
    id="idea-section"
    class="relative w-svw h-svh bg-background transition-all">
    <div
      class="w-full h-full flex items-center overflow-hidden px-4 md:px-20"
      :class="CSS_ANIMATION">
      <div>
        <h1
          class="font-Poppins font-semibold mb-7 md:mb-0 text-[32px] whitespace-pre-line md:text-[80px]">
          {{ CONSTANTS_IDEA.TITLE }}
        </h1>
        <p
          class="font-Poppins font-normal text-base whitespace-pre-line ease md:text-[20px] md:leading-normal">
          {{ CONSTANTS_IDEA.CONTENT }}
        </p>
        <div class="block md:hidden w-full z-10 pt-[60px]">
          <video
            autoplay
            muted
            loop
            playinline
            class="w-full scale-[2] object-contain">
            <source :src="CONSTANTS_IDEA.VIDEO_URL" type="video/webm" />
          </video>
        </div>
      </div>
      <div class="hidden md:block">
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full max-w-7xl z-10 md:right-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 pt-32 md:pt-0">
          <source :src="CONSTANTS_IDEA.VIDEO_URL" type="video/webm" />
        </video>
      </div>
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
  VIDEO_URL: `/amuz/amuz_L.webm`,
};

const CSS_ANIMATION = ref('transition-all ease-in-out duration-500');
</script>

<style lang="scss" scoped></style>
