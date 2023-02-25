
<template>
    <v-main style="min-height:100vh">
        <NavbarMain></NavbarMain>
        <div class="banner-container">
            <BannerInMain></BannerInMain>
        </div>
        <Catagoreise></Catagoreise>
        <RestaurantInMain></RestaurantInMain>
    </v-main>
</template>

<script lang="ts" setup>
   import NavbarMain from '@/layouts/default/NavbarMain.vue'
   //Banner is just a empty box bordered-radius สามารถใช้ได้ทุกหน้าที่มี
   import BannerInMain from '@/layouts/default/BannerInMain.vue'
   import Catagoreise from '@/layouts/default/Catagoreise.vue'
   import  RestaurantInMain from '@/layouts/default/RestaurantInMain.vue'
</script>
<style scoped>
    .banner-container{
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
    }
</style>
