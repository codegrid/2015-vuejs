var vm = new Vue({
  el: '#app',
  data: {
    users: [
      {'name': 'nakajmg'},
      {'name': 'yomotsu'}
    ]
  },
  methods: {
    _onClick: function(e, message) {
      alert(message); //=> message!!
      alert(e.targetVM.name);   //=> 2つ目のボタンがクリックされた場合 yomotsu
    }
  },
  template: '<div v-repeat="users"><button v-on="click: _onClick($event, \'message!!\')">click</button></div>'
});
