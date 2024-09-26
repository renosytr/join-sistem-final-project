<script>
export default {
  data(){
    return {
      isOpen: false
    }
  },
  methods: {
    onClick() {
      this.isOpen = !this.isOpen
      console.log("click")
    }
  }
}
</script>
<template>
  <button @click="onClick()" type="button" class="bg-primary p-3 rounded-full text-white">
    <slot></slot>
  </button>
</template>