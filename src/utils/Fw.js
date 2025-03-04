(function () {
  let $Fw = {}
  $Fw = {
    isMobile() {
      // 获取浏览器的userAgent属性
      let userAgent = navigator.userAgent;
      // 使用正则表达式判断userAgent中是否包含"Mobile"字符串
      return /Mobile/i.test(userAgent);
    }
  }
  window.$Fw = $Fw;
})();
