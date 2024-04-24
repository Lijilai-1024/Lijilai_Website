<template>

</template>
<script>
const axios = require('axios').default;

export default {
  name: 'getDorm',
  data() {
    return {
      dorms: {}
    }
  },
  methods: {
    getDorms() {
      axios.get('https://net.sjtu.edu.cn/dorm/index.php')
        .then(response => {
          console.log(response.data)
        })
    }
  },
  created() {
    this.getDorms()
  }
}