<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <v-app>
  <Header> </Header>
  <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template> 

<style scoped>
</style>
