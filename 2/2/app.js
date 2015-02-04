var vm = new Vue({
  el: '#app',
  data: {},
  methods: {
    upperText: function() {
      this.inputText = this.inputText.toUpperCase();
    },
    lowerText: function() {
      this.inputText = this.inputText.toLowerCase();
    }
  }
});
