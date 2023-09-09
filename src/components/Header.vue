<template>
<div class="header">
    <div class="left">
        <span class="icon iconfont icon-backHome" @click="toLearning()"></span>
    </div>
    <div class="right">
        <span class="el-icon-search"></span>
        <span class="icon iconfont icon-willing"></span>
        <span class="icon iconfont icon-l079aiqing"></span>
    </div>
    
</div>
</template>

<script>
export default {
    data(){
        return {
        };
    },
    methods: {
        toLearning() {
            // console.log(this.$route)
            this.$router.push({path: '/'})
        }
    },
};
</script>

<style scoped>
.header{
    /*border: 1px solid black;*/
    background-color:white;
    height: 30px;
    padding: 15px;
    display: flex;
}

.left span{
    font-size: 30px;
    color: #f598aa;
}

.right{
    position: relative;
    left: 87%;
}
.right span{
    /*border: 1px solid red;*/
    position: relative;
    color: #f598aa;
    font-size: 30px;
    padding-right: 15px;
}

</style>