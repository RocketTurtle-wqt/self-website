<template>
  <div id="login">
    <main>
      <div>
        <h1>登陆</h1>
        <input type="text" id="user"><br>
        <div id="login_btn">
          <button id="submit">登陆</button>
          <button id="reset">重置</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name:'Login'
}
</script>

<style scoped>
@media screen {  
  #login>main{
    width: 80%;
    height: 398px;
    background: url("../assets/images/login.jpeg") no-repeat;
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
  }
  h1{
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  #user{
    background: none;
    outline: none;
    border: none;
    width: 80%;
    height: 30px;
    box-sizing: border-box;
    padding-left: 10px;
    background: white;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
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
  #login_btn>button:hover{
    background: #F5BD68;
    cursor: pointer;
  }
  #login_btn{
    display: flex;
    justify-content: space-around;
  }
}
</style>