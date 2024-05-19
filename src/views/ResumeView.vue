<script setup>
import Avatar from '../components/Avatar.vue';
import Subtitle from '../components/Subtitle.vue';
import Content from '../components/Content.vue';
</script>
<template>
    
    <div class="content">
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
    </div>
    
</template>
<style scoped>
@font-face {
    font-family: 'SmileySans';
    src: url(.\assets\SmileySans-Oblique.otf.woff2);
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
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-bottom: 20px;
}
@media screen and (max-width: 768px) {
  #Name{
    font-size: 18px;
  }
  
}
</style>
