<template>
  <div class="header">
    <div class="container">
      <h1>
        <a href="#/">
          <img class="nav-logo" src="../../static/images/index.svg"/>
          <img class="nav-logo-small" src="../../static/images/index.svg"/>
        </a>
      </h1>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-nav header-right"
        mode="horizontal"
        @select="handleSelect"
        background-color="#242f42"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" route="#/">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>

    <!--&lt;!&ndash; 折叠按钮 &ndash;&gt;-->
    <!--<div class="collapse-btn" @click="collapseChage">-->
      <!--<i class="el-icon-menu"></i>-->
    <!--</div>-->

  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 22px;
    color: #fff;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .container {
    padding: 0px;
    border: 0px;
    background-color: #242f42;
  }

  .header h1 {
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400;
  }

  .header h1 a {
    color: #333;
    text-decoration: none;
    display: block;
  }

  .header .nav-logo-small, .header .nav-logo {
    vertical-align: sub;
  }

  .header .nav-logo-small {
    display: none;
  }

  .header-right{
    float: right;
    padding-right: 50px;
    border-bottom: 0px;
  }

</style>
