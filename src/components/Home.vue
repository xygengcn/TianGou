<template>
  <el-container class="container">
    <el-header class="header">
      <img class="logo" alt="舔狗日记Logo" src="../assets/logo.png">
      <router-link to="/">
        <h2>舔狗日记</h2>
      </router-link>
    </el-header>
    <el-main class="container-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/font/ZCOOLKuaiLe-Regular.css";

  .container {
    display: flex;
    min-height: 100%;
  }

  .container-main {
    flex: 1;
  }

  .header {
    background: #feca68;
    display: flex;
    align-items: center;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .header a {
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
  }

  .header h2 {
    font-family: "ZCOOLKuaiLe-Regular";
    margin: 0px auto;
    font-size: 2em;
    color: #ffffff;
  }
</style>