var vm = new Vue({
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
