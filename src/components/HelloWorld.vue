<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <!--<video ref="video"></video>-->


    <mt-button class="photo_btn" v-on:click="_takePhoto" type="danger">拍照</mt-button>

  </div>
</template>

<script>

  import {Toast, Header, Tabbar, TabItem, TabContainer, TabContainerItem, Button} from 'mint-ui'
  import model from './HellomModel'
  import camera from '../base/BaseDevice'
  import lrz from 'lrz'
  import saver from 'file-saver'


  export default {
    name: 'HelloWorld',

    //数据处理
    data() {
      return {
        msg: 'Test Ui Page'
      }
    },

    created: function () {

//      初始数据
//      路由测试
//      this.$router.go("test");
//      this._initPhoto();


    },
    components: {
      'mt-header': Header,
      'mt-tabbar': Tabbar,
      'mt-tab-item': TabItem,
      'mt-tab-container': TabContainer,
      'mt-tab-container-item': TabContainerItem,
      'mt-button': Button

    },
    methods: {

      _takePhoto: function () {

        let vm = this;

        vm.$devices._takePhoto(function (photo) {

//          let url = vm.$devices._getObjectURL(photo);
//
//          console.log("url : " + url);

          saver.saveAs(photo,"pretty image.jpg");


        }, 0.2);


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .photo_btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

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
