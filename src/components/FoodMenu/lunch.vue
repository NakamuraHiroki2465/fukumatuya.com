<template>
    <div class="lunch-wrapper">
        <div class="about-wrapper">
            <div class="main-title">
                <img src='@/assets/images/lunch_background.png' alt="福松家のランチ">
                <h1 class="main-title">茶屋について</h1>
                <div class="site-map">
                <p><router-link tag="a" to="/" style="color:white;">トップ</router-link><span>&gt;</span><router-link tag="a" to="/lunch" style="color:white;">茶屋について</router-link></p>
                </div>
            </div>
            <div class="wrapper-60">
                <div class="vfor">
                    <h2  class="title">太平山名物をご存知ですか？</h2>
                    <div class="center-wrapper columns">
                        <div class="about-container column is-7">
                            <div class="about-text ">
                                <p>昔、太平山では参拝者はお賽銭ではなくお米を奉納していました。そのお米をだんごとして参拝者に振舞ったことから太平山だんごは生まれました。<br>また、「夜泣き鳥は災いを呼ぶ」と言われており、夜に泣く鶏は神社に奉納されました。奉納された鶏は繁殖をし、それを参拝者に焼き鳥や玉子焼きとして振舞ったことから名物と呼ばれるようになりました。</p>
                            </div>
                        </div>  
                        <div class="image column is-5">
                            <img src='@/assets/images/shiro-dango1.jpeg' alt="料理長のご挨拶">
                            <p>太平山名物・だんご（税込み300円）</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-wrapper">
            <div class="wrapper-60">
                <div class="vfor">
                    <h2  class="title">観光の合間に一息</h2>
                    <div class="center-wrapper columns ">
                        <div class="about-container column is-7">
                            <div class="about-text ">
                                <p>当店では太平山名物を初めとした、定食や軽食等を提供致しております。自慢のお料理は焼き鳥・玉子焼定食です。太平山に登山や観光のお客様や栃木市の蔵の街の観光のついでなど、ゆっくりと一息つけるような場を提供致しております。<br> また、太平山だんご、玉子焼、焼き鳥のお持ち帰りも承っております。お電話にて事前にご連絡ください。</p>
                            </div>
                        </div>  
                        <div class="image column is-5">
                            <img src='@/assets/images/teishoku.png' alt="料理長のご挨拶">
                            <p>焼き鳥・玉子焼定食 (税込1380円)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <lunchslideshow></lunchslideshow>
        <div class="wrapper60">
            <p class="menu-title has-text-centered">代表的なメニュー</p>
        </div>
        <menudetails :mains="mains"></menudetails>
        <div class="wrapper60">
            <p class="menu-title has-text-centered">全てのメニュー</p>
        </div>
        <div class="wrapper60 menu-wrapper columns  is-multiline">
            <table class="menu column is-5 is-offset-1 ">
                <tr>
                    <th>
                        お料理
                    </th>
                    <th>
                        料金
                    </th>
                </tr>
                <tr v-for="menu in this.menus" :key="menu.name">
                    <td>{{menu.name}}</td>
                    <td>{{menu.price}}&nbsp;円</td>
                </tr>
            </table>
            <table class="menu column is-5 is-offset-1 ">
                <tr>
                    <th>
                        ドリンク
                    </th>
                    <th>
                        料金
                    </th>
                </tr>
                <tr v-for="drink in this.drinks" :key="drink.name">
                    <td>{{drink.name}}</td>
                    <td>{{drink.price}}&nbsp;円</td>
                </tr>
            </table>
        </div>
        <access></access>
    </div>
