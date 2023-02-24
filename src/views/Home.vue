<template>
  <v-card>
    <v-layout>
      <Navigation />
      <ProfileBar />
      <v-main style="min-height:100vh"><Banner /></v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
import ProfileBar from "@/components/ProfileBar.vue";
import Banner from "@/components/Banner.vue";
</script>

<style scope>
</style>