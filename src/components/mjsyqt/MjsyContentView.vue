<template>
  <div>
    <mt-header fixed title="章节内容">
      <router-link to="/" slot="left">
        <mt-button  style="color: white;">返回</mt-button>
      </router-link>
    </mt-header>

    <div>
      {{content}}
    </div>

  </div>
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
    components: {
      'mt-header': Header,
      'mt-tabbar': Tabbar,
      'mt-tab-item': TabItem,
      'mt-tab-container': TabContainer,
      'mt-tab-container-item': TabContainerItem,
      'mt-button': Button,
      'mt-cell': Cell

    },
    methods: {}
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
