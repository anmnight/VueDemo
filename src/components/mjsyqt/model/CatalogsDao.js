import database from '@/base/BaseDB'

export default {

  _saveCatalogs:function (catalogs) {

    let open = database._openDB();
    open.onsuccess = function () {
      let db = open.result;
      let tx = db.transaction('Catalogs','readwrite');
      let store = tx.objectStore('Catalogs');

      console.log(store);

      store.put(catalogs);

      tx.oncomplete = function () {
        db.close();
      }
    };
  }
  ,
  _getAllCatalogs:function (callback) {
    let open = this.$database._openDB();
    open.onsuccess = function () {
      let db = open.result;
      let tx = db.transaction('Catalogs','readwrite');
      let store = tx.objectStore('Catalogs');

      callback(store.all());

      tx.oncomplete = function () {
        db.close();
      }
    };
  }
}
