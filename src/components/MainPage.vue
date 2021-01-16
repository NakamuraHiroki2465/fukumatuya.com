<template>
    <div class="main-wrapper">
        <div class="scroll-wrapper">
            <slideShow class="scroll">
            </slideShow>
            <div class="site-map">
              <p><router-link tag="a" to="/" style="color:white;">トップ</router-link></p>
            </div>
        </div>
        <div class = "bento">
            <div class = "bento__wrapper">
                <img src="@/assets/images/bento.png" alt="お弁当トップ">
                <router-link tag = "div" to = "/bento" class = "detail-wrapper">
                    <router-link tag= "a" to="/bento">お弁当詳細はこちら</router-link>
                </router-link>
            </div>      
        </div>
        <div class="container-wrapper">
            <div class="message-wrapper">
                <div class="wrapper">
                    <div class="title">
                        <h1  class="has-text-centered">会席料理なら福松家へ</h1>
                    </div>
                    <div class="flex-wrapper">
                        <div class="container-image">
                            <div class="front-image">
                                <img  src="@/assets/images/enkai-basic.jpg" alt="宴会場スタンダードコース">
                            </div>
                        </div>
                        <div class="container-text">
                            <div class="text  has-text-centered-mobile">
                                <h3 class="subtitle" >【店主自慢の創作料理】</h3>
                                <p>都会を離れ大自然の中、清流の響き鳥のさえずりを聞きながら日本料理に舌鼓。お客様が心身共にリフレッシュしていただくことをモットーに、ゆったりとした一時を過ごしていただけます。手作りにこだわり個室のお座敷にて創作料理を堪能していただきます。</p>
                                <div class="for_next">
                                    <router-link tag="div" to="dinner" class="detail-wrapper relative">
                                        <router-link tag="a" to="dinner">
                                            <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                            <p>コースをみる</p>
                                        </router-link>
                                    </router-link>
                                    <!--
                                    <router-link tag = "div" to="#room" class="detail-wrapper relative">
                                        <router-link tag="a" to="#room">
                                            <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                            <p>お部屋をみる</p>
                                        </router-link>
                                    </router-link>
                                    -->
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="reservation">
                        <p class="phone_index">お問い合わせはこちらまで</p>
                        <p class="phone number-spacing">0282-22-1827</p>
                        <p class="store_time number-spacing">営業時間 : 10:00〜18:00<br v-if ="sp">&nbsp;(会席料理のご予約時のみ22時まで)</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-wrapper">
            <div class="message-wrapper">
                <div class="wrapper">
                    <div class="title">
                        <h1 class="has-text-centered">太平山観光の休憩に</h1>
                    </div>
                    <div class="flex-wrapper">
                        <div class="container-image">
                            <div class="front-image">
                                <img  src="@/assets/images/greeting-wrapper.jpg" alt="店舗外観">
                            </div>
                        </div>
                        <div class="container-text">
                            <div class="text  has-text-centered-mobile">
                                <h3 class="subtitle">【太平山名物と共に一息】</h3>
                                <p>創業は120年前。当時から伝統を守りながら、太平山の麓で懐かしみのある味を提供しております。太平山へ観光や登山で訪れた人々の疲れを癒し、時間を忘れてゆったりとできます。</p>
                                <div class="for_next">
                                    <router-link tag="div" to="lunch" class="detail-wrapper relative">
                                        <router-link tag="a" to="lunch">
                                            <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                            <p>メニュー詳細・料金一覧</p>
                                        </router-link>
                                    </router-link>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div class="sub-info columns is-multiline">
            <router-link to="/about" tag="div" class="aboutfukumatuya column is-4 is-offset-2">
                <img src="@/assets/images/fukumatuya.jpg" alt="福松家外観">
                <p class="aboutinfo">福松家について</p>
            </router-link>
            <router-link to="/oohirasan" tag="div" class="oohira-san column is-4">
                <img src="@/assets/images/oohirasan.jpg" alt="太平山の観光">
                <p class="aboutinfo">太平山観光について</p>
            </router-link>
        </div>
        <div class="detail-info">
            <div class="detail columns is-mobile" >
                <p class="column is-3 is-3-mobile  info_name">所在地</p>
                <p class="column is-9 is-8-mobile">栃木県栃木市平井町681</p>
            </div>
            <div class="detail columns is-mobile" >
                <p class="column is-3 is-3-mobile  info_name" >駐車場</p>
                <p class="column is-9 is-8-mobile" >あじさい坂駐車場:約50台,<br v-if="sp">店鋪正面:15台ほど</p>
            </div>
            <div class="detail columns is-mobile">
                <p class="column is-3 is-3-mobile  info_name" >営業時間</p>
                <p class="column is-9 is-8-mobile">9:00&nbsp;〜&nbsp;18:00 <br v-if="sp">&nbsp;(会席料理のご予約時のみ22時まで)</p>
            </div>
            <div class="detail columns is-mobile">
                <p class="column is-3 is-3-mobile  info_name">定休日</p>
                <p class="column is-9 is-8-mobile">不定休</p>
            </div>
        </div>
        <access>
        </access>
    </div>
