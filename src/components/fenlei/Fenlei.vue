<template>
<div class="head">
<div class="zhongbu">
    <div class="label">
        <div class="label-one">
            <span data-aos="zoom-in" data-aos-duration="2000">文章标签</span>
        </div>
        <div class="label-tow">
            <div data-aos="zoom-in" data-aos-duration="2000" v-for="(item,index) of list" :style="{background:randoColor()}" :class="createClasee(index)" class="bast">{{item.name}}</div>
        </div>
    </div>
    <div class="pattern">

    </div>

</div>
</div>
</template>

<script>
export default {
  name: "Feilei",
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

        }
    },
    mounted() {
        console.log(this.randoColor());
    }
}
</script>

<style scoped>
.head{
  width: 100%;
  height: 100%;
  background: #c2e9fb;
    display: flex;
    justify-content: center;
    align-items: center;
}
.zhongbu{
    height: 1900px;
    width: 1100px;
    background: #795da3;
    z-index: 1;
}
.label{
    height: 270px;
    width: 1100px;
    background: #cccccc;
    margin-top: -40px;
    display: flex;
    flex-direction: column;
}
.label-one{
    height: 60px;
    width: 1100px;
    background: #0086b3;
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
.pattern{
    height: 500px;
    width: 1100px;
    background: #63a35c;
    margin-top: 20px;
}

</style>
