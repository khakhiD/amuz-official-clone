<template>
  <section>
    <!-- wrapper -->
    <div>
      <!-- foreground title & button -->
      <div>
        <h1>{{ TITLE_CONTENT }}</h1>
        <button>Contact us</button>
      </div>
      <!-- scroll animation main -->
      <div>
        <!-- 8 icons-->
        <!-- NOTE: 정중앙 기준 -> 스크롤할 수록 확대 + 투명도 조절 -->
        <div v-for="n in 8" :key="n" class="TEMP_ICONS_BASECLASS"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const TITLE_CONTENT = '즐거운 상상은 현실이됩니다.';
const TEMP_ICONS_BASECLASS = 'w-5 h-5 bg-red';
</script>

<style lang="scss" scoped></style>
