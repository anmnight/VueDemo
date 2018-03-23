<template>

  <transition name="custom-classes-transition"
              enter-active-class="animated slideInLeft">
            <div>

              <mt-cell v-for="(catalog,index) in catalogs" >
                <div @click="_goContent(index)">
                  {{catalog.name}}
                </div>
              </mt-cell>

            </div>
    </transition>
</template>

<script>

  import model from './MjsyModel'
  import dao from './model/CatalogsDao'
  import {Toast, Header, Tabbar, TabItem, TabContainer, TabContainerItem, Button, Indicator, Cell} from 'mint-ui'

  export default {
    name: 'HelloWorld',

    //数据处理
    data() {
      return {
        msg: 'Test Ui Page',
        catalogs: ''
      }
    },

    mounted : function () {
      let vm = this;
      dao._getAllCatalogs(function (catalogs) {
        if (catalogs.length===0){
          model._getCatalog(function (catalogs) {
            dao._saveCatalogs(catalogs);
            if(vm.catalogs===''||vm.catalogs===undefined){
              vm.catalogs = catalogs;
            }
          })
        }else {
          if(vm.catalogs===''||vm.catalogs===undefined){
            vm.catalogs = catalogs;
          }
        }
      });

    },
    methods: {
      _goContent: function (index) {
        let vm = this;
        this.$router.push({
          name: 'content',
          params: {catalog: vm.catalogs[index]}
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  li {
    display: inline-block;
    width: 100%;
    height: 30px;
  }

</style>
