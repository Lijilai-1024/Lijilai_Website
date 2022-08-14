<template>
<el-container>
  <el-aside class="menu" width="200px">
    <el-button class="CollapseButton" type="primary" @click="ChangeCollapse()" circle icon="el-icon-search"></el-button>
    <el-menu
          default-active="1" 
          router
          :collapse="isCollapse"
          active-text-color="#66ccff"
        >
          <el-menu-item index="/">
            <span>主页</span>
          </el-menu-item >
          <el-menu-item index="/ShowAcgImage">
            <span>来点图图</span>
          </el-menu-item >
        </el-menu>
      
  </el-aside>
  <el-main>
    <router-view />
  </el-main>
</el-container>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-aside {
  position: relative;
  span {
    font-weight: bold;
    font-size:16px;
    text-align: center;
    text-decoration: none;
  }
}
.CollapseButton{
  position:absolute;
  left: 0;
  bottom:10px;
}
</style>
<script>
export default {
  data(){
    return{
      isCollapse:false,
    };
  },
  methods:{
    ChangeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
}
</script>