<template>
  <div class="relative min-h-screen bg-background overflow-hidden">
    <!-- Header -->
    <Header />
    <!-- Main (Sections) -->
    <main class="relative">
      <slot />
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<style lang="scss" scoped></style>
