<template src ="./CreatePost.html"></template>

<script>
import AsideBar from "./AsideBar.vue";
import axios from "axios";
import global from "../global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: "EditPost",
  components: {
    AsideBar,
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
      existsEdit: true,
      globally :global.url
    };
  },
  mounted(){
    this.getArticle();
  },

  methods: {
    fileChange() {
      //Recogiendo el fichero, en mi etiqueta de file le agrege un ref que es lo que hace la magia de vincularlo
      this.file = this.$refs.file.files[0];
      console.log(this.file);

    },

    onSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios.put(global.url + "/api/update/"+this.$route.params.id, this.article)
          .then((res) => {
            console.log(res);
            if (res.data.status == "Success") {
              //PASANDOLE MI IMAGEN, SUBIDA DE ARCHIVO

              //Comprobando si se le paso una imagen
              if (this.file != null && this.file != "undefined" && this.file != "") {
                console.log("ENTRE");
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                console.log(res.data.articleUpdated._id);
                axios.post(global.url + "/api/uploadImage/"+res.data.articleUpdated._id,formData)
                        .then((res) => {
                            console.log(res);
                            if (res.data.status=='success') {
                                //this.article = res.data.articleUpdated;
                                this.$router.push('/detalle/'+this.article._id);
                                swal('Guardado','El post se ha editado correctamente','success');
                            }
                        })
                        .catch((err) => {
                          console.log(err);
                            swal(
                              'formato no admitido',
                              'Solo se admiten formatos png, jpg, jpeg, gif',
                              'error'
                            );
                            
                        });
              }else{
                  swal('Guardado','El post se ha editado correctamente sin image','success');
                  this.$router.push('/detalle/'+this.article._id);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getArticle(){
        axios.get(global.url+'/api/getArticle/'+this.$route.params.id)
          .then(res=>{
              if(res.status == 200){
                  this.article = res.data.article
              }
          })
          .catch(err=>{
              console.log(err);
          })
          }
  },
  validations: {
    article: {
      title: { required },
      content: { required },
    },
  },
};
</script>