<template>
  <div id="app" ref="app">
    <main class="nav_container">
      <nav class="navigate">
        <Navigator></Navigator>
      </nav>
      <!-- <nav class="catalogue">
        <Catalogue></Catalogue>
      </nav> -->
    </main>
    <main class="main">
      <Show></Show>
    </main>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue';
import Catalogue from './components/Catalogue.vue';
import Show from './views/Show.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components:{
    Navigator,
    Catalogue,
    Show
  },
  mounted(){
    this.$store.state.documentWidth=document.body.clientWidth;
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
    }
  }
}
</script>

<style>
@import url(./assets/css/clear_pc.css) all;

@import url(./assets/css/clear_mobile.css) all;

@media screen{
  body{
    /* background: gray; */
    background: linear-gradient(90deg, #496eaa, #944fa8, #a8804f, #496eaa);
		background-size:1400% 300%;
		animation:mymove 2s ease infinite;
		-webkit-animation: mymove 2s ease infinite;
		-moz-animation: mymove 2s ease infinite;
  }
  .main{
    background: white;
  }
}

/* pc端布局方式 */
@media screen and (min-width: 992px){
  #app{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    opacity: 0.8;
  }
  .nav_container{
    width: 250px;
    /* float: left; */
  }
  .main{
    width: 720px;
    margin-left: 20px;
    /* float: left;
    position: relative;
    left: 20px; */
  }
}

/* pc端宽度小于等于991隐式触发移动端布局 */
@media screen and (max-width: 991px){
  #app{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
  .nav_container,.main{
    width: 100%;
  }
  /* .main{
    position: relative;
    overflow: hidden;
  } */
}
@keyframes mymove
{
    0% {
    background-position: 0% 0%; }
    50% {
    background-position: 50% 100%; }
    100% {
      background-position: 100% 0%; }
}
</style>