<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="1">
        <h1>我的订单</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <h1>我的信息</h1>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="active">
      <mt-tab-item id="1">
        订单
      </mt-tab-item>
      <mt-tab-item id="2">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

  import {Toast, Header, Tabbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui'

  export default {
    name: 'HelloWorld',
    created: function () {

      console.log('app started' + this.$http);


    },
    components: {
      'mt-header': Header,
      'mt-tabbar': Tabbar,
      'mt-tab-item': TabItem,
      'mt-tab-container': TabContainer,
      'mt-tab-container-item': TabContainerItem

    },
    data() {
      return {
        msg: 'Test Ui Page',
        active: "1"
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
