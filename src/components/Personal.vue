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
    <div class="photo">
        <img src="../assets/m2.png">
    </div> 
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
:root{
    --animation-delay: 3s;
}

#personal{
   /* border: 1px solid black;*/
    text-align: left;
    padding: 20px;
    background-color: #ffdce5;
    border-radius: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 1px 3px 0px #a3a3a3;

    animation: backInUp duration timing-function delay iteration-count direction fill-mode;
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

.det1{
    /*background-color: #FFEBF0;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0px 2px 6px 0px  #f598aa;*/
    margin-top: 20px;
}
.el-divider{
    color: #ff7e98!important;
}

.photo{
    padding: 10px;
    display: block;
}

img {
    border-radius: 10px;
    width: 150px!important;
    margin: 10px;
    display: flex;
     display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}
img:hover{
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
i:hover{ 
    transform: scale(1.5);
}

</style>