<template >
  <!-- eslint-disable -->
  <v-container class="pa-2 ma-0 pb-16">
    <v-row v-for="(type, typeName) in Menus">
      <p class="typeName px-14 pa-5">{{ typeName }}</p>
      <div class="d-flex flex-wrap">
        <v-col v-for="menu in type" cols="3" class="d-flex justify-center py-5">
          <v-card class="w-75" rounded="xl">
            <v-img
              cover
              aspect-ratio="1"
              src="https://cf.shopee.co.th/file/5160e1eb7f9b68c33e15e06780dac2ca"
            >
            </v-img>

            <v-card-item>
              <v-card-title style="font-weight: 400">
                {{ menu.title }}
              </v-card-title>
              <v-card-title class="d-flex justify-space-between">
                <span>{{ menu.price }}</span>
                <span>
                  <v-btn
                    icon="mdi-plus-thick"
                    size="x-small"
                    variant="flat"
                  ></v-btn>
                </span>
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.typeName {
  font-size: 2.25rem;
  font-weight: 400;
}
.v-row {
  display: flex;
  flex-flow: column;
}
</style>

<script lang="ts">
export default {
  data: () => ({
    Menus: {
      ข้าว: [
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
        {
          title: "กะเพรา",
          price: "50",
        },
      ],
      เส้น: [
        {
          title: "ราดหน้า",
          price: "50",
        },
        {
          title: "ราดตัว",
          price: "50",
        },
        {
          title: "ราดแขน",
          price: "50",
        },
        {
          title: "ราดขา",
          price: "50",
        },
      ],
    },
  }),
};
</script>