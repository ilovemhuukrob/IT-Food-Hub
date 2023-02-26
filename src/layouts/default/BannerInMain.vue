<!-- eslint-disable -->

<template>
  <div>
    <v-card
      rounded="xl"
      min-height="220"
      class="pt-8 pb-5 px-8 ma-10 h-50 d-flex flex-column justify-center"
      color="#2255A4"
    >
      <span class="food" style="position: absolute; z-index: -1; display: flex">
        <v-img
          width="120"
          src="@/assets/drink.svg"
          style="transform: translate(1em, -2.5rem)"
        />
        <v-img
          width="150"
          src="@/assets/noodle.svg"
          style="transform: translate(11em, 4.3rem)"
        />
        <v-img
          width="105"
          src="@/assets/cupcake.svg"
          style="transform: translate(21em, -2.5rem)"
        />
        <v-img
          width="150"
          src="@/assets/rice.svg"
          style="transform: translate(33em, -1.5rem)"
        />
      </span>
      <div class="bannertitle d-flex flex-column">
        <span>Enjoy Your Meal</span>
        <span>with <span style="color: #fe6612">IT Food Hub</span></span>
      </div>
    </v-card>
    <!-- <span style="position: absolute; transform: translate(47rem, -107%)">
      <v-img
        width="240"
        src="@/assets/man.svg"
        style="transform: translate(21em, -2.5em)"
      />
    </span> -->
  </div>
</template>

<style scoped>
.food {
  filter: invert(25%) sepia(11%) saturate(5145%) hue-rotate(186deg)
    brightness(97%) contrast(90%);
}
.bannertitle {
  font-size: 2.75rem;
  color: white;
}
</style>