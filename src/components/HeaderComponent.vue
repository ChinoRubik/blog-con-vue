<template>
  <div>
    <div class="container mx-auto border-b-2 py-2">
      <div class="flex px-7 justify-between">
        <div class="flex justify-center mx-0">
          <router-link to="/home">
            <img
              alt="Vue logo"
              src="../assets/logo.png"
              class="w-20 cursor-pointer"
            />
          </router-link>
          <div class="text-xl lg:text-3xl my-auto mx-5 font-bold cursor-pointer hidden sm:block">
            <router-link to="/home">Mi aplicacion Vue</router-link>
          </div>
        </div>
        <div class=" md:block hidden">
          <ul class="flex lg:text-xl">
            <li class="lg:p-5 p-3  mt-2 "><router-link class="hover:text-green-400" to="/home" active-class="active">Inicio</router-link></li>
            <li class="lg:p-5 p-3  mt-2 "><router-link class="hover:text-green-400" to="/blog" active-class="active">Blog</router-link></li>
            <li class="lg:p-5 p-3  mt-2 "><router-link class="hover:text-green-400" to="formulario" active-class="active">Formulario</router-link></li>
            <li class="lg:p-5 p-3  mt-2 "><router-link class="hover:text-green-400" to="/peliculas" active-class="active">Peliculas</router-link></li>
            <li class="lg:p-5 p-3  mt-2 "><router-link class="hover:text-green-400" to="/mi-componente" active-class="active">Pagina 5</router-link></li>
            <li class="lg:p-5 p-3  mt-2 "><router-link class="hover:text-green-400" to="/pagina" active-class="active">Pagina params</router-link></li>

          </ul>
        </div>

        <!-- Hamburger -->
        <div v-on:click.prevent="buttonHamburger" class="flex items-center md:hidden block" > <i class="fas fa-bars text-3xl my-auto"></i></div>

        
      </div>
    </div>
    <div id="menuHamburger" class="absolute bg-white hidden  top-30 w-full ">
          <ul class="flex lg:text-xl flex flex-wrap">
            <li class="border-b   block w-full"><router-link class="hover:text-green-400 block p-5 w-full" to="/home" active-class="active">Inicio</router-link></li>
            <li class="border-b   block w-full"><router-link class="hover:text-green-400 block p-5 w-full" to="/blog" active-class="active">Blog</router-link></li>
            <li class="border-b   block w-full"><router-link class="hover:text-green-400 block p-5 w-full" to="formulario" active-class="active">Formulario</router-link></li>
            <li class="border-b   block  w-full"><router-link class="hover:text-green-400 block p-5 w-full" to="/peliculas" active-class="active">Peliculas</router-link></li>
            <li class="border-b   block w-full"><router-link class="hover:text-green-400 block p-5 w-full" to="/mi-componente" active-class="active">Pagina 5</router-link></li>
            <li class="border-b-2 block w-full"><router-link class="hover:text-green-400 block p-5 w-full" to="/pagina" active-class="active">Pagina params</router-link></li>

          </ul>
        </div>
  </div>
</template>

<script>


export default {
  name: "HeaderComponent",
  methods:{
    buttonHamburger(){
      const el = document.getElementById("menuHamburger");
      if(!el.classList.contains('hidden')){

        el.classList.add('block')

        console.log('no teien hidden');
      }else{
        el.classList.remove('hidden');

      }
      //el.classList.remove('hidden');
    }
  }
};
</script>

<style>
.active{
  color: #41B883;
}
</style>