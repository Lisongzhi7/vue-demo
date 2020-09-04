<template>
  <div id="app">
    <div class="fd-head">
      <div class="fd-head-center">
        <div class="fd-logo-box">
          <span><img class="logo-box" src="/static/image/card5.png">Myblogsite</span>
        </div>
        <div class="fd-logo-tile">
          <router-link to="/home"><span>博客首页</span></router-link>
          <router-link to="/fenlei"><span>文章分类</span></router-link>
          <router-link to="/guidang"><span>文章归档</span></router-link>
          <router-link to="/lianjie"><span>友情链接</span></router-link>
          <router-link to="/guanyuwo"><span>关于我</span></router-link>
          <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
        </div>
      </div>
      <el-dialog  :modal-append-to-body="false" :show-close="false" title="搜索" :visible.sync="dialogFormVisible">
      <div class="zhezhao">

      </div>
      </el-dialog>
    </div>

    <div class="fd-center">

      嘎嘎嘎嘎嘎嘎嘎<br>

    </div>

    <div class="fd-bottom">
      蜀ICP备18020378号
    </div>
  </div>

</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      dialogFormVisible: false,
    }
  },
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-z16/assets/',
        tagMode: false,
        debug: false,
        model: {jsonPath: '/static/live2dw/live2d-widget-model-wanko/assets/wanko.model.json'},
        display: {position: 'left', width: 250, height: 300},
        mobile: {show: true},
        log: false
      })
    }, 1000)
  }
}

</script>

<style>
*, html, body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.fd-head {
  width: 100%;
  height: 80px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  display: flex;
  justify-content: center;
  position: fixed;
}
.fd-head-center {
  width: 1200px;
  height: 100%;
  display: flex;
}
.fd-logo-box {
  width: 400px;
  height: 100%;
}
.logo-box{
  height: 55px;
}
.fd-logo-box span {
  font-size: 25px;
  height: 100%;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: 华文细黑;
}
.fd-logo-tile {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
a {
  text-decoration: none;
}
.fd-logo-tile span {
  margin-left: 10px;
  font-size: 17px;
  color: white;
  font-family: "Microsoft YaHei";
}
.router-link-active span {
  color: darkslategray;
}
.fd-center {
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  height: 8000px;
  width: 100%;
  background: #c2e9fb;
  overflow-y: scroll;
}

.fd-bottom {
  display: flex;
  width: 100%;
  height: 60px;
  background: black;
  color: white;
  justify-content: center;
  align-items: center;
}
.zhezhao{
  height: 200px;
  width:200px;
}
</style>
