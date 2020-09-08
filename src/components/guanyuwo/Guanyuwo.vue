<template>
    <div class="head">
        <div class="guanyuwo">
            <div class="introduce">
              <span>个人简介：小懒码，男，前端工程师，菜鸡一个，喜欢拍照，爱好篮球，未来不管是否能够成功，
              既然选择了远方，便只顾风雨兼程！</span>
            </div>
            <div class="once">
                <div class="once-head">
                    <span>我的曾经</span>
                </div>
                <div class="once-bottom">
                    <div v-for="(item,index) of list" class="zuo">
                        <div class="zuo-head">
                            <div class="zuo-head-one"><span>{{ item.name }}</span></div>
                        </div>
                        <div class="zuo-bottom">
                            <div class="zuo-bottom-desc">
                                <span>{{ item.desc }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="now">
                <div class="now-head">
                    <span>我的现在</span>
                </div>
                <div class="now-bottom">
                    <div class="now-bottom-shang">
                        <div class="xiaolanma">
                            <span>小懒码</span>
                        </div>
                    </div>
                    <div class="now-bottom-xia">
                        <div class="fd-xia">
                            <span>努力做有价值的技术文章</span>
                        </div>
                    </div>
                </div>
                <div class="now-bottom">
                    <div class="now-bottom-shang">
                        <div class="xiaolanma">
                            <span>Ghost</span>
                        </div>
                    </div>
                    <div class="now-bottom-xia">
                        <div class="fd-xia">
                            <span>不断优化的一款Ghost博客主题</span>
                        </div>
                    </div>
                </div>
                <div class="now-bottom">
                    <div class="now-bottom-shang">
                        <div class="xiaolanma">
                            <span>Study2</span>
                        </div>
                    </div>
                    <div class="now-bottom-xia">
                        <div class="fd-xia">
                            <span>Study笔记的升级版本</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dibu-one">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Guanyuwo",
    data() {
        return {
            list: [{
                name: 'CSDN',
                desc: '大学开始养成记录的习惯，从最开始的Java基础到SSH框架，到后面不断的学习和总结，随着该平台设计越来越丑，广告越来越多，文章质量越来越差，果断离开'
            }, {
                name: '简书',
                desc: '看了电影《黄金时代》，然后在简书上看别人写的影评不错就喜欢上这个平台了，自己也经常在上面发布一些文章，虽然只有32个粉丝'
            }, {
                name: 'GitHub',
                desc: '很久之前还在用SVN的时候，就看技术网站不停的推荐GitHub，但是注册后没发现什么好处，知道如何使用Git进行项目管理的时候才知道它的好'
            },],

        }
    },

}

</script>

<style scoped>
.head {
    width: 100%;
    height: 100%;
    background: #c2e9fb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.guanyuwo {
    height: 1600px;
    width: 1200px;

    margin-top: -50px;
    z-index: 7;
}

.introduce {
    height: 70px;
    width: 1200px;
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.introduce span {
    font-size: 18px;
    margin-left: 20px;
    margin-top: -10px;
}

.once {
    height: 330px;
    background: #fff;
    width: 1200px;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.once-head {
    height: 50px;
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 27px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.once-bottom {
    height: 300px;
    width: 1200px;
    display: flex;
    flex-direction: row;
}

.zuo {
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.zuo-head {
    height: 160px;
    width: 400px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.zuo-head-one {
    height: 120px;
    width: 120px;
    background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.zuo-head-one span {
    font-size: 30px;
    color: #fff;
}

.zuo-bottom {
    height: 130px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.zuo-bottom-desc {
    height: 120px;
    width: 340px;
    font-size: 15px;
    color: #34495e;
}

.now {
    height: 250px;
    width: 1200px;
    background: #fff;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.now-head {
    height: 50px;
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 27px;
}

.now-bottom {
    height: 200px;
    width: 400px;
}

.now-bottom-shang {
    height: 140px;
    width: 400px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.xiaolanma {
    height: 120px;
    width: 120px;
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
}

.xiaolanma span {
    font-size: 30px;
    color: #fff;
}

.now-bottom-xia {
    height: 60px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fd-xia {
    height: 40px;
    width: 380px;
    display: flex;
    justify-content: center;
    color: #34495e;
}

.dibu-one {
    width: 1200px;
    height: 500px;
}
</style>
