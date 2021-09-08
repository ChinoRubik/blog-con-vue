<template>
  <div>
    <div class="border" >
      <img
        alt="imagen aleatoria"
        :src="pel.img"
        class="w-full"
        :title="pel.title"
      />
      <h3 class="text-center text-gray-800 text-xl my-2">{{ pel.title }}</h3>
      <span
        :class="{
          green: pel.year >= 2007,
          red: pel.year < 2007,
        }"
        >{{ pel.year }}</span
      >
      <p class="p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt
        ullam commodi
      </p>

      <button @click="markFavorite(pel)" class="my-2 p-2 bg-gray-200 hover:bg-gray-300 transition-all rounded">Marcar como favorita</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pelicula",
  props: ["pel"],
  methods:{
    markFavorite(peliculaFav){
      //CREANDO UNE EVENTO Y SE LO ENVIAMOS AL PADRE O SEA A peliculas
      this.$emit('favorita',peliculaFav);
    }
  }
};
</script>

<style>
.green{
    background-color: green;
    color: white;
    padding: 8px;
}

.red{
    background-color: red;
    color: white;
    padding: 8px;
}
</style>