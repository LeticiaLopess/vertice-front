<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const email = ref('')
const password = ref('')

const handlePrimaryClick = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/login', {
      email: email.value,
      password: password.value,
    })

    console.log('Login successful:', response.data)
    router.push('/dashboard')
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message)
  }
}
</script>

<template>
  <main class="flex h-screen">
    <div class="hidden md:flex md:w-[65%] justify-center items-center bg-[#152A46] h-full">
      <img
        class="max-h-64"
        src="../../assets/images/logo/vertice_degrade.png"
        alt="Logo do Curso Vértice"
      />
    </div>

    <div
      class="w-full md:w-[35%] flex flex-col justify-center items-center bg-white border border-blue-500 p-6 lg:p-14 xl:p-24"
    >
      <header class="w-full flex flex-col justify-center items-start w-full mb-10">
        <h1 class="text-2xl font-bold text-[#201E1E] mb-0.5">Entre em sua conta</h1>
        <span class="text-neutral-500">Bem-vindo(a) de volta!</span>
      </header>

      <main class="w-full flex flex-col justify-center items-center gap-5 mb-4">
        <Input label="E-mail" placeholder="E-mail" parentClass="w-full" />
        <Input label="Senha" placeholder="Senha" parentClass="w-full" />
      </main>

      <footer class="w-full flex flex-col justify-center items-end gap-8">
        <Button type="link"> Esqueceu a senha?</Button>
        <Button type="primary" classes="w-full" @click="handlePrimaryClick">Entrar</Button>

        <div class="flex items-center justify-center space-x-4 w-full">
          <hr class="flex-1 border-t border-gray-300" />
          <span class="text-neutral-500">ou continue com</span>
          <hr class="flex-1 border-t border-gray-300" />
        </div>

        <button
          class="px-4 py-2 w-full h-11 border border-neutral-300 rounded-md flex justify-center items-center space-x-2 cursor-pointer"
        >
          <img src="../../assets/images/google-icon.png" alt="Google" class="w-5 h-5" />
          <span class="text-neutral-700">Google</span>
        </button>

        <div class="w-full flex flex-col lg:flex-row gap-1.5 justify-center items-center mt-3">
          <p class="text-[#201E1E]">Não tem uma conta?</p>
          <Button type="link">Cadastre-se!</Button>
        </div>
      </footer>
    </div>
  </main>
</template>
