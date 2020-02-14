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
            <div class="header-main ">
                <div class="title">
                  <router-link to="/" tag="h1">福松家</router-link>
                  <p class="sub">-栃木市、太平山の割烹-</p>
                </div>
                <div class="reservation ">
                  <h4><span class="circle"></span>ご予約はこちらまで</h4>
                  <p class="phonenumber">電話番号&nbsp;:&nbsp;<span>0282-22-1827</span></p>
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
                <div v-if="isActive && sp" class="menu column is-5-desktop is-12-mobile is-paddingless">
                  <ul  class="sp-menu">
                    <div class="main-wrapper">
                      <div class="flex-item">
                        <router-link to="/" tag="li" class="main_menu"><p @click="hasMenu">トップページ</p></router-link>

                        <router-link to="/about" tag="li" class="main_menu"><p @click="hasMenu">福松家の魅力</p></router-link>
                        
                        <router-link to="/lunch" tag="li" class="main_menu"><p @click="hasMenu">茶屋紹介</p></router-link>

                        <router-link to="/dinner" tag="li" class="main_menu"><p @click="hasMenu">会席料理紹介</p></router-link>
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
          </template> 
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
    width:950px;
    height:100%;
    display:flex;
    justify-content:space-between;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    .header-main{
      padding:0 0 0 50px!important;
      height:100%;
      @include sp(){
        margin:0;
        padding:20px 30px!important;
        h1,h4,p{
          line-height:1.2rem!important;
          height:1.2rem!important;
        }
      }
      .title,.reservation{
        width:auto;
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
          padding-left:10px;
          cursor:pointer;
        }
      }
      .reservation{
        border:5px double brown;
        padding:0;
        margin:25px auto;
        margin-left:0;
        height:6rem;
        min-width:450px;
        width:450px;
        h4{
          white-space:nowrap;
          font-size:1.5rem;
          line-height:2rem!important;
          height:2rem!important;
          margin:0;
          padding-left:10%;
          position:relative;
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
        p{
          font-size:1.8rem;
          white-space:nowrap;
          line-height:3rem!important;
          height:3rem!important;
          margin:0;
          padding-left:10%;
          background:linear-gradient(to right,rgba(192,192,192,0.3),rgba(255,255,255,0.6) 10%,rgba(255,255,255,0.6) 90%,rgba(192,192,192,0.3) );
          @include sp(){
            font-size:1.5rem!important;
          }
          span{
            color:brown;
            letter-spacing:0.1rem;
          }
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
        }
      }
      .main{
        height:160px;
        min-width:80px;
        transition:border 0.5s;
        border:2px solid rgba(255,255,255,0.5);
        vertical-align:middle;
        &:hover{
          border:2px solid rgba(255,255,255,1);
          transition:border 0.5s;
          cursor:pointer;
        }
      }
      .sp-menu{
        width:100vw;
        height:50vh;
        left:0;
        right:0;
        top:0;
        position:absolute;
        background-color:#660000;
        position:fixed;
        margin:auto;
        margin-left:0;
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
</style>