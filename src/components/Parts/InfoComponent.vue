<template>
    <div class="container-wrapper">
        <div 
            class="message-wrapper"
            v-for="message in messages"
            :key="message.title"
        >
            <div 
                :class="{'wrapper-80':!sp}" 
                class="wrapper" 
            >
                <div class="title">
                    <h1  class="has-text-centered">{{message.title}}</h1>
                    <p class="has-text-left">{{message.subexplain}}</p>
                </div>
                <div class="flex-wrapper columns">
                    <div class="container-image column is-7">
                        <div class="front-image">
                            <img  :src="message.frontimage" :alt="message.frontalt">
                        </div>
                    </div>
                    <div class="container  column is-5">
                        <div class="text  has-text-centered-mobile">
                            <h3 >【{{message.subtitle}}】</h3>
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
                            <a  style="color:black;" v-text="message.detail" ></a>
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
.wrapper{
    margin:100px 0 0 0;
    padding:50px 0;
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
.text{
    white-space:pre-wrap;
    font-weight:bold;
    @include sp(){
        padding-top:10px;
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
    @include lg(){
        width:80%;
    }
    .front-image,.after-image{
        position:relative;
        width:100%;
        text-align:center;
        img{
            max-width:600px;
            width:80%;
        }
        @include sp(){
            margin:auto;
            img{
                margin:auto;
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
        width:50%;
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