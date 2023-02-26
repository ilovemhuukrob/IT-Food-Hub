<template>
  <!-- <v-card>
    <v-layout>
      <Navigation />
      <ProfileBar />
      <v-main style="min-height:100vh"></v-main>
    </v-layout>
  </v-card> -->
  <v-main style="min-height:100vh">
    <Banner></Banner>
  </v-main>
</template>

<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
import ProfileBar from "@/components/ProfileBar.vue";
import Banner from "@/components/Banner.vue";
</script>

<style scope>
</style>