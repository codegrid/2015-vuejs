var demologger = new DemoLogger();
demologger.set({
'stop interpolate': function() {
Vue.config.interpolate = false;

var vm = new Vue({
  el: '#app',
  data: {
    name: 'nakajmg'
  }
});
}
});
