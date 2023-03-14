<template>
  <v-sheet color="#2255A4">
    <v-card class="pa-8 elevation-5" rounded="xl">
      <v-img contain width="180" src="https://cdn.discordapp.com/attachments/1019966926014910516/1085258301572386928/itfoodhub.png" />
      <p class="text-center ma-5">To continue, log in to IT Food Hub.</p>
      <v-btn rounded="pill">
        <v-img
          :width="20"
          aspect-ratio="1"
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        ></v-img>
        <div class="px-2"></div>
        <p>CONTINUE WITH GOOGLE</p></v-btn
      >
    </v-card>
  </v-sheet>
</template>

<style scoped>
.v-sheet {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/src/assets/bannerpattern3.png');
  background-position: center;
}
.v-card {
  width: 30%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>