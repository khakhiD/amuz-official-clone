<!-- Common Component - WorkCard.vue -->
<template>
  <a
    :href
    class="flex relative items-end bg-repeat bg-center bg-cover w-full h-[380px] p-6 md:w-[50vw] md:h-[31vh] rounded-[5vw]"
    :style="{ backgroundImage: `url(${imageSrc})` }">
    <div aria-label="info">
      <p class="text-sm">{{ category }}</p>
      <p class="text-lg md:text-[32px] mb-3 font-semibold break-keep">
        {{ title }}
      </p>
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Props {
  category: string;
  title: string;
  imageSrc?: string;
  href?: string | null;
  description?: string;
}

const props = defineProps<Props>();
const { category, title, imageSrc, description, href } = props;
</script>
