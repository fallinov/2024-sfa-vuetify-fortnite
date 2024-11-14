<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  // Import du magasin des armes
  import {useArmeStore} from "@/stores/armeStore";
  // Charge le magasin des armes
  const amresStore = useArmeStore();
  // Affiche les armes dans la console
  console.log(amresStore.armes.value);
</script>
