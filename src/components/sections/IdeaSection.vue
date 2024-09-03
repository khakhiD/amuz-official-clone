<template>
  <section id="idea-section" class="relative">
    <div class="">
      <div>
        <h1>{{ CONSTANTS_IDEA.TITLE }}</h1>
        <p>{{ CONSTANTS_IDEA.CONTENT }}</p>
        <div class="">logo video mobile</div>
      </div>
      <div id="amuz-logo">logo video pc</div>
    </div>
  </section>
</template>

<script setup>
const CONSTANTS_IDEA = {
  TITLE: `
    Idea can change
    everything
  `,
  CONTENT: `
    start-up companies can only
    enjoy what they can. we can
    enjoy what we can do well.
  `,
};
</script>

<style lang="scss" scoped></style>
