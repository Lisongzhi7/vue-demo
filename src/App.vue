<template>
    <div id="app">
        <div v-if="!showNav" class="fd-head">
            <div class="fd-head-center">
                <div class="fd-logo-box">
                    <span><img class="logo-box" src="/static/image/logo.png">小懒码</span>
                </div>
                <div class="fd-logo-tile">
                    <router-link  to="/home"><span class="fd-icon"><i class="iconfont icon-shouye"></i></span><span>博客首页</span></router-link>
                    <router-link to="/fenlei"><span class="fd-icon"><i class="iconfont icon-leimupinleifenleileibie1"></i></span><span>文章分类</span></router-link>
                    <router-link to="/guidang"><span class="fd-icon"><i class="iconfont icon-guidang3"></i></span><span>文章归档</span></router-link>
                    <router-link to="/lianjie"><span class="fd-icon"><i class="iconfont icon-youqinglianjie"></i></span><span>友情链接</span></router-link>
                    <router-link to="/guanyuwo"><span class="fd-icon"><i class="iconfont icon-guanyuwo"></i></span><span>关于我</span></router-link>
                    <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
                </div>
            </div>

            <el-dialog :modal-append-to-body="false" :show-close="false" :visible.sync="dialogFormVisible">
                <div class="zhezhao">
                    <span><img src="/static/image/card6.gif"></span>

                </div>
            </el-dialog>
        </div>
        <div v-if="showNav" class="fd-head second">
            <div class="fd-head-center">
                <div class="fd-logo-box">
                    <span><img class="logo-box" src="/static/image/logo.png">小懒码</span>
                </div>
                <div class="fd-logo-tile box">
                    <router-link to="/home"><span class="fd-icon"><i class="iconfont icon-shouye"></i></span><span>博客首页</span></router-link>
                    <router-link to="/fenlei"><span class="fd-icon"><i class="iconfont icon-leimupinleifenleileibie1"></i></span><span>文章分类</span></router-link>
                    <router-link to="/guidang"><span class="fd-icon"><i class="iconfont icon-guidang3"></i></span><span>文章归档</span></router-link>
                    <router-link to="/lianjie"><span class="fd-icon"><i class="iconfont icon-youqinglianjie"></i></span><span>友情链接</span></router-link>
                    <router-link to="/guanyuwo"><span class="fd-icon"><i class="iconfont icon-guanyuwo"></i></span><span>关于我</span></router-link>
                    <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
                </div>
            </div>
            <el-dialog :modal-append-to-body="false" :show-close="false" :visible.sync="dialogFormVisible">
                <div class="zhezhao">
                    <span><img src="/static/image/card6.gif"></span>

                </div>
            </el-dialog>
        </div>
        <div class="fd-center">
            <div class="lunbo">
                <vue-particles color="#666">
                </vue-particles>
                <span class="fd-name">小懒码，初来驾到</span>
                <span class="fd-title">
                    You reap what you sow（一份耕耘，一份收获）
                    </span>
            </div>
            <router-view></router-view>

        </div>

        <div class="fd-bottom">
            蜀ICP备18020378号
        </div>
    </div>

</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            dialogFormVisible: false,
            showNav:true
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{

        handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 100){
                this.showNav = true;
            }else if(scrollTop < 100) {
                this.showNav = false;
            }
        },
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
};
(function(window, document, undefined) {
    var hearts = [];
    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(callback) {
                setTimeout(callback, 1000 / 60);
            }
    })();
    init();
    function init() {
        //css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
        css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px; left: -5px;}.heart:before{top: -5px; left: -5px;}");
        attachEvent();
        gameloop();
    }
    function gameloop() {
        for (var i = 0; i < hearts.length; i++) {
            if (hearts[i].alpha <= 0) {
                document.body.removeChild(hearts[i].el);
                hearts.splice(i, 1);
                continue;
            }
            hearts[i].y--;
            hearts[i].scale += 0.050;  //hearts[i].scale += 0.004;
            hearts[i].alpha -= 0.013;  //hearts[i].alpha -= 0.013;
            hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
        }
        requestAnimationFrame(gameloop);
    }
    function attachEvent() {
        var old = typeof window.onclick === "function" && window.onclick;
        window.onclick = function(event) {
            old && old();
            createHeart(event);
        }
    }
    function createHeart(event) {
        var d = document.createElement("div");
        d.className = "heart";
        hearts.push({
            el: d,
            x: event.clientX - 5,
            y: event.clientY - 5,
            scale: 1,
            alpha: 1,
            color: randomColor()
        });
        document.body.appendChild(d);
    }
    function css(css) {
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            style.appendChild(document.createTextNode(css));
        } catch(ex) {
            style.styleSheet.cssText = css;
        }
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    function randomColor() {
        return "rgb(" + (~~ (Math.random() * 255)) + "," + (~~ (Math.random() * 255)) + "," + (~~ (Math.random() * 255)) + ")";
    }
})(window, document);




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
    height: 60px;
    background: #000;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 10;
}
.second{
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
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
.logo-box {
    height: 55px;
}
.fd-logo-box span {
    font-size: 25px;
    height: 100%;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    font-family: 幼圆;
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
    display: inline-block;
    line-height: 60px;
    height: 60px;
    margin-left: 10px;
    font-size: 20px;
    color: #fff;
    font-family: "Microsoft YaHei";
}
/*.router-link-active span {*/
/*    color: lightpink;*/
/*}*/
.fd-center {
    display: flex;
    flex-direction: column;
    /*margin-top: 110px;*/
    height: 100%;
    width: 100%;
}
.fd-bottom {
    display: flex;
    width: 100%;
    height: 60px;
    background: black;
    color: white;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
}
.zhezhao {
    height: 300px;
    width: 200px;
}
.lunbo{
    height: 500px;
    width: 100%;
    background: black;
}
.fd-name{
    margin-top: -280px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 50px;
    position: absolute;
    font-weight: bold;
}
.fd-title{
    font-size: 20px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: -188px;
    position: absolute;
    width: 100%;
}
#particles-js{
    height: 100%;
}
.fd-icon i{
    font-size: 23px;
}
.box a:hover{
    background: lavender;
    color: #57c6e1;
}
</style>
