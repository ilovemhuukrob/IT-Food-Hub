<template>
  <v-container class="ml-0">
    <v-list class="d-flex justify-space-between px-8">
      <v-list-item
        class="py-2 px-2 pr-5"
        v-for="(category, i) in categories"
        :key="i"
        :value="category.name"
        @click="showCategoryName(category.name)"
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
        name: "รายการเดลิเวอรี",
        icon: "/src/assets/รายการเดลิเวอรี.png",
      },
      {
        name: "ตั้งค่าเมนูอาหาร",
        icon: "/src/assets/ตั้งค่าเมนูอาหาร.png",
      },
    ],
  }),
  methods: {
    showCategoryName(categoryName : any) {
      this.$emit("clicked-show-category-name", categoryName);
    },
  },
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
  transform: scale(0.6);
}
</style>