<template>

</template>
<script>
import axios from 'axios';

export default {
  name: 'getDorm',
  data() {
    return {
      dorms: null,
    }
  },
  methods: {
    async getDorms() {
      const response = await axios.get('http://59.78.20.49:8002/getDorm/').then(response => {
        this.dorms = response.data
      })
      return response
    }
  },
  async created() {
    this.getDorms()
  }
}
</script>