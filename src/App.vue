<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App of Cristian"/>
   Estoy utulizando el componente, asi lo llame en el div 
    <mi-componente></mi-componente> -->
    <HeaderComponent></HeaderComponent>
    <!-- AQUI SE CARGARA MIS RUTAS Y SERA LOS QUE SE VA A MOSTRAR -->
    <!-- <ContentComponent></ContentComponent> -->
    <!-- <div class="container mx-auto grid grid-cols-3 my-20">
    </div> -->
        
    <router-view></router-view>

    <FooterComponents></FooterComponents>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//IMPORTACION AQUI
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponents from './components/FooterComponents.vue';

export default {
  name: "App",

  //con la components tengo que importar el componente si lo utilizare en la vista
  components: {

    HeaderComponent,
    FooterComponents
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}

/* LA MANERA DE COMO SE IMPORTA ESTILOS DIFERENTES */
@import url("assets/css/styles.css");
</style>
