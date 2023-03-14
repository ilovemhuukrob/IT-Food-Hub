
<template>
  <v-main>
    <div class="pa-12">
          <HeaderSearchBar/>
    <BannerInMain></BannerInMain>
    <Catagoreise/>
    <RestaurantInMain></RestaurantInMain>
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import HeaderSearchBar from "@/layouts/default/HeaderSearchBar.vue";
//Banner is just a empty box bordered-radius สามารถใช้ได้ทุกหน้าที่มี
import BannerInMain from "@/layouts/default/HomeBanner.vue";
import Catagoreise from "@/layouts/default/HomeCatagoreise.vue";
import RestaurantInMain from "@/layouts/default/HomeRestaurants.vue";
</script>

<script lang="ts">
export default {
  data: () => ({
    categories: [
      {
        name: "ข้าวแกง",
        icon: "/src/assets/ข้าวแกง.png",
      },
      {
        name: "อาหารตามสั่ง",
        icon: "/src/assets/อาหารตามสั่ง.png",
      },
      {
        name: "ก๋วยเตี๋ยว",
        icon: "/src/assets/ก๊วยเตี๋ยว.png",
      },
      {
        name: "เครื่องดื่ม",
        icon: "/src/assets/เครื่องดื่ม.png",
      },
      {
        name: "ของทานเล่น",
        icon: "/src/assets/ของทานเล่น.png",
      }
    ],
  }),
};
</script>