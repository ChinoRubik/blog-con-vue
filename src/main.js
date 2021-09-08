import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import ContentComponent from './components/ContentComponent.vue';
import MiComponente from './components/MiComponente.vue'
import HelloWorld from './components/HelloWorld.vue'
import Blog from './components/Blog.vue'
import Formulario from './components/Formulario.vue'
import Pagina from './components/Pagina.vue'
import Error from './components/Error.vue'
import Peliculas from './components/Peliculas.vue';
import SearchComponent from "./components/SearchComponent.vue";
import Redirect from './components/Redirect.vue';
import ArticleDetail from './components/ArticleDetail.vue';
import CreatePost from './components/CreatePost.vue';
import EditPost from './components/EditPost.vue';
import vueMoment from 'vue-moment';
import moment from 'moment';
import Vuelidate from 'vuelidate';
import 'moment/locale/es';

Vue.use(vueMoment,{moment});
Vue.use(Vuelidate);
Vue.use(VueRouter);
const routes = [
  {path: '/home', component: ContentComponent},
  {path: '/', component: ContentComponent},
  {path:'/mi-componente', component: MiComponente},
  {path:'/hello-wolrd', component: HelloWorld},
  {path:'/blog', component: Blog},
  {path:'/formulario', component: Formulario},
  {path:'/pagina/:id?', component: Pagina},
  {path:'/peliculas',component:Peliculas},
  {path:'/buscar/:searchString', component: SearchComponent},
  {path:'/redirect/:searchString',component: Redirect},
  {path:'/detalle/:id',component: ArticleDetail},
  {path:'/crea-post/',component:CreatePost},
  {path:'/edita-post/:id',component:EditPost},
  {path:'*', component: Error}

]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
