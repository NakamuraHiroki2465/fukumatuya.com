<template>
    <vueper-slides fade slide-content-outside="top" slide-content-outside-class="max-widthed" :touchable="false" :slide-ratio="0.35" >
        <vueper-slide
         v-for="(url,i) in urls" 
         :key="i" 
         :image="url.src"
         :alt="url.alt"
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
                    alt:'福松家の料理'
                },
                {
                    src:require('@/assets/images/yakitori1.png'),
                    alt:'太平山名物焼き鳥'
                },
                {
                    src:require('@/assets/images/dango.png'),
                    alt:'太平山名物だんご'
                },
                {
                    src:require('@/assets/images/enkai-jyou.jpg'),
                    alt:'団体のお客様用宴会場スペース'
                },
                {
                    src:require('@/assets/images/greeting-wrapper.jpg'),
                    alt:'太平山の名物と共に自慢の割烹を',
                },
            ]
        }
    },
}
</script>
<style scoped lang="scss">
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
</style>