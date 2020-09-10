<template>
        <div>
            <div>{{item.category}}</div>
            <div v-html="item.content"></div>
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
    }
}
</script>

<style scoped>
>>> h2{
    color: red;
}

</style>