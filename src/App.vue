<template>
  <div id="app" ref="app">
    <nav class="navigate">
      <navigator></navigator>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navigator from './components/Navigator.vue'

export default {
  name: 'App',
  data() {
    return {
      paddi:document.body.clientWidth
    }
  },
  watch:{
    paddi(newVal,oldVal){
      this.$refs.app.style.padding=`0 ${newVal}px`;
    }
  },
  components:{
    navigator
  },
  // pc端拉动浏览器端页面不崩原理布局思路：当浏览器端文档宽度小于992px之前，使用js监听的方式实现左右内边距相等，当小于992px时候，隐式触发移动端布局
  mounted(){
    this.$store.state.documentWidth=document.body.clientWidth;
    this.paddi=(this.$store.state.documentWidth-990)/2;
    const clientWidth=window.screen.width;
    //判断设备可视区宽度，采用哪种布局
    //菜单显示隐藏按钮逻辑处理
    //showSelect菜单按钮显示隐藏标记
    //showflag菜单栏显示隐藏标记
    if(clientWidth<992){
      this.$store.state.showSelect=true;
      this.$store.state.showflag=false;
    }else{
      //判断pc端布局受控制台拉动的影响
      if(this.$store.state.documentWidth<992){
        this.$store.state.showSelect=true;
        this.$store.state.showflag=false;
      }
      else{
        this.$store.state.showSelect=false;
        this.$store.state.showflag=true;
      }
      window.onresize=()=>{
        const showSelect=this.$store.state.showSelect;
        this.$store.state.documentWidth=document.body.clientWidth;
        if(this.$store.state.documentWidth<992){
          this.$store.state.showSelect=true;
          this.$store.state.showflag=false;
        }
        else{
          this.$store.state.showSelect=false;
          this.$store.state.showflag=true;
        }
        this.paddi=(this.$store.state.documentWidth-990)/2;
      }
    }
  }
}
</script>

<style>
@import url(./assets/css/clear.css) all;

@media screen{
  body{
    background: gray
  }
}

/* pc端布局方式 */
@media screen and (min-width: 992px){
  .navigate{
    width: 250px;
    float: left;
  }
  .main{
    width: 720px;
    background: black;
    float: left;
    position: relative;
    left: 20px;
  }
}

/* pc端宽度小于等于991隐式触发移动端布局 */
@media screen and (max-width: 991px){
  .main{
    background: black;
    position: relative;
    overflow: hidden;
  }
}
</style>