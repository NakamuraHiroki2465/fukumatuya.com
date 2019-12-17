<template>
<div class="wrap">
    <h4>【アクセス】</h4>
    <div class="flex-wrap columns ">
        <div class="map-wrapper column is-6 is-6-tablet ">
            <div class="map">
                <div class="bus-wrapper">
                    <img class="train icon" src="@/assets/images/train_icon.svg" alt="電車でお越しの方">
                    <img class="vector icon" src="@/assets/images/vector_icon.svg" alt="矢印">
                    <img class="bus icon" src="@/assets/images/bus_icon.svg" alt="バスでお越しの方">
                    <p  v-for="(bus,index) in access.busInfo" v-text="bus" :key="index"></p>
                </div>
                <div class="car-wrapper">
                    <img class="car icon" src="@/assets/images/car_icon.svg" alt="車でお越しの方">
                    <p  v-for="(car,index) in access.carInfo" :key="index" class="prewrap" v-text="car"></p>
                </div>
            </div>
        </div>
        <div class="googlemap column is-6  is-5-tablet">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.90404739911!2d139.6964836156249!3d36.36310299988021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f4764d5fca5fb%3A0xe7a985618f29356f!2z56aP5p2-5a62!5e0!3m2!1sja!2sjp!4v1575109150522!5m2!1sja!2sjp" width="500" height="500" frameborder="0"  allowfullscreen=""></iframe>
        </div>
    </div>
</div>
</template>
<script>
export default {

    data:function(){
        return{
            access:{
              busInfo:[
                "バス：JR・東武　栃木駅発（関東自動車）",
                "→　國學院前方面 (倭町経由)",
                "→　県道269号線を太平山方面へ直進",
                "所要時間：約20分"
              ],
              carInfo:[
                  "車でお越しの方: 東北自動車道 栃木I.Cを下車、",
                  "県道309号線（栃木バイパス）を南下して",
                  "片柳町5丁目の交差点（目印:マクドナルド）を右折"
              ]
            },
            is60:false
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/assets/variables.scss';

h4{
    font-size:1.7rem;
    font-weight:bold;
    display:block;
    @include lg(){
        margin-bottom:10px;
    }
    @include sp(){
        text-align:center;
    }
}
.wrap{
    width:60%;
    margin:auto;
    font-weight:bold;
    margin: 50px auto 0 auto;
    color:black;
    @include md(){
        width:80%;
        min-width:840px;
    }
    @include sp(){
        width:100%;
    }
    .map-wrapper{
    white-space:nowrap;
    padding-bottom:10px;
    @include sp(){
        width:90%;
        margin:auto;
    }
    h4,p{
      margin:0;
      @include sp(){
          text-align:center;
      }
    }

    p{
      font-size:1.2rem;
      line-height:1.2rem;
      height:1.2rem;
      @include lg(){
        line-height:2rem;
        height:2rem;
      }
    }
  }
}
.map{
    .bus-wrapper,.car-wrapper{
        border: 2px solid brown;
        position:relative;
        height:calc(auto + 150px);
        padding-top:50px;
        padding-bottom:30px;
        @include lg(){
            min-width:400px;
        }
        @include md(){
            min-width:400px;
        }
        p{
            font-size:1rem;
        }
    }
    .car-wrapper{
        margin-top:10px;
    }

}
.googlemap{
    width:100%;
    iframe{
        width:100%;
        height:300px;
        @include lg(){
            height:100%;
        }
    }
}
.prewrap{
    white-space:pre-wrap;
}
.icon{
    border:none!important;
    position:absolute;
    left:50%;
    top:30px;
    transform:translate(-50%,-50%);
}
.train{
    left:calc(50% - 50px);
}
.vector{
    left:50%;
}
.bus{
    left:calc(50% + 50px);
}
</style>