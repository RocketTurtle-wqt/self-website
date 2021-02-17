<template>
  <div id="login">
    <main>
      <transition name="showLogin"
                  appear>      
        <div>
          <h1>登陆</h1>
          <div id="input">
            <!-- <label for="user">登陆密钥</label> -->
            <input type="text" id="user" v-model="userkey" placeholder="登陆密钥"><br>
          </div>
          <div id="check">
            <input type="text">
            <Sidentify :identifyCode="identifyCode"></Sidentify>
          </div>
          <div id="login_btn">
            <button id="submit">登陆</button>
            <button id="reset" @click="reset">重置</button>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import Sidentify from '../components/Identify';

export default {
  name:'Login',
  data() {
    return {
      userkey:"",
      identifyCode:""
    }
  },
  methods:{
    reset(){
      this.userkey="";
    }
  },
  components:{
    Sidentify
  }
}
</script>

<style scoped>
@media screen {  
  #login>main{
    width: 80%;
    height: 398px;
    /* background: url("../assets/images/login.jpeg") no-repeat; */
    background-size: cover;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
  }
  #login>main>div{
    margin-top: 30px;
    height: 80%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    background: wheat;
    border-radius: 20px;
  }
  h1{
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  #input{
    position: relative;
  }
  /* #input>label{
    color: lightslategrey;
  }
  #input>label:hover{
    cursor: text;
  } */
  #user{
    background: none;
    outline: none;
    border: none;
    width: 80%;
    height: 37px;
    box-sizing: border-box;
    padding-left: 10px;
    background: tan;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
  #check{
    display: flex;
    justify-content: center;
  }
  #check>input{
    background: none;
    outline: none;
    border: none;
    width: 30%;
    height: 37px;
    box-sizing: border-box;
    padding-left: 10px;
    background: tan;
    margin-right: 1em;
  }
  #login_btn>button{
    background: none;
    outline: none;
    border: none;
    width: 90px;
    height: 40px;
    border-radius: 45px;
    background: #EE9C21;
    color: white;
  }
  #login_btn{
    display: flex;
    justify-content: space-around;
  }
  .showLogin-enter{
    opacity: 0.3;
    transform: translateY(-20px);
  }
  .showLogin-enter-active{
    transition: all 1.2s;
  }
  .showLogin-enter-to{
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (min-width: 992px) {
  #login_btn>button:hover{
    background: #F5BD68;
    cursor: pointer;
    box-shadow: 0 2px gray;
    transform: translateY(-1px);
    transition: all 0.5s;
  }
}
</style>