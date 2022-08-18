<template>
    <el-main>
      <h4 v-if="url_empty">点击可以查看大图捏</h4>
      <div>
          <el-image ref="img" :src="url" fit="contain" :preview-src-list="url_list">
            <template #error>
              <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
              </div>
            </template>
          </el-image>
      </div>
      <el-button type="primary" @click="get_img()">点我获得图图</el-button>
    </el-main>
</template>
<style>
main.el-main{
  margin:0 auto;
  padding:0;
}
.el-image {
    max-width: 80vh;
    max-height: 50vh;
    background: #ffffffdb;
}
.el-image-viewer__canvas{
  margin:0 0;
}
.el-image-viewer__wrapper{
  margin:0 0;
}
</style>
<script>
import axios from 'axios'
export default {
  name: 'AcgImage',
  data(){
    return {
        url:'',
        url_list:[],
        url_empty:false,
        time_begin:0,
        time_end:0,
    }
  },
  methods:{
    get_img(){
      this.time_end = Date.now();
      if(this.time_end - this.time_begin < 2000)
      {
        this.$alert('别太急了,请等待2秒喵',{type:"error"});
      }
      else
      {
        this.time_begin = Date.now();
        axios({
          method: 'GET',
          url: this.$BaseUrl + 'acg/get',
          })
        .then(response => {
            this.url=response.data.data;
            this.url_list.length=0;
            this.url_list.push(this.url);
        });
        this.url_empty = true;
      }
        
    }
  },
}
</script>
