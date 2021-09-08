<template>
  <div>
    <Slider :texto="'blog'"></Slider>

    <div class="grid container mx-auto my-20 grid-cols-3">
      <div class=" text-center text-4-xl border col-span-2 p-10">
        <h2 class="col-span-3">Blog</h2>
        <Asrticle :my_articles=articles class="grid grid-cols-3 gap-3" v-if="articles &&articles.length >=1"></Asrticle>
        <div v-else-if="articles.length < 1" class="my-5">No hay articulos para mostrar</div>
        <div v-else class="my-5">Cargando ...</div>
      </div>



      <AsideBar></AsideBar>
    </div>
  </div>
</template>

<script>
import Asrticle from "./Article.vue";
import Slider from "./Slider.vue";
import AsideBar from "./AsideBar.vue";
import axios from 'axios';
import global from '../global';

export default {
  setup() {},
  name: "Blog",
  components: {
    Slider,
    AsideBar,
    Asrticle,
  },
  data(){
    return{
      articles : [],
      global : global.url
    }
  },
  mounted(){
    this.getArticles();
  },
  methods:{
    getArticles(){
      axios.get(this.global+'/api/getarticles')
        .then(res=>{
          console.log(res);
          this.articles = res.data.articles;
        })
    }
  }
};
</script>