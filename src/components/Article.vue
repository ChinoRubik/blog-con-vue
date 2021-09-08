<template > 
    <div>
        <div v-for="ar in my_articles" :key="ar._id" class="py-5 border" >
            <h2 class="font-bold hover:underline mb-2"><router-link :to="'detalle/'+ar._id">     {{ar.title}}  </router-link></h2>
            <img :src=" globaly+'/api/getImage/'+ar.image" v-if="ar.image" class="object-cover w-full h-48">
            <img src="../assets/defaul.jpg" v-if="!ar.image" class="object-cover w-full h-48">
            <p class="text-gray-400 my-2">{{ar.date | moment('from','now')}}</p>
        </div>
    
    </div>
</template>


<script>
import global from "../global";

export default {
    
    name: 'Article',
    props:['my_articles'],
    data(){
        return{
            globaly: global.url
        }
    }
}
</script>
