<template>
    <div class="manage">
        <div class="zuo">
            <el-col :span="12">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#fff">
                    <el-menu-item index="1">
                        <span slot="title">地府管理系统</span>
                    </el-menu-item>
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>生死簿</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">友情链接</el-menu-item>
                            <el-menu-item index="2-2">数据同步</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-finished"></i>
                            <span>勾魂管理</span>
                        </template>
                        <el-menu-item index="3-1">人名</el-menu-item>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-edit-outline"></i>
                            <span>阎王审批记录</span>
                        </template>
                        <el-menu-item index="4-1">记录内容</el-menu-item>
                    </el-submenu>

                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-scissors"></i>
                            <span>十八层地狱</span>
                        </template>
                        <el-menu-item index="5-1">设备管理</el-menu-item>
                        <el-menu-item index="5-2">作业流程</el-menu-item>
                        <el-menu-item index="5-3">用户管理</el-menu-item>
                    </el-submenu>

                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-refresh"></i>
                            <span>六道轮回</span>
                        </template>
                    </el-submenu>

                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-coin"></i>
                            <span>冥币管理</span>
                        </template>
                    </el-submenu>

                    <el-submenu index="8">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>日志管理</span>
                        </template>
                    </el-submenu>


                    <el-submenu index="9">
                        <template slot="title">
                            <i class="el-icon-s-tools"></i>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item index="9-1">管理员</el-menu-item>
                        <el-menu-item index="9-2">角色权限</el-menu-item>
                    </el-submenu>


                </el-menu>
            </el-col>
        </div>
        <div class="page">
            <div class="page-head">
                <div class="xx">
                    <el-badge :value="1" class="item">
                        <i class="el-icon-message-solid"></i>
                    </el-badge>
                </div>
                <div class="mc"><i class="el-icon-user-solid"></i><span>账号名称</span></div>
                <div class="tc"><span>退出</span></div>
            </div>
            <div class="page-center">
                <div class="page-center-head">
                    <div class="page-head-head">
                        <div v-for="(item,index) of list" :class="color(index)" class="a-head">
                            <span class="a">{{ item.name }}</span>
                            <span class="b">{{ item.time }}</span>
                        </div>
                    </div>
                    <div class="page-head-center">
                        <div class="page-center-zuo">
                            <div class="zuo-head">
                                <span>常用功能导航</span>
                                <i class="iconfont icon-diandian"></i>
                            </div>
                            <div class="zuo-bottom">
                                <div @click="showBox(index)" v-for="(item,index) of List" class="zuo-bottom-a">
                                    <div class="zuo-bottom-b">
                                        <i :class="item.image"></i>
                                    </div>
                                    <div class="zuo-bottom-c">
                                        <span>{{ item.designation }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page-center-you">
                            <div class="you-head">
                                <span>今日待办</span>
                                <i class="iconfont icon-diandian"></i>
                            </div>
                            <div class="you-center">
                                <div class="you-bottom">
                                    <div class="you-bottom-head">
                                        <span class="you-a">AM 9:00</span>
                                        <span class="you-b">大事件审批</span>
                                    </div>
                                    <div class="you-bottom-center">
                                        <div class="you-bottom-center-a">
                                            <span class="you-a-a">时间：</span>
                                            <span class="you-a-b">3029年2月29日</span>
                                        </div>
                                        <div class="you-bottom-center-b">
                                            <span class="you-a-c">地点：</span>
                                            <span class="you-a-d">会议室2938</span>
                                        </div>
                                        <div class="you-bottom-center-c">
                                            <div v-for="(item,index) of ListImg" class="you-a-e">
                                                <img :src="item.img">
                                            </div>
                                            <div class="you-a-f">+8</div>
                                        </div>
                                        <div class="you-bottom-center-d">
                                            <span class="ypu-a-g">PM 6:00</span>
                                            <span class="ypu-a-h">职工聚餐</span>
                                        </div>
                                        <div class="you-bottom-center-e">
                                            <span class="ypu-a-i">PM 11:00</span>
                                            <span class="ypu-a-j">判官高级培训</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="page-head-bottom">
                        <div class="page-zuo-aa">
                            <div class="zuo-aa">
                                <span>地府出入境人数</span>
                                <i class="iconfont icon-diandian"></i>
                            </div>
                            <div class="zuo-ab">
                                <div class="Echarts">
                                    <div id="main" style="width: 950px;height: 370px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="page-you-aa">
                            <div class="you-aa">
                                <span>各层地狱人数</span>
                                <i class="iconfont icon-diandian"></i>
                            </div>
                            <div class="you-ab">
                                <div class="Echart">
                                    <div id="to" style="width: 590px;height: 370px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="提交" :visible.sync="isShow">
            <el-form :model="yqlj">
                <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="yqlj.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="头像地址" :label-width="formLabelWidth">
                    <el-input v-model="yqlj.image" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="描述信息" :label-width="formLabelWidth">
                    <el-input v-model="yqlj.descInfo" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="giehub地址" :label-width="formLabelWidth">
                    <el-input v-model="yqlj.githubUrl" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="博客地址" :label-width="formLabelWidth">
                    <el-input v-model="yqlj.blogUrl" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="背景样式" :label-width="formLabelWidth">
                    <el-input v-model="yqlj.bgColor" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取 消</el-button>
                <el-button type="primary" @click="saveyqlj()">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
export default {
    name: "Admin",
    data() {
        return {
            list: [{
                name: '地府人数',
                time: '1986',
            }, {
                name: '今日入境',
                time: '10',
            }, {
                name: '今日出境',
                time: '22',
            }, {
                name: '管理员',
                time: '100',
            },],
            List: [{
                image: 'el-icon-notebook-1',
                designation: '友情链接',
            }, {
                image: 'el-icon-search',
                designation: '查询寿命',
            }, {
                image: 'el-icon-edit-outline',
                designation: '入境管理',
            }, {
                image: 'el-icon-refresh',
                designation: '货币管理',
            }, {
                image: 'el-icon-tickets',
                designation: '操作日志',
            }, {
                image: 'el-icon-school',
                designation: '十八地狱',
            }, {
                image: 'el-icon-finished',
                designation: '发勾魂单',
            }, {
                image: 'el-icon-coin',
                designation: '资产管理',
            }, {
                image: 'el-icon-s-tools',
                designation: '员工设置',
            }, {
                image: 'el-icon-s-shop',
                designation: '营销管理',
            }, {
                image: 'el-icon-loading',
                designation: '重新投胎',
            }, {
                image: 'el-icon-view',
                designation: '百鬼夜行',
            },],
            ListImg: [{
                img: 'http://xlsb.luokangyuan.com/image-bj-03.jpg'
            }, {
                img: 'http://xlsb.luokangyuan.com/a1.jpg'
            }, {
                img: 'http://xlsb.luokangyuan.com/a2.jpg'
            }, {
                img: 'http://xlsb.luokangyuan.com/a3.jpg'
            }, {
                img: 'http://xlsb.luokangyuan.com/a4.jpg'
            },],
            isShow:false,
            yqlj: {
                name:'',
                image:'',
                descInfo:'',
                githubUrl:'',
                blogUrl:'',
                bgColor:''
            }
        }
    },
    methods: {
        showBox(index){
            if(index==0){
                this.isShow=true;
                this.yqlj.name='';
                this.yqlj.image='';
                this.yqlj.descInfo='';
                this.yqlj.githubUrl='';
                this.yqlj.blogUrl='';
                this.yqlj.bgColor='';
            }
        },
        saveyqlj(){
            this.isShow=false;
            this.$api.post(`/api/v1/links`, this.yqlj, (res) => {
                if (res) {
                    this.$message({
                        message: '恭喜你，这是一条成功消息',
                        type: 'success'
                    });
                }
                else {
                    this.$message.error('错了哦，这是一条错误消息');
                }
            })
        },

        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        color(index) {
            return `kapian${index + 1}`
        },
        myEcharts() {
            var myChart = this.$echarts.init(document.getElementById('main'));

            var option = {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['0', '2', '3', '4', '5', '6', '7', '8', '9', '10']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '出境人数',
                        type: 'line',
                        stack: '总量',
                        data: [40, 30, 60, 85, 44, 33, 48, 63, 59, 33]
                    },
                    {
                        name: '入境人数',
                        type: 'line',
                        stack: '总量',
                        data: [22, 36, 52, 14, 32, 85, 63, 22, 14, 62]
                    },

                ]
            };
            myChart.setOption(option);
        },
        myEchart() {
            var myChart = this.$echarts.init(document.getElementById('to'));

            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['第五层', '第四层', '第三层', '第二层', '第一层']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 335, name: '第五层'},
                            {value: 310, name: '第四层'},
                            {value: 234, name: '第三层'},
                            {value: 135, name: '第二层'},
                            {value: 1548, name: '第一层'}
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        }
    },
    mounted() {
        this.myEcharts();
        this.myEchart();
    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Alibaba-PuHuiTi-Medium';
    src: url('/static/font/Alibaba-PuHuiTi-Medium.otf') format('truetype');
}

