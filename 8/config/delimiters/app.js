var demologger = new DemoLogger();
demologger.set({
'change delimiters': function() {
Vue.config.delimiters = ['(%', '%)'];

var vm = new Vue({
  el: '#app',
  data: {
    name: 'nakajmg'
  }
});
}
});
