<template>
    <div class="px-20">
        <div class="bg-gray-200 p-5 border mb-14 rounded-xl">
            <h3 class="text-center text-xl font-bold py-5">Crea un post</h3>
            <button v-on:click="redirect" class="bg-red-500 hover:bg-red-400 py-2 px-5 text-white font-bold rounded">Toca aqui</button>
        </div>

        <div class="bg-gray-200 px-5 py-3 border rounded-xl">
            <h3 class="text-center text-xl font-bold py-5">Busca algo</h3>
            <form action="" v-on:submit.prevent="onSubmit">
                <input type="text" placeholder="Busca aqui" class="w-full p-2 rounded mb-5" required v-model="searchInput">
                <button class="bg-green-500 hover:bg-green-400 py-2 px-3 text-white font-bold rounded">Busca</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        
    },
    data(){
        return{
            searchInput:null
        }
    },
    name :'AsideBar',
    methods:{
        onSubmit(){
            console.log("ESTOY DANDO CLICK");
            this.$router.push('/redirect/'+this.searchInput);
        },
        redirect(){
            this.$router.push('/crea-post');
        }
    }
}
</script>