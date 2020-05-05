<template>
    <div class = "bento-wrapper">
        <img class = "bento-header" src="@/assets/images/bento-header.png" alt="お弁当メニュー">
        <div class = "bento-header-explain">
            <p class = "bento-header-explain__content">太平山名物などを用いたお弁当をお作り致します。お弁当をお求めのお客様は下記電話までお問い合わせください。</p>
            <p class = "bento-header-explain__content"><span>*出来立てをご提供致したく、ご注文をいただいてから調理致します。お時間は10&nbsp;～20分ほどいただきます。</span></p>
            <p class = "bento-header-explain__content"><span>*内容は日によって多少異なる場合がございます。ご注文の際にお問い合わせください。</span></p>
        </div>
        <div class="reservation">
            <p class="phone_index">お問い合わせはこちらまで</p>
            <p class="phone">TEL:0282-22-1827</p>
            <p class="store_time">営業時間 : 10:00〜18:00</p>
        </div>
        <div class = "bento">
            <div class = "bento__explain">
                <div class = "bento__explain__name">
                    <h2>スペシャル弁当</h2>
                </div>
                <div class = "bento__explain__food">
                    <p class = "bento__explain__food__index">太平山名物焼き鳥と玉子焼きを使った贅沢なスペシャルセットになります。</P>
                    <p class = "bento__explain__food__title">[内容]</p>
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
                    <p class = "bento__explain__food__title">[内容]</p>
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
                    <p class = "bento__explain__food__title">[内容]</p>
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
                    <p class = "bento__explain__food__title">[内容]</p>
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
</template>
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
    &__content{
        font-size:1.5rem;
        span{
            font-size:1rem;
            color:rgba(0,0,0,0.8);
        }
    }
}
.bento{
    @include sp(){
        display:block;
        margin:40px 0;
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
    padding:15px;
    margin:40px 10px;
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
                font-size:1.5rem;
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
            &__content{
                font-size:1rem!important;
                padding:10px 0;
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
</style>