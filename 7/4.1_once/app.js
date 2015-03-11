var parent = new Vue({
  el: '#app',
  ready: function() {
    this.$once('test', function() {
      alert('test!!');
    });
  },
  methods: {
    click: function() {
      this.$emit('test');
    }
  },
  template:
    '<button v-on="click: click">click</button>'
});
