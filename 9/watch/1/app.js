var vm = new Vue({
  el: '#app',
  data: {
    number: 0
  },
  watch: {
    'number': function(val, old) {
      console.log('new: ' + val + ', old: ' + old);
    }
  },
  methods: {
    setRandomNumber: function() {
      this.number = Math.floor(Math.random() * 100 + 1);
    }
  },
  template:
    '<button v-on="click: setRandomNumber">setRandomNumber</button>'
});
