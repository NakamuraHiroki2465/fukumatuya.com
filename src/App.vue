<template>
  <div id="app">
    <z-loader v-if="loading"></z-loader>
    <TopHeader v-if="!loading"></TopHeader>
    <router-view></router-view>
    <TopFooter v-if="!loading"></TopFooter>
  </div>
</template>

<script>


export default {
  name: 'app',
  data:function(){
    return{
      loading:true
    }
  },
  mounted(){
    this.loading=false
  }
}
</script>

<style scoped lang="scss">
#app{
  main{
    background-color:rgba(0,0,0,1);
    background-size:100% auto;
    background-attachment:fixed;
    height:auto;
    position:relative;
    z-index:1;
    width:100vw;
    color:#fff;
    font-family:'07やさしさアンチック';
  }
}
</style>
