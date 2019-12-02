<template>

    <header>
        <div class="header-wrapper">
          <div class="header-main">
              <div class="title">
                <h1>福松家</h1>
                <p class="sub">-栃木市、太平山の割烹-</p>
              </div>
              <div class="reservation">
                <h4>ご予約はこちらまで</h4>
                <p class="phonenumber">電話番号:0282-22-1827</p>
              </div>
          </div>
          <div class="menu">
              <ul>
                  <li><img src="@/assets/images/menu/miryoku-menu.png" alt="福松家の魅力"></li>
                  
                  <li><img src="@/assets/images/menu/meibutu-menu.png" alt="太平山名物メニュー"></li>

                  <li><img src="@/assets/images/menu/enkai-menu.png" alt="宴会場メニュー"></li>

                  <li><img src="@/assets/images/menu/access-menu.png" alt="アクセス"></li>
              </ul>
          </div>
        </div>
        <!--
        <div class="header-menu">
        <ul>
            <li><%=link_to("ご挨拶","greeting",:style=>"color:white;",data: {"turbolinks" => false})%></li>
            <li><%=link_to("料理紹介","menu",:style=>"color:white;",data: {"turbolinks" => false})%></li>

        </ul>
        <div class="instagram">
            <a href="https://www.instagram.com/fukumatuya_29028/">Instagram  <i class="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
        </div>


        <div class="reservation-wrapper">

            <h1><%=link_to("福松家",root_path,:style=>"color:white;",data:{"turbolinks"=>false})%></h1>
            <p>ご予約はこちらから</p>
            <p>TEL:0282-22-1827</p>
        </div>


        </div> 
        -->
    </header>

</template>
<script>
export default {
    name:'header',
}
</script>
<style scoped lang="scss"> 
header{
  width:80%;
  min-width:800px;
  height:20vh;
  display:block;
  background-color:black;
  position:relative;
  position:fixed;
  z-index:200;
  font-family:'はんなり';
  color:white;
  .header-wrapper{
    width:100%;
    height:100%;
    display:flex;
    .header-main{
      width:auto;
      margin:auto;
      .title,.reservation{
        width:auto;
      }
      .title{
        display:flex;
        height:3rem;
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
          font-size:2.5rem;
          height:3rem;
          line-height:3rem!important;
          white-space:nowrap;
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
          font-size:2rem;
          white-space:nowrap;
          line-height:2rem;
          height:2rem;
          margin:0;
        }
      }
    }
    .menu{
      width:500px;
      margin:0 auto;
      ul{
        display:flex;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        li{
          flex:auto;
          list-style:none;
          position:relative;
          margin:0;
          padding:0;
        }
      }
      img{
        height:18vh;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        transition:border 0.5s;
        border:2px solid rgba(255,255,255,0.5);
        &:hover{
          border:2px solid rgba(255,255,255,1);
          transition:border 0.5s;
          cursor:pointer;
        }
      }
    }
  }
}

</style>