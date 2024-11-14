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
  const armeStore = useArmeStore();
  // Affiche le nom des armes dans la console
  for( let arme of armeStore.armes){
    console.log(arme.nom);
  }
</script>

