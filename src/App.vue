<script setup> 
// Composition API
import { ref } from 'vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import imageLogo from "@/assets/img/logo-brand.png"
// Data binding

const isOpen = ref(false)
const openPopUp = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <header class="flex items-center justify-between px-3 lg:px-32 py-6">
    <img class="h-full" :src="imageLogo" alt="logo join sistem">
    <ul class="hidden lg:flex">
      <li class="mx-3">
        <a href="#">Home</a>
      </li>
      <li class="mx-3">
        <a href="#">Blog</a>
      </li>
      <li class="mx-3">
        <a href="#">About Us </a>
      </li>
      <li class="mx-3">
        <a href="#">Contact Us</a>
      </li>
    </ul>
    <button type="button" class="hidden lg:block bg-primary px-3 py-3 rounded-full text-white font-bold">
      Contact Us
    </button>
    <ButtonPrimary class="lg:hidden">
      <img src="@/assets/img/menu-icon.png" class="w-6" alt="Menu Icon">
    </ButtonPrimary>
  </header>
  <div v-if="isOpen" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-32 bg-white z-20 rounded-lg p-2 flex justify-between items-center">
    <span>Pop Up Content</span>
    <ButtonPrimary>Close</ButtonPrimary>
  </div>
  <div v-if="isOpen" @click="isOpen = false" class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
</template>
