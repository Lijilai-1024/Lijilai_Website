<template>
    <div id="subtitle">
        <img v-if="is_icon()" :src="icon_src()"/>
        {{ subtitle }}
    </div>
</template>
<style scoped>
@font-face {
    font-family: 'SmileySans';
    src: url(../assets/SmileySans-Oblique.otf.woff2);
}
#subtitle{
    display: flex;
    margin:0;
    padding: 15px;
    height:auto;
    width:100%;
    max-height: 50px;
    font-weight: bold;
    justify-self: start;
    justify-content: left;
    align-items: center;
    text-align: left;
    font-family:'SmileySans','Comic Sans MS';
    font-size:32px;
}
#subtitle img{
    width: 32px;
    height: 32px;
    padding:0;
    margin:0;
}
@media (max-width: 768px) {
  #subtitle{
    font-size: 24px;
  }
  #subtitle img{
    width: 24px;
    height: 24px;
  }
}
</style>
<script>
export default{
    props: {
        subtitle: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
    methods: {
        icon_src: function(){
            return "/icons/" + this.icon + ".svg";
        },
        is_icon: function(){
            console.log(this.icon);
            return this.icon != "none";
        }
    },
}
</script>
