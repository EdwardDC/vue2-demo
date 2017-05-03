<template>
<div id="app">
  <div class="headerWrapper" data-v-7ad4e6e1="">
    <header class="header" :style="{ backgroundColor: bgColor }">
      <div class="container">
        <h1><a class="router-link-active" href="#/zh-CN"><img data-v-7ad4e6e1="" class="nav-logo" src="./assets/images/logo.svg" alt=""></a></h1>
        <el-menu :default-active="activeIndex2" data-v-7ad4e6e1="" mode="horizontal" @select="handleSelect">
          <el-menu-item class="nav-item" index="1">指南</el-menu-item>
          <el-menu-item class="nav-item active" index="2">组件</el-menu-item>
          <el-menu-item class="nav-item" index="3">资源</el-menu-item>
          <el-menu-item class="nav-item" index="4"><a href="https://www.ele.me" target="_blank">中文/En</a></el-menu-item>
        </el-menu>
      </div>
    </header>
  </div>

  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bgColor: 'rgb(32, 160, 255)'
    }
  }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.headerWrapper {
    height: 80px;
    .header {
        color: #fff;
        height: 80px;
        left: 0;
        line-height: 80px;
        position: relative;
        top: 0;
        width: 100%;
        z-index: 100;
        h1 {
          float: left;
          font-size: 32px;
          font-weight: 400;
          margin: 0;
          a {
            color: #fff;
            display: block;
            text-decoration: none;
            .nav-logo {
              vertical-align: sub;
            }
          }
        }

    }
}

.container {
    margin: 0 auto;
    padding: 0 30px;
    .el-menu {
        background: transparent none repeat scroll 0 0;
        float: right;
        height: 100%;
        line-height: 80px;
        margin: 0;
        padding: 0;
        .nav-item {
            cursor: pointer;
            float: left;
            list-style: outside none none;
            margin: 0 0 0 20px;
            position: relative;
            color: #fff;
            opacity: 0.8;
            font-weight: 700;
            height: 80px;
            line-height: 80px;
            box-sizing: border-box;
            &:hover {
              background: none;
              opacity: 1;
              font-weight: bold;
              border-bottom: 4px solid #99d2fc;
            }
            &.active {
              background: none;
              opacity: 1;
              font-weight: bold;
              border-bottom: 4px solid #99d2fc;
            }
        }
    }
}


</style>
