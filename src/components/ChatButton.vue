<template>
  <button
    class="inline-block rounded-full p-[10px] bg-alphaGray backdrop-blur-[30px] group hover:bg-hoverGray">
    <img
      :src="ICON_SRC"
      alt="Chatbot"
      class="block group-hover:hidden align-middle animate-spin-slow" />
    <img
      :src="ICON_HOVER_SRC"
      alt="Chatbot"
      class="hidden group-hover:block align-middle animate-spin-slow" />
  </button>
</template>

<script setup>
const ICON_SRC = '/src/assets/contact.svg';
const ICON_HOVER_SRC = '/src/assets/contactHover.svg';
</script>

<style lang="scss" scoped></style>
