Vue.partial('my-partial', '<h1>my-partial</h1><p>My name is {{name}}</p>');

var vm = new Vue({
  el: '#app',
  data: { name: 'nakajmg' },
  template:
    '<template v-partial="my-partial"></template>'
});
