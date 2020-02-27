<template>
    <div class="about-wrapper">
        <div class="main-title">
          <img :src='header.img' alt="メイン背景">
          <h1 class="main-title" v-text="header.title"></h1>
            <div class="site-map">
                <p><router-link tag="a" to="/" style="color:white;">トップ</router-link>&nbsp;>&nbsp;<router-link tag="a" to="/lunch" style="color:white;">茶屋について</router-link></p>
            </div>
        </div>
        <div class="wrapper-60">
            <div class="vfor" v-for="data in this.datas" :key="data.title">
                <h2  class="title" v-text="data.title"></h2>
                <div class="center-wrapper columns">
                    <div class="about-container column is-7">
                        <div class="about-text ">
                            <p v-text="data.text"></p>
                        </div>
                    </div>  
                    <div class="image column is-5">
                        <img :src='data.img' alt="料理長のご挨拶">
                        <p v-text="data.imgtitle"></p>
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
    ]
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
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
</style>