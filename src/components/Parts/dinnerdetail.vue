<template>
    <div class="about-wrapper">
        <div class="main-title">
            <img src='@/assets/images/fukumatu_food_title.png' alt="メイン背景">
            <h1 class="main-title">会席料理について</h1>
            <div class="site-map">
              <p><router-link tag="a" to="/" style="color:white;">トップ</router-link><span>&gt;</span><router-link tag="a" to="/dinner" style="color:white;">会席料理</router-link></p>
            </div>
        </div>
        <div class="wrapper-50">
            <div class="vfor">
                <h2  class="title"><span style="font-size:2rem!important;">見・香・味</span>&nbsp;全てを堪能する</h2>
                <div class="center-wrapper flex-wrapper">
                    <div class="about-container">
                        <div class="about-text ">
                            <p>店主は日比谷・赤坂の懐石料理店で厳しい修行を積んだ板前。<br>直接市場へ出向いて、厳選した食材を仕入れて一から吟味して調理しております。<br>タイトルにあります様に、お客様に五感で料理を楽しんでいただけるよう、どの料理をとっても店主の手作りにこだわり、とにかく美食を追求しております。</p>
                        </div>
                        <div class="for_next">
                            <div class="detail for_access course ">
                                <a v-scroll-to="'#menu'" class="has-text-centered relative">
                                    <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                    <p class="has-text-centered">コースをみる</p>
                                </a>
                            </div>
                        </div>
                        <h3 class="title sub">ご要望について</h3>
                        <p>福松家ではそれぞれのお客様の要望に沿えるよう、できうる限りのご相談に乗ります。<br>まずはお電話から、お気軽にご相談ください。</p>
                        <div class="sub-text">
                            <div class="about-text">
                                <div class="example-title">
                                   <h4 class="example-title__content">※実際にご要望に沿った例</h4> 
                                </div>
                                <div class="example" >
                                    <p class="subtitle">1.&nbsp;生物が食べられないお客様</p>
                                    <p class="subtext">例：代わりに焼き魚や煮物、火を通した料理を提供いたしました。</p>
                                </div>
                                <div class="example">
                                    <p class="subtitle">2.&nbsp;病気で食事が制限されている</p>
                                    <p class="subtext">例：塩分を抜いた料理を提供いたしました。玉子焼きでは出汁を抜き、焼き鳥はタレをつけず焼くなどを致しました。</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div  class="image">
                        <div class="column-wrapper">
                            <template v-if="!sp">
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name" >住所</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;栃木県栃木市平井町<span class="number-spacing">681</span></p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name" >電話</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;<span class="number-spacing">0282-22-1827</span></p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name">営業時間</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="" >&nbsp;茶屋: <span class="number-spacing">10:00 〜 18:00</span><br>&nbsp;宴会: <span class="number-spacing">11:00 〜 22:00</span>&nbsp;(要予約)</p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name">定休日</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;不定休</p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name">駐車場</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;あじさい坂駐車場&nbsp;:&nbsp;約<span class="number-spacing">50</span>台<br>&nbsp;店鋪正面&nbsp;:&nbsp;<span class="number-spacing">15</span>台ほど</p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name">決済方法</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;現金のみにて承ります</p>
                                </div>
                                <div class="detail for_access access">
                                    <router-link to="/access" tag="a" class="has-text-centered relative ">
                                        <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                        <p class="has-text-centered">交通アクセス</p>
                                    </router-link>
                                </div>
                                <div class="reservation">
                                    <p class="phone_index">お問い合わせはこちらまで</p>
                                    <p class="phone number-spacing">0282-22-1827</p>
                                    <p class="store_time number-spacing">営業時間 : 10:00〜22:00</p>
                                    <p class="time-yoyaku">(茶屋は18時まで。会席料理は要予約)</p>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'datas',
        'header'
    ],
    data:function(){
        return{
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.vfor{
    margin:100px auto;
}

.main-title{
    height:300px;
    margin-bottom:100px;
    position:relative;
    overflow:hidden;
    @include sp(){
        font-size:2rem!important;
    }
    img{
        min-width:990px;
        width:100%;
        min-height:300px;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        position:absolute;
    }
    h1{
        font-size:2.5rem;
        font-weight:bold;
        text-align:center;
        height:300px;
        line-height:300px;
        color:white;
        position:absolute;
        margin:0;
        width:100%;
    }
}
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
.about-container{
    width:90%;
    @include md(){
        min-width:500px;
    }
    @include lg(){
        min-width:500px;
        max-width:600px;
    }
    @include sp(){
        width:100%;
    }
}
.image{
    width:300px;
    @include sp(){
        margin-top:40px;
        display:none;
    }
    p{
        font-weight:bold;
        font-size:1.2rem;
        text-align:left;
        white-space:nowrap;
        @include sp(){
            text-align:center;
        }
    }
}
.title{
    width:100%;
    font-weight:bold;
    font-size:2rem;
    border-bottom:1px solid rgba(0,0,0,0.3);
    box-shadow:0 5px 10px -10px black;
}
.center-wrapper{
    justify-content:space-between;
    width:inherit;
}
.column-wrapper{
    height:100%;
    min-width:300px;
}

.detail-info{
    width:100%;
    margin:100px auto 0 auto;
    @include sp(){
        width:90%;
    }
    @include md(){
        width:80%;
    }
}

.sub{
    padding-top:20px;
    font-size:1.7em;
}
.example{
    padding:15px 10px;
    color:rgba(0,0,0,0.7);
    font-size:1rem;
}
.subtitle{
    border-bottom:1px solid brown;
    margin-bottom:10px;
}

.reservation{
    margin:auto;
    width:100%;
    border:5px double brown;
    p{
        text-align:center;
        font-weight:bold;
    }
    .phone_index{
        font-size:1.2rem;
    }
    .phone{
        font-size:2.2rem;
    }
    .store_time{
        font-size:1.3rem;
    }
    .time-yoyaku{
        font-size:1rem;
    }
}
.column-wrapper{
    .detail{
        width:100%!important;
        padding:5px 0;
    }
}
.course{
    height:50px;
    width:250px;
}
.room{
    cursor:not-allowed!important;
}
.access{
    margin-left:0!important;
}
.flex-wrapper{
    display:flex;
}
.example-title{

    &__content{
        font-weight:lighter;
    }
}
.sub-text{
    padding-top:20px;
}
.number-spacing{
    letter-spacing:0.01em;
}
</style>