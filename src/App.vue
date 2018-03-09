<template>
  <div id="app">
    <router-view/>
    <input id="photo_input" type="file" accept="image/*" capture="camera" hidden>
  </div>
</template>

<script>
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
