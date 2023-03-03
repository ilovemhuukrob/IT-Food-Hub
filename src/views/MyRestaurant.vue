<template>
  <v-main style="min-height: 100vh">
    <RestaurantBanner />
    <Catagoreise @clicked-show-category-name="clickShowCategoryName" />
    <span v-show="categoryName == ''">
      <MenuRestaurant />
    </span>
    <span v-show="categoryName == 'รายการเดลิเวอรี'">
      <DeliveryList />
    </span>
  </v-main>
</template>

<script lang="ts" setup>
import RestaurantBanner from "@/components/RestaurantBanner.vue";
import Catagoreise from "@/layouts/default/CatagoreiseInMyRestaurant.vue";
import MenuRestaurant from "@/layouts/default/MenuRestaurant.vue";
import DeliveryList from "@/layouts/default/DeliveryList.vue";
</script>

<script lang="ts">
export default {
  data: () => ({
    categoryName: '',
    overlay: false,
  }),
  methods: {
    clickShowCategoryName(value: any) {
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