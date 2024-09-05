<template>
  <div>
    <a href="www.dongho.xyz" target="_blank">
      <Button :content="a"></Button>
    </a>
  </div>
</template>

<script setup>
import Button from '../components/Button.vue';
const a = 'About us';
const b = true;
const BUTTON_CONTENT = '테스트중';
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>
