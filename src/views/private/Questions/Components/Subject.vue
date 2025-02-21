<template>
  <div>
    <div class="mb-4">
      <div class="flex items-center bg-white rounded-md p-2">
        <div class="text-gray-500 mr-2">
          <!-- Ícone de Pesquisa -->
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input type="text" class="flex-1 border-none outline-none bg-transparent" placeholder="Buscar" />
      </div>
    </div>

    <!-- Accordion -->
    <div class="bg-white rounded-lg overflow-hidden">
      <div v-for="(section, index) in accordionSections" :key="index">
        <div @click="toggleAccordion(index)" class="flex items-center p-4 cursor-pointer hover:bg-gray-50">
          <input type="checkbox" v-model="section.isChecked" class="mr-3" @click.stop />
          <span class="flex-1 font-medium">{{ section.label }}</span>
          <span :class="{'transform rotate-180': section.isOpen}" class="transition-transform">▼</span>
        </div>
        <div v-show="section.isOpen" class="px-4 py-2">
          <div v-for="(item, idx) in section.items" :key="idx" class="flex items-center mb-2">
            <input type="checkbox" v-model="item.isChecked" class="mr-3" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionSections: [
        {
          label: 'Português',
          isOpen: false,
          isChecked: false,
          items: [
            { label: 'Gramática', isChecked: false },
            { label: 'Concordância Nominal', isChecked: false },
            { label: 'Concordância Verbal', isChecked: false },
          ],
        },
        {
          label: 'Matemática',
          isOpen: false,
          isChecked: false,
          items: [
            { label: 'Função Afim', isChecked: false },
            { label: 'Geometria Analítica', isChecked: false },
            { label: 'Geometria Espacial', isChecked: false },
          ],
        },
        {
          label: 'Física',
          isOpen: false,
          isChecked: false,
          items: [
            { label: 'Leis de Newton', isChecked: false },
            { label: 'Eletrodinâmica', isChecked: false },
            { label: 'Força magnética', isChecked: false },
            { label: 'Lei de Lenz', isChecked: false },
            { label: 'Física quântica', isChecked: false },
          ],
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      const section = this.accordionSections[index];
      section.isOpen = !section.isOpen;

      if (section.isChecked) {
        section.items.forEach(item => item.isChecked = true);
      } else {
        section.items.forEach(item => item.isChecked = false);
      }
    },
  },
  watch: {
    'accordionSections': {
      deep: true,
      handler() {
        this.accordionSections.forEach(section => {
          const allChecked = section.items.every(item => item.isChecked);
          section.isChecked = allChecked;
        });
      },
    },
  },
};
</script>

<style scoped>
</style>