.manage {
    height: 1200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.el-col-12 {
    width: 15%;
}

.zuo {
    width: 300px;
    height: 1200px;
}

.el-menu-vertical-demo {
    height: 1200px;
    width: 300px;
}

.page {
    width: calc(100% - 300px);
    height: 1200px;;
    display: flex;
    flex-direction: column;
}

.page-head {
    height: 60px;
    width: 1577px;
    background: #fff;
    display: flex;
    align-items: center;
    font-size: 22px;
    justify-content: flex-end;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.xx {
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mc {
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mc span {
    font-size: 15px;
    color: #333;
    font-family: Alibaba-PuHuiTi-Medium;
}

.tc {
    margin-right: 50px;
    font-size: 17px;
    font-family: Alibaba-PuHuiTi-Medium;
    color: #333;
}

.page-center {
    height: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.page-center-head {
    height: 1090px;
    width: calc(100% - 50px);
}

.page-head-head {
    height: 250px;
    width: 1553px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.a-head {
    height: 250px;
    width: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.a {
    font-size: 10px;
    color: #fff;
}

.b {
    font-size: 30px;
    color: #fff;
    margin-top: 10px;
}

.kapian1 {
    background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.kapian2 {
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.kapian3 {
    background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.kapian4 {
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.page-head-center {
    height: 420px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.page-center-zuo {
    height: 410px;
    width: 950px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.zuo-head {
    height: 50px;
    width: 950px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: Alibaba-PuHuiTi-Medium;
    justify-content: space-between;
}

.zuo-head span {
    margin-left: 20px;
}

.zuo-head i {
    margin-right: 20px;
}

.zuo-bottom {
    height: 370px;
    width: 950px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.zuo-bottom-a {
    height: 185px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}

.zuo-bottom-b {
    height: 90px;
    width: 90px;
    border-radius: 45px;
    display: flex;
    background: #fff;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.zuo-bottom-c {
    height: 30px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.page-center-you {
    height: 410px;
    width: 590px;
    margin-left: 13px;
    margin-top: 10px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.you-head {
    height: 50px;
    width: 590px;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: Alibaba-PuHuiTi-Medium;
    justify-content: space-between;
}

.you-head span {
    margin-left: 20px;
}

.you-head i {
    margin-right: 20px;
}

.you-center {
    height: 370px;
    width: 590px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.you-bottom {
    height: 350px;
    width: 570px;
    display: flex;
    flex-direction: column;
}

.you-bottom-head {
    height: 50px;
    width: 570px;
    background: dodgerblue;
    display: flex;
    align-items: center;
    font-family: Alibaba-PuHuiTi-Medium;
    color: #fff;
}

.you-a {
    margin-left: 15px;
}

.you-b {
    margin-left: 80px;
}

.you-bottom-center {
    height: 140px;
    width: 570px;
}

.you-bottom-center-a {
    height: 40px;
    width: 570px;
    display: flex;
    align-items: center;
}

.you-a-a {
    margin-left: 15px;
}

.you-a-b {
    margin-left: 30px;
}

.you-bottom-center-b {
    height: 40px;
    width: 570px;
    display: flex;
    align-items: center;
}

.you-a-c {
    margin-left: 15px;
}

.you-a-d {
    margin-left: 30px;
}

.you-bottom-center-c {
    height: 60px;
    width: 570px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999999;
}

.you-a-e {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin-left: 5px;
}

.you-a-e img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
}

.you-a-f {
    height: 40px;
    width: 40px;
    background: #00c6fb;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    border-radius: 20px;
    margin-left: 5px;
}

.you-bottom-center-d {
    height: 60px;
    width: 570px;
    display: flex;
    align-items: center;
}

.ypu-a-g {
    margin-left: 15px;
}

.ypu-a-h {
    margin-left: 80px;
}

.you-bottom-center-e {
    height: 60px;
    width: 570px;
    display: flex;
    align-items: center;
}

.ypu-a-i {
    margin-left: 15px;
}

.ypu-a-j {
    margin-left: 70px;
}

.page-head-bottom {
    height: 420px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.page-zuo-aa {
    height: 410px;
    width: 950px;
    margin-top: 10px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.page-you-aa {
    height: 410px;
    width: 590px;
    margin-left: 13px;
    margin-top: 10px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.zuo-aa {
    height: 50px;
    width: 950px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-family: Alibaba-PuHuiTi-Medium;
}

.zuo-aa span {
    margin-left: 20px;
}

.zuo-aa i {
    margin-right: 20px;
}

.you-aa {
    height: 50px;
    width: 590px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-family: Alibaba-PuHuiTi-Medium;
}

.you-aa span {
    margin-left: 20px;
}

.you-aa i {
    margin-right: 20px;
}

.zuo-ab {
    height: 370px;
    width: 950px;
}

.you-ab {
    height: 370px;
    width: 590px;
}
</style>