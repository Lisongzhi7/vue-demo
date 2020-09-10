<template>
    <div class="head">
        <div class="lianjie">
            <div v-for="(item,index) of list" data-aos="fade-up"
                 data-aos-duration="3000" class="fd-card shadow">
                <div class="card">
                <div class="card-image">
                    <img :src="item.img">
                </div>
                    <div class="card-head">
                        <div class="card-name">
                            <span>{{item.name}}</span>
                        </div>
                        <div class="card-leirong">
                            <span>{{item.desc}}</span>
                        </div>
                    </div>

                </div>
                <div class="fd-dibu">
                    <el-button round>{{item.learning}}</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Lianjie",
    data(){
        return{
            list:[{
                img:'/static/image/card8.jpg',
                name:'码酱',
                desc:'不忘初心，努力做有价值的技术文章',
                learning:'前往学习'
            },{
                img:'/static/image/card8.jpg',
                name:'码酱',
                desc:'不忘初心，努力做有价值的技术文章',
                learning:'前往学习'
            },{
                img:'/static/image/card8.jpg',
                name:'码酱',
                desc:'不忘初心，努力做有价值的技术文章',
                learning:'前往学习'
            },{
                img:'/static/image/card8.jpg',
                name:'码酱',
                desc:'不忘初心，努力做有价值的技术文章',
                learning:'前往学习'
            },]
        }
    },
    getList() {
        this.$api.get(`/api/v1/project/${this.current}/${this.size}`, null, (res) => {
            if (res) {
                this.list = res.data.records;
                this.total = res.data.total;
            }
        })
    },
    mounted() {
        this.getList();
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
    flex-wrap: wrap;
}

.lianjie {
    height: 1600px;
    width: 1150px;
    /*background: lightsteelblue;*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -50px;
    z-index: 7;
    flex-wrap: wrap;
    align-content: flex-start;
}
.shadow{
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
.fd-card {
    height: 170px;
    width: 360px;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 40px;
}
.card{
    height: 170px;
    width: 360px;
    display: flex;
    flex-direction: row;
}
.card-image{
    height: 170px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.card-image img{
    height: 100px;
    width: 100px;
    border-radius: 50px;

}
.card-head{
    height: 170px;
    width: 240px;
    margin-left: 5px;
}
.card-name{
    height: 80px;
    width: 240px;
    display: flex;
    align-items:flex-end;
    justify-content: flex-start;
    margin-left: -5px;
}
.card-name span{
    font-size: 35px;
    color: #fff;
    font-weight: bold;
}
.card-leirong{
    height: 90px;
    width: 220px;
    margin-top: 5px;
}
.card-leirong span{
    color: #fff;
}
.fd-dibu{
    height: 50px;
    width: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
}
</style>
