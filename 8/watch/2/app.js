var vm = new Vue({
  el: '#app',
  data: {
    obj: {
      property: 0
    }
  },
  ready: function() {
    this.$watch('obj', function(val, old) {
      console.log(this.obj);
    }, true, true)
  },
  methods: {
    setRandomNumber: function() {
      this.obj.property = Math.floor(Math.random() * 100 + 1);
    }
  },
  template:
    '<button v-on="click: setRandomNumber">setRandomNumber</button>'
});
