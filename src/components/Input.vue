<template>
  <div :class="['flex flex-col gap-1', parentClass]">
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="[
        'px-3 py-2 border border-neutral-300 rounded-md focus:outline-none h-11 text-[#201E1E]',
        errorMessage ? 'border-red-500' : '',
        classes,
      ]"
    />
    <p v-if="errorMessage" class="text-red-500 text-xs">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: String,
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  classes: {
    type: String,
    default: '',
  },
  parentClass: {
    type: String,
    default: '',
  },
  errorMessage: String,
})

const emit = defineEmits(['update:modelValue'])
</script>
