<template>
    <div class="head">
        <div class="zhongbu">
            <div class="label">
                <div class="label-one">
                    <span data-aos="zoom-in" data-aos-duration="2000">文章标签</span>
                </div>
                <div class="label-tow">

                    <div data-aos="zoom-in" data-aos-duration="2000" v-for="(item,index) of list"
                         :style="{background:randoColor()}" :class="createClasee(index)" class="bast">{{ item.name }}
                    </div>
                </div>
            </div>

            <div class="tu" data-aos="fade-up"
                 data-aos-duration="3000">
                <div class="Echarts" >
                <div id="to" style="width: 1100px;height: 400px"></div>
                </div>
            </div>

        </div>

        </div>
</template>

<script>
export default {
    name: "Feilei",
    data() {
        return {
            list: [{
                name: 'Web (1)'
            }, {
                name: 'CSS (11)'
            }, {
                name: 'Java (7)'
            }, {
                name: 'Html (4)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: '日常总结 (14)'
            }, {
                name: '设计模式 (5)'
            }, {
                name: '多线程 (1)'
            }, {
                name: 'jdk源码 (1)'
            }, {
                name: '程序 (1)'
            }, {
                name: 'Java (4)'
            }, {
                name: 'lock (1)'
            }, {
                name: '类图 (1)'
            }, {
                name: '单列模式 (7)'
            }, {
                name: '工厂模式 (1)'
            }, {
                name: '建造者模式 (1)'
            }, {
                name: '适配者模式 (2)'
            }, {
                name: '中国文化 (1)'
            }, {
                name: '文化发展 (1)'
            }, {
                name: '设计模式 (1)'
            },{
                name: '日常总结 (1)'
            },{
                name: '并发 (1)'
            },{
                name: 'Github (1)'
            },{
                name: '单列模式 (1)'
            },{
                name: 'UML (1)'
            },{
                name: 'ES6 (1)'
            },{
                name: 'IDEA (1)'
            },]
        }
    },
    methods: {
        createClasee(index) {
            return "" + (index + 1);
        },
        randoColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            return color;
        },
        myEcharts(data, name){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('to'));

            // 指定图表的配置项和数据
            var option = {
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '2019-06', '2019-11', '2020-04', '2020-09'],
                        ['HTML', 41.1, 30.4, 45.1, 53.3],
                        ['Web前端', 43.5, 46.1, 55.7, 57.1],
                        ['Git', 24.1, 34.2, 43.5, 54.4]
                    ]
                },
                xAxis: [
                    {type: 'category', gridIndex: 0},
                    {type: 'category', gridIndex: 1}
                ],
                yAxis: [
                    {gridIndex: 0},
                    {gridIndex: 1}
                ],
                grid: [
                    {bottom: '55%'},
                    {top: '55%'}
                ],
                series: [
                    // These series are in the first grid.
                    {type: 'bar', seriesLayoutBy: 'row'},
                    {type: 'bar', seriesLayoutBy: 'row'},
                    {type: 'bar', seriesLayoutBy: 'row'},
                    // These series are in the second grid.
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                    {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },

    },
    mounted() {
        let data = [1,3,5,6]
        this.myEcharts(data, '测试');

    }
}


</script>

<style scoped>
.head {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bast:hover{
    cursor: pointer;
}
.zhongbu {
    height: 1900px;
    width: 1100px;
    z-index: 1;
}

.label {
    height: 360px;
    width: 1100px;
    margin-top: -40px;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    border-radius: 5px;
}

.label-one {
    height: 60px;
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}

.label-tow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.bast {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 10px;
    padding: 10px 10px;
    background: darkseagreen;
    color: #fff;
}
.tu{
    width: 1100px;
    height: 400px;
    background: #fff;
    margin-top: 30px;
}
.Echarts{
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    border-radius: 5px;
}

</style>
