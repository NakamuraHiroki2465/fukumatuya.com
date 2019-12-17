<template>
    <div>
        <detail :datas="datas" :header="header"></detail>
        <subdetail :subdatas="subdatas"></subdetail>
        <access></access>
        <lunchslideshow></lunchslideshow>
    </div>
</template>
<script>
import access from '@/components/Parts/access.vue'
import lunchslideshow from '@/components/Parts/lunchslideshow.vue'
export default {
    components:{
        access,
        lunchslideshow
    },
    data:function(){
        return{
            header:{
                title:'茶屋について',
                img:require('@/assets/images/lunch_background.png'),
            },
            subdatas:[
                {
                    title:'観光の合間に一息',
                    text:'当店では太平山名物を初めとした、定食や軽食等を提供致しております。自慢のお料理は焼き鳥・玉子焼定食です。太平山に登山や観光のお客様や栃木市の蔵の街の観光のついでなど、ゆっくりと一息つけるような場を提供致しております。また、太平山だんご、玉子焼、焼き鳥のお持ち帰りも承っております。お電話にて事前にご連絡ください。',
                    img:require('@/assets/images/teishoku.png'),
                    imgtitle:'焼き鳥・玉子焼定食 (税込1380円)'
                },
            ],
            datas:[
                {
                    title:'太平山名物をご存知ですか？',
                    text:'昔、太平山では参拝者はお賽銭ではなくお米を奉納していました。そのお米をだんごとして参拝者に振舞ったことから太平山だんごは生まれました。また、「夜泣き鳥は災いを呼ぶ」と言われており、夜に泣く鶏は神社に奉納されました。奉納された鶏は繁殖をし、それを参拝者に焼き鳥や玉子焼きとして振舞ったことから名物と呼ばれるようになりました。',
                    img:require('@/assets/images/shiro-dango1.jpeg'),
                    imgtitle:'太平山名物・だんご'
                }
            ]
        }
    }
}
</script>