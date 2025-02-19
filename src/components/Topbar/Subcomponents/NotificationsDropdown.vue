<template>
  <div class="relative inline-block text-left">
    <button @click="toggleDropdown" class="flex items-center justify-center cursor-pointer">
      <Bell size="20" color="#152A46" />
    </button>

    <div v-if="isOpen" class="absolute right-0 mt-2 w-64 bg-white border border-neutral-200 rounded-lg shadow-sm z-50 transition-opacity duration-200 opacity-100">
      <div class="text-gray-700">
        <div class="px-4 py-3">
          <span class="font-bold text-[#02A38C]">Notificações</span>
        </div>
        <template v-if="notifications.length">
          <ul>
            <li v-for="(notification, index) in notifications" :key="index" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <img :src="notification.image" alt="User Avatar" class="w-10 h-10 rounded-full" />
              <div>
                <p class="text-sm font-semibold text-gray-900">{{ notification.title }}</p>
                <p class="text-xs text-gray-600">{{ notification.message }}</p>
              </div>
            </li>
          </ul>
        </template>
        <template v-else>
          <p class="px-4 py-2 text-center text-gray-500">Sem notificações</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { Bell, BellMinusIcon } from 'lucide-vue-next';

const props = defineProps({
  notifications: {
    type: Array,
    required: false,
    default: () => []
  }
});

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
