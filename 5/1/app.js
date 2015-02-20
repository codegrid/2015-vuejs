var vm = new Vue({
  el: '#app',
  data: {name: 'nakajmg'},
  template: '{{name}}',
  created: function() {
    console.log('created');
  },
  compiled: function() {
    console.log('compiled');
  },
  ready: function() {
    console.log('ready');
  }
});
