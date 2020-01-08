<script>
export default {
    data:function(){
        return{
            sp:true,
            loading:true,
            width:window.innnerWidth
        }
    },
    mounted(){
        this.width = window.innerWidth;
        this.loading=false
        if (this.width < 769 || navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
          this.sp = true
        }else{
          this.sp = false
        }
        window.addEventListener('resize',this.handleResize)
    },
    beforeDestroy:function(){
        window.removeEventListener('resize',this.handleResize)
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
      smtel:function(telno){
          if((navigator.userAgent.indexOf("iPhone") > 0 ) || navigator.userAgent.indexOf("Android") > 0 ){
            document.write('<a href="tel:'+telno+'">'+telno+'</a>');
          }else{
            document.write(telno);
          }
      },
    }
}
</script>