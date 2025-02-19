<template>
  <div class="w-full h-16 flex items-center justify-between p-5">
    <p class="text-lg font-semibold text-neutral-800">Olá, Leticia!</p>
    <div class="flex items-center justify-end gap-4">
      <NotificationsDropdown :notifications="notificationsData" />
      <ProfileDropdown :fullName="'Leticia Lopes'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NotificationsDropdown from './Subcomponents/NotificationsDropdown.vue';
import ProfileDropdown from './Subcomponents/ProfileDropdown.vue';

const notificationsData = [
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    title: 'Maria Silva',
    message: 'Enviou uma nova mensagem.'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'João Souza',
    message: 'Curtiu sua postagem.'
  }
];
</script>
