<template>
  <div
    class="relative w-[10vw] h-[11vw]"
    :style="{
      background: `url(${imageSrc}) center center / contain no-repeat`,
    }"></div>
</template>

<script setup lang="ts">
export interface IconProps {
  imageSrc: string;
}

const props = defineProps<IconProps>();
const { imageSrc } = props;
</script>

<style scoped></style>
