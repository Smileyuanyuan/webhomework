<template>
<div id="personal">
    <span class="font1">个 人 信 息</span>
    <hr>
    <div class="det1">
        <p>
            <span>姓名： 梁媛媛</span>
            <span class="font3">性别： 女 <i class="el-icon-female"></i></span>
        </p>
        <p>
            <span>年龄： 18岁</span>
            <span class="font3">生日： 3月24日 <i class="icon iconfont icon-shengridangao2" style="font-size: 25px;"></i></span>
        </p>
    </div>
    <hr>
    <div class="det1">
        <p>
            <span>学校： 四川轻化工大学 <i class="icon iconfont icon-research" style="font-size: 30px;"></i></span>
            <span class="font3">学院： 计算机科学与工程</span>
        </p>
        <p>
            <span>专业： 计算机科学与技术</span>
        </p>
    </div>
    <hr>
    <div class="det1">
        <p>
            <span>家乡： 四川宜宾 <i class="icon iconfont icon-xianlu"></i></span>
        </p>
        <p>
            <span><i class="icon iconfont icon-QQ"></i> Q： 1878189654</span>
        </p>
    </div>
    <div style="height: 30px;"></div>
    <span class="font1">相 册</span>
    <hr>
    <!-- <div class="photo">
        <img :src="require('../assets/m2.png')">
        <img src="../assets/m2.png">
    </div>  -->
</div>
</template>

<script>
export default {
    data(){
        return {
        };
    },
methods: {},
};
</script>

<style scoped>
#personal{
   /* border: 1px solid black;*/
    text-align: left;
    padding: 20px;
}

.font1{
    font-size: 25px;
    color: #ff7e98;
    /*border: 1px solid red;*/
}

.font3{
    position: relative;
    margin-left: 150px;
}
.el-divider{
    color: #ff7e98!important;
}

.photo{
    padding: 10px;
    display: block;
}

img {
    background-color: #f598aa;
    border: 1px solid #ff7e98;
    border-radius: 10px;
    width: 100px!important;
    padding: 10px;
    display: flex;
}

hr {
    background-color: #fed8e1;
    border: 1.6px dashed #f598aa;
}


span{
    color: #ff7e98;
    position: relative;
   /*border: 1px solid white;*/
    display: inline-block;
    width: 240px;
    font-size: 18px;
}

</style>