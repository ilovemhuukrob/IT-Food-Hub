
<template>
    <v-main style="min-height:100vh">
        <NavbarMain></NavbarMain>
        <BannerInMain></BannerInMain>
        <Catagoreise></Catagoreise>
        <RestaurantInMain></RestaurantInMain>
    </v-main>
</template>

<script lang="ts" setup>
   import NavbarMain from '@/layouts/default/NavbarMain.vue'
   import BannerInMain from '@/layouts/default/BannerInMain.vue'
   import Catagoreise from '@/layouts/default/Catagoreise.vue'
   import  RestaurantInMain from '@/layouts/default/RestaurantInMain.vue'
</script>
