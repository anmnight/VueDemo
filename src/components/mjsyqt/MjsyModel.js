import api from './MjsyApi'
import http from '../../base/BaseRest'

export default {

  //获取章节信息
  _getCatalog: function (success) {
    http._get(api._catalogs)
      .then(function (resp) {
        success(resp.data.data);
      })
      .catch(function (err) {
        console.log(err);
      })

  },

  //获取章节内容
  _getContent: function (url, callback) {

    http._get(api._content, {
      url: url
    })
      .then(function (resp) {
        callback(resp.data.data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }
}
