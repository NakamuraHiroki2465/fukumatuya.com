<template>

    <header>
        <template v-if="sp"> 
          <div class="header-opener" v-on:click="hasMenu()">
              <span v-bind:class="{open:!isActive,close:isActive}"></span>
              <span v-bind:class="{open:!isActive,close:isActive}"></span>
              <span v-bind:class="{open:!isActive,close:isActive}"></span>
          </div>
        </template>
        <div class="header-wrapper">
          <template v-if="!isActive || !sp">
            <div class="header-main">
                <div class="title">
                  <router-link to="/" tag="h1" class="title__content">福松家</router-link>
                  <p class="sub">-栃木市、太平山の割烹-</p>
                </div>
                <div class="reservation ">
                  <h4 class="reserve__content"><span class="circle"></span>ご予約はこちらまで</h4>
                  <p class="phonenumber">
                    電話番号&nbsp;:&nbsp;
                    <span><br v-if="sp">0282-22-1827</span>
                   <!--  <img src="@/assets/images/sakura.png" alt="桜"> -->
                  </p>
                  <p class="time" v-if="!sp">
                    営業時間&nbsp;:&nbsp;9:00&nbsp;～&nbsp;18:00
                  </p>
                  <p class="time kaiseki" v-if="!sp">
                    (会席料理のご予約時のみ23時まで)
                  </p>
                </div>
  
            </div>
          </template>
          <template >
                <div v-if="!sp" class="menu is-paddingless">
                  <ul  class="desktop-menu">
                      <router-link to="/dinner" tag="li"><img class="main" src="@/assets/images/menu/dinner.png" alt="懐石料理"></router-link>

                      <router-link to="/lunch" tag="li"><img class="main" src="@/assets/images/menu/lunch.png" alt="茶屋"></router-link>
                      
                      <router-link to="/about" tag="li"><img class="main" src="@/assets/images/menu/about.png" alt="福松家について"></router-link>
          
                      <!-- サブメニュー -->
                      <router-link to="/bento" class="vertical sub" tag="li">
                        <img  class="icon" src="@/assets/images/bottomvector.svg" alt="お弁当メニュー">
                        <p class="is-small">お弁当メニュー</p>
                      </router-link>
                      <router-link to="/contact" class="vertical sub" tag="li">
                        <img  class="icon" src="@/assets/images/bottomvector.svg" alt="お問い合わせ">
                        <p class="is-small">お問い合わせ</p>
                      </router-link>
                      <router-link to="/access" class="vertical sub" tag="li">
                        <img class="icon" src="@/assets/images/bottomvector.svg" alt="アクセス">
                        <p class="is-small">アクセス</p>
                      </router-link>

                  </ul>
                </div>
          </template> 
        </div>
        <div v-if="isActive && sp" class="menu is_fixed column is-5-desktop is-12-mobile is-paddingless">
          <ul  class="sp-menu" >
            <div class="main-wrapper">
              <div class="flex-item">
                <router-link to="/" tag="li" class="main_menu"><p @click="hasMenu">トップページ</p></router-link>

                <router-link to="/about" tag="li" class="main_menu"><p @click="hasMenu">福松家の魅力</p></router-link>
                
                <router-link to="/lunch" tag="li" class="main_menu"><p @click="hasMenu">茶屋紹介</p></router-link>

                <router-link to="/dinner" tag="li" class="main_menu"><p @click="hasMenu">会席料理紹介</p></router-link>

                <router-link to="/bento" tag="li" class="main_menu"><p @click="hasMenu">お弁当紹介</p></router-link>
              </div>
            </div>
            <div class="sub-wrapper">
              <router-link  to="/contact" tag="li"><p @click="hasMenu">お問い合わせ</p></router-link>
              
              <router-link to="/access" tag="li"><p @click="hasMenu">アクセス</p></router-link>
            </div>
            <div class="instagram">
              <a href="https://www.instagram.com/fukumatuya_29028/">Follow Instagram</a>
            </div>
          </ul>
        </div>
    </header>
</template>
<script>
export default {
    name:'header',
    data:function(){
      return{
        sp:false,
        width:window.innerWidth,
        isActive:false,
      }
    },
    methods:{
      handleResize:function(){
        this.width= window.innerWidth;
        if(this.width < 769|| navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
          this.sp = true
        }else{
          this.sp = false
        }
      },
      hasMenu:function(){
        this.isActive = !this.isActive
      },
    },
    mounted:function(){
      if (this.width < 769 || navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        this.sp = true
      }else{
        this.sp = false
      }
      window.addEventListener('resize',this.handleResize)
    },
    beforeDestroy:function(){
      window.removeEventListener('resize',this.handleResize)
    }
}
</script>
<style scoped lang="scss"> 
@import '@/assets/variables.scss';
@import '@/assets/menu-opnener.scss';

