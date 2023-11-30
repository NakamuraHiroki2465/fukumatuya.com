<template>
    <footer id="menu-footer is">
      <div class="columns is-multiline flex">
        <div class="footer-wrapper column is-3 is-offset-2 is-12-mobile has-text-centered-mobile">
            <h1>福松家</h1>
            <p>〒328-0054</p>
            <p>栃木県栃木市平井町681番地</p>
            <p class="Tel">0282-22-1827</p>
            <a  href="https://www.instagram.com/fukumatuya_29028/">
              Instagram
              <img class='inline' src="@/assets/images/instagram.svg" alt="インスタグラム">
            </a>
        </div>
        <div class="footer-menu column is-3 is-12-mobile has-text-centered-mobile">
          <h3>【メニュー】</h3>
          <ul>
            <router-link tag="li" v-for="menu in menus" :key="menu.key"  :to="menu.url">
              <a>{{menu.text}}</a>
            </router-link>
          </ul>
        </div>
        
      </div>       
    </footer>
</template>
<script>
export default {
    data:function(){
        return{
            menus:[
              {
                text:"福松家について",
                key:1,
                url:"/",
              },
              {
                text:"会席料理について",
                key:2,
                url:"/dinner",
              },
              {
                text:"茶屋について",
                key:3,
                url:"/lunch"
              },
              {
                text:"ご予約・お問い合わせはこちら",
                key:4,
                url:"/contact",
              }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
@import "@/assets/variables.scss";


footer{
  width:100%;
  height:auto;
  z-index:300;
  background-color:rgba(0,0,0,1);
  color:white;
  position:relative;
  top:50px;
  overflow:hidden;
  .flex{
    width:100%;
    display:flex;
  }
  .footer-wrapper,.footer-menu,.flex-wrap{
    white-space:nowrap;
    font-family:'はんなり'!important;
    padding:30px 0 5% 5%!important;
  }
  .footer-wrapper{
    font-family:'はんなり';
    padding:50px 5%;
    h1,p{
      margin:0;
    }
    h1{
      font-size:2rem;
      margin-bottom:20px;
    }
    p{
      font-size:1rem;
      line-height:1.8;
    }
    a{
      height:3rem!important;
      line-height:3rem!important;
      font-size:1.2rem;
      color:white;
      img{
        height:2rem;
        vertical-align:middle;
      }
    }
  }
  .footer-menu{
    padding:50px 5%;
    h3{
      margin:20px 0 10px 0;
      margin-bottom:10px;
      font-size:1.2rem!important;
    }
    ul{
      margin:0;
      padding:0;
      li{
        list-style:none;
        cursor:pointer;
        a{
          font-size:1rem;
          color:white;
          text-decoration:none;
        }
      }
    }
  }
  .flex-wrap{
    padding:50px 0;
    @include lg (){
      display:flex;
    }
    iframe{
      @include lg(){
        width:300px;
        height:200px;
      }
    }
  }
  .map-wrapper{
    white-space:nowrap;
    padding-bottom:10px;
    h4,p{
      margin:0;
    }
    h4{
      @include lg(){
        margin-bottom:10px;
      }
    }
    p{
      font-size:1rem;
      line-height:1.2rem;
      height:1.2rem;
      @include lg(){
        line-height:2rem;
        height:2rem;
      }
    }

  }
}

</style>