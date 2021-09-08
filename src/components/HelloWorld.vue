<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{holaMundo}}</h2>
    <div style="background:yellow">
        <!-- <mi-componente></mi-componente>  -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },
  data(){
    return {
      holaMundo : "Este es un holamundo desde mi props del componente"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
