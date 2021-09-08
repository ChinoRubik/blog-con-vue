<template>
  <!-- ID MUY IMPORTANTE PARA QUE LO PUEDA UTILIZAR EN OTRA VISTA -->
  <div>
    <div class="grid container mx-auto my-10 grid-cols-3">
      <div class="col-span-2 border">
        <hr />
        <h1>Hola</h1>
        <h2>{{ mensaje }}</h2>
        <input type="text" class="border w-1/2 p-2" v-model="twoWayData" />
        <p class="font-bold">
          A continuacion two way data binding: {{ twoWayData }}
        </p>
        <h2 class="text-2xl p-5">Directivas condicionales</h2>
        <p>Elije una edad:</p>
        <input type="number" class="border w-1/2 p-2" v-model="age" />
        <p class="p-1">Tu edad es de {{ age }}</p>

        <div
          class="bg-green-500 w-1/2 mx-auto text-white p-2 m-1"
          v-if="age && age > 18 && age < 65"
        >
          ERES MAYOR DE EDAD
        </div>
        <div
          class="bg-blue-500 w-1/2 mx-auto text-white p-2 m-1"
          v-else-if="age >= 65"
        >
          ERES DE LA TERCERA EDAD
        </div>
        <div class="bg-red-500 w-1/2 mx-auto text-white p-2 m-1" v-else>
          NO ERES MAYOR DE EDAD
        </div>

        <h2 class="text-2xl p-5">Directivas iterativas</h2>
        <ol>
          <li v-for="pel in peliculas" :key="pel">{{ pel }}</li>
        </ol>
        <hr />
      </div>
      <AsideBar></AsideBar> l
    </div>
  </div>
</template>

<script>
import AsideBar from "./AsideBar.vue";

export default {
  name: "miComponente",
  data() {
    return {
      mensaje: "Este es mi componente que acabo de crear",
      twoWayData: "",
      age: 23,
      
      peliculas: [
        "Capitan Ameria",
        "Spiderman",
        "Iron man",
        "Avengers",
        "Black Panther",
        "Black widow",
      ],
    };
  },
  components: {
    AsideBar,
  },
};
</script>