</template>
<script>
import slideShow from '@/components/Parts/slideshow.vue'
import access from '@/components/Parts/access.vue'
export default {
    name:'main-page',
    components:{
        slideShow,
        access
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.scroll-wrapper{
    position:relative;
}
.scroll{
    overflow:hidden;
    @include sp(){
        &:before{
            content:'';
            display:none;
        }
    }
}
.site-map{
    transform:translateY(0);
}
.sub-info{
    margin-top:50px;
    width:100%;
    @include sp(){
        margin:0;
    }
    .aboutfukumatuya,.oohira-san{
        position:relative;
        cursor:pointer;
        @include sp(){
            margin:auto;
            width:80%;
        }
    }
}
.aboutinfo{
    font-weight:bold;
    text-align:center;
    font-size:1.3rem;
    width:100%;
}
.detail{
    border-bottom:1px solid brown;
    font-weight:bold;
    width:100%;
    margin:0!important;
    .info_name{
        color:brown;
        margin-left:10px;
    }
}
.detail-info{
    width:80%;
    margin:100px auto 0 auto;
    @include sp(){
        width:100%;
    }
    @include md(){
        width:90%;
    }
}
.main-wrapper{
    width:100vw;
    overflow:hidden;
    position:relative;
}
.bento{
    width:80%;
    margin:150px auto 0 auto;
    @include sp(){
        width:90%;
    }
    &__wrapper{
        position:relative;
        img{
            display:block;
            margin:auto;
        }
    }
}
.detail-wrapper{
    margin:10px auto;
    @include sp(){
        width:80%;
    }
    @include md(){
        width:45%;
    }
    @include lg(){
        width:45%;
    }
    padding:10px 15px;
    background-color:rgba(0,0,0,0.8);
    &:hover{
        cursor:pointer;
    }
    a{
        line-height:100%;
        display:inline-block;
        text-align:center;
        color:white;   
        width:100%;
    }
}

.container-wrapper{
    .flex-wrapper{
        display:flex;
        justify-content:space-between;
    }
    .wrapper{
        padding:20px 0;
        width:80%;
        margin:100px auto 0 auto;
        @include lg(){
            min-width:1024px;
        }
    }
    .title h1{
        white-space:nowrap;
        font-weight:bold;
        font-size:2rem;
        position:relative;
        &:after{
            content:'';
            position:absolute;
            top:150%;
            left:0;
            width:100%;
            height:1px;
            background-color:brown;
            @include sp(){
                left:50%;
                transform:translate(-50%,-50%);
            }
        }
    }
    .container-text{
        margin-right:10px;
        @include sp(){
            width:100%;
        }
        @include md(){
            width:100%;
        }
        .for_next{
            @include lg(){
                display:flex;
            }
            @include md(){
                display:flex;
            }
        }
    }
    .text{
        white-space:pre-wrap;
        .subtitle{
            text-align:center;
            margin:0;
        }
        @include lg(){
            width:600px;
        }
        @include sp(){
            padding-top:10px;
            margin:auto;
        }
        @include md(){
            margin:auto;
            width:600px;
        }
        p{
            font-size:1.2rem;
        }
    }
    .text{
        h3{
            font-weight:bold;
            font-size:1.7rem;
            padding:30px 0;
            white-space:nowrap;
        }
    }

    .container-image{
        margin:auto 10px;
        overflow:hidden;
        height:100%;
        flex:auto;
        @include md(){
            display:none;
        }
        @include sp(){
            display:none;
        }
        .front-image{
            text-align:center;
            img{
                width:800px!important;
                display:block;
            }
            @include sp(){
                margin:auto;
                img{
                    margin:auto;
                }
            }
            @include md(){
                img{
                    margin:auto;
                }
            }
        }
        .front-image{
            z-index:99;
        }
    }
    .container-detail{
        width:80%;
        margin:auto;
        height:100px;
        padding-top:30px;
        @include sp(){
            width:100%;
        }
        .list{
            border:3px solid brown;
            text-align:center;
            transition:background-color 0.5s;
            position:relative;
            background-color:transparent;
            span{
                display:none;
                position:absolute;
                top:50%;
                right:20px;
                background-color:brown;
                width:10px;
                height:2px;
                @include sp(){
                    display:block;
                }
            }
            span:nth-child(1){
                transform:rotate(45deg);
                transform-origin: 0 1px;
            }
            span:nth-child(2){
                transform:rotate(-45deg);
                transform-origin: 0 1px;
            }
            &:hover{
                background-color:white;
                transition:background-color 0.5s ;
                span{
                    display:block;
                }
            }
            a{
                font-weight:bold;
                font-size:1.2rem;
            }
        }
    }
    .course{
        height:50px;
    }
    .detail{
        width:100%;
        @include sp(){
            width:80%;
        }
    }
    .absolute{
        top:50%;
        left:5px;
        width:30px!important;
        transform:translateY(-50%);
    }
    .room{
        cursor:not-allowed;
    }
}
.relative{
    position:relative;
}
.reservation{
    margin:30px auto 0 auto;
    width:50%;
    border:5px double brown;
    @include lg() {
        width:50%;
        min-width:600px;
    }
    @include md() {
        width:70%;
        min-width:600px;
    }
    @include sp() {
        width:90%;
    }
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