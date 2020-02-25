<template>
    <div class="container-wrapper">
        <div 
            class="message-wrapper"
            v-for="message in messages"
            :key="message.title"
        >
            <div 
                
                class="wrapper" 
            >
                <div class="title">
                    <h1  class="has-text-centered">{{message.title}}</h1>
                    <p class="has-text-left">{{message.subexplain}}</p>
                </div>
                <div class="flex-wrapper">
                    <div class="container-image">
                        <div class="front-image">
                            <img  :src="message.frontimage" :alt="message.frontalt">
                        </div>
                    </div>
                    <div class="container-text">
                        <div class="text  has-text-centered-mobile">
                            <h3 class="subtitle" >【{{message.subtitle}}】</h3>
                            <p v-text="message.mainMessage"></p>
                            <div class="for_next">
                                <div class="detail for_access course ">
                                    <router-link tag="a" to="dinner"  class="has-text-centered relative">
                                        <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                        <p class="has-text-centered">コースをみる</p>
                                    </router-link>
                                </div>
                                <div class="detail for_access course ">
                                    <a href="#room"  class="room has-text-centered relative">
                                        <img src="@/assets/images/rightvector.svg" alt="矢印アイコン" class="absolute">
                                        <p class="has-text-centered">{{message.room}}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="container-detail">
                    <ul class="columns is-mobile">
                        <router-link :to='message.url' tag="a" class="column is-10 is-offset-1 list" >
                            <span></span>
                            <span></span>
                            <div v-for="detail in message.detail" :key="detail.text">
                                <a :href="detail.number" style="color:black;" v-text="detail.text"></a>
                            </div>
                        </router-link> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:[
        'messages'
    ]
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';
.flex-wrapper{
    display:flex;
    justify-content:space-between;
}
.wrapper{
    padding:50px 0;
    width:80%;
    margin:100px auto 0 auto;
    @include lg(){
        min-width:1024px;
    }
}

.title h1{
    white-space:nowrap;
    font-weight:bold;
    font-size:2rem;
    position:relative;
    &:after{
        content:'';
        position:absolute;
        top:150%;
        left:10%;
        width:70vw;
        height:1px;
        background-color:brown;
        @include sp(){
            left:50%;
            transform:translate(-50%,-50%);
        }
    }
}
.container-text{
    @include sp(){
        width:100%;
    }
    @include md(){
        width:100%;
    }
}
.text{
    white-space:pre-wrap;
    font-weight:bold;
    .subtitle{
        text-align:center;
    }
    @include lg(){
        width:600px;
    }
    @include sp(){
        padding-top:10px;
        margin:auto;
    }
    @include md(){
        margin:auto;
        width:600px;
    }
    p{
        font-size:1.3rem;
    }
}
.text{
    h3{
        font-weight:bold;
        font-size:1.7rem;
        padding:30px 0;
        white-space:nowrap;
    }
}

.container-image{
    margin:auto;
    padding:30px 0;
    width:300px;
    @include md(){
        display:none;
    }
    @include sp(){
        display:none;
    }
    .front-image,.after-image{
        position:relative;
        width:100%;
        text-align:center;
        img{
            max-width:600px;
            width:300px;
        }
        @include sp(){
            margin:auto;
            img{
                margin:auto;
                width:200px;
            }
        }
        @include md(){
            img{
                margin:auto;
                width:200px;
            }
        }
    }
    .front-image{
        z-index:99;
    }
    .after-image{
        z-index:100;
    }
}
.container-detail{
    width:80%;
    margin:auto;
    height:100px;
    padding-top:30px;
    @include sp(){
        width:100%;
    }
    .list{
        border:3px solid brown;
        text-align:center;
        transition:background-color 0.5s;
        position:relative;
        background-color:transparent;
        span{
            display:none;
            position:absolute;
            top:50%;
            right:20px;
            background-color:brown;
            width:10px;
            height:2px;
            @include sp(){
                display:block;
            }
        }
        span:nth-child(1){
            transform:rotate(45deg);
            transform-origin: 0 1px;
        }
        span:nth-child(2){
            transform:rotate(-45deg);
            transform-origin: 0 1px;
        }
        &:hover{
            background-color:white;
            transition:background-color 0.5s ;
            span{
                display:block;
            }
        }
        a{
            font-weight:bold;
            font-size:1.2rem;
        }
    }
}
.course{
    height:50px;
}
.detail{
    width:100%;
    @include sp(){
        width:80%;
    }
}
  .absolute{
      top:50%;
      left:5px;
      width:30px!important;
      transform:translateY(-50%);
  }
  .room{
      cursor:not-allowed;
  }
</style>