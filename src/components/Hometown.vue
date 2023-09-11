<template>
  <div id="hometown">
    <div class="waterFall-box">
      <!-- <span>本模块还未设计哦 先展示图片吧！</span> -->
      <div id="h1" class="animate__animated animate__backInUp">
        <p>万里长江第一城</p>
        <div class="content1"> 
          <img src="../assets/5.jpg" />
          <div class="text1">
            宜宾市有“万里长江第一城、中国酒都、中国竹都”之称
            ，文化底蕴深厚，于宋政和四年（1114年）由僰道县改称宜宾县。有2200年建城史、4000年酿酒史、3000年种茶史，是国家历史文化名城，II型大城市。
          </div>
        </div>
      </div>
      <div id="h1" class="animate__animated animate__backInUp">
        <p>万里长江第一古镇</p>
        <div class="content1"> 
          <img src="../assets/g2.jpg" />
          <div class="text1">
            李庄古镇被誉为“万里长江第一古镇”，为四川省历史文化名镇、国家级历史文化名镇。
            <br/>
            <br/>
            李庄古镇古为渔村，始建于南朝梁代（公元540年，一说548年），汉代曾在这里设驿站，为明、清水运商贸之地。现存明、清古镇的格局和风貌，石板街道两旁多为清代建筑。古镇核心保护区1平方千米。
          </div>

        </div>
      </div>
      <!-- <div id="h1" class="animate__animated animate__backInUp">
        <p>万里长江第一古镇</p>
        <div class="content1"> 
          <img src="../assets/5.jpg" />
          <div class="text1">
            李庄古镇被誉为“万里长江第一古镇”，为四川省历史文化名镇、国家级历史文化名镇
            
          </div>
        </div> -->
      <!-- </div> -->
      <!-- <div class="photo">
        <img src="../assets/1.jpg" />
        <img src="../assets/5.jpg" />

        <img src="../assets/4.jpg" />
        <img src="../assets/4.jpg" />
        <img src="../assets/4.jpg" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          img: "../assets/m1.jpg",
        },
        {
          img: "../assets/m2.png",
        },
      ],
    };
    
  },
methods: {},
mounted() {
   new this.$wow.WOW.init()
  }
};
</script>

<style scoped>

#hometown{
    margin-right: 10px;
}
.photo {
  padding: 10px;
  display: block;
}

img {
  /*border: 1px solid red;*/
  border-radius: 10px;
  width: 350px !important;
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
img:hover {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
span {
  margin-top: 50px;
  font-size: 20px;
  color: #ff7e98;
}
#h1 {
  padding: 10px;
  text-align: left;
  background-color: #ffdce5;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 3px 0px #a3a3a3;
}

.content1{
    display: flex;
}

.text1 {
  /*border: 1px solid red;*/
  font-size: 20px;
  color: #ff7e98;
  margin-left: 20px;
  margin-top: 10px;
}

p {
  /*border: 1px solid red;*/
  margin-left: 10px;
  color: #ff7e98;
  font-size: 23px;
  text-align: left;
}
span {
  border: 1px solid red;
  margin-left: 10px;
}
</style>
