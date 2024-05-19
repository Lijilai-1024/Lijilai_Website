<script setup>
import Avatar from '../components/Avatar.vue';
import routes from '../router/router.js';
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="home">
        <Avatar/>
        <p class="subtitle">Lijilai's HomePage</p>
    </div>
    <div class="navbar">
        <RouterLink v-for="route in routes" :to="route.path">
        {{ route.name }}
        </RouterLink>
    </div>
</template>
<style scoped>
.home{
    display: flex;
    flex-direction: column;
    margin:auto;
    align-items: center;
    justify-content: center;
}
.home .subtitle{
    font-family: 'Comic Sans MS';
    padding:0;
    margin:0;
    font-size: 32px;
    font-weight: bold;
}
.navbar{
    display: flex;
    flex-direction: column;
    margin:auto;
    overflow: auto;
    gap:20px;
    justify-content: center;
    align-items: center;
}
.navbar a{
  text-decoration: none;
  font-size:20px;
  font-family: 'SmileySans','Comic Sans MS';
  text-align: center;
  background-color: rgba(240,248,255,70%);
  padding: 5px;
  width: 80%;
  border-radius: 20px;
  color:black;
}
.navbar a:hover{
  background-color: rgba(240,248,255,90%);
  cursor: pointer;
}
@media (max-width: 768px) {
    .home .subtitle{
        font-size: 24px;
    }
    .navbar a{
        font-size: 16px;
    }
}
</style>
