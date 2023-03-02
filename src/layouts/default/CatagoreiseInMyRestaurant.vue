<script lang="ts" setup>
import DeliveryList from "@/layouts/default/DeliveryList.vue";
</script>

<template>
  <v-btn-toggle>
    <v-btn @click="deliveryList = !deliveryList" rounded="xl" class="px-1">
      <v-avatar color="#D7E1F1">
        <v-img class="c-icon" src="@/assets/รายการเดลิเวอรี.png"></v-img>
      </v-avatar>
      <span class="px-1"></span>
      <span>รายการเดลิเวอรี</span>
    </v-btn>

    <v-btn
      rounded="xl"
      class="px-1"
      @click="(overlay = !overlay), (addMenu = false), (deliveryList = false)"
    >
      <v-avatar color="#D7E1F1">
        <v-img class="c-icon" src="@/assets/ตั้งค่าเมนูอาหาร.png"></v-img>
      </v-avatar>
      <span class="px-1"></span>
      <span>ตั้งค่าเมนูอาหาร</span>
    </v-btn>
  </v-btn-toggle>

  <span v-show="deliveryList">
    <DeliveryList/>
  </span>

  <v-overlay v-model="overlay" class="d-flex justify-center align-center">
    <span v-show="!addMenu">
      <v-btn class="my-2" style="width: 100%" @click="addMenu = true">
        เพิ่มเมนูอาหาร
      </v-btn>
      <v-btn class="my-2" style="width: 100%">แก้ไขเมนูอาหาร</v-btn>
    </span>
    <span v-show="addMenu">
      <v-sheet rounded="xl" style="width: 600px">
        <div class="d-flex flex-column">
          <span>เพิ่มรูป</span>
          <span
            >*ภาพประกอบที่สวยและคมชัดมักทำให้อาหารเป็นที่นิยมของลูกค้า
            ขนาดสูงสุด 2 MB นามสกุลไฟล์ที่รองรับ PNG, JPG</span
          >
        </div>
        <div>
          <span>ชื่ออาหาร</span>
          <v-text-field label="Label"></v-text-field>
        </div>
        <div>
          <span>รายละเอียดอาหาร</span>
          <v-text-field label="Label"></v-text-field>
        </div>
      </v-sheet>
    </span>
  </v-overlay>
</template>

<script lang="ts">
export default {
  data() {
    return {
      select: '',
      toggle_exclusive: 0,
      overlay: false,
      addMenu: false,
      deliveryList: false
    };
  },
};
</script>

<style scoped>
.c-icon {
  transform: scale(0.6);
}
</style>