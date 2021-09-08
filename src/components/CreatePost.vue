<template src ="./CreatePost.html"></template>

<script>
import AsideBar from "./AsideBar.vue";
import axios from "axios";
import global from "../global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert';

export default {
  name: "CreatePost",
  components: {
    AsideBar,
  },
  data() {
    return {
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
    };
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
        axios.post(global.url + "/api/save", this.article)
          .then((res) => {
            if (res.data.status == "SUCCESS") {
              //PASANDOLE MI IMAGEN, SUBIDA DE ARCHIVO

              //Comprobando si se le paso una imagen
              if (this.file != null && this.file != "undefined" && this.file != "") {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                axios.post(global.url + "/api/uploadImage/" + res.data.article._id,formData)
                        .then((res) => {
                            console.log(res);
                            if (res.data.status=='success') {
                                this.article = res.data.article;
                                this.$router.push("/home");
                                swal('Guardado','El post se ha subido correctamente','success');
                            } 
                        })
                        .catch(() => {
                            swal(
                              'formato no admitido',
                              'Solo se admiten formatos png, jpg, jpeg, gif',
                              'error'
                            );
                            
                        });
              }else{
                  swal('Guardado','El post se ha subido correctamente sin image','success');
                  this.$router.push('/home');
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  validations: {
    article: {
      title: { required },
      content: { required },
    },
  },
};
</script>