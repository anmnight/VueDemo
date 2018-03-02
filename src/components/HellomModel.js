import api from '../components/hellowapi'
import http from '../base/BaseRest'

export default {

  _getTest: function () {


    http._post(api._us_box,"","","")
      .then(function (resp) {

        console.log(resp)
      })
      .catch(function (error) {
        console.error(error);
      });


    // new Promise(function (resolve, reject) {
    //   axios.get(api._baseUrl + api._us_box)
    //     .then(function (resp) {
    //       resolve(resp);
    //     })
    //     .catch(function (exception) {
    //       reject(exception);
    //     });
    // })
    //   .then(function (resp) {
    //
    //     console.log(resp);
    //
    //     return new Promise(function (resolve, reject) {
    //
    //     })
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });


  }

}
