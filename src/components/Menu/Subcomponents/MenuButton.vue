<script setup lang="ts">
import type { Component } from "vue";
import Icon from "../../Icon.vue";

const props = defineProps<{
  isExpanded: boolean;
  disabled?: boolean;
  icon: Component;
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;
  classes?: string;
}>();

const emit = defineEmits(["click"]);

const disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";

const handleClick = (event: Event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<template>
  <button
    :class="[
      ' w-full flex items-center gap-2.5 py-4 px-5 cursor-pointer transition-all hover:bg-[#1e3a5f]',
      isExpanded ? 'justify-start' : 'justify-center',
      disabledClass,
      classes
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <Icon
      :icon="icon"
      :size="iconSize"
      :color="iconColor"
      :strokeWidth="iconStrokeWidth"
    />

    <span v-if="isExpanded" class="text-sm transition-all duration-300 ease-in-out whitespace-nowrap">
      <slot></slot>
    </span>
  </button>
</template>
