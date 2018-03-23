<template>

  <transition name="custom-classes-transition"
              enter-active-class="animated slideInRight"
              leave-active-class="animated slideInLeft">
    <div>
      <mt-header fixed title="章节内容">
        <router-link to="/" slot="left">
          <mt-button  style="color: white;" @click="handleClose">返回</mt-button>
        </router-link>
      </mt-header>

      <div style="font-size: larger;">
        {{content}}
      </div>
    </div>
  </transition>

</template>

<script>

  import {Toast, Header, Tabbar, TabItem, TabContainer, TabContainerItem, Button, Indicator, Cell} from 'mint-ui'
  import model from './MjsyModel'

  export default {
    name: 'HelloWorld',

    //数据处理
    data() {
      return {
        msg: 'Test Ui Page',
        content: ''
      }
    },

    created: function () {
      let vm = this;

      let url = this.$route.params.catalog.url;

      Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
      });
      model._getContent(url,
        function (data) {
          Indicator.close();
          vm.content = data.content;
        });


    },
    methods: {
      handleClose:function () {
        this.$router.go(-1);
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


</style>
