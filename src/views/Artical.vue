<template>
  <div id="artical">
    <div class="markdown-body" v-html="artical"></div>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";

import { server } from "../config/net.js"

export default {
  name:"Artical",
  data() {
    return {
      id:"20210312000756",
      artical:""
    }
  },
  methods:{
    getArtical(){
      this.$axios({
        url:`${server}/getartical`,
        withCredentials:true,
        method:'GET',
        params:{
          id
        }
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.error(err);
      });
    }
  },
  mounted(){
    this.$axios({
      url:`${server}/getartical`,
      // withCredentials:true,
      method:'GET',
      params:{
        id:this.id
      }
    }).then(res=>{
      this.artical=res.data.artical;
    }).catch(err=>{
      console.error(err);
    });
  }
}
</script>

<style scoped>

</style>