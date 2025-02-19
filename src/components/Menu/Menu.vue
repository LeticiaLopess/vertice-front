<!-- Menu.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { logout } from "@/api/auth/logout";
import { useRouter } from 'vue-router';
import { BookOpen, LibraryBig, LogOut, LayoutPanelLeft } from "lucide-vue-next";
import MenuButton from './Subcomponents/MenuButton.vue';

const isExpanded = ref(false);
const router = useRouter()
</script>

<template>
  <div
    class="w-16 h-full bg-[#152A46] transition-all duration-300 ease-in-out hover:w-64 overflow-hidden"
    @mouseover="isExpanded = true"
    @mouseleave="isExpanded = false"
  >

  <div class="w-full flex flex-col h-full justify-between">
    <div class="flex flex-col text-white items-center">
      <div class="flex flex-col items-center text-white p-3 mb-2 cursor-pointer" @click="router.push('/dashboard')">
        <img class="w-100 max-w-[34px]" src="../../assets/images/logo/vertice-simbol.png" alt="Símbolo Vértice" />
      </div>
      <MenuButton :isExpanded="isExpanded" :icon="LayoutPanelLeft" @click="router.push('/dashboard')">Início</MenuButton>
      <MenuButton :isExpanded="isExpanded" :icon="BookOpen" @click="router.push('/courses')">Cursos</MenuButton>
      <MenuButton :isExpanded="isExpanded" :icon="LibraryBig" @click="router.push('/questions')">Banco de Questões</MenuButton>
    </div>

    <div class="flex flex-col text-white items-center">
       <MenuButton :isExpanded="isExpanded" :icon="LogOut" @click="logout">Sair</MenuButton>
    </div>
  </div>

  </div>
</template>
