<template>
    <div class="head">
        <div class="guanyuwo">
            <div class="introduce">
              <span>个人简介：小懒码，男，前端工程师，菜鸡一个，喜欢拍照，爱好篮球，未来不管是否能够成功，
              既然选择了远方，便只顾风雨兼程！</span>
            </div>
            <div class="once" data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine">
                <div class="once-head">
                    <span>我的曾经</span>
                </div>
                <div class="once-bottom">
                    <div v-for="(item,index) of list"  class="zuo">
                        <div class="zuo-head">
                            <div class="zuo-head-one" :class="omgColor(index)"><span>{{ item.name }}</span></div>
                        </div>
                        <div class="zuo-bottom">
                            <div class="zuo-bottom-desc">
                                <span>{{ item.desc }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="now" data-aos="fade-left"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine">
                <div class="now-head">
                    <span>我的现在</span>
                </div>
                <div v-for="(item,index) of List" class="now-bottom">
                    <div class="now-bottom-shang">
                        <div class="xiaolanma" :class="ingColor(index)">
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
            <div class="Echarts" data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000">
                <div id="main" style="width: 1200px;height:600px;"></div>
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
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
                            position: 'inner'
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 335, name: '直达', selected: true},
                            {value: 679, name: '营销广告'},
                            {value: 1548, name: '搜索引擎'}
                        ]
                    },
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        label: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        },
                        data: [
                            {value: 335, name: '直达'},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 135, name: '视频广告'},
                            {value: 1048, name: '百度'},
                            {value: 251, name: '谷歌'},
                            {value: 147, name: '必应'},
                            {value: 102, name: '其他'}
                        ]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        omgColor(index){
            return `bagColor${index +1}`
        },
        ingColor(index){
            return `begColor${index +1}`
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
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bagColor2{
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
.bagColor3{
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
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
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
}
.begColor2{
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
.begColor3{
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
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
    width: 1200px;
    height: 600px;
    background: #fff;
    margin-top: 30px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
</style>
