<template>
  <v-card>
    <v-layout>
      <Navigation />
      <ProfileBar />
      <router-view />
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import Navigation from "@/components/Navigation.vue";
import ProfileBar from "@/components/ProfileBar.vue";
</script>