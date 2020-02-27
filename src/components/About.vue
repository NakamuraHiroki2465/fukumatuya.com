<template>
    <div class="about-wrapper">
    <div class="about-wrapper">
        <div class="main-title">
          <img src="@/assets/images/mainbackground.png" alt="メイン背景">
          <h1 class="main-title">福松家について</h1>
            <div class="site-map">
              <p><router-link tag="a" to="/" style="color:white;">トップ</router-link>&nbsp;>&nbsp;<router-link tag="a" to="/about" style="color:white;">福松家について</router-link></p>
            </div>
        </div>
        <div class="wrapper-60">
            <div class="vfor">
                <h2  class="title">料理長のご挨拶</h2>
                <div class="center-wrapper columns">
                    <div class="about-container column is-7">
                        <div class="about-text ">
                            <p>あじさい坂入口、太平山神社表参道の玄関口に店を構えて100年以上。<br>時代と共に多くのお客様に愛され続けて成長して参りました。</p>
                            <p>当店には二つの特徴があります。一つは、だんご、焼鳥、玉子焼、と言った太平山名物を気軽に味わっていただける昔ながらの茶店。昭和のレトロな雰囲気を残す空間で、のんびり一休みいただけます。</p>
                            <p>そしてもう一つは、個室にて季節料理を楽しんでいただけます(要予約)。桜や紫陽花、紅葉など、山の素晴らしい景色を眺めながら、日本料理に舌鼓。お祝いや各種法要などの他にも、サークルやクラス会、家族の記念日などにいかがですか？2名様より承っております。</p>
                            <p>当店では、くつろげる雰囲気を大切にし、お客様が心の洗濯をすることが出来れば幸いと存じます。歴史のある老舗ではございますが、初心を忘れずいつまでもお客様に愛されるお店を目指します。従業員一同、心よりお待ちしております。</p>
                        </div>
                    </div>  
                    <div class="image column is-5">
                        <img src='@/assets/images/father-pic.png' alt="料理長のご挨拶">
                        <p>料理長 : 中村義重</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="detail-info">
        <h3 class="aboutstore">店鋪概要</h3>
        <div class="flex-wrapper columns is-multiline">
            <div class="column-wrapper column is-7-desktop">
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">社名</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">福松家</p>
                </div>
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">代表</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">中村義重</p>
                </div>
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">住所</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">〒328-0054 栃木県栃木市平井町681</p>
                </div>
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">電話</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">0282-22-1827</p>
                </div>
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">営業時間</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">茶屋&nbsp;:&nbsp;10:00&nbsp;～&nbsp;18:00<br>宴会&nbsp;:&nbsp;11:00&nbsp;～&nbsp;22:00（要予約）</p>
                </div>
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">定休日</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">不定休</p>
                </div>
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">駐車場</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">あじさい坂駐車場&nbsp;:&nbsp;約50台<br>店舗正面&nbsp;:&nbsp;15台ほど</p>
                </div>
                <div class="detail  columns is-mobile">
                    <p class="column is-2 is-2-mobile info_name">決済方法</p>
                    <p class="column is-10 is-offset-1-mobile is-9-mobile">現金のみにて承ります</p>
                </div>
            </div>
            <div class="image-wrapper column is-5-desktop">
                <img src="@/assets/images/storeinfoimage.png" alt="福松家外観">
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.about-wrapper{
    width:100vw;
    overflow:hidden;
}
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