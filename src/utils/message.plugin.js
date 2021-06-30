export default {
  install(app, options) {
    app.config.globalProperties.$message = text => {
      const $el = document.createElement('p');
      $el.classList.add('message');
      $el.innerText = text

      document.body.insertAdjacentElement('beforeend', $el);

      setTimeout(() => {
        $el.classList.add('message--mounted');
      }, 100);
      
      setTimeout(() => {
        $el.classList.add('message--unmount');
        setTimeout(() => {
          $el.remove();
        }, 300);
      }, 4000);
    };
  }
}