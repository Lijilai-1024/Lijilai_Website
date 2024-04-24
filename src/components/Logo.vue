<template>

    <div id="logo">
        <RouterLink to="/">
            <NAvatar round size="medium" src="https://i.loli.net/2021/10/24/bBESKsDvoF6GnqH.jpg" />
        </RouterLink>
        <RouterLink to="/">Lijilai's Website</RouterLink>

    </div>
</template>

<style>
#logo {
    display: flex;
    margin: 0;
    padding: 10px;
    height: 100%;
    width: auto;
    justify-self: start;
    justify-content: left;
    align-items: center;
    background: linear-gradient(to right,rgba(102,204,255,70%),rgba(240,248,255,70%));
    text-align: left;
    font-family: 'Comic Sans MS';
    font-size: 24px;
    z-index: 100;
}

#logo>a.router-link-active,
#logo>a:visited,
#logo>a:link {
    text-decoration: none;
    color: black;
}

@media (hover: hover) {
    #logo:hover {
        background-color: rgba(255, 255, 255, 80%);
        cursor: pointer;
    }

}
</style>
<script>
import { defineComponent } from 'vue'
import { NAvatar } from 'naive-ui'
import { RouterLink } from 'vue-router';
export default defineComponent({
    components: {
        NAvatar
    }
})
</script>