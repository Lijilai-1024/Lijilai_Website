<template>
<el-container>
  <el-aside width="auto">
    <div class="ButtonBox">
      <el-button class="CollapseButton" type="primary" @click="ChangeCollapse()" circle>
            <el-icon>
                <component :is="CollapseIcon" />
              </el-icon>
      </el-button>
    </div>
    <el-menu
          default-active="/" 
          class="menu"
          router
          :collapse="isCollapse"
          active-text-color="#66ccff"
        >
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>主页</span>
          </el-menu-item >
          <el-menu-item index="/ShowAcgImage">
            <el-icon><PictureFilled /></el-icon>
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
  span {
    font-weight: bold;
    font-size:16px;
    text-align: center;
    text-decoration: none;
  }
}
.ButtonBox{
  position:relative;
  height:40px;
}
.CollapseButton{
  position:absolute;
  left: 0;
}
.menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<script>
export default {
  data(){
    return{
      isCollapse:true,
      CollapseIcon:"ArrowRightBold",
      isMobile:true,
    };
  },
  methods:{
    ChangeCollapse() {
      this.isCollapse = !this.isCollapse;
      this.CollapseIcon = this.isCollapse ? "ArrowRightBold" : "ArrowLeftBold";
    },
    ReChangeCollapse(val) {
      if(val === false)
      {
        this.isCollapse = false;
        this.CollapseIcon = "ArrowLeftBold";
      }
      if(val === true)
      {
        this.isCollapse = true;
        this.CollapseIcon = "ArrowRightBold";
      }
    },
    listenScreen() {
      let screenWidth = document.body.clientWidth;	//初始化判断
      if (screenWidth < 500) this.isMobile = true;
      else this.isMobile = false;
    },
  },
  mounted(){
    this.listenScreen();
    this.ReChangeCollapse(this.isMobile);
  },
}
</script>