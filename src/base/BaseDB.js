export default {
  db:{
    version :9,
    name:'doumovie',
    open:undefined

  },


  _openDB:function () {

    let vm = this;
    let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    vm.db.open = indexedDB.open(vm.db.name,vm.db.version);
    return vm.db.open;
  },

  _closeDB:function () {
    this.db.open.close();
  },

  _onDbVersionChanged:function (callback) {
     this.db.open.onupgradeneeded = function (e) {
       callback(e);
     }
  }



}





