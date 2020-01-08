<template>
    <div class="loading-component" >

    </div>
</template>
<script>
import globalMethod from '@/mixins/globalMethod.vue'
export default {
    name:'loadingComponent',
    data:function(){
        return{
            loading:{
                default:true
            }
        }
    },
    mixins:[
        globalMethod
    ]
}
</script>
<style scoped lang="scss">
.loading-component{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color:black;
    z-index:10000;
    opacity:1;
}

</style>