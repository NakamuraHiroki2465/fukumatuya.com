<template>
  <div id="app">
    <z-loader v-if="loading"></z-loader>
    <TopHeader v-if="!loading"></TopHeader>
    <div class="wrapper-80">
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
      loading:true
    }
  },
  mounted(){
    this.loading=false
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
#app{
  width:100%;
}
</style>
