<!-- eslint-disable -->
<script lang="ts">

  export default {
    data: () => ({
      customer: [
        { text: "หน้าแรก", icon: "mdi-home-outline","href":"/" },
        { text: "ตะกร้า", icon: "mdi-shopping-outline","href":"/Mycart"  },
        { text: "ข้อความ", icon: "mdi-chat-processing-outline","href":"/text" },
        {text:"รับงาน", icon: "mdi-presentation","href": "/Order"},
        {text:"ร้านของฉัน", icon: "mdi-chef-hat","href": "/MyRestaurant"}
      ],
    }),
};
</script>
<template>
      <v-navigation-drawer permanent location="left" class="align-center">
        <template v-slot:prepend>
          <v-img class="pa-16" contain width="180" src="@/assets/logo.svg" />
        </template>
        
        <v-list>
            <v-list-item
              v-for="(item, i) in customer"
              :key="i"
              :value="item"
              active-color="primary"
              rounded="xl"
              class="px-8 mb-6"
            >
            <router-link :to="item.href">
              <div class="button">
                <v-icon :icon="item.icon"></v-icon>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </div>
            </router-link>
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
</template>



<style scoped>
.v-list-item-title {
  font-size: 1em !important;
}
.button{
  display: flex;
  justify-content: space-between;
}
</style>
