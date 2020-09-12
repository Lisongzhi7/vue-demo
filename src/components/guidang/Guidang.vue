<template>
    <div class="head">
        <div class="guidang">
            <div class="toubu">
                <div class="label">
                    <div class="label-one">
                        <span data-aos="zoom-in" data-aos-duration="2000">文章标签</span>
                    </div>
                    <div class="label-tow">
                        <div data-aos="zoom-in" data-aos-duration="2000" v-for="(item,index) of list" :style="{background:randoColor()}" :class="createClasee(index)" class="bast">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="fd-zhong">
                    <div data-aos="fade-up"
                         data-aos-duration="3000" v-for="(item,index) of List" class="fd-zuo">
                        <div class="zuo-name" :class="{'fd-left-card' : index % 2 != 0}">
                            <div class="zuo-head">
                                <span>{{item.time}}</span>
                            </div>
                            <div class="zuo-center">
                                <span>{{item.decs}}</span>
                            </div>
                            <div class="zuo-bottom">
                            <span>
                                <el-button type="danger" round>{{item.title}}</el-button>
                            </span>
                            </div>
                        </div>
                        <div class="zuo-img">
                            <div class="img-zuo" :class="{'fd-ddd' : index % 2 != 0}">
                            <span>
                                <i class="el-icon-caret-right"></i>
                            </span>
                            </div>
                            <div class="img-you" :class="{'fd-left' : index % 2 != 0}">
                                <div class="you-tubiao">
                                    <div class="xiaotubiao">
                                        <img :src="item.image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<!--            <div>-->
<!--                <input v-model="wz.name"></input>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
export default {
    name: "Guidang",
    data(){
        return{
            list:[{
                name:'Web (1)'
            },{
                name:'CSS (11)'
            },{
                name:'Java (7)'
            },{
                name:'Html (4)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'JavaScript (14)'
            },{
                name:'Java (7)'
            },{
                name:'Java (7)'
            },{
                name:'Java (7)'
            },{
                name:'Java (7)'
            },{
                name:'Java (7)'
            },{
                name:'Java (7)'
            },{
                name:'Java (7)'
            },],
            //
            // wz: {
            //     "categoryId": "",
            //     "content": "",
            //     "desction": "",
            //     "image": "",
            //     "name": "",
            //     "tags": []
            // },
            List:[{
                time:'2020-6月读书',
                decs:'2020年6月的一些业务人文读书记录，记录一下常识',
                title:'阅读全文',
                image:'/static/image/card1.jpg'
            },{
                time:'2020-6月读书',
                decs:'2020年6月的一些业务人文读书记录，记录一下常识',
                title:'阅读全文',
                image:'/static/image/card1.jpg'
            },{
                time:'2020-6月读书',
                decs:'2020年6月的一些业务人文读书记录，记录一下常识',
                title:'阅读全文',
                image:'/static/image/card1.jpg'
            },{
                time:'2020-6月读书',
                decs:'2020年6月的一些业务人文读书记录，记录一下常识',
                title:'阅读全文',
                image:'/static/image/card1.jpg'
            },{
                time:'2020-6月读书',
                decs:'2020年6月的一些业务人文读书记录，记录一下常识',
                title:'阅读全文',
                image:'/static/image/card1.jpg'
            },{
                time:'2020-6月读书',
                decs:'2020年6月的一些业务人文读书记录，记录一下常识',
                title:'阅读全文',
                image:'/static/image/card1.jpg'
            },{
                time:'2020-6月读书',
                decs:'2020年6月的一些业务人文读书记录，记录一下常识',
                title:'阅读全文',
                image:'/static/image/card1.jpg'
            },]
        }
    },
    methods: {
        createClasee(index) {
            return "" + (index + 1);
        },
        randoColor() {
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
            return color;

        },
        deleteWz(id) {
            this.$api.delete('/api/v1/category/' + id, null, (res) => {

            })
        },


    },
    mounted() {
       this.getWz();

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
    flex-wrap: wrap;
}
.fd-left{
    margin-left: -128px;
}
.fd-ddd{
    margin-left: -325px;
    transform: rotate(180deg);
    margin-top: -86px;
}
.guidang {
    height: 1600px;
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.toubu{
    height: 270px;
    width: 1000px;
    background: #fff;
    margin-top: -40px;
    z-index: 7;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
.label{
    height: 270px;
    width: 1000px;
    display: flex;
    flex-direction: column;
}
.label-one{
    height: 60px;
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
.label-tow{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.bast{
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
.fd-zhong{
    height: 1500px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    background: #fff;
    border-radius: 5px;
    margin-top: 30px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
.fd-zuo {
    height: 160px;
    width: 400px;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    border-right: 3px solid;
}
.zuo-name{
    height: 140px;
    width: 300px;
    margin-left: 27px;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
.zuo-head{
    height: 50px;
    width: 300px;
    font-size: 22px;
    color: #fff;
    display: flex;
    align-items: flex-end;
    font-weight: bold;
    border-bottom: 1px solid #fff;
}
.zuo-head span{
    margin-left: 5px;

}
.zuo-center{
    height: 50px;
    width: 300px;
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: flex-end;
}
.zuo-center span{
    margin-left: 7px;
}
.zuo-bottom{
    height: 40px;
    width: 300px;;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.el-button{
    padding: 8px 10px;
}
.zuo-bottom span{
    margin-right: 5px;
}
.zuo-img {
    height: 140px;
    width: 100px;
    display: flex;
    flex-direction: row;
}
.img-zuo{
    height: 140px;
    width: 20px;
    display: flex;
    align-items: center;
}
.img-zuo span{
    margin-top: -85px;
}
.el-icon-caret-right{
    font-size: 25px;
    color: #000;
}
.el-icon-caret-left{
    font-size: 25px;
    color: #000;
}
.img-you{
    height: 140px;
    width: 80px;
    display: flex;
    justify-content: center;
}
.you-tubiao{
    height: 50px;
    width: 50px;
    background: #c2e9fb;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 28px;
}
.xiaotubiao{
    height: 40px;
    width: 40px;
    background: #cccccc;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
.xiaotubiao img{
    height: 40px;
    width: 40px;
    border-radius: 20px;
}
.fd-left-card{
    margin-left: 480px;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}








</style>
