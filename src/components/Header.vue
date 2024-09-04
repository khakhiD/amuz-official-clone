<template>
  <header
    id="Header"
    class="sticky top-0 w-full px-4 md:px-20 py-6 z-50 h-20 backdrop-blur-[30px]">
    <div class="flex justify-between items-center">
      <a href="/">
        <div class="h-inherit">
          <img
            :src="LOGO_IMG.URL"
            :alt="LOGO_IMG.ALT"
            class="text-trasparent w-[101px] h-[23px]" />
        </div>
      </a>
      <nav>
        <button
          @click="toggleMenu"
          class="text-gray-500 w-10 h-10 relative foucs:outline-none">
          <div
            class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              :class="[
                MENU_BASE_CLASS,
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
              ]" />
            <span
              :class="[
                MENU_BASE_CLASS,
                isMenuOpen ? 'opacity-0' : 'opacity-1',
              ]" />
            <span
              :class="[
                MENU_BASE_CLASS,
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
              ]" />
          </div>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue';

const LOGO_IMG = {
  URL: `/amuz/amuz01.png`,
  ALT: `AMUZ`,
};

const MENU_BASE_CLASS = `block absolute h-0.5 w-5 bg-[#eeeee3] transform transition duration-500 ease-in-out`;
const isMenuOpen = ref(false);
const toggleMenu = () => {
  // console.log('menu state toggled', isMenuOpen);
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
