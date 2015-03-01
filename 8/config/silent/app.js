var demologger = new DemoLogger();
demologger.set({
'silent = false (default)': function() {
Vue.config.silent = false;

var vm = new Vue({
  el: '#app',
  data: { name: 'nakajmg' }
});
},

'silent = true': function() {
Vue.config.silent = true;

var vm = new Vue({
  el: '#app',
  data: { name: 'nakajmg' }
});
}
});
