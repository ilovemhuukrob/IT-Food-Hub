<template>
  <v-container class="px-10 d-flex">
    <div style="width: 65%">
      <v-row class="ma-0 pa-0" style="background: red">
        <v-col v-for="order in orders" :key="order" cols="12" sm="4">
          <v-sheet
            style="text-align: center"
            class="pa-3"
            rounded="xl"
            elevation="2"
          >
            <div class="pa-3" style="font-weight: 500">
              Order ID # {{ order.id }}
            </div>
            <v-sheet
              class="d-flex flex-column"
              :style="{
                backgroundColor: order.status == 'Done' ? '#E8F5E9' : '#FFF3E0',
              }"
              rounded="xl"
            >
              <div class="d-flex flex-column pa-5">
                <div style="font-weight: 500">Order Time</div>
                <span>{{ order.ordertime }}</span>
              </div>
              <div
                class="pa-3"
                :style="{
                  color: order.status == 'Done' ? '#1B5E20' : '#E65100',
                }"
              >
                {{ order.status }}
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
    <OrderSummary />
  </v-container>
</template>

<script lang="ts" setup>
import OrderSummary from "@/layouts/default/OrderSummary.vue";
</script>

<script lang="ts">
export default {
  data: () => ({
    orders: [
      {
        id: "4897595",
        ordertime: "12 Aug, 2023 12:00",
        status: "Cooking",
      },
      {
        id: "4897595",
        ordertime: "12 Aug, 2023 12:00",
        status: "Cooking",
      },
      {
        id: "4897595",
        ordertime: "12 Aug, 2023 12:00",
        status: "Cooking",
      },
      {
        id: "4897595",
        ordertime: "12 Aug, 2023 12:00",
        status: "Done",
      },
      {
        id: "4897595",
        ordertime: "12 Aug, 2023 12:00",
        status: "Done",
      },
      {
        id: "4897595",
        ordertime: "12 Aug, 2023 12:00",
        status: "Done",
      },
    ],
  }),
};
</script>