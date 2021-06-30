<template>
  <div id="navigator">
    <div class="mypic_back">
      <div class="mypic">
        <i class="el-icon-more" @click="changeShowflag"/>
        {{theme}}
      </div>
    </div>
    <transition name="menu"
                appear>
      <ul v-show="this.$store.state.showflag">
        <li v-for="(item, index) of line" :key="index" @click="selectBackground(index)" :class="item.background" >
          <span><i :class="item.icon" /></span>
          {{item.content}}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

import {
  CHANGE_SHOWFLAG
} from '../config/mutation-type.js'

export default {
  name:'Navigator',
  data() {
    return {
      theme:"Rocket's website",
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
          content:"发布",
          icon:"el-icon-collection-tag",
          background:"white",
          luyou:"/"
        },
        {
          content:"分类",
          icon:"el-icon-menu",
          background:"white",
          luyou:"/classify"
        },
        // {
        //   content:"登陆",
        //   icon:"el-icon-user",
        //   background:"white",
        //   luyou:"/"
        // },
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
    //菜单项选择背景切换逻辑
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
    
    ...mapMutations([
      CHANGE_SHOWFLAG
    ])

    // showMenu(){
    //   this.$store.state.showflag=!this.$store.state.showflag;
    // }
  }
}
</script>

<style scoped>
  @media screen {
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
      background: url("../assets/images/logo.png") no-repeat center center;
      background-size: contain;
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      color:black;
      text-shadow: black 0.5px 0.5px;
      height: 141px;
      line-height: 141px;
      position: relative;
    }
    .mypic>i{
      position: absolute;
      left: 30px;
      top: 54px;
      background: wheat;
      padding: 5px;
    }
    .mypic>i:hover{
      cursor: pointer;
    }
    .mypic_back{
      width: 100%;
      background: white;
      border-bottom: 1px solid gray;
    }
  }
  @media screen and (min-width: 992px) {
    #navigator>ul{
      display: block !important;
    }
    .mypic>i{
      visibility: hidden;
    }
  }
  /* 移动端布局 */
  @media screen and (max-width: 991px){
    .mypic>i{
      visibility: visible;
    }
    .menu-enter{
      max-height: 0;
    }
    .menu-enter-active{
      transition: max-height .5s;
    }
    .menu-enter-to{
      max-height: 280px;
    }
    .menu-leave{
      max-height: 280px;
    }
    .menu-leave-active{
      transition: max-height .5s;
    }
    .menu-leave-to{
      max-height: 0;
    }
  }
  
  /* Galaxy Fold 竖屏 280px */

  /* @media screen and (max-width:285px){
    .mypic{
      width: 90%;
    }
  } */
  /* iphone 8p 竖屏 414px */
  /* @media screen and (min-width: 286px) and (max-width: 420px){
    .mypic{
      width: 70%;
    }
  } */
  /* ipad 横屏 768px */
  /* @media screen and (min-width: 421px){
    .mypic{
      width: 30%;
    }
  }
  @media screen and (max-width: 991px){
    .mypic{
     
    }
  }
  @media screen and (min-width: 992px){
    .mypic{
      width: 100%;
    }
  } */
</style>