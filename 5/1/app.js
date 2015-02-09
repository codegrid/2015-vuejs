var vm = new Vue({
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
