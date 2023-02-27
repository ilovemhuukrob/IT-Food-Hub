<script setup lang="ts">
    import MenuInRestaurant from '@/layouts/default/MenuInRestaurant.vue'
    import DynamicRestaurantBanner from '@/components/DynamicRestaurantBanner.vue';
</script>
<template >
    <v-main style="min-height:100vh">
        <DynamicRestaurantBanner></DynamicRestaurantBanner>
        <MenuInRestaurant></MenuInRestaurant>
    </v-main>
</template>
<style scoped>
</style>
