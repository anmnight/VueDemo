<template>
  <div>
    <mt-header fixed title="章节列表"></mt-header>
    <!--<video ref="video"></video>-->

    <!--<mt-cell v-for="(catalog,index) in catalogs" @click="_goContent(index)">-->
    <!--{{catalog.name}}-->
    <!--</mt-cell>-->

    <li v-for="(catalog,index) in catalogs" @click="_goContent(index)">
      {{catalog.name}}
    </li>

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
        catalogs: ''
      }
    },

    created: function () {

      console.log('created..');


//      let vm = this;

//      Indicator.open({
//        text: 'Loading...',
//        spinnerType: 'fading-circle'
//      });
//      model._getCatalog(function (data) {
//        console.log(data);
//        Indicator.close();
//        vm.catalogs = data;
//      });






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
    methods: {
      _goContent: function (index) {

        let vm = this;

        this.$router.push({
          name: 'content',
          params: {catalog:vm.catalogs[index]}
        });
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
    width: 100%;
    height: 30px;
  }

</style>
