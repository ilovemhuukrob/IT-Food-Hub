<template>
  <v-main>
    <div class="pa-12">
      <HeaderSearchBar />
      <HomeBanner />
      <HomeCategories />
      <HomeRestaurantList />
    </div>
  </v-main>
</template>

<script setup>
import HeaderSearchBar from "@/components/HeaderSearchBar.vue";
import HomeBanner from "@/components/HomeBanner.vue";
import HomeCategories from "@/components/HomeCategories.vue";
import HomeRestaurantList from "@/layouts/default/HomeRestaurantList.vue";
</script>