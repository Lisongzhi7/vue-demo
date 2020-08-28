<template>
  <div id="app">
      <div class="fd-head">
        <div class="fd-head-center">
          <div class="fd-logo-box">
            <span>博客网站</span>
          </div>
          <div class="fd-logo-tile">
            <span>博客首页</span>
            <span>文章分类</span>
            <span>文章归档</span>
            <span>友情链接</span>
            <span>关于我</span>
            <span><i class="el-icon-search"></i></span>
          </div>
        </div>
      </div>
      <div class="fd-center" >

      <div class="fd-article-card" >
        <div class="fd-cursor-box">
          <el-carousel height="150px">
            <el-carousel-item v-for="(item, index) of images" :key="index">
              <div class="small">
                <img :src="item.img"  alt="上海鲜花港 - 郁金香" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="fd-head-title">
          <i class="el-icon-loading"></i>
          ashdajshdkadsjdladkakl
        </div>
        <div class="fd-card" v-for="(item, index) of articles">
          <div class="fd-image">{{item.title}}</div>
          <div class="fd-desc">{{item.desc}}</div>
          <div class="fd-time">
            <span><i class="el-icon-share"></i>{{item.time}}</span>
            <span> <i class="el-icon-s-custom"></i>{{item.author}}</span>
          </div>
          <div class="fd-tag">
            <span v-for="(tg, index) of item.tag">{{tg.name}}</span>
          </div>

        </div>

      </div>

      </div>

      <div class="fd-bottom">
        蜀ICP备18020377号
      </div>
  </div>

</template>

<script>


export default {
  name: 'App',
  data () {
    return {
        articles: [
          {
            title: "vue学习笔记",
            desc: "2020年6月的一些业务人文读书记录，记录一下常识gsdggsgdfgfd:",
            time: "2020年06月23日",
            author: "李松直",
            tag: [
              {
                name: "Vue"
              },
              {
                name: "javaScript"
              },
              {
                name: "前端"
              },
              {
                name: "学习笔记"
              }
            ]
          },
          {
            title: "Html学习笔记",
            desc: "2020年6月的一些业务人文读书记录，记录一下常识gsdggsgdfgfd:",
            time: "2020年06月24日",
            author: "李松直",
            tag: [
              {
                name: "Vue"
              },
              {
                name: " 初级"
              },
              {
                name: "Html"
              },
              {
                name: "学习笔记"
              }
            ]
          },
          {
            title: "Git学习笔记",
            desc: "2020年6月的一些业务人文读书记录，记录一下常识gsdggsgdfgfd:",
            time: "2020年06月26日",
            author: "李松直",
            tag: [
              {
                name: "Git"
              },
              {
                name: "代码管理"
              }
            ]
          },
          {
            title: "日常读书",
            desc: "2020年6月的一些业务人文读书记录，记录一下常识gsdggsgdfgfd:",
            time: "2020年06月36日",
            author: "罗康元",
            tag: [
              {
                name: "读书"
              }
            ]
          },


        ],
      images: [
        {
          img: "/static/image/card1.jpg"
        }
      ]
    }
  },
  methods: {},
  mounted () {

  },
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-z16/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '/static/live2dw/live2d-widget-model-tororo/assets/tororo.model.json' },
        display: { position: 'left', width: 100, height: 200 },
        mobile: { show: true },
        log: false
      })
    }, 1000)
  }
}

</script>

<style>
*, html, body{
  margin: 0;
  padding: 0;
}
#app{
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.fd-head{
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  display: flex;
  justify-content: center;
}
.fd-head-center{
  width: 1400px;
  height: 100%;
  display: flex;
}
.fd-logo-box{
  width: 400px;
  height: 100%;
}
.fd-logo-box span{
  font-size: 20px;
  height: 100%;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
}
.fd-logo-tile{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.fd-logo-tile span{
  margin-left: 10px;
  font-size: 20px;
}
.fd-center{
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
}
.fd-bottom{
  display: flex;
  width: 100%;
  height: 60px;
  background: black;
  color: white;
  justify-content: center;
  align-items: center;
}
.fd-article-card{
  width: 1400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}
.fd-card{
  width: 400px;
  height: 380px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  margin-top: 30px;
  border-radius: 10px;
  margin-left: 30px;
  margin-bottom: 10px;

}
.fd-image{
  width: 100%;
  height: 200px;
  background: url("./assets/image/card1.jpg") ;
  background-size: cover;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: flex-end;
 border-top-left-radius: 10px;
 border-top-right-radius: 10px;
}
.fd-desc{
  font-size: 16px;
  margin: 10px 10px 20px 10px;
  line-height: 27px
}
.fd-time{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9a9696;
 padding-bottom: 15px;
}
.fd-time span:nth-child(1){
  margin-left: 10px;
}
.fd-time span:nth-child(2){
  margin-right: 10px;
}
.fd-tag{
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fd-tag span{
  background: coral;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 15px;
  border-radius: 10px;
  color: #fff;
}
.fd-cursor-box{
  width: 100%;
  height: 300px;
  background: #9a9696;
}
.fd-head-title{
  width: 90%;
  height: 60px;
  margin-top: -37px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 24px;
  padding-left: 20px;
  padding-top: 20px;
  z-index: 10;
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
.small{
  width: 100%;
  height: 100%;
}
.small img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-carousel__container{
  height: 300px !important;
}





</style>
