<script setup>
import Logo from './components/Logo.vue'
import Avatar from './components/Avatar.vue';
import Subtitle from './components/Subtitle.vue';
import Content from './components/Content.vue';
</script>

<template>
  <header>  
    <Logo/>
  </header>
  
  <main>
    <Avatar/>
    <div id="Name">
      <div>李佶来</div>
      <div><img class="icons" src="/icons/Email.svg" alt="img"/> lijilai1024@sjtu.edu.cn</div>
    </div>
    <Subtitle icon="Education" subtitle="教育经历"/>
    <Content contentFrom="Education"/>
    <Subtitle icon="SettingFilled" subtitle="专业技能"/>
    <Content contentFrom="Skills"/>
    <Subtitle icon="GroupFilled" subtitle="项目经历"/>
    <Content contentFrom="Experiences"/>
    <Subtitle icon="Information" subtitle="其他"/>
    <Content contentFrom="Other"/>
  </main>
</template>

<style scoped>
@font-face {
    font-family: 'SmileySans';
    src: url(.\assets\SmileySans-Oblique.otf.woff2);
}
header{
  width:100%;
  height:auto;
  padding-bottom:20px;
  max-height:100px;
}
main{
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  padding-top:10px;
  padding-bottom: 10px;
  background-color: rgba(240,248,255,70%);
  width:80%;
  margin-left:auto;
  margin-right:auto;
  padding-bottom:30px;
}
#Name{
  display: flex;
  margin: auto;
  height:24px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'SmileySans','Comic Sans MS';
  font-size:24px;
}
.icons{
  width: 24px;
  height: 24px;
  padding:0;
  margin:0;
}
</style>

