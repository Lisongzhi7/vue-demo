<template>
    <div class="head">
        <div class="fd-leirong show">
            <span class="tubiao"><i class="el-icon-edit"></i></span>
            <!--        <span @click="getNextData()"> 查看下一页</span>-->
            <!--        <span @click="getRecData()"> 查看上一页</span>-->
            <span class="leirong-box">世上没有白费的努力，更没有碰巧的成功，不要揠苗助长，不要急于求成，只要一点一点去做，一步步去走，成功，不过是水到渠成。</span>
        </div>
        <div class="fd-ziliao">
            <div @click="showDetail(item)" v-for="(item,index) of list" data-aos="zoom-in-up" data-aos-duration="3000"
                 class="kapian show">
                <div class="kapian-img">
                    <img :src="item.img">
                    <span class="biaoti">{{ item.name }}</span>
                </div>
                <div class="jieshao">
                    <span class="fd-jieshao">{{item.desc}}</span>
                </div>
                <div class="name">
                    <span class="time"><i class="el-icon-date"></i>{{ item.createTimeStr }}</span>
                    <span class="name-box"><i class="el-icon-s-custom"></i>李松直</span>
                </div>
                <div class="biaoqian">
                    <div v-for="(tag,index) of item.tags" class="fd-biaoqian base"><span>{{ tag.name }}</span></div>

                </div>
            </div>
<!--            <el-pagination-->
<!--                @prev-click="getRecData()"-->
<!--                @next-click="getNextData()"-->
<!--                @current-change="getCurrentData()"-->
<!--                background-->
<!--                layout="prev, pager, next"-->
<!--                :total="total">-->
<!--            </el-pagination>-->
            <!--            <div @click="show()">点我</div>-->
        </div>

    </div>
</template>

<script>
export default {
    name: "head",
    methods: {
        // 获取文章数据
        getList() {
            this.$api.get(`/api/v1/article/${this.current}/${this.size}`, null, (res) => {
                if (res) {
                    this.list = res.data.records;
                    this.total = res.data.total;
                }
            })
        },
        getNextData() {
            // this.current = this.current + 1;
            // this.getList();
        },
        getRecData() {
            this.current = this.current - 1;
            this.getList();
        },
        getCurrentData() {
        },
        showDetail(item) {
            this.$router.push({
                name: 'Detail',
                params: {
                   wz: item
                }
            })
        }
    },
    mounted() {

    },
    created() {
        console.log("created")
    },
    data() {
        return {
            list: [{
                img:'http://xlsb.luokangyuan.com/kapian-img1.jpeg',
                name:'Vue学习笔记',
                createTimeStr:'2020年9月1日',
                tags:[{
                    name:'Vue',
                },{
                    name:'vue学习',
                },{
                    name:'前端',
                }],
                desc:'记录Vue基础知识，包含动态class，常用指令'
            },{
                img:'http://xlsb.luokangyuan.com/a1.jpg',
                name:'HTML学习笔记',
                createTimeStr:'2020年8月11日',
                tags:[{
                    name:'HTML',
                },{
                    name:'HTML学习',
                },{
                    name:'前端',
                }],
                desc:'记录HTML基础知识，包含用法，常用标签，以及内容整理'
            },{
                img:'http://xlsb.luokangyuan.com/a2.jpg',
                name:'CSS学习笔记',
                createTimeStr:'2020年9月3日',
                tags:[{
                    name:'CSS',
                },{
                    name:'CSS学习',
                },{
                    name:'前端',
                }],
                desc:'记录CSS基础知识，包含样式，用法等'
            },{
                img:'http://xlsb.luokangyuan.com/a3.jpg',
                name:'JavaScript学习笔记',
                createTimeStr:'2020年9月4日',
                tags:[{
                    name:'JavaScript',
                },{
                    name:'JavaScript学习',
                },{
                    name:'前端',
                }],
                desc:'记录JavaScript基础知识，包含js用法，语句，含义'
            },{
                img:'http://xlsb.luokangyuan.com/a4.jpg',
                name:'Git学习笔记',
                createTimeStr:'2020年9月1日',
                tags:[{
                    name:'Git',
                },{
                    name:'Git学习',
                },{
                    name:'前端',
                }],
                desc:'记录Git基础知识，用于双方合作桥梁，共同学习'
            },{
                img:'http://xlsb.luokangyuan.com/a5.jpg',
                name:'随笔笔记',
                createTimeStr:'2020年9月1日',
                tags:[{
                    name:'随机笔记',
                },{
                    name:'读书笔记',
                },{
                    name:'学习',
                }],
                desc:'记录读书笔记'
            },{
                img:'http://xlsb.luokangyuan.com/a6.jpg',
                name:'Examples笔记',
                createTimeStr:'2020年8月11日',
                tags:[{
                    name:'examples笔记',
                },{
                    name:'插件笔记',
                },{
                    name:'插件',
                }],
                desc:'好的插件可以让你受益'
            },],
            // 当前页码
            current: 1,
            // 每页数据条数
            size: 20,
            total: 0
        }
    },


}
</script>

<style scoped>
.head {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
}

.el-pagination {
    margin-top: 400px;
    margin-right: 400px;
}

.show {
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.fd-leirong {
    height: 70px;
    width: 1100px;
    background: #fff;
    margin-top: -30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.leirong-box {
    font-size: 17px;
}

.tubiao {
    font-size: 30px;
    color: #55a532;
}

.fd-ziliao {
    height: 1400px;
    width: 1100px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: end;
    margin-bottom: 20px;
}

.kapian {
    height: 340px;
    width: 350px;
    margin-bottom: 40px;

}
.kapian:hover{
    animation: kapian 3s infinite;
    cursor: pointer;
}
@keyframes kapian {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0%{
        transform: scale(1);  /*开始为原始大小*/
    }
    25%{
        transform: scale(1.1); /*放大1.1倍*/
    }
    50%{
        transform: scale(1);
    }
    75%{
        transform: scale(1.1);
    }
}
.kapian-img {
    height: 210px;
    width: 350px;
    display: flex;
    flex-direction: column;
}

.biaoti {
    height: 50px;
    width: 350px;
    font-size: 30px;
    margin-top: -60px;
    margin-left: 15px;
    color: #fff;
}

.kapian-img img {
    width: 350px;
    height: 210px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.jieshao {
    height: 60px;
    width: 350px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fd-jieshao {
    width: 330px;
    font-size: 15px;
    color: #525f7f;
}

.name {
    height: 30px;
    width: 350px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 6px;
}

.time {
    font-size: 15px;
    margin-left: 10px;
    color: #525f7f;
}

.name-box {
    margin-right: 10px;
    color: #525f7f;
}

.biaoqian {
    height: 40px;
    width: 350px;
    background: white;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.base {
    background: dodgerblue;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #fff;
}

.fd-biaoqian {
    padding: 2px 10px;
    font-size: 12px;
}
</style>
