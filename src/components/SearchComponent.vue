<template>
  <div>
    <Slider :texto ="'Busqueda: ' + searchString"></Slider>
    <div class="grid container mx-auto my-20 grid-cols-3">
      <div class="text-center text-4-xl border col-span-2 p-10">
        <h2 class="col-span-3 text-3xl mb-5" v-if="articlesSearched.length >= 1">Resultados encontrados con: <span class="font-bold">{{searchString}}</span></h2>
        <h2 class="col-span-3 text-3xl mb-5" v-else>No hay resultados con: <span class="font-bold">{{searchString}}</span></h2>
        <Article :my_articles="articlesSearched" class="grid grid-cols-3 gap-3"></Article>
      </div>

      <AsideBar></AsideBar>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import AsideBar from "./AsideBar.vue";
import axios from 'axios';
import global from '../global';
import Article from './Article.vue';

export default {
  name: "SearchComponent",
  components: {
    Slider,
    AsideBar,
    Article
  },
  data(){
    return {
      searchString : this.$route.params.searchString,
      articlesSearched : []
    }
  },
  mounted(){
    this.getArticlesSearched();
  },

  methods:{
    getArticlesSearched(){
      axios.get(global.url+'/api/search/'+this.searchString)
            .then(res =>{
              this.articlesSearched = res.data.articles;
            })
            .catch(err=>{
              console.log(err);
            })
    }
  }
}
</script>