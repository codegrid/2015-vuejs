Vue.partial('my-partial', 'name: {{name}}');

var vm = new Vue({
  el: '#app',
  data: { name: 'nakajmg' },
  template:
    '<div>{{> my-partial}}</div>'
});
