<template>
    <div class="about-wrapper">
        <div class="wrapper-60">
            <div class="vfor" v-for="main in this.mains" :key="main.name">
                <div class="flex-wrapper">
                    <h2  class="title" v-text="main.name"></h2>
                    <img :src="main.img" :alt="main.alt">
                </div>
                <div class="center-wrapper ">
                    <div class="about-container ">
                        <div class="about-text ">
                            <p v-text="main.text"></p>
                        </div>
                    </div>  
                </div>
                <div class="sub-menu" v-if="main.relatemenu">
                    <p class="sub-title sub-text">料理を使ったメニュー</p>
                    <div class="image-wrapper columns">
                        <div class="image column is-4" v-for="relatemenu in main.relatemenu" :key="relatemenu.name">
                            <p class="sub-text" v-text="relatemenu.name"></p>
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
        'mains',
    ]
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.vfor{
    margin:100px auto;
    @include sp(){
        margin:100px auto;
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
        margin:10px auto;
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
        margin-top:20px;
        padding:5px;
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
        white-space:nowrap!important;
        @include sp(){
            text-align:center;
            margin:5px 0;
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
.sub-menu{
    margin:50px 0;
    padding:10px 10px;
    @include sp(){
        padding:10px 10px;
    }
    .sub-title{
        border-bottom:1px solid brown;
        font-size:1.2rem;
        @include sp(){
            text-align:center;
        }
    }
}
.flex-wrapper{
    position:relative;
    h2{
        @include sp(){
            text-align:center;
        }
    }
    img{
        position:absolute;
        top:30%;
        left:25%;
        transform:translate(-50%,-50%);
        @include sp(){
            left:20%;
            width:25%;
        }
    }
}

</style>