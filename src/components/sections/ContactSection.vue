<template>
  <section
    class="relative flex h-screen md:h-screen md:w-screen items-center justify-center md:justify-center"
    ref="container">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
      <h1 class="mb-5 md:mb-[70px] font-semibold text-xl md:text-[56px]">
        <span ref="titleRef">{{ TITLE_CONTENT }}</span>
      </h1>
      <Button v-bind="buttonProps" />
    </div>
    <div class="absolute w-screen h-[60vw] md:h-screen" ref="iconContainer">
      <div
        v-for="(icon, index) in ICONS"
        :key="index"
        :class="`absolute ${icon.baseClass}`">
        <Icon :imageSrc="icon.imageSrc" :class="`scale-150`" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import { expandIcons, textFillAndSpacing } from '../../utils/animations';

const buttonProps = {
  content: 'Contact us',
  href: null,
};

const ICONS = [
  { imageSrc: '/amuz/amuz13.png', baseClass: 'top-0 left-[35%]' },
  { imageSrc: '/amuz/amuz14.png', baseClass: 'top-[5%] left-0 scale-150' },
  { imageSrc: '/amuz/amuz15.png', baseClass: 'top-[30%] left-[10%]' },
  { imageSrc: '/amuz/amuz16.png', baseClass: 'bottom-[20%] left-0 scale-150' },
  { imageSrc: '/amuz/amuz17.png', baseClass: 'top-[15%] right-[35%] scale-50' },
  { imageSrc: '/amuz/amuz18.png', baseClass: 'top-0 right-[10%] scale-[2.0]' },
  {
    imageSrc: '/amuz/amuz19.png',
    baseClass: 'right-[10%] top-[30%] scale-[0.8]',
  },
  {
    imageSrc: '/amuz/amuz20.png',
    baseClass: 'right-[5%] bottom-[15%] scale-[0.5]',
  },
  {
    imageSrc: '/amuz/amuz21.png',
    baseClass: 'right-[30%] bottom-[5%] scale-150',
  },
];

const TITLE_CONTENT = '즐거운 상상은 현실이됩니다.';

const titleRef = ref<HTMLElement | null>(null);
const iconContainer = ref<HTMLElement | null>(null);
const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (titleRef.value) {
    textFillAndSpacing(titleRef.value);
  }
  if (iconContainer.value) {
    expandIcons(container.value, iconContainer.value);
  }
});
</script>
