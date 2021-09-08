<template>
  <div>
    <div>
      <Slider
        :texto="'LAS PELICULAS MAS INTERESANTES Y QUE ESTAN DE MODA'"
      ></Slider>
      <div class="grid container mx-auto my-20 grid-cols-3">
        <div class="border col-span-2">
          <!-- FILTRO -->
          <p>{{ myName | UpperCase }}</p>
          <div v-if="favoritaPelicula">
            Pelicula favorita es: {{ favoritaPelicula.title }}
          </div>

          <div class="grid grid-cols-3 gap-10 p-10">
            <!-- v-for="pel in peliculas" :key="pel" -->
            <!-- <div v-for="peli in peliculas" :key="peli.title"> -->
            <!-- AQUI LE HABIA PASADO PELICULAS, PERO A PELICULAS LE APLIQUE UNA FUNCION COMPUTARIZADA PARA QUE ME DEVOLVIERA EL TITULO EN MAYUSCULAS -->
            <div v-for="peli in titleUpperCase" :key="peli.title">
              <Pelicula :pel="peli" @favorita="tengoLaFavorita"> </Pelicula>
            </div>
          </div>
        </div>
        <AsideBar></AsideBar>
      </div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Slider from "./Slider.vue";
import AsideBar from "./AsideBar.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Slider,
    AsideBar,
  },
  methods: {
    tengoLaFavorita(favo) {
      this.favoritaPelicula = favo;
    },
  },
  computed: {
    titleUpperCase() {
      const upperCASE = this.peliculas;
      for (var i = 0; i < upperCASE.length; i++) {
        upperCASE[i].title = upperCASE[i].title.toUpperCase();
      }
      return upperCASE;
    },
  },

  filters: {
    UpperCase(text) {
      return text.toUpperCase();
    },
  },

  data() {
    return {
      favoritaPelicula: null,
      myName: "Hernande Ordoñez",
      peliculas: [
        {
          title: "Piratas del caribe la maldicion del perla negra",
          year: 2003,
          img: "https://es.web.img3.acsta.net/medias/nmedia/18/91/06/54/20129011.jpg",
        },
        {
          title: "Piratas del caribe y el cofre de la muerte",
          year: 2006,
          img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSCxI6sNpIwAXSsY5zYhaduo1gvxo4bqohTiaDQYWGl1rDvDDF",
        },
        {
          title: "Piratas del caribe en el fin del mundo",
          year: 2007,
          img: "https://es.web.img2.acsta.net/pictures/14/02/26/13/54/249141.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>