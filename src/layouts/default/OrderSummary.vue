<template>
  <div style="width: 35%; background: pink">
    <v-sheet class="ma-3" rounded="xl">
      <div class="d-flex flex-column text-center">
        <span>Order Summary</span>
        <span>Order ID # {{ order.id }}</span>
        <span>Order Time {{ order.time }}</span>
      </div>
      <v-divider></v-divider>
      <div>
        <div class="d-flex justify-space-between">
          <span>รวมค่าอาหาร</span>
          <span>฿</span>
        </div>
        <div class="d-flex justify-space-between">
          <span>ค่าจัดส่ง</span>
          <span>฿</span>
        </div>
        <div class="d-flex justify-space-between">
          <span>ค่าคำสั่งซื้อ</span>
          <span>฿</span>
        </div>
        <div class="d-flex justify-space-between">
          <span>รวมทั้งหมด</span>
          <span>฿</span>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    order: Object
  }
}
</script>