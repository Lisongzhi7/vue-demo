<template>
        <div class="head">
            <div class="tag">
                <span v-for="(tag,index) of item.tags">{{tag.name}}</span>
            </div>
            <div class="tototo">
            <div v-html="item.content"></div></div>

        </div>
</template>

<script>
export default {
    name: "Detail",
    data () {
        return {
            item: ''
        }
    },
    mounted() {
        this.item = this.$route.params.wz;
        console.log(this.item);
    }
}
</script>

<style scoped>

.head{
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 1400px;
    margin-top: -30px;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
>>> ul{
    margin-left: 20px;
}
.head span{
    padding: 5px 18px;
    background: #00c6fb;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 18px;
    color: #fff;
    flex-direction: row;
    margin-left: 30px;
}
.tag{
    display: flex;
    height: 100px;
    width: 1400px;
    flex-direction: row;
    border-bottom: 1px solid #999999;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
>>> p img{
    height: 250px;
    width: 200px;
}
.tototo{
    height: 100%;
    width: 1300px;
    margin-left: 50px;
}
>>> p{
    font-size: 18px;
    margin-top: 20px;
}
>>> p code{
    background: #f8f8f8;
    color: #e96900;
}
>>> h2{
    font-size: 30px;
    font-weight: bold;
    color: #34495e;
    border-bottom: 1px solid #ddd;
}
>>> code-toolbar{
    background: #272822;
    border-radius: 5px;
}
</style>