Vue.partial('my-partial', '<h1>my-partial</h1><p>My name is {{name}}</p>');

var vm = new Vue({
  el: '#app',
  data: { name: 'nakajmg' },
  template:
    '<div v-partial="my-partial"></div>'
});
