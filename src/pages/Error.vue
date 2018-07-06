<template>
  <div class="error-page">
    <div class="error-code" v-if="errCode==='404'">4<span>0</span>4</div>
    <div class="error-code" v-if="errCode==='403'">4<span>0</span>3</div>
    <div class="error-code" v-if="errCode==='500'">5<span>0</span>0</div>
    <div class="error-code" v-if="errCode==='504'">5<span>0</span>4</div>
    <div class="error-desc">{{errorMap[errCode]}}</div>
    <div class="error-handle">
      <router-link to="/" replace>
        <el-button type="primary" size="large">返回首页</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      errCode: 'other',
      errorMap: {
        '403': '啊哦~ 你没有权限访问该页面哦',
        '404': '啊哦~ 你所访问的页面不存在',
        '500': '啊哦~ 服务异常',
        '504': '啊哦~ 服务连接超时',
        'other': '啊哦~出错了'
      }
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    let errCode = this.$route.params.errCode
    if (errCode) {
      this.errCode = errCode
    }
  }
}
</script>

<style scoped>
  .error-page{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    box-sizing: border-box;
  }
  .error-code{
    line-height: 1;
    font-size: 160px;
    font-weight: bolder;
    color: #f02d2d;
  }
  .error-code span{
    color: #00a854;
  }
  .error-desc{
    font-size: 30px;
    color: #777;
  }
  .error-handle{
    margin-top: 30px;
    padding-bottom: 200px;
  }
  .error-btn{
    margin-left: 100px;
  }
</style>
