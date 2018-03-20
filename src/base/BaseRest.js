import axios from 'axios'

export default {

  _douBasebaseUrl: "https://api.douban.com",

  _mjsyBasebaseUrl: "http://api.zeusqwer.top/mjsyqt",

  _post: function (url, date) {

    let fullUrl = this._mjsyBasebaseUrl + url;

    //todo 进行header 封装

    return axios.post(fullUrl, date);

  },


  _get: function (url, data) {
    let fullUrl = this._mjsyBasebaseUrl + url;

    return axios.get(fullUrl, {
      params: data
    })
  }


}
