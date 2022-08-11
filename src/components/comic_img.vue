<template>
    <div>
        <el-image
            ref="img"
            :src="url"
            fit="contain"
        >
        </el-image>
        <el-button type="primary" @click="get_img()">来点图图</el-button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'comic_img',
  data(){
    return {
        url:'',
        // urlList:[url],
    }
  },
  methods:{
    get_img(){
        console.log("qwq");
        axios({
          method: 'GET',
          url: '/api/acg',
          })
        .then(response => {
            console.log(response.data)
            this.url=response.data;
        });
    }
  },
}
</script>
