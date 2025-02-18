<script setup lang="ts">
import { logout } from '@/api/auth/logout'
</script>

<template>
    <div
        class="w-20 h-full bg-[#152A46] transition-all duration-300 ease-in-out hover:w-64 overflow-hidden"
    >
        <div class="flex flex-col p-4 text-white">
            <div class="flex flex-col items-center p-4 text-white">
                <img
                    class="w-100 max-w-[48px]"
                    src="../../assets/images/logo/vertice-simbol.png"
                    alt="Símbolo Vértice"
                />
            </div>
            <a class="pt-5 pb-2 text-start cursor-pointer">Menu</a>
            <a class="pt-5 pb-2 text-start cursor-pointer text-red-500 hover:text-red-700" @click="logout">
                Sair
            </a>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
