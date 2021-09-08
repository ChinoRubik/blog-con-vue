<template>
  <div class="grid grid-cols-3 container mx-auto my-10">
    <div class="col-span-2 border p-10">
        <img :src="globally+'/api/getImage/'+article.image" alt="noImage" v-if="article.image " class="object-cover w-full h-96">
        <h2 class="text-3xl text-center my-5">{{article.title}}</h2>
        <p class="text-justify">{{article.content}}</p>
        <p class="my-4 font-bold text-gray-300 text-left text-base">{{article.date | moment('from','now')}}</p>

        <div class="flex "> <router-link class="bg-yellow-500 p-5 rounded-xl font-bold transform hover:scale-105 transition-all mr-5" :to="/edita-post/+article._id" > Editar</router-link>
        <a v-on:click="deleteArticle" class="bg-red-500 p-5 text-white font-bold rounded-xl transform hover:scale-105 transition-all">Eliminar</a>
        </div>
    </div>
    <Aside></Aside>
  </div>
</template>

<script>
import Aside from "./AsideBar.vue";
import axios from 'axios';
import global from '../global';
import swal from 'sweetalert';

export default {
  name: "ArticleDetail",
  components: {
    Aside,
  },
  data(){
      return{
          id : this.$route.params.id,
          article : null,
          globally : global.url
      }
  },
  mounted(){
      this.getArticle();
  },
  methods:{
      getArticle(){
          axios.get(global.url+'/api/getArticle/'+this.id)
            .then(res=>{
                if(res.status == 200){
                    this.article = res.data.article
                }
            })
            .catch(err=>{
                console.log(err);
            })
      },

      deleteArticle(){
      
        axios.delete(global.url+'/api/delete/'+this.id)
            .then(res=>{
              console.log(res);
              if(res.data.status =="Success"){
                  swal('Eliminado','El post se ha eliminado correctamente','success');
                  this.$router.push("/home");
              }
            })
            .catch(err=>{
              console.log(err);
              console.log('Error al guardar');
            });

      }
  }
};
</script>