export default {


  //注册媒体事件
  _registerCamera: function () {
    let vm = this;
    let input = document.getElementById("photo_input");


    input.
    input.addEventListener("change", function (e) {
      if (input === null) {
        vm._callback(null);
      } else if (input.files.length > 0) {
        vm._callback(input.files[0]);
      } else {
        vm._callback(null);
      }
    });
  },

  //照片输入值变化后回调
  _callback: "",

  //拍照
  _takePhoto: function (callback) {
    this._callback = callback;
    this.document.getElementById("photo_input").click();
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
