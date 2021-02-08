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
    const clientWidth=window.screen.width;
    const clientHeight=window.screen.height;
    if(clientWidth<clientHeight){
      this.$store.state.showSelect=true;
    }else{
      if(document.body.clientWidth<992) this.$store.state.showSelect=true;
      else this.$store.state.showSelect=false;
      window.onresize=()=>{
        const showSelect=this.$store.state.showSelect;
        if(document.body.clientWidth<992) this.$store.state.showSelect=true;
        else this.$store.state.showSelect=false;
        this.paddi=(document.body.clientWidth-990)/2;
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


/* ipad横竖屏幕有问题 */
@media screen and (orientation: landscape) and (min-width: 992px){
  #app{
    padding: 0 225px;
  }
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
@media screen and (orientation: portrait), screen and (max-width: 991px){
  .navigate{
    width: 100%;
  }
}
</style>