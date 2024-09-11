<template>
  <div
    class="box"
    :style="{ background: `url(${imageSrc}) center center / cover no-repeat` }"
  </div>
</template>
<script setup lang="ts">
export interface IconProps {
  imageSrc: string;
}

const props = defineProps<IconProps>();
const { imageSrc } = props;

</script>