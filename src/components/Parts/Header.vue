<template>

    <header>
        <template v-if="sp"> 
          <div class="header-opener" v-on:click="hasMenu">
              <span v-bind:class="{open:!isActive,close:isActive}"></span>
              <span v-bind:class="{open:!isActive,close:isActive}"></span>
              <span v-bind:class="{open:!isActive,close:isActive}"></span>
          </div>
        </template>
        <div class="header-wrapper columns is-mobile is-marginless">
          <template v-if="!isActive || !sp">
            <div class="header-main column is-4-desktop  is-offset-1-desktop">
                <div class="title">
                  <h1>福松家</h1>
                  <p class="sub">-栃木市、太平山の割烹-</p>
                </div>
                <div class="reservation ">
                  <h4>ご予約はこちらまで</h4>
                  <p class="phonenumber">電話番号:0282-22-1827</p>
                </div>
                <div class="sub-menu" v-if="sp">
                  <ul class="columns is-mobile">
                    <router-link to="/dinner" tag="li" class="column is-6">メニュー</router-link>
                    <li class="column is-6"><a href="https://www.instagram.com/fukumatuya_29028/">ギャラリー</a></li>
                  </ul>
                </div>
            </div>
          </template>
          <template >
            <div class="menu column is-5-desktop  is-12-mobile is-paddingless">
                <ul v-if="!sp" class="desktop-menu">
                    <router-link to="/" tag="li"><img src="@/assets/images/menu/miryoku-menu.png" alt="福松家の魅力"></router-link>
                    
                    <router-link to="/speciality" tag="li"><img src="@/assets/images/menu/meibutu-menu.png" alt="太平山名物メニュー"></router-link>

                    <router-link to="/dinner" tag="li"><img src="@/assets/images/menu/enkai-menu.png" alt="宴会場メニュー"></router-link>

                    <router-link to="/access" tag="li"><img src="@/assets/images/menu/access-menu.png" alt="アクセス"></router-link>
                </ul>
                <ul v-if="sp && isActive" class="sp-menu">
                    <router-link to="/" tag="li"><p>福松家の魅力</p></router-link>
                    
                    <router-link to="/speciality" tag="li"><p>太平山の名物メニュー</p></router-link>

                    <router-link to="/dinner" tag="li"><p>宴会場メニュー</p></router-link>

                    <router-link to="/access" tag="li"><p>アクセス</p></router-link>
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
  height:150px;
  margin:0 auto;
  background-color:#f6efdf;
  z-index:301;
  font-family:'はんなり';
  color:black;
  border-bottom:6px solid brown;
  border-top:6px solid brown;
  background-image: url("https://www.transparenttextures.com/patterns/black-thread-light.png");
  @include md(){
    min-width:800px;
  }
  .header-wrapper{
    width:100%;
    display:flex;
    .header-main{
      margin:auto;
      padding:0 0 0 50px!important;
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
        }
      }
      .reservation{
        h4{
          white-space:nowrap;
          font-size:1.2rem;
          line-height:2rem;
          height:2rem;
          margin:0;
        }
        p{
          font-size:1.5rem;
          white-space:nowrap;
          line-height:2rem;
          height:2rem;
          margin:0;
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
      padding-left:50px!important;
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
      img{
        height:138px;
        min-width:80px;
        transition:border 0.5s;
        border:2px solid rgba(255,255,255,0.5);
        &:hover{
          border:2px solid rgba(255,255,255,1);
          transition:border 0.5s;
          cursor:pointer;
        }
      }
      .sp-menu{
        width:100vw;
        height:300px;
        left:0;
        right:0;
        top:0;
        position:absolute;
        background-color:black;
        position:fixed;
        margin:auto;
        z-index:500;
        li{
          height:75px;
          line-height:75px;
           &:hover{
            cursor:pointer;
          }
        }
        p{
          text-align:center;
          color:white;
        }
      }
    }
  }
}

</style>