<template>
  <div class="h-full overflow-hidden">
    <header class="p-4">
      <div class="flex overflow-x-auto relative">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="setActiveTab(index)"
          :class="{
            'text-[#02A38C] border-b-2 border-[#02A38C]': activeTab === index,
            'text-gray-500 hover:text-gray-700': activeTab !== index,
          }"
          class="flex-shrink-0 cursor-pointer px-4 py-2 text-sm font-medium focus:outline-none"
        >
          {{ tab.label }}
        </button>

        <button
          v-if="showNavigationArrow"
          @click="scrollTabs"
          class="flex-shrink-0 px-2 py-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>

        </button>
      </div>
    </header>
    <main class="bg-neutral-100/50 h-full p-4">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
        <component :is="tab.component" />
      </div>
    </main>
  </div>
</template>

<script>
import Subject from './Components/Subject.vue'

export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: 'Matérias', component: Subject},
        { label: 'Banca', component: 'Tab2Content' },
        { label: 'Ano', component: 'Tab3Content' },
      ],
      showNavigationArrow: false,
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
    scrollTabs() {
      const container = this.$el.querySelector('header div');
      container.scrollBy({ left: 100, behavior: 'smooth' });
    },
    checkOverflow() {
      const container = this.$el.querySelector('header div');
      this.showNavigationArrow = container.scrollWidth > container.clientWidth;
    },
  },
  mounted() {
    this.checkOverflow();
    window.addEventListener('resize', this.checkOverflow);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkOverflow);
  },
};
</script>

<style scoped>
</style>
