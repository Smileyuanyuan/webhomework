<template>
  <div class="home">
    <!-- <h1>This is Home page!</h1> -->
    <div>
      <div class="t1">Welcome To</div>
      <div class="t2">Yuanyuan's Blog</div>
      <el-button type="primary" circle
        ><i class="el-icon-right" style="font-size: 40px" @click="toAbout()"></i
      ></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  methods: {
    toAbout() {
      this.$router.push({ path: '/life/personal' });
      console.log("/life");
    },
  },
  
};

</script>

<style scoped>
.home {
  /*border: 1px red solid;
  /*width: 100px;*/
  width: 100%;
  height: 100vh;
  background-image: url("../assets/Smile.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.el-button {
  color: rgba(245, 152, 170, 1);
  border: 2px solid rgba(245, 152, 170, 1);
  background-color: rgba(255, 235, 240, 1);
  position: relative;
  top: 200px;
}

.el-button:hover {
  background-color: rgba(245, 152, 170, 1);
  border: rgba(255, 235, 240, 1);
}

.el-button:focus {
  background-color: rgba(245, 152, 170, 1);
  border: rgba(255, 235, 240, 1);
}
.t1 {
  position: relative;
  top: 150px;
  font-size: xxx-large;
  font-weight: bolder;
  text-align: center;
  color: rgba(245, 152, 170, 1);
}
.t2 {
  position: relative;
  top: 180px;
  font-size: xxx-large;
  font-weight: bold;
}
</style>
