<template>
  <div id="show">
    <router-view></router-view>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";

// import { artical } from "../config/net.js"

export default {
  name:"Show",
  // data() {
  //   return {
  //     artical:"",
  //   }
  // },
  // methods:{
  //   getArtical(){
  //     this.$axios({
  //       url:`${server}/getartical`,
  //       withCredentials:true,
  //       method:'GET',
  //       params:{
  //         id
  //       }
  //     }).then(res=>{
  //       console.log(res);
  //     }).catch(err=>{
  //       console.error(err);
  //     });
  //   }
  // },
  // mounted(){
  //   this.$axios({
  //     url:`${artical}/${this.$store.state.currentArtical}`,
  //     // withCredentials:true,
  //     method:'GET',
  //   }).then(res=>{
  //     // console.log(res);
  //     this.artical=res.data.artical;
  //   }).catch(err=>{
  //     console.error(err);
  //   });
  // }
}
</script>

<style scoped>
  #show{
    padding: 50px;
  }
</style>