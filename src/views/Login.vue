<template>
  <div id="login">
    <main>
      <h1>登陆</h1>
      <input type="text" id="user"><br>
      <div id="login_btn">
        <button id="submit">登陆</button>
        <button id="reset">重置</button>
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
  #login>main{
    width: 100px;
    height: 200px;
    background: red;
  }
  #login>main{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    overflow: hidden;
  }
  h1{
    text-align: center;
    font-size: 20px;
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
  }
  #login_btn{
    display: flex;
    justify-content: space-around;
  }
</style>