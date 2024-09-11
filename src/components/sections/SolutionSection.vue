<template>
  <section
    ref="serviceContainer"
    class="relative overflow-hidden top-0 h-screen md:overflow-auto flex justify-center items-center">
    <div
      class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[45%] md:left-[42%] md:w-[16vw] md:h-[16vw]">
      <div class="app-box-container relative">
        <ServiceBox
          v-for="(service, index) in servicesData"
          :key="index"
          v-bind="service"
          ref="serviceBoxes" />
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center margin-0 p-0 text-center">
      <div class="hidden md:block">
        <h2 class="font-Poppins mb-[70px] text-[11vw] font-[600] leading-[1.1]">
          {{ TITLE_CONTENT }}
        </h2>
      </div>
      <div
        class="block md:hidden font-Poppins text-[56px] font-medium text-center">
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

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '../Button.vue';
import ServiceBox from '../ServiceBox.vue';
import { spreadBox } from '../../utils/animations';

const buttonProps = {
  content: 'View More',
  href: null,
};

const TITLE_CONTENT = `
  INNOVATIVE
  SERVICES
`;

const servicesData = [
  {
    title: 'SENDGO',
    subtitle: '모든 인터넷 문자의 솔루션',
    imageSrc: '/amuz/amuz09.png',
  },
  {
    title: 'CMS2.5',
    subtitle: '콘텐츠 관리의 새로운 방법',
    imageSrc: '/amuz/amuz10.png',
  },
  {
    title: 'STOREUP',
    subtitle: '매장 맞춤형 포스 서비스',
    imageSrc: '/amuz/amuz11.png',
  },
  {
    title: 'Rent-ve',
    subtitle: '렌터카 차량 관리의 혁명',
    imageSrc: '/amuz/amuz12.png',
  },
];

const smallTitleContent = TITLE_CONTENT.trim().split('\n');

const serviceContainer = ref<HTMLElement | null>(null);
const serviceBoxes = ref<HTMLElement[]>([]);

onMounted(() => {
  if (serviceContainer.value) {
    const serviceBoxes = Array.from(
      serviceContainer.value.querySelectorAll('.app-box-container > div')
    ) as HTMLElement[];

    spreadBox(serviceContainer.value, serviceBoxes);
  }
});
</script>

<style lang="css" scoped>
.app-box-container > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.app-box-container > div:nth-child(1) {
  transform: rotate(-18.6758deg);
  z-index: 4;
}
.app-box-container > div:nth-child(2) {
  transform: rotate(18.6158deg);
  z-index: 3;
}
.app-box-container > div:nth-child(3) {
  transform: rotate(-18.6158deg);
  z-index: 2;
}
.app-box-container > div:nth-child(4) {
  transform: rotate(18.6758deg);
  z-index: 1;
}
</style>
