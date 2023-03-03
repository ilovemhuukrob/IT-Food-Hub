<template>
  <v-container class="ml-0">
    <v-list class="d-flex justify-space-between px-8">
      <v-list-item
        class="py-2 px-2 pr-5"
        v-for="(category, i) in categories"
        :key="i"
        :value="category.name"
        active-color="#2255A4"
        rounded="xl"
      >
        <template v-slot:prepend>
          <v-avatar color="#D7E1F1">
            <v-img class="icon-category" :src="category.icon" />
          </v-avatar>
          <v-list-item-title v-text="category.name"></v-list-item-title>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

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

<style scoped>
.v-list {
  background: none;
}
.v-list-item {
  background: white;
}
.icon-category {
  transform: scale(0.7);
}
</style>