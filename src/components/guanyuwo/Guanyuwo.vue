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
                <div v-for="(item,index) of List" class="now-bottom">
                    <div class="now-bottom-shang">
                        <div class="xiaolanma">
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                    <div class="now-bottom-xia">
                        <div class="fd-xia">
                            <span>{{item.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Echarts">
                <div id="main" style="width: 600px;height:400px;margin-top: 35px;margin-left: 20px"></div>
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
                name: 'HTML',
                desc: '从学校开始就接触HTML，发现了它的乐趣，就很喜欢，可能自己没事的时候都会去瞧上一瞧，爱钻研，遇见不会的都会想去把它了解到，记在自己的笔记上'
            },{
                name: 'Vue',
                desc: '刚开始接触的时候可能会有很多的不了解，但是通过自己的学习，课余时间的自学，慢慢的发现其好处，这一框架我本人也是十分喜欢（仅代表我的个人观点）'
            },{
                name: '读书',
                desc: '书是良药，刘向说："书犹药也，善读可以医愚"书是益友，臧克家说："读过一本书，像交了一位益友；书是窗户，高尔基说："每一本书，都在我面前打开了一扇窗户'
            },],
            List:[{
                name:'小懒码',
                title:'努力做有价值的技术文章'
            },{
                name:'Web',
                title:'扎实学习，积极进取，不言放弃'
            },{
                name:'读书',
                title:'养成良好的读书习惯'
            },]
        }
    },
    methods:{
        myEcharts(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'Web 能力判定'
                },
                tooltip: {},
                legend: {
                    data:['Web前端']
                },
                xAxis: {
                    data: ["HTML","CSS","JavaScript","Vue","Git",]
                },
                yAxis: {},
                series: [{
                    name: 'Web前端',
                    type: 'bar',
                    data: [30, 26, 20, 36, 19,]
                }]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    },
    mounted() {
        this.myEcharts();
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
.Echarts{
    width: 600px;
    height: 400px;
    background: #fff;
    margin-top: 30px;
    display: flex;
    align-items: center;
    border-radius: 5px;
}
</style>
