Vue.partial('register', '<h1>ログインしていません</h1><p><a href="#">登録画面へ</a></p><p><button v-on="click: login">ログイン</button></p>');
Vue.partial('mypage', '<h1>ログインしています</h1><p>user: {{name}}</p><p><a href="#">マイページへ</a></p><p><button v-on="click: logout">ログアウト</button></p>');

var vm = new Vue({
  el: '#app',
  data: {
    name: 'nakajmg',
    partialId: 'register'
  },
  template:
    '<template v-partial="{{partialId}}"></template>',
  methods: {
    login: function() {
      this.partialId = 'mypage';
    },
    logout: function() {
      this.partialId = 'register';
    }
  }
});
