<template>
    <div class="slide-wrapper">
        <carousel
        :per-page="2"
        :navigation-enabled="true"
        :speed=2000
        :autoplayTimeout=5000
        :autoplay="true"
        :centerMode="true"
        :loop="true"
        :perPageCustom="[[760,3],[1024,4]]"
        :spacePadding="30"
        >
            <slide>
                <div class="slidecover">
                    <img src="@/assets/images/tamagoyaki.png" alt="玉子焼き">
                </div>
            </slide>
            <slide>
                <div class="slidecover">
                    <img src="@/assets/images/yakitori.png" alt="焼き鳥">
                </div>
            </slide>
            <slide>
                <div class="slidecover">
                    <img src="@/assets/images/udon.jpg" alt="うどん">
                </div>
            </slide>
            <slide>
                <div class="slidecover" >
                    <img src="@/assets/images/dango.png" alt="だんご">
                </div>
            </slide>
            <slide>
                <div class="slidecover">
                    <img src="@/assets/images/teishoku.png" alt="焼き鳥玉子焼定食">
                </div>
            </slide>
        </carousel>
    </div>
</template>
<script>
import {Carousel,Slide} from 'vue-carousel';
export default {
    components:{
        Carousel,
        Slide
    },
    data:function(){
        return{
 
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.slidecover{
    width:95%;
    height:80%;
    overflow:hidden;
}
.slide-wrapper{
    margin:100px auto;
}
</style>