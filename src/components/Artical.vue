<template>
  <div id="artical">
    <header class="content-center font-gray">
      <main>
        <i class="el-icon-s-promotion"></i>
        <span>发表于 {{essay.time}}</span>
        <el-divider direction="vertical"></el-divider>
        <i class="el-icon-folder"></i>
        <span>分类于 {{classify}}</span>
      </main>
    </header>
    <div class="markdown-body" v-html="essay.artical"></div>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";

import { 
  getArticalById,
  getClassifyNameById
} from "../config/net.js"

export default {
  name:'Artical',
  data() {
    return {
      essay:"",
      classify:""
    }
  },
  methods:{
    getClassifyName(id){
      this.$axios({
        url:getClassifyNameById,
        method:'GET',
        params:{
          id
        }
      }).then(res=>{
        this.classify=res.data;
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  mounted(){
    const id = this.$route.params.id;

    const promise=new Promise((resolve,reject)=>{
      this.$axios({
        url: getArticalById,
        // withCredentials:true,
        method:'GET',
        params:{
          id
        }
      }).then(res=>{
        this.essay=res.data
        resolve(this.essay.classify_id);
      }).catch(err=>{
        console.error(err);
        reject('拉取文章失败！');
      });
    });

    promise.then(id=>{
      this.getClassifyName(id);
    })
  }
}
</script>

<style scoped>
  .content-center{
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
  }

  .font-gray{
    font-size: 12px;
    color: #bfbfbf;
  }
</style>