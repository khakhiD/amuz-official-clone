<template>
  <section
    class="flex h-screen md:h-screen md:w-screen items-center justify-center md:justify-center">
    <!-- NOTE: 텍스트 들어갈 곳 -->
    <div class="px-4 md:px-0 z-10 text-center">
      <h1 class="mb-5 md:mb-[70px] font-semibold text-xl md:text-[56px]">
        <span>{{ TITLE_CONTENT }}</span>
      </h1>
      <Button v-bind="buttonProps" />
    </div>
    <!-- NOTE: 8개의 요소 애니메이션 들어갈 곳 -->
    <div class="relative">
      <Icon
        v-for="n in 8"
        :imageSrc="'/amuz/amuz13.png'"
        :key="n"
        :class="`icon-${n}`"
        :ref="'iconsRef' + n" />
    </div>
  </section>
</template>

<script setup>
import Button from '../Button.vue';
import Icon from '../Icon.vue';

const buttonProps = {
  content: 'Contact us',
  href: null,
};

const TITLE_CONTENT = '즐거운 상상은 현실이됩니다.';
</script>

<style lang="scss" scoped></style>
