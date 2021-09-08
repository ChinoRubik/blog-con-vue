<template>

<div class="bg-gray-800 text-white flex flex-wrap justify-center items-center" :class="{
    'slider-small':!showBtn,
    'slider-big':showBtn
  
  }"> 
  <div class="text-4xl block w-full">  {{texto}}</div>
  <router-link to="/blog" class="p-2 text-white rounded bg-red-500 hover:bg-red-400 transition ease-in-out duration-500 transform hover:scale-125" v-if="showBtn">Ir al blog</router-link>

</div>

</template>

<script>

export default {
  name :'Slider',
  props:['texto','showBtn']
}
</script>


<style >
.slider-small{
    height: 220px !important;
}
.slider-big{
    height: 500px !important;
}
</style>