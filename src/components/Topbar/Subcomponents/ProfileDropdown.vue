<template>
  <div class="relative inline-block text-left">

    <button
      @click="toggleMenu"
      class="flex items-center justify-center cursor-pointer w-8 h-8 rounded-full border border-[#152A46] bg-[#152A46] text-white font-bold"
    >
      <template v-if="userImage">
        <img :src="userImage" alt="User Avatar" class="w-8 h-8 rounded-full" />
      </template>
      <template v-else>
        <span class="text-xs">{{ initials }}</span>
      </template>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-1 w-48 bg-white border border-neutral-200 rounded-lg shadow-sm z-50"
      @mouseenter="isOpen = true"
      @mouseleave="isOpen = false"
    >
      <ul class="text-gray-700">
        <li><a href="#" class="text-sm block px-4 py-2 hover:bg-gray-100">Perfil</a></li>
        <li><a href="#" class="text-sm block px-4 py-2 hover:bg-gray-100">Configurações</a></li>
        <li><a href="#" class="text-sm block px-4 py-2 hover:bg-gray-100">Sair</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
  userImage: {
    type: String,
    required: false,
    default: ''
  },
  fullName: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const initials = computed(() => {
  const names = props.fullName.split(' ');
  return names.length > 1 ? `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase() : names[0].charAt(0).toUpperCase();
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
