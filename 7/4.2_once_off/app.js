var parent = new Vue({
  el: '#app',
  ready: function() {
    this.$on('test', function() {
      alert('test!!');
      this.$off('test');
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
