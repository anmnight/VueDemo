import database from '@/base/BaseDB'

export default {

  _saveCatalogs:function (catalogs) {

    let open = database._openDB();
    open.onsuccess = function () {
      let db = open.result;
      let tx = db.transaction('catalogs','readwrite');
      let store = tx.objectStore('catalogs');

      for (let i = 0; i < catalogs.length; i++) {
        store.add(catalogs[i]);
      }

      tx.oncomplete = function () {
        db.close();
      }
    };
  }
  ,
  _getAllCatalogs:function (callback) {
    let open = database._openDB();
    open.onsuccess = function () {
      let db = open.result;
      let tx = db.transaction('catalogs','readwrite');
      let store = tx.objectStore('catalogs');

      let request = store.getAll();
      request.onsuccess = function (e) {
        callback(e.target.result);
      };

      tx.oncomplete = function () {
        db.close();
      }
    };
  }
}
