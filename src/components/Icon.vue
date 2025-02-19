<script setup lang="ts">
import type { Component } from "vue";

const props = defineProps<{
  icon: Component;
  size?: number;
  color?: string;
  strokeWidth?: number;
}>();
</script>

<template>
  <component
    :is="icon"
    :size="size ?? 18"
    :color="color ?? 'white'"
    :stroke-width="strokeWidth ?? 1.7"
  />
</template>
