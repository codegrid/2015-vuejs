var vm = new Vue({
  el: '#app',
  data: {
    users: [
      {'name': 'nakajmg'},
      {'name': 'yomotsu'}
    ]
  },
  methods: {
    _onClick: function(user) {
      alert(user.name);
    }
  },
  template: '<div v-repeat="users"><button v-on="click: _onClick(this)">click</button></div>'
});
