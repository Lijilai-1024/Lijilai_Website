
<template>
    <div id="logo">
        <NAvatar
        round
        size="medium"
        src="https://i.loli.net/2021/10/24/bBESKsDvoF6GnqH.jpg"
        />
        <a>Lijilai's Website</a>
    </div>
     
</template>

<style>
    #logo{
        display: flex;
        margin:0;
        padding: 10px;
        height:auto;
        width:auto;
        max-height: 15vh;
        justify-self: start;
        justify-content: left;
        align-items: center;
        background-color: rgba(255,255,255,70%);
        text-align: left;
        font-family:'Comic Sans MS';
        font-size:24px;
    }
    @media (hover: hover) {
    #logo:hover {
        background-color: rgba(255,255,255,80%);
        cursor:pointer;
    }
}
</style>
<script>
import { defineComponent } from 'vue'
import { NAvatar } from 'naive-ui'
export default defineComponent({
    components: {
        NAvatar
    }
})
</script>