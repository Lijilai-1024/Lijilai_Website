<script setup>
import Logo from './components/Logo.vue'
import { RouterLink, RouterView } from 'vue-router'
import routes from './router/router.js'
</script>

<template>
  
  <header>  
    <Logo/>
  </header>
  
  <main>
  <aside>
    <nav>
        <RouterLink v-for="route in routes" :to="route.path">
        {{ route.name }}
        </RouterLink>
    </nav>
  </aside>
    <RouterView />
  </main>
</template>

<style scoped>
@font-face {
    font-family: 'SmileySans';
    src: url(.\assets\SmileySans-Oblique.otf.woff2);
}
header{
  width:100%;
  height:50px;
  max-height:100px;
  position: fixed;
  z-index: 100;
}
main{
  background-color: rgba(240,248,255,70%);
  width:70%;
  margin-left:auto;
  margin-right:auto;
  padding-bottom:30px;
  padding-top:60px;
}
aside{
  position: fixed;
  top:50px;
  margin:0;
  left:0;
  background: linear-gradient(to bottom,rgba(102,204,255,70%),rgba(240,248,255,70%));
  width:10%;
  height:100%;
}
nav a{
  text-decoration: none;
  font-size:20px;
  font-family: 'SmileySans','Comic Sans MS';
  text-align: center;
  color: black;
  background-color: rgba(240,248,255,70%);
  padding: 5px;
  width: 80%;
  border-radius: 20px;
}
nav a:hover{
  background-color: rgba(240,248,255,90%);
  cursor: pointer;
}
aside nav{
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
  gap: 20px;
  padding-top: 20px;
}
@media (max-width: 768px) {
  aside{
    display: none;
  }
}
</style>

