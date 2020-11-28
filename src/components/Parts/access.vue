<template>
<div class="wrap">
    <h4>【アクセス】</h4>
    <div class="flex-wrap">
        <div class="map-wrapper">
            <div class="map">
                <div class="bus-wrapper">
                    <img class="train icon" src="@/assets/images/train_icon.svg" alt="電車でお越しの方">
                    <img class="vector icon" src="@/assets/images/vector_icon.svg" alt="矢印">
                    <img class="bus icon" src="@/assets/images/bus_icon.svg" alt="バスでお越しの方">
                    <p style="font-size:1.5rem!important; height:3rem!important; line-height:3rem!important;">公共交通機関をご利用のお方</p>
                    <p>栃木駅</p>
                    <p>↓</p>
                    <p>バス</p>
                    <p>(関東自動車・國學院前方面（倭町経由）)</p>
                    <p>↓</p>
                    <p>國學院前下車（終点）</p>
                    <p>↓</p>
                    <p>県道269号線を太平山方面へ直進</p>
                    <p style="margin-top:1.5rem!important; font-size:1.2rem!important">所要時間&nbsp;:&nbsp;栃木駅から20分ほど</p>
                </div>
                <div class="car-wrapper">
                    <img class="car icon" src="@/assets/images/car_icon.svg" alt="車でお越しの方">
                    <p style="font-size:1.5rem!important; height:3rem!important; line-height:3rem!important;">自動車でお越しのお方</p>
                    <p>東北自動車道&nbsp;栃木I.Cを下車</p>
                    <p>栃木方面に出る</p>
                    <p>↓</p>
                    <p>県道309号線(栃木バイパス)を南下する</p>
                    <p>↓</p>
                    <p>片柳町5丁目の交差点を右折<span v-if="!sp">（目印:マクドナルド）</span></p>
                    <p v-if="sp">（目印&nbsp;:&nbsp;マクドナルド）</p>
                    <p>↓</p>
                    <p>県道269号に入り、直進</p>
                    <p style="margin-top:1.5rem!important; font-size:1.2rem!important">所要時間&nbsp;:&nbsp;栃木I.Cから20分ほど</p>
                </div>
            </div>
        </div>
        <div class="googlemap">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.90404739911!2d139.6964836156249!3d36.36310299988021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f4764d5fca5fb%3A0xe7a985618f29356f!2z56aP5p2-5a62!5e0!3m2!1sja!2sjp!4v1575109150522!5m2!1sja!2sjp" width="500" height="500" frameborder="0"  allowfullscreen=""></iframe>
        </div>
    </div>
</div>
</template>
<script>
export default {

    data:function(){
        return{
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
    width:80%;
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
        margin-left:10px;
        margin-bottom:10px;
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
    justify-content:space-between;
    width:100%;
    @include lg(){
        display:flex;
    }
    @include md(){
        display:flex;
    }
    @include sp(){
        width:90%;
        margin:auto;
    }
    .bus-wrapper,.car-wrapper{
        border: 2px solid brown;
        position:relative;
        height:auto;
        padding-top:50px;
        padding-bottom:30px;
        min-width:340px;
        width:45%;
        @include lg(){
            min-width:380px;
        }
        @include md(){
            min-width:380px;
        }
        @include sp(){
            width:90%;
            margin:20px auto;
        }
        p{
            font-size:1rem;
            @include lg(){
                padding-left:10px;
            }
            @include md(){
                padding-left:10px;
            }
        }
    }


}
.googlemap{
    padding:12px;
    flex:auto;
    height:500px;
    iframe{
        width:100%;
        height:500px;
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
.flex-wrap{
    position:relative;
    margin-bottom:10px;
    @include sp(){
        width:100%;
        margin:0;
    }
    .map-wrapper{
        position:relative;
        z-index:499;
        @include lg(){
            margin-right:10px;
            min-width:400px;
        }
        @include md(){
            margin-right:10px;
            min-width:400px;
        }  
        @include sp(){
            width:100%;
        }
    }
    .googlemap{
        position:relative;
        z-index:500;
        @include lg(){
            min-width:400px;
            
        }
        @include md(){
            min-width:400px;
            
        }
        @include sp(){
            min-width:100%;
        }
    }
}
</style>