<script setup>
import getDorm from '../components/dorm/getDorm.vue';
console.log(getDorm.methods.getDorms().then(response => {
    console.log(response);
}));
</script>
<template>
    <h1>锐意制作中</h1>
    <!-- <div>
        <getDorm></getDorm>
        {{ getDorm.data() }}
        <h1>Get Dorm</h1>
        <ul v-if="getDorm.data().dorms">
            <li v-for="dorm in getDorm.data().dorms">
                {{ dorm.keys() }}
            </li>
        </ul>
    </div> -->
</template>