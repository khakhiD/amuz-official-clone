<!-- Common Component - WorkCard.vue -->
<template>
  <a
    :href
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    class="flex relative items-end bg-repeat bg-center bg-cover cursor-pointer w-full h-[380px] p-6 md:p-[3vw] md:w-[56vw] md:h-[31vw] rounded-[5vw]"
    :style="{ backgroundImage: `url(${imageSrc})` }">
    <div aria-label="info">
      <p class="text-sm">{{ category }}</p>
      <p class="text-lg md:text-[32px] mb-3 font-semibold break-keep">
        {{ title }}
      </p>
      <p class="md:hidden">{{ description }}</p>
      <Teleport to="body">
        <div
          id="work-tooltip"
          v-if="isHovering"
          :style="{ top: `${position.y}px`, left: `${position.x}px` }"
          class="hidden md:block py-4 px-[30px] fixed max-w-fit bg-background rounded-[28px] bg-opacity-50 z-20 pointer-events-none transition duration-100 ease-out">
          <p class="font-medium whitespace-nowrap overflow-hidden">
            {{ description }}
          </p>
        </div>
      </Teleport>
    </div>
  </a>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

interface Props {
  category: string;
  title: string;
  imageSrc?: string;
  href?: string | null;
  description?: string;
}

const props = defineProps<Props>();
const { category, title, imageSrc, description, href } = props;

const position = reactive({
  x: 0,
  y: 0,
});

const isHovering = ref(false);

const onMouseMove = (e: MouseEvent) => {
  position.x = e.clientX;
  position.y = e.clientY;
  isHovering.value = true;
};

const onMouseLeave = () => {
  isHovering.value = false;
};
</script>
