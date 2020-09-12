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
                    <img src="/static/image/kapian-img1.jpeg">
                    <span class="biaoti">{{ item.name }}</span>
                </div>
                <div class="jieshao">
                    <span class="fd-jieshao">描述信息</span>
                </div>
                <div class="name">
                    <span class="time"><i class="el-icon-date"></i>{{ item.createTimeStr }}</span>
                    <span class="name-box"><i class="el-icon-s-custom"></i>李松直</span>
                </div>
                <div class="biaoqian">
                    <div v-for="(tag,index) of item.tags" class="fd-biaoqian base"><span>{{ tag.name }}</span></div>

                </div>
            </div>
            <el-pagination
                @prev-click="getRecData()"
                @next-click="getNextData()"
                @current-change="getCurrentData()"
                background
                layout="prev, pager, next"
                :total="total">
            </el-pagination>
            <!--            <div @click="show()">点我</div>-->
        </div>

    </div>
</template>

<script>
export default {
    name: "head",
    methods: {
        show() {
            // for (let i = 4; i < 7; i = i +2) {
            //     alert(i)
            // }
            //
            //
            //
            //
            // let a = [{
            //     name: 'zhangsan',
            //     time: '2020-03-02'
            // }, {
            //     name: 'zhangsan',
            //     time: '2020-06-02'
            // }];
            //
            // let newArr = [];
            // for (let i = 0; i < a.length; i++) {
            //     let b = a[i];
            //     let time = b.time;
            //     let year = time.substring(0, 4);
            //     let yf = time.substring(5, 7);
            //     let day = time.substring(8, 10)
            //     let res = year + '年' + yf + '月' + day + '日';
            //     b.time = res;
            //     newArr.push(b);
            // }
            //
            // for (let i = 0; i < newArr.length; i++) {
            //     alert(newArr[i].time)
            // }

        },
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
            this.current = this.current + 1;
            this.getList();
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
        this.getList();
    },
    created() {
        console.log("created")
    },
    data() {
        return {
            list: [],
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
    background: #c2e9fb;
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
