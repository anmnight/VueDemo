import transform from 'lrz'

export default {
  /**
   * 注册媒体事件
   * @private
   */
  _registerCamera: function () {
    let vm = this;
    let input = document.getElementById("photo_input");


    //todo 选择同张图片不触发回调函数
    input.addEventListener("change", function (e) {
      if (input === null) {
        vm._callback(null);
      } else if (input.files.length > 0) {



        transform(
          input.files[0],
          {
            "quality": vm._quality
          })
          .then(function (rst) {
            vm._callback(rst.file);
          })
          .catch(function (err) {
            vm._callback(null);
          });






      } else {
        vm._callback(null);
      }
    });
  },

  //图片压缩
  _zipImg:function (img,callback) {
    transform(
      input.files[0],
      {
        "quality": vm._quality
      })
      .then(function (rst) {
        vm._callback(rst.file);
      })
      .catch(function (err) {
        vm._callback(null);
      });
  },

  //照片输入值变化后回调
  _callback: "",

  //压缩率
  _quality: "",

  /**
   * 请求拍照，返回照片
   * @param callback 回调，返回file
   * @param quality 压缩质量 0～1
   * @private
   */
  _takePhoto: function (callback, quality) {
    if (quality === null || quality === '') {
      this._quality = 1;
    }
    this._callback = callback;
    this._quality = quality;
    document.getElementById("photo_input").click();
  },

  //获取图片路径
  _getObjectURL: function (file) {
    let url = null;
    if (window.createObjectURL !== undefined) { // basic
      url = window.createObjectURL(file);
    } else if (window.URL !== undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL !== undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
  },


  //获取相机媒体流  safari webkit 11 以前不支持
  _initPhoto: function () {

    let vm = this;
    let mediaDevices = navigator.mediaDevices.getUserMedia({
      audio: false, video: {
        width: 300, height: 300,
        facingMode: {exact: "environment"}
      }
    });

    mediaDevices
      .then(mediaStream => {
        let video = vm.$refs.video;
        video.src = window.URL.createObjectURL(mediaStream);
        video.onloadedmetadata = (e) => {
          video.play()
        };
        vm.video = video;
        vm.track = mediaStream.getTracks()[0]
      })
      .catch(err => {
        console.log('err.message' + err.name)
      })
  },
}
