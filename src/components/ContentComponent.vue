<template>
  <div>
    <Slider :texto="'Bienvenido a este blog'" :showBtn="'true'" ></Slider>
    <div class="grid container mx-auto my-20 grid-cols-3">
      <div class="border col-span-2">
        <div class="p-10">
          <h2 class="mb-5 text-3xl"> ULTIMOS ARTICULOS</h2>
          <Article class="grid grid-cols-2 gap-5" :my_articles="lastArticlesData" v-if="lastArticlesData && lastArticlesData.length>=1" ></Article>
          <div v-else-if="lastArticlesData.length < 1" class="my-5">No hay articulos para mostrar</div>
        <div v-else class="my-5">Cargando ...</div>
        </div>
      </div>

      <AsideBar></AsideBar>

    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import AsideBar from './AsideBar.vue';
import axios from 'axios';
import global from "../global";
import Article from "./Article.vue";

export default {
  name: "ContentComponent",
  data(){
    return{
      lastArticlesData : []
    }
  },
  components: {
    Slider,
    AsideBar,
    Article
  },
  methods:{
    getLastArticles(){
      axios.get(global.url+"/api/getArticles/true")
          .then(res =>{
              if(res){
                console.log(res);
                this.lastArticlesData = res.data.articles;
              }
          }).catch(err =>{
            console.log(err);
          })
    }
  },
  mounted(){
    this.getLastArticles();

  }
};
</script>