.is_fixed{
  position:fixed;
  transform:translate3d(0,0,0);
  height:100vh;
  top:-6px;
  margin:0;
}
header{
  position:relative;
  width:100%;
  height:200px;
  margin:0 auto;
  background-color:#f6efdf;
  z-index:501;
  font-family:'はんなり';
  color:black;
  border-bottom:6px solid brown;
  border-top:6px solid brown;
  background-image: url("https://www.transparenttextures.com/patterns/black-thread-light.png");
  .header-wrapper{
    width:1024px;
    height:100%;
    display:flex;
    justify-content:space-between;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    @include sp(){
      width:100%;
    }
    @include md(){
      width:100%;
    }
    .header-main{
      padding:0 0 0 50px;
      height:100%;
      width:inherit;
      @include md(){
        padding:0 0 0 10px !important;
      }
      @include sp(){
        margin:0;
        padding:20px 0!important;
        .sub,.reserve_content,.time,.title__content{
          line-height:1.2rem!important;
          height:1.2rem!important;
        }
      }
      .title{
        display:flex;
        height:3rem;
        margin-bottom:0;
        @include sp(){
          height:1.5rem;
        }
        h1,p{
          margin:0;
        }
        p{
          font-size:1.2rem;
          line-height:3rem;
          height:3rem;
          white-space:nowrap; 
          margin:0 0 0 5%;
          letter-spacing:-0.1rem;
        }
        h1{
          font-size:2.2rem;
          height:3rem;
          line-height:3rem;
          white-space:nowrap;
          font-weight:bold;
          margin-left:10%;
          cursor:pointer;
        }
      }
      .reservation{
        border:5px double brown;
        padding:0;
        margin:10px auto;
        margin-left:0;
        height:8rem;
        width:450px;
        overflow:hidden;
        @include lg(){
          min-width:450px;
        }
        @include md(){
          min-width:450px;
        }
        @include sp(){
          width:90%;
          margin:10px auto;
          height:7rem;
        }
        h4{
          white-space:nowrap;
          font-size:1.3rem;
          margin:0;
          padding-left:10%;
          position:relative;
          z-index:2;
          .circle{
            width:10px;
            height:10px;
            border-radius:50%;
            background-color:black;
            position:absolute;
            top:50%;
            left:20px;
          }
        }
        .phonenumber{
          position:relative;
          font-size:1.5rem;
          white-space:nowrap;
          margin:0;
          padding-left:10%;
          background:linear-gradient(to right,rgba(192,192,192,0.3),rgba(255,255,255,0.6) 10%,rgba(255,255,255,0.6) 90%,rgba(192,192,192,0.3) );
          @include sp(){
            font-size:1.5rem!important;
            height:4rem;
            line-height:2rem;
          }
          span{
            color:brown;
            letter-spacing:0.1rem;
            z-index:3;
            position:relative;
          }
/*           img{
              position:absolute;
              top:0;
              left:50%;
              transform:translate(0,-40%);
              width:50%;
              z-index:0;
          } */
        }
        .time{
          height:auto;
          padding-left:10%;
          white-space:nowrap;
          position:relative;
          z-index:2;
        }
        .kaiseki{
          font-size:1rem;
        }
      }
      .sub-menu{
        ul{
          height:3rem;
          line-height:3rem;
          
          li{
            font-weight:bold!important;
            &:hover{
              cursor:pointer;
            }
            a{
              color:black;
            }
          }
        }
      }
    }
    .menu{
      height:100%;
      @include sp(){
        width:calc(100% - 60px);
        margin:0 auto;
        padding-left:0!important;
        ul{
          width:100%;
        }
      }
      .desktop-menu{
        display:flex;
        width:calc(100% - 60px);
        height:100%;
        margin:0;
        padding:0;
        li{
          list-style:none;
          position:relative;
          margin:0;
          display:inline;
          height:100%;
        }
      }
      .main{
        min-width:110px;
        transition:border 0.5s;
        border:2px solid rgba(255,255,255,0.5);
        vertical-align:middle;
        &:hover{
          border:2px solid rgba(255,255,255,1);
          transition:border 0.5s;
          cursor:pointer;
        }
      }
    }
  }
}
.vertical{
  writing-mode:vertical-rl;
  position:relative;
  padding-left:15px;
  padding-right:15px;
  padding-top:25px;
  cursor:pointer;
}
.icon{
  width:1.2rem;
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);

}
.main_menu{
  p{
    color:#f5f5f5!important;
    font-size:1.3rem!important;
  }
}
.main-wrapper{
  border-bottom:1px solid white;
  width:80%;
  margin:auto;
  height:60%;
  display:flex;
  position:relative;
}
.sub-wrapper{
  width:80%;
  margin:auto;
  border-bottom:1px solid white;
  li{
    height:40px!important;
    line-height:40px!important;
  }
}
.instagram{
  width:80%;
  margin:auto;
  text-align:center;
  position:relative;
  margin-top:15px;
  a{
    color:rgba(255,255,255,0.7);
    font-size:1.3rem!important;
  }
}
.flex-item{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  height:230px;
}
.is-small{
  font-size:1rem;
}
.none{
  display:none;
}
.sp-menu{
  width:100vw;
  height:100vh;
  background-color:#660000;
  z-index:500;
  li{
    height:60px;
    line-height:60px;
      &:hover{
      cursor:pointer;
    }
  }
  p{
    text-align:center;
    color:#c0c0c0;
  }
}
</style>