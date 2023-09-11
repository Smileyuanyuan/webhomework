<template>
  <div id="life">
    <span class="backfont">Welcome to my life page.</span>
    <div class="board">
      <div class="left">
        <!-- <Personal v-if="isPer"></Personal> -->
        <transition enter-active-class="animate__animated animate__backInUp">  
          <router-view></router-view>
        </transition>
        
      </div>
      <div class="right">
        <div class="r-top">
           <el-avatar class="avatar" :size="150" :src="require('../assets/m2.png')"></el-avatar>
           <span class="note">Welcome to my life page.</span>
        </div>
        <el-menu
          :default-active="page"
          class="el-menu"
          text-color="#fed8e1"
          background-color="#f598aa"
          active-text-color="#f598aa"
          @select="changeSider"
        >
          <el-menu-item index="personal" >
              <i class="el-icon-user-solid"></i>
              <span>个人</span>
          </el-menu-item>
          <el-menu-item index="hometown" >
            <i class="el-icon-s-home"></i>
            <span slot="title">家乡</span>
          </el-menu-item>
          <el-menu-item index="hoby" >
            <i class="el-icon-sugar"></i>
            <span slot="title">兴趣</span>
          </el-menu-item>
          <el-menu-item index="music" >
            <i class="el-icon-mic"></i>
            <span slot="title">音乐盒</span>
          </el-menu-item>
          <el-menu-item index="sticker">
            <i class="el-icon-document-add"></i>
            <span slot="title">随心贴</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
import Personal from '@/components/Personal'

export default {
  components: {
    Personal
  },
  data() {
    return {
      page: 'personal',
      isPer: true,
      avatar: {
        url: "../assets/m1.jpg",
      },
    };
  },
  methods: {
    toPerson() {
      this.$router.push({path: '/life/personal'})
    },
    changeSider(path) {
        this.$router.push(path)
    }
  },
  created() {
    this.changeSider(this.page)
  }
};
</script>

<style scoped>
#life {
  border: 1px solid #ffc8d5;
  background-color: rgb(238, 223, 226, 0.7);
  background-repeat: no-repeat; 
  background-size: 100% 100%;
  width: 100%;
  z-index: -1;
  overflow: auto;
}
.backfont{
  /*border: 1px solid red;*/
  position: absolute;
  top: 150px;
  left: 60px;
  color: #f598aa;
  font-size: 60px;
  opacity: 0.6;
  cursor: default;

  animation: heartBeat 5s;

}

.per{
  /*border: 1px solid red;*/
}

.board {
  margin-left: 15%;
  margin-top: 20%;
  width: 70%;  
  /*background-color: #fed8e1;*/
  opacity: 1;
  display: flex;
}

.left{
  /*border: 1px solid red;*/
  width: 80%;
}

.right {
  /*border: 1px solid green;*/
  width: 20%;
}

.r-top{
  background-color: #f598aa;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.el-menu{
  /*border: 1px solid red;*/
  height: 350px;
  border-radius: 20px!important;
}

.el-menu-item{
 /* border: 1px solid green;*/
  text-align: left;
  font-size: 18px!important;
}

.el-menu-item:hover,.el-nue-item:focus{
  background-color: #fed8e1;
}
.el-menu-item.is-active{
  background-color: #fed8e1!important;
}


.el-avatar {
  /*border: 1px solid red;*/
  cursor: pointer;
  position: relative;
  top: -60px;
  object-fit: cover;
}

.el-avatar:hover{
  animation: flash 1s;
}

.note{
  cursor: pointer;
  position: relative;
  top: -60px;
  color: #fed8e1;
}
</style>
