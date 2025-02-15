<template>
  <button
    :class="[
      type !== 'link' ? 'px-4 py-2 h-11' : '',
      'rounded-md focus:outline-none cursor-pointer transition-all',
      buttonVariants[type],
      disabledClass,
      classes,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger', 'outline', 'link'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])

const buttonVariants = {
  primary: 'bg-[#02A38C] text-white hover:bg-[#00AB74]',
  secondary: 'bg-neutral-400/90 text-white hover:bg-neutral-400',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-[#201E1E] text-[#201E1E]',
  link: 'text-[#02A38C] hover:text-[#00AB74] hover:underline',
}

const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
