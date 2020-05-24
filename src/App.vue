<template>
  <div id="app">
    <el-container>
      <el-header>
        <define-header></define-header>
      </el-header>
      <router-view>
      </router-view>
    </el-container>
  </div>
</template>

<script>
import defineHeader from './components/header/index.vue'
export default {
  name:'main',
  components:{
    'define-header':defineHeader
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
