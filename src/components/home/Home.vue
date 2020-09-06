<template>
<div class="head">
    <div class="fd-leirong"></div>
    <div class="fd-ziliao"></div>
</div>
</template>

<script>
export default {
  name: "head"
}
</script>

<style scoped>
.head{
  width: 100%;
  height: 100%;
  background: #c2e9fb;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.fd-leirong{
    height: 100px;
    width: 1200px;
    background: #55a532;
    margin-top: -40px;
    border-radius: 5px;
}
.fd-ziliao{
    height: 900px;
    width: 1200px;
    background: #795da3;
    margin-top: 30px;
}
</style>
