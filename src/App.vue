<template>
  <div id="app">
    <loadingcomponent v-if="loading"></loadingcomponent>
    <TopHeader v-if="!loading"></TopHeader>
      <router-view></router-view>
    <TopFooter v-if="!loading"></TopFooter>
  </div>
</template>

<script>
import loadingcomponent from '@/components/loading/LoadingComponent.vue'
export default {
  name: 'app',
  components:{
    loadingcomponent
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
#app{
  width:100%;
}

</style>
