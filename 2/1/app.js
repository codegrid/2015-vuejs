var vm = new Vue({
  el: '#app',
  data: {
    text: 'hoge'
  },
  methods: {
    changeText: function(text) {
      this.$data.text = text
    }
  }
});
