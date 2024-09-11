<!-- common component - PlatformBox -->
<template>
  <div
    class="w-[174px] h-[174px] p-[15px] md:w-[16vw] md:h-[16vw] md:p-[1.2vw] text-center rounded-[32px] md:rounded-[2vw] shadow select-none"
    :style="{ background: `url(${imageSrc}) center center / cover no-repeat` }">
    <p class="text-[13px] font-medium md:text-sm">{{ subtitle }}</p>
    <h2 class="text-md md:text-[26px]">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
export interface ServiceBoxProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

const props = withDefaults(defineProps<ServiceBoxProps>(), {
  title: '서비스명',
  subtitle: '서비스 소개 문구',
  imageSrc: '/amuz/amuz12.png',
});

const { title, subtitle, imageSrc } = props;
</script>
