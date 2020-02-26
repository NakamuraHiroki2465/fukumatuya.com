<template>
    <div class="about-wrapper" id="menu">
        <div class="vfor" v-for="(data) in this.datas" :key="data.title" :style="data.menu_style">
            <div class="wrapper-60">
                <div class="vfor_container">
                    <h2  class="title" v-text="data.title"></h2>
                    <div class="center-wrapper columns">
                        <div class="about-container column is-6">
                            <div class="about-text ">
                                <p class="menu-explain" v-text="data.text"></p>
                            </div>
                            <p class="price-title columns">コース料金</p>
                            <div class="price_info_list" v-for="menu in data.menu" :key="menu.price">
                                <p class="price">{{menu.price}}</p>
                            </div>
                        </div>  
                        <div class="image-container column is-6">
                            <div class="image-wrapper">
                                <div class="cp_cssslider">
                                    <!--
                                    <input type="radio" :name="data.title" :id="data.alt + index" checked/>
                                    <label :for="data.alt + index"><img :src="data.img" /></label>
                                    -->
                                    <img :src="data.img" />
                                    
                                    <!--
                                    <input type="radio" :name="data.title" :id="data.alt + 2"/>
                                    <label :for="data.alt + 2"><img :src="data.img" /></label>
                                    <img :src="data.img" />
                                    <input type="radio" :name="data.title" :id="data.alt + 3"/>
                                    <label :for="data.alt + 3"><img :src="data.img" /></label>
                                    <img :src="data.img" />
                                    -->
                                </div>
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
        'datas'
    ]
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.wrapper-60{
    margin:0 auto!important;
}
.vfor{
    width:100%;
    padding:50px 0;
}
.vfor_container{
    margin:0 auto;
    
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
    font-size:2.5rem;
    border-bottom:1px solid rgba(0,0,0,0.3);
    box-shadow:0 5px 10px -10px black;
}
.center-wrapper{
    justify-content:space-between;
}
.price_info{
    margin:15px 0;
    p{
        font-size:1.5rem!important;
        margin:0 10px;
    }
}
.image-wrapper{
    overflow:hidden;
    margin:auto;
    width:400px;
    .sub{
        width:120px;
        margin-right:10px;
    }
    .main{
        width:400px;
        
    }
}
.price-title{
    margin:30px 0;
    font-size:1.5rem!important;
    text-align:center;
}
.price_info_list{
    .price{
        border-bottom:1px solid #b8860b;
        font-size:1.4rem!important;
    }
}
.menu-explain{
    color:rgba(0,0,0,0.6);
}
*, *:before, *:after {
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
.cp_cssslider {
width: 300px;
padding-top: 150px; /* 画像の高さ */
position: relative;
margin: 2em auto;
text-align: center;
}
.cp_cssslider > img {
position: absolute;
left: 0;
top: 0;
transition: all 0.5s;
border-radius: 3px;
/* box-shadow:0px 0px 5px 0px rgba(0,0,0,0.3); */
}
.cp_cssslider input{
display: none;
}
/* サムネイル */
.cp_cssslider label {
margin: 15px 5px 0 5px;
border: 2px solid #ffffff;
display: inline-block;
cursor: pointer;
transition: all 0.5s ease;
opacity: 0.6;
border-radius: 3px;
}
.cp_cssslider label:hover {
opacity: 0.9;
}
.cp_cssslider label img {
display: block;
width:86px;
border-radius: 2px;
}
.cp_cssslider input:checked + label {
border: 2px solid #FF7043;
opacity: 1;
}
.cp_cssslider input~ img {
opacity: 0;
}
.cp_cssslider input:checked + label + img {
opacity: 1;
}
</style>