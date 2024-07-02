<template>
  <div class="about">
    <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display: none;" @click="bulbasound">    
    <h2>Name</h2>
    <h1>{{ pokemon.name }}</h1>
    <div v-if="token">
      <h1>Token access antes se mostraba ahora ya no.....valvasaaar</h1>
      <p>Camaron caramelo, caramelo camaron</p>
      <h1>Type</h1>
      <h1>{{ pokemon.type }} {{ pokemon2.type == "water"? "STRONG" : pokemon2.type == "fire" ? "WEAK" : ""  }}</h1>
      <button @click="storeLocalStorage" class="textbox">Local Storage Set Item</button>

      <br>
      <br>
      
      <img src="" alt="Pokemon Sprite" id="pokemonSprite2" style="display: none;">
      <p> Local Storage Pokemon</p>
      <button @click="getLocalStorage" class="textbox">Local Storage Get Item</button>
      <h2>Name</h2>
      <h1>{{ pokemon2.name }}</h1>
      <h2>Type</h2>
      <h1>{{ pokemon2.type }}</h1>
      
      <button @click="showToken" type="button">Show Token</button>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import { useAuthStore } from '@/stores/AuthStore';

  const authStore = useAuthStore();

  export default {
    name: 'Bulbasaur',
    data() {
      return {
        pokemon: {
          name: "",
          type: "",
          img: ""
        },
        pokemon2: {
          name: "",
          type: "",
          img: ""
        },
        token: ""
      }
    },
    mounted: async function () {
      this.token = authStore.token;
      try {
          const img = document.getElementById("pokemonSprite");
          const url = "https://pokeapi.co/api/v2/pokemon/1";
          const response = await axios.get(url);
          this.pokemon.name = response.data.name;
          this.pokemon.img = response.data.sprites.front_default;
          this.pokemon.type = response.data.types[0].type.name
          img.src = response.data.sprites.front_default;
          img.style.display = "block"
      } catch (error) {
          console.error(error);
      }
    },
    methods: {
      bulbasound(){
        alert('Bulbaaa');
      },
      storeLocalStorage() {
        localStorage.setItem("pokemon.name", this.pokemon.name);
        var pokemonJson = JSON.stringify(this.pokemon);
        localStorage.setItem("pokemon2", pokemonJson);
      },
      getLocalStorage(){
        this.pokemon2 = JSON.parse(localStorage.getItem("pokemon2"));
        // this.pokemon2.img = localStorage.getItem("pokemon.img")

        const img = document.getElementById("pokemonSprite2");
        img.src = this.pokemon2.img;
        img.style.display = "block"
      },
      showToken() {
        console.log(authStore.token);
      }

    }
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    place-items: center;
    align-items: center;
    margin: 0 auto 2rem;;
  }
}
</style>
