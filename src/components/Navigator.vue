<template>
  <div id="navigator">
    <div class="mypic" ref="backimg">
      <!-- <i class="el-icon-more" ref="select" @click="showMenu"/> -->
      <i class="el-icon-more" v-show="this.$store.state.showSelect" @click="showMenu"/>
      {{theme}}
      </div>
    <transition v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
                >
      <ul v-show="showflag">
        <li v-for="(item, index) of line" :key="index" @click="selectBackground(index)" :class="item.background" >
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
          background:"white",
          luyou:"/"
        },
        {
          content:"关于",
          icon:"el-icon-user-solid",
          background:"white",
          luyou:"/"
        },
        {
          content:"标签",
          icon:"el-icon-collection-tag",
          background:"white",
          luyou:"/"
        },
        {
          content:"分类",
          icon:"el-icon-menu",
          background:"white",
          luyou:"/"
        },
        {
          content:"登陆",
          icon:"el-icon-user",
          background:"white",
          luyou:"/login"
        },
        {
          content:"图片墙",
          icon:"el-icon-picture",
          background:"white",
          luyou:"/"
        },
        {
          content:"搜索",
          icon:"el-icon-search",
          background:"white",
          luyou:"/"
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
      this.$router.push(this.line[index].luyou);
    },
    showMenu(){
      this.showflag=!this.showflag;
    },
    // beforeEnter~afterLeave用于菜单栏的收起与展开，目前未解决的问题。1：浏览器打开控制台隐式触发移动端布局方式，菜单栏特效消失。2:移动端横屏，特效消失。
    // 检查了逻辑代码，没有考虑到多种情况，只考虑到了百分之六十的情况，明日继续
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
  // mounted(){
  //   const clientWidth=window.screen.width;
  //   const clientHeight=window.screen.height;
  //   // console.log(clientWidth, clientHeight)
  //   if(clientWidth>clientHeight){
  //     this.$refs.select.style.display='none';
  //   }
  // }
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
    background: url("../assets/images/logo.png") no-repeat center center white;
    background-size: contain;
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color:black;
    text-shadow: black 0.5px 0.5px;
    border-bottom: 1px solid gray;
    height: 141px;
    line-height: 141px;
  }
  @media screen and (orientation: landscape) {
    .mypic{
      background-size: contain;
    }
  }
  @media screen and (orientation: portrait), screen and (max-width: 991px){
    .mypic{
      /* background-size: cover; */
      position: relative;
    }
    .mypic>i{
      position: absolute;
      left: 30px;
      top: 50%;
      transform: translateY(-50%);
      background: wheat;
      padding: 5px;
    }
  }
</style>