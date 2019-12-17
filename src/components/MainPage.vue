<template>
    <div>
        <div class="scroll-wrapper">
            <slideShow class="scroll">
            </slideShow>
        </div>
        <InfoComponent :messages="messages">
        </InfoComponent>
        <div class="sub-info columns is-mobile is-multiline">
            <div class="aboutfukumatuya column is-4 is-8-mobile is-offset-2">
                <img src="@/assets/images/fukumatuya.jpg" alt="福松家外観">
                <p class="aboutinfo">福松家について</p>
            </div>
            <div class="oohira-san column is-4 is-8-mobile ">
                <img src="@/assets/images/oohirasan.jpg" alt="太平山の観光">
                <p class="aboutinfo">太平山観光について</p>
            </div>
        </div>
        <div class="detail-info">
            <div class="detail columns is-mobile" v-for="info in infos" :key="info.name">
                <p class="column is-3 is-3-mobile is-offset-1-mobile info_name" v-text="info.name"></p>
                <p class="column is-9 is-8-mobile" v-text="info.value"></p>
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
                    title:"割烹料理（完全予約制）",
                    subtitle:"店主自慢の極上創作料理",
                    mainMessage:"都会を離れ大自然の中、清流の響き鳥のさえずりを聞きながら日本料理に舌鼓。お客様が心身共にリフレッシュしていただくことをモットーに、ゆったりとした一時を過ごしていただけます。手作りにこだわり個室のお座敷にて創作料理を堪能していただきます。",
                    frontimage:require('@/assets/images/enkai-basic.jpg'),
                    frontalt:"宴会場スタンダードコース",
                    detail:"コース詳細・料金一覧"
                },
                {
                    title:"太平山観光の休憩に",
                    subtitle:"太平山名物と共に一息",
                    mainMessage:"",
                    frontimage:require('@/assets/images/greeting-wrapper.jpg'),
                    frontalt:"店舗外観",
                    detail:"メニュー詳細・料金一覧",
                    detail2:"太平山観光について"
                }
            ],
            infos:[
                {
                    name:"所在地",
                    value:"栃木県栃木市平井町681"
                },
                {
                    name:"駐車場",
                    value:"あじさい坂駐車場:約50台,店鋪正面:15台ほど"
                },
                {
                    name:"営業時間",
                    value:"9:00~18:00 (予約時の時間は異なります))"
                },
                {
                    name:"定休日",
                    value:"不定休"
                }
            ]
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
    &:before{
        content:'';
        position:absolute;
        top:80%;
        left:20%;
        width:2px;
        height:200px;
        background-color:black;
        z-index:999;
        @include sp(){
            height:100px;
        }
    }
    &:after{
        content:'';
        position:absolute;
        top:calc(80% + 200px);
        left:20%;
        width:15px;
        height:2px;
        background-color:black;
        z-index:999;
        transform:translateX(-100%)rotate(45deg);
        transform-origin:100% 100%;
        @include sp(){
            top:calc(80% + 100px);
        }
    }
}
.scroll{
    overflow:hidden;
    @include sp(){
        &:before{
            content:'';
            display:none;
        }
    }
    &:before{
        content:'Scroll';
        position:absolute;
        font-size:2.5rem;
        color:white;
        top:80%;
        left:calc(20% + 30px);
        z-index:1000;
    }
    &:after{
        content:'';
        position:absolute;
        top:80%;
        left:20%;
        width:2px;
        height:200px;
        background-color:white;
        z-index:1000;
        @include sp(){
            height:100px;
        }
    }
}
.sub-info{
    margin-top:50px;
    .aboutfukumatuya,.oohira-san{
        position:relative;
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
    .info_name{
        color:brown;
    }
}
.detail-info{
    width:50%;
    margin:100px auto 0 auto;
    @include sp(){
        width:100%;
    }
    @include md(){
        width:70%;
    }
}
</style>