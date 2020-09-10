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
<!--            <div class="tushi">-->
<!--            <div class="tushi-head">-->
<!--                <span>-->
<!--                    知识技能图-->
<!--                </span>-->
<!--            </div>-->
                <div class="Echarts">
                <div id="to" style="width: 600px;height: 400px"></div>
                </div>
<!--            </div>-->
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
                name: 'JavaScript (14)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: 'JavaScript (14)'
            }, {
                name: 'Java (7)'
            }, {
                name: 'Java (7)'
            }, {
                name: 'Java (7)'
            }, {
                name: 'Java (7)'
            }, {
                name: 'Java (7)'
            }, {
                name: 'Java (7)'
            }, {
                name: 'Java (7)'
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
                title: {
                    text: name
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: data
                }]
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
    background: #c2e9fb;
    display: flex;
    justify-content: center;
    align-items: center;
}

.zhongbu {
    height: 1900px;
    width: 1100px;
    z-index: 1;
}

.label {
    height: 270px;
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
/*.tushi {*/
/*    width: 500px;*/
/*    height: 400px;*/
/*    background: #fff;*/
/*    margin-top: 30px;*/

/*    border-radius: 5px;*/
/*}*/
/*.tushi-head{*/
/*    height: 50px;*/
/*    width: 500px;*/
/*    background: #b49fda;*/
/*    display: flex;*/
/*    align-items: center;*/
/*    justify-content: center;*/
/*    font-size: 20px;*/
/*    font-weight: bold;*/
/*    color: #fff;*/
/*}*/
/*.Echarts{*/
/*    height: 350px;*/
/*    width: 500px;*/
/*    background: #cccccc;*/
/*}*/
</style>
