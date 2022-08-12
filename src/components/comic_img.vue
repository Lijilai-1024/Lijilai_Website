<template>
    <div>
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
    </div>
</template>
<style>
:root{
  siz:7vh;
}
.el-image {
    width: 80vh;
    height: 50vh;
    background: rgb(211, 211, 211);
}
</style>
<script>
import axios from 'axios'
export default {
  name: 'comic_img',
  data(){
    return {
        url:'',
        url_list:[],
    }
  },
  methods:{
    get_img(){
        axios({
          method: 'GET',
          url: this.$BaseUrl + 'acg/get',
          })
        .then(response => {
            this.url=response.data.data;
            this.url_list.push(this.url);
        });
    }
  },
}
</script>
