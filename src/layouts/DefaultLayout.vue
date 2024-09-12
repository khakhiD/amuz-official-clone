<template>
  <div class="relative min-h-screen bg-background">
    <Header />
    <main class="relative">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>
