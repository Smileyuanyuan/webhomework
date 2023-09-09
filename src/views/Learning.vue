<template>
  <div id="learning">
    <div class="board">
      <div class="left">
        <router-view></router-view>
      </div>
      <div class="right">
        <div class="r-top">
          <el-avatar
            class="avatar"
            :size="150"
            :src="require('../assets/m2.png')"
          ></el-avatar>
          <span style="color: #fed8e1">Welcome to my life page.</span>
        </div>
        <el-menu
          default-active="personal"
          class="el-menu"
          text-color="#fed8e1"
          background-color="#f598aa"
          active-text-color="#f598aa"
          @select="changeSider"
        >
          <el-menu-item index="">
            <i class="el-icon-user-solid"></i>
            <span>个人</span>
          </el-menu-item>
          <el-menu-item index="hometown">
            <i class="el-icon-s-home"></i>
            <span slot="title">家乡</span>
          </el-menu-item>
          <el-menu-item index="hoby">
            <i class="el-icon-sugar"></i>
            <span slot="title">兴趣</span>
          </el-menu-item>
          <el-menu-item index="music">
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
import Personal from "@/components/Personal";

export default {
  components: {
    Personal,
  },
  data() {
    return {};
  },
  methods: {
    changeSider(path) {
        console.log(this.path)
    },
  },
};
</script>

<style scoped>
#life {
  border: 1px solid #fed8e1;
  width: 100%;
  height: 100%;
  background-color: rgb(238, 223, 226, 0.9);
  opacity: 1;
}
.per {
  /*border: 1px solid red;*/
}

.board {
  margin-left: 15%;
  margin-top: 10%;
  width: 70%;
  background-color: #fed8e1;
  opacity: 1;
  display: flex;
}

.left {
  /*border: 1px solid red;*/
  width: 80%;
}

.right {
  /*border: 1px solid green;*/
  position: relative;
  width: 20%;
}

.el-avatar {
  /*border:1px #000000 solid;*/
  position: relative;
  margin-top: -70px;
}
.r-top {
  background-color: white;
  height: 150px;
  background-color: #f598aa;
}

.el-menu {
  /*border: 1px solid red;*/
}

.el-menu-item {
  /* border: 1px solid green;*/
  height: 60px;
  text-align: left;
  font-size: 18px !important;
}

.el-menu-item:hover,
.el-nue-item:focus {
  background-color: #fed8e1;
}
.el-menu-item.is-active {
  background-color: #fed8e1 !important;
}

.avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100px;
}
</style>
