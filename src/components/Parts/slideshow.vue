<template>
    <vueper-slides 
        fade
        slide-content-outside="top" 
        slide-content-outside-class="max-widthed" 
        :touchable="false" 
        :breakpoints="breakpoints" 
        :arrows="false" 
        :fixed-height="true"
        autoplay
        transition-speed="250"
    >
        <vueper-slide
         v-for="(url,i) in urls" 
         :key="i" 
         :image="url.src"
         :alt="url.alt"
         :title="url.title"
        >
        </vueper-slide>
    </vueper-slides>
</template>
<script>
import{
    VueperSlides,
    VueperSlide
} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name:'slide-show',
    components:{
        VueperSlides,
        VueperSlide
    },
    data:function(){
        return{
            urls:[
                {
                    src:require('@/assets/images/fukumatu_food.jpg'),
                    alt:'福松家の料理',
                    title:'<p style="font-size:2rem!important;color:white;position:absolute;top:50%;right:2.5%;transform:translate(-50%,-50%);height:100%;padding-top:10%;z-index:100;writing-mode:vertical-rl;font-weight:lighter!important;">全てが手作りを<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;心行くまで<p>'
                },
                {
                    src:require('@/assets/images/yakitori1.png'),
                    alt:'太平山名物焼き鳥',
                    title:'<p style="font-size:2rem!important;color:white;position:absolute;top:50%;left:2.5%;transform:translate(50%,-50%);height:100%;padding-top:10%;z-index:100;writing-mode:vertical-rl;font-weight:lighter!important;">秘伝のタレを使用<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;絶品の焼き鳥に舌鼓<p>'
                },
                {
                    src:require('@/assets/images/dango.png'),
                    alt:'太平山名物だんご',
                    title:'<p style="font-size:2rem!important;color:white;position:absolute;top:50%;right:50%;transform:translate(50%,-50%);height:300px;z-index:100;writing-mode:vertical-rl;font-weight:lighter!important;">草だんご派？<br>&nbsp;&nbsp;白団子派？<p>'
                },
                {
                    src:require('@/assets/images/enkai-jyou.jpg'),
                    alt:'団体のお客様用宴会場スペース',
                    title:'<p style="font-size:2rem!important;color:white;position:absolute;top:50%;right:2.5%;transform:translate(-50%,-50%);height:100%;padding-top:5%;z-index:100;writing-mode:vertical-rl;font-weight:lighter!important;">日常から離れ<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;落ち着いた一時を<p>'
                },
                {
                    src:require('@/assets/images/greeting-wrapper.jpg'),
                    alt:'太平山の名物と共に自慢の割烹を',
                    title:'<p style="font-size:2rem!important;color:white;position:absolute;top:50%;right:2.5%;transform:translate(-50%,-50%);height:100%;padding-top:5%;z-index:100;writing-mode:vertical-rl;font-weight:lighter!important;">百年以上続く<br>&nbsp;&nbsp;&nbsp;&nbsp;愛され続けた空間<p>'
                },
            ],
            breakpoints: {
                1024: {
                slideRatio: 1 / 2.5,
                },
                740: {
                slideRatio: 1 / 2,
                },
                600:{
                    slideRatio: 1/1.5
                },
                500:{
                    slideRatio: 1/1,
                    bullets:false,
                    arrows:false,
                }
            },
        }
    },
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.vueperslide__content-wrapper--outside-top {
  transition: 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);
}

.vueperslides--animated .vueperslide__content-wrapper--outside-top {
  transition: 0.15s ease-in-out;
  opacity: 0;
  transform: scale(0);
}
.vueperslides{
    padding:0 0!important;
}
.vueperslide__title{
    position:absolute;
    top:0;
    left:10%;
    font-size:2rem!important;
}
.vueperslides__bullet .default{
    position:relative;
    z-index:101;
    width:50px;
    height:50px;
}
.vueperslides--fixed-height{
    height:calc(100vh - 250px);
}
</style>