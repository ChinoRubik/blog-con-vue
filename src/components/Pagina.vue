<template>
  <div>
    <div class="grid container mx-auto my-10 grid-cols-3">
      <div class="col-span-2 border">
        <h1 class="text-center text-4xl">Esta es mi pagina de parametros</h1>
        <h3>{{ id_desde_url }}</h3>
        <button
          @click="cambiaNombre()"
          class="p-2 border text-white bg-gray-400 hover:bg-gray-500"
        >
          Toca aqui para cambiar el nombre
        </button>

        <button
          @click="redireccionar()"
          class="p-2 border text-white bg-gray-400 hover:bg-gray-500"
        >
          Toca aqui para redireccion a BLOG
        </button>

        <p class="font-bold text-lg">{{ nombre }}</p>
      </div>
      <AsideBar></AsideBar>
    </div>
  </div>
  
</template>

<script>
import AsideBar from './AsideBar.vue'

export default {
  name: "Pagina",
  //CICLOS DE VIDA HOOKS

  //Metodo que se ejecuta al crear el componente
  created() {
    console.log("Componente creado");
  },
  //Metodo que se ejecuta la cargar el compomnente
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado");
  },
  //Metodo que se ejecuta al actualizar el componente
  updated() {
    console.log("Componente actualizado");
  },
  //Metodo que se ejecuta al eliminar el componente
  destroyed() {
    console.log("Componente eliminado");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Cristian",
    };
  },
  methods: {
    cambiaNombre() {
      this.nombre = "RAMON ORDOÑEZ";
    },
    redireccionar() {
      this.$router.push("/blog");
    },
  },
  components:{
      AsideBar
  }
};
</script>