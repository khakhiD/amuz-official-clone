<template>
  <section
    class="h-lvh flex items-center justify-center text-white py-6 px-4 md:max-w-7xl md:py-0 md:px-20 md:mx-auto">
    <div class="">
      <h1 class="text-[26px] md:text-[53px] md:font-bold md:leading-relaxed">
        <span ref="textElementRef">
          {{ PRAISE_LINES.FIRST }}
          <img :src="IMAGES_URL.YELLOW" class="h-10 md:h-20 inline" />
          {{ PRAISE_LINES.SECOND }}
          <img :src="IMAGES_URL.BLUE" class="h-10 md:h-20 inline" />
          {{ PRAISE_LINES.THIRD }}
        </span>
      </h1>
      <div class="flex justify-center mt-10">
        <Button :content="buttonProps.content" :href="buttonProps.href" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Button from '../Button.vue';
import { fillTextColor } from '../../utils/animations';

const PRAISE_LINES = {
  FIRST: '시작하는 기업은 잘할 수 있는',
  SECOND: '일을 즐겁게 하도록, 우리들은 우리가',
  THIRD: '잘할 수 있는 일을 즐겁게 하도록. 이것이 아뮤즈의 핵심가치입니다.',
};

const IMAGES_URL = {
  YELLOW: '/amuz/amuz02.png',
  BLUE: '/amuz/amuz03.png',
};

const buttonProps = {
  content: 'About us',
  href: null,
};

const textElementRef = ref(null);

onMounted(() => {
  fillTextColor(textElementRef.value);
});
</script>

<style lang="scss" scoped></style>
