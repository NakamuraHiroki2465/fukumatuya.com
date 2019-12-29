<template>
    <div class="about-wrapper" id="menu">
        <div class="wrapper-60">
            <div class="vfor" v-for="data in this.datas" :key="data.title">
                <h2  class="title" v-text="data.title"></h2>
                <div class="center-wrapper columns">
                    <div class="about-container column is-6">
                        <div class="about-text ">
                            <p v-text="data.text"></p>
                        </div>
                        <p class="price-title columns">コース料金</p>
                        <div class="price_info_list ">
                            <div class="price_info" v-for="menu in data.menu" :key="menu.price">
                                <p class="price">{{menu.price}}</p>
                            </div>
                        </div>
                    </div>  
                    <div class="image-container column is-6">
                        <div class="image-wrapper">
                            <img :src="data.img" :alt="data.alt">
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
.price{
    font-size:1.5rem;
    font-weight:bold;
}
.price_info{
    margin:15px 0;
    p{
        font-size:1.5rem!important;
        margin:0 10px;
    }
}
.image-wrapper{
    width:90%;
    overflow:hidden;
    margin:auto;
    text-align:center;
    img{
        width:inherit;
        height:inherit;
    }
}
.price-title{
    margin:30px 0;
    font-size:1.5rem!important;
    text-align:center;
}
.price_info_list{
    border:5px double #cc9900;
    .price{
        text-align:center;
    }
}
</style>