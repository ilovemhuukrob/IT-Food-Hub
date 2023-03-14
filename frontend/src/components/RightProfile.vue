<template>
  <v-navigation-drawer permanent location="right">
    <p class="text text-h4 text-center pt-16">My Profile</p>
    <v-card
      class="mx-auto w-75 text-center mt-6 mb-8 py-4"
      variant="outlined"
      color="grey-lighten-2"
      rounded="lg"
    >
      <v-avatar color="#FE6612" size="60">
        <span class="text-h5" style="color: white">KY</span>
      </v-avatar>
      <p class="text text-subtitle-1 pt-1" style="color: black">
        Kanlayakorn Yeenang
      </p>
    </v-card>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
</script>

<style scoped>
.text {
  font-family: "Mitr", sans-serif !important;
}

.navigation {
  width: 100% !important;
}
</style>