<template>
  <div id="navigator">
    <div class="mypic" ref="backimg"><i class="el-icon-more" ref="select" @click="showMenu"/>{{theme}}</div>
    <transition v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
                >
      <ul v-show="showflag">
        <li v-for="(item, index) of line" :key="index" @click="selectBackground(index)" :class="item.background">
          <span><i :class="item.icon" /></span>
          {{item.content}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Navigator',
  data() {
    return {
      theme:"RocketTurtle's website",
      showflag:true,
      line:[
        {
          content:"首页",
          icon:"el-icon-s-home",
          background:"white"
        },
        {
          content:"关于",
          icon:"el-icon-user-solid",
          background:"white"
        },
        {
          content:"标签",
          icon:"el-icon-collection-tag",
          background:"white"
        },
        {
          content:"分类",
          icon:"el-icon-menu",
          background:"white"
        },
        {
          content:"归档",
          icon:"el-icon-s-promotion",
          background:"white"
        },
        {
          content:"图片墙",
          icon:"el-icon-picture",
          background:"white"
        },
        {
          content:"搜索",
          icon:"el-icon-search",
          background:"white"
        }
      ]
    }
  },
  methods:{
    selectBackground(index){
      this.line.forEach((item, ind)=>{
        if(ind===index){
          item.background="changeBackground";
        }else{
          item.background="white";
        }
      });
    },
    showMenu(){
      this.showflag=!this.showflag;
    },
    beforeEnter(el){
      const clientWidth=window.screen.width;
      const clientHeight=window.screen.height;
      if(clientWidth<clientHeight&&this.showflag===true){
        el.style.display="block";
        el.style.maxHeight=0;
      }
    },
    enter(el,done){
      el.offsetWidth;
      el.style.transition="max-height .5s";
      setTimeout(done,0);
    },
    afterEnter(el){
      const clientWidth=window.screen.width;
      const clientHeight=window.screen.height;
      if(clientWidth<clientHeight&&this.showflag===true){
        el.style.maxHeight=280+'px';
      }
    },
    beforeLeave(el){
      const clientWidth=window.screen.width;
      const clientHeight=window.screen.height;
      if(clientWidth<clientHeight&&this.showflag===false){
        el.style.maxHeight=280+'px';
      }
    },
    leave(el,done){
      el.offsetWidth;
      el.style.transition="max-height .5s";
      setTimeout(done,0);
    },
    afterLeave(el){
      const clientWidth=window.screen.width;
      const clientHeight=window.screen.height;
      if(clientWidth<clientHeight&&this.showflag===false){
        el.style.display="block"
        el.style.maxHeight=0;
      }
    }
  },
  beforeMount() {
    const clientWidth=window.screen.width;
    const clientHeight=window.screen.height;
    if(clientWidth<clientHeight){
      this.showflag=false;
    }
  },
  mounted(){
    const clientWidth=window.screen.width;
    const clientHeight=window.screen.height;
    // console.log(clientWidth, clientHeight)
    if(clientWidth<clientHeight){
      const height=365*(clientWidth/547)+'px';
      this.$refs.backimg.style.height=height;
      this.$refs.backimg.style.lineHeight=height;
    }else{
      this.$refs.select.style.display='none';
    }
  }
}
</script>

<style scoped>
  #navigator{
    width: 100%;
  }
  #navigator>ul{
    list-style: none;
    overflow: hidden;
  }
  #navigator>ul>li{
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
  }
  #navigator>ul>li:hover{
    cursor: pointer;
    background: #F2F6FC;
  }
  .white{
    background: white;
  }
  .changeBackground{
    background: #F2F6FC;
  }
  .mypic{
    background: url("../assets/images/logo.jpeg") no-repeat;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: rgb(14, 7, 2);
  }
  @media screen and (orientation: landscape) {
    .mypic{
      background-size: contain;
      height: 167px;
      line-height: 167px;
    }
  }
  @media screen and (orientation: portrait) {
    .mypic{
      background-size: cover;
      position: relative;
    }
    .mypic>i{
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-50%);
      background: #E6A23C;
      padding: 5px;
    }
  }
</style>