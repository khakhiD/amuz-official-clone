<template>
  <section
    class="overflow-hidden h-[1202px] md:overflow-auto md:h-screen flex relative justify-center items-center">
    <!-- wrapper -->
    <div
      class="flex flex-col items-center justify-center margin-0 p-0 text-center">
      <!-- NOTE: 애니메이션 요소 -->
      <div></div>
      <!-- background title & button -->
      <div class="hidden md:block">
        <h2
          class="font-Poppins mb-[70px] text-[11vw] font-medium leading-[1.1]">
          {{ TITLE_CONTENT }}
        </h2>
      </div>
      <div class="md:hidden font-Poppins text-[56px] font-medium text-center">
        <h2
          v-for="(content, i) in smallTitleContent"
          :key="i"
          :class="i ? 'mb-[10px]' : 'mb-[137px]'"
          class="whitespace-pre-line">
          {{ content }}
        </h2>
      </div>
      <div class="text-center">
        <Button v-bind="buttonProps" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../Button.vue';

const buttonProps = {
  content: 'View More',
  href: null,
};

const TITLE_CONTENT = `
  INNOVATIVE
  SERVICES
`;

const smallTitleContent = TITLE_CONTENT.trim().split('\n');
</script>

<style lang="scss" scoped></style>
