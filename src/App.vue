<template>
  <div id="app">
    <nav class="navigate">
      <navigator></navigator>
    </nav>
  </div>
</template>

<script>
import navigator from './components/Navigator.vue'

export default {
  name: 'App',
  components:{
    navigator
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
@media screen and (orientation: landscape){
  .navigate{
    width: 250px;
    position: absolute;
    top: 0;
    left: 15%;
  }
}
@media screen and (orientation: portrait){
  .navigate{
    width: 100%;
  }
}
</style>