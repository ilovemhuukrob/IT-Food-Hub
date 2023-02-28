<script setup lang="ts">
    
    import DynamicRestaurantBanner from '@/components/DynamicRestaurantBanner.vue';
    import MenuRestaurant from '@/layouts/default/MenuRestaurant.vue';
</script>
<template >
    <v-main style="min-height:100vh">
        <DynamicRestaurantBanner></DynamicRestaurantBanner>
        <MenuRestaurant></MenuRestaurant>
    </v-main>
</template>
<style scoped>
</style>
