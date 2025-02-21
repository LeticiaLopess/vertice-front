<script setup lang="ts">
import Menu from '@/components/Menu/Menu.vue'
import Topbar from '@/components/Topbar/Topbar.vue'
</script>

<template>
  <div class="flex h-screen">
    <Menu />
    <div class="flex flex-col flex-1">
      <Topbar />
      <div class="h-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
