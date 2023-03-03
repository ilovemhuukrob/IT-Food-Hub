<template>
  <v-container class="ml-0">
    <v-list class="d-flex justify-space-between px-8">

      <div>
        <v-list-item class="py-2 px-2 pr-5" title="รายการเดลิเวอรี" value="รายการเดลิเวอรี"
          @click="showCategoryName('รายการเดลิเวอรี')" active-color="#2255A4" rounded="xl">
          <template v-slot:prepend>
            <v-avatar color="#D7E1F1">
              <v-img class="icon-category" src="@/assets/รายการเดลิเวอรี.png" />
            </v-avatar>
          </template>
        </v-list-item>
      </div>


      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="ตั้งค่าเมนูอาหาร"></v-list-item>
        </template>

        <v-list-item class="py-2 px-2 pr-5" title="รายการเดลิเวอรี" value="รายการเดลิเวอรี"
          @click="showCategoryName('รายการเดลิเวอรี')" active-color="#2255A4" rounded="xl">
        </v-list-item>
      </v-list-group>
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
    showCategoryName(categoryName: any) {
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