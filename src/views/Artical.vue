<template>
  <div id="artical">
    <div class="markdown-body" v-html="artical"></div>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";

export default {
  name:"Artical",
  data() {
    return {
      id:"20210228165541",
      artical:""
    }
  },
  methods:{
    getArtical(){
      this.$axios({
        url:`http://192.168.124.7:7002/getartical`,
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
      url:`http://192.168.124.7:7002/getartical`,
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