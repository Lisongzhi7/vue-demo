<template>
    <div class="head">
        <div class="lianjie">
            <div v-for="(item,index) of list" data-aos="fade-up"
                 data-aos-duration="3000" :class="colorOne(index)" class="fd-card shadow">
                <div class="card">
                <div class="card-image">
                    <img :src="item.image">
                </div>
                    <div class="card-head">
                        <div class="card-name">
                            <span>{{item.name}}</span>
                        </div>
                        <div class="card-leirong">
                            <span>{{item.descInfo}}</span>
                        </div>
                    </div>

                </div>
                <div class="fd-dibu">
                    <a :href="item.githubUrl" target="_blank">
                    <el-button round>前去学习</el-button>
                    </a>
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
            list:[],
        }
    },
    methods:{
      colorOne(index){
          return `bgColor${index +1}`
      },
      getList(){
          this.$api.get(`/api/v1/links`, null, (res) => {
              if (res){
                    this.list=res.data;
              }
          })
      }
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
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 40px;
}
.bgColor2{
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
}
.bgColor3{
    background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
}
.bgColor4{
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
.bgColor5{
    background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}
.bgColor6{
    background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
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
