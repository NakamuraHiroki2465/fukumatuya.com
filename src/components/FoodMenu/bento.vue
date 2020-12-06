<template>
    <div class = "bento-wrapper">
        <img class = "bento-header" src="@/assets/images/bento-header.png" alt="お弁当メニュー">
        <div class = "bento-header-explain">
            <p class = "bento-header-explain__title">太平山名物などを用いたお弁当をお作り致します。お弁当をお求めのお客様は下記電話までお問い合わせください。</p>
            <p class = "bento-header-explain__content"><span>*出来立てをご提供致したく、ご注文をいただいてから調理致します。<br>お時間は数十分ほどいただきます。</span></p>
            <p class = "bento-header-explain__content"><span>*内容は日によって多少異なる場合がございます。<br>ご注文の際にお問い合わせください。</span></p>
        </div>
        <div class="reservation">
            <p class="phone_index">お問い合わせはこちらまで</p>
            <p class="phone">TEL:0282-22-1827</p>
            <p class="store_time">営業時間 : 10:00〜18:00</p>
        </div>
        <div class="toggleBtn">
            <ul class="toggleBtn__wrapper">
                <li class="toggleBtn__wrapper__list">
                    <a :class="{toggleBtnWhite:normal,toggleBtnBlack:!normal}" v-on:click="bentoToggleBtn(true)">通常のお弁当をお求めの方</a>
                </li>
                <li class="toggleBtn__wrapper__list">
                    <a :class="{toggleBtnWhite:!normal,toggleBtnBlack:normal}" v-on:click="bentoToggleBtn(false)">特別な日のお弁当をお求めの方</a>
                </li>
            </ul>
        </div>
        <div id="normal" v-if="normal">
            <div class = "bento">
                <div class = "bento__explain">
                    <div class = "bento__explain__name">
                        <h2>「あじさい」</h2>
                    </div>
                    <div class = "bento__explain__food">
                        <p class = "bento__explain__food__index">遂に完成しました。会席料理でも使われている素材を用いた特別な創作弁当になります。<br><span class = "red">*ご要望に合わせて創作致します。</span><br><span class ="red">*予約は2日前までにお願い致します。</span></P>
                        <p class = "bento__explain__food__title">[内容例]</p>
                        <p class = "bento__explain__food__content">/焼き鳥&nbsp;/玉子焼き&nbsp;/立田揚げ&nbsp;/鱧の南蛮揚げ&nbsp;/胡瓜とカニ詰めの酢の物&nbsp;/車海老の塩焼き&nbsp;/水菜・ウドのきんぴら&nbsp;/野菜の炊き合わせ&nbsp;/草団子&nbsp;/五穀米&nbsp;/</P>
                    </div>
                    <div class = "bento__explain__price">
                        <h3 class = "bento__explain__price__content">2000円<span>(税込み)</span></h3>
                    </div>
                </div>
                <div class = "bento__image">
                    <img class = "bento__image__content" src = "@/assets/images/sousakubento.png" alt = "創作弁当"/>
                </div>
            </div>
            <div class = "bento">
                <div class = "bento__explain">
                    <div class = "bento__explain__name">
                        <h2>スペシャル弁当</h2>
                    </div>
                    <div class = "bento__explain__food">
                        <p class = "bento__explain__food__index">太平山名物焼き鳥と玉子焼きを使った贅沢なスペシャルセットになります。</P>
                        <p class = "bento__explain__food__title">[内容例]</p>
                        <p class = "bento__explain__food__content">/焼き鳥&nbsp;/玉子焼き&nbsp;/草団子&nbsp;/五穀米&nbsp;/山菜となめこの酢の物&nbsp;/漬物</P>
                    </div>
                    <div class = "bento__explain__price">
                        <h3 class = "bento__explain__price__content">900円<span>(税込み)</span></h3>
                    </div>
                </div>
                <div class = "bento__image">
                    <img class = "bento__image__content" src = "@/assets/images/special.png" alt = "玉子焼き鳥弁当"/>
                </div>
            </div>
            <div class = "bento">
                <div class = "bento__explain">
                    <div class = "bento__explain__name">
                        <h2>玉子焼き弁当</h2>
                    </div>
                    <div class = "bento__explain__food">
                        <p class = "bento__explain__food__index">太平山名物玉子焼をお得に食べられるセットになっております</P>
                        <p class = "bento__explain__food__title">[内容例]</p>
                        <p class = "bento__explain__food__content">/玉子焼き&nbsp;/味噌田楽&nbsp;/五穀米&nbsp;/山菜となめこの酢の物&nbsp;/漬物</P>
                    </div>
                    <div class = "bento__explain__price">
                        <h3 class = "bento__explain__price__content">600円<span>(税込み)</span></h3>
                    </div>
                </div>
                <div class = "bento__image">
                    <img class = "bento__image__content" src = "@/assets/images/tamago-bento.png" alt = "玉子焼き弁当"/>
                </div>
            </div>
            <div class = "bento">
                <div class = "bento__explain">
                    <div class = "bento__explain__name">
                        <h2>焼き鳥弁当</h2>
                    </div>
                    <div class = "bento__explain__food">
                        <p class = "bento__explain__food__index">太平山名物焼き鳥をお得に食べられるセットになっております</P>
                        <p class = "bento__explain__food__title">[内容例]</p>
                        <p class = "bento__explain__food__content">/焼き鳥&nbsp;/味噌田楽&nbsp;/五穀米&nbsp;/山菜となめこの酢の物&nbsp;/漬物</P>
                    </div>
                    <div class = "bento__explain__price">
                        <h3 class = "bento__explain__price__content">800円<span>(税込み)</span></h3>
                    </div>
                </div>
                <div class = "bento__image">
                    <img class = "bento__image__content" src = "@/assets/images/yakitori-bento.png" alt = "焼き鳥弁当"/>
                </div>
            </div>
            <div class = "bento">
                <div class = "bento__explain">
                    <div class = "bento__explain__name">
                        <h2>立田揚げ弁当</h2>
                    </div>
                    <div class = "bento__explain__food">
                        <p class = "bento__explain__food__index">サクッとした食感の立田揚げにスペシャルなねぎダレを添えてお食べください</P>
                        <p class = "bento__explain__food__title">[内容例]</p>
                        <p class = "bento__explain__food__content">/立田揚げ&nbsp;/味噌田楽&nbsp;/五穀米&nbsp;/山菜となめこの酢の物&nbsp;/漬物</P>
                    </div>
                    <div class = "bento__explain__price">
                        <h3 class = "bento__explain__price__content">700円<span>(税込み)</span></h3>
                    </div>
                </div>
                <div class = "bento__image">
                    <img class = "bento__image__content" src = "@/assets/images/tatuta-bento.png" alt = "立田揚げ弁当"/>
                </div>
            </div>
        </div>
        <div id="special" v-if="!normal">
            <div class = "bento">
                <div class = "bento__explain">
                    <div class = "bento__explain__name">
                        <h2>「福松」</h2>
                    </div>
                    <div class = "bento__explain__food">
                        <p class = "bento__explain__food__index">お祝い事や法事等にいかがでしょうか</P>
                        <p class = "bento__explain__food__title">[内容例]</p>
                        <p class = "bento__explain__food__subtitle">お通し</P>
                        <p class = "bento__explain__food__content">&nbsp;れん草しめじ菊花ひたし</P>
                        <p class = "bento__explain__food__subtitle">小鉢</P>
                        <p class = "bento__explain__food__content">&nbsp;胡麻豆腐</P>
                        <p class = "bento__explain__food__subtitle">前菜</P>
                        <p class = "bento__explain__food__content">&nbsp;れんこんきんぴら&nbsp;/&nbsp;こんにゃく柚子味噌&nbsp;/&nbsp;いちじく白酢かけ</P>
                        <p class = "bento__explain__food__subtitle">造り</P>
                        <p class = "bento__explain__food__content">&nbsp;ローストビーフ</P>
                        <p class = "bento__explain__food__subtitle">名物</P>
                        <p class = "bento__explain__food__content">&nbsp;だんご&nbsp;/&nbsp;玉子焼き&nbsp;/&nbsp;焼き鳥</P>
                        <p class = "bento__explain__food__subtitle">揚物</P>
                        <p class = "bento__explain__food__content">&nbsp;海老真丈もろこし揚げ&nbsp;/&nbsp;海老アーモンド&nbsp;/&nbsp;椎茸真丈の湯葉巻揚げ&nbsp;/&nbsp;青トウ&nbsp;/&nbsp;抹茶塩</P>
                        <p class = "bento__explain__food__subtitle">焼物</P>
                        <p class = "bento__explain__food__content">&nbsp;鰆挟み焼き&nbsp;/&nbsp;エシャレット</P>
                        <p class = "bento__explain__food__subtitle">煮物</P>
                        <p class = "bento__explain__food__content">&nbsp;れんこん万十&nbsp;/&nbsp;木の葉南京&nbsp;/&nbsp;あわフ&nbsp;/&nbsp;アスパラ</P>
                        <p class = "bento__explain__food__subtitle">蒸物</P>
                        <p class = "bento__explain__food__content">&nbsp;甘鯛かぶら蒸し&nbsp;/&nbsp;オクラ&nbsp;/&nbsp;百合根&nbsp;/&nbsp;山葵</P>
                        <p class = "bento__explain__food__subtitle">酢の物</P>
                        <p class = "bento__explain__food__content">&nbsp;胡瓜とあいなめ南蛮酢漬け</P>
                        <p class = "bento__explain__food__subtitle">食事</P>
                        <p class = "bento__explain__food__content">&nbsp;雑穀米</P>
                        <p class = "bento__explain__food__subtitle">果物</P>
                        <p class = "bento__explain__food__content">&nbsp;グレープフルーツ&nbsp;/&nbsp;シャインマスカット</P>
                    </div>
                    <div class = "bento__explain__price">
                        <h3 class = "bento__explain__price__content">3000円<span>(税込み)</span></h3>
                    </div>
                </div>
                <div class = "bento__image">
                    <img class = "bento__image__content" src = "@/assets/images/bento_3000.png" alt = "福松弁当"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data : function() {
        return {
            normal:true
        }
    },
    methods : {
        bentoToggleBtn : function(normal) {
            if (normal) {
                this.normal = true;
            } else {
                this.normal = false;
            }
        },
    },
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.bento-wrapper{
    @include sp(){
        width:90%;
    }
    width:70%;
    @include md(){
        min-width:770px;
    }
    @include lg(){
        min-width:770px;
    }
    margin:50px auto;
}
.bento-header{
    display:block;
    margin:auto;
}
.bento-header-explain{
    @include lg(){
        width:50%;
    }
    @include md(){
        width:70%;
    }
    @include sp(){
        width:90%;
        &__content{
            font-size:1.2rem!important;
            span{
                font-size:1rem!important;
            }
        }
    }
    margin:50px auto 30px auto;
    &__title{
        letter-spacing:-0.08rem!important;
        font-size:1.5rem;
    }
    &__content{
        padding:20px 0 0 0;
        span{
            font-size:1rem;
            color:rgba(0,0,0,0.8);
        }
    }
}
.bento{
    @include sp(){
        display:block;
    }
    @include md(){
        min-width:770px;
        display:flex;
    }
    @include lg(){
        min-width:770px;
        display:flex;
    }
    width:100%;
    padding:15px 25px;
    margin:0;
    display:flex;
    background-color:rgba(255,255,255,0.6);
    &__image{
        width:50%;
        padding:10px;
        @include sp(){
            width:100%;
        }
        &__content{
            width:100%;
            padding:15px;
        }
    }
    &__explain{
        width:50%;
        padding:10px;
        @include sp(){
            width:100%;
        }
        &__name{
            h2{
                font-size:1.8rem;
                color:brown;
                padding:15px;
                border-bottom:2px solid #cc9933;
            }
        }
        &__food{
            &__index{
                padding:10px 0;
                border-bottom:1px solid #cc9933;
            }
            &__title{
                margin:5px 0;
            }
            &__subtitle{
                font-size:1.2em;
            }
            &__content{
                font-size:1rem!important;
                padding:0px 0px 10px 5px;
                font-weight:lighter!important;
            }
        }
        &__price{
            &__content{
                font-size:1.5rem!important;
                color:brown;
                letter-spacing:0.2rem;
                text-align:right;
                span{
                    color:rgba(0,0,0,0.8);
                    font-size:0.8rem!important;
                }
            }
        }
    }
}
.reservation{
    margin:auto;
    @include lg(){
        width:70%;
    }
    @include md(){
        width:70%;
    }
    @include sp(){
        width:90%;
    }
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
.red{
    color:brown;
}
.toggleBtn{
    margin:40px 0 0 0;
    padding-bottom:1px;
    border-bottom:1px solid brown;
    @include sp(){
        border:none;
    }
    &__wrapper{
        display:flex;
        height:80px;
        &__list{
            padding:0 1px;
            @include sp(){
                width:100%;
                padding:0;
            }
            a{
                padding:0 10px;
                background-color:rgba(0,0,0,0.8);
                color:white;
                font-size:1.2rem;
                box-shadow:none;
                border:none;
                display:block;
                border-top:1px solid brown;
                border-left:1px solid brown;
                border-right:1px solid brown;
                line-height:80px;
                &:hover{
                    cursor:pointer;
                }
                @include sp(){
                    font-size:0.6em!important;
                    text-align:center;
                }
            }
        }
    }
}
.toggleBtnWhite{
    background-color:rgba(255,255,255,0.6)!important;
    color:black!important;
    transition:0.2s;
}
.toggleBtnBlack{
    background-color:rgba(0,0,0,0.8)!important;
    color:white!important;
    transition:0.2s;
}
#special,#normal{
    border-right:1px solid brown;
    border-left:1px solid brown;
    border-bottom:1px solid brown;
    @include sp(){
        margin:0;
    }
}
</style>