<template>
    <footer id="menu-footer">
        <div class="footer-wrapper">
            <h1>福松家</h1>
            <p>〒328-0054</p>
            <p>栃木県栃木市平井町681番地</p>
            <p class="Tel">090-1209-9777</p>
        </div>
        <div class="footer-menu">
          <h3>メニュー</h3>
          <ul>
            <router-link tag="li" v-for="menu in menus" :key="menu.key"  :to="menu.url">
              <a>{{menu.text}}</a>
            </router-link>
          </ul>
        </div>
        <div class="flex-wrap">
          <div class="map-wrapper">
            <div class="map">
              <h4>アクセス</h4>
              <p v-for="(text,index) in access.texts" v-text="text" :key="index"></p>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.90404739911!2d139.6964836156249!3d36.36310299988021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f4764d5fca5fb%3A0xe7a985618f29356f!2z56aP5p2-5a62!5e0!3m2!1sja!2sjp!4v1575109150522!5m2!1sja!2sjp" width="300" height="200" frameborder="0" :style="iframeStyle" allowfullscreen=""></iframe>
        </div>
        
    </footer>
</template>
<script>
export default {
    data:function(){
        return{
            iframeStyle:{
/*                 border:'0',
                'position':'absolute',
                top:'50%',
                right:'30px',
                'transform':'translate(-10px,-50%)', */
                'display':'block'
            },
            access:{
              texts:[
                "バス：JR・東武　栃木駅発（関東自動車）",
                "→　國學院前方面 (倭町経由)",
                "県道269号線を太平山方面へ直進",
                "所要時間：約20分"
              ]
            },
            menus:[
              {
                text:"福松家について",
                key:1,
                url:"/",
              },
              {
                text:"宴会料理のメニュー・料金",
                key:2,
                url:"/dinner",
              },
              {
                text:"ご予約・お問い合わせはこちら",
                key:3,
                url:"/form",
              },
              {
                text:"太平山の観光はこちら",
                key:4,
                url:"/tourisminfo"
              },
              {
                text:"採用情報",
                key:5,
                url:"/recruit"
              }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
footer{
  width:100vw;
  left:-10vw;
  min-width:800px;
  height:30vh;
  z-index:300;
  background-color:rgba(0,0,0,1);
  color:white;
  position:relative;
  top:40vh;
  display:flex;
  .footer-wrapper,.footer-menu,.flex-wrap{
    white-space:nowrap;
    flex:auto;
  }
  .footer-wrapper{
    font-family:'はんなり';
    padding:50px 5%;
    h1,p{
      margin:0;
    }
    h1{
      font-size:2rem;
      height:2.5rem;
      line-height:2.5rem;
    }
    p{
      font-size:1.2rem;
      height:2rem;
      line-height:2rem;
    }
  }
  .footer-menu{
    padding:50px 5%;
    h3{
      margin:0;
      margin-bottom:10px;
    }
    ul{
      margin:0;
      padding:0;
      li{
        list-style:none;
        cursor:pointer;
        a{
          color:white;
          text-decoration:none;
        }
      }
    }
  }
  .flex-wrap{
    display:flex;
    padding:50px 0;
  }
  .map-wrapper{
    width:400px;
    height:25vh;
    h4,p{
      margin:0;
      white-space:pre-wrap;
    }
    h4{
      margin-bottom:10px;
    }
    p{
      font-size:1rem;
      line-height:1.4rem;
      height:1.4rem;
    }

  }
}
</style>