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

    <div class="fd-center">


      <div class="fd-article-card">
        <div class="fd-cursor-box">
          <el-carousel height="150px">
            <el-carousel-item v-for="(item, index) of images" :key="index">
              <div class="small">
                <img class="fd-img" :src="item.img" alt="上海鲜花港 - 郁金香"/>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="fd-head-title">
          <i class="el-icon-loading"></i>
          每一个成功者都有一个开始。勇于开始，才能找到成功的路。
        </div>
        <div class="fd-card-a">
          <div class="fd-title-box">名言警句</div>
          <div class="fd-image-box">
            <div class="img">
              <img class="img1" src="../static/image/card4.jpg">
            </div>
            <div class="dsc">
              <span>热爱读书</span>
              <span>肯读书</span>
              <span>会读书</span>
              <span>理解其含义</span>
              <span>扎根其知识</span>
            </div>
          </div>
          <div class="fd-tag-box">
            <span class="fd-neirong">伟人所达到并保持着的高处，并不是一飞就到的，而是他们在同伴们都睡着的时候，一步步艰辛地向上攀爬的。</span>
            <span class="fd-neirong">伟人之所以伟大，是因为他与别人共处逆境时，别人失去了信心，他却下决心实现自己的目标。</span>
            <span class="fd-neirong">如果你希望成功，以恒心为良友，以经验为参谋，以小心为兄弟，以希望为哨兵。</span>
            <span class="fd-neirong">坚韧是成功的一大要素，只要在门上敲得够久、够大声，终会把人唤醒的。</span>
            <div class="fd-time-box">
              <span><i class="el-icon-date"></i>时间：2020年8月8日</span>
              <span><i class="el-icon-s-custom"></i>作者信息</span>
            </div>
          </div>
        </div>
        <div class="fd-card" v-for="(item, index) of articles">
          <div class="fd-image">{{ item.title }}</div>
          <div class="fd-desc">{{ item.desc }}</div>
          <div class="fd-time">
            <span><i class="el-icon-date"></i>{{ item.time }}</span>
            <span><i class="el-icon-s-custom"></i>{{ item.author }}</span>
          </div>
          <div class="fd-tag">
            <span v-for="(tg, index) of item.tag">{{ tg.name }}</span>
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
  data() {
    return {
      articles: [
        {
          title: "vue学习笔记",
          desc: "从基础的Vue学习，掌握方法，做好笔记，扎实学好入门Vue",
          time: "2020年08月27日",
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
          desc: "了解并掌握Html语义，用法，从最基础的做起，养成做笔记的习惯",
          time: "2020年08月27日",
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
          desc: "Git，分布式版本控制系统，git支持分布式部署，可以有效、高速的处理从很小到非常大的项目版本管理。",
          time: "2020年08月26日",
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
          desc: "读书积累知识，理解并掌握其核心知识，懂得温故而知新",
          time: "2020年08月26日",
          author: "李松直",
          tag: [
            {
              name: "读书"
            },
            {
              name: "记录"
            },
            {
              name: "理解"
            }
          ]
        },


      ],
      images: [
        {
          img: "/static/image/card1.jpg"
        },
        {
          img: "/static/image/card2.jpg"
        },
        {
          img: "/static/image/card3.jpg"
        }
      ]
    }
  },
  methods: {},
  mounted() {

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
        display: {position: 'left', width: 300, height: 400},
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
  background: #fff;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  display: flex;
  justify-content: center;
}

.fd-head-center {
  width: 1400px;
  height: 100%;
  display: flex;
}

.fd-logo-box {
  width: 400px;
  height: 100%;
}

.fd-logo-box span {
  font-size: 20px;
  height: 100%;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
}

.fd-logo-tile {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.fd-logo-tile span {
  margin-left: 10px;
  font-size: 20px;
}

.fd-center {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
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

.fd-article-card {
  width: 1400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
}

.fd-card {
  width: 400px;
  height: 380px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  margin-top: 30px;
  border-radius: 10px;
  margin-left: 30px;
  margin-bottom: 10px;

}

.fd-image {
  width: 100%;
  height: 200px;
  background: url("./assets/image/card1.jpg");
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

.fd-desc {
  font-size: 16px;
  margin: 10px 10px 20px 10px;
  line-height: 27px
}

.fd-time {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9a9696;
  padding-bottom: 15px;
}

.fd-time span:nth-child(1) {
  margin-left: 10px;
}

.fd-time span:nth-child(2) {
  margin-right: 10px;
}

.fd-tag {
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fd-tag span {
  background: coral;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 15px;
  border-radius: 10px;
  color: #fff;
}

.fd-cursor-box {
  width: 100%;
  height: 300px;
  background: #9a9696;
}

.fd-head-title {
  width: 90%;
  height: 60px;
  margin-top: -37px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 24px;
  padding-left: 20px;
  padding-top: 20px;
  z-index: 10;
  background-image: linear-gradient(to right, #69e7e6, #0a4670);
}

.small {
  width: 100%;
  height: 100%;
}

.small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.el-carousel__container {
  height: 300px !important;
}

.fd-cursor-box {
  border-radius: 15px;
}

.fd-img {
  border-radius: 15px;
}

.fd-card-a {
  width: 100%;
  height: 300px;

  display: flex;

}

.fd-title-box {
  height: 100%;
  width: 50px;
  font-size: 30px;
  color: white;
  background: antiquewhite;
  writing-mode: vertical-rl;
  align-items: center;
  justify-content: center;
  display: flex;
}

.fd-image-box {
  display: flex;
  flex-direction: column;
}

.img {
  height: calc(300px - 60px);
  width: 800px;
  background: aquamarine;
}

.dsc {
  height: 60px;
  width: 800px;

}

.fd-tag-box {
  flex: 1;
  background: #69e7e6;
  display: flex;
  flex-direction: column;
}

.img1 {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.fd-neirong {
  font-family: 华文楷体;
  font-size: 18px;
  color: black;
  text-indent: 2em;
  margin: 5px 5px 5px 10px;
}

.fd-time-box {
  display: flex;
  d-webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
}
.dsc{
  height: 65px;
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
}
.dsc span{
  background: coral;

  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 12px;
  padding-right: 10px;
  border-radius: 20px;
}

</style>
