var vm = new Vue({
  el: '#app',
  methods: {
    _onClick: function(e) {
      alert(e.target.tagName); //=> "BUTTON"
    }
  }
});
