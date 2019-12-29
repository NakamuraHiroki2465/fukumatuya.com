<template>
    <div class="lunch-wrapper">
        <detail :datas="datas" :header="header"></detail>
        <subdetail :subdatas="subdatas"></subdetail>
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
            header:{
                title:'茶屋について',
                img:require('@/assets/images/lunch_background.png'),
            },
            subdatas:[
                {
                    title:'観光の合間に一息',
                    text:'当店では太平山名物を初めとした、定食や軽食等を提供致しております。自慢のお料理は焼き鳥・玉子焼定食です。太平山に登山や観光のお客様や栃木市の蔵の街の観光のついでなど、ゆっくりと一息つけるような場を提供致しております。また、太平山だんご、玉子焼、焼き鳥のお持ち帰りも承っております。お電話にて事前にご連絡ください。',
                    img:require('@/assets/images/teishoku.png'),
                    imgtitle:'焼き鳥・玉子焼定食 (税込1380円)'
                },
            ],
            datas:[
                {
                    title:'太平山名物をご存知ですか？',
                    text:'昔、太平山では参拝者はお賽銭ではなくお米を奉納していました。そのお米をだんごとして参拝者に振舞ったことから太平山だんごは生まれました。また、「夜泣き鳥は災いを呼ぶ」と言われており、夜に泣く鶏は神社に奉納されました。奉納された鶏は繁殖をし、それを参拝者に焼き鳥や玉子焼きとして振舞ったことから名物と呼ばれるようになりました。',
                    img:require('@/assets/images/shiro-dango1.jpeg'),
                    imgtitle:'太平山名物・だんご'
                }
            ],
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
                            name:'玉子焼き（単品) 350円',
                        },
                        {
                            name:'玉子焼き定食 750円',
                        },
                        {
                            name:'焼き鳥玉子焼き定食 1380円',
                        }
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
                            name:'焼き鳥（単品) 540円',
                        },
                        {
                            name:'焼き鳥定食 940円',
                        },
                        {
                            name:'焼き鳥玉子焼き定食 1380円',
                        }
                    ]
                },
            ],
            menus:[
                {
                    name:'だんご',
                    price:'300',
                },
                {
                    name:'焼き鳥',
                    price:'540',
                },
                {
                    name:'玉子焼',
                    price:'350',
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
                {
                    name:'焼き鳥定食',
                    price:'940',
                },
                {
                    name:'鳥めし',
                    price:'940',
                },
                {
                    name:'玉子焼定食',
                    price:'750',
                },
                {
                    name:'焼き鳥玉子焼定食',
                    price:'1380',
                },
                {
                    name:'カレーライス',
                    price:'600',
                },
                {
                    name:'山菜そば',
                    price:'500',
                },
                {
                    name:'山菜うどん',
                    price:'500',
                },
                {
                    name:'なめこそば',
                    price:'500',
                },
                {
                    name:'なめこうどん',
                    price:'500'
                }
            ],
            drinks:[
                {
                    name:'ビール',
                    price:'630'
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
                    price:'420'
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
</style>