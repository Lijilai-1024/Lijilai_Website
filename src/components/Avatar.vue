<template>
    <div id="avatar">
        <NImage
        width="200"
        preview-disabled
        src="https://raw.githubusercontent.com/Lijilai-1024/PicGo_Images/master/Avator.png"
        />
    </div>
</template>
<style>
#avatar
{
    padding: 10px;
    margin-left:auto;
    margin-right:auto;
}
</style>
<script>
import { defineComponent } from 'vue'
import { NImage } from 'naive-ui'
export default defineComponent({
    components: {
        NImage
    }
})
</script>