var demologger = new DemoLogger();
demologger.set({
'change prefix': function() {
Vue.config.prefix = 'cg-';

var vm = new Vue({
  el: '#app',
  data: {
    name: 'nakajmg'
  }
});
}
});
