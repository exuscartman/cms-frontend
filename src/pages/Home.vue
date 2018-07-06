<template>
    <div class="content-container">
      <el-row>
        <el-col >
          <el-carousel :interval="5000">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="2">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../static/images/uav.jpg" class="image">
            <div style="padding: 14px;">
              <span>Hello world</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../static/images/uav.jpg" class="image">
            <div style="padding: 14px;">
              <span>Hello world</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../static/images/uav.jpg" class="image">
            <div style="padding: 14px;">
              <span>Hello world</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <v-foot></v-foot>
    </div>
</template>

<script>
import vFoot from '../components/Footer.vue'
// import request from '../utils/request'
export default {
  data () {
    return {
      currentDate: new Date()
    }
  },
  components: {
    vFoot
  }
  // created () {
  //   this.testApi()
  // },
  // methods: {
  //   testApi: function () {
  //     request.ajaxPost(
  //       '/news/index',
  //       'type=top&key=123456',
  //       resp => {
  //         console.log(resp)
  //         if (resp.success) {
  //           let pageData = resp.data
  //           this.dataList = pageData.list
  //           // console.log(this.dataList)
  //           this.totalSize = pageData.total
  //
  //           setTimeout(() => {
  //             this.loading = false
  //           }, 200)
  //         } else {
  //           this.errorTip(resp.errorMsg)
  //           setTimeout(() => {
  //             this.loading = false
  //           }, 200)
  //         }
  //       }
  //     )
  //   }
  // }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
