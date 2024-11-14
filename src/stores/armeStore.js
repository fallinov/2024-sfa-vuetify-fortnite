import { defineStore } from 'pinia'

const armes = [
  {
    id: 1,
    nom: "Arbalète",
    degats: 75,
    cadence: 0.8,
    rechargement: 2.5,
    image: "arbalete.webp",
    description: "L'arbalète est une arme à longue portée, idéale pour des attaques précises."
  },
  {
    id: 2,
    nom: "Fusil d'assaut",
    degats: 30,
    cadence: 5.5,
    rechargement: 2.3,
    image: "fusil-assaut.webp",
    description: "Le fusil d'assaut est une arme automatique à moyenne portée."
  },
  {
    id: 3,
    nom: "Fusil à pompe",
    degats: 90,
    cadence: 1,
    rechargement: 3,
    image: "fusil-pompe.webp",
    description: "Le fusil à pompe est une arme dévastatrice à courte portée."
  },
  {
    id: 4,
    nom: "Fusil de sniper",
    degats: 105,
    cadence: 0.33,
    rechargement: 2.7,
    image: "fusil-sniper.webp",
    description: "Le fusil de sniper est une arme de précision pour des tirs à très longue portée."
  },
  {
    id: 5,
    nom: "Lance-roquettes",
    degats: 110,
    cadence: 0.75,
    rechargement: 3.5,
    image: "lance-roquettes.webp",
    description: "Le lance-roquettes cause des dégâts massifs avec ses explosions."
  },
  {
    id: 6,
    nom: "Mitraillette",
    degats: 25,
    cadence: 9,
    rechargement: 2,
    image: "mitraillette.webp",
    description: "La mitraillette est une arme automatique à courte portée avec une cadence de tir élevée."
  },
  {
    id: 7,
    nom: "Pistolet",
    degats: 23,
    cadence: 6.5,
    rechargement: 1.8,
    image: "pistolet.webp",
    description: "Le pistolet est une arme de poing polyvalente et rapide."
  }
]

export const useArmeStore = defineStore('arme', {
  /**
   * Définit l'état initial du store.
   * @returns {Object} - L'état initial des données Pokémon.
   */
  state: () => ({
    armes, // Liste de toutes les armes
    mesObjets: [], // armes du joueur
  }),

  getters: {
    /**
     * Compte le nombre total d'armes.
     * @param state - L'état actuel du store.
     * @returns {number} - Le nombre total d'armes actuellement stockées.
     */
    totalObjets: state => state.mesObjets.length,
  },

  actions: {

  },
})