</template>
<script>
import access from '@/components/Parts/access.vue'
import lunchslideshow from '@/components/Parts/lunchslideshow.vue'
import menudetails from '@/components/Parts/menudetails.vue'
export default {
    components:{
        access,
        lunchslideshow,
        menudetails
    },
    data:function(){
        return{
            mains:[
                {
                    name:'だんご',
                    price:'300',
                    text:'太平山の代表的な名物であるだんごを上新粉と水のみで仕上げています。添加物や無駄なものを一切使っておりませんので、日持ちはいたしませんが、上質で味わい深いだんごをお楽しみいただけます。',
                    relatemenu:false,
                    img:require('@/assets/images/dango-pic.png'),
                    alt:'だんごイラスト'
                },
                {
                    name:'玉子焼',
                    price:'350',
                    text:'門外不出の出汁を使用したふわふわであまじょっぱい風味の玉子焼きをお楽しみいただけます。',
                    img:require('@/assets/images/tamago-pic.png'),
                    alt:'玉子焼きイラスト',
                    relatemenu:[
                        {
                            name:'玉子焼き（単品) 380円',
                        },
                        // {
                        //     name:'玉子焼き定食 750円',
                        // },
                        // {
                        //     name:'焼き鳥玉子焼き定食 1380円',
                        // }
                    ]
                },
                {
                    name:'焼き鳥',
                    price:'540',
                    text:'長年に渡り、つけたし守り続けられた秘伝のたれをご堪能できます。栃木鳥の百日雛と呼ばれる雛鳥を使用しており、柔らかく味のしっかりとついた焼き鳥を是非ご賞味ください。',
                    img:require('@/assets/images/yakitori-pic.png'),
                    alt:'焼き鳥イラスト',
                    relatemenu:[
                        {
                            name:'焼き鳥（単品) 570円',
                        },
                        // {
                        //     name:'焼き鳥定食 940円',
                        // },
                        // {
                        //     name:'焼き鳥玉子焼き定食 1380円',
                        // }
                    ]
                },
            ],
            menus:[
                {
                    name:'だんご',
                    price:'350',
                },
                {
                    name:'焼き鳥',
                    price:'570',
                },
                {
                    name:'玉子焼',
                    price:'380',
                },
                {
                    name:'柚子みそおでん',
                    price:'300',
                },
                {
                    name:'ところ天',
                    price:'300',
                },
                {
                    name:'煮込みおでん',
                    price:'500',
                },
                {
                    name:'肉じゃが',
                    price:'400',
                },
                {
                    name:'もつ煮',
                    price:'500',
                },
                // {
                //     name:'焼き鳥定食',
                //     price:'940',
                // },
                // {
                //     name:'鳥めし',
                //     price:'940',
                // },
                // {
                //     name:'玉子焼定食',
                //     price:'750',
                // },
                // {
                //     name:'焼き鳥玉子焼定食',
                //     price:'1380',
                // },
                {
                    name:'カレーライス',
                    price:'650',
                },
                {
                    name:'山菜そば',
                    price:'600',
                },
                {
                    name:'山菜うどん',
                    price:'600',
                },
                {
                    name:'なめこそば',
                    price:'600',
                },
                {
                    name:'なめこうどん',
                    price:'600'
                }
            ],
            drinks:[
                {
                    name:'ビール',
                    price:'700'
                },
                {
                    name:'レモンハイ',
                    price:'420',
                },
                {
                    name:'コーラ',
                    price:'210',
                },
                {
                    name:'ジュース各種',
                    price:'210'
                },
                {
                    name:'お酒各種',
                    price:'450'
                }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.menu{
    padding:100px 0;
    margin:0 auto;
    td{
        padding:10px 80px 10px 0;
        font-size:1.2rem;
        @include sp(){
            width:100%;
            padding:10px 0;
        }
    }
    th{
        font-size:1.5rem;
    }
    td,th{
        white-space:nowrap;
        
    }
    tr{
        border-bottom:1px solid brown;
    }
}
.menu-title{
    font-size:2rem!important;
}
.lunch-wrapper{
    width:100vw;
    overflow:hidden;
}
.about-wrapper{
    .vfor{
        margin:100px auto;
    }
    .main-title{
        height:300px;
        overflow:hidden;
        margin-bottom:100px;
        position:relative;
        width:100%;
        img{
            width:100%;
            min-width:990px;
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
}
</style>