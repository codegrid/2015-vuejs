var vm = new Vue({
  el: '#app',
  data: {name: 'nakajmg'},
  template: '{{name}}',
  events: {
    'hook:created': function() {
      console.log('created');
    },
    'hook:compiled': '_onCompiled'
  },
  methods: {
    _onCompiled: function() {
      console.log('compiled');
    }
  }
});
