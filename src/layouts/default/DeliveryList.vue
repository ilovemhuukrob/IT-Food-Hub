<template>
  <v-container class="d-flex px-11 pb-11">
    <v-card class="w-25">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.id"
          :value="item.id"
          :title="item.id"
          :subtitle="item.datetime"
        >
        </v-list-item>
      </v-list>
    </v-card>
    <v-container style="background:white" class="w-75 pa-8 pb-14">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="pa-3">ORDER NO:</div>
        </v-col>
        <v-col cols="6">
          <div class="pa-3">Status</div>
          <div class="pa-3">Total Amount</div>
        </v-col>
        <v-col cols="6">
          <div class="pa-3">Thaipat Lawthanavijit</div>
          <div class="pa-3">ห้อง 308 คณะเทคโนโลยีสารสนเทศ</div>
          <div class="pa-3">Apr 11, 2023, 12:00</div>
        </v-col>
        <v-divider class="mt-8"></v-divider>
        <v-col cols="12">
          <v-table>
            <thead>
              <tr>
                <th class="text-center">No</th>
                <th class="text-center">Item</th>
                <th class="text-center">Quantity</th>
                <th class="text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item,i in desserts" :key="item.name">
                <td class="text-center">{{i+1}}</td>
                <td class="text-left">{{ item.name }}</td>
                <td class="text-center">{{ item.quantity }}</td>
                <td class="text-center">฿ {{ item.quantity * 50 }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-divider></v-divider>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [
      {
        id: "0004",
        datetime: "Apr 11, 2023, 12:00",
        price: 771,
      },
      {
        id: "0003",
        datetime: "Apr 11, 2023, 12:00",
        price: 771,
      },
      {
        id: "0002",
        datetime: "Apr 11, 2023, 12:00",
        price: 771,
      },
      {
        id: "0001",
        datetime: "Apr 11, 2023, 12:00",
        price: 771,
      },
    ],
    desserts: [
          {
            name: 'กะเพรา',
            quantity: 1,
          },
          {
            name: 'ราดหน้า',
            quantity: 2,
          },
          {
            name: 'ราดตัว',
            quantity: 3,
          },
        ],
  }),
};
</script>