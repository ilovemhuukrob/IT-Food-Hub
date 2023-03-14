<template>
  <v-card
    rounded="xl"
    min-height="220"
    color="#2255A4"
    class="d-flex flex-column justify-center overflow-visible"
    style="position: relative"
  >
    <span class="men">
      <v-img src="@/assets/men.png" width="250"></v-img>
    </span>
    <div class="bannertitle d-flex flex-column h1">
      <span class="ml-10">Enjoy Your Meal</span>
      <span class="ml-10"
        >with <span style="color: #fe6612">IT Food Hub</span></span
      >
    </div>
  </v-card>
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
.v-card {
  background-image: url("/src/assets/bannerpattern1.png");
}
.men {
  position: absolute;
  right: 1.25%;
  transform: translateY(-12%);
}
</style>