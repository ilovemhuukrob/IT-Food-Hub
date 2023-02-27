
<template>
  <v-main style="min-height: 100vh">
    <Catagoreise
      :categories="categories"
    />
    <RestaurantInMain></RestaurantInMain>
  </v-main>
</template>

<script lang="ts" setup>
import NavbarMain from "@/layouts/default/NavbarMain.vue";
//Banner is just a empty box bordered-radius สามารถใช้ได้ทุกหน้าที่มี
import BannerInMain from "@/layouts/default/BannerInMain.vue";
import Catagoreise from "@/layouts/default/Catagoreise.vue";
import RestaurantInMain from "@/layouts/default/RestaurantInMain.vue";
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
        name: "ก๊วยเตี๋ยว",
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