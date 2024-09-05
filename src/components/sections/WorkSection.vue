<template>
  <!-- NOTE: Work Archive Section -->
  <section
    class="flex h-auto md:h-screen items-center justify-center md:justify-normal overflow-hidden">
    <div class="w-full md:max-w-7xl px-4 md:px-20">
      <h1
        class="text-[32px] text-center md:text-8xl font-semibold md:font-medium mb-5 md:mb-[14px]">
        WORK ARCHIVE
      </h1>
      <div
        id="works-list"
        class="flex flex-col w-full md:w-min gap-5 md:gap-[30px] m-0 md:m-auto">
        <!-- work items -->
        <WorkCard
          v-for="(work, index) in worksData"
          :key="index"
          v-bind="work" />
      </div>
    </div>
  </section>
</template>

<script setup>
import WorkCard from '../WorkCard.vue';

const worksData = [
  {
    category: 'app',
    title: 'MY CUP',
    imageSrc: '/amuz/amuz04.png',
    href: null,
    description: '환경을 생각하는 원격 식기세척 서비스 마이컵',
  },
  {
    category: 'app',
    title: 'LAUNDRY CREW',
    imageSrc: '/amuz/amuz05.png',
    href: null,
    description: 'LG전자의 스마트한 세탁방 서비스 런드리크루',
  },
  {
    category: 'Front-end',
    title: 'LG ThinkQ',
    imageSrc: '/amuz/amuz06.png',
    href: null,
    description: 'LG 씽큐 유지보수 및 프론트엔드',
  },
  {
    category: 'app',
    title: 'ECO CLEAN',
    imageSrc: '/amuz/amuz07.png',
    href: null,
    description: '일상이 편리해지는 세차앱 에코클린',
  },
  {
    category: 'web',
    title: 'GRAB THE OCEAN',
    imageSrc: '/amuz/amuz08.png',
    href: null,
    description: '100년 역사를 담고있는 첫 프리미엄 호텔 그랩 디 오션 송도',
  },
];
</script>

<style lang="scss" scoped></style>
