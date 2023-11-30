<template>
    <div class="dinner-wrapper">
        <!--ページトップ部分-->
        <dinnerdetail :header="header" :datas="datas"></dinnerdetail>
        <div class="wrapper-50">
            <h2 class="text-4xl">個室のご案内</h2>
            <br>
            <p>当店のお部屋は完全個室となっております。そのため、他のお客様を気にすることなく、ゆったりとお食事をお楽しみいただけます。</p>
            <br>
            <div class="my-4 pt-4">
                <p class="text-xl mb-4 pb-4 border-bottom">2〜4人でご利用の場合のイメージ</p>
                <img class="max-w-full" src="@/assets/images/zaisu/zaisu_four.jpg" alt="座椅子4人用">
            </div>
            <div class="my-4 pt-4"> 
                <p class="text-xl mb-4 pb-4 border-bottom">6〜8人でご利用の場合のイメージ</p>
                <img class="max-w-full" src="@/assets/images/zaisu/zaisu_eight.jpg" alt="座椅子8人用">
            </div>
            <div class="my-4 pt-4"> 
                <p class="text-xl mb-4 pb-4 border-bottom">大人数でのご利用の場合のイメージ</p>
                <img class="max-w-full" src="@/assets/images/zaisu/zaisu_large.jpg" alt="座椅子大人数用">
            </div>
        </div>
        <!--ページのメインの部分-->
        <dinnermenu :datas="dinnermenu"></dinnermenu>
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
@import '@/assets/variables.scss';
.wrapper-50{
    margin:50px auto;
    width:50%;
    @include lg(){
         min-width:850px;
    }
    @include md(){
        width:80%;
         min-width:850px;
    }
    @include sp(){
        width:90%;
    }
}
.border-bottom {
    border-bottom:1px solid rgba(0,0,0,0.3);
    box-shadow:0 5px 10px -10px black;
}
.dinner-wrapper{
    overflow:hidden;
    width:100vw;
}
</style>