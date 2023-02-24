<!-- eslint-disable -->

<template>
  <div>
    <v-img
      src="https://cdn.discordapp.com/attachments/812749326543487058/1074303855329816586/image_1.png"
      height="350"
      cover
    ></v-img>
    <v-card
      rounded="xl"
      class="pt-8 pb-5 px-8 ma-10"
      style="transform: translateY(-6.25em)"
    >
      <div class="d-flex justify-space-between">
        <p style="font-weight: 500" class="text-h3 pb-4">พี่ช้าง - คณะไอที</p>
        <v-btn icon="mdi-heart-outline"></v-btn>
      </div>
      <div>
        <p style="color: #4a4a4a">ข้าวแกง อาหารตามสั่ง</p>
        <v-list style="background: none">
          <v-list-item
            style="color: #4a4a4a"
            class="px-0 my-n2"
            v-for="(item, i) in items"
            :key="i"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
              <span class="px-1"></span>
              <v-list-item-title
                v-text="item.text"
                style="font-weight: 500"
              ></v-list-item-title>
              <span class="px-2"></span>
              <v-list-item-title v-text="item.subtext"></v-list-item-title>
            </template>
          </v-list-item>
        </v-list>
      </div>
      <span style="position: absolute; z-index: -1; display: flex">
        <v-img
          width="120"
          src="@/assets/drink.svg"
          style="transform: translate(1em, -2.5em)"
        />
        <v-img
          width="150"
          src="@/assets/noodle.svg"
          style="transform: translate(11em, 5em)"
        />
        <v-img
          width="105"
          src="@/assets/cupcake.svg"
          style="transform: translate(21em, -2.5em)"
        />
        <v-img
          width="150"
          src="@/assets/rice.svg"
          style="transform: translate(33em, 0em)"
        />
      </span>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    items: [
      {
        text: "เวลาเปิดให้บริการ",
        subtext: "วันนี้ 07:00-15:00",
        icon: "mdi-calendar-range",
      },
      { text: "เวลาทำอาหาร", subtext: "25 นาที", icon: "mdi-alarm" },
    ],
  }),
};
</script>

<style scoped>
* {
  font-family: "Mitr", sans-serif !important;
}
.v-card {
  display: flex;
  flex-flow: column;
}
.v-list-item__prepend > .v-icon {
  margin-inline-end: 0px;
}
</style>