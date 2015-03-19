var vm = new Vue({
  el: '#app',  
  data: {
    colors: [
      {color: 'red'}, {color: 'blue'}, {color: 'green'}
    ]
  },
  template:
    '<div v-repeat="colors" v-ref="colors">{{color}}</div>'
});

vm.$.colors[0].$log();

vm.$.colors[1].$log();

vm.$.colors[2].$log();
