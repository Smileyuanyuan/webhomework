<template>
  <div class="hello">
    <div id="app">
      <wordcloud
        :data="defaultWords"
        nameKey="name"
        valueKey="value"
        :color="myColors"
        :showTooltip="false"
        :wordClick="wordClickHandler"
      >
      </wordcloud>
    </div>
  </div>
</template>
<script>
import wordcloud from "vue-wordcloud";
export default {
  name: "app",
  components: {
    wordcloud,
  },
  methods: {
    wordClickHandler(name, value, vm) {
      // console.log(vm)
    },
  },
  data() {
    return {
      myColors: [
        "#F8D855",
        "#5e8753",
        "#115889",
        "#901593",
        "#f598aa",
        "#1f77b4",
        "#629fc9",
        "#94bedb",
        "#c9e0ef",
      ],
      defaultWords: [
        {
          name: "奶龙",
          value: 30
        },
        {
          name: "双人成行",
          value: 19,
        },
        {
          name: "美女",
          value: 18,
        },
        {
          name: "小七",
          value: 18,
        },
        {
          name: "买买买",
          value: 18,
        },
        {
          name: "吃吃吃",
          value: 16,
        },
        {
          name: "Game",
          value: 15,
        },
        {
          name: "算法",
          value: 26,
        },
        {
          name: "vue",
          value: 19,
        },
        {
          name: "c++",
          value: 18,
        },
        {
          name: "帅哥",
          value: 16,
        },
        {
          name: "element-ui",
          value: 12,
        },
        {
          name: "echarts",
          value: 12,
        },
        {
          name: "js",
          value: 9,
        },
        {
          name: "echarts",
          value: 12,
        },
        {
          name: "拍照",
          value: 12,
        },
        {
          name: "牛肉干",
          value: 12,
        },
        {
          name: "北京烤鸭",
          value: 15,
          },
                {
          "name": "It takes two",
          "value": 12
        },
                {
          "name": "抖音",
          "value": 12
        },
                {
          "name": "淘宝",
          "value": 12
        },
                {
          "name": "风景",
          "value": 12
        },
                {
          "name": "算法",
          "value": 12
        },
                {
          "name": "c++",
          "value": 12
        },
                {
          "name": "vue",
          "value": 12
        },
                {
          "name": "奶龙",
          "value": 12
        },
      ],
    };
  },
};
</script>
