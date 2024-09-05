<template>
  <section
    class="overflow-hidden h-[1202px] md:overflow-auto md:h-screen flex relative justify-center items-center">
    <!-- wrapper -->
    <div class="max-w-[360px] m-h-[601px] w-[360px] margin-0 p-0">
      <!-- scroll animation main -->
      <div>
        <!-- Box || Card Components -->
        <!-- <div>SENDGO</div>
        <div>CMS2.5</div>
        <div>STOREUP</div>
        <div>Rent-ve</div> -->
      </div>
      <!-- background title & button -->
      <div class="hidden">
        <!-- for large screen -->
      </div>
      <div class="md:hidden font-Poppins text-[56px] font-medium text-center">
        <h2
          v-for="(content, i) in smallTitleContent"
          :key="i"
          class="whitespace-pre-line first:mb-[137px]">
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
