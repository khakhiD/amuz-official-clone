<template>
  <section
    class="flex h-screen md:h-screen md:w-screen items-center justify-center md:justify-center">
    <!-- NOTE: 텍스트 들어갈 곳 -->
    <div class="px-4 md:px-0 z-10 text-center">
      <h1 class="mb-5 md:mb-[70px] font-semibold text-xl md:text-[56px]">
        <span ref="titleElement">{{ TITLE_CONTENT }}</span>
      </h1>
      <Button v-bind="buttonProps" />
    </div>
    <!-- NOTE: 8개의 요소 애니메이션 들어갈 곳 -->
    <div class="absolute w-screen h-60vw md:h-screen">
      <div
        v-for="(item, index) in ICON_IMAGES"
        :key="index"
        :class="`icon-box icon-box-${index + 1}`">
        <Icon :imageSrc="item.imageSrc" :class="`icon icon-${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '../Button.vue';
import Icon from '../Icon.vue';

const buttonProps = {
  content: 'Contact us',
  href: null,
};

const TITLE_CONTENT = '즐거운 상상은 현실이됩니다.';

const ICON_IMAGES = [
  { imageSrc: '/amuz/amuz13.png' },
  { imageSrc: '/amuz/amuz14.png' },
  { imageSrc: '/amuz/amuz15.png' },
  { imageSrc: '/amuz/amuz16.png' },
  { imageSrc: '/amuz/amuz17.png' },
  { imageSrc: '/amuz/amuz18.png' },
  { imageSrc: '/amuz/amuz19.png' },
  { imageSrc: '/amuz/amuz20.png' },
  { imageSrc: '/amuz/amuz21.png' },
];
</script>

<style lang="css" scoped>
.icon-box {
  position: absolute;
  filter: brightness(100%);
}
.icon {
  opacity: 1;
  transform: scale(1.5, 1.5);
}

.icon-box-1 {
  top: 0%;
  left: 35%;
}

.icon-box-2 {
  top: 5%;
  left: 0%;
  transform: scale(1.5, 1.5);
}

.icon-box-3 {
  top: 30%;
  left: 10%;
}

.icon-box-4 {
  bottom: 20%;
  left: 0%;
  transform: scale(1.5, 1.5);
}

.icon-box-5 {
  transform: scale(0.5, 0.5);
  top: 15%;
  right: 35%;
}

.icon-box-6 {
  right: 0;
  top: 0;
  transform: scale(2, 2);
}

.icon-box-7 {
  right: 10%;
  top: 20%;
  transform: scale(0.8, 0.8);
}

.icon-box-8 {
  right: 10%;
  bottom: 5%;
  transform: scale(1.5, 1.5);
}

.icon-box-9 {
  bottom: 0;
  right: 30%;
  transform: scale(0.8, 0.8);
}
</style>
