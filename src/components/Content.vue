<script setup>
import { defineAsyncComponent,shallowRef,watchEffect } from 'vue';
const props = defineProps({
  contentFrom: String
});
const dynamicComponent = shallowRef(null);
watchEffect(() => {

  if (props.contentFrom) {
    // 更新dynamicComponent为异步加载的组件
    dynamicComponent.value = defineAsyncComponent(() =>
      import(`./contents/${props.contentFrom}.vue`)
    );
  }
});
</script>

<template>
    <div id="content">
        <component :is="dynamicComponent"/>
    </div>
</template>

<style>
@font-face {
    font-family: 'SmileySans';
    src: url(..\assets\SmileySans-Oblique.otf.woff2);
}
#content{
    display: flex;
    flex-direction: column;
    margin:0;
    padding: 0px 15px;
    height:auto;
    width:100%;
    justify-self: start;
    justify-content: left;
    align-items: left;
    text-align: left;
    font-family:'微软雅黑','Comic Sans MS';
    font-size:20px;
}
</style>
