<template>
    <div class="detail-info">
        <h3 class="aboutstore">店鋪概要</h3>
        <div class="flex-wrapper columns is-multiline">
            <div class="column-wrapper column is-7-desktop">
                <div class="detail  columns is-mobile" v-for="store in stores" :key="store.title">
                    <p class="column is-2 is-2-mobile info_name" v-text="store.title"></p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile" v-text="store.contents"></p>
                </div>
            </div>
            <div class="image-wrapper column is-5-desktop">
                <img src="@/assets/images/storeinfoimage.png" alt="福松家外観">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'storeinfo',
    data:function(){
        return{
            stores:[
                {
                    title:'社名',
                    contents:'福松家'
                },
                {
                    title:'代表',
                    contents:'中村義重'
                },
                {
                    title:'住所',
                    contents:'〒328-0054 栃木県栃木市平井町681'
                },
                {
                    title:'電話',
                    contents:'0282-22-1827'
                },
                {
                    title:'営業時間',
                    contents:"茶屋: 10:00 〜 18:00/ 宴会: 11:00 〜　22:00(要予約)"
                },
                {
                    title:'定休日',
                    contents:'不定休'
                },
                {
                    title:'駐車場',
                    contents:'あじさい坂駐車場:約50台,店鋪正面:15台ほど'
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
.detail{
    border-bottom:1px solid brown;
    font-weight:bold;
    width:100%;
    .info_name{
        color:brown;
    }
}
.detail-info{
    width:60%;
    margin:100px auto 0 auto;
    @include sp(){
        width:90%;
    }
    @include md(){
        width:80%;
    }
}
.aboutstore{
    font-size:2rem;
    font-weight:bold;
    border-bottom:1px solid rgba(0,0,0,0.3);
    box-shadow:0 5px 10px -10px black;
    margin-bottom:1.5rem;
}
.column-wrapper{
    @include lg(){
        min-width:500x;
    }
    @include md(){
        min-width:500px;
    }
}
.image-wrapper{
    img{
        @include lg(){
            min-width:350px;
        }
        @include md(){
            min-width:350px;
        }
    }
}
.info_name{
    white-space:nowrap;
}
</style>