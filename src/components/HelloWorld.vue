<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <!--<video ref="video"></video>-->

    <input type="file" accept="image/*" capture="camera">

  </div>
</template>

<script>

  import {Toast, Header, Tabbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui'

  export default {
    name: 'HelloWorld',
    created: function () {

      let vm = this;

      let file = vm.files;

      // let url = vm.getObjectURL();
      //
      // console.log(url);

      this.$watch()


      // webRTC
      // navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 300, height: 400 } })
      //   .then(mediaStream=>{
      //     let video = vm.$refs.video;
      //     video.src = window.URL.createObjectURL(mediaStream);
      //     video.onloadedmetadata = (e) => {
      //       video.play()
      //     };
      //   })
      //   .catch(err=>{
      //   console.log(err);
      // });


    },
    components: {
      'mt-header': Header,
      'mt-tabbar': Tabbar,
      'mt-tab-item': TabItem,
      'mt-tab-container': TabContainer,
      'mt-tab-container-item': TabContainerItem

    },
    methods:{
      getObjectURL:function (file) {
        let url = null;
        if (window.createObjectURL !== undefined) { // basic
          url = window.createObjectURL(file);
        } else if (window.URL !== undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL !== undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      }
    },
    data() {
      return {
        msg: 'Test Ui Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
