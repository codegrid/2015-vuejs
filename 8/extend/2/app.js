var App = Vue.extend({
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

var App2 = App.extend({
  template:
  '<button v-on="click: hello">Hello</button>'
});

var app = new App2({
  el: '#app',
  data: {
    message: 'hello hello'
  }
});
