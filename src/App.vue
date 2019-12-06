<template>
  <div id="app">
    <z-loader v-if="loading"></z-loader>
    <TopHeader v-if="!loading"></TopHeader>
    <div v-bind:class="{ 'wrapper-80':!sp }">
      <router-view></router-view>
    </div>
    <TopFooter v-if="!loading"></TopFooter>
  </div>
</template>

<script>

export default {
  name: 'app',
  data:function(){
    return{
      loading:true,
      sp:false,
      width:window.innerWidth
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
  },
  mounted(){
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
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
#app{
  width:100%;
}
</style>
