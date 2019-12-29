<template>
    <div class="about-wrapper">
        <div class="wrapper-60">
            <div class="main-title">
                <img :src='header.img' alt="メイン背景">
                <h1 class="main-title" v-text="header.title"></h1>
            </div>
            <div class="vfor" v-for="data in this.datas" :key="data.title">
                <h2  class="title" v-text="data.title"></h2>
                <div class="center-wrapper columns ">
                    <div class="about-container column is-7">
                        <div class="about-text ">
                            <p v-text="data.text"></p>
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
                        <h2 class="title sub" v-text="data.subtitle"></h2>
                        <p v-text="data.subtext"></p>
                        <div class="sub-text">
                            <div class="about-text">
                                <div class="example" v-for="subexample in data.subexamples" :key="subexample.title">
                                    <p class="subtitle" v-text="subexample.title" ></p>
                                    <p class="subtext" v-text="subexample.text"></p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div class="image column is-5">
                        <div class="column-wrapper">
                            <div class="detail  " v-for="store in stores" :key="store.title">
                                <p style="white-space:pre-wrap; word-wrap:break-word;" class=" info_name" v-text="store.title"></p>
                                <p style="white-space:pre-wrap; word-wrap:break-word;" class="" v-text="store.contents"></p>
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
            stores:[
                {
                    title:'住所',
                    contents:`〒328-0054
                                栃木県栃木市平井町681`
                },
                {
                    title:'電話',
                    contents:'0282-22-1827'
                },
                {
                    title:'営業時間',
                    contents:`茶屋: 10:00 〜 18:00
                                宴会: 11:00 〜 22:00(要予約)`
                },
                {
                    title:'定休日',
                    contents:'不定休'
                },
                {
                    title:'駐車場',
                    contents:`あじさい坂駐車場:約50台
                                店鋪正面:15台ほど`
                },
                {
                    title:'決済方法',
                    contents:'現金のみにて承ります'
                },
            ]
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
    height:200px;
    margin-top:100px;
    margin-bottom:100px;
    position:relative;
    img{
        width:100%;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        position:absolute;
    }
    h1{
        font-size:2.5rem;
        font-weight:bold;
        text-align:center;
        height:200px;
        line-height:200px;
        color:white;
    }
}
.wrapper-60{
    width:60%;
    margin:50px auto;
    @include md(){
        width:80%;
    }
    @include sp(){
        width:90%;
    }
}
.about-container{
    @include md(){
        min-width:400px;
    }
    @include lg(){
        min-width:400px;
    }
}
.about-text{
    p{
        font-weight:bold;
        font-size:1.2rem;
    }
}
.image{
    @include sp(){
        margin-top:40px;
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
</style>