<template>
  <!--  overlay menu component      เป็น over lay ใน ร้านค้า -->
    <div class=" test-overlay overflow-y-auto"
    
          location="top center"
          v-scroll.self="onScroll"
      >
      
      </div>
</template>
<style scoped>
.test-overlay{
    border-radius: 20px;
    width: 600px;
    height: 800px;
    background-color: white;
  }
  
</style>
<script lang="ts" >
  export default {
    data: () => ({
      scrollInvoked: 0,
    }),
    methods: {
      onScroll () {
        this.scrollInvoked++
      },
    },
  }
</script>