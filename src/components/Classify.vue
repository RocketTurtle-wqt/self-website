<template>
  <div id="classify">
    <el-timeline>
      <el-timeline-item v-for="classify in this.classifies" :timestamp="classify.name" placement="top" :key="classify.id">
        <el-card v-for="artical in classify.articals" :key="artical.id">
          <!-- <p class="title-hover">{{artical.title}}</p> -->
          <router-link :to="`artical/${artical.id}`">{{artical.title}}</router-link>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import {getClassifiesAndArticals} from '../config/net.js';

export default {
  name:'Classify',
  data() {
    return {
      classifies:[]
    }
  },
  mounted(){
    this.$axios({
      url:getClassifiesAndArticals,
      methods:'GET',
    }).then(res=>{
      console.log(res.data);
      this.classifies=res.data;
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
  .title-hover:hover{
    cursor: pointer;
    color: gray;
  }
</style>