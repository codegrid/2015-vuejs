Vue.component('my-component', {
  paramAttributes: ["color"],
  ready: function() {
    this.$el.style.color = this.color;
  },
  template: '{{color}}'
});

var vm = new Vue({
  el: '#app',
  data: {
    color1: 'blue',
    color2: 'red'
  },
  template:
    '<div v-component="my-component" color={{color1}}></div>' +
    '<div v-component="my-component" color={{color2}}></div>'
});
