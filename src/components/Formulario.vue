<template>
  <div>
    <div class="grid container mx-auto my-10 grid-cols-3">
      <div class="col-span-2 border">
        <h1 class="text-center text-4xl">Formulario</h1>
        <form action="" @submit.prevent="sendForm()">
          <div class="w-5/12 my-5 mx-auto text-gray-600">
            <label for="name" class="block flex text-xl">Nombre:</label>
            <input type="text" name="name" v-model="user.name" class="block w-full mb-5 p-2 border rounded outline-none"/>

            <label for="lastname" class="block flex text-xl">Apellido:</label>
            <input type="text" name="lastname" v-model="user.lastname" class="block w-full mb-5 p-2 border rounded outline-none" />

            <label for="bio" class="block flex text-xl">Biografia:</label>
            <textarea type="text" name="bio" v-model="user.bio" class="block w-full h-20 mb-5 p-2 border rounded outline-none"></textarea>

            <label for="bio" class="block flex text-xl">Genero:</label>
            <div class="radioButtons flex">
              <input type="radio" name="gender" value="hombre" v-model="user.gender" class="mx-2 my-1" checked/>Hombre
              <input type="radio" name="gender" value="mujer" v-model="user.gender" class="mx-2 my-1"/>Mujer
              <input type="radio" name="gender" value="otro" v-model="user.gender" class="mx-2 my-1"/>Otro
            </div>
            <input type="submit" value="guardar" class="flex p-3 rounded-xl text-white font-bold bg-blue-500 hover:bg-blue-400 transition-all transform hover:scale-110 cursor-pointer my-5" />
          </div>
        </form>
      </div>
      <AsideBar></AsideBar>
    </div>
  </div>
</template>

<script>
import AsideBar from "./AsideBar.vue";
export default {
  setup() {},
  name: "Formulario",
  components: {
    AsideBar,
  },
  data(){
    return{
      user:{
        name:"",
        lastname:'',
        bio:'',
        gender:''
      }
    }
  },
  methods:{
    sendForm(){
      console.log(this.user);
    }
  }

};
</script>