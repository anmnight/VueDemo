import axios from 'axios'

export default {

  _baseUrl: "https://api.douban.com",

  /**
   * post 请求
   * @param url 请求url
   * @param date post请求数据
   * @param message esb message
   * @param model esb model
   * @private
   */
  _post: function (url, date, message, model) {

    let fullUrl = this._baseUrl + url;

    //todo 进行header 封装

    return axios.post(fullUrl, date);

  }


}
