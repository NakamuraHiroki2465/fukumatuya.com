<template>
    <div class="wrapper-60">
        <div class="main-title">
            <img :src="header.img" :alt="header.alt">
            <h1 class="main-title" v-text="header.title"></h1>
        </div>
        <div class="vfor" v-for="data in this.datas" :key="data.title">
            <h2 class="title" v-text="data.title"></h2>
            <div class="center-wrapper">
                <div class="about-container columns">
                    <div class="about-text column is-6">
                        <p v-text="data.text"></p>
                    </div>
                    <div class="column-wrapper column is-6">
                        <div class="detail  columns is-multiline" v-for="store in stores" :key="store.title">
                            <p class="column is-2-desktop is-12-tablet info_name" v-text="store.title"></p>
                            <div class="detail-container column is-10-desktop is-12-tablet is-offset-1-mobile">
                                <p v-for="content in store.contents" :key="content" v-text="content"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="reservation">
            <p class="phone_index">お問い合わせはこちらまで</p>
            <p class="phone">TEL:0282-22-1827</p>
            <p class="store_time">営業時間 : 10:00〜18:00</p>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            header:{
                img:require('@/assets/images/enkai-jyou.jpg'),
                alt:'お問い合わせ',
                title:'お問い合わせ'
            },
            datas:[
                {
                    title:'栃木市で会席料理をお求めの方は福松家へ是非ご相談ください',
                    text:'当店ホームページをご覧いただき、誠に有難うございます。当店は栃木市でも屈指の美食、創作料理にこだわる会席料理店です。それぞれのお客様の要望に沿えるよう、できうる限りのご相談に乗ります。まずはお電話から、お気軽にご相談ください。',
                }
            ],
            stores:[
                {
                    title:'営業時間',
                    contents:["茶屋: 10:00 〜 18:00/",
                             "宴会: 11:00 〜　22:00(要予約)"
                             ]
                },
                {
                    title:'定休日',
                    contents:['不定休']
                }
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
    height:300px;
    margin-top:50px;
    margin-bottom:50px;
    position:relative;
    overflow:hidden;
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
        height:300px;
        line-height:300px;
        color:white;
        margin:0;
        white-space:nowrap;
        @include sp(){
            white-space:pre-wrap;
        }
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
    margin:50px auto;
    p{
        font-weight:bold;
        font-size:1.2rem;
    }
}
.image{
    @include sp(){
        margin-top:40px;
    }
    img{
        min-width:250px;
        max-width:280px;
        @include sp(){
            width:150px;
            margin:auto;
        }
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
h2{
    white-space:nowrap;
    @include sp(){
        white-space:pre-wrap;
    }
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
.detail{
    border-bottom:1px solid brown;
    font-weight:bold;
    width:100%;
    p{
        white-space:nowrap;
    }
    .info_name{
        color:brown;
    }
}
.column-wrapper{
    margin:50px auto;
    padding:10px 10px;
}
</style>