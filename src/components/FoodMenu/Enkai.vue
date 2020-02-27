<template>
    <div class="dinner-wrapper">
        <!--ページトップ部分-->
        <dinnerdetail :header="header" :datas="datas"></dinnerdetail>
        <!--ページのメインの部分-->
        <dinnermenu :datas="dinnermenu"></dinnermenu>
        <!--
        <div class="room">
            <div class="room__title__container">
                <h2 class="room__title">
                    個室のご案内
                </h2>
            </div>
            <div class="room__content__container">
                <p>当店のお部屋は完全個室となっております。そのため、他のお客様を気にすることなく、ゆったりとお食事をお楽しみいただけます。また、カラオケも設置しております。</p>
            </div>
        </div>
        -->
    </div>
</template>
<script>
import dinnerdetail from '@/components/Parts/dinnerdetail.vue'
import dinnermenu from '@/components/Parts/DinnerMenu.vue'
export default {
    components:{
        dinnerdetail,
        dinnermenu,
    },
    data:function(){
        return{
            dinnermenu:[
                {
                    title:'季節コース',
                    text:'季節の食材を使った会席料理。コース値段によって中身の食材がかわります。',
                    img:require('@/assets/images/enkai-basic.jpg'),
                    alt:"季節コース",
                    menu_style:"background-color:rgba(245,222,179,0.5);",
                    menu:[
                        {
                            price:'3000円',
                            detail:'こちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧です',
                        },
                        {
                            price:'3500円',
                            detail:'こちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧です',
                        },
                        {
                            price:'4000円',
                            detail:'こちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧です',
                        },
                        {
                            price:'5000円',
                            detail:'こちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧です',
                        }
                    ]
                },
                {
                    title:'お任せコース',
                    text:'とにかく旨いものが食べたいというグルメ好きにおすすめです。食材にこだわりをもって旬の会席料理をお出し致します。',
                    img:require('@/assets/images/enkai-basic2.jpg'),
                    alt:"お任せコース",
                    menu_style:"background-color:rgba(222,187,135,0.5);",
                    menu:[
                        {
                            price:'5000〜8000円',
                            detail:'こちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧です',
                        }
                    ]
                },
                {
                    title:'ふぐコース',
                    text:'ふぐコースは期間限定で下関のとらふぐをうすづくり、からあげ、鍋などふぐづくしのフルコースです。',
                    img:require('@/assets/images/fugu.jpg'),
                    alt:"ふぐコース",
                    menu_style:"background-color:rgba(255,255,255,0.5);",
                    menu:[
                        {
                            price:'7000〜8000円',
                            detail:'こちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧です',
                        }
                    ]
                },
/*                 {
                    title:'伊勢コース',
                    text:'活けの伊勢海老を使ったコースです。',
                    alt:"伊勢コース",
                    menu:[
                        {
                            price:'時価',
                            detail:'こちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧ですこちらはメニューの一覧です',
                        }
                    ]
                } */
            ]
        }
    }
}
</script>
<style scoped lang="scss">
.dinner-wrapper{
    overflow:hidden;
    width:100vw;
}
</style>