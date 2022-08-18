<template>
<el-container :style="ElContainerStyle">
  <el-aside width="auto" >
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
          background-color="#000000000"
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
  <el-container>
    <el-header>
      <div class="title">Lijilai's Personal Website</div>
    </el-header>
    <el-main>
      <div class="router_view">
        <router-view />
      </div>
    </el-main>
  </el-container>
  
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
.el-aside::-webkit-scrollbar {
     display: none;
}
.el-menu{
  top:10px;
  height:100%;
}
.el-menu-item:hover {
  background-color: #66ccff20 !important;
}
html,body,#app,.el-container{
  padding: 0px;
  margin: 0px;
  height: 100%;
  background-position:50% 50%;
  background-repeat:no-repeat;
  background-size:auto;
}
.el-header{
  padding:0;
  background-color:#ffffffdc;
  .title{
    text-align: left;
    line-height:60px;
    margin-left :2.5%;
    font-size:30px;
    font-family:'Comic Sans MS';
    
  }
  
}
.el-aside {
  span {
    font-weight: bold;
    font-size:16px;
    text-align: center;
    text-decoration: none;
  }
  background-color:#e9ee9099;
  border-right: 0;
}
.el-main{
  background-color:#ffffffdc;
  width:100%;
  height:100%;
  margin:0 auto;
  .router_view{
    width:80%;
    margin:0 auto;
  }
}
.ButtonBox{
  top:10px;
  position:relative;
  height:40px;
}
.CollapseButton{
  position:absolute;
  left: 15px;
}
.menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      isCollapse:true,
      CollapseIcon:"ArrowRightBold",
      isMobile:true,
      ElContainerStyle:{
        backgroundImage:'',
      },
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
    ListenScreen() {
      let screenWidth = document.body.clientWidth;	//初始化判断
      if (screenWidth < 500) this.isMobile = true;
      else this.isMobile = false;
    },
    SetBackgroundImage(){
        axios({
          method: 'GET',
          url: this.$BaseUrl + 'acg/get',
          })
        .then(response => {
            this.ElContainerStyle.backgroundImage="url(" + response.data.data + ")";
        });
    }
  },
  mounted(){
    this.ListenScreen();
    this.ReChangeCollapse(this.isMobile);
    this.SetBackgroundImage();
  },
}
</script>