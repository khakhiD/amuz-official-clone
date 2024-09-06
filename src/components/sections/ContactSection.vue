<template>
  <section
    class="flex h-screen md:h-screen md:w-screen items-center justify-center md:justify-center">
    <div>
      <!-- TEXT -->
      <div class="px-4 md:px-0 z-10 text-center">
        <h1 class="mb-5 md:mb-[70px] font-semibold text-xl md:text-[56px]">
          <span>{{ TITLE_CONTENT }}</span>
        </h1>
        <Button v-bind="buttonProps" />
      </div>
      <div>
        <!-- NOTE: 8개의 요소 애니메이션
        정중앙 기준 -> 스크롤할 수록 확대 + 투명도 조절 -->
        <div v-for="n in 8" :key="n" class="TEMP_ICONS_BASECLASS"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from '../Button.vue';

const buttonProps = {
  content: 'Contact us',
  href: null,
};

const TITLE_CONTENT = '즐거운 상상은 현실이됩니다.';
const TEMP_ICONS_BASECLASS = '';
</script>

<style lang="scss" scoped></style>
