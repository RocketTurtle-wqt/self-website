<template>
  <div id="artical">
    <div class="markdown-body" v-html="artical"></div>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";

import { getArticalById } from "../config/net.js"

export default {
  name:'Artical',
  data() {
    return {
      artical:"",
    }
  },
  mounted(){
    const id = this.$route.params.id;

    this.$axios({
      url:`${getArticalById}`,
      // withCredentials:true,
      method:'GET',
      params:{
        id
      }
    }).then(res=>{
      // console.log(res);
      this.artical=res.data.artical;
    }).catch(err=>{
      console.error(err);
    });
  }
}
</script>

<style scoped>
  
</style>