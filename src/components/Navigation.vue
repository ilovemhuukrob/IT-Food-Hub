<script lang="ts" setup>
import CartOverlay from "@/components/CartOverlay.vue";
</script>

<script lang="ts">
  export default {
    data: () => ({
      customer: [
        { text: "หน้าแรก", icon: "mdi-home-outline","href":"/" },
        { text: "ตะกร้า", icon: "mdi-shopping-outline","href":""  },
        { text: "ข้อความ", icon: "mdi-chat-processing-outline","href":"/text" },
        {text:"รับงาน", icon: "mdi-presentation","href": "/Order"},
        {text:"ร้านของฉัน", icon: "mdi-chef-hat","href": "/MyRestaurant"}
      ],
      overlay: false
    }),
};
</script>
<template>
      <v-navigation-drawer permanent location="left" class="align-center">
        <template v-slot:prepend>
          <v-img class="pa-16" contain width="180" src="@/assets/logo.svg" />
        </template>
        <!--  overlay menu component      เป็น over lay ใน ร้านค้า 
        @click เพื่อเช็ตว่า ปุ้มเป็น ตะกร้ามั้ย ถ้าใช่ ให้เปิด overlay-->
        <v-list>
            <v-list-item
              v-for="(item, i) in customer"
              :key="i"
              :value="item"
              :to="item.href"
              active-color="primary"
              rounded="xl"
              class="px-8 mb-6"
              
            @click = "item.text == 'ตะกร้า'? overlay = ! overlay : overlay = overlay"  
            >
       
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>  
          <v-list class="pb-14">
            <v-list-item
              value="logout"
              title="LOGOUT"
              rounded="xl"
              class="px-8 test"
              active-color="red"
            >
              <template v-slot:prepend>
                <v-icon icon="mdi-logout"></v-icon>
              </template>
            </v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>
       <!--  overlay cart       เป็น over lay เวลากด ไปที่ cart ใน navbar-->
      <v-overlay v-model="overlay">
          <CartOverlay />
      </v-overlay>
</template>



<style scoped>
.v-list-item-title {
  font-size: 1em !important;
}
</style>