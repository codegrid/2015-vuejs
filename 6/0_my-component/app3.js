Vue.component('component', {
  data: function(){
    return {
      message: 'Hello!!'
    }
  },
  methods: {
    hello: function() {
      alert(this.message);
    }
  },
  template:
  '<button v-on="click: hello">Hello</button>'
});

var vm = new Vue({
  el: '#app'
});
