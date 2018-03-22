<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <input id="photo_input" type="file" accept="image/*" capture="camera" hidden>
  </div>
</template>

<script>

  import database from '@/base/BaseDB'

  export default {
    name: 'App',
    data() {
      return {}
    },
    created: function () {


    },

    mounted: function () {

      //注册相机
      this.$devices._registerCamera();

      //注册数据库
      let open = database._openDB();

//      open.onupgradeneeded = function () {
//        console.log('version changed..');
//      };

//      database._onDbVersionChanged()= function () {
//
//      }

      let changed = database._onDbVersionChanged();

      changed = function () {

      }


    },

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
