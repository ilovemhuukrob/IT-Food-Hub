<template>
  <v-main style="min-height: 100vh">
    <RestaurantBanner />
    <Catagoreise />
    
  </v-main>
</template>

<script lang="ts" setup>
import RestaurantBanner from "@/components/RestaurantBanner.vue";
import Catagoreise from "@/layouts/default/CatagoreiseInMyRestaurant.vue";
import DeliveryList from "@/layouts/default/DeliveryList.vue";
</script>

<script lang="ts">
export default {
  data: () => ({
    categoryName: '',
    overlay: false,
  }),
  methods: {
    clickShowCategoryName(value) {
      if (this.categoryName == value) {
        this.categoryName = ''
      }
      else {
        this.categoryName = value;
      }
    }
  },
};
</script>

<style scope>
.v-list {
  gap: 5%;
  justify-content: start !important;
}
</style>