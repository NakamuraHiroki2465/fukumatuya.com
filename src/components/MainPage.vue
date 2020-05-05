<template>
    <div class="main-wrapper">
        <div class="scroll-wrapper">
            <slideShow class="scroll">
            </slideShow>
            <div class="site-map">
              <p><router-link tag="a" to="/" style="color:white;">トップ</router-link> </p>
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
        <InfoComponent :messages="messages">
        </InfoComponent>
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
                <p class="column is-9 is-8-mobile">9:00&nbsp;〜&nbsp;18:00 <br v-if="sp">(予約時の時間は異なります)</p>
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
import InfoComponent from '@/components/Parts/InfoComponent.vue'
import access from '@/components/Parts/access.vue'
export default {
    name:'main-page',
    data:function(){
        return{
            messages:[
                {
                    title:"会席料理（完全予約制）",
                    subtitle:"店主自慢の創作料理",
                    mainMessage:"都会を離れ大自然の中、清流の響き鳥のさえずりを聞きながら日本料理に舌鼓。お客様が心身共にリフレッシュしていただくことをモットーに、ゆったりとした一時を過ごしていただけます。手作りにこだわり個室のお座敷にて創作料理を堪能していただきます。",
                    frontimage:require('@/assets/images/enkai-basic.jpg'),
                    frontalt:"宴会場スタンダードコース",
                    detail:[
                        {
                            text:'ご予約はこちらまで',
                            number:'tel:09012099777'
                        },
                        {
                            text:'0282-22-1827',
                        }
                        
                    ],
                    url:'',
                    room:'お部屋をみる'
                },
                {
                    title:"太平山観光の休憩に",
                    subtitle:"太平山名物と共に一息",
                    mainMessage:"創業は120年前。当時から伝統を守りながら、太平山の麓で懐かしみのある味を提供しております。太平山へ観光や登山で訪れた人々の疲れを癒し、時間を忘れてゆったりとできます。",
                    frontimage:require('@/assets/images/greeting-wrapper.jpg'),
                    frontalt:"店舗外観",
                    detail:[
                            {
                                text:"メニュー詳細・料金一覧"
                            }
                        ],
                    url:'/lunch',
                    room:'店内の様子'
                }
            ],
        }
    },
    components:{
        slideShow,
        InfoComponent,
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
}
    .site-map{
        width:100%;
        height:30px;
        background-color:black;
        position:absolute;
        top:calc(100% + 1.2rem);
        transform:translateY(-100%);
        p{
            color:rgba(255,255,255,0.7);
            height:30px;
            line-height:30px;
            a{
                font-size:1rem!important;
            }
            @include sp(){
                padding-left:20px;
            }
            @include md(){
                padding-left:10vw;
            }
            @include lg(){
                padding-left:20vw;
            }
        }
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
        .detail-wrapper{
            position:relative;
            height:3rem;
            margin:50px auto;
            @include sp(){
                width:80%;
            }
            @include md(){
                width:50%;
            }
            @include lg(){
                width:600px;
                height:3.5rem;
            }
            padding:10px 15px;
            background-color:rgba(0,0,0,0.8);
            &:hover{
                cursor:pointer;
            }
        }
        a{
            z-index:10;
            font-size:1.5rem;
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            color:white;   
        }
    }
}
</style>