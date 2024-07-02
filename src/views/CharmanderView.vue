<template>
  <div class="about">
    <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display: none;" @click="char_voice">
    <h2>Name</h2>
    <h1>{{ pokemon.name }}</h1>
    <h2>Type</h2>
    <h1>{{ pokemon.type }} {{ pokemon2.type == "water"? "WEAK" : pokemon2.type == "grass" ? "STRONG" : ""  }}</h1>
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

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Charmander',
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
        }
      }
    },
    beforeCreate: function () {
        console.log('beforeCreate')
    },
    created: function () {
        console.log('created')

    },
    beforeMount: async function () {
        console.log('beforeMount')

    },
    mounted: async function () {
        console.log('mounted')

        try {
            const img = document.getElementById("pokemonSprite");
            const url = "https://pokeapi.co/api/v2/pokemon/4";
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
    beforeUpdate: function () {
        console.log('beforeUpdate')
    },
    updated: function () {
        console.log('updated')
    },
    methods: {
      char_voice (){
    console.log('char..char...');
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
