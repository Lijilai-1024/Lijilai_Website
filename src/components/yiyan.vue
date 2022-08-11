<template>
    <div> {{qaq}} </div>
    <el-button type="primary" @click="yiyan()">来一句话</el-button>
</template>
<script>
import axios from 'axios'
export default {
    name:'yiyan',
    data(){
        return{
            qaq: '',
        }
    },
    methods:{
        yiyan() {
            console.log("lalala");
            axios({
                method: 'GET',
                url: '/api/yiyan/?format=json',
            }).then(res => {
                console.log(res.data);
                this.qaq = res.data;
            })
        }
    },
    
}
</script>