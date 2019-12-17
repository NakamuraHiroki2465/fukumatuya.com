<template>
    <div>
        <detail :datas="datas" :header="header"></detail>
        <access></access>
    </div>
</template>
<script>
import access from '@/components/Parts/access.vue'
export default {
    components:{
        access
    },
    data:function(){
        return{
            header:{
                title:'茶屋について',
                img:require('@/assets/images/lunch_background.png'),
            },
            datas:[
                {
                    title:'太平山名物と共に一息',
                    text:'当店では太平山名物を初めとした、定食や軽食等を提供致しております。自慢のお料理は焼き鳥・玉子焼定食です。太平山に登山や観光のお客様や栃木市の蔵の街の観光のついでなど、ゆっくりと一息つけるような場を提供致しております。また、太平山だんご、玉子焼、焼き鳥のお持ち帰りも承っております。お電話にて事前にご連絡ください。',
                    img:require('@/assets/images/teishoku.jpg'),
                    imgtitle:'焼き鳥・玉子焼定食 (1380円)'
                }
            ]
        }
    }
}
</script>