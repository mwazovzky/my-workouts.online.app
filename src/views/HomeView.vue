<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <HelloWorld class="hello" />
    <TheWelcome />
  </main>
</template>

<style scoped>
.hello {
  margin-top: 32px;
}
</style>
