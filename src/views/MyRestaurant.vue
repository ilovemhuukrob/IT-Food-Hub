<template>
  <v-main style="min-height: 100vh">
    <RestaurantBanner />
    <Catagoreise :categories="categories" @clicked-show-category-name="clickShowCategoryName" />
    <span v-show="categoryName == 'รายการเดลิเวอรี'">
      <DeliveryList />
    </span>
  </v-main>
</template>

<script lang="ts" setup>
import RestaurantBanner from "@/components/RestaurantBanner.vue";
import Catagoreise from "@/layouts/default/Catagoreise.vue";
import DeliveryList from "@/layouts/default/DeliveryList.vue";
</script>

<script lang="ts">
export default {
  data: () => ({
    categoryName: '',
    categories: [
      {
        name: "รายการเดลิเวอรี",
        icon: "/src/assets/รายการเดลิเวอรี.png",
      },
      {
        name: "รายการอาหาร",
        icon: "/src/assets/รายการอาหาร.png",
      },
      {
        name: "ตั้งค่ารายการอาหาร",
        icon: "/src/assets/ตั้งค่ารายการอาหาร.png",
      },
    ],
  }),
  methods: {
    clickShowCategoryName(value) {
      console.log(value)
      if (this.categoryName == value) {
        this.categoryName = ''
      }
      else {
        this.categoryName = value;
      }
    }
  }
};
</script>

<style scope>
.v-list {
  gap: 5%;
  justify-content: start !important;
}
</style>