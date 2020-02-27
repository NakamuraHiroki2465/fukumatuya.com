<template>
    <div class="about-wrapper">
        <div class="main-title">
            <img src='@/assets/images/fukumatu_food_title.png' alt="メイン背景">
            <h1 class="main-title">会席料理について</h1>
            <div class="site-map">
              <p><router-link tag="a" to="/" style="color:white;">トップ</router-link>&nbsp;>&nbsp;<router-link tag="a" to="/dinner" style="color:white;">会席料理について</router-link> </p>
            </div>
        </div>
        <div class="wrapper-60">
            <div class="vfor">
                <h2  class="title"><span style="font-size:2rem!important;">見・香・味</span>&nbsp;全てを堪能する</h2>
                <div class="center-wrapper flex-wrapper">
                    <div class="about-container">
                        <div class="about-text ">
                            <p>店主は日比谷・赤坂の料亭で厳しい修行を積んだ板前。直接市場へ出向いて、厳選した食材を仕入れて一から吟味して調理しております。タイトルにあります様に、お客様に五感で料理を楽しんでいただけるよう、どの料理をとっても店主の手作りにこだわり、とにかく美食を追求しております。</p>
                        </div>
                        <div class="for_next">
                            <div class="detail for_access course ">
                                <a v-scroll-to="'#menu'" class="has-text-centered relative">
                                    <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                    <p class="has-text-centered">コースをみる</p>
                                </a>
                            </div>
                            <div class="detail for_access course ">
                                <a  class="room has-text-centered relative">
                                    <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                    <p class="has-text-centered">お部屋をみる</p>
                                </a>
                            </div>
                        </div>
                        <h2 class="title sub">ご相談について</h2>
                        <p>福松家ではそれぞれのお客様の要望に沿えるよう、できうる限りのご相談に乗ります。まずはお電話から、お気軽にご相談ください。</p>
                        <div class="sub-text">
                            <div class="about-text">
                                <div class="example" >
                                    <p class="subtitle">生物が食べられないお客様</p>
                                    <p class="subtext">例：代わりに焼き魚や煮物、火を通した料理を提供いたしました。</p>
                                </div>
                                <div class="example">
                                    <p class="subtitle">病気で食事が制限されている</p>
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
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;栃木県栃木市平井町681</p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name" >電話</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;0282-22-1827</p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name">営業時間</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="" >&nbsp;茶屋: 10:00 〜 18:00<br>&nbsp;宴会: 11:00 〜 22:00(要予約)</p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name">定休日</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;不定休</p>
                                </div>
                                <div  class="detail">
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name">駐車場</p>
                                    <p style="white-space:pre-wrap; word-wrap:break-word;" class="">&nbsp;あじさい坂駐車場:約50台<br>&nbsp;店鋪正面:15台ほど</p>
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
                                    <p class="phone">TEL:0282-22-1827</p>
                                    <p class="store_time">営業時間 : 10:00〜18:00</p>
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
.wrapper-60{
    margin:50px auto;
    width:60%;
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
.about-text{
    p{
        font-weight:bold;
        font-size:1.2rem;
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
    padding-top:50px;
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
}
.column-wrapper{
    .detail{
        width:100%!important;
    }
}
.course{
    height:50px;
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

</style>