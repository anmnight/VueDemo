<template>

  <div id="app">

    <mt-header fixed title="章节列表"></mt-header>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"></router-view>


    <input id="photo_input" type="file" accept="image/*" capture="camera" hidden>
  </div>
</template>

<script>

  import database from './base/BaseDB'

  export default {
    name: 'App',
    data() {
      return {}
    },
    created: function () {
      //注册数据库
      let open =database._openDB();

      open.onupgradeneeded = function (e) {
        let db = e.target.result;
        db.createObjectStore('catalogs',{keyPath:'url',autoIncrement:true});
        db.close();
      };

    },

    mounted: function () {

      //注册相机
      this.$devices._registerCamera();

    },

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
