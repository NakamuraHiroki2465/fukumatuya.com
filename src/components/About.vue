<template>
    <div class="about-wrapper">
        <detail :datas="datas" :header="header"></detail>
        <storeinfo></storeinfo>
    </div>
</template>
<script>
import storeinfo from './Parts/storeinfo.vue'
export default {
   components:{
       storeinfo
   },
   data:function(){
       return{
           header:{
               title:'福松家について',
               img:require('@/assets/images/mainbackground.png'),
           },
           datas:[
               {
                    title:'料理長のご挨拶',
                    text: 'あじさい坂入口、太平山神社表参道の玄関口に店を構えて100年以上。時代と共に多くのお客様に愛され続けて成長して参りました。当店には二つの特徴があります。一つは、だんご、焼鳥、玉子焼、と言った太平山名物を気軽に味わっていただける昔ながらの茶店。昭和のレトロな雰囲気を残す空間で、のんびり一休みいただけます。そしてもう一つは、個室にて季節料理を楽しんでいただけます(要予約)。桜や紫陽花、紅葉など、山の素晴らしい景色を眺めながら、日本料理に舌鼓。お祝いや各種法要などの他にも、サークルやクラス会、家族の記念日などにいかがですか？2名様より承っております。当店では、くつろげる雰囲気を大切にし、お客様が心の洗濯をすることが出来れば幸いと存じます。歴史のある老舗でござあますが、初心を忘れずいつまでもお客様に愛されるお店を目指します。従業員一同、心よりお待ちしております。',
                    img:require('@/assets/images/father-pic.png'),
                    imgtitle:'料理長 : 中村義重'
               }
           ],

       }
   }
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.about-wrapper{
    width:100vw;
    overflow:hidden;
}

</style>