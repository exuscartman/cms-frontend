<template>
  <el-container>
    <el-header>
      <v-head></v-head>
    </el-header>
    <el-main>
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
    </el-main>
    <!--<el-footer></el-footer>-->
  </el-container>
</template>

<script>
import vHead from './Header.vue'
export default {
  components: {
    vHead
  }
}
</script>

<style scoped>
  .content {
  }

  .el-container {
    margin-bottom: 40px;
    height: 100%;
  }

  .el-header {
    background-color: #242f42;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100px;
    padding: 0px;
  }

  .el-main {
    /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
    -ms-overflow-style: none;
    /*firefox 下隐藏滚动条*/
    overflow: auto;
    width: calc(100vw + 20px);
  }
  /*Chrome下隐藏滚动条，溢出可以透明滚动*/
  .el-main::-webkit-scrollbar{width:0px}

</style>
