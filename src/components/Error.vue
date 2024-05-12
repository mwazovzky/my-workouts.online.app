<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  message: String,
  required: false,
  default: null
})
</script>

<template>
  <div class="error-message" v-if="message">
    {{ message }}
  </div>
</template>

<style scoped>
.error-message {
  font-size: 0.8em;
  color: #ffffff;
  background-color: #e3342f;
  padding: 4px;
  margin: 4px 0;
  border-radius: 4px;
}
</style>
