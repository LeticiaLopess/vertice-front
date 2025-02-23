<template>
  <div :class="['flex flex-col gap-1', parentClass]">
    <div class="flex gap-2">
      <select
        :id="id"
        :value="modelValue"
        @change="handleSelectChange"
        :class="[
          'px-3 py-2 border border-neutral-300 rounded-md focus:outline-none h-11 text-[#201E1E] w-full',
          errorMessage ? 'border-red-500' : '',
          classes,
        ]"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <button
        v-if="allowAdd"
        type="button"
        @click="openAddOptionModal"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        +
      </button>
    </div>
    <p v-if="errorMessage" class="text-red-500 text-xs">{{ errorMessage }}</p>

    <div v-if="showAddOptionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 class="text-lg font-bold mb-4">Adicionar nova opção</h2>
        <input
          v-model="newOptionLabel"
          type="text"
          placeholder="Digite o nome da nova opção"
          class="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none mb-4"
        />
        <div class="flex justify-end gap-2">
          <button
            @click="closeAddOptionModal"
            class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            @click="addNewOption"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: String,
  modelValue: [String, Number],
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Selecione uma opção',
  },
  classes: {
    type: String,
    default: '',
  },
  parentClass: {
    type: String,
    default: '',
  },
  errorMessage: String,
  allowAdd: {
    type: Boolean,
    default: false,
  },
  endpoint: String,
})

const emit = defineEmits(['update:modelValue', 'addOption'])

const showAddOptionModal = ref(false)
const newOptionLabel = ref('')

const handleSelectChange = (event) => {
  emit('update:modelValue', event.target.value)
}

const openAddOptionModal = () => {
  showAddOptionModal.value = true
}

const closeAddOptionModal = () => {
  showAddOptionModal.value = false
  newOptionLabel.value = ''
}

const addNewOption = async () => {
  if (newOptionLabel.value.trim()) {
    try {
      const response = await axios.post(props.endpoint, { name: newOptionLabel.value.trim() })
      const newOption = response.data

      emit('addOption', newOption)
      emit('update:modelValue', newOption.id)
      closeAddOptionModal()

    } catch (error) {
      alert('Erro ao adicionar nova opção.')
    }
  }
}
</script>
